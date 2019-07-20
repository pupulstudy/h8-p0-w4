const changeMe = arr => {
    let i = 0;
    const fooYear = new Date().getFullYear();

    while (i < arr.length) {
        const fooObj = new Object();

        fooObj["firstName"] = arr[i][0];
        fooObj["lastName"] = arr[i][1];
        fooObj["gender"] = arr[i][2];

        arr[i][3] === undefined || arr[i][3] > fooYear
            ? fooObj["age"] = `Invalid Birth Year`
            : fooObj["age"] = fooYear - arr[i][3];
        i++;

        console.log(`${i}. ${fooObj.firstName} ${fooObj.lastName}: `);
        console.log(fooObj);
    }
}

/*changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""*/
