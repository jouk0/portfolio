define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/hireme/hireme.html'
], function($, _, Backbone, Vm, hiremePageTemplate){
  var HiremePage = Backbone.View.extend({
    el: '.page',
    initialize: function () {
      
    },
    render: function () {
	console.log("jeps");
      this.$el.html(hiremePageTemplate);
    },
    events: {
      'click .add-view': 'addView'
    },
    counter: 1,
    addView: function () {
      var RandomView = Backbone.View.extend({});
      var randomView = Vm.create(this, 'RandomView ' + this.counter, RandomView);
      return false;
    }
  });
  return HiremePage;
});
