const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuButtonClose = document.querySelector(".menu-button-close");
menuButton.addEventListener("click", () => {
  menu.classList.add("is-open");
  menuButtonClose.classList.add("is-active");
});
menuButtonClose.addEventListener("click", () => {
  menu.classList.remove("is-open");
  menuButtonClose.classList.remove("is-active");
});

//Pop-up consult

const hideForm = document.querySelector('.hide-form')
const orderTicket = document.querySelector('.order-ticket')
const orderTrigger = document.querySelector('.order-trigger')
const orderTicketForm = document.querySelector('.order-ticket__form')

setTimeout(() => {
  const heightForm = orderTicket.offsetHeight
  hideForm.style.bottom = -heightForm + 'px'
}, 1000)

orderTrigger.addEventListener('click', () => {
  hideForm.classList.toggle('hide-form-active')
})

orderTicketForm.addEventListener('change', (event) => {
  const target = event.target
  const label = target.labels[0]
  if (label && target.value) {
    label.classList.add('order-ticket__label-focus')
  } else {
    label.classList.remove('order-ticket__label-focus')
  }
})


