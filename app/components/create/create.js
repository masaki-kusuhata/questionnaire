/**
 * Create Components module.
 *
 * @module questionnaire.components.create
 */
(function () {
  'use strict';

  angular
    .module('questionnaire.components.create', [])
    .controller('CreateController', CreateController);

  CreateController.$inject = [];

  /**
   * CreateController
   *
   * @class CreateController
   * @constructor
   */
  function CreateController() {
    console.log('CreateController Constructor');
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  CreateController.prototype.canActivate = function() {
    console.log('CreateController canActivate Method');
    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  CreateController.prototype.activate = function() {
    console.log('CreateController activate Method');
    vm = this;

    vm.questions = [];

  };

  /**
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  CreateController.prototype.canDeactivate = function() {
    console.log('CreateController canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  CreateController.prototype.deactivate = function() {
    console.log('CreateController deactivate Method');
    vm = this;
  };

  CreateController.prototype.add = function() {
    vm.questions.push({
      ask: '質問１',
      pattern: 1
    });
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
