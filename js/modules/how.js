/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import Home from "./home.js";
import Sound from "../data/sound.js";

const How = (_ => {
  const $hangman = document.querySelector(".hangman");

  const listeners = _ => {
    document.querySelector(".menu").addEventListener("click", _ => {
      $hangman.classList.add("--transition");
      setTimeout(_ => Home.init(), 200);
      Sound.click();
    });
  };

  const render = _ => {
    $hangman.innerHTML = `
    <h1 class="hangman__title">HANGMAN</h1>
    <ul class="how">
      <li>When you start a new game, the game will automatically choose a random word for you.</li>
      <li>Your job is to guess the chosen word within 7 tries...</li>
      <li>If you win, you get to live, else... you will be hanged to death! (well... not really, lol.)</li>
    </ul>
    <button class="button menu">Main menu</button>
    <a href="https://github.com/devmotheg">Designed by Mohamed Muntasir</a>
    `;
    setTimeout(_ => $hangman.classList.remove("--transition"), 100);
  };

  const init = _ => {
    render();
    listeners();
  };

  return {
    init,
  };
})();

export default How;
