const digitPerkalianMinimum = angka => {
    let	i = 1, 
    	j = 1,
    	result;
    const fooArr = new Array();

    while (i <= angka) { 
        let fooIndex = 0;

        if (angka%i == 0) {
            fooIndex = String(i).length + String(angka/i).length; 
            fooArr.push(fooIndex);
            i++;
        }
        i++;
    }
    result = fooArr[0];             
    while (j < fooArr.length) {
        result > fooArr[j] 
        	? result = fooArr[j] 
        	: undefined;
        j++;
    }
    return result;
}

/*console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2*/
