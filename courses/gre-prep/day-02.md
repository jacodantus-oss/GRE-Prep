---
title: "2. Arithmetic Ops, Percents/Ratios & Backsolving"
parent: GRE Sprint
nav_order: 2
---

# Day 2: Arithmetic Operations, Percents/Ratios & Backsolving

**Date:** August 5, 2026 · **Time budget:** ~1 hour

Percents and ratios were already a relative strength on the baseline (71%) —
today's review is a quick refresher, not a re-teach. Arithmetic Operations
(order of operations) was a real miss (1/2), so that gets more attention.
Today also introduces the single highest-leverage speed strategy for Quant:
**backsolving** — working from the answer choices instead of solving from
scratch.

## Review

**Order of operations (PEMDAS), GRE-specific traps:**
- A **fraction bar groups everything above and below it** like parentheses —
  simplify numerator and denominator fully before dividing.
- **Exponents apply only to what's directly attached.** `-2⁴` = `-(2⁴)` =
  `-16` (the exponent hits the 2, not the negative sign). `(-2)⁴` = `16` is a
  different expression entirely — the parentheses change what the exponent
  applies to.
- Multiplication and division are done **left to right**, same priority —
  not "always multiply first."

**Percents, fast:**
- % change = (new − old) / old × 100.
- **Successive percent changes multiply, they don't add.** +20% then −20% is
  ×1.2×0.8 = ×0.96 → a net **4% decrease**, not back to the start. This is
  the single most common percent trap on the GRE.

**Ratios:**
- A ratio of 3:5 means 3+5 = 8 "parts" total — convert to actual quantities
  by finding what one part equals, then scale.
- Part-to-part (3:5) vs. part-to-whole (3:8) — misreading which one a
  question wants is a bigger risk than the arithmetic itself.

## Strategy

Read: [PlusPrep — Backsolving: Quant Strategy](https://plusprep.com/2020/02/17/backsolving/) (~5 min).

**Key takeaway:** whenever a question has plain numbers (no variables) as
answer choices, you don't have to solve it algebraically — plug the answer
choices into the problem instead. Since GRE numerical answer choices are
almost always ordered, **start with the middle choice (C)**: if it's too
high, you've eliminated the two higher choices in one move; if too low, the
two lower ones. Worst case is 2-3 tries instead of a full algebraic setup —
and it sidesteps silly algebra mistakes under time pressure entirely.

The same logic extends to **picking your own numbers** when a problem has
variables and no concrete values (common in percent/ratio word problems):
pick something easy — 100 for percents, a common multiple of the ratio terms
for ratios — work the problem with your number, then test which answer
choice matches.

## Practice

**Official Guide:** open *Official GRE Quantitative Reasoning Practice
Questions* to the Arithmetic chapter and find **15 questions covering order
of operations, percents, and ratios** (whatever they're labeled in your
edition — content matters, not the section name). This time, **time
yourself**: cap each question at 90 seconds, 22-23 minutes total. On at
least 3 questions, deliberately try backsolving or picking numbers instead
of solving directly, even if the direct method feels faster at first.

<div class="cc-answer" data-id="gre-day02-og" data-title="Official Guide set — results, timing & which you backsolved" data-group="gre-day02"></div>

**Check:** 6 questions. Q5 is built for backsolving — try it that way before
falling back to algebra.

<script type="application/json" class="cc-quiz" data-id="gre-day02-quiz" data-title="Day 2 Check — Operations, Percents, Ratios & Backsolving">
{
  "questions": [
    {
      "q": "Evaluate: 8 − 2×(3+1)² ÷ 4",
      "options": ["-8", "0", "8", "16", "24"],
      "answer": 1,
      "why": "Parentheses first: (3+1)=4. Exponent: 4²=16. Multiply: 2×16=32. Divide: 32÷4=8. Subtract: 8−8=0."
    },
    {
      "q": "A price increases from $80 to $92. What is the percent increase?",
      "options": ["12%", "13.5%", "15%", "16.7%", "20%"],
      "answer": 2,
      "why": "% change = (92−80)/80 × 100 = 12/80 × 100 = 15%. Always divide by the original (old) value, not the new one."
    },
    {
      "q": "A shirt's price is increased by 20%, then decreased by 20%. Compared to the original price, the final price is:",
      "options": ["The same as the original price", "4% higher than the original", "4% lower than the original", "20% lower than the original", "40% lower than the original"],
      "answer": 2,
      "why": "×1.20 then ×0.80 = ×0.96 overall — a 4% decrease. Successive percent changes multiply; they don't cancel out or add/subtract like flat amounts."
    },
    {
      "q": "In a class, the ratio of boys to girls is 3:5. If there are 24 students total, how many girls are there?",
      "options": ["9", "12", "15", "18", "21"],
      "answer": 2,
      "why": "3+5 = 8 parts total. 24 ÷ 8 = 3 students per part. Girls = 5 parts × 3 = 15."
    },
    {
      "q": "A number is increased by 25% and then decreased by 10%, resulting in 135. What was the original number?",
      "options": ["100", "110", "120", "130", "140"],
      "answer": 2,
      "why": "Backsolve from the middle: try 120. 120×1.25 = 150. 150×0.90 = 135. Match on the first try — no algebra needed. (If it hadn't matched, whether 135 was too high or low would tell you which direction to go next.)"
    },
    {
      "q": "What is the value of −2⁴?",
      "options": ["-16", "-8", "8", "16", "Cannot be determined"],
      "answer": 0,
      "why": "The exponent applies only to the 2, not the negative sign: −2⁴ = −(2⁴) = −16. (−2)⁴ would be 16 — but that's a different expression, with the negative sign inside the parentheses."
    }
  ]
}
</script>

<div class="cc-answer" data-id="gre-day02-reflect" data-title="How did backsolving/picking numbers feel?" data-group="gre-day02">
On the questions where you tried backsolving or picking numbers instead of
solving directly: did it feel faster, slower, or about the same? Any moment
where you weren't sure whether it applied?
</div>

<div class="cc-submit" data-group="gre-day02" data-title="Day 2 — Official Guide results & backsolving reflection"></div>

## Log

_Filled in after grading: quiz score, Official Guide accuracy/timing, and the
verdict._
