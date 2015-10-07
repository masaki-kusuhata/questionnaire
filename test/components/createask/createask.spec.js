(function() {
  'use strict';

  describe('Controller: CreateaskController', function() {

    beforeEach(module('questionnaire.components.createask'));

    var CreateaskController;

    beforeEach(inject(function($controller) {
      CreateaskController = $controller('CreateaskController');
    }));

    describe('CreateaskController', function() {
      it('Test Case', function() {
        CreateaskController.activate();
      });
    });
  });
})();
