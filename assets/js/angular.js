
var app = angular.module('RemoteJobs', []);
app.controller('jobListsCtr', function($scope) {

  $scope.joblists = [
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=fd', title : 'Front-End Developer', company : 'Tripax Travel', location: 'Berlin', type : 'Remote', date : 'Today' }, 
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=cw', title : 'Creative Writer', company : 'Mayday', location: 'Nairobi', type : 'Remote', date : 'Yesterday' }, 
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=pd', title : 'Product Designer', company : 'Magic', location: 'Tokyo', type : 'Remote', date : '2 days ago' }, 
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=pm', title : 'Back-End Developer', company : 'Invision', location: 'Denver', type : 'Remote', date : '3 days ago' }, 
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=pm', title : 'Project Manager', company : 'Beleley Software', location: 'Helsinki', type : 'Remote', date : '4 days ago' }, 
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=pm', title : 'Project Manager', company : 'Tripax Travel', location: 'Moscow', type : 'Remote', date : '5 days ago' }, 
  					{image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=t', title : 'Tester', company : 'Invision', location: 'Rio', type : 'Remote', date : 'Last Week' }, 
  				];

  $scope.favorites = [
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=fd', title : 'Front-End Developer', company : 'Tripax Travel', location: 'Berlin', type : 'Remote', date : 'Today' }, 
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=cw', title : 'Creative Writer', company : 'Invision', location: 'Nairobi', type : 'Remote', date : 'Yesterday' }, 
          ];

  $scope.myapplications = [
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=fd', title : 'Front-End Developer', company : 'Mayday', location: 'Berlin', type : 'Remote', date : '13, Sept. 2019' }, 
            {image : 'https://ui-avatars.com/api/?background=f2f2f2&color=000&name=cw', title : 'Creative Writer', company : 'Beleley Software', location: 'Nairobi', type : 'Remote', date : '12, Sept. 2019' }, 
          ];
});