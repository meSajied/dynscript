s = "hello, you\'re good one"
t = "this is \n two line sentence"
u = "this is\
a single\
line"
//console.log(t, u)

// working with strings in Javascript...

var str = "This is a sentence to test javascript string variable"

console.log(str.charAt(0), str.length-1, str.substring(1,4), str.slice(1,4))

console.log(str.indexOf("a"), str.lastIndexOf("a"), str.indexOf("j", 2))

console.log(str.split(" "), str.toUpperCase(str), str.replace("s", "r"))