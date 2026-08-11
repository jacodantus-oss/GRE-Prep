---
title: "7. Algebra"
parent: GRE Sprint
nav_order: 7
---

# Day 7: Algebra — Equations, Inequalities & Systems

**Date:** August 10, 2026 · **Time budget:** ~2 hours

Algebra was the baseline's other real Quant gap (60%, vs. 100% on Geometry
and Data Analysis) — a genuine content area, not just pacing. Difficulty
also goes up starting today, across every section: the last few days have
been too easy (fast, little doubt, several perfect scores), so today's
material is calibrated to real GRE difficulty and, in places, past it.

## Review

**Linear equations:** isolate the variable — same operation on both sides.
Nothing new here; it's a warm-up for the traps below.

**Inequalities — the one rule that matters:** flip the inequality sign when
you multiply or divide both sides by a **negative number**. −3x ≤ 15 becomes
x ≥ −5, not x ≤ −5.

**The trap that causes real GRE misses:** never multiply or divide both
sides of an inequality by a **variable** unless you already know its sign.
If x/y > 1, you cannot conclude x > y by multiplying both sides by y —
y's sign is unknown, and the conclusion silently depends on it. Instead,
move everything to one side, or reason through cases (y positive vs. y
negative) explicitly.

**Absolute value equations:** |x| = a means x = a or x = −a (only if a ≥ 0;
no solution if a < 0).

**Absolute value inequalities** split into two cases, and which kind of
"two" matters:
- **|x| < a** → −a < x < a (**one combined range** — an "and")
- **|x| > a** → x > a **or** x < −a (**two separate ranges** — an "or")

A rough mnemonic: "less thAND" (one connected range), "greatOR" (two
disjoint ones).

**Systems of equations:** look for a shortcut before solving for each
variable individually — GRE systems are often built so that adding or
subtracting the two equations directly gives you what's actually being
asked (e.g., x+y or x−y), without ever isolating x or y alone.

**Quadratics:** factor when you can. Two patterns worth recognizing on
sight: difference of squares (x²−y² = (x−y)(x+y)) and — for "what's the
sum/product of the roots" questions — you don't need to factor or solve at
all: for ax²+bx+c=0, the sum of the roots is −b/a and the product is c/a.

## Strategy

Read: [Manhattan Prep — Manipulating Inequalities and Absolute Values on the GRE](https://www.manhattanprep.com/gre/blog/manipulating-inequalities-and-absolute-values-on-the-gre/) (~7 min).

**Key takeaway:** absolute value problems are really about negative vs.
non-negative — sketch a number line when a problem gets confusing, and
always test your boundary values in the original inequality rather than
trusting the algebra blindly, since squaring or splitting into cases can
introduce solutions that don't actually work.

**Also still relevant from Day 2:** backsolving and picking numbers apply
directly to algebra — many of today's practice questions can be checked (or
solved outright) by plugging answer choices back into the original
condition instead of doing the full algebraic derivation.

## Practice (10 questions, harder than recent days on purpose)

