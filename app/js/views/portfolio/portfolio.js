define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'timeline',
  'text!templates/portfolio/portfolio.html'
], function($, _, Backbone, Vm, Timeline, portfolioPageTemplate){
  var PortfolioPage = Backbone.View.extend({
    el: '.page',
    initialize: function () {
      this.$el.html(portfolioPageTemplate);
      
    },
    render: function () {
	/* jshint ignore:start */
      var timeline = new VMM.Timeline('#timeline');
      timeline.init('/data/data.json');
	  /* jshint ignore:end */
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
  return PortfolioPage;
});
