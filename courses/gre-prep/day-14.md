---
title: "14. Geometry, Data Analysis & New Formats"
parent: GRE Sprint
nav_order: 14
---

# Day 14: Geometry, Data Analysis & New Question Formats

**Date:** August 17, 2026 · **Time budget:** ~2 hours

Two things converge today. First, the real fix from Checkpoint 2:
Geometry and Data Analysis dropped from a 100% baseline (86%, 75%) with
**zero dedicated instruction** so far — today gives them a real review,
not just incidental exposure. Second, a broader audit found this course
had only ever used two of the GRE's five Quant question formats
(standard multiple-choice and Quantity Comparison) — today adds the other
three: **Multiple-Answer** (select all that apply), **Numeric Entry**
(type a number, no choices), and a **Data Interpretation Set** (several
questions sharing one table). No vocab today, and the extra essay rep
originally planned for today moved to Day 16 — this day is full without
either.

---

## Hour 1 — Geometry

### Review

**The one rule that matters most:** figures are explicitly **not drawn to
scale**. Never estimate a length or angle by eyeballing the picture — use
only the given numbers and geometric properties. When a problem feels
overwhelming, ask "what shape am I actually dealing with?" — most hard
GRE geometry reduces to a basic right triangle or circle once you strip
away the setup.

| Topic | Key facts |
|:--|:--|
| Angles | Supplementary angles sum to 180°, complementary to 90°. Vertical angles are equal. Parallel lines cut by a transversal create equal corresponding/alternate angles. |
| Triangles | Angles sum to 180°. Isosceles: angles opposite equal sides are equal. 30-60-90 sides are in ratio 1:√3:2. 45-45-90 sides are in ratio 1:1:√2. Triangle inequality: any side < sum of the other two. |
| Pythagorean triples | 3-4-5, 5-12-13, 8-15-17 — and their multiples (6-8-10, 9-12-15...). Recognizing these on sight beats computing √ every time. |
| Circles | Circumference = 2πr. Area = πr². Arc length and sector area scale by (central angle/360°). |
| Quadrilaterals/polygons | Rectangle/parallelogram area = base × height. Trapezoid area = ½(sum of parallel sides) × height. Interior angle sum of an n-sided polygon = (n−2)×180°. |
| 3D shapes | Rectangular prism volume = l×w×h. Cylinder volume = πr²h. Sphere volume = (4/3)πr³. |

### Strategy

