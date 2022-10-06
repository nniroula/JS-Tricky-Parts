function curriedAdd(total) {
    // total is not yet defined
    if(total === undefined) return 0;

    // once the total is defined, have a function return the sum
    return function sum(number){
        if(number === undefined){
            return total;
        }else {
            total = total + number;
        }
        return sum;
    }
}

module.exports = { curriedAdd };


/*
Write a function called curriedAdd. If you give this function a number, it returns a new function to you. If you
 give this function no arguments, it returns the total of all the numbers you’ve passed to it so far.

let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();

firstAdder(); // 0
secondAdder(1)(2)(); // 3
thirdAdder(2)(8)(5)(1)(); // 16
*/