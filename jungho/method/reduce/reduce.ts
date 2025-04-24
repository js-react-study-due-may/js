export {}

Array.prototype.myReduce = function(callback, initialValue){
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1; 

    for(let i = startIndex ; i < this.length;  i++){
        accumulator = callback(accumulator, this[i], this);
    }
    return accumulator;
}

const arr = [1,2,3];


const test = arr.myReduce((p, c, arr) => p + c, 2);

console.log(test);