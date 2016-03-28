var myApp = angular.module('myApp', []).controller('myController', function($scope){
	$scope.countries = [
		{
			name: 'United States of America',
			population: 321368864,
			chiefOfState: 'President Barack H. Obama',
			flagColors: ['red', 'white', 'blue']
		},
		{
			name: 'Canada',
			population: 35099836,
			chiefOfState: 'Queen Elizabeth II',
			flagColors: ['red', 'white']
		},
		{
			name: 'Mexico',
			population: 121736809,
			chiefOfState: 'President Enrique Pena Nieto',
			flagColors: ['green', 'white', 'red']
		},
		{
			name: 'China',
			population: 1367485388,
			chiefOfState: 'President XI Jinping',
			flagColors: ['red', 'yellow']
		},
		{
			name: 'Japan',
			population: 126919659,
			chiefOfState: 'Emperor Akihito',
			flagColors: ['white', 'red']
		},
		{
			name: 'Taiwan',
			population: 23415126,
			chiefOfState: 'President Ma Ying-jeou',
			flagColors: ['red', 'blue', 'white']
		},
		{
			name: 'India',
			population: 1251695584,
			chiefOfState: 'President Pranab Mukherjee',
			flagColors: ['saffron', 'white', 'green', 'blue']
		},
		{
			name: 'Pakistan',
			population: 199085847,
			chiefOfState: 'President Mamnoon Hussain',
			flagColors: ['green', 'white']
		},
		{
			name: 'Afghanistan',
			population: 32564342,
			chiefOfState: 'President of the Islamic Republic of Afghanistan Ashraf Ghani Ahmadzai',
			flagColors: ['black', 'red', 'green']
		},
		{
			name: 'Brazil',
			population: 204259812,
			chiefOfState: 'President Dilma Rousseff',
			flagColors: ['green', 'yellow', 'blue']
		}
	];

	$scope.addCountry = function(name, population, chiefOfState, flagColors) {
		$scope.countries.push({
			name: $scope.newName,
			population: $scope.newPop,
			chiefOfState: $scope.newChief,
			flagColors: $scope.newColors
		});
	}

})