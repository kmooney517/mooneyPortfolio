

let ProjectController = function() {
  
  let vm = this;

  vm.highlightProject = highlightProject;
  vm.unHighlight = unHighlight;

  function highlightProject () {
    $('.projectTile').css('background', 'red');
  }

  function unHighlight () {
    $('.projectTile').css('background', 'inherit');

  }

};

ProjectController.$inject = [];

export default ProjectController;