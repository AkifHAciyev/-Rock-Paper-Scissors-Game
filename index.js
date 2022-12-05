let choiceOfUser = document.querySelector('.choiceOfUser');
let gameStart = document.querySelector('.gameStart');
let userChoiseImg = document.querySelector('#userChoiseImg');
let compChoiseImg = document.querySelector('#compChoiseImg');
let whoIsWinner = document.querySelector('#whoIsWinner');
let score = document.querySelector('.score');
let modal = document.querySelector('.modal');
let body = document.querySelector('body');
let scoreNum;

if (localStorage.getItem('score')) {
	scoreNum = localStorage.getItem('score');
} else {
	scoreNum = 0;
}
score.innerText = scoreNum;

const handImg = {
	paper: '/images/icon-paper.svg',
	scissors: '/images/icon-scissors.svg',
	rock: '/images/icon-rock.svg',
};

const userChoice = (hand) => {
	choiceOfUser.style.display = 'none';
	gameStart.style.display = 'flex';

	userChoiseImg.src = handImg[hand];

	compChoice(hand);
};

const compChoice = (hand) => {
	let hands = ['paper', 'scissors', 'rock'];
	let compHand = hands[Math.floor(Math.random() * hands.length)];

	compChoiseImg.src = handImg[compHand];

	whoWinner(hand, compHand);
};

const whoWinner = (userHand, compHand) => {
	if (userHand == 'paper' && compHand == 'scissors') {
		result('YOU LOSE!');
	}
	if (userHand == 'paper' && compHand == 'rock') {
		result('YOU WIN!');
		setScore(+scoreNum + 1);
	}
	if (userHand == 'paper' && compHand == 'paper') {
		result("It's a tie!");
	}
	if (userHand == 'rock' && compHand == 'scissors') {
		result('YOU WIN!');
		setScore(+scoreNum + 1);
	}
	if (userHand == 'rock' && compHand == 'paper') {
		result('YOU LOSE!');
	}
	if (userHand == 'rock' && compHand == 'rock') {
		result("It's a tie!");
	}
	if (userHand == 'scissors' && compHand == 'scissors') {
		result("It's a tie!");
	}
	if (userHand == 'scissors' && compHand == 'rock') {
		result('YOU LOSE!');
	}
	if (userHand == 'scissors' && compHand == 'paper') {
		result('YOU WIN!');
		setScore(+scoreNum + 1);
	}

	localStorage.setItem('score', scoreNum);
};

const restartGame = () => {
	choiceOfUser.style.display = 'flex';
	gameStart.style.display = 'none';
};

const result = (winner) => {
	whoIsWinner.innerText = winner;
};

const setScore = (newScore) => {
	scoreNum = newScore;
	score.innerText = newScore;
};

const rules = () => {
	modal.style.display = 'flex';
};

const modalOff = () => {
	modal.style.display = 'none';
};
