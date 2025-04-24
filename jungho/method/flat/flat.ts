export {}

Array.prototype.myFlat = function(depth = 1) {
    const stack = [...this.map(item => [item, depth])]
    const result = []

    while(stack.length > 0){
        const [current, currentDepth] = stack.pop();
        if(Array.isArray(current) && currentDepth > 0){
            stack.push(...current.map(item => [item, currentDepth - 1]))
        }else{
            result.push(current)
        }
    }

    return result.reverse();
};

const arr = [1,2,3,[1,2,3]]

console.log(arr.myFlat())