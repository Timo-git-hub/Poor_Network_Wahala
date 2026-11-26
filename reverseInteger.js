function reverseInteger(number) {
    let sign = 1;

    if (number < 0) {
        sign = -1;
        number = -number;
    }

    let reversed = 0;

    while (number > 0) {
        let digit = number % 10;

        reversed = reversed * 10 + digit;

        number = Math.floor(number / 10);
    }

    return reversed * sign;
}
