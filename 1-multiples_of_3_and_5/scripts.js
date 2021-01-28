const numbers = [];

const bellow = 1000;

/**
 * Get Multiples
 * @param {number} multipleA
 * @param {number} multipleB
 * @param {number} limit
 * @param {array} array
 */
const getMultiples = (multipleA, multipleB, limit, array) => {
    // That are different from zero
    if (multipleA > 0 && multipleB > 0) {
        for (let i = 1; i < limit; i++) {
            // true if the value of "i" is a multiple of the parameters *multipleA* and *multipleB*
            if (i % multipleA === 0 || i % multipleB === 0) {
                // It is inserted into the array if it does not exist in it
                if (!array.includes(i)) {
                    array.push(i);
                }
            }
        }
    }
};

/**
 * Sum the values of an array
 * @param {number[]} array
 * @returns {number} total - the summed array values
 */
const addMultiples = (array) => {
    total = 0;
    // The array is ordered
    array.sort((a, b) => a - b);
    // The array values are added
    array.forEach((value) => (total = total + value));

    return total;
};

getMultiples(0, 5, bellow, numbers);

const result = addMultiples(numbers);

console.log(result);
