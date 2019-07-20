const naikAngkot = arrPenumpang => {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'],
        i = 0;
    const result = new Array();

    while (i < arrPenumpang.length) {
        let j = 0;
        const fooObj = new Object();
        
        fooObj["penumpang"] = arrPenumpang[i][0];
        fooObj["naikDari"] = arrPenumpang[i][1];
        fooObj["tujuan"] = arrPenumpang[i][2];

        while (j < rute.length) {
            if (rute[j] === arrPenumpang[i][1]) naikDari = j;
            else if (rute[j] === arrPenumpang[i][2]) tujuan = j;
            j++;
        }
        i++;
        fooObj["bayar"] = Math.abs(naikDari - tujuan) * 2000;
        result.push(fooObj);
    }
    return result;
}

/*console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([])); //[]*/
