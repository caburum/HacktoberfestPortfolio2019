// LOADING SCREEN SCRIPT
// We will use a fake timer that will add the fadeout class after the timer ends.

const initLoadingScreen = () => {
  setTimeout(() => {
    document.getElementById("loading_screen").classList.add("fadeout");
  }, 600);
};

initLoadingScreen();
