var firstReverse = function(singleString){
    var reverse = '';
    for(var i=singleString.length-1; i>=0; i--){
        reverse = reverse + singleString[i];
    }
        return reverse;
}

console.log(firstReverse('string'));


var swapCase = function(string){
    var caseString = string.split('');
    var newWord = '';
    for (var i=0; i<caseString.length; i++){
        if(caseString[i] === caseString[i].toLowerCase()){
            caseString[i] = caseString[i].toUpperCase();
        }else {
            caseString[i] = caseString[i].toLowerCase();
        }
        
    newWord += caseString[i];
        
    }
    console.log(newWord);
    return newWord;
}
 
var text = 'Hello World'
swapCase(text);

//var letterCount = function(){
//    
//}

