const modal = document.querySelector(".modal")
const btn = document.querySelector(".close-btn")
const modalTriggersArr = document.querySelectorAll("[data-modal-triger]")
const modalBody = document.querySelector('.modal-body')

const modalArr = [{
    id: 0,
    trigger: 'sold',
    title: 'Нажаль всі квартири продані..(',
    description: 'Вільні квартири знаходяться в будинках, які не продані. Оберіть, будь ласка, іншу будівлю, щоб переглянути квартири своєї мрії!)',
},
{
    id: 1,
    trigger: 'registration',
    description: 'Ви успішно зареєструвалися. Ласка',
    markap: `   <form class="form">
                 <h4 class="form-title">Залишились питання? Напишіть нам!)</h4>
                 <div class="form-column">
                     <label for="name">Name</label>
                     <input id="name" type="text">
                 </div>
                 <div class="form-column">
                     <label for="tel">Telephone</label>
                     <input id="tel" type="tel">
                 </div>
                 <div class="form-column">
                     <label for="answer">You'r answer</label>
                     <textarea id="answer"></textarea>
                 </div>
                 <button class="btn btn-secondary" type="submit" data-close="modal">Ok</button>
                 <button class="btn btn-close" data-close="modal"></button>
            </form>`
},
{
    id: 2,
    trigger: 'regestrationSuccses',
    title: 'Успішна реєстрація22222',
    description: 'Ви успішно зареєструвалися. Ласка22222',
},]

function hideModal () {
    modal.classList.remove("show")
}

const randerModalContent = (modalContent) => {
    if (modalContent.markap) {
        modalBody.innerHTML = modalContent.markap
    } else {
        modalBody.innerHTML = 
            `<h5>${modalContent.title}</h5>
            <p>${modalContent.description}</p>
            <button class="close-btn" data-triger-close="modal" ><img src="assets/img/cross.svg"></button>`
    }

    const trigerClose = document.querySelectorAll('[data-triger-close="modal"]')

    trigerClose.forEach(btn => {
        btn.addEventListener('click', hideModal)
    })
}

function showModal(modalType) {
    const modalData = modalArr.find(item => item.trigger === modalType)
    randerModalContent(modalData)
    modal.classList.add("show")
} 

modalTriggersArr.forEach(el => {
    el.addEventListener("click", function() {
        const modalType = el.getAttribute("data-modal-triger")
        showModal(modalType)
    })
});