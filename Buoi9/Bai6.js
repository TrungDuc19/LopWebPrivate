const InsertString = (str1, str2 = '', index = 0) => {
    let result = '';
    for (let i = 0; i < index; i++) {
        result += str1[i];
    }
    result += str2;
    for (let i = index; i < str1.length; i++) {
        result += str1[i];
    }
    return result;
}

console.log(InsertString('We are doing some exercises.'));
//Output: We are doing some exercises.
console.log(InsertString('We are doing some exercises.', 'JavaScript '));
//Output: Javascript We are doing some exercises.
console.log(InsertString('We are doing some exercises.', 'JavaScript ', 18));
//Output: We are doing some JavaScript exercises.