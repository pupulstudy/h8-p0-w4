const urutkanAbjad = str => {
	let fooSplit = str.split(""),
		fooSort = fooSplit.sort(),
		result = fooSort.join("");

	return result;
}

/*console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'*/
