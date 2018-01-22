app.controller("myctrl",($scope,myfactory)=>{
    $scope.loadData=()=>{
        var promise = myfactory.callToServer();
        console.log("Controller Load Ends.");
        // Do Something else (Before getting the Promise result)
        for(let i= 1; i<=10; i++){
            console.log(' I am Doing something else ',i);
        }
        
        promise.then(function(res){
           // call();
          
            $scope.data = res;
        },function(err){
              $scope.error = err;  
        })
    }
});

