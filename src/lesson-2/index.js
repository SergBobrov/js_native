console.log("test");

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];


function map(arr, fn) {
    let mappedArr = [];

    arr.forEach(element => {
        mappedArr.push(fn(element));
    });
    return mappedArr;
}

/*s => ({...students, scores: s.scores + 10})*/

const add = (s) => {
    return {...students, scores: s.scores + 10}
}

console.log(map(students, add));

function find(arr, fn) {
    for (const ellement of arr) {
        if (fn(ellement) === true) {
            return ellement;
        }
    }
}

console.log(find(students, st => st.name === "Bob"));


function fliter(arr, fn) {
    let filteredArr = [];
    for (let element of arr) {
        if (fn(element) === true) {
            filteredArr.push(element);
        }
    }
    return filteredArr;
}

console.log(fliter(students, st => st.scores < 100));