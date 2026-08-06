---
title: "3. Exponents & Radicals"
parent: GRE Sprint
nav_order: 3
---

# Day 3: Exponents & Radicals

**Date:** August 6, 2026 · **Time budget:** ~1 hour

This is the last Arithmetic sub-topic, and it's a different kind of problem
than Days 1-2. The baseline shows 2/4 (50%) here, but at only ~56 seconds
per question — well under the ~1m45s average elsewhere. That's **rushing,
not a gap**: the rules are known, they're just being applied too fast to
catch traps. Today's practice is built to force a slower first pass on
purpose, then check whether accuracy and speed can hold together.

## Review

**Exponent rules:**

| Rule | Form |
|:--|:--|
| Product | aᵐ · aⁿ = aᵐ⁺ⁿ |
| Quotient | aᵐ ÷ aⁿ = aᵐ⁻ⁿ |
| Power of a power | (aᵐ)ⁿ = aᵐⁿ |
| Power of a product | (ab)ⁿ = aⁿbⁿ |
| Zero exponent | a⁰ = 1 (a ≠ 0) |
| Negative exponent | a⁻ⁿ = 1/aⁿ |
| Fractional exponent | a^(m/n) = (ⁿ√a)ᵐ |

**Radical rules:** √a · √b = √(ab), and √a ÷ √b = √(a/b) — but **√a + √b ≠
√(a+b)**. Radicals only combine like terms after simplifying, the same way
2x + 3x = 5x but 2x + 3y doesn't combine.

**The two traps that actually cause misses at speed:**
- **√(a²) = |a|, not a.** If a could be negative, dropping the absolute
  value is the single most common exponents/radicals error on the GRE.
- **Negative base + exponent, with or without parentheses, are different
  expressions.** −2⁴ = −16 (exponent hits the 2 only), but (−2)⁴ = 16 (the
  negative is inside what gets raised to the power). This bit Day 2 too —
  it's worth a permanent half-second check.

**Memorize for speed** (recognizing these instantly beats recalculating
them every time): squares 1-15 (1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121,
144, 169, 196, 225), cubes 1-5 (1, 8, 27, 64, 125), and √2 ≈ 1.414, √3 ≈
1.732, √5 ≈ 2.236.

## Strategy

