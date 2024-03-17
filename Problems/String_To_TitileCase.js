
let string = "my name is deepak"

// for(let i = 0; i < string.length - 1; i++){
//     if(string[i] == " "){
//         string = string[i + 1].toUpperCase;
//     }
// }

console.log(string.replace(/\b\w/g, l => l.toUpperCase()) )

function titleCase(str) {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
}
console.log(titleCase("geeks for geeks"));
