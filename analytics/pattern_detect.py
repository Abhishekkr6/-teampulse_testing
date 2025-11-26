import math
import random
from statistics import mean


def generate_series(length: int, seed: int = 13) -> list[float]:
    rng = random.Random(seed)
    return [round(math.sin(idx / 3) * 40 + rng.uniform(-5, 5), 2) for idx in range(length)]


def rolling_average(series: list[float], window: int) -> list[float]:
    if window <= 0:
        raise ValueError("window must be positive")
    if window > len(series):
        return []
    output = []
    for start in range(len(series) - window + 1):
        chunk = series[start : start + window]
        output.append(round(mean(chunk), 2))
    return output


def detect_spikes(series: list[float], threshold: float) -> list[int]:
    return [idx for idx, value in enumerate(series) if abs(value) >= threshold]


if __name__ == "__main__":
    baseline = generate_series(50)
    averages = rolling_average(baseline, 5)
    spikes = detect_spikes(baseline, 35)
    print("Series sample:", baseline[:10])
    print("Rolling averages:", averages[:5])
    print("Spike indexes:", spikes)
