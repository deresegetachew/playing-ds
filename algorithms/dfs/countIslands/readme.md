Given a binary matrix representing 1s as land and 0s as water, return the number of islands.

An island is formed by connecting adjacent lands 4-directionally (up, down, left, and right).

Example:
![island matrix](../../../.assets/islands_binary_matrix.png)****



## Learnings from this problem:


•	Pattern: Treat a 2D grid as an implicit graph where each cell represents a node, and adjacent cells (up, down, left, right) represent edges.

•  Problems that require traversing or modifying connected components in a grid can often be modeled as Depth-First Search (DFS) or Breadth-First Search (BFS).

•  This recursive expansion follows a classic flood fill approach, which is also a foundational computer graphics algorithm.

•	Ensure that traversal stays within the bounds of the grid by performing boundary checks. Implementing boundary checks (if (x < 0 || y < 0 || x >= rows || y >= cols)) prevents array out-of-bound errors, which is critical in grid problems.