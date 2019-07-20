const cariModus = arr => {
  let i = 0,
      len = arr.length;
  const result = new Array();

  while (i < len) {
    let j = 0,
        foo = 0;

    while (j < len) {
      if (arr[i] === arr[j] && j !== i) {      
        foo++;
        if (foo === len-1) return -1;
        else result.push(arr[j]);
      }
      j++;
    }
    i++;
  }
  return result[0] || -1;
}

/*console.log(cariModus([10, 4, 5, 2, 4])) // 4
console.log(cariModus([5, 10, 10, 6, 5])) // 5
console.log(cariModus([10, 3, 1, 2, 5])) // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])) // 3
console.log(cariModus([7, 7, 7, 7, 7])) // -1*/
