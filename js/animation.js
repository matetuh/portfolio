const circle = document.getElementById("Ellipse_1");

const mouseAnimation = () => {
  anime({
    targets: circle,
    translateY: -250,
  });
};

circle.addEventListener("mouseover", mouseAnimation);
