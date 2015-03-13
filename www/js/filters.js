/**
 * Created by Devon on 3/13/2015.
 */
angular.module("starter").filter("Capital", function(){
    //ensures first letter capitalization in appropriate places in he Mad Lib
    return function(userInput){
        if(userInput) {
            var capitalInput = "";
            capitalInput += userInput[0].toUpperCase();
            capitalInput += userInput.substring(1, userInput.length);
            return capitalInput
        }
    }
});