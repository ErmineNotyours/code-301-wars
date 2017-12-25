# Format Words Into a Sentence

## Problem Domain
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

## Solution
Run through each array element, concating each element into a single string, separated by commas. Before the next to last element, concat the word "and" instead of a comma.