starter.controller('DashCtrl', function($scope, $rootScope, $firebaseObject, $firebaseArray, $firebaseAuth) {
   
    console.log($rootScope.user);
    var ref = firebase.database().ref().child("expenses");
  // create a synchronized array
  $scope.expenses = $firebaseArray(ref);
  

    $scope.addExpense = function(e) {
        $scope.expenses.$add({
            by: $rootScope.user.email,
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