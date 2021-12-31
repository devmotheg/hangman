/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import Sound from "../data/sound.js";
import Game from "./game.js";
import How from "./how.js";

const Home = (_ => {
  const $hangman = document.querySelector(".hangman");

  const render = _ => {
    $hangman.innerHTML = `
    <h1 class="hangman__title">Hangman</h1>
    <button class="button start">New Game</button>
    <button class="button instructions">Instructions</button>
    <a href="https://github.com/devmotheg">Designed by Mohamed Muntasir</a>
    `;
    setTimeout(_ => $hangman.classList.remove("--transition"), 100);
  };

  const listeners = _ => {
    document.querySelector(".start").addEventListener("click", _ => {
      Sound.click();
      $hangman.classList.add("--transition");
      setTimeout(_ => Game.init(), 200);
    });

    document.querySelector(".instructions").addEventListener("click", _ => {
      Sound.click();
      $hangman.classList.add("--transition");
      setTimeout(_ => How.init(), 200);
    });
  };

  const init = _ => {
    render();
    listeners();
  };

  return {
    init,
  };
})();

export default Home;
