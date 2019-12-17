let odd = {};
let even = {};
let chars = {}
let outPut = {'even':[], 'odd':[],'chars':[]};
function sortArray(array){
    for (const el of array){
        if (typeof (el)== "number"){
           if (el % 2 == 0){
               outPut.even.push(el);
           } else{
               outPut.odd.push(el);
           }
           
        }else if (typeof (el) == "string"){
            outPut.chars.push(el)
        }
    }
    return outPut
}
console.log(sortArray([1,3,4,'a','b',6]))