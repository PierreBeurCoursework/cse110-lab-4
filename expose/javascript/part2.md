1. Line 12 prints `3`.
2. Line 13 prints `150`.
3. Line 14 prints `150`.
4. This function will return `[50, 100, 150]`, since it returns an array of the original prices after applying the `0.5` factor discount.
5. Line 12 causes an error since the variable `i` can only be accessed within the `for` block it is defined in.
6. Line 13 causes an error since the variable `discountedPrice` can only be accessed within the `for` block it is defined in.
7. Line 14 prints `150`.
8. This function will return `[50, 100, 150]`, since it returns an array of the original prices after applying the `0.5` factor discount. No error is caused since the variable `discounted` is returned within the same block as it is defined.
9. Line 11 causes an error since the variable `i` can only be accessed within the `for` block it is defined in.
10. Line 12 prints `3`.
11. This function will return `[50, 100, 150]`, since it returns an array of the original prices after applying the `0.5` factor discount. No error is caused since the variable `discounted` is returned within the same block as it is defined, and it is not reassigned to a new array after being assigned for the first time, instead, the array is modified.
12. 