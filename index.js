const allBtn = document.getElementsByClassName('add-btn');
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const name = event.target.innerText;
        const price = document.getElementById('ticket-price').innerText;
        const parIntPrice = parseInt(price);

        const priceShow = document.getElementById('price-show');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = name;
        p2.innerText = 'Economy';
        p3.innerText = parIntPrice;

        priceShow.appendChild(p1);
        priceShow.appendChild(p2);
        priceShow.appendChild(p3);
    })
}


// const allBtn = document.getElementsByClassName('add-btn');
// for (const btn of allBtn) {
//     btn.addEventListener('click', function (event) {
//         const name = event.target.parentNode.childNodes[1].innerText;
//         const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
//         const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;

//         const selectedPlayersContainer = document.getElementById('selected-players-container');

//         const firstCartCount = getConvertedValue('cart');
//         if (firstCartCount + 1 > 6) {
//             alert('sorry');
//             return;
//         }

//         event.target.setAttribute('disabled', false);
//         event.target.parentNode.style.backgroundColor = 'gray';

//         const budget = getConvertedValue('budget');
//         document.getElementById('budget').innerText = budget - parseInt(price);

//         const cartCount = getConvertedValue('cart');
//         document.getElementById('cart').innerText = cartCount + 1;

//         const leftCount = getConvertedValue('left');
//         document.getElementById('left').innerText = leftCount - 1;

//         const div = document.createElement('div');
//         div.classList.add('selected-players');
//         const p = document.createElement('p');
//         const p2 = document.createElement('p');
//         const p3 = document.createElement('p');

//         p.innerText = name;
//         p2.innerText = price;
//         p3.innerText = category;

//         div.appendChild(p);
//         div.appendChild(p2);
//         div.appendChild(p3);

//         selectedPlayersContainer.appendChild(div);

//         updateTotalCost(price);
//         updateGrandTotal();
//     })
// }

// function updateGrandTotal(status) {
//     const totalCost = getConvertedValue('total-cost');
//     if (status == undefined) {
//         document.getElementById('grand-total').innerText = totalCost;
//     }
//     else {
//         const couponCode = document.getElementById('coupon-code').value;
//         if (couponCode == 'love420') {
//             const discouted = totalCost * 0.2;
//             document.getElementById('grand-total').innerText = totalCost - discouted;
//         }
//         else {
//             alert('please enter a valid coupon code');
//         }
//     }

// }

// function updateTotalCost(value) {
//     console.log(value);
//     const totalCost = getConvertedValue('total-cost');
//     const sum = totalCost + parseInt(value);
//     document.getElementById('total-cost').innerText = sum;
// }

// function getConvertedValue(id) {
//     const price = document.getElementById(id).innerText;
//     const convertedPrice = parseInt(price);
//     return convertedPrice;
// }