<script type="application/json" class="cc-quiz" data-id="gre-day07-algebra" data-title="Day 7 — Algebra Practice">
{
  "questions": [
    {
      "q": "Solve for x: −3x + 7 ≤ 22",
      "options": ["x ≤ 5", "x ≥ 5", "x ≤ −15", "x ≤ −5", "x ≥ −5"],
      "answer": 4,
      "why": "−3x ≤ 15. Dividing by −3 requires flipping the inequality: x ≥ −5."
    },
    {
      "q": "If x/y > 1 and y is a nonzero integer, which must be true? I. x > y  II. x and y have the same sign  III. xy > 0",
      "options": ["I only", "II only", "III only", "II and III only", "I, II, and III"],
      "answer": 3,
      "why": "x/y > 1 means (x−y)/y > 0, so x−y and y share the same sign. If y>0: x>y>0 (I holds here). If y<0: x<y<0 (I fails here) — so I is not always true. But in both cases x and y share a sign (II), making their product positive (III). Never multiply both sides of x/y>1 by y directly — its sign is unknown."
    },
    {
      "q": "Solve for x: |2x − 5| > 9",
      "options": ["−2 < x < 7", "x < −2 or x > 7", "x > 7 only", "x < −2 only", "−7 < x < 2"],
      "answer": 1,
      "why": "\"Greater than\" absolute value inequalities split into two separate cases (an \"or\"): 2x−5>9 gives x>7, and 2x−5<−9 gives x<−2."
    },
    {
      "q": "Solve for x: |3x + 1| ≤ 11",
      "options": ["−4 ≤ x ≤ 10/3", "x ≤ −4 or x ≥ 10/3", "x ≥ 10/3", "x ≤ −4", "−10/3 ≤ x ≤ 4"],
      "answer": 0,
      "why": "\"Less than or equal to\" absolute value inequalities produce one combined range (an \"and\"): −11 ≤ 3x+1 ≤ 11, solved straight through to −4 ≤ x ≤ 10/3."
    },
    {
      "q": "If 3x + 2y = 16 and x − 2y = 4, what is the value of x?",
      "options": ["3", "4", "5", "6", "7"],
      "answer": 2,
      "why": "Add the two equations directly: 4x = 20 → x = 5. No need to solve for y first."
    },
    {
      "q": "If 2a + 3b = 20 and 4a + 6b = k, for what value of k does this system have infinitely many solutions?",
      "options": ["10", "20", "30", "40", "80"],
      "answer": 3,
      "why": "4a+6b is exactly double 2a+3b. For infinitely many solutions, k must scale the same way: k = 2×20 = 40."
    },
    {
      "q": "If x² − 7x + 10 = 0, what is the sum of the two solutions for x?",
      "options": ["−10", "−7", "2", "5", "7"],
      "answer": 4,
      "why": "Sum of roots of ax²+bx+c=0 is −b/a = 7 — no need to factor and add individual roots. (Confirms by factoring too: (x−2)(x−5)=0, roots 2 and 5, sum 7.)"
    },
    {
      "q": "If x² − y² = 45 and x + y = 15, what is the value of x − y?",
      "options": ["1", "3", "5", "9", "45"],
      "answer": 1,
      "why": "Factor the difference of squares: x²−y² = (x−y)(x+y). Since x+y=15: (x−y)(15)=45 → x−y=3."
    },
    {
      "q": "For which values of x is 2x² − 5x − 3 < 0 true?",
      "options": ["x < −1/2 or x > 3", "−1/2 < x < 3", "x < −3 or x > 1/2", "−3 < x < 1/2", "x > 3 only"],
      "answer": 1,
      "why": "Factor: 2x²−5x−3 = (2x+1)(x−3). Roots at x=−1/2 and x=3. Since the parabola opens upward, the expression is negative between its roots."
    },
    {
      "q": "A number is 4 less than 3 times another number. If their sum is 44, what is the larger number?",
      "options": ["28", "30", "32", "34", "36"],
      "answer": 2,
      "why": "Let the smaller number be s; the larger is 3s−4. s + (3s−4) = 44 → 4s=48 → s=12. Larger = 3(12)−4 = 32."
    }
  ]
}
</script>

---

## Hour 2 — Vocab (harder format), Cumulative Drill

### Vocab — Deck 1, precision round

Straight recall is solid at this point (two clean passes). This round tests
something harder: distinguishing a word from its close cousins. Each
question has one true outlier among near-synonyms — find the word that
does **not** belong.

