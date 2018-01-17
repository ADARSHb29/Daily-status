app.config(function($routeProvider) {
    $routeProvider
    .when("/view-bus",
    {
        templateUrl : "view-bus.html"
    })
    .when("/add-bus",
    {
        templateUrl : "add-bus.html"
    })
    .when("/pass-change",
    {
        templateUrl : "pass-change.html"
    })
    .when("/delete-bus",
    {
        templateUrl : "delete-bus.html"
    });
});