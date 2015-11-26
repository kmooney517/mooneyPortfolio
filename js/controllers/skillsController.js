import $ from 'jQuery';

let SkillsController = function($scope) {
  
  $('.flip').click(function(){
    $(this).find('.card').addClass('flipped').mouseleave(function(){
      $(this).removeClass('flipped');
    });
    return false;
  });

};

SkillsController.$inject = ['$scope'];

export default SkillsController;