// template_nefa46p
// service_rz1my3m
// j4DsV6XlgI2kfVPVp
let isModalOpen = false;
let contrastToggle = true;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(
        ${x * boolInt}px,
        ${y * boolInt}px)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (!contrastToggle) {
    return document.body.classList.remove("dark-theme");
  }
  document.body.classList += " dark-theme";
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  // loading.classList += " modal__overlay--visible";
  // setTimeout(() => {
  //   loading.classList.remove("modal__overlay--visible");
  //   success.classList += " modal__overlay--visible";
  // }, 3000);
  // return;
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_rz1my3m",
      "template_nefa46p",
      event.target,
      "j4DsV6XlgI2kfVPVp"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailible. Please contact me directly on jamesrhoe1@gmail.com"
      );
    });
}

function toggleModal() {
  isModalOpen = !isModalOpen;
  if (!isModalOpen) {
    return document.body.classList.remove("modal--open");
  }
  document.body.classList += " modal--open";
}
