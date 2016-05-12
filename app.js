var app = angular.module("soittilaApp", ["firebase", "ui.bootstrap"]);
app.controller("SoittilaCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://soittila.firebaseio.com/temps");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "temps");

  $scope.max = 100;

  $scope.alltemps = $firebaseObject(ref.child('greeGasCold').child('name'));

});