const allBtn = document.getElementsByClassName('add-btn');
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const name = event.target.innerText;
        const price = document.getElementById('ticket-price').innerText;
        const parIntPrice = parseInt(price);

        const priceShow = document.getElementById('price-show');

        const firstCartCount = getConvertedValue('seat-count');
        if (firstCartCount + 1 > 4) {
            alert('sorry..! only selected 4 seat');
            return;
        }

        event.target.setAttribute('disabled', false);
        event.target.style.backgroundColor = '#1DD100';
        event.target.style.color = 'white';

        const seatLeft = getConvertedValue('seat-left');
        document.getElementById('seat-left').innerText = seatLeft - 1;

        const seatcount = getConvertedValue('seat-count');
        document.getElementById('seat-count').innerText = seatcount + 1;

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = name;
        p2.innerText = 'Economy';
        p3.innerText = parIntPrice;

        priceShow.appendChild(p1);
        priceShow.appendChild(p2);
        priceShow.appendChild(p3);

        updateTotal(parIntPrice);
        updateGrandTotal();
    })
}

function updateGrandTotal(status) {
    const totalPrice = getConvertedValue('total-price');
    if (status == undefined) {
        document.getElementById('grand-total').innerText = totalPrice;
    }
    else {
        const couponCode = document.getElementById('coupon-code').value;
        if (couponCode == 'NEW15') {
            const discountedPrice = totalPrice * 0.15;
            document.getElementById('grand-total').innerText = totalPrice - discountedPrice;
        }
        else if (couponCode == 'Couple 20') {
            const discountedPrice = totalPrice * 0.2;
            document.getElementById('grand-total').innerText = totalPrice - discountedPrice
        }
        else {
            alert('Please enter valid coupon code')
        }
    }
}

function updateTotal(value) {
    const total = getConvertedValue('total-price');
    const sum = total + value;
    document.getElementById('total-price').innerText = sum;
}

function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
}

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