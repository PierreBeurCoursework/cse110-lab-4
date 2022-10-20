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
    1. `student.name`
    2. `student['Grad Year']`
    3. `student.greeting()`
    4. `student['Favorite Teacher'].name`
    5. `student.courseLoad[0]`
13. 
    1. `'32'`  
    The number `2` is converted into the string `'2'`, which is concatenated with `'3'`.
    2. `1`  
    The string `'3'` is converted into the number `3`, which has `2` subtracted from it.
    3. `3`  
    The value `null` is converted into the number `0`, which is added to `3`.
    4. `'3null'`  
    The value `null` is converted into the string `'null'`, which is concatenated with `'3'`.
    5. `4`  
    The boolean `true` is converted into the number `1`, which is added to `3`.
    6. `0`  
    The boolean `false` and the value `null` are both converted into the number `0`, and summed.
    7. `'3undefined'`  
    The value `undefined` is converted into the string `'undefined'`, which is concatenated with `'3'`.
    8. `NaN`  
    The string `'3'` and the value `undefined` are converted into the numbers `3` and `NaN`, respectively, and subtracted.
14. 
    1. `true`  
    The string `'2'` is converted into the number `2`, and compared.
    2. `false`  
    The strings `'2'` and `'12'` are converted into the numbers `2` and `12`, and compared.
    3. `true`  
    The string `'2'` is converted into the number `2`, and compared.
    4. `false`  
    The number `2` and the string `'2'` are of different types.
    5. `false`  
    The boolean `true` is converted into the number `1`, and compared.
    6. `true`  
    `Boolean(2)` evaluates to the boolean `true`, and is strictly checked for equality.
15. Compared to a regular equality check (`==`), a strict equality check (`===`) checks the equality without type conversion. Therefore, if both operands are of different types, the strict equality check will return `false`. The regular equality check would convert both operands to numbers before comparison.
16. 
    ```js
    for (const property in statistics) {
        if ((property[0] == 'r') || (statistics[property] % 2)) {
            console.log(property);
        }
    }
    ```
17. `[2, 4, 6]`  
    `modifyArray` calls back to `doSomething` on each element of the input `array`, and stores the results in the output `newArr`.
18. 
    ```js
    setInterval(function() {
        let d = new Date();
        let time = d.toLocaleTimeString();
        console.log(time);
    }, 1000);
    ```