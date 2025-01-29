const orderModal = document.getElementById('orderModal')
const applicationModal = document.getElementById('applicationModal')
const successModal = document.getElementById('successModal')
const closeBtns = document.querySelectorAll('.close-btn')
const allBtns = document.querySelectorAll('.btn')

function openModal(modalId) {
    const modal = document.getElementById(modalId)
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

function closeModal(modal) {
    modal.style.display = 'none'
    document.body.style.overflow = 'auto'
}

function showSuccessMessage() {
    orderModal.style.display = 'none'
    applicationModal.style.display = 'none'
    successModal.style.display = 'block'
}

allBtns.forEach(btn => {
    if (btn.textContent.includes('Заказать')) {
        btn.addEventListener('click', () => openModal('orderModal'))
    } else if (btn.textContent.includes('заявку') || btn.textContent.includes('Начнем')) {
        btn.addEventListener('click', () => openModal('applicationModal'))
    } else if (btn.classList.contains('return-btn')) {
        btn.addEventListener('click', () => closeModal(successModal))
    }
})

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal')
        closeModal(modal)
    })
})

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target)
    }
})

const orderForm = document.getElementById('orderForm')
const applicationForm = document.getElementById('applicationForm')

orderForm.addEventListener('submit', (e) => {
    e.preventDefault()
    showSuccessMessage()
})

applicationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    showSuccessMessage()
})
