import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import $ from 'jQuery';

import HomeController from './controllers/homeController';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
;