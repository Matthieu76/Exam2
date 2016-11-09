(function(){

var app = angular.module('app', []);

app.directive('header', function(){
	return {
		restrict : 'A',
		name : 'header',
		templateUrl : 'partials/common/header.html'
	}
});

app.directive('footer', function(){
	return {
		restrict : 'A',
		name : 'footer',
		templateUrl : 'partials/common/footer.html'
	}
});

app.directive('home', function(){
	return {
		restrict : 'A',
		name : 'home',
		templateUrl : 'partials/home/home.html'
	}
});

app.controller("appController", function(){

	this.personne = object;

});

  var object = {
    name : "Tian Bao",
    age : 2,
    skills : ['Manger', 'Jouer'],
    image : 'img/panda.jpg'
  };

})();
