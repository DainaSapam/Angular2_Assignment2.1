//Problem Statement 1
function Person(name){
  this.name = name;
}

Person.prototype.prefixName = (arr => arr.map(character => name + character));

//Problem Statement 2
let obj = {first:'Fist', last:'Last', dob:'11-01-91'};
let {first:f, last:l, dob:d} = obj;
console.log(f,l,d);

//Problem Statement 3
var friends =['one','two', 'three'];
var [one,two,three] = friends;
console.log(one);
console.log(two);
console.log(three);

//Problem Statement 4
(function() {
 let food ="aomge"; 
 console.log(food);
}());

