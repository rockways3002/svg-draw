$(function() {
	var varCounter = 0,
		frontEnd = $('.front-end'),
		bacKend = $('.back-end'),
		design = $('.design'),
		content = $('.text-content');
	var runner = function() {
		if (varCounter <= 100) {
			content.text(varCounter + "%");
			varCounter ++;
		} else {
			clearInterval(runner);
		}
	}
    setInterval(runner, 25);
});
