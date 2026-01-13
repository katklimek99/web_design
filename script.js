// Home page button 
const welcomeBtn = document.getElementById("welcomeBtn");
if (welcomeBtn) {
  welcomeBtn.addEventListener("click", () => {
    alert("Welcome to my website!");
  });
}

// Text page controls 
const toggleTheme = document.getElementById("toggleTheme");
if (toggleTheme) {
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

const toggleWide = document.getElementById("toggleWide");
if (toggleWide) {
  toggleWide.addEventListener("click", () => {
    const prose = document.querySelector(".prose");
    if (prose) prose.classList.toggle("wide");
  });
}