<script type="application/json" class="cc-quiz" data-id="gre-day07-vocab-precision" data-title="Day 7 — Deck 1 Precision Round (odd one out)">
{
  "questions": [
    {
      "q": "Which word does NOT belong with the others?",
      "options": ["garrulous", "laconic", "terse", "succinct", "concise"],
      "answer": 0,
      "why": "Laconic, terse, succinct, and concise all mean \"using few words.\" Garrulous means the opposite — excessively talkative."
    },
    {
      "q": "Which word does NOT belong with the others?",
      "options": ["vague", "ambiguous", "hazy", "nebulous", "precise"],
      "answer": 4,
      "why": "Vague, ambiguous, hazy, and nebulous all mean unclear. Precise means exact — the opposite."
    },
    {
      "q": "Which word does NOT belong with the others?",
      "options": ["placate", "appease", "provoke", "pacify", "mollify"],
      "answer": 2,
      "why": "Placate, appease, pacify, and mollify all mean to calm someone down. Provoke means to incite — the opposite."
    },
    {
      "q": "Which word does NOT belong with the others?",
      "options": ["rash", "prudent", "impulsive", "hasty", "impetuous"],
      "answer": 1,
      "why": "Rash, impulsive, hasty, and impetuous all describe acting without enough thought. Prudent means careful and wise — the opposite."
    },
    {
      "q": "Which word does NOT belong with the others?",
      "options": ["obfuscate", "muddle", "obscure", "clarify", "confound"],
      "answer": 3,
      "why": "Obfuscate, muddle, obscure, and confound all mean to make unclear. Clarify means the opposite — to make clear."
    },
    {
      "q": "Which word does NOT belong with the others?",
      "options": ["compliant", "defiant", "obstinate", "recalcitrant", "intransigent"],
      "answer": 0,
      "why": "Defiant, obstinate, recalcitrant, and intransigent all mean stubbornly resistant. Compliant means willing to go along — the opposite."
    },
    {
      "q": "Which word does NOT belong with the others?",
      "options": ["ephemeral", "transient", "fleeting", "momentary", "permanent"],
      "answer": 4,
      "why": "Ephemeral, transient, fleeting, and momentary all mean short-lived. Permanent means the opposite — lasting."
    },
    {
      "q": "Which word does NOT belong with the others?",
      "options": ["cursory", "perfunctory", "thorough", "superficial", "hasty"],
      "answer": 2,
      "why": "Cursory, perfunctory, superficial, and hasty all mean done quickly without real attention. Thorough means the opposite — careful and complete."
    }
  ]
}
</script>

### Cumulative timed drill (10 questions, 90s each — 15 min)

Same real-GRE pace as previous days (90s/question) — difficulty goes up in
the questions themselves, not by cutting the clock further. Rushing harder
content is how careless errors happen; the Days 1-3 lesson still applies.

