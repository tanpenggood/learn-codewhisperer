function standardDeviation(numbers) {
    var avg = average(numbers);

    var squareDiffs = numbers.map(function (value) {
        var diff = value - avg;
        var sqrDiff = diff * diff;
        return sqrDiff;
    });

    var avgSquareDiff = average(squareDiffs);

    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
}

function average(data) {
    var sum = data.reduce(function (sum, value) {
        return sum + value;
    }, 0);

    var avg = sum / data.length;
    return avg;
}


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var stdDev = standardDeviation(numbers);
console.log(stdDev);


