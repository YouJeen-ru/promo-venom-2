const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuButtonClose = document.querySelector(".menu-button-close");

const orderTicketFormWrapper = document.querySelector('.order-ticket__form-wrapper')
const orderTicketPreloaderWrapper = document.querySelector('.order-ticket__preloader-wrapper')
const orderTicketThanksWrapper = document.querySelector('.order-ticket__thanks-wrapper')
const orderTicketThanksName = document.querySelector('.order-ticket__thanks-name')

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

const sendData = (data, thank, preloader) => {

  if (preloader) preloader()

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
      .then(thank)
}

const showPreloader = () => {
  orderTicketFormWrapper.style.display = 'none'
  orderTicketPreloaderWrapper.style.display = 'block'
}

const showThank = (data) => {
  orderTicketPreloaderWrapper.style.display = 'none'
  orderTicketThanksWrapper.style.display = 'block'
  orderTicketThanksName.textContent = data.name
}

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

orderTicketForm.addEventListener('submit', event => {
  event.preventDefault()

  const formData = new FormData(orderTicketForm)

  const data = {}

  for (const [name, value] of formData) {
    data[name] = value
  }

  sendData(data, showThank, showPreloader)
})


