document.getElementById('answer').addEventListener('input', (event) => {
	event.target.value = event.target.value.replace(/[^0-9]/g, '');
});

