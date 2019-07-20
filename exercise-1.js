const angkaPrima = angka => {
	let i = 2;

	if (!angka) return false;
	while (i < angka) {
		if (angka%i === 0) return false;
		i++;
	}
	return true;
}

/*console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false*/
