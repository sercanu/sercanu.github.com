var dailyApp = angular.module('dailyApp', []);

dailyApp.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

dailyApp.controller('dailyAppCtrl', function ($scope) {
    $scope.links = links;
    $scope.queues = queues;
    $scope.workouts = workouts;
    $scope.quotes = quotes;

    $scope.filter = {};

    $scope.getCategories = function (cattype) {
        return ($scope[cattype] || []).map(function (w) {
            return w.category;
        }).filter(function (w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };
    
    $scope.filterByCategory = function (link) {
        return $scope.filter[link.category] || noFilter($scope.filter);
    };
    
    function noFilter(filterObj) {
        for (var key in filterObj) {
            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    }
});