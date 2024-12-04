
document.querySelectorAll('nav p').forEach(navItem => {
    navItem.addEventListener('click', () => {
      const targetId = navItem.dataset.target;
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        const offset = 80;
        const targetPosition = targetSection.offsetTop - offset;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  

const backToTopBtn = document.getElementById("backToTopBtn");

const introContainer = document.querySelector(".intro-container");

window.onscroll = function() {
    if (window.scrollY > introContainer.offsetHeight) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

  