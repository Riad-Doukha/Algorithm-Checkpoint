let arr = [1, 3, 8, 2, 4];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // Element to be inserted
        let j = i - 1;

        // Shift elements to the right to make space for the current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the current element in its correct position
        arr[j + 1] = current;
    }
    return arr;
}

console.log(insertionSort(arr));
