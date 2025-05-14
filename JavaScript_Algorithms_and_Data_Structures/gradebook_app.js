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

function getGrade(score) {
    if(score === 100) {
        return 'A++';
    }
    if(score >= 90 && score <= 99) {
        return 'A';
    }
    if(score >= 80 && score <= 89) {
        return 'B';
    }
    if(score >= 70 && score <= 79) {
        return 'C';
    }
    if(score >= 60 && score <= 69) {
        return 'D';
    }
    else if(score <= 59) {
        return 'F';
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

function hasPassingGrade(score) {
  if (getGrade(score) === 'F') {
    return false;
  }
    return true;
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores);
    let grade = getGrade(studentScore);
    let passing = hasPassingGrade(studentScore);

    if (passing) {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } 
    else {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
