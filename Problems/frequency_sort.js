function frequencySort(arr) {
    const frequencyMap = {}
    const frequencyPairs = []

    for (let num of arr) {
        // frequencyMap = {}; // Initially empty

        // frequencyMap[5] = (frequencyMap[5] || 0) + 1; // First time encountering 5, sets count to 1
        // frequencyMap[5] = (frequencyMap[5] || 0) + 1; // Encountering 5 again, increments count to 2

        frequencyMap[num] = (frequencyMap[num] || 0) + 1
    }

    //create frequency element pairs
    for (let element in frequencyMap) {
        frequencyPairs.push([frequencyMap[element], element])
    }

    console.log("Frequency Pairs before sort", frequencyPairs)
    //sort frequency pairs array in descending order
    frequencyPairs.sort((a, b) => {
        b[0] - a[0]
        // console.log("a[]", a[0])
        // console.log("b[]", b[0])
        // console.log("Frequency Pairs after sort...", frequencyPairs)

    })

    console.log("Frequency Pairs after sort", frequencyPairs)


    //push sorted frequency pair values into array which will be sorted array
    const sortedArr = []
    for (const [freq, num] of frequencyPairs) {
        // for(let i = 0; i < freq; i ++){
        //     // sortedArr.push(num)

        // }
        // console.log(freq, num)
        sortedArr.push(num)
    }


    return sortedArr;
    // console.log(frequencyMap)

}

console.log(frequencySort([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5, 5, 6]))


/*

example for a[0] and b[0[ in this frequency pairs : [ [ 3, '1' ], [ 3, '2' ], [ 5, '3' ], [ 4, '5' ], [ 1, '6' ] ] 

Here's an example of how a[0] and b[0] work in the given frequencyPairs array:

Consider two pairs being compared during sorting:

Pair a: [3, '1']
a[0]: Accesses the frequency of element '1', which is 3.
Pair b: [5, '3']
b[0]: Accesses the frequency of element '3', which is 5.
Calculation:

b[0] - a[0] = 5 - 3 = 2
Since the result is positive (2), pair b is considered "greater" and will be placed before pair a in the sorted array. This is because element '3' has a higher frequency (5) than element '1' (frequency 3).
Key Points:

a[0] and b[0] are used to access the frequencies of elements within pairs, allowing the sorting algorithm to compare those frequencies.
The subtraction b[0] - a[0] ensures that pairs with higher frequencies (larger first elements) are placed earlier in the sorted array.
This process is repeated for all pairs in the frequencyPairs array to achieve the desired descending order based on frequencies.

*/