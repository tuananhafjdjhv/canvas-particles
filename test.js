//// Thực hành sử dụng Enhanced object literals///

let ar1 = [['hh','hung'],['â','tuan anh'],['hh','tuanbnn anh']]
function arrToObj(arr) {
    let obj = arr.reduce(function (accumulator, curent) {
        accumulator = {...accumulator,[curent[0]]:curent[1]}
        return accumulator
    }, {})
    return obj
}

console.log(arrToObj(ar1))
//
// let total = 0
// for (let i = 0; i <5 ; i++) {
//     total+=i
// }
function reduceFake(arr, total){
    for (let i = 0; i < arr.length; i++) {
        total= {...total,[arr[i][0]]:arr[i][1]}
    }
    return total
}

console.log(reduceFake(ar1,{}))