// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'vm'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      'introduction' : 'introduction',
      'contact': 'contact',
      'hireme': 'hireme',
      'portfolio': 'portfolio',
      
      // Default - catch all
      '*actions': 'introduction'
    }
  });

  var initialize = function(options){
    var appView = options.appView;
    var router = new AppRouter(options);
    
    router.on('route:introduction', function () {
     require(['views/introduction/introduction'], function (IntroductionPage) {
        var introductionPage = Vm.create(appView, 'IntroductionPage', IntroductionPage);
        introductionPage.render();
      });
    });
    router.on('route:contact', function () {
     require(['views/contact/contact'], function (ContactPage) {
        var contactPage = Vm.create(appView, 'ContactPage', ContactPage);
        contactPage.render();
      });
    });
    router.on('route:hireme', function () {
     require(['views/hireme/hireme'], function (HiremePage) {
        var hiremePage = Vm.create(appView, 'HiremePage', HiremePage);
        hiremePage.render();
      });
    });
    router.on('route:portfolio', function () {
     require(['views/portfolio/portfolio'], function (PortfolioPage) {
        var portfolioPage = Vm.create(appView, 'PortfolioPage', PortfolioPage);
        portfolioPage.render();
      });
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
