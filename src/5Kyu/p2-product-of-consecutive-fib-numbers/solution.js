// The Fibonacci numbers are the numbers in the following integer sequence (Fn): 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// Your function takes an integer (prod) and returns an array/tuple (check the function signature/sample tests for the return type in your language):

// if F(n) * F(n+1) = prod:
// (F(n), F(n+1), true)
// If you do not find two consecutive F(n) verifying F(n) * F(n+1) = prod:
// (F(n), F(n+1), false)
// where F(n) is the smallest one such as F(n) * F(n+1) > prod.
// Examples:
// 714 ---> (21, 34, true)
// --> since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// 800 --->  (34, 55, false)
// --> since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

// Problem URL: https://www.codewars.com/kata/5541f58a944b85ce6d00006a/javascript

function productFib(prod){
    let f1 = 0, f2 = 1, next, currProd, state = false;
    while (true) {
        currProd = f1 * f2;
        if (currProd === prod) {
            state = true;
            break;
        } else if (currProd > prod) break;
        next = f1 + f2;
        f1 = f2;
        f2 = next;
    }    
    return [f1, f2, state]
}