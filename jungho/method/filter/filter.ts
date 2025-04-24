export {}

Array.prototype.myFilter = function(condition){
    const arr = []

    for(let i = 0 ; i < this.length;  i++){
        const result = condition(this[i], i, this);
        if(result){
            arr.push(this[i])
        }
    }
    return arr
}

const arr = [1,2,3];

const test = arr.myFilter((v) => v > 1);

console.log(test);