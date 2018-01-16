function myController($scope,initfactory){
    console.log("Controller Start ",initfactory);
    $scope.fullName = () => {
        var result = initfactory.initCap($scope.firstname) + " " + initfactory.initCap($scope.lastname);
        $scope.fullname = result;
    }
}
app.controller("initctrl",myController);
// app.controller("initctrl", ($scope, initfactory) => {
//     console.log("Controller Start ",initfactory);
//     $scope.fullName = () => {
//         var result = initfactory.initCap($scope.firstname) + " " + initfactory.initCap($scope.lastname);
//         $scope.fullname = result;
//     }
// });