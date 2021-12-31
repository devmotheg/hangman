/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import Home from "./home.js";
import Sound from "../data/sound.js";
import End from "./end.js";
import Board from "./board.js";

const Game = (_ => {
  const $hangman = document.querySelector(".hangman");
  const words = [
    ["dog", "It barks"],
    ["developers", "they interact with apis"],
    ["hangman", "What are you playing now?"],
    ["games", "they're loved by everyone"],
    ["school", "everyone hates it"],
    ["college", "it's a Waste of time"],
    ["rich", "they live freely"],
    ["poor", "they need to get on their shit"],
  ];
  let lives, chosenWord, guessingWord, winOrLose, hint;

  const createWord = _ => {
    let markup = "";
    for (const _ of chosenWord) markup += "<li>_</li>";
    return markup;
  };

  const createLetters = _ => {
    let markup = "";
    for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
      const letter = String.fromCharCode(i);
      markup += `<li class="hangman__letter">${letter}</li>`;
    }
    return markup;
  };

  const loadInitPage = _ => {
    $hangman.innerHTML = `
    <h1 class="hangman__title">Hangman</h1>
    <svg class="hangman__board" height="180" width="300"></svg>
    <ul class="hangman__word">${createWord()}</ul>
    <p class="hangman__hint">Hint: ${hint}</p>
    <p class="hangman__text">Pick a letter, try to guess the word...</p>
    <ul class="hangman__letters">${createLetters()}</ul>
    <button class="button menu">Main Menu</button>
    <a href="https://github.com/devmotheg">Designed by Mohamed Muntasir</a>
    `;
    setTimeout(_ => $hangman.classList.remove("--transition"), 100);
  };

  const chooseWord = _ => words[Math.floor(Math.random() * words.length)];

  const render = $hangmanLetter => $hangmanLetter.classList.add("--transition");

  const updateGuessingWord = letter => {
    const $hangmanWord = document.querySelector(".hangman__word");
    for (let i = 0; i < chosenWord.length; i++)
      if (chosenWord[i] === letter) {
        guessingWord[i] = letter;
        $hangmanWord.children[i].textContent = letter;
        $hangmanWord.children[i].classList.add("hangman__letter--correct");
      }
  };

  const isGameOver = _ => {
    if (!guessingWord.includes("_")) {
      winOrLose = "won";
    } else if (lives === 0) {
      winOrLose = "lost";
    }
    if (!winOrLose) return;
    document.querySelector(".hangman__letters").classList.add("--transition");
    End.loadEndPage(winOrLose, chosenWord);
  };

  const doGuess = ($hangmanLetter, letter) => {
    if (chosenWord.includes(letter)) {
      updateGuessingWord(letter);
      Sound.correct();
    } else {
      lives--;
      Sound.wrong();
      Board.setLives(lives);
    }
    render($hangmanLetter);
    isGameOver();
  };

  const listeners = _ => {
    document.querySelector(".hangman__letters").addEventListener("click", e => {
      const notClicked = ".hangman__letter:not(li.--transition)";
      if (!winOrLose && e.target.matches(notClicked)) {
        doGuess(e.target, e.target.innerHTML);
        Sound.click();
      }
    });

    document.querySelector(".menu").addEventListener("click", _ => {
      $hangman.classList.add("--transition");
      setTimeout(_ => Home.init(), 200);
      Sound.click();
    });
  };

  const init = _ => {
    winOrLose = undefined;
    lives = 7;
    [chosenWord, hint] = chooseWord();
    guessingWord = new Array(chosenWord.length).fill("_");
    loadInitPage();
    listeners();
    Board.init();
  };

  return {
    init,
  };
})();

export default Game;
