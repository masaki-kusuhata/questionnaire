/**
 * Createask Components module.
 *
 * @module questionnaire.components.createask
 */
(function () {
  'use strict';

  angular
    .module('questionnaire.components.createask', [])
    .controller('CreateaskController', CreateaskController);

  CreateaskController.$inject = [];

  /**
   * CreateaskController
   *
   * @class CreateaskController
   * @constructor
   */
  function CreateaskController() {
    console.log('CreateaskController Constructor');
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  CreateaskController.prototype.canActivate = function() {
    console.log('CreateaskController canActivate Method');
    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  CreateaskController.prototype.activate = function() {
    console.log('CreateaskController activate Method');
    vm = this;
  };

  /**
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  CreateaskController.prototype.canDeactivate = function() {
    console.log('CreateaskController canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  CreateaskController.prototype.deactivate = function() {
    console.log('CreateaskController deactivate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
