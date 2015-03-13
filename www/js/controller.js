/**
 * Created by Devon on 3/12/2015.
 */
angular.module("starter").controller("MainCtrl", function($scope){
    $scope.clearInputs = function(){
        $scope.sillyWord1 = null;
        $scope.lastName = null;
        $scope.pluralNoun = null;
    };
});