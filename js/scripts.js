window.onload = function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const startPage = document.getElementById('start-page');
  const losePage = document.getElementById('lose-page');
  const startButton = document.getElementById('start');
  const restartButton = document.getElementById('restart'); //selecciones el botó
  
  const canvas2 = document.getElementById('canvas2');
  const ctx2 = canvas2.getContext('2d');
  
  startButton.onclick = function () {
    startPage.style = "display: none";
    canvas.classList.remove('hidden');
    const game = new Game(ctx, ctx2);
    game.start();
  }

 // restartbutton.onclick = location.reload()

  restartButton.onclick = function () {
    location.reload()
 
  }

  
}




