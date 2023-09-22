// const arr = {};
// const alpha = 'running R';

// for (char of alpha) {
// 	if (arr[char]) {
// 		arr[char]++;
// 	} else {
// 		arr[char] = 1;
// 	}
// }
// console.log(arr);

// const arr = {
// 	color: 'red',
// 	processor: 'i9',
// 	items: 4,
// };

// for(key in arr){
//     console.log(key, arr[key]);
// }

// const evenOdd = (n) => {
// 	for (i = 1; i <= n; i++) {
// 		return `if(${i}){
// console.log("${i} is ${i % 2 == 0 ? 'even' : 'odd'}")
// }`;
// 	}
// };

// evenOdd(50);
// document.querySelector('h1').innerText = evenOdd(50)

const evenOdd = (n) => {
	let result = '';

	for (let i = 1; i <= n; i++) {
		result += `if (${i}) {
  console.log("${i} is ${i % 2 === 0 ? 'even' : 'odd'}");
}\n`;
	}

	return result;
};
const input = prompt('numbers that u want to see');
const resultString = evenOdd(input);
document.querySelector('h1').innerText = resultString;
