# backtracing algorithms

usually backtracking questions or algorithms are categorized as :


  - Permutations
    - order matters in permutations
    - This questions can be either exhaustive searches or true backtracking
    - usually uses for loop

  - Combinations / Subsets
    - order does not matter
    - all possible selections of a subset from a set of elements
    - use include/exclude approach

  ![Types of backtracking solutions/problems](../../.assets/backtracking_algo.png)


Question to ask when doing backtracking:

  - does order matter ? if it does use combination otherwise permutation

recursion:

- base case
- recursive case: for combination problems
  - choose
  - explore
  - un-choose
- recursive case : for permutation problems
  - copy
  - edit
  - recurse
  
  for permutation problems we usually pass our variables by value, and each recursive stack frame has its own 
  independent copy of the data that it could edit as appropriate
  
  unlike combinations in permutations, the unchoose step is implicit since there is no need to undo anything
  by virtue of the the fact that editing a copy only has a local consequence. 


  In general with recursive backtracking it is important to keep track of **the decissions we have made so far**
  and the **the decisions we have left to make**

  backtracking recursion can have variable branching factors at each level


  use of helper functions and initial empty param that get built up is common