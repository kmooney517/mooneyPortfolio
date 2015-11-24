let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      controller: 'HomeController as vm',
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/home.tpl.html',
    })
    .state('root.skills', {
      url: '/skills',
      controller: 'SkillsControllers as vm',
      templateUrl: 'templates/skills.tpl.html',
    })
    .state('root.projects', {
      url: '/projects',
      controller: 'ProjectsController as vm',
      templateUrl: 'templates/projects.tpl.html',
    })
    .state('root.resume', {
      url: '/resume',
      controller: 'ResumeController as vm',
      templateUrl: 'templates/resume.tpl.html',
    })
  ;
  

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;