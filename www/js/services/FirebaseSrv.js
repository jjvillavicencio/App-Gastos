starter.factory('FirebaseSrv', function($firebase) {
    var ref = new Firebase("https://appgastos-c2c32.firebaseio.com"),
        refExpenses = new Firebase("https://appgastos-c2c32.firebaseio.com/expenses"),
        refRoomMates = new Firebase("https://appgastos-c2c32.firebaseio.com/room-mates");
    return {
        ref: function() {
            return ref;
        },
        refExpenses: function() {
            return refExpenses;
        },
        refRoomMates: function() {
            return refRoomMates;
        }
    }
});