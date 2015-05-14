
// ----- Interaction Sounds: Functions Relating to Any Auditory Feedback ----- //

var audio = new Audio('resources/click.mp3');
	audio.volume = 0.4;

// Plays a Click Sound Whenever a Link or Button Is Pressed
function addClickSound() {

	$('a, button').off('click.ClickSound');
	$('a, button').on('click.ClickSound', function(){
		audio.play();
	});
}