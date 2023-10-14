const scriptURL = 'https://script.google.com/macros/s/AKfycbw3NIJV5kjuLR_trnbApHBwio68m_zLtsIBRIxO-3BI-xPv05g8ohyG8a1HjRSTeCnA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.textContent = "Thank you for Message!";
            setTimeout(() => {
                msg.textContent = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
