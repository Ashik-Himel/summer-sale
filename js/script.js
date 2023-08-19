const couponForm = document.getElementById('coupon-form');
const couponField = document.getElementById('coupon-field');
const couponSubmit = document.getElementById('coupon-submit');
const itemList = document.getElementById('item-list');
const totalPrice = document.getElementById('total-price');
const discount = document.getElementById('discount');
const grandTotal = document.getElementById('grand-total');
const purchaseBtn = document.getElementById('purchase-btn');
const goHome = document.getElementById('go-home');

const cards = document.getElementsByClassName('card');

let discountPercentage = 0;
couponForm.addEventListener('submit', function() {
  if (couponField.value === 'SELL200') {
    discountPercentage = 20;
    const currentTotal = parseFloat(totalPrice.innerText);
    const discountAmount = (currentTotal * (discountPercentage / 100)).toFixed(2);
    discount.innerText = discountAmount;
    grandTotal.innerText = (currentTotal - discountAmount).toFixed(2);
    couponField.value = '';
  }
  else {
    alert("Invalid Coupon!!!");
  }
})

for (let card of cards) {
  card.addEventListener('click', function() {
    const currentTotal = parseFloat(totalPrice.innerText);
    const title = card.lastElementChild.children[1].innerText;
    const price = parseFloat(card.lastElementChild.children[2].innerText);
    let itemCount = itemList.children.length;

    const span = document.createElement('span');
    span.innerHTML = `${itemCount + 1}. ${title}`;
    span.style.fontSize = '18px';
    span.style.fontWeight = '600';
    span.style.display = 'block';
    span.style.marginBottom = '5px';
    itemList.appendChild(span);

    const updatedTotal = (currentTotal + price).toFixed(2);
    const discountAmount = (updatedTotal * (discountPercentage / 100)).toFixed(2);
    totalPrice.innerText = updatedTotal;
    discount.innerText = discountAmount;
    grandTotal.innerText = (updatedTotal - discountAmount).toFixed(2);

    if (updatedTotal > 0) purchaseBtn.removeAttribute('disabled');
    if (updatedTotal >= 200) couponSubmit.removeAttribute('disabled');
  })
}

goHome.addEventListener('click', function() {
  discountPercentage = 0;
  couponSubmit.setAttribute('disabled', 'true');
  purchaseBtn.setAttribute('disabled', 'true');
  itemList.innerHTML = '';
  totalPrice.innerText = '0.00';
  discount.innerText = '0.00';
  grandTotal.innerText = '0.00';
})