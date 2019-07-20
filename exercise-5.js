const ubahHuruf = kata => {
	let	i = 0,
		foo = 0,
	 	result = new String();

	while ( i < kata.length) {
		if (kata[i] === 'z') {
			result += 'a';
			i++;
		}
		else {
			foo = Number(kata.charCodeAt(i));
			foo++;
			i++;
			
			result += String.fromCharCode(foo);
		}
	}
	return result
}

/*console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu*/
