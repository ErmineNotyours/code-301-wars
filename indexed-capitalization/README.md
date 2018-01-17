# Indexed Capitalization
## Problem Domain
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

## Solution
Go through a string as an array.  Use the index array to make a capital letter using the toUpperCase() method.  Break each letter out one at a time and concatinate to a new string using toUpperCase() where necessary.  Disregard requests out of range.  Use includes() to find indices to capitalize.