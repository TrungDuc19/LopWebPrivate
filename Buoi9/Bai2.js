const obj = {
    name: "Hưng",
    age: 20,
    email: "dth27902@gamil.com"
}

const run = (obj) => {
    const arr = [];
    for (let key in obj) {
        arr.push(key + ': ' + obj[key]);
    }
    return arr;
}

console.log(run(obj));