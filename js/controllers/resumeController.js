let ResumeController = function($scope) {
  
  $scope.oneAtATime = true;

  $scope.isopen = true;

  let vm = this;
  vm.scrollTop = scrollTop;


  function scrollTop () {
    window.scrollTo(0, 0);
  }
  scrollTop();

};

ResumeController.$inject = ['$scope'];

export default ResumeController;
