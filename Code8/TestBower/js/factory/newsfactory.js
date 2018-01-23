app.factory("newsfactory",function($http,$q,NEWS){
    var object = {
        callServer(){
            var defer = $q.defer();
            $http.get(NEWS).then(function(data){
                defer.resolve(data);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
})