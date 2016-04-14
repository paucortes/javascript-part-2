//Read about the Array.prototype.sort method. Create a function that can be used with sort. This function should take two strings, and return a value that sort can use to determine which is the longest string. Finally, create an array of strings and try to get it sorted using your new function.

var arr1 = ["A bit longer", "Short one"];

arr1.sort(function(string1, string2) {
    if (string1.length > string2.length) {
        return 1;
    }
    if (string1.length < string2.length) {
        return -1;
    }
    return 0;
});

// console.log(arr1);

// Create an array of objects (don’t need to use new here, just regular object literals). These objects will contain a name and email property. Then, run some code that will sort your array by the longest name. Then, run some code that will sort your array by e-mail address in alphabetical order.

var objectArray = [{
    name: "Pau",
    email: "paucortes@email.com"
}, {
    name: "Michael",
    email: "michailcain@email.com"
}, {
    name: "James",
    email: "jamesbond@email.com"
}];

objectArray.sort(function(obj1, obj2) {
    if (obj1.name.length > obj2.name.length) {
        return 1;
    }
    if (obj1.name.length < obj2.name.length) {
        return -1;
    }
    return 0;
});

// console.log(objectArray);

objectArray.sort(function(obj1, obj2) {
    if (obj1.email > obj2.email) {
        return 1;
    }
    if (obj1.email < obj2.email) {
        return -1;
    }
    return 0;
});

// console.log(objectArray);

// Create a function that can be used with Array.prototype.map. This function should take a number and return its square. Then, use this function with map on an array of numbers to check the result.

var arr2 = [1,2,3,4,5,6,7,8,9,10];

function numberSquared(num) {
    return num * num;
}

// console.log(arr2.map(numberSquared));

// Create a function that can be used with Array.prototype.map. This function should be able to take an object and square its “num” property. Then, use this function with map on an array of objects each containing a “num” property.

var arrWithNum = [{
    name: "object1",
    num: 3
}, {
    name: "object2",
    num: 6
}, {
    name: "object3",
    num: 5
}, {
    name: "object4",
    num: 12
}];
    

function numberSquaredInObjects(obj) {
    return obj.num * obj.num;
}

// console.log(arrWithNum.map(numberSquaredInObjects));

// In a previous workshop, you had to create a function that took two numbers and an operation (add, sub, mult, …) and returned the result of the operation on the two numbers. Here we are going to do the same but at a higher order. Create a function called operationMaker that takes only a string called operation as argument. This string could be “add”, “subtract”, “mult” or “div”. Your function will return a function that will take two numbers and return the result of running operation on these numbers. The end result should let me do something like this:

// var adder = operationMaker(“add”);
// var sum = adder(5, 10); //15

// var multiplier = operationMaker(“mult”);
// var product = mult(5, 10); // 50

function operationMaker(operation) {
    if (operation === "add") {
        return function(a,b) {
             return a + b;
        }
    }
    if (operation === "substract") {
        return function(a,b) {
             return a - b;
        }
    }
    if (operation === "mult") {
        return function(a,b) {
             return a * b;
        }
    }
    if (operation === "div") {
        return function(a,b) {
             return a / b;
        }
    }
}

// console.log(operationMaker("mult")(2,4));
// console.log(operationMaker("add")(4,5));
// console.log(operationMaker("div")(6,7));
// console.log(operationMaker("substract")(3,8));


