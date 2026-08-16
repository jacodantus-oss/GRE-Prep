---
title: "12. Quantity Comparison & Full Timed Set"
parent: GRE Sprint
nav_order: 12
---

# Day 12: Quantity Comparison Strategy & Full Timed Mixed Set

**Date:** August 15, 2026 · **Time budget:** ~2 hours

Quantity Comparison (QC) was never taught in this course — Checkpoint 2
surfaced the gap directly ("didn't have the numbered options required for
backsolving"). Today fixes that, then puts everything from Days 1-11
together in one real 20-question, 35-minute timed Quant section — the
actual section length and pacing you'll face on exam day. No vocab or RC
today; this is a Quant-only day by design.

## Review

**Format:** every QC question has the same four answer choices, always in
this order — worth memorizing so you never waste time re-reading them:
**(A)** Quantity A is greater · **(B)** Quantity B is greater · **(C)** The
two quantities are equal · **(D)** The relationship cannot be determined
from the information given.

**Core rules:**
1. **Simplify algebraically before plugging in numbers.** If both
   quantities share terms, cancel/reduce them the way you would solving an
   equation — often this alone reveals C (equal) without any arithmetic.
2. **Never assume a variable is a positive integer** unless the problem
   says so. Test contrasting values — a positive integer, a negative
   number, zero, and a fraction between 0 and 1 — since these behave
   differently under squaring, division, and sign. If the relationship
   flips (or even just *changes*, including from "equal" to "unequal")
   across your tests, the answer is **D**.
3. **The Day 7 rule still applies:** never multiply or divide both
   quantities by a variable of unknown sign — it can silently flip (or
   fail to flip) the comparison.
4. **Geometric figures are explicitly not drawn to scale.** Use only the
   given measurements and constraints — never eyeball a figure to compare
   lengths or angles.
5. If you can *prove* the quantities are algebraically identical, stop —
   that's C, and testing more numbers is wasted time.

## Strategy

Read: [PrepScholar — 8 Top Tips for GRE Quantitative Comparison Questions](https://www.prepscholar.com/gre/blog/gre-quantitative-comparison-questions/) (~8 min).

**Key takeaway:** pick test numbers that differ as much as possible from
each other (e.g., 2 and −1, not 2 and 3) — the more contrasting the pair,
the more likely a hidden case-dependence reveals itself and points you to D
instead of a false A or B.

## QC Practice (10 questions)

<script type="application/json" class="cc-quiz" data-id="gre-day12-qc" data-title="Day 12 — Quantity Comparison Practice">
{
  "questions": [
    {
      "q": "Quantity A: 3/7. Quantity B: 5/11.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 1,
      "why": "Cross-multiply to compare: 3×11=33, 5×7=35. Since 33<35, 3/7<5/11 — B is greater."
    },
    {
      "q": "x is a real number. Quantity A: x². Quantity B: x³.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 3,
      "why": "Test contrasting values: x=2 gives A=4, B=8 (B>A). x=−2 gives A=4, B=−8 (A>B). The relationship flips — D."
    },
    {
      "q": "Quantity A: (a+b)². Quantity B: a²+2ab+b².",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 2,
      "why": "(a+b)² expands to exactly a²+2ab+b² — algebraically identical for any a, b. C, no testing needed."
    },
    {
      "q": "In a class, 60% of students are female. Quantity A: the number of female students. Quantity B: the number of male students.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 0,
      "why": "60% > 40% of the same total class size, regardless of what that total actually is — female count is always greater."
    },
    {
      "q": "In triangle ABC (figure not drawn to scale), angle A = 50°, angle B = 60°. Quantity A: length of side BC (opposite angle A). Quantity B: length of side AC (opposite angle B).",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 1,
      "why": "Larger angle → longer opposite side. Angle B (60°) > angle A (50°), so side AC (opposite B) > side BC (opposite A)."
    },
    {
      "q": "0 < x < 1. Quantity A: x. Quantity B: x².",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 0,
      "why": "Squaring a fraction between 0 and 1 makes it smaller (e.g., 0.5²=0.25). Since the range is fixed (0<x<1), this holds for every valid x — A is always greater."
    },
    {
      "q": "x ≠ 0. Quantity A: x²/x. Quantity B: x.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 2,
      "why": "x²/x simplifies to x (valid since x≠0 rules out division by zero) — the two quantities are identical. C."
    },
    {
      "q": "x+y=10, x>y. Quantity A: x. Quantity B: 5.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 0,
      "why": "If x=y, both would equal 5. Since x>y is given and they still sum to 10, x must be more than half of 10 — x>5."
    },
    {
      "q": "xy < 0. Quantity A: x/y. Quantity B: 0.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 1,
      "why": "xy<0 means x and y have opposite signs, so x/y is always negative — less than 0. B is greater."
    },
    {
      "q": "Company A's revenue increased 20% last year. Company B's revenue increased 15% last year. Quantity A: Company A's revenue this year. Quantity B: Company B's revenue this year.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 3,
      "why": "No starting revenue figures are given for either company — a higher percent increase says nothing about the resulting absolute value without knowing the base. D — the classic missing-base trap."
    }
  ]
}
</script>

---

## Full timed mixed set — 20 questions, 35 minutes

Real section length, real section pacing. Do both parts below as one
continuous 35-minute block (roughly 105 seconds/question), in whatever
order you like — do all the QC-style ones first if that's more comfortable,
or take them as they come. The point is section-level stamina and pacing,
not part-by-part timing.

<script type="application/json" class="cc-quiz" data-id="gre-day12-mixed-qc" data-title="Full Timed Set — Part 1 (Quantity Comparison)">
{
  "questions": [
    {
      "q": "Quantity A: √50 + √8. Quantity B: 7√2.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 2,
      "why": "√50=5√2, √8=2√2. Sum = 7√2 — identical to Quantity B. C."
    },
    {
      "q": "x < 0. Quantity A: x³. Quantity B: x².",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 1,
      "why": "For any negative x, x³ is negative and x² is positive — B is always greater."
    },
    {
      "q": "Quantity A: 15% of 80. Quantity B: 80% of 15.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 2,
      "why": "\"a% of b\" always equals \"b% of a\": both equal 0.15×80 = 12. C."
    },
    {
      "q": "A rectangle (not drawn to scale) has length 8 and width 6. Quantity A: the diagonal. Quantity B: 10.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 2,
      "why": "Diagonal = √(8²+6²) = √100 = 10. C."
    },
    {
      "q": "n is an integer greater than 1. Quantity A: n². Quantity B: 2n.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 3,
      "why": "n=2 gives 4 and 4 (equal). n=3 gives 9 and 6 (A greater). The relationship isn't constant across valid n — D."
    },
    {
      "q": "Quantity A: the median of {2, 4, 6, 8, 30}. Quantity B: the mean of {2, 4, 6, 8, 30}.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 1,
      "why": "Median = 6. Mean = 50/5 = 10. The high outlier (30) pulls the mean above the median — B is greater."
    },
    {
      "q": "a > b > 0. Quantity A: a/b. Quantity B: b/a.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 0,
      "why": "Since a>b>0, a/b > 1 and b/a < 1 — A is always greater."
    },
    {
      "q": "Quantity A: the number of positive divisors of 36. Quantity B: the number of positive divisors of 48.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 1,
      "why": "36=2²·3² → 9 divisors. 48=2⁴·3¹ → 10 divisors. B is greater."
    }
  ]
}
</script>

<script type="application/json" class="cc-quiz" data-id="gre-day12-mixed-standard" data-title="Full Timed Set — Part 2 (Standard Questions)">
{
  "questions": [
    {
      "q": "A jacket originally priced $85 is discounted 20%, then 8% sales tax is added to the discounted price. What is the final price, rounded to the nearest cent?",
      "options": ["$73.44", "$68.00", "$74.80", "$76.50", "$78.20"],
      "answer": 0,
      "why": "85×0.80=68. 68×1.08=73.44."
    },
    {
      "q": "If (x−3)(x+5)=0 and x<0, what is x?",
      "options": ["-3", "3", "-5", "5", "0"],
      "answer": 2,
      "why": "x=3 or x=−5. Only −5 satisfies x<0."
    },
    {
      "q": "Simplify: (2x³y²)² ÷ (4x²y)",
      "options": ["x²y³", "x⁶y⁴", "4x⁴y³", "x⁴y⁴", "x⁴y³"],
      "answer": 4,
      "why": "(2x³y²)² = 4x⁶y⁴. Divide by 4x²y: x⁴y³."
    },
    {
      "q": "A circle has a circumference of 20π. What is its area?",
      "options": ["20π", "100π", "50π", "200π", "400π"],
      "answer": 1,
      "why": "2πr=20π → r=10. Area=πr²=100π."
    },
    {
      "q": "A survey of 50 people found 30 own a car and 25 own a bike. If 10 people own neither, how many own both?",
      "options": ["5", "10", "12", "15", "20"],
      "answer": 3,
      "why": "At least one = 50−10=40. car+bike−both = 40 → 30+25−both=40 → both=15."
    },
    {
      "q": "Simplify: (√3 + √12)²",
      "options": ["27", "15", "21", "45", "9"],
      "answer": 0,
      "why": "√12=2√3, so √3+2√3=3√3. (3√3)² = 9×3 = 27."
    },
    {
      "q": "The ratio of x to y is 5:6. If x+y=44, what is y−x?",
      "options": ["2", "3", "4", "5", "6"],
      "answer": 2,
      "why": "x=5k, y=6k, 11k=44, k=4. x=20, y=24. y−x=4."
    },
    {
      "q": "The length of a rectangle is 3 more than twice its width. If the area is 65, what is the width?",
      "options": ["3", "4", "6", "7", "5"],
      "answer": 4,
      "why": "w(2w+3)=65 → 2w²+3w−65=0. Factors to (2w+13)(w−5)=0 → w=5 (positive root)."
    },
    {
      "q": "In a triangle, one angle is 90° and another is 35°. What is the third angle?",
      "options": ["45", "55", "60", "65", "70"],
      "answer": 1,
      "why": "180−90−35=55."
    },
    {
      "q": "A population grows by 10% each year. Approximately how many years will it take to more than double?",
      "options": ["5", "6", "7", "8", "9"],
      "answer": 3,
      "why": "1.1⁷≈1.95, 1.1⁸≈2.14. It takes 8 years to exceed double."
    },
    {
      "q": "If x=−3, what is the value of x⁴−x³?",
      "options": ["108", "54", "-54", "-108", "27"],
      "answer": 0,
      "why": "(−3)⁴=81. (−3)³=−27. 81−(−27)=108."
    },
    {
      "q": "Which of the following data sets has the greatest standard deviation? Set 1: {5,5,5,5,5}. Set 2: {4,5,5,5,6}. Set 3: {1,3,5,7,9}. Set 4: {5,5,5,5,6}. Set 5: {2,5,5,5,8}.",
      "options": ["Set 1", "Set 4", "Set 3", "Set 2", "Set 5"],
      "answer": 2,
      "why": "All sets share a mean of 5. Set 3's values are spread furthest from the mean (deviations of ±4 and ±2 across four of the five values) — the widest spread means the greatest standard deviation."
    }
  ]
}
</script>

<div class="cc-answer" data-id="gre-day12-reflect" data-title="QC reflection" data-group="gre-day12">
Any question where testing contrasting numbers (not just positive
integers) changed your answer? How did the 35-minute pacing feel across
20 questions compared to the shorter drills so far?
</div>

<div class="cc-answer" data-id="gre-day12-notes" data-title="Timing notes" data-group="gre-day12"></div>

<div class="cc-submit" data-group="gre-day12" data-title="Day 12 — Results & reflection"></div>

## Log

**Aug 16, 2026 — Graded.**

- **QC practice:** 9/10 — one careless overlook on an exponent question,
  one genuine approach gap on the other ("struggling on how to attack the
  question" — resolved after reading the explanation, worth a re-look if
  it recurs).
- **Full timed set (20 questions): 18/20 (90%).** QC portion: 8/8,
  perfect — the strategy is holding up under real pressure, not just in
  isolated practice. Standard portion: 10/12, matching the "one struggle
  with the standard questions" already flagged — two misses there,
  nothing new to add without knowing which ones. **Timing:** 25 of 35
  minutes used, comfortable, with room to spare.
- **Correction (found later, same root cause as the AWA Argument-essay
  miss):** this "20 questions in 35 minutes" framing doesn't match the
  actual GRE, which uses two separate Quant sections — 12 questions/21
  minutes, then 15 questions/26 minutes — never one 20-question block.
  The practice itself was still valuable (real pacing discipline at real
  difficulty), just not literally the shape of a real section. Not
  rewritten here since it already happened; noted so the record stays
  accurate. Day 14 onward uses real section boundaries.
- **Difficulty, called out directly and correctly again:** "some questions
  still feel too easy, and not at the same rigor as GRE questions" — same
  pattern as Days 4-6's RC material, now showing up in self-generated
  Quant content too. This is now confirmed across two domains, not a
  one-off. **Fix:** Day 14 leans on real external Quant material (ETS's
  own sample PDF has a Quant section; Magoosh/Manhattan question banks as
  backup) the same way Day 11 did for RC, rather than continuing to trust
  self-generated calibration for the areas that matter most.
- Contrasting-number testing specifically helped on variable-in-both-
  quantities questions — the exact case it's built for.

**Verdict: PASS**, with the difficulty-calibration fix queued for Day 14
rather than deferred again.
