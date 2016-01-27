//<!-- reverses the order of a string -->
//var firstReverse = function(singleString){
//    var reverse = '';
//    for(var i=singleString.length-1; i>=0; i--){
//        reverse = reverse + singleString[i];
//    }
//        return reverse;
//}
//
//console.log(firstReverse('testString'));


//<!-- changes case to opposite -->

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

<!-- redo with forEach for array -->
    
    var words = ['My', 'name', 'is', 'Ti', 'Wegmeyer'];

    var arrayCase = function(wordsArray){
        var result = [];
        wordsArray.forEach(function(element){
            result.push(swapCase(element))      
        })
        return result;
    }
                    
    var doIt = arrayCase(words);
    console.log(doIt);

//
//var letterCount = function(string) {
//	var counter = 0;
//	var greatest = "";
//	var sArray = string.split(" ");
//	for(i = 0; i < sArray.length; i++) {
//		var innerCounter = 0
//		var letters = sArray[i].split("")
//		for(j = 0; j < letters.length; j++) {
//			for(k = (j + 1); k < letters.length; k++) {
//				if(letters[j] === letters[k]) {
//					innerCounter += 1
//				}
//			}
//		}
//		if(innerCounter > counter) {
//			counter = innerCounter;
//			innerCounter = 0;
//			greatest = sArray[i];
//		}	
//	}
//	return greatest;
//}
//
//var text = 'Which word has the most rerererepeating letters'
//console.log(letterCount(text));

//<!-- redo advanced functions -->
//    
//<!-- first check word -->
//    var letterCount = function(string) {
//        
//        
//    }