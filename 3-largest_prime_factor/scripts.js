const value = 600851475143;
const primesNumbers = [2, 3, 5];

const getPrimeFactor = (max) => {
    for (let i = 1; i < max; i++) {
        const string = i.toString();

        const lN = string.charAt(string.length - 1);

        if (
            i === 2 ||
            i === 3 ||
            i === 5 ||
            lN === "1" ||
            lN === "3" ||
            lN === "7" ||
            lN === "9"
        ) {
            if ((max / i) % 1 === 0) {
            }
            console.log(i);
        }
    }
};
getPrimeFactor(10);
/*
600851475143 | 71	(600851475143 : 71 = 8462696833)
8462696833   | 839	(8462696833 : 839 = 10086647)
10086647  	 | 1471 (10086647 : 1471 = 6857)
6857  	     | 6857 (6857 : 6857 = 1)
1

600851475143 = 71 · 839 · 1471 · 6857
*/

console.log(primesNumbers);
