var obj1={
	num:2
};

var obj2={
	num:3
};

function addNumbers(number,num1,num2,num3){
	return this.num + number + num1 + num2 + num3;
};

//method.call(object,method arguments);
console.log(addNumbers.call(obj1,10,1,2,3));

//method.apply(object,[method arguments as arrays])
console.log(addNumbers.apply(obj2,[10,2,2,3]));

//bind not return a value it is returns a function object(anonymous)
var boundAddNumbers=addNumbers.bind(obj1,10,2,2,3);
console.log(boundAddNumbers(10,2,2,3));
