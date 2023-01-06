// iterate over arrays

// array of emojis
const array = [
  "😁",
  "😁",
  "😁",
  "😁",
  "😁",
  "😜",
  "😜",
  "😜",
  "😜",
  "😅",
  "😅",
  "😅",
  "😅",
  "😅",
  "😭",
  "😊",
  "😎",
  "😤",
  "😳",
  "😨",
  "😩",
  "😒",
];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for loop
// for(let i=0; i < array.length; i++) {
//   console.log(array[i]);
// }

// for(let i in array) {
//   console.log(i,'--->', array[i])
// }

// while loop
// let i=0;
// while(i<array.length) {
//   console.log(array[i])
//   i++
// }

// forEach loop
//array.forEach((item, index)=> console.log(index+1, item));

//every
const evenItem = (num) => num % 2 == 0;
if (nums.every(evenItem)) {
  console.log("All items are even.");
} else {
  console.log("Not all items are even.");
}

const iterateOverNums = (arr) => {
  return arr.every((item, index) => item % 2 == 0);
};
//console.log(iterateOverNums(nums));

// some()

let emoji = (arr) =>
  arr.some((item, index) => {
    return item == "😜";
  });

//console.log(emoji(array))

// filter()
const filterArray = (arr) => {
  return arr.filter((item) => item === "😜");
};

//console.log(filterArray(array))

// map()

const loopWithMap = (arr) => arr.map((item) => item);

//console.log(loopWithMap(nums));

// reduce()

const num = (arr) => arr.reduce((total, value, arr) => total + value);

//console.log(num(array));

// linear search algorithm with for loop
const linearSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return `${item} is found:---> ${arr[i]}`;
    }
  }
  return `${item} is not found!`;
};

console.log(linearSearch(array, "😎"));
