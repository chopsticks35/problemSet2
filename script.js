var firstReverse = function(singleString){
    var reverse = '';
    for(var i=singleString.length-1; i>=0; i--){
        reverse = reverse + singleString[i];
    }
        return reverse;
}

console.log(firstReverse('string'));