Read: [Manhattan Prep — Let's Have Fun with GRE Exponents](https://www.manhattanprep.com/gre/blog/lets-have-fun-with-gre-exponents/) (~6 min).

**Key takeaway:** when a problem doesn't fit the standard rules cleanly
(you're adding or subtracting terms with exponents, not just multiplying or
dividing), look for a hidden algebraic pattern — factor out the largest
common term, or recognize a difference of squares (x² − y² = (x−y)(x+y)).
Exponent problems that look intractable at a glance are almost always a
factoring problem in disguise.

**Estimation**, for radicals specifically: when a question asks which value
is bigger, or roughly how big something is, you often don't need an exact
decimal. Bracket between the nearest perfect squares (√130 is between √121=11
and √144=12, so it's a little over 11) or square both sides of a comparison
instead of estimating decimals directly. This is faster and safer than doing
the rushing you did on the baseline — it replaces "eyeball it quickly" with
"bound it precisely, quickly."

**Today's actual discipline, more than any new technique:** since the
baseline problem here was speed outrunning care, do the first 6 questions
below with **no time limit**, writing out every step. Then do the next 6
**timed at 75 seconds each**. The goal is to notice whether the habits from
the untimed set transfer under time pressure, not to see how fast you can
go on the first pass.

## Practice

**Part A — untimed, show full work (6 questions):**

<script type="application/json" class="cc-quiz" data-id="gre-day03-practice-a" data-title="Day 3 Practice — Part A (untimed)">
{
  "questions": [
    {
      "q": "Simplify: (2³)² × 2⁻⁴",
      "options": ["1", "2", "4", "8", "16"],
      "answer": 2,
      "why": "(2³)² = 2⁶. 2⁶ × 2⁻⁴ = 2⁽⁶⁻⁴⁾ = 2² = 4."
    },
    {
      "q": "Simplify: (3x²)³",
      "options": ["9x⁶", "9x⁵", "27x⁵", "27x⁶", "3x⁵"],
      "answer": 3,
      "why": "The exponent applies to everything inside the parentheses: 3³=27 and (x²)³=x⁶. Result: 27x⁶. (9x⁶ is the trap — squaring the coefficient instead of cubing it.)"
    },
    {
      "q": "Simplify: √72",
      "options": ["6√2", "6√12", "9√8", "4√3", "2√6"],
      "answer": 0,
      "why": "72 = 36 × 2, and 36 is a perfect square: √72 = √36 × √2 = 6√2. Always pull out the largest perfect-square factor you can find."
    },
    {
      "q": "Simplify: (x⁻²y³)⁻¹",
      "options": ["x²/y³", "x⁻²/y³", "1/(x²y³)", "x²y³", "y³/x²"],
      "answer": 0,
      "why": "Distribute the outer −1 exponent to each factor: (x⁻²)⁻¹ = x², (y³)⁻¹ = y⁻³ = 1/y³. Combined: x²/y³."
    },
    {
      "q": "Simplify: √(a⁸), given a ≥ 0",
      "options": ["a²", "a⁴", "a⁸", "a¹⁶", "2a⁴"],
      "answer": 1,
      "why": "√(a⁸) = a^(8/2) = a⁴. (The a ≥ 0 condition means you don't need to worry about absolute value here — but notice the condition is doing real work.)"
    },
    {
      "q": "Evaluate: (5⁰ + 5)²",
      "options": ["0", "25", "26", "36", "100"],
      "answer": 3,
      "why": "5⁰ = 1 (anything nonzero to the 0 power is 1 — not 0). So (1+5)² = 6² = 36."
    }
  ]
}
</script>

**Part B — timed, 75 seconds each (6 questions):**

<script type="application/json" class="cc-quiz" data-id="gre-day03-practice-b" data-title="Day 3 Practice — Part B (timed, 75s each)">
{
  "questions": [
    {
      "q": "If x² = 49, what is the value of |x| + x?",
      "options": ["0", "7", "14", "0 or 14", "Cannot be determined from the information given"],
      "answer": 3,
      "why": "x could be 7 or −7 — both square to 49. If x=7: |7|+7=14. If x=−7: |−7|+(−7)=7−7=0. Without more information pinning down the sign, both are possible. This is the √(a²)=|a| trap wearing a different costume: don't assume only the positive root."
    },
    {
      "q": "Which is greater: √50 or 7?",
      "options": ["√50", "7", "They are equal", "Cannot be determined"],
      "answer": 0,
      "why": "Square both sides instead of estimating decimals: 50 vs. 7²=49. Since 50>49, √50>7. Squaring both sides of a comparison (when both sides are non-negative) is faster and safer than approximating."
    },
    {
      "q": "2ˣ × 2⁽ˣ⁺¹⁾ = 2⁹. What is x?",
      "options": ["3", "3.5", "4", "4.5", "5"],
      "answer": 2,
      "why": "Combine the left side: 2⁽ˣ⁺ˣ⁺¹⁾ = 2⁽²ˣ⁺¹⁾ = 2⁹, so 2x+1=9, x=4."
    },
    {
      "q": "Which value is closest to √130?",
      "options": ["10", "11", "11.4", "12", "13"],
      "answer": 2,
      "why": "Bracket it: 11²=121, 12²=144. 130 is closer to 121 than 144, so √130 is a little above 11 — 11.4 is the only option in that range. No decimal calculation needed."
    },
    {
      "q": "Simplify: √3 + √12",
      "options": ["3√3", "√15", "√45", "2√15", "4√3"],
      "answer": 0,
      "why": "√12 = √(4×3) = 2√3. Now the terms match: √3 + 2√3 = 3√3. (√3+√12 ≠ √15 — radicals don't combine under addition until they're simplified to like terms.)"
    },
    {
      "q": "If y = 4^(3/2), what is the value of y?",
      "options": ["6", "8", "12", "16", "64"],
      "answer": 1,
      "why": "a^(m/n) = (ⁿ√a)ᵐ. Take the root first — √4=2 — then apply the power: 2³=8. Smaller numbers throughout than computing 4³=64 first and then taking the root of that."
    }
  ]
}
</script>

<div class="cc-answer" data-id="gre-day03-notes" data-title="Part A vs. Part B — what changed under time pressure?" data-group="gre-day03">
Compare your two passes: same accuracy, or did something slip once the
clock was on? Any question where you caught yourself about to rush past a
trap (negative base, √(a²)=|a|, multiple roots) the way you did on the
baseline?
</div>

<div class="cc-submit" data-group="gre-day03" data-title="Day 3 — Practice results & pacing reflection"></div>

**Cumulative check — the rest of your Official Guide Arithmetic set:** Days
1-3 cover everything the diagnostic's Arithmetic bucket touched. Now go back
to *Official GRE Quantitative Reasoning Practice Questions* and do the
**remaining ~10 questions** from that same Arithmetic set you started on Day
1 (whichever ones you haven't done yet) — timed, no more than 90 seconds
each, as one continuous block. This is real ETS material, used as a mixed
review across everything from this week rather than split by sub-topic.

<div class="cc-answer" data-id="gre-day03-og-cumulative" data-title="Cumulative Arithmetic mini-exam — results" data-group="gre-day03"></div>

## Log

**Aug 7, 2026 — Graded.**

- **Part A (untimed):** 5/6 — self-described "dumb mistake," not a
  conceptual gap.
- **Part B (timed, 75s each):** 6/6 — perfect, under real time pressure.
  This is the day's whole hypothesis confirmed: the baseline issue was
  rushing, not knowledge, and a deliberate slow first pass carried into
  clean speed on the second. Backsolving used in both passes voluntarily.
- **Cumulative Arithmetic mini-exam (remaining Official Guide questions,
  Days 1-3 combined):** 8/9 — "tricked by the absolute value on negatives."
- **Pattern to note:** the √(a²)=|a| / multi-root trap was reviewed today
  and handled correctly on Part B's drilled version of it, but still caused
  the one miss on the Official Guide set minutes later, in an unfamiliar
  presentation. Recognizing a trap in a just-reviewed drill isn't the same
  as recognizing it on sight in a novel question — worth a few more spaced
  reps of this specific trap (not a re-teach) over the next few days rather
  than assuming Part B's clean score means it's fully locked in.

**Verdict: PASS.** Strongest day yet — the Part A→B jump is exactly the
outcome this format was built to test for.
