(function (){

	'use strict';
 
	var app = angular.module("login", []);

	

	app.controller("loginCtrl", function($scope){

		
		$('.carousel').carousel();
	
		$scope.showOptions = function(){

			$('.modal.fade')
  				.modal('show');
		};


	});

})();
