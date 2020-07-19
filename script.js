console.log('good luck!');
const details = document.querySelector('.detailes');
const served = document.querySelector('.served');
const orderLists = document.querySelector('.order-list')
const orders = document.querySelector('.order');
const titles = document.querySelector('.title');
const cardButtons = document.querySelector('.add-order');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');
const newButton = document.querySelector('.openModal');

const inputs = document.querySelector('#name');
const selects = document.querySelector('.select-form');
const selectInput = document.querySelector('#meduim');
const submitOrder = document.querySelector('.submitOrder');
const quantity = document.querySelector('#quantity');


const handleButtonClick = (event) => {
    modalOuter.classList.add('open');
};

submitOrder.addEventListener('click', (e) => {
    e.preventDefault();
    // outerModal.classList.remove('outer-modal');
    modalOuter.style.display = 'none';
    const myHtml = `
        <div class="order">
            <span class="title">
                ${inputs.value}
            </span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    `;
    orderLists.insertAdjacentHTML('afterbegin', myHtml);
    modalOuter.reset();

});
// add the button

cardButtons.addEventListener('click', handleButtonClick);


document.addEventListener('click', (event) => {
    console.log(event.target);
});

// declar the input