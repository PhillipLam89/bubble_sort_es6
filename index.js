const arr_Not_Ordered = (array) =>
    array.some((val,i) => val > array[i + 1])


const myArr= [66,9,-3,0,23, 0.244+4]

while (arr_Not_Ordered(myArr)) {

  const i = myArr.findIndex((val,index,arr) => val >arr[index + 1]);
  [myArr[i], myArr[i+1]] = [myArr[i+1], myArr[i]]

}
console.log(myArr)
