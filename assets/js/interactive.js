/* Interactive curriculum: answer boxes, quizzes, submissions, dashboard.
 * Drafts and scores persist in localStorage (this browser only).
 * The permanent log is the GitHub repo: submissions become issues,
 * graded feedback gets written back into the module pages. */
(function () {
  'use strict';

  var REPO = 'jacodantus-oss/GRE-Prep'; // <-- CHANGE THIS

  var LS = {
    get: function (k, fallback) {
      try {
        var v = localStorage.getItem('cc.' + k);
        return v === null ? fallback : JSON.parse(v);
      } catch (e) { return fallback; }
    },
    set: function (k, v) {
      try { localStorage.setItem('cc.' + k, JSON.stringify(v)); } catch (e) {}
    },
    all: function (prefix) {
      var out = {};
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf('cc.' + prefix) === 0) {
          out[k.slice(3)] = LS.get(k.slice(3), null);
        }
      }
      return out;
    }
  };

  function el(tag, attrs) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (a) {
        if (a === 'text') node.textContent = attrs[a];
        else if (a === 'html') node.innerHTML = attrs[a];
        else node.setAttribute(a, attrs[a]);
      });
    }
    for (var i = 2; i < arguments.length; i++) node.appendChild(arguments[i]);
    return node;
  }

  function fmtTime(ts) {
    var d = new Date(ts);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function issueUrl(title, body, labels) {
    var u = 'https://github.com/' + REPO + '/issues/new' +
      '?title=' + encodeURIComponent(title) +
      '&labels=' + encodeURIComponent(labels.join(',')) +
      '&body=' + encodeURIComponent(body);
    return u;
  }

  function openSubmission(title, body, labels) {
    if (body.length > 6000) {
      navigator.clipboard && navigator.clipboard.writeText(body);
      alert('Your answer is long, so it was copied to your clipboard instead. A blank issue will open — paste it into the body.');
      window.open(issueUrl(title, '(pasted below)\n\n', labels), '_blank');
      return;
    }
    window.open(issueUrl(title, body, labels), '_blank');
  }

  /* ---------- Answer boxes ---------- */
  function initAnswerBox(box) {
    var id = box.getAttribute('data-id');
    var title = box.getAttribute('data-title') || id;
    var group = box.getAttribute('data-group') || null;
    var saved = LS.get('ans.' + id, null);

    box.classList.add('cc-widget');
    var label = el('div', { 'class': 'cc-label', text: title });
    var ta = el('textarea', { placeholder: 'Write your answer here — it autosaves in this browser.' });
    if (saved && saved.text) ta.value = saved.text;

    var meta = el('span', { 'class': 'cc-meta' });
    function renderMeta() {
      var s = LS.get('ans.' + id, null);
      var words = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      meta.textContent = words + ' words' + (s && s.ts ? ' · saved ' + fmtTime(s.ts) : '');
    }
    ta.addEventListener('input', function () {
      LS.set('ans.' + id, { text: ta.value, ts: Date.now(), title: title, page: location.pathname });
      renderMeta();
    });

    var toolbar = el('div', { 'class': 'cc-toolbar' });
    if (!group) {
      var btn = el('button', { 'class': 'cc-btn cc-primary', text: 'Submit for grading →' });
      btn.addEventListener('click', function () {
        var body = '## ' + title + '\n\n' + ta.value +
          '\n\n---\n_Submitted from ' + location.href + '_\n';
        LS.set('sub.' + id, { ts: Date.now(), title: title, page: location.pathname });
        openSubmission('Submission: ' + title, body, ['submission']);
      });
      toolbar.appendChild(btn);
    }
    var copy = el('button', { 'class': 'cc-btn', text: 'Copy' });
    copy.addEventListener('click', function () {
      navigator.clipboard && navigator.clipboard.writeText(ta.value);
    });
    toolbar.appendChild(copy);
    toolbar.appendChild(meta);

    box.appendChild(label);
    box.appendChild(ta);
    box.appendChild(toolbar);
    renderMeta();
  }

  /* ---------- Group submit (one issue for several answer boxes) ---------- */
  function initGroupSubmit(node) {
    var group = node.getAttribute('data-group');
    var title = node.getAttribute('data-title') || group;

    node.classList.add('cc-widget');
    var status = el('span', { 'class': 'cc-meta' });
    var sub = LS.get('sub.' + group, null);
    if (sub) status.textContent = 'Submitted ' + fmtTime(sub.ts) + ' ✓';

    var btn = el('button', { 'class': 'cc-btn cc-primary', text: 'Submit all answers for grading →' });
    btn.addEventListener('click', function () {
      var boxes = document.querySelectorAll('.cc-answer[data-group="' + group + '"]');
      var parts = ['# ' + title, ''];
      var empty = 0;
      boxes.forEach(function (b) {
        var ta = b.querySelector('textarea');
        var t = b.getAttribute('data-title') || b.getAttribute('data-id');
        if (!ta.value.trim()) empty++;
        parts.push('## ' + t, '', ta.value.trim() || '_(no answer)_', '');
      });
      if (empty === boxes.length) { alert('All answer boxes are empty.'); return; }
      if (empty > 0 && !confirm(empty + ' answer(s) still empty. Submit anyway?')) return;
      parts.push('---', '_Submitted from ' + location.href + '_');
      LS.set('sub.' + group, { ts: Date.now(), title: title, page: location.pathname });
      status.textContent = 'Submitted ' + fmtTime(Date.now()) + ' ✓';
      openSubmission('Submission: ' + title, parts.join('\n'), ['submission']);
    });

    var toolbar = el('div', { 'class': 'cc-toolbar' });
    toolbar.appendChild(btn);
    toolbar.appendChild(status);
    node.appendChild(el('div', {
      'class': 'cc-meta',
      text: 'Submitting opens a pre-filled GitHub issue — confirm it there. Grading happens live, next session: feedback posted as a comment and the verdict logged on this page.'
    }));
    node.appendChild(toolbar);
  }

  /* ---------- Quizzes ---------- */
  function initQuiz(script) {
    var id = script.getAttribute('data-id');
    var title = script.getAttribute('data-title') || id;
    var data;
    try { data = JSON.parse(script.textContent); } catch (e) { return; }

    var wrap = el('div', { 'class': 'cc-widget cc-quiz-box' });
    wrap.appendChild(el('div', { 'class': 'cc-label', text: title }));

    data.questions.forEach(function (q, qi) {
      wrap.appendChild(el('div', { 'class': 'cc-q', text: (qi + 1) + '. ' + q.q }));
      q.options.forEach(function (opt, oi) {
        var input = el('input', { type: 'radio', name: id + '-q' + qi, value: oi });
        var lab = el('label', { 'class': 'cc-opt' });
        lab.appendChild(input);
        lab.appendChild(document.createTextNode(opt));
        wrap.appendChild(lab);
      });
      wrap.appendChild(el('div', { 'class': 'cc-why', id: id + '-why' + qi, text: q.why || '' }));
    });

    var score = el('span', { 'class': 'cc-score' });
    var best = LS.get('quiz.' + id, null);
    var meta = el('span', { 'class': 'cc-meta' });
    function renderBest() {
      var b = LS.get('quiz.' + id, null);
      meta.textContent = b ? 'Best: ' + b.best + '/' + b.total + ' · attempts: ' + b.attempts : 'Not attempted yet';
    }

    var grade = el('button', { 'class': 'cc-btn cc-primary', text: 'Grade quiz' });
    grade.addEventListener('click', function () {
      var correct = 0;
      var answers = [];
      data.questions.forEach(function (q, qi) {
        var sel = wrap.querySelector('input[name="' + id + '-q' + qi + '"]:checked');
        var val = sel ? parseInt(sel.value, 10) : -1;
        answers.push(val);
        var why = wrap.querySelector('#' + CSS.escape(id + '-why' + qi));
        var qEl = wrap.querySelectorAll('.cc-q')[qi];
        qEl.classList.remove('cc-right', 'cc-wrong');
        if (val === q.answer) { correct++; qEl.classList.add('cc-right'); }
        else { qEl.classList.add('cc-wrong'); }
        if (why) why.style.display = 'block';
      });
      var total = data.questions.length;
      score.textContent = correct + '/' + total;
      var b = LS.get('quiz.' + id, { best: 0, total: total, attempts: 0 });
      b.best = Math.max(b.best, correct);
      b.total = total;
      b.attempts += 1;
      b.ts = Date.now();
      b.title = title;
      b.page = location.pathname;
      b.last = correct;
      LS.set('quiz.' + id, b);
      renderBest();
    });

    var logBtn = el('button', { 'class': 'cc-btn', text: 'Log score to the record →' });
    logBtn.addEventListener('click', function () {
      var b = LS.get('quiz.' + id, null);
      if (!b) { alert('Grade the quiz first.'); return; }
      var body = '## Quiz result: ' + title + '\n\n' +
        '- Last score: **' + b.last + '/' + b.total + '**\n' +
        '- Best score: **' + b.best + '/' + b.total + '**\n' +
        '- Attempts: ' + b.attempts + '\n\n---\n_Logged from ' + location.href + '_\n';
      openSubmission('Quiz: ' + title + ' — ' + b.last + '/' + b.total, body, ['quiz-log']);
    });

    var toolbar = el('div', { 'class': 'cc-toolbar' });
    toolbar.appendChild(grade);
    toolbar.appendChild(logBtn);
    toolbar.appendChild(score);
    toolbar.appendChild(meta);
    wrap.appendChild(toolbar);
    renderBest();
    script.parentNode.insertBefore(wrap, script.nextSibling);
  }

  /* ---------- Sentence Equivalence (pick exactly 2 of 6) ---------- */
  function initSEQuiz(script) {
    var id = script.getAttribute('data-id');
    var title = script.getAttribute('data-title') || id;
    var data;
    try { data = JSON.parse(script.textContent); } catch (e) { return; }

    var wrap = el('div', { 'class': 'cc-widget cc-quiz-box' });
    wrap.appendChild(el('div', { 'class': 'cc-label', text: title + ' — select exactly 2' }));

    data.questions.forEach(function (q, qi) {
      wrap.appendChild(el('div', { 'class': 'cc-q', text: (qi + 1) + '. ' + q.q }));
      var boxes = [];
      q.options.forEach(function (opt, oi) {
        var input = el('input', { type: 'checkbox', name: id + '-q' + qi, value: oi });
        boxes.push(input);
        var lab = el('label', { 'class': 'cc-opt' });
        lab.appendChild(input);
        lab.appendChild(document.createTextNode(opt));
        wrap.appendChild(lab);
      });
      boxes.forEach(function (box) {
        box.addEventListener('change', function () {
          var checked = boxes.filter(function (b) { return b.checked; });
          boxes.forEach(function (b) { b.disabled = checked.length >= 2 && !b.checked; });
        });
      });
      wrap.appendChild(el('div', { 'class': 'cc-why', id: id + '-why' + qi, text: q.why || '' }));
    });

    var score = el('span', { 'class': 'cc-score' });
    var meta = el('span', { 'class': 'cc-meta' });
    function renderBest() {
      var b = LS.get('quiz.' + id, null);
      meta.textContent = b ? 'Best: ' + b.best + '/' + b.total + ' · attempts: ' + b.attempts : 'Not attempted yet';
    }

    var grade = el('button', { 'class': 'cc-btn cc-primary', text: 'Grade' });
    grade.addEventListener('click', function () {
      var correct = 0;
      data.questions.forEach(function (q, qi) {
        var checked = Array.prototype.slice.call(
          wrap.querySelectorAll('input[name="' + id + '-q' + qi + '"]:checked')
        ).map(function (b) { return parseInt(b.value, 10); }).sort();
        var need = q.answers.slice().sort();
        var isMatch = checked.length === need.length && checked.every(function (v, i) { return v === need[i]; });
        var why = wrap.querySelector('#' + CSS.escape(id + '-why' + qi));
        var qEl = wrap.querySelectorAll('.cc-q')[qi];
        qEl.classList.remove('cc-right', 'cc-wrong');
        if (isMatch) { correct++; qEl.classList.add('cc-right'); }
        else { qEl.classList.add('cc-wrong'); }
        if (why) why.style.display = 'block';
      });
      var total = data.questions.length;
      score.textContent = correct + '/' + total;
      var b = LS.get('quiz.' + id, { best: 0, total: total, attempts: 0 });
      b.best = Math.max(b.best, correct);
      b.total = total;
      b.attempts += 1;
      b.ts = Date.now();
      b.title = title;
      b.page = location.pathname;
      b.last = correct;
      LS.set('quiz.' + id, b);
      renderBest();
    });

    var logBtn = el('button', { 'class': 'cc-btn', text: 'Log score to the record →' });
    logBtn.addEventListener('click', function () {
      var b = LS.get('quiz.' + id, null);
      if (!b) { alert('Grade it first.'); return; }
      var body = '## SE result: ' + title + '\n\n' +
        '- Last score: **' + b.last + '/' + b.total + '**\n' +
        '- Best score: **' + b.best + '/' + b.total + '**\n' +
        '- Attempts: ' + b.attempts + '\n\n---\n_Logged from ' + location.href + '_\n';
      openSubmission('SE: ' + title + ' — ' + b.last + '/' + b.total, body, ['quiz-log']);
    });

    var toolbar = el('div', { 'class': 'cc-toolbar' });
    toolbar.appendChild(grade);
    toolbar.appendChild(logBtn);
    toolbar.appendChild(score);
    toolbar.appendChild(meta);
    wrap.appendChild(toolbar);
    renderBest();
    script.parentNode.insertBefore(wrap, script.nextSibling);
  }

  /* ---------- Multiple-Answer (select all that apply, 1-3 of N correct) ---------- */
  function initMultiQuiz(script) {
    var id = script.getAttribute('data-id');
    var title = script.getAttribute('data-title') || id;
    var data;
    try { data = JSON.parse(script.textContent); } catch (e) { return; }

    var wrap = el('div', { 'class': 'cc-widget cc-quiz-box' });
    wrap.appendChild(el('div', { 'class': 'cc-label', text: title + ' — select all that apply' }));

    data.questions.forEach(function (q, qi) {
      wrap.appendChild(el('div', { 'class': 'cc-q', text: (qi + 1) + '. ' + q.q }));
      q.options.forEach(function (opt, oi) {
        var input = el('input', { type: 'checkbox', name: id + '-q' + qi, value: oi });
        var lab = el('label', { 'class': 'cc-opt' });
        lab.appendChild(input);
        lab.appendChild(document.createTextNode(opt));
        wrap.appendChild(lab);
      });
      wrap.appendChild(el('div', { 'class': 'cc-why', id: id + '-why' + qi, text: q.why || '' }));
    });

    var score = el('span', { 'class': 'cc-score' });
    var meta = el('span', { 'class': 'cc-meta' });
    function renderBest() {
      var b = LS.get('quiz.' + id, null);
      meta.textContent = b ? 'Best: ' + b.best + '/' + b.total + ' · attempts: ' + b.attempts : 'Not attempted yet';
    }

    var grade = el('button', { 'class': 'cc-btn cc-primary', text: 'Grade' });
    grade.addEventListener('click', function () {
      var correct = 0;
      data.questions.forEach(function (q, qi) {
        var checked = Array.prototype.slice.call(
          wrap.querySelectorAll('input[name="' + id + '-q' + qi + '"]:checked')
        ).map(function (b) { return parseInt(b.value, 10); }).sort();
        var need = q.answers.slice().sort();
        var isMatch = checked.length === need.length && checked.every(function (v, i) { return v === need[i]; });
        var why = wrap.querySelector('#' + CSS.escape(id + '-why' + qi));
        var qEl = wrap.querySelectorAll('.cc-q')[qi];
        qEl.classList.remove('cc-right', 'cc-wrong');
        if (isMatch) { correct++; qEl.classList.add('cc-right'); }
        else { qEl.classList.add('cc-wrong'); }
        if (why) why.style.display = 'block';
      });
      var total = data.questions.length;
      score.textContent = correct + '/' + total;
      var b = LS.get('quiz.' + id, { best: 0, total: total, attempts: 0 });
      b.best = Math.max(b.best, correct);
      b.total = total;
      b.attempts += 1;
      b.ts = Date.now();
      b.title = title;
      b.page = location.pathname;
      b.last = correct;
      LS.set('quiz.' + id, b);
      renderBest();
    });

    var logBtn = el('button', { 'class': 'cc-btn', text: 'Log score to the record →' });
    logBtn.addEventListener('click', function () {
      var b = LS.get('quiz.' + id, null);
      if (!b) { alert('Grade it first.'); return; }
      var body = '## Multiple-answer result: ' + title + '\n\n' +
        '- Last score: **' + b.last + '/' + b.total + '**\n' +
        '- Best score: **' + b.best + '/' + b.total + '**\n' +
        '- Attempts: ' + b.attempts + '\n\n---\n_Logged from ' + location.href + '_\n';
      openSubmission('Multi: ' + title + ' — ' + b.last + '/' + b.total, body, ['quiz-log']);
    });

    var toolbar = el('div', { 'class': 'cc-toolbar' });
    toolbar.appendChild(grade);
    toolbar.appendChild(logBtn);
    toolbar.appendChild(score);
    toolbar.appendChild(meta);
    wrap.appendChild(toolbar);
    renderBest();
    script.parentNode.insertBefore(wrap, script.nextSibling);
  }

  /* ---------- Numeric Entry (type a number, no answer choices) ---------- */
  function parseNumeric(str) {
    str = (str || '').trim();
    if (!str) return null;
    var fracMatch = str.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/);
    if (fracMatch) {
      var num = parseFloat(fracMatch[1]), den = parseFloat(fracMatch[2]);
      if (den === 0) return null;
      return num / den;
    }
    var n = parseFloat(str);
    return isNaN(n) ? null : n;
  }

  function initNumericQuiz(script) {
    var id = script.getAttribute('data-id');
    var title = script.getAttribute('data-title') || id;
    var data;
    try { data = JSON.parse(script.textContent); } catch (e) { return; }

    var wrap = el('div', { 'class': 'cc-widget cc-quiz-box' });
    wrap.appendChild(el('div', { 'class': 'cc-label', text: title + ' — numeric entry' }));

    var inputs = [];
    data.questions.forEach(function (q, qi) {
      wrap.appendChild(el('div', { 'class': 'cc-q', text: (qi + 1) + '. ' + q.q }));
      var input = el('input', { type: 'text', 'class': 'cc-numeric-input', placeholder: 'Enter a number (e.g. 12, 3.5, or 3/4)' });
      inputs.push(input);
      wrap.appendChild(input);
      wrap.appendChild(el('div', { 'class': 'cc-why', id: id + '-why' + qi, text: q.why || '' }));
    });

    var score = el('span', { 'class': 'cc-score' });
    var meta = el('span', { 'class': 'cc-meta' });
    function renderBest() {
      var b = LS.get('quiz.' + id, null);
      meta.textContent = b ? 'Best: ' + b.best + '/' + b.total + ' · attempts: ' + b.attempts : 'Not attempted yet';
    }

    var grade = el('button', { 'class': 'cc-btn cc-primary', text: 'Grade' });
    grade.addEventListener('click', function () {
      var correct = 0;
      data.questions.forEach(function (q, qi) {
        var val = parseNumeric(inputs[qi].value);
        var target = typeof q.answer === 'string' ? parseNumeric(q.answer) : q.answer;
        var tolerance = q.tolerance !== undefined ? q.tolerance : Math.abs(target) < 1 ? 0.001 : 0.01;
        var isMatch = val !== null && Math.abs(val - target) <= tolerance;
        var why = wrap.querySelector('#' + CSS.escape(id + '-why' + qi));
        var qEl = wrap.querySelectorAll('.cc-q')[qi];
        qEl.classList.remove('cc-right', 'cc-wrong');
        if (isMatch) { correct++; qEl.classList.add('cc-right'); }
        else { qEl.classList.add('cc-wrong'); }
        if (why) why.style.display = 'block';
      });
      var total = data.questions.length;
      score.textContent = correct + '/' + total;
      var b = LS.get('quiz.' + id, { best: 0, total: total, attempts: 0 });
      b.best = Math.max(b.best, correct);
      b.total = total;
      b.attempts += 1;
      b.ts = Date.now();
      b.title = title;
      b.page = location.pathname;
      b.last = correct;
      LS.set('quiz.' + id, b);
      renderBest();
    });

    var logBtn = el('button', { 'class': 'cc-btn', text: 'Log score to the record →' });
    logBtn.addEventListener('click', function () {
      var b = LS.get('quiz.' + id, null);
      if (!b) { alert('Grade it first.'); return; }
      var body = '## Numeric entry result: ' + title + '\n\n' +
        '- Last score: **' + b.last + '/' + b.total + '**\n' +
        '- Best score: **' + b.best + '/' + b.total + '**\n' +
        '- Attempts: ' + b.attempts + '\n\n---\n_Logged from ' + location.href + '_\n';
      openSubmission('Numeric: ' + title + ' — ' + b.last + '/' + b.total, body, ['quiz-log']);
    });

    var toolbar = el('div', { 'class': 'cc-toolbar' });
    toolbar.appendChild(grade);
    toolbar.appendChild(logBtn);
    toolbar.appendChild(score);
    toolbar.appendChild(meta);
    wrap.appendChild(toolbar);
    renderBest();
    script.parentNode.insertBefore(wrap, script.nextSibling);
  }

  /* ---------- Multi-blank Text Completion (2-3 independent blanks, all must match) ---------- */
  function initTCMultiQuiz(script) {
    var id = script.getAttribute('data-id');
    var title = script.getAttribute('data-title') || id;
    var data;
    try { data = JSON.parse(script.textContent); } catch (e) { return; }
    var blankLabels = ['(i)', '(ii)', '(iii)'];

    var wrap = el('div', { 'class': 'cc-widget cc-quiz-box' });
    wrap.appendChild(el('div', { 'class': 'cc-label', text: title + ' — every blank must be correct for credit' }));

    data.questions.forEach(function (q, qi) {
      wrap.appendChild(el('div', { 'class': 'cc-q', text: (qi + 1) + '. ' + q.q }));
      q.blanks.forEach(function (opts, bi) {
        wrap.appendChild(el('div', { 'class': 'cc-meta', text: 'Blank ' + (blankLabels[bi] || bi + 1) + ':' }));
        opts.forEach(function (opt, oi) {
          var input = el('input', { type: 'radio', name: id + '-q' + qi + '-b' + bi, value: oi });
          var lab = el('label', { 'class': 'cc-opt' });
          lab.appendChild(input);
          lab.appendChild(document.createTextNode(opt));
          wrap.appendChild(lab);
        });
      });
      wrap.appendChild(el('div', { 'class': 'cc-why', id: id + '-why' + qi, text: q.why || '' }));
    });

    var score = el('span', { 'class': 'cc-score' });
    var meta = el('span', { 'class': 'cc-meta' });
    function renderBest() {
      var b = LS.get('quiz.' + id, null);
      meta.textContent = b ? 'Best: ' + b.best + '/' + b.total + ' · attempts: ' + b.attempts : 'Not attempted yet';
    }

    var grade = el('button', { 'class': 'cc-btn cc-primary', text: 'Grade' });
    grade.addEventListener('click', function () {
      var correct = 0;
      data.questions.forEach(function (q, qi) {
        var allMatch = q.blanks.every(function (opts, bi) {
          var sel = wrap.querySelector('input[name="' + id + '-q' + qi + '-b' + bi + '"]:checked');
          var val = sel ? parseInt(sel.value, 10) : -1;
          return val === q.answers[bi];
        });
        var why = wrap.querySelector('#' + CSS.escape(id + '-why' + qi));
        var qEl = wrap.querySelectorAll('.cc-q')[qi];
        qEl.classList.remove('cc-right', 'cc-wrong');
        if (allMatch) { correct++; qEl.classList.add('cc-right'); }
        else { qEl.classList.add('cc-wrong'); }
        if (why) why.style.display = 'block';
      });
      var total = data.questions.length;
      score.textContent = correct + '/' + total;
      var b = LS.get('quiz.' + id, { best: 0, total: total, attempts: 0 });
      b.best = Math.max(b.best, correct);
      b.total = total;
      b.attempts += 1;
      b.ts = Date.now();
      b.title = title;
      b.page = location.pathname;
      b.last = correct;
      LS.set('quiz.' + id, b);
      renderBest();
    });

    var logBtn = el('button', { 'class': 'cc-btn', text: 'Log score to the record →' });
    logBtn.addEventListener('click', function () {
      var b = LS.get('quiz.' + id, null);
      if (!b) { alert('Grade it first.'); return; }
      var body = '## Multi-blank TC result: ' + title + '\n\n' +
        '- Last score: **' + b.last + '/' + b.total + '**\n' +
        '- Best score: **' + b.best + '/' + b.total + '**\n' +
        '- Attempts: ' + b.attempts + '\n\n---\n_Logged from ' + location.href + '_\n';
      openSubmission('TC-Multi: ' + title + ' — ' + b.last + '/' + b.total, body, ['quiz-log']);
    });

    var toolbar = el('div', { 'class': 'cc-toolbar' });
    toolbar.appendChild(grade);
    toolbar.appendChild(logBtn);
    toolbar.appendChild(score);
    toolbar.appendChild(meta);
    wrap.appendChild(toolbar);
    renderBest();
    script.parentNode.insertBefore(wrap, script.nextSibling);
  }

  /* ---------- Dashboard ---------- */
  function initDashboard(node) {
    node.classList.add('cc-dash');
    var quizzes = LS.all('quiz.');
    var subs = LS.all('sub.');
    var drafts = LS.all('ans.');

    function section(title, rows, cols) {
      if (!rows.length) return;
      node.appendChild(el('h4', { text: title }));
      var table = el('table');
      var thead = el('tr');
      cols.forEach(function (c) { thead.appendChild(el('th', { text: c })); });
      table.appendChild(thead);
      rows.forEach(function (r) {
        var tr = el('tr');
        r.forEach(function (c, i) {
          var td = el('td');
          if (i === 0 && c.href) { td.appendChild(el('a', { href: c.href, text: c.text })); }
          else td.textContent = c.text !== undefined ? c.text : c;
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });
      node.appendChild(table);
    }

    section('Quiz scores', Object.keys(quizzes).map(function (k) {
      var q = quizzes[k];
      return [{ text: q.title || k, href: q.page }, q.best + '/' + q.total, q.attempts + ' attempts', fmtTime(q.ts)];
    }), ['Quiz', 'Best', 'Attempts', 'Last taken']);

    section('Submitted for grading', Object.keys(subs).map(function (k) {
      var s = subs[k];
      return [{ text: s.title || k, href: s.page }, fmtTime(s.ts)];
    }), ['Submission', 'When']);

    section('Drafts in progress', Object.keys(drafts).filter(function (k) {
      var d = drafts[k];
      return d && d.text && d.text.trim();
    }).map(function (k) {
      var d = drafts[k];
      var words = d.text.trim().split(/\s+/).length;
      return [{ text: d.title || k, href: d.page }, words + ' words', fmtTime(d.ts)];
    }), ['Answer', 'Length', 'Last edited']);

    if (!node.children.length) {
      node.appendChild(el('p', { 'class': 'cc-meta', text: 'No activity recorded in this browser yet. Quiz scores, drafts, and submissions will appear here as you work.' }));
    } else {
      node.appendChild(el('p', { 'class': 'cc-meta', text: 'This panel reflects activity in this browser. The permanent record lives in the repo: graded submissions are logged on each day\'s page.' }));
    }
  }

  document.querySelectorAll('.cc-answer').forEach(initAnswerBox);
  document.querySelectorAll('.cc-submit').forEach(initGroupSubmit);
  document.querySelectorAll('script.cc-quiz').forEach(initQuiz);
  document.querySelectorAll('script.cc-se').forEach(initSEQuiz);
  document.querySelectorAll('script.cc-multi').forEach(initMultiQuiz);
  document.querySelectorAll('script.cc-numeric').forEach(initNumericQuiz);
  document.querySelectorAll('script.cc-tc-multi').forEach(initTCMultiQuiz);
  var dash = document.getElementById('cc-dashboard');
  if (dash) initDashboard(dash);
})();
