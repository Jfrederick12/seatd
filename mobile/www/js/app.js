// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngResource', 'starter.services'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor')


  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.businesses', {
    url: '/businesses',
    views: {
      'menuContent': {
        templateUrl: 'templates/businesses.html',
        controller: 'BusinessCtrl'
      }
    }
  })

  .state('app.businesses-show', {
      url: '/businesses/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/business-show.html',
          controller: 'BusinessShowCtrl'
        }
      }
    })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
  })

  .state('app.cover', {
    url: '/cover',
    views: {
      'menuContent': {
        templateUrl: 'templates/cover.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.userProfile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/user_profile.html',
        controller: 'UserCtrl'
      }
    }
  })

  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
