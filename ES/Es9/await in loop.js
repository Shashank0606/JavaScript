//await in loop
async function process(array) {
    for (const i of array) {
        await doSomething(i);
    }
}

async function process(array) {
    array.forEach(async i => {
        await doSomething(i);
    });
}