const arr = [43,3,635,2,355,4,99];

function divideBySix(arr){
    return arr.every(num => num % 6 === 0);
}
console.log(divideBySix(arr));
