//Array.prototype.includes()

const arr = [1, 2, 3, 4, 5];
// Check if there is the number 3 in the array
arr.include(3); // true

if (arr.include(3))
    // ... Equivalent to the previous writing of indexOf
    arr.indexOf(3); // 2 (return its array position)
// If you want to write it in the if, you must add `> -1`, which is not as clear as the include in ES7 in terms of semantics



