
// ----- Interaction Sounds: Functions Relating to Any Auditory Feedback ----- //

// Plays a Click Sound Whenever a Link or Button Is Pressed
function addClickSound() {
	var audio = new Audio('resources/click.mp3');
	audio.volume = 0.4;

	$('a, button').off('click.ClickSound');
	$('a, button').on('click.ClickSound', function(){
		audio.play();
	});
}