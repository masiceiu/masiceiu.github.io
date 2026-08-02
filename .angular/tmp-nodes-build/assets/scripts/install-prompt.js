var promptEvent;
var btn = document.querySelector('#pwa-install-button');
var prompt = document.querySelector('#pwa-install-prompt');

window.addEventListener('beforeinstallprompt', event => {
	promptEvent = event;
	prompt.style.display = 'block';
	console.log('beforeinstallprompt caught');
});

btn.addEventListener('click', () => {
	if (promptEvent) {
		promptEvent.prompt();
		promptEvent.userChoice.then(result => {
			if (result.outcome === 'accepted') {
				console.log('user accepted add to homescreen');
			} else {
				console.log('user dismissed the add to homescreen');
			}
			promptEvent = undefined;
		});
	}
});
