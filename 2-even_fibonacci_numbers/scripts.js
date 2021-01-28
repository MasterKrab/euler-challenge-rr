const fibonacciNumbers = [1, 2];

const getFibonacciNumbers = (maxTerm) => {
    const fn = fibonacciNumbers;

    let totalValue = 2;

    for (let i = 3; i < maxTerm + 1; i++) {
        fn.push(fn[fn.length - 1] + fn[fn.length - 2]);

        if (fn[fn.length - 1] % 2 === 0) {
            totalValue = totalValue + fn[fn.length - 1];
        }
    }

    console.log(totalValue);

    console.log(fibonacciNumbers);
};

getFibonacciNumbers(32);
