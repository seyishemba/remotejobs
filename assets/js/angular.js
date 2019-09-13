
var app = angular.module('RemoteJobs', []);
app.controller('jobListsCtr', function($scope) {

  $scope.joblists = [
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=fd', title : 'Front-End Developer', company : 'Tripax Travel', location: 'Berlin', type : 'Remote', date : 'Today' }, 
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=cw', title : 'Creative Writer', company : 'Tripax Travel', location: 'Nairobi', type : 'Remote', date : 'Yesterday' }, 
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=pd', title : 'Product Designer', company : 'Tripax Travel', location: 'Tokyo', type : 'Remote', date : '2 days ago' }, 
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=pm', title : 'Back-End Developer', company : 'Tripax Travel', location: 'Denver', type : 'Remote', date : '3 days ago' }, 
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=pm', title : 'Project Manager', company : 'Tripax Travel', location: 'Helsinki', type : 'Remote', date : '4 days ago' }, 
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=pm', title : 'Project Manager', company : 'Tripax Travel', location: 'Moscow', type : 'Remote', date : '5 days ago' }, 
  					{image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=t', title : 'Tester', company : 'Tripax Travel', location: 'Rio', type : 'Remote', date : 'Last Week' }, 
  				];
  $scope.favorites = [
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=fd', title : 'Front-End Developer', company : 'Tripax Travel', location: 'Berlin', type : 'Remote', date : 'Today' }, 
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=cw', title : 'Creative Writer', company : 'Tripax Travel', location: 'Nairobi', type : 'Remote', date : 'Yesterday' }, 
          ];
});