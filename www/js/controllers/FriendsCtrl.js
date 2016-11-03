starter.controller('FriendsCtrl', function($scope, $rootScope, $firebaseArray, $firebaseObject){
    var ref_room_mates = firebase.database().ref().child('room_mates');
    $scope.room_mates = $firebaseArray(ref_room_mates);

    var ref_expences = firebase.database().ref().child("expenses");
    $scope.expenses = $firebaseArray(ref_expences);

    $scope.room_mates.$loaded(function(array){
        for(i = 0; i < array.length; i = i + 1){
            if(array[i][0] === $rootScope.email){
                $scope.roomiesEmail = array[i][1];
            }else if (array[i][1] === $rootScope.email){
                $scope.roomiesEmail = array[i][0];
            }
        }
        $scope.$apply();
    });


    $scope.addExpense = function(e) {
        $scope.expenses.$add({
            by: $scope.roomiesEmail, 
            label: $scope.label,
            cost: $scope.cost
        });
        $scope.label = "";
        $scope.cost = 0;
    };
    $scope.getTotal = function() {
        var i, rtnTotal = 0;
        for (i = 0; i < $scope.expenses.length; i = i + 1) {
            rtnTotal = rtnTotal + $scope.expenses[i].cost;
        }
        return rtnTotal;
    };
});