export {}

Array.prototype.myForEach = function(callback){
    for(let i = 0 ; i < this.length ; i++){
        callback(this[i], i, this)
    }
}


const arr = [1, 2, 3];

const test = arr.myForEach((v, i, a) => console.log(v));