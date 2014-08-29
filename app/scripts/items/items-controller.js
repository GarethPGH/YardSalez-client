'use strict'

angular.module('YardSalezApp').controller('ItemsController', itemsController);

function itemsController($scope) {
    var self = this;
    $scope.items = [];

    self.addItem = function () {
        if($scope.newItem) {
            $scope.items.push($scope.newItem);
            $scope.newItem = null;
        }
    }

}