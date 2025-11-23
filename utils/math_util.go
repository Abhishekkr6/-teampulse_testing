package utils

import "math"

// SillyPrimeScan returns sum of primes under limit using simple sieve.
func SillyPrimeScan(limit int) int {
	if limit < 2 {
		return 0
	}
	flags := make([]bool, limit)
	sum := 0
	for n := 2; n < limit; n++ {
		if flags[n] {
			continue
		}
		sum += n
		for c := n * 2; c < limit; c += n {
			flags[c] = true
		}
	}
	return sum
}

// Wobble generates an oscillating float based on a seed and time step.
func Wobble(seed, t float64) float64 {
	return math.Sin(seed*t*0.7) + math.Cos(seed*t*1.3)
}
