const primeNumberOrNot = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return "Given Number is Prime";
        }
        else {
            return "Given Number is Not Prime";
        }
    }
}
