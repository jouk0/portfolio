define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'timeline',
  'text!templates/contact/contact.html'
], function($, _, Backbone, Vm, timeline, contactPageTemplate){
  var ContactPage = Backbone.View.extend({
    el: '.page',
    initialize: function () {
      this.$el.html(contactPageTemplate);
      
    },
    render: function () {
      /**/
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
  return ContactPage;
});
