---
title: "1. Divisibility, Factors & Primes"
parent: GRE Sprint
nav_order: 1
---

# Day 1: Divisibility, Factors, Multiples & Primes

**Date:** August 4, 2026 · **Time budget:** ~1 hour

This is the one arithmetic sub-category from the baseline that's a real
knowledge gap, not a pacing issue: 0/1 correct, and it still took 3m23s —
grinding on it and still missing it. Everything else in Arithmetic (percents,
exponents, operations) is a speed problem; this one gets a real review.

## Review

**Divisibility rules** — check these instead of dividing:

| Divisible by | Rule |
|:--|:--|
| 2 | Last digit is even |
| 3 | Digit sum divisible by 3 |
| 4 | Last two digits divisible by 4 |
| 5 | Last digit is 0 or 5 |
| 6 | Divisible by both 2 and 3 |
| 8 | Last three digits divisible by 8 |
| 9 | Digit sum divisible by 9 |
| 10 | Last digit is 0 |
| 11 | Alternating digit sum (add/subtract digits left to right) divisible by 11 |

**Primes:** a positive integer with exactly two factors (1 and itself). **1 is
not prime.** **2 is the only even prime.** First several: 2, 3, 5, 7, 11, 13,
17, 19, 23, 29.

**Prime factorization** is the universal tool underneath almost every number-
properties question:
- **GCF** = product of the *lowest* power of each shared prime.
- **LCM** = product of the *highest* power of every prime that appears.
- **Number of factors** = add 1 to each exponent in the prime factorization,
  then multiply. (e.g. 60 = 2²·3¹·5¹ → (2+1)(1+1)(1+1) = 12 factors.)

**Factor vs. multiple:** factors of *n* are ≤ n and divide evenly into it;
multiples of *n* are ≥ n and n divides evenly into them. Easy to swap under
time pressure — it's worth a deliberate half-second check on every question
that uses both words.

## Strategy

Read: [Manhattan Prep — GRE Prime Factorization and Divisibility Problems](https://www.manhattanprep.com/gre/blog/gre-prime-factorization-and-divisibility-problems/) (~8 min).

**Key takeaway:** don't reason about divisibility directly — break every
number in the problem down into primes first. Once two numbers are expressed
as prime factorizations, comparing them (does A divide B? what's shared?) is
just comparing exponents, not doing arithmetic. This is what turns a 3-minute
grind into a 45-second lookup.

Two more speed habits for this category specifically:
- **Don't list multiples to find an LCM or check "is it a multiple of X."**
  Factor first. Listing multiples of 14 and 12 to find their LCM by hand is
  exactly the kind of thing that eats 3 minutes on an easy concept.
- **"How many factors does N have" is a formula, not an enumeration.** If
  you're writing out factor pairs by hand, stop — use the exponent+1 rule
  above.

## Practice

**Official Guide:** open *Official GRE Quantitative Reasoning Practice
Questions* to the **Arithmetic** chapter and find the **Properties of
Numbers / Divisibility** problem set (naming may vary slightly by your
edition — it's the section covering factors, multiples, primes, and
remainders). Do the **first 15 questions untimed** — the goal right now is
locking in the prime-factorization approach, not speed. Note which ones you
solved by listing/counting instead of factoring; those are the ones to redo
with the shortcut.

<div class="cc-answer" data-id="gre-day01-og" data-title="Official Guide set — results & notes" data-group="gre-day01"></div>

**Check:** 6 questions, GRE-style. Try each in under 60 seconds using prime
factorization before falling back to brute force.

<script type="application/json" class="cc-quiz" data-id="gre-day01-quiz" data-title="Day 1 Check — Divisibility, Factors & Primes">
{
  "questions": [
    {
      "q": "What is the greatest common factor of 84 and 126?",
      "options": ["6", "14", "21", "42", "63"],
      "answer": 3,
      "why": "84 = 2²·3·7, 126 = 2·3²·7. GCF takes the lowest power of each shared prime: 2¹3¹7 = 42."
    },
    {
      "q": "Which of the following is NOT a factor of 360?",
      "options": ["8", "9", "15", "24", "27"],
      "answer": 4,
      "why": "360 = 2³·3²·5. 27 = 3³, but 360 only has 3² available — not enough 3's. Every other option divides evenly."
    },
    {
      "q": "What is the least common multiple of 12 and 18?",
      "options": ["24", "36", "72", "108", "216"],
      "answer": 1,
      "why": "12 = 2²·3, 18 = 2·3². LCM takes the highest power of every prime present: 2²·3² = 36."
    },
    {
      "q": "How many positive divisors does 60 have?",
      "options": ["6", "8", "10", "12", "14"],
      "answer": 3,
      "why": "60 = 2²·3¹5¹. Add 1 to each exponent and multiply: (2+1)(1+1)(1+1) = 12. No need to list them out."
    },
    {
      "q": "If n is a positive integer and 14n is divisible by 12, what is the smallest possible value of n?",
      "options": ["2", "3", "6", "12", "24"],
      "answer": 2,
      "why": "14 = 2·7, 12 = 2²·3. 14n needs one more 2 and a 3 that 14 doesn't supply, so n's smallest value is 2·3 = 6. Check: 14·6 = 84 = 12·7. ✓"
    },
    {
      "q": "Which of the following is a prime number?",
      "options": ["51", "57", "61", "63", "91"],
      "answer": 2,
      "why": "51 = 3×17, 57 = 3×19, 63 = 7×9, 91 = 7×13. 61 has no factors besides 1 and itself — it's prime. (Tip: for numbers under 100, you only need to test primes up to 10: 2, 3, 5, 7.)"
    }
  ]
}
</script>

<div class="cc-answer" data-id="gre-day01-reflect" data-title="What actually went wrong on the baseline miss?" data-group="gre-day01">
The baseline had a divisibility/factors/primes question missed after 3m23s of
grinding. Now that you've reviewed the rules: what were you likely doing
instead of prime-factoring? (Listing multiples? Testing divisibility by
trial division? Something else?) One or two sentences is enough.
</div>

<div class="cc-submit" data-group="gre-day01" data-title="Day 1 — Official Guide results & reflection"></div>

## Log

**Aug 4, 2026 — Graded.**

- **Check quiz:** 5/6.
- **Official Guide:** this edition didn't have a section labeled "Properties
  of Numbers" — did 10 general Arithmetic questions instead, 9/10, with the
  one miss a misread rather than a conceptual error. (Note for later days:
  assignments will describe content, not guess exact chapter/section names.)
- **Reflection:** self-diagnosed the baseline miss as "a lot of listing
  multiples, and testing by trial" — exactly the habit prime factorization
  replaces. Correct read, and it's the right target to keep watching for
  under time pressure on Day 2+.
- **Quiz miss (Q5, "smallest n such that 14n divisible by 12"):** answered 2,
  reasoning "14 and 12 are both divisible by 2" — that's shared-factor logic
  (GCF direction), not missing-factor logic (what 12's factorization needs
  that 14's doesn't supply). Self-corrected accurately after reading the
  explanation. **Pattern to watch:** "kn divisible by m, find smallest n"
  problems specifically — check this doesn't recur on Days 2-3.

**Verdict: PASS.** Strong first day — ready to advance.
