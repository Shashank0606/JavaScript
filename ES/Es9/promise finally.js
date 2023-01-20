//promise.finally()


function process() {
    process1()
        .then(process2)
        .then(process3)
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            console.log(`it must execut no matter success or fail`);
        });
}