app.factory("myfactory",function($http,$q,URL){
    /*const object = {};
    object.callToServer=()=>{

    }*/
    const object = {
        //callToServer(scope){
            callToServer(){
              //console.dir($q);
                 var defer = $q.defer();
            console.log("Call Start...");
            $http.get(URL).then(function(response){
                defer.resolve(response);
               // scope.data = response;
                  console.log("Success ",response);  
            },function(err){
                defer.reject(err);
                console.log("Fail ",err);
            });
            console.log("Call End");
            return defer.promise;
        }
    }
    return object;
});