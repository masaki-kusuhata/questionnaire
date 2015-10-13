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
    vm.answerType = 0;

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

  /**
   * 新規質問項目の追加
   * @return {[type]} [description]
   */
  CreateController.prototype.add = function() {

    var items = [];
    for (var i = 0; i < vm.items; i++) {
      items.push({
        no: null,
        answer: ''
      });
    }

    vm.questions.push({
      no: null,
      answerType: vm.answerType,
      question: '',
      items: items
    });
  };

  /**
   * [function description]
   * @return {[type]} [description]
   */
  CreateController.prototype.questionDelete = function(index) {
    vm.questions.splice(index, 1);
  };

  /**
   * 質問タイプ選択時のイベント
   * @return {[type]}       [description]
   */
  CreateController.prototype.selectAnswerType = function() {
    if (vm.answerType === '0') {
      vm.items = 0;
    }
  };

  /**
   * アンケート作成の完了
   * @return {[type]}       [description]
   */
  CreateController.prototype.complete = function() {
    console.log(vm.questions);
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
