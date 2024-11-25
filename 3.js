function kupiaSoz() {
  const secretNum = Math.floor(Math.random() * 100) + 1;

  let num;

  while (true) {
    num = +prompt("Sandy tap 1 - 100 arasy");

    if (secretNum > num && secretNum - 5 < num) {
      alert("sal jogary");
    } else if (secretNum < num && secretNum + 5 > num) {
      alert("sal tomen");
    } else if (secretNum < num && secretNum + 5 < num) {
      alert("Jai tomen ");
    } else if (secretNum > num && secretNum - 5 < num) {
      alert("Jai jogari ");
    } else if (secretNum == num) {
      alert("jaraisin");
      break;
    }
  }
}

alert(kupiaSoz());
