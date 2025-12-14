const buttons = document.querySelectorAll('.buton');
let savor =  null;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        savor = btn.textContent;
            
    });
    
});

const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const submitbtn = document.querySelector('.submit');
const resultText = document.querySelector('.selection');

submitbtn.addEventListener('click', () => {
    if (!savor) {
        alert('select a rating');
        return;
    }
    resultText.textContent = `you selected ${savor} out of 5`;

container.hidden = true;
container2.hidden = false;
})





