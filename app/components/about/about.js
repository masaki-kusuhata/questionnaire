/**
 * About Components module.
 *
 * @module questionnaire.components.about
 */
(function () {
  'use strict';

  angular
    .module('questionnaire.components.about', [
      'questionnaire.service.gruntfiles'
    ])
    .controller('AboutController', AboutController);

  AboutController.$inject = ['GruntfilesService'];

  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function AboutController(GruntfilesService) {
    console.log('AboutController Constructor');

    this.GruntfilesService = GruntfilesService;
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  AboutController.prototype.canActivate = function() {
    console.log('AboutController canActivate Method');
    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  AboutController.prototype.activate = function() {
    console.log('AboutController activate Method');

    vm = this;
    var grunt = this.GruntfilesService.query().$promise;
    grunt
      .then(setlist)
      .catch(error);
  };

  /**
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  AboutController.prototype.canDeactivate = function() {
    console.log('AboutController canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  AboutController.prototype.deactivate = function() {
    console.log('AboutController deactivate Method');
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @private
   */
  var vm;

  /**
   * Setting the retrieved Gruntfile list to ViewModel
   *
   * @method setlist
   * @param {Object} list Gruntfile list
   * @private
   */
  var setlist = function (list) {
    vm.list = list;
  };

  /**
   * It will capture the error at the time of Gruntfile data acquisition
   *
   * @method error
   * @param {Object} e error message
   * @private
   */
  var error = function (e) {
    vm.error = e;
  };
})();
