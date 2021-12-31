/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

const End = (_ => {
  const loadEndPage = (winOrLose, chosenWord) => {
    for (let c of [".hangman__letters", ".hangman__word", ".hangman__hint"]) {
      const ele = document.querySelector(c);
      ele.classList.add("--transition");
      ele.style.height = "0";
    }
    const $hangmanText = document.querySelector(".hangman__text");
    $hangmanText.innerHTML = `You ${winOrLose}!!<br /> The Word is: ${chosenWord}`;
    $hangmanText.classList.add("--result");
    const $hangmanBoard = document.querySelector(".hangman__board");
    if (winOrLose == "lost") $hangmanBoard.classList.add("hangman__board--end");
  };

  return {
    loadEndPage,
  };
})();

export default End;
