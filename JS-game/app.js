window.addEventListener("load", function () {
  let redScore = document.querySelector(".red-score"),
    blueScore = document.querySelector(".blue-score"),
    redBtns = document.querySelector(".red-btns"),
    blueBtns = document.querySelector(".blue-btns"),
    btn = document.querySelectorAll(".btn"),
    res = document.querySelector(".winner"),
    playBtn = document.querySelector(".play-again"),
    redStep,
    blueStep,
    rScore = 0,
    bScore = 0,
    blocked = false;

  function choiceBlue(e) {
    if (blocked) return;
    let target = e.target;
    if (target.classList.contains("btn")) {
      blueStep = target.dataset.btn;
      btn.forEach((btn) => btn.classList.remove("blue-active", "red-active"));
      target.classList.add("blue-active");
      choiceRed();
    }
  }

  function choiceRed() {
    blocked = true;
    let rand = Math.floor(Math.random() * 3);
    let target = redBtns.querySelectorAll(".btn");
    redStep = target[rand].dataset.btn;
    target[rand].classList.add("red-active");
    setTimeout(() => {
      btn.forEach((btn) => btn.classList.remove("blue-active", "red-active"));
      Winner();
    }, 500);
  }

  function Winner() {
    blocked = false;
    let comb = blueStep + redStep;

    switch (comb) {
      case "rr":
      case "ss":
      case "pp":
        break;
      case "rs":
      case "sp":
      case "pr":
        bScore++;
        blueScore.innerText = `Score: ${bScore}`;
        break;
      case "sr":
      case "ps":
      case "rp":
        rScore++;
        redScore.innerText = `Score: ${rScore}`;
        break;
    }
  }

  function WhoWin() {
    if (rScore === 3) {
      blocked = true;
      res.style = "display: block;";
      res.innerText = "Winner - Red";
      rScore = 3;
      redScore.innerText = `Score: ${rScore}`;
      blueScore.innerText = `Score: ${bScore}`;
      setTimeout(() => {
        res.style = "display: none;";
        playBtn.style = "display: block;";
        bScore = rScore = 0;
        blueScore.innerText = `Score: ${bScore}`;
        redScore.innerText = `Score: ${rScore}`;
      }, 1000);
    } else if (bScore === 3) {
      blocked = true;
      res.style = "display: block;";
      res.innerText = "Winner - Blue";
      bScore = 3;
      blueScore.innerText = `Score: ${bScore}`;
      redScore.innerText = `Score: ${rScore}`;
      setTimeout(() => {
        res.style = "display: none;";
        playBtn.style = "display: block;";
        bScore = rScore = 0;
        blueScore.innerText = `Score: ${bScore}`;
        redScore.innerText = `Score: ${rScore}`;
      }, 1000);
    }
  }

  playBtn.addEventListener("click", function () {
    playBtn.style = "display: none;";
    blocked = false;
  });

  setInterval(WhoWin), 100;

  blueBtns.addEventListener("click", choiceBlue);
});
