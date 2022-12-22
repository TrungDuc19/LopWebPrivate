var str1 = "Hưng, Cương, Tài";

const strToArr = (str) => {
    let arr = str1.split(str);
    return arr;
}
console.log(strToArr(", ")) //output: [ 'Hưng', 'Cương', 'Tài' ]


const getStr = (str) => {
    let arr = strToArr(", ");
    return arr[1];
}
console.log(getStr(str1)) //output: Cương



var str2 = "    Dinh Tan Hung      ";

const getUpperStr = (str) => {
    return str.trim().toUpperCase();
}
const getLowerStr = (str) => {
    return str.trim().toLowerCase();
}
console.log(getUpperStr(str2)) //output : DINH TAN HUNG
console.log(getLowerStr(str2)) //output : dinh tan hung