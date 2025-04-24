Array.prototype.mySome = function(condition){
    for(let i = 0 ; i < this.length; i++){
        const isTrue = condition(this[i], i, this)
        if(isTrue){
            return true
        }
    }
    return false
}

const arr = [1, 2, 3];

const test = arr.mySome((v, i, a) => v % 2 === 0);

console.log(test);