Read: [PrepScholar — Complete GRE Geometry Review: Problems and Practice](https://www.prepscholar.com/gre/blog/gre-geometry-review-practice/) (~10 min, skim for the formulas you don't already have solid).

**Key takeaway:** triangles and circles carry most of GRE geometry — when
in doubt, look for a hidden right triangle (draw an altitude, use a
diagonal) or a hidden circle relationship before assuming a problem needs
something more exotic.

### Practice (10 questions, mixed formats)

<script type="application/json" class="cc-quiz" data-id="gre-day14-geo-mc" data-title="Day 14 — Geometry (multiple choice)">
{
  "questions": [
    {
      "q": "In triangle PQR, angle P = 40° and angle Q = 75°. What is the measure of angle R?",
      "options": ["55", "60", "65", "70", "75"],
      "answer": 2,
      "why": "180 − 40 − 75 = 65."
    },
    {
      "q": "In a 30-60-90 triangle, the side opposite the 30° angle has length 5. What is the length of the hypotenuse?",
      "options": ["5√3", "10", "5√2", "15", "10√3"],
      "answer": 1,
      "why": "30-60-90 sides are in ratio 1:√3:2. The side opposite 30° is the \"1\" — here, 5. The hypotenuse is the \"2\": 10."
    },
    {
      "q": "A cylinder has a radius of 4 and a height of 9. What is its volume, in terms of π?",
      "options": ["36π", "72π", "108π", "144π", "288π"],
      "answer": 3,
      "why": "V = πr²h = π(16)(9) = 144π."
    },
    {
      "q": "What is the sum of the interior angles of a regular hexagon?",
      "options": ["540", "600", "660", "720", "900"],
      "answer": 3,
      "why": "(n−2)×180 = (6−2)×180 = 720."
    }
  ]
}
</script>

<script type="application/json" class="cc-quiz" data-id="gre-day14-geo-qc" data-title="Day 14 — Geometry (Quantity Comparison)">
{
  "questions": [
    {
      "q": "In triangle ABC (not drawn to scale), AB=AC and angle B = 50°. Quantity A: angle C. Quantity B: 50°.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 2,
      "why": "AB=AC makes this isosceles, so the angles opposite those sides (B and C) are equal. Angle C = 50° too — equal, regardless of how the (unreliable) figure looks."
    },
    {
      "q": "Rectangle WXYZ (not drawn to scale) has length 12 and width 5. Quantity A: the area of WXYZ. Quantity B: the perimeter of WXYZ.",
      "options": ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"],
      "answer": 0,
      "why": "Area = 12×5 = 60. Perimeter = 2(12+5) = 34. 60 > 34."
    }
  ]
}
</script>

<script type="application/json" class="cc-numeric" data-id="gre-day14-geo-numeric" data-title="Day 14 — Geometry (Numeric Entry)">
{
  "questions": [
    {
      "q": "A circle has a circumference of 31.4. Using π≈3.14, what is its radius?",
      "answer": 5,
      "why": "r = C/(2π) = 31.4/6.28 = 5."
    },
    {
      "q": "A right triangle has legs of length 9 and 40. What is the length of the hypotenuse?",
      "answer": 41,
      "why": "√(9²+40²) = √(81+1600) = √1681 = 41 (a 9-40-41 Pythagorean triple)."
    },
    {
      "q": "A trapezoid has parallel sides of length 8 and 14, and a height of 6. What is its area?",
      "answer": 66,
      "why": "Area = ½(8+14)(6) = ½(22)(6) = 66."
    }
  ]
}
</script>

<script type="application/json" class="cc-multi" data-id="gre-day14-geo-multi" data-title="Day 14 — Geometry (Multiple-Answer)">
{
  "questions": [
    {
      "q": "Which of the following sets of three numbers could represent the side lengths of a right triangle?",
      "options": ["6, 8, 10", "5, 12, 13", "7, 9, 11", "9, 12, 15"],
      "answers": [0, 1, 3],
      "why": "Check each with the Pythagorean theorem: 6²+8²=10² ✓ (a scaled 3-4-5). 5²+12²=13² ✓. 7²+9²=130≠11²=121, fails. 9²+12²=15² ✓ (a scaled 3-4-5). Recognizing scaled common triples is much faster than computing each from scratch."
    }
  ]
}
</script>

---

## Hour 2 — Data Analysis

### Review

| Topic | Key facts |
|:--|:--|
| Central tendency | Mean = sum/count. Median = middle value (or average of two middle values for an even count). Mode = most frequent. Range = max − min. |
| Standard deviation | Measures spread around the mean — you're rarely asked to compute it by hand, but you should be able to compare which of two sets is more spread out, and know that **adding a constant to every value doesn't change SD** (it shifts everything equally), while scaling or adding outliers does. |
| Probability | Single event = favorable/total. "And" (independent events) → multiply. "Or" (mutually exclusive) → add. Without replacement, recompute the denominator (and numerator, if relevant) after each draw. |
| Conditional probability | P(A given B) = P(A and B) / P(B) — restrict your universe to the condition first. |
| Counting | **Permutation** (order matters — rankings, arrangements): nPr = n!/(n−r)!. **Combination** (order doesn't matter — groups, committees): nCr = n!/(r!(n−r)!). **Venn/overlapping sets**: \|A∪B\| = \|A\| + \|B\| − \|A∩B\|. |

### Strategy

Read: [Magoosh — Mastering Permutations and Combinations for the GRE](https://magoosh.com/gre/mastering-permutations-and-combinations-for-the-gre/) (~8 min).

**Key takeaway:** the fastest way to tell combination from permutation isn't memorizing which formula — it's asking "if I swapped two selected items' positions, would that count as a different outcome?" Yes → permutation. No → combination.

### More real-material practice

Permutations/combinations are rare enough on the real test (1-2 per section) that extra external reps are worth it if you want more than what's below: the ETS sample PDF from Day 11 has a Quant section too — worth a pass now that Geometry/Data Analysis are fresh.

### Data Interpretation Set

> **Books read last month, Riverside Book Club (20 members):**
>
> | Books read | 0 | 1 | 2 | 3 | 4 |
> |:--|:--|:--|:--|:--|:--|
> | Number of members | 2 | 5 | 6 | 4 | 3 |

<script type="application/json" class="cc-numeric" data-id="gre-day14-di-mean" data-title="Data Interpretation Set — Q1 (Numeric Entry)">
{
  "questions": [
    {
      "q": "What is the mean number of books read per member?",
      "answer": 2.05,
      "why": "Sum = (0×2)+(1×5)+(2×6)+(3×4)+(4×3) = 0+5+12+12+12 = 41. Mean = 41/20 = 2.05."
    }
  ]
}
</script>

<script type="application/json" class="cc-quiz" data-id="gre-day14-di-mc" data-title="Data Interpretation Set — Q2 &amp; Q3">
{
  "questions": [
    {
      "q": "What is the median number of books read?",
      "options": ["1", "1.5", "2", "2.5", "3"],
      "answer": 2,
      "why": "With 20 members, the median is the average of the 10th and 11th values when sorted. Cumulative counts: 0→positions 1-2, 1→3-7, 2→8-13, 3→14-17, 4→18-20. Both the 10th and 11th positions fall in the \"2 books\" group."
    },
    {
      "q": "If one member is selected at random, what is the probability they read at least 3 books?",
      "options": ["15%", "20%", "30%", "35%", "40%"],
      "answer": 3,
      "why": "At least 3 = 4+3 = 7 members out of 20 = 7/20 = 35%."
    }
  ]
}
</script>

### More practice (mixed formats)

<script type="application/json" class="cc-quiz" data-id="gre-day14-data-mc" data-title="Day 14 — Data Analysis (multiple choice)">
{
  "questions": [
    {
      "q": "A bag contains 4 red and 6 blue marbles. If two marbles are drawn without replacement, what is the probability both are red?",
      "options": ["1/9", "2/15", "1/5", "4/25", "3/10"],
      "answer": 1,
      "why": "P = (4/10)×(3/9) = 12/90 = 2/15. The denominator shrinks on the second draw since one marble is already gone."
    },
    {
      "q": "In a class of 30 students, 18 take Spanish and 15 take French. If 8 take both, how many take neither?",
      "options": ["3", "5", "7", "8", "10"],
      "answer": 1,
      "why": "|Spanish∪French| = 18+15−8 = 25. Neither = 30−25 = 5."
    },
    {
      "q": "A jar has 5 red and 3 green candies. Two are drawn without replacement. What is the probability the second is green, given the first was red?",
      "options": ["3/8", "3/7", "5/8", "1/3", "2/7"],
      "answer": 1,
      "why": "After removing 1 red, 7 candies remain (4 red, 3 green). P(green | first red) = 3/7."
    },
    {
      "q": "Which of the following changes to a data set would NOT affect its standard deviation?",
      "options": ["Multiplying every value by 2", "Removing the highest value", "Adding a constant to every value", "Adding an extreme outlier", "Removing the lowest value"],
      "answer": 2,
      "why": "Adding a constant shifts every value (and the mean) equally, leaving the distances between values unchanged — SD stays the same. Scaling or adding/removing outliers changes the spread."
    }
  ]
}
</script>

<script type="application/json" class="cc-numeric" data-id="gre-day14-data-numeric" data-title="Day 14 — Data Analysis (Numeric Entry)">
{
  "questions": [
    {
      "q": "In how many ways can 5 runners finish 1st, 2nd, and 3rd place (no ties)?",
      "answer": 60,
      "why": "Order matters (distinct places) — a permutation: 5P3 = 5×4×3 = 60."
    },
    {
      "q": "A committee of 3 people is to be chosen from a group of 8. How many different committees are possible?",
      "answer": 56,
      "why": "Order doesn't matter (just a group) — a combination: 8C3 = 8!/(3!×5!) = 56."
    }
  ]
}
</script>

<script type="application/json" class="cc-multi" data-id="gre-day14-data-multi" data-title="Day 14 — Data Analysis (Multiple-Answer)">
{
  "questions": [
    {
      "q": "Which of the following scenarios should be solved using a COMBINATION, not a permutation?",
      "options": ["Choosing 3 books to bring on vacation from a shelf of 10", "Assigning gold, silver, and bronze medals to 3 of 8 runners", "Selecting a 4-person committee from 12 employees", "Determining the number of ways to arrange 5 books on a shelf"],
      "answers": [0, 2],
      "why": "Combinations apply when you're just selecting a group with no distinct roles or order — books to bring, a committee. Medal rankings and shelf arrangements both involve distinct positions, so they're permutations."
    }
  ]
}
</script>

<div class="cc-answer" data-id="gre-day14-reflect" data-title="Reflection — Geometry, new formats, Data Analysis" data-group="gre-day14">
Geometry: any rule that needed real re-learning vs. just a refresher? New
formats: did Multiple-Answer or Numeric Entry change how you approached a
question compared to picking from five options? Data Analysis: was
combination vs. permutation identification the hard part, or the
arithmetic once you knew which one to use?
</div>

<div class="cc-answer" data-id="gre-day14-notes" data-title="Timing notes" data-group="gre-day14"></div>

<div class="cc-submit" data-group="gre-day14" data-title="Day 14 — Results & reflection"></div>

## Log

_Filled in after grading: Geometry and Data Analysis scores across all
formats, and the verdict — plus whether Geometry/Data actually needed the
re-teach or mostly needed exposure to click back into place._
