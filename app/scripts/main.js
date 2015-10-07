/**
 * This is questionnaire module.
 *
 * @module questionnaire
 */
(function () {
  'use strict';

  angular
    .module('questionnaire', [
      'ngNewRouter',
      'questionnaire.config',
      'questionnaire.components.home',
      'questionnaire.components.about',
      'questionnaire.components.contact',
      'questionnaire.components.create',
      'questionnaire.components.createask'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/home'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'},
    {path: '/create', component: 'create'},
    {path: '/createask', component: 'createask'}
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main questionnaire
   * @constructor
   */
  function AppController () {}
})();
