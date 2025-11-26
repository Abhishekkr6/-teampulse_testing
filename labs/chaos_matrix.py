import itertools
import random

# Generates a pseudo-random matrix and computes quirky stats for fun

def build_matrix(rows: int, cols: int, seed: int = 7) -> list[list[int]]:
    rng = random.Random(seed)
    return [[rng.randint(-50, 50) for _ in range(cols)] for _ in range(rows)]


def diagonal_checksum(matrix: list[list[int]]) -> int:
    primary = sum(matrix[i][i] for i in range(min(len(matrix), len(matrix[0]))))
    secondary = sum(matrix[i][~i] for i in range(min(len(matrix), len(matrix[0]))))
    return primary * secondary


def weird_energy_score(matrix: list[list[int]]) -> float:
    total = sum(abs(value) for value in itertools.chain.from_iterable(matrix))
    normalized = total / (len(matrix) * len(matrix[0]))
    return round(normalized ** 1.5, 3)


if __name__ == "__main__":
    chaos = build_matrix(8, 8)
    print("Checksum:", diagonal_checksum(chaos))
    print("Energy:", weird_energy_score(chaos))
