# Sum of Odd Cubed Numbers

## Problem Domain
Find the sum of the odd numbers within an array, after cubing the initial integers.  This function will return undefined if any of the values aren't numbers.

## Solution
First, check for non numbers.  Return undefined if there is one.  Then cube all the integers, and sum only the odd numbers. Cube with array map, select the odd numbers with filter, and sum the total with reduce.