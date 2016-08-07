'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var baseURL = 'http://lorempixel.com/960/450/';
    $scope.setInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    $scope.slides = [
      {
        id: 0,
        title: '7 Ways to stay Fit',
        image: baseURL + 'sports/',
        text: 'Play a sport for 30 minutes a day!'
      },
      {
        id: 1,
        title: 'Healthly Food',
        image: baseURL + 'food/',
        text: 'Food that you should be eating!'
      },
      {
        id: 2,
        title: 'Relaxing Holidays',
        image: baseURL + 'nature/',
        text: '10 Locations for Nature Lovers!'
      }

    ];

    // Model for the 3 content blocks
    var baseURL200 = 'http://lorempixel.com/200/200/';
    $scope.content = [
      {
        img: baseURL200 + 'people',
        title: 'About Us',
        summary: 'We are good, we are the best out there'
      },
      {
        img: baseURL200 + 'business',
        title: 'Our Services',
        summary: 'We offer advice on staying Healthly, what to eat...what are the best exercises for you etc.'
      },
      {

        img: baseURL200 + 'transport',
        title: 'Contact Us',
        summary: '#111, Good Health Blvd, Happy Place, Antartica, Zip-432167'
      }
    ];

  });