<script type="application/json" class="cc-quiz" data-id="gre-day07-cumulative" data-title="Day 7 — Cumulative Timed Drill">
{
  "questions": [
    {
      "q": "A store's revenue increased by 25% in January, then decreased by 20% in February. If December's revenue was $80,000, what was it at the end of February?",
      "options": ["$76,000", "$80,000", "$78,000", "$82,000", "$84,000"],
      "answer": 1,
      "why": "80,000×1.25=100,000. 100,000×0.80=80,000. Here the increase and decrease exactly cancel (1.25×0.8=1.0) — notable because that's a special case, not a general rule."
    },
    {
      "q": "The ratio of adults to children at an event is 3:2. If 10 more children arrive, the ratio becomes 3:4. How many adults are at the event?",
      "options": ["9", "12", "18", "21", "15"],
      "answer": 4,
      "why": "Adults=3k, children=2k. (2k+10)/3k = 4/3 → 6k+30=12k → k=5. Adults = 3(5) = 15."
    },
    {
      "q": "If 2^(2x) = 8^(x−1), what is x?",
      "options": ["3", "1", "2", "4", "5"],
      "answer": 0,
      "why": "8 = 2³, so 2^(2x) = 2^(3(x−1)) = 2^(3x−3). Setting exponents equal: 2x = 3x−3 → x=3."
    },
    {
      "q": "If √(x+9) = x − 3, what is the value of x?",
      "options": ["0", "3", "7", "5", "9"],
      "answer": 2,
      "why": "Square both sides: x+9 = x²−6x+9 → x²−7x=0 → x=0 or x=7. Check both: x=0 gives √9=3, but x−3=−3 — doesn't match, extraneous. x=7 gives √16=4=7−3 — works. Squaring can introduce solutions that don't actually satisfy the original equation; always check."
    },
    {
      "q": "If −2 ≤ x ≤ 5 and −3 ≤ y ≤ 4, what is the maximum possible value of x − y?",
      "options": ["1", "2", "5", "8", "9"],
      "answer": 3,
      "why": "To maximize x−y, maximize x (5) and minimize y (−3): 5−(−3) = 8."
    },
    {
      "q": "If 5x − 2y = 14 and 3x + 2y = 18, what is the value of x + y?",
      "options": ["5", "7", "6", "8", "9"],
      "answer": 1,
      "why": "Add the equations: 8x=32 → x=4. Substitute: 3(4)+2y=18 → 2y=6 → y=3. x+y=7."
    },
    {
      "q": "A class of 30 students has an average score of 80. If 10 new students join with an average of 90, what is the new average for all 40 students?",
      "options": ["82", "83", "84", "85", "82.5"],
      "answer": 4,
      "why": "Total = 30(80)+10(90) = 2400+900 = 3300. New average = 3300/40 = 82.5."
    },
    {
      "q": "A rectangular garden has a perimeter of 60 meters and a length that is twice its width. What is its area?",
      "options": ["200", "150", "175", "225", "250"],
      "answer": 0,
      "why": "2(l+w)=60 → l+w=30. l=2w → 3w=30 → w=10, l=20. Area = 10×20 = 200."
    },
    {
      "q": "In a group of 200 people, 60% are women. Of the women, 30% wear glasses. Of the men, 45% wear glasses. How many people total wear glasses?",
      "options": ["60", "66", "72", "78", "84"],
      "answer": 2,
      "why": "Women=120, men=80. Women with glasses: 0.30×120=36. Men with glasses: 0.45×80=36. Total: 72."
    },
    {
      "q": "The sum of three consecutive even integers is 936. What is the largest of the three?",
      "options": ["308", "310", "312", "314", "316"],
      "answer": 3,
      "why": "Let the integers be n−2, n, n+2. Sum = 3n = 936 → n=312. Largest = n+2 = 314."
    }
  ]
}
</script>

<div class="cc-answer" data-id="gre-day07-reflect" data-title="Algebra reflection — where did the difficulty bite?" data-group="gre-day07">
Which question(s) took real work, versus which were fast? Any moment where
you almost multiplied/divided by a variable of unknown sign, or almost
squared an inequality without checking for extraneous solutions?
</div>

<div class="cc-answer" data-id="gre-day07-notes" data-title="Timing notes — algebra, vocab, cumulative drill" data-group="gre-day07"></div>

<div class="cc-submit" data-group="gre-day07" data-title="Day 7 — Results & reflection"></div>

## Log

**Aug 11, 2026 — Graded.**

- **Algebra practice:** 8/10, on two attempts (same score both times) —
  consistent, not a fluke. **Vocab precision round:** 8/8, "flew through it."
  **Cumulative drill:** 10/10, but ran ~2 minutes over the 15-minute budget.
- **Two real, named gaps: factoring quadratics and knowing when to flip an
  inequality sign.** Not vague — self-diagnosed precisely ("I forgot how to
  factor quadratics, so I had to reteach myself"; "still a little unclear on
  when to flip the sign"). Backsolving continued to work well whenever it
  applied, consistent with Day 2.
- **Plan change based on this:** rather than wait for Day 14's general
  review day, Day 8 opens with a focused repass of exactly these two topics
  before AWA — see Day 8. Also moving Vocab Deck 2 up to Day 8 (from Day 10)
  since Deck 1 is solid ("ready to move on to a new set of words").

**Verdict: PASS**, with two specific carry-forward items instead of a vague
"needs more practice." Cumulative drill running long under harder content
is worth watching, not fixing yet — one data point.
