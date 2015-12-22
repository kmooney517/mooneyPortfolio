import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation';
import config from './config';
import $ from 'jQuery';

import HomeController from './controllers/homeController';
import ProjectController from './controllers/projectController';
import SkillsController from './controllers/skillsController';
import ResumeController from './controllers/resumeController';

angular
  .module('app', ['ui.router', 'mm.foundation'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('ProjectController', ProjectController)
  .controller('SkillsController', SkillsController)
  .controller('ResumeController', ResumeController)
;