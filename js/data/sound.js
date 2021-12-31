/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

export default {
  correct() {
    new Audio("./media/correct.mp3").play();
  },
  click() {
    new Audio("./media/click.mp3").play();
  },
  wrong() {
    new Audio("./media/wrong.mp3").play();
  },
};
