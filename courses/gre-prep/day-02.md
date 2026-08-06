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

Your Official Guide book doesn't split into topic-isolated sections (it's
one 20-question Arithmetic set covering everything) — so today's practice is
below, built for exactly today's topics. Once Day 3 (the last Arithmetic
sub-topic) is done, the remaining Official Guide Arithmetic questions become
a **cumulative mini-exam** covering Days 1-3 together, timed as one block —
see the note at the end of Day 3 when it's built. For more volume than the
12 below, [Magoosh's GRE Arithmetic practice](https://magoosh.com/gre/gre-arithmetic-overview-and-practice/)
has a few extra worked percent/ratio problems.

**Practice set:** 12 questions, timed — cap each at 90 seconds (18 minutes
total). On at least 3, deliberately try backsolving or picking numbers
instead of solving directly, even if the direct method feels faster at
first.

<script type="application/json" class="cc-quiz" data-id="gre-day02-practice" data-title="Day 2 Practice Set — Operations, Percents & Ratios">
{
  "questions": [
    {
      "q": "Evaluate: 15 − 3 × (2 + 4) ÷ 9",
      "options": ["9", "11", "13", "15", "17"],
      "answer": 2,
      "why": "Parentheses: (2+4)=6. Multiply: 3×6=18. Divide: 18÷9=2. Subtract: 15−2=13."
    },
    {
      "q": "Evaluate: (−3)² − 2×(−4)",
      "options": ["1", "7", "17", "25", "-17"],
      "answer": 2,
      "why": "(−3)² = 9 (the negative is inside the parentheses, so it's squared too). 2×(−4) = −8. 9 − (−8) = 17."
    },
    {
      "q": "Evaluate: 20 ÷ 4 × 5 − 3²",
      "options": ["1", "7", "16", "20", "29"],
      "answer": 2,
      "why": "Exponent first: 3²=9. Multiply/divide left to right: 20÷4=5, then 5×5=25. Subtract: 25−9=16."
    },
    {
      "q": "What is 35% of 240?",
      "options": ["70", "74", "80", "84", "90"],
      "answer": 3,
      "why": "0.35 × 240 = 84. (Fast route: 10% of 240 is 24, so 35% = 3×24 + half of 24 = 72+12 = 84.)"
    },
    {
      "q": "60 is what percent of 150?",
      "options": ["25%", "30%", "40%", "45%", "60%"],
      "answer": 2,
      "why": "60/150 = 0.40 = 40%. \"X is what percent of Y\" always means X/Y."
    },
    {
      "q": "A price of $150 is discounted by 30%, then the discounted price is increased by 10%. What is the final price?",
      "options": ["$100.50", "$105", "$112.50", "$115.50", "$120"],
      "answer": 3,
      "why": "150 × 0.70 = 105. 105 × 1.10 = 115.50. Multiply the successive factors — don't combine −30%+10% into −20%."
    },
    {
      "q": "If a jacket's price after a 25% discount is $60, what was the original price?",
      "options": ["$70", "$75", "$80", "$85", "$90"],
      "answer": 2,
      "why": "60 is 75% of the original: original = 60/0.75 = $80. Backsolve check: 80 × 0.75 = 60. ✓ (Try the middle answer choice first next time — it lands here in one step.)"
    },
    {
      "q": "If a number x is 40% greater than a number y, y is what percent of x?",
      "options": ["60%", "66.7%", "71.4%", "75%", "80%"],
      "answer": 2,
      "why": "x = 1.4y, so y/x = 1/1.4 = 5/7 ≈ 71.4%. Easy trap: this is not simply 100%−40%=60% — that logic only works in the other direction (x as a % of y)."
    },
    {
      "q": "The ratio of red to blue marbles is 4:7. If there are 21 blue marbles, how many red marbles are there?",
      "options": ["9", "12", "14", "15", "16"],
      "answer": 1,
      "why": "7 parts = 21 marbles, so 1 part = 3. Red = 4 parts × 3 = 12."
    },
    {
      "q": "A recipe calls for flour and sugar in a ratio of 5:2. If you use 3 cups of sugar, how many cups of flour do you need?",
      "options": ["6", "6.5", "7", "7.5", "8"],
      "answer": 3,
      "why": "2 parts = 3 cups, so 1 part = 1.5. Flour = 5 parts × 1.5 = 7.5 cups."
    },
    {
      "q": "Two numbers are in the ratio 2:3. If their sum is 65, what is the larger number?",
      "options": ["26", "30", "35", "39", "42"],
      "answer": 3,
      "why": "2+3 = 5 parts. 65 ÷ 5 = 13 per part. Larger = 3 × 13 = 39."
    },
    {
      "q": "The ratio of boys to girls in a class is 5:6. After 4 more girls join, the ratio becomes 5:8. How many boys are in the class?",
      "options": ["8", "10", "12", "15", "20"],
      "answer": 1,
      "why": "Let boys=5k, girls=6k. (6k+4)/5k = 8/5 → 30k+20 = 40k → k=2. Boys = 5k = 10. (Could also backsolve from the answer choices, testing each against both ratios.)"
    }
  ]
}
</script>

<div class="cc-answer" data-id="gre-day02-notes" data-title="Practice notes — timing & which you backsolved" data-group="gre-day02"></div>

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

<div class="cc-submit" data-group="gre-day02" data-title="Day 2 — Practice results & backsolving reflection"></div>

## Log

**Aug 6, 2026 — Graded.**

- **Practice set:** 12/12 in 15 minutes — under the 18-minute budget with a
  perfect score.
- **Check quiz:** not logged (score missing from the record) — log it when
  convenient, but the reflection below already shows it went well.
- **Backsolving:** used on Q7, 10, 11, and 12 — all genuinely backsolve-shaped
  questions, including Q12 (the hardest one), where it was explicitly called
  out as the thing that unlocked the question. On the Check quiz's reverse-
  percent problem, noted that solving directly "would have taken a lot
  longer" — the strategy is landing, not just being applied mechanically.
- **Self-caught error (Check quiz, boys:girls ratio):** solved for boys
  instead of girls, caught it, and converted correctly — no actual miss, but
  worth naming next to Day 1's "shared factor vs. missing factor" catch:
  both were moments of computing before fully confirming what the question
  asked for. Two data points, not yet a pattern — but worth a half-second
  "what exactly am I solving for" check on Day 3.

**Verdict: PASS.** Faster and cleaner than Day 1 — ready to advance.
