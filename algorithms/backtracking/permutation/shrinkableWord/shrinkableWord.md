## Shrinkable words


What nine letter word can be reduced  to a single letter word one letter at a time
by removing letters, leaving it a legal word each time.


A shrinkable word is  a word that can be reduced down to one letter by removing
one character at a time, leaving a word at each step.


What defines our shrinkable decision tree :

- Decision at each step (each level of the tree)
  - what letter are we going to remove
  
- Options at each decisions (branches from each node)
  - the remaining letters in the string
  
- information we need to store along the way
  - the shrinkable string


Base Case:
- A string that is not a word is not a shrinkable word
- Any single-letter word is shrinkable (A, I and O)

Recursive Case:
- A multi-letter word is shrinkable if you can remove a letter to form a shrinkable word
- A multi-letter word is not shrinkable if no matter what letter you remove, its not shrinkable.