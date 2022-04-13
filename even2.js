function sumofEven(start, end) {
	if (typeof start !== 'number' || typeof end !== 'number') {
		return 'invalid number supplied';
	}
	if (Number(start) > Number(end)) {
		return 'first number must be less than the second'
	}

	var sum = 0;
	for (var count = start; count <= end; count++) {
		if (count% 2 == 0) {
		sum += count;
		}
	}
	return sum;
}
