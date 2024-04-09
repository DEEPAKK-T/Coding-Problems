
let string = "my name is deepak"

// for(let i = 0; i < string.length - 1; i++){
//     if(string[i] == " "){
//         string = string[i + 1].toUpperCase;
//     }
// }

console.log(string.replace(/\b\w/g, l => l.toUpperCase()) )

function titleCase(str) {
	console.log("str", str) //str geeks for geeks
	str = str.toLowerCase().split(' '); //str after [ 'geeks', 'for', 'geeks' ]
	console.log("str after", str)
	for (let i = 0; i < str.length; i++) {
		console.log("str[i].charAt(0)", str[i].charAt(0)) //str[i].charAt(0) g
		// str[i].charAt(0) f
		// str[i].charAt(0) g
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	console.log("after title case str array", str) //after title case str array [ 'Geeks', 'For', 'Geeks' ]
	return str.join(' ');
}
console.log(titleCase("geeks for geeks"));

console.log(".......................")

function titleCaseLastEle(str){
	str = str.split(' ')
	console.log(str);

	for(let i = 0; i < str.length; i ++){
		console.log("str.length", str.length)
		str[i] = str[i].slice(0) + str[i].charAt(str[i].length).toUpperCase();
	}
	return str.join(' ')
}

console.log(titleCaseLastEle("geeks for geeks"));

