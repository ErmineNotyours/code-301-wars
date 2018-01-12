# Highest Scoring Word

## Problem Domain
Each letter of a word scores according to its position in the alphabet.  a=1, b=2, c=3, etc.  Return the highest scoring word as a string.  If two words score the same, return the word that appears earliest in the original string.

## Solution
Use String.charCodeAt() to find the values of each character.  (I thought that since we are determining relative value, we wouldn't need to down-convert to a=1, though that turned out to not be true. aa and b should both equal the same value: 2, but if you use raw UTF they don't equal the same value.)  Add up the cumulative value of each word.  When you get to a space (UTF=32) then start evaluating a new word.  We need to be flexible because we don't know how many words there are.  Use a sort method to determine which word has the highest score.  Then return that word.  Arrays store the scores and words.

i counts through the string x, so every time a 32 is encountered, j is increment a new word is triggered.  Each word adds a value to an element in an array, and concatinates a word into another array.

I got the two different arrays, and I was able to use the sort function to place the highest score into index 0.  To tie the array with the individual words to the array with the scores, I wanted to put both arrays into an object so they would sort together, but Rafael suggested using Math.max and indexOf instead.