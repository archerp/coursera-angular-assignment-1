(function () {
    'user strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {

        $scope.lunchList = "";
        $scope.lunchMessage = "";

        $scope.checkLunch = function () {
        
            if ($scope.lunchList === "") {
                $scope.lunchMessage = "Please enter data first";
                $scope.messageStyle = "text-danger";
                $scope.inputStyle = "has-warning";
                return;                               
            }

            var lunchItems = $scope.lunchList.split(',').filter(isValidLunchItem); // .filter removes ', ,'

            if (lunchItems.length  > 3) {
                $scope.lunchMessage =  "Too much!";
                $scope.messageStyle = "text-success";
                $scope.inputStyle = "has-success";
                return;                               
            }

            if (lunchItems.length  <= 3) {
                $scope.lunchMessage =  "Enjoy!";  
                $scope.messageStyle = "text-success";
                $scope.inputStyle = "has-success";
                return;                               
            }                   

        };

       function isValidLunchItem(item) {
           return item.replace(/\s/g, '').length > 0;
       }

    };

})();