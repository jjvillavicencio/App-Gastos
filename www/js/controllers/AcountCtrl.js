starter.controller('AccountCtrl', function($scope, $rootScope, $firebaseArray, $firebaseObject, $firebaseAuth) {
    $scope.showLoginForm = false; //Checking if user is logged in
    var auth = $firebaseAuth();
    if (!$scope.user) {
            $scope.showLoginForm = true;
    }
    //Login method
    
    $scope.login = function (em, pwd) {
        var error = null;
        firebase.auth().signInWithEmailAndPassword(em, pwd)
        .then(function(firebaseUser){
            console.log("User ID: " + firebaseUser.uid + ", Provider: " + firebaseUser.provider);
            $rootScope.user = firebaseUser;
            console.log(firebaseUser);
            $scope.showLoginForm = false;
            $scope.$apply();
            
           /* var ref_room_mates = firebase.database().ref().child('room_mates');

            $scope.room_mates = $firebaseArray(ref_room_mates);
            $scope.room_mates.$add(["k@gmail.com","r@gmail.com"]);*/
        })        
        .catch(function(error) {
            console.log("Error authenticating user:", error);
        });

    };

    //Logout method
    
    $scope.logout = function () {
        firebase.auth().signOut().then(function() {
            $scope.showLoginForm = true;
        }, function(error) {
            console.log(error);
        });            
    };
});