/*
    Are there more natural numbers (whole ints)
    or more numbers b/t 0 and 1

    More b/t 0 and 1
        explanation:
        if you have a spreadsheet where each row in column A is every natural #
        and columns B, C, etc... are the decimals

        A | B | C
        1   .1  1
        2   .1  2
        3   .3  4
        4   .5  6
        5   .6  7

        can add one to each diagnol # in the decimal to get a new number


*/


// 3n+1 (Collatz Conjecture)
// 1. Odd Number ? 3n + 1 : n/2
// Regardless of the number you start with, you will end up in
// an infinite loop that goes from 4 to 2 to 1

// 4 => even = divide by 2 = 2 => 2/2 = 1 => 3(1) + 1 = 4 =>
// => 2 => 1 => 4 => 2 => 1

// 12: 12 => 6 => 3 => 10 => 5 => 16 => 8 => 4 => 2 => 1