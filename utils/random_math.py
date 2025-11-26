import random


def chaotic_average(samples: int = 30) -> float:
    values = [random.uniform(-100, 100) for _ in range(samples)]
    weighted = sum(value * (idx + 1) for idx, value in enumerate(values))
    return round(weighted / (samples * (samples + 1) / 2), 3)


def random_matrix(n: int = 4) -> list[list[int]]:
    rng = random.Random(99)
    return [[rng.randint(-9, 9) for _ in range(n)] for _ in range(n)]


if __name__ == "__main__":
    print("Chaotic average:", chaotic_average())
    for row in random_matrix():
        print(row)
