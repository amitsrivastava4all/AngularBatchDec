app.controller("newsctrl",function($scope,newsfactory){
    var promise = newsfactory.callServer();
    promise.then(function(data){
        $scope.data = data;
    },function(err){
        $scope.err = err;
    });
/*$scope.loadNews=function(){
    var promise = newsfactory.callServer();
    promise.then(function(data){
        $scope.data = data;
    },function(err){
        $scope.err = err;
    }); */
//}
})