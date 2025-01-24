const inputString = "apple,banana,orange,apple,grape,banana";

const pro = (input) => {
    const wordsArray = input.split(',');
    const uniqueWordsArray = [...new Set(wordsArray)];
    uniqueWordsArray.sort();
    return uniqueWordsArray.join(',');
};


console.log(pro(inputString));