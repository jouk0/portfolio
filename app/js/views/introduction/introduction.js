define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/introduction/introduction.html'
], function($, _, Backbone, introductionPageTemplate){
  var IntroductionPage = Backbone.View.extend({
    el: '.page',
    initialize: function () {
      this.render();
    },
    render: function () {

      $(this.el).html(introductionPageTemplate);
    }
  });
  return IntroductionPage;
});
