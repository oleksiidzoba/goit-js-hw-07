const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output')

nameInput.addEventListener('input', () => {
    const trValue = nameInput.value.trim();
    nameOutput.textContent = trValue === '' ? 'Anonymous' : trValue;
})