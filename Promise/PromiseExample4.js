let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
});

// executes when promise is resolved successfully

countValue
    .then(function successValue(result) {
        console.log(result);
    })

    .then(function successValue1() {
        console.log("Calling Multiple functions");
    });