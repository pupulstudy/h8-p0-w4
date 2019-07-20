const checkAB = num => {
    let i = 0,
        j = 0,
        foo;
    const fooFirstArr = new Array(),
          fooSecondArr = new Array();

    while ( i < num.length ) {
        num[i] === 'a'
            ? fooFirstArr.push(i)
            : num[i] === 'b'
                ? fooSecondArr.push(i)
                : undefined;
        i++;
    }

    while ( j < fooFirstArr.length ) {
        let k = 0;

        while ( k < fooSecondArr.length ) {
            foo = Math.abs(fooFirstArr[j] - fooSecondArr[k]);
            if (foo === 4) return true;
            k++;
        }
        j++;
    }
    return false;
}

/*console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false*/
