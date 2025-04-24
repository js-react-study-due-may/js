export {}

Array.prototype.myEvery = function(condition){
    for(let i = 0 ; i < this.length ; i++){
        const isTrue = condition(this[i], i, this)

        if(!isTrue){
            return false
        }
    }

    return true
}

const arr = [1,2,3];

const test = arr.myEvery((v) => v === 1);

console.log(test);