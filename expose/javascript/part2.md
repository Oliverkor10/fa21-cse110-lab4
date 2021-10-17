# Lab4 Part 2

1. Line 12 will print out 3, since i increments until it becomes equal to `len(prices)` thus ending the for loop. In addition i is a var giving it a scope inside of the whole function.
2. Since `discountPrice` is a `var`, it's scope extends throughout the whole function. Thus line 13 will print out 150, the discounted price of the last element iterated through the for loop.
3. Since `finalPrice` is declared not only as a `var` but in the very beggining of the function, it mantains it's scope throughout the whole function. Thus line 14, will print out 150, as 150 \* 100 rounded to the nearest int and then divided afterwards by 100 is 150, and the variable is within it's proper scope.
4. The function will return `[50, 100, 150]` since the discount is 0.5, thus the discountedPrice will be half of the original price of each element. Then multiplying it by 100 rounding up and dividing it by 100 changes nothing since there are no decimals. Thus the `finalPrices` pushed into the array discounted are just half of each element in the `prices` list. We return `discounted` giving us that array.
5. This will return an error, because i is defined by let in the for loop, and thus only exists in the scope of the code block of the for loop.
6. This will return an error, because `discountPrice` was defined with let in the for loop and thus only exists in the scope of the code block of the for loop.
7. This will return 150, like before as `finalPrice` was defined by let in the beggining of the function, thus the code block that represents `finalPrice`'s scope is the function block.
8. This function will return [50, 100, 150], like before as`discounted` was defined by let in the beggining of the function, thus it's scope is the entire code block of the function.
9. This will return an error, because i is defined by let in the for loop, and thus only exists in the scope of the code block of the for loop.
10. Line 12 prints out 3, the length of the array we're testing.
11. The function would return [50,100,150] since `discountPrice` is being reinitilized in each iteration of the for loop allowing us to change its value.
12. - `student.name`
    - `student['Grad Year']`
    - `name.greeting`
    - `student['Favorite Teacher'].name`
    - `student.courseLoad[0]`
13. - '32' since integer 3 maps to it's string representation when adding
    - 1, since strings convert to their integer representation when subtracting
    - 3, since null converts to 0 for mathematical operations
    - 3null, since null converts to a string for string concatenation with '3'
    - 4, since true converts to 1 for mathematical operations
    - 0, since false converts to 0 and null converts to 0 for mathematical operations
    - 3undefined, since undefined converts to a string for string concatenation to '3'
    - NaN, since undefined becomes NaN during integer conversion which occurs for subtraction
14. - true, when comparing values of different types, JavaScript converts the values to numbers
    - true, when comparing values of different types, JavaScript converts the values to numbers
    - true, when comparing values of different types, JavaScript converts the values to numbers
    - false, === is a strict equality operator that checks the equality without any conversions
    - false, true is converted to 1 which is not equal to 2
    - true, the boolean of 2 is true, thus both booleans are equal to one another
15. === is a strict equality operator that checks the equality without any conversions, while == still converts.
16. in folder
17. The result will be [2,4,6] as modifyArray creates a newArr from all the elements of the old array with doSomething run on them. Since doSomething doubles each number, each element of the returned list will be the double of the element it corresponds to in the old list.
18. In code
19. 1,3,4,2
