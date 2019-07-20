const cariMedian = arr => {
	let median,
		foo = arr.length / 2 - 1;

	arr.length % 2 === 0
		? median = (arr[foo + 1] + arr[foo]) / 2
		: median = arr[Math.ceil(foo)];

	return median;
}

/*console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5*/
