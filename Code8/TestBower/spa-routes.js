app.config(function($routeProvider,$locationProvider,HOME,ABOUT,CNEWS){
    $locationProvider.hashPrefix('');
    $routeProvider.when(HOME,{
        templateUrl:'views/home.html'
    }).when(ABOUT,{
        templateUrl:'views/aboutus.html',
        controller:'aboutusctrl'
    }).when(CNEWS,{
        templateUrl:'views/news.html',
        controller:'newsctrl'
    }).otherwise({template:'Some Wrong URI U Type'});
});