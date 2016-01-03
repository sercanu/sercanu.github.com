var blogApp = angular.module('blogApp', []);

blogApp.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

blogApp.controller('blogAppCtrl', function ($scope) {
    $scope.links = links;

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