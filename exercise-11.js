const shoppingTime = (memberId, money) => {
    let i = 0, 
        fooObj = {
            memberId: memberId,
            money: money,
            listPurchased: [],
            changeMoney: money
        },
        fooList = {
            fooItems: [
                'Sepatu Stacattu', 
                'Baju Zoro', 
                'Baju H&N', 
                'Sweater Uniklooh', 
                'Casing Handphone'
                ],
            fooPrices: [1500000,
                500000,
                250000,
                175000,
                50000
                ]
        };

    if (memberId === '' || money === undefined) return "Mohon maaf, toko X hanya berlaku untuk member saja";
    else if (money < fooList["fooPrices"][fooList["fooPrices"].length-1]) return "Mohon maaf, uang tidak cukup";
    else {
        while (i < fooList["fooPrices"].length) {
            if (money >= fooList["fooPrices"][i]) {
                fooObj["changeMoney"] -= fooList["fooPrices"][i];
                fooObj["listPurchased"].push(fooList["fooItems"][i]);
            }
            i++;
        }
    }
    return fooObj;
}

/*console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja*/
