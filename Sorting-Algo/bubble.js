// bubble sort
//
// 1. compare the first two elements of the array
// 2. if the first element is larger than the second element, swap them
// 3. move to the next pair of elements
// 4. repeat until the end of the array
// 5. repeat until the array is sorted
//
// [5, 3, 4, 1, 2]
// [3, 5, 4, 1, 2]
// [3, 4, 5, 1, 2]
// [3, 4, 1, 5, 2]
// [3, 4, 1, 2, 5]
// [3, 1, 4, 2, 5]
// [3, 1, 2, 4, 5]
// [1, 3, 2, 4, 5]
// [1, 2, 3, 4, 5]
//

function BubbleSort(arr) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return arr;
}