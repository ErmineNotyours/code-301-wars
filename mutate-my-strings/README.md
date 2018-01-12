# Mutate My Strings
## Problem Domain
Given two strings, transform stringOne into stringTwo, one letter at a time showing results at each step.

## Solution
Step through the strings one letter at a time like in the previous challenge, copying the code to another string.  Each step is concatinated onto one long string, each step is separated by "\n".  If stringTwo has the current character from stringOne already at the location, skip the position, don't copy the string for that step.  I'm at first thinking of stepping through stringOne, but what if stringTwo is bigger?

Make the addition into candidateNewString.  If the candidate equals the previous candidate, do not concatinate into newString.