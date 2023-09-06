// Sort the actors by age using the merge sort algorithm.
function mergeSort(actors) {
    if (actors.length < 2) {
        return actors;
    }

    var middle = Math.floor(actors.length / 2);
    var left = actors.slice(0, middle);
    var right = actors.slice(middle, actors.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0].age < right[0].age) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

// test mergeSort

var actors = [
    { name: 'Tom Hanks', age: 55 },
    { name: 'Tom Cruise', age: 56 },
    { name: 'Sandra Bullock', age: 45 },
    { name: 'George Clooney', age: 54 },
    { name: 'Matt Damon', age: 44 },
    { name: 'Bruce Willis', age: 65 },
    { name: 'Morgan Freeman', age: 55 },
    { name: 'Jennifer Lawrence', age: 49 },
    { name: 'Jennifer Aniston', age: 47 },
    { name: 'Mila Kunis', age: 43 },
];

var sortedActors = mergeSort(actors);

console.log(sortedActors);