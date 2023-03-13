(() => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  //set var 

  function setElementInnerText(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
  }
  //function เข้า DOM

  function countdown() {
    const now = new Date().getTime();
    const newYear = new Date("December 31, 2023 23:59:59").getTime();
    const unixTimeLeft = newYear - now;
    //เรียก method getTime

    setElementInnerText("days", Math.floor(unixTimeLeft / DAY));
    setElementInnerText("hours", Math.floor((unixTimeLeft % DAY) / HOUR));
    setElementInnerText("minutes", Math.floor((unixTimeLeft % HOUR) / MINUTE));
    setElementInnerText("seconds", Math.floor((unixTimeLeft % MINUTE) / SECOND));
  }

  function run() {
    countdown();
  }
  run();
})();
