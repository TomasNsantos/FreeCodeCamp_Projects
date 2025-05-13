function sumvalues(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}
console.log(sumvalues([1, 2, 3, 4, 5]));

let final_sum;

function getAverage(scores) {

final_sum = sumvalues(scores);
let average = final_sum / scores.length;
return average;

}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));