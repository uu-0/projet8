function pairNumbers(minNumber, maxNumber){
    let result = [];
    let pairsNumbers = '';
    for(let i = minNumber; i <= maxNumber; i++) {
        if(i % 2 === 0){
            result.push(i);
        }
    }
    if(result.length > 0){
        pairsNumbers = result.join(',');
        return pairsNumbers;
    }
    return "aucun nombre pair"

}

pairNumbers(1, 10);
