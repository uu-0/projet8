function pairNumbers(minNumber, maxNumber){
    result = '';
    for(let i = minNumber; i <= maxNumber; i++) {
        if(i % 2 === 0){
            result += i + ',';
        }
        return result;
    }
    return result;
}

export default pairNumbers
