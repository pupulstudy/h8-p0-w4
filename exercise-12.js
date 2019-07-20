const countProfit = shoppers => {
        let listBarang = [
                ["Sepatu Stacattu", 1500000, 10],
                ["Baju Zoro", 500000, 2],
                ["Sweater Uniklooh", 175000, 1]
            ],
            k = 0;
        const result = new Array ();

        if (shoppers.length > 0) {
            let i = 0,
                fooLeftOver;

            while (i < listBarang.length) {
                const fooListI = listBarang[i];
                let j = 0,
                    fooTotalProfit = 0,
                    fooShopper = [];

                fooLeftOver = fooListI[2];

                while (j < shoppers.length) {
                    const fooAmount = shoppers[j]["amount"],
                          fooName = shoppers[j]["name"],
                          fooProduct = shoppers[j]["product"];

                    if (fooLeftOver >= fooAmount && fooProduct === fooListI[0]) {
                      fooLeftOver -= fooAmount;
                      fooShopper.push(fooName);
                    }
                  fooTotalProfit = (fooListI[2] - fooLeftOver) * fooListI[1];
                  j++;
            }
            fooListI.push(fooLeftOver);
            fooListI.push(fooTotalProfit);
            fooListI.push(fooShopper);
            i++;
        }

        while (k < listBarang.length) {
            const fooObj = new Object(),
                  fooListK = listBarang[k];

            fooObj["leftOver"] = fooListK[3];
            fooObj["product"] = fooListK[0];
            fooObj["shoppers"] = fooListK[5];
            fooObj["totalProfit"] = fooListK[4];

            result.push(fooObj);
            k++;
        }
    }
    return result;
}

/*console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]*/
