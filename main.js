
//onload animation
$(window).on("load", function () {
  $('.social').addClass('animated tada delay-.8s');
  setTimeout(function() {
    $('.social').removeClass('animated tada delay-.8s');
  }, 1000)
});


//onclick animation
$('.social').click(function(){    
  $(this).addClass('animated jello');
  setTimeout(function() {
    $('.social').removeClass('animated jello');
  }, 1000)
});


//on mouse hover animation
function hover(className) {
  $(className).addClass('animated swing');
};

function mouseOut(className) {  
  setTimeout(function() {
    $(className).removeClass('animated swing');
  }, 600)
}


$('.aykara4').hover(function() { hover('.aykara4') });
$('.aykara4').mouseout(function() { mouseOut('.aykara4') });

$('.website').hover(function() { hover('.website') });
$('.website').mouseout(function() { mouseOut('.website') });

$('.twitter').hover(function() { hover('.twitter') });
$('.twitter').mouseout(function() { mouseOut('.twitter') });

$('.instagram').hover(function() { hover('.instagram') });
$('.instagram').mouseout(function() { mouseOut('.instagram') });

$('.telegram').hover(function() { hover('.telegram') });
$('.telegram').mouseout(function() { mouseOut('.telegram') });

$('.medium').hover(function() { hover('.medium') });
$('.medium').mouseout(function() { mouseOut('.medium') });

$('.stackoverflow').hover(function() { hover('.stackoverflow') });
$('.stackoverflow').mouseout(function() { mouseOut('.stackoverflow') });

$('.github').hover(function() { hover('.github') });
$('.github').mouseout(function() { mouseOut('.github') });

$('.hackerearth').hover(function() { hover('.hackerearth') });
$('.hackerearth').mouseout(function() { mouseOut('.hackerearth') });

$('.devfolio').hover(function() { hover('.devfolio') });
$('.devfolio').mouseout(function() { mouseOut('.devfolio') });

$('.linkedin').hover(function() { hover('.linkedin') });
$('.linkedin').mouseout(function() { mouseOut('.linkedin') });

$('.sourcerer').hover(function() { hover('.sourcerer') });
$('.sourcerer').mouseout(function() { mouseOut('.sourcerer') });

$('.quora').hover(function() { hover('.quora') });
$('.quora').mouseout(function() { mouseOut('.quora') });