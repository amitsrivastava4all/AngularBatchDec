app.controller("aboutusctrl",function($scope,$routeParams){
$scope.companyName = "TCS";
$scope.details = "Software Development Company";
$scope.discount = $routeParams.discount;
$scope.offer = $routeParams.offerNumber;
})