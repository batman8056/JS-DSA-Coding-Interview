let name = ["manikandan", "mani", "kannan"];

let value = [true, {}, [],  27,"working"];

//add the last element of the array
name.push("value1");
console.log(name);

//remove last element
value.pop();
console.log(value);

//shift first element value(removed)
value.shift();
console.log(value);

//unshift first element value(insert)
value.unshift("false");
console.log(value);

//cancat
console.log(value. concat(name));


