//Rest, Spread

function restParams(p1, p2, ...p3) {
    console.log(p1); // 1
    console.log(p2); // 2
    console.log(p3); // [3, 4, 5]
}
restParams(1, 2, 3, 4, 5);