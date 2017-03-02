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

  $scope.progressbartype = function(temp) {
  	types = ['success','info','warning','danger'];
  	
  	if (temp < 15)
  		type = types[1];
  	else if (15 <= temp  && temp <= 22)
  		type = types[0];
  	else if (22 < temp && temp <= 26)
  		type = types[2];
  	else
  		type = types[3];
  	return type;
  };
});
