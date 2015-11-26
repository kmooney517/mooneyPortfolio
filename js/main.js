import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import $ from 'jQuery';

import HomeController from './controllers/homeController';
import SkillsController from './controllers/skillsController';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('SkillsController', SkillsController)
;