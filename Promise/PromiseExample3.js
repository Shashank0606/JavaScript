new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
})
    .finally(() => console.log("Promise ready")) // triggers first
    .then(result => console.log(result));