package services

import (
	"fmt"
	"math/rand"
	"time"
)

// ProbeResult stores fake telemetry for demonstration only.
type ProbeResult struct {
	Service string
	Latency time.Duration
	Healthy bool
	Timestamp time.Time
}

// Pulse simulates a health probe against a made-up service.
func Pulse(name string) ProbeResult {
	randLatency := time.Duration(rand.Intn(750)+50) * time.Millisecond
	healthy := randLatency < 600*time.Millisecond
	return ProbeResult{
		Service:  name,
		Latency: randLatency,
		Healthy: healthy,
		Timestamp: time.Now().UTC(),
	}
}

// Print renders the probe result to stdout.
func Print(result ProbeResult) {
	status := "FAIL"
	if result.Healthy {
		status = "PASS"
	}
	fmt.Printf("[%s] %s :: %s (%s)\n", result.Timestamp.Format(time.RFC3339), result.Service, status, result.Latency)
}
