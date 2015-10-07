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
      'questionnaire.components.contact'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/home'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'}
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
