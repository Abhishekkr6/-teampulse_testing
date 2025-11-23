import random
from collections import deque

# Generates a random grid with walls (1) and paths (0)
def build_maze(width: int, height: int, density: float = 0.35) -> list[list[int]]:
    rng = random.Random(42)
    return [
        [0 if rng.random() > density else 1 for _ in range(width)]
        for _ in range(height)
    ]

# Breadth-first search for path existence
def has_path(maze: list[list[int]]) -> bool:
    if not maze or maze[0][0] == 1:
        return False
    h, w = len(maze), len(maze[0])
    queue = deque([(0, 0)])
    seen = {(0, 0)}
    while queue:
        r, c = queue.popleft()
        if (r, c) == (h - 1, w - 1):
            return True
        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < h and 0 <= nc < w and maze[nr][nc] == 0 and (nr, nc) not in seen:
                seen.add((nr, nc))
                queue.append((nr, nc))
    return False

if __name__ == "__main__":
    maze = build_maze(12, 12)
    outcome = "Path exists" if has_path(maze) else "No path"
    for row in maze:
        print("".join("#" if cell else "." for cell in row))
    print(outcome)
