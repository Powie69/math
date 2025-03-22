const subtitle = document.querySelector('.subtitle');
let answer = 0;
makeQuestion()

function handleCorrect() {
	subtitle.innerText = 'Nice 👌😊';
	subtitle.classlist.remove('incorrect');
	subtitle.classlist.add('correct');
}

function handleIncorrect() {
	subtitle.innerText = 'WRONG 😡😡😤';
	subtitle.classlist.remove('correct');
	subtitle.classlist.add('incorrect');
}

function makeQuestion() {
	const value1 = Math.floor(Math.random() * 9);
	const value2 = Math.floor(Math.random() * 9);
	document.getElementById('firstNumber').textContent = value1;
	document.getElementById('secondNumber').textContent = value2;
	answer = value1 + value2;
}

function submit(guess) {
	if (guess == answer) {
		handleCorrect();
		return makeQuestion();
	}
	handleCorrect();
}