//New view cache in Ionic makes ocntrollers only called on app start or when recreated instead of every page change.
//To listen for when this page is active listen to $ionicView.enter event:
// $scope.$on('$ionicView.enter', function(e){})


angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope){

})

.controller('ChatsCtrl', function($scope, Chats){

$scope.chats = Chats.all();
$scope.remove = function(chat){

    Chats.remove(chat);
};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats){

    $scope.chat = Chats.get($stateParams.chatId);
})


.controller('AccountCtrl', function($scope){

    $scope.settings = {

        enableFriends: true
    };
});


