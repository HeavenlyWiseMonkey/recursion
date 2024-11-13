function fibs(n) {
    let first = 0;
    let second = 1;
    let sequence = [];
    if (n===1) {
        return [first];
    }
    if (n===2) {
        return [first, second];
    }
    for (let i=2; i<n ; i++) {
        sequence.push(first);
        second += first;
        first = second - first;
    }
    sequence.push(first);
    sequence.push(second);
    return sequence;
}

// console.log(fibs(8));

function fibsRecursive(n, sequence = [0,1]) {
    if (n===0) {
        return [0];
    }
    if (n===1) {
        return sequence;
    }
    if (n===2) {
        return sequence;
    }
    sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2]);

    return fibsRecursive(n-1, sequence);
}

// console.log(fibsRecursive(8));