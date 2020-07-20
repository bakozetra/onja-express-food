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
let submitOrders = document.querySelector('.submitOrder');
const quantity = document.querySelector('#quantity');

// create function of my modal

const hadleButton = () => {
    modalInner.innerHTML = `<form>
    <div>
        <div>
            <p>Your name :</p>
            <input class="input-form" type="text" id="name" name="name" placeholder="Enter your name here" required />

        </div>
        <div>
            <p>Please select your dish :</p>
            <select name="dish" class="select-form" required>
                <option value="romazava">Romazava</option>
                <option value="koba">Koba</option>
                <option value="ravitoto">Ravitoto</option>
                <option value="mokary">Mokary</option>
                <option value="achard">Achard</option>
                <option value="masikita">Masikita</option>
                <option value="sambos">Sambos</option>
                <option value="mofo-baolina">Mofo baolina</option>
                <option value="ranonapango">Ranonapango</option>
            </select>
        </div>

        <div>
            <p>Please select the size of your plate :</p>
            <input type="radio" id="small" name="size" value="small" required />
            <label for="small">Small</label><br />
            <input type="radio" id="medium" name="size" value="medium" />
            <label for="medium">Medium</label><br />
            <input type="radio" id="large" name="size" value="large" />
            <label for="large">Large</label><br />
        </div>
        <div>
            <p>How many pieces do you want to order?</p>
            <input class="input-form" type="number" id="quantity" name="amount" placeholder="Enter a number here" required />
        </div>
        <div>
            <button class="submitOrder" type="submit">Add this order</button>
        </div>
    </div>
</form>`;

    modalOuter.classList.add('open')
}
cardButtons.addEventListener('click', hadleButton);


// add window to listen all the button

window.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.matches('.submitOrder')) {
        const inputVal = document.getElementById("name").value;
        const myHtml = `
        <div class="order">
            <span class="title">
            ${inputVal}
            </span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    `;
        event.target = myHtml;
        orderLists.insertAdjacentHTML('afterbegin', myHtml);
        modalOuter.classList.remove('open');
        modalOuter.classList.remove('open');
        modalOuter.reset();

    } else if (event.target.matches('.details')) {
        const myInput = document.getElementById("name").value;
        const select = document.querySelector('.select-form').value;
        const detailHtml = `
       <h2>me</h2>
       <p> order</p>
       `;


    }
});

cardButton.forEach(button => button.addEventListener('click', window));