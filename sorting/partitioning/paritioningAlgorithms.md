Partitioning algorithms are a key component of sorting algorithms like QuickSort. There are several ways to implement partitioning. Here, we'll discuss three common partitioning schemes: 
- Hoare's partitioning, 
- Lomuto's partitioning, 
- Dutch National Flag problem (three-way partitioning).

1. **Hoare's Partitioning Scheme**
Hoare's partitioning scheme works by maintaining two indices, one starting from the beginning and the other from the end of the array. The function moves these indices towards each other and swaps elements to ensure that all elements less than the pivot are on the left and all elements greater than the pivot are on the right.


2. **Lomuto's Partitioning Scheme**
Lomuto's partitioning scheme is simpler to understand and implement than Hoare's partitioning. It uses a single index to scan the array and a separate index to mark the position of the pivot.


3. **Dutch National Flag Partitioning (Three-Way Partitioning)**
The Dutch National Flag problem solves the issue of handling multiple duplicates of the pivot efficiently. This partitioning scheme divides the array into three parts: elements less than the pivot, elements equal to the pivot, and elements greater than the pivot.

4. **Median of Three Partitioning**
The Median of Three partitioning selects the pivot as the median of three elements: the first, the middle, and the last element of the array. This choice is more likely to approximate the true median of the array, leading to better performance on average.


### Summary of Partitioning Algorithms
- **Hoare’s Partitioning:** Efficient with fewer swaps, uses dual pointers.
- **Lomuto’s Partitioning:** Simpler, but generally more swaps.
- **Dutch National Flag Partitioning:** Ideal for arrays with many duplicates.
- **Median of Three Partitioning:** Chooses a better pivot to avoid worst-case scenarios, combined with either Hoare's or Lomuto's partitioning.

| Partitioning Scheme | Best Case Time | Worst Case Time | Space Complexity |
|---------------------|----------------|-----------------|------------------|
| Hoare's             | O(n log n)     | O(n^2)          | O(log n)         |
| Lomuto's            | O(n log n)     | O(n^2)          | O(log n)         |
| Dutch National Flag | O(n log n)     | O(n^2)          | O(log n)         |
| Median of Three     | O(n log n)     | O(n^2)          | O(log n)         |