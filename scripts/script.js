let serial = 0;
document.getElementById('A1').addEventListener('click', function () {
    serial += 1;
    // -----------------------------------
    const seatA1 = document.getElementById('A1').innerText;
    const seatClass = 'Economy';
    const selectedPrice = document.getElementById('seat-price').innerText;
    const pricePerSeat = parseInt(selectedPrice);
    displayData(serial, seatA1, seatClass, pricePerSeat)
    document.getElementById('A1').setAttribute('disabled', true)
    A1.style.background = 'Green'
    A1.style.color = 'white'

    // seatReserved(serial, seatA1, seatClass, pricePerSeat);
    // --------Adding the price details------------------
    //     const container = document.getElementById('table-container');
    //     const tr = document.createElement('tr');
    //     tr.innerHTML = `
    //     <td>${serial}</td>
    //     <td>${seatA1}</td>
    //     <td>${seatClass}</td>    
    //     <td>${pricePerSeat}</td
    // `
    //     container.appendChild(tr)

    // ----------------------------------------------------------
    // let seatReserved = document.getElementById('seat-left').innerText;
    // document.getElementById('seat-left').innerText = parseInt(seatReserved) - 1;
    // const seatCount = document.getElementById('seat-count').innerText = serial;
    // // document.getElementById('A1').setAttribute('disabled', true) 
    // if (serial === 4) {
    //     alert('Warning ! You can  reserve only 4 seats.')
    //     // tr.innerHTML = ''
    // }
    // const priceTotal = pricePerSeat * serial;
    // document.getElementById('total-price').innerText = priceTotal;
    // document.getElementById('grand-total').innerText = priceTotal;

})
document.getElementById('A2').addEventListener('click', function () {
    serial += 1;
    // -----------------------------------
    const seatA1 = document.getElementById('A2').innerText;
    const seatClass = 'Economy';
    const selectedPrice = document.getElementById('seat-price').innerText;
    const pricePerSeat = parseInt(selectedPrice);
    displayData(serial, seatA1, seatClass, pricePerSeat)
    document.getElementById('A2').setAttribute('disabled', true)
    A2.style.background = 'Green'
    A2.style.color = 'white'
})
document.getElementById('A3').addEventListener('click', function () {
    serial += 1;
    // -----------------------------------
    const seatA1 = document.getElementById('A3').innerText;
    const seatClass = 'Economy';
    const selectedPrice = document.getElementById('seat-price').innerText;
    const pricePerSeat = parseInt(selectedPrice);
    displayData(serial, seatA1, seatClass, pricePerSeat)
    document.getElementById('A3').setAttribute('disabled', true)
    A3.style.background = 'Green'
    A3.style.color = 'white'



    // seatReserved(serial, seatA1, seatClass, pricePerSeat);
    // --------Adding the price details------------------
    //     const container = document.getElementById('table-container');
    //     const tr = document.createElement('tr');
    //     tr.innerHTML = `
    //     <td>${serial}</td>
    //     <td>${seatA1}</td>
    //     <td>${seatClass}</td>    
    //     <td>${pricePerSeat}</td
    // `
    //     container.appendChild(tr)

    // ----------------------------------------------------------
    // let seatReserved = document.getElementById('seat-left').innerText;
    // document.getElementById('seat-left').innerText = parseInt(seatReserved) - 1;
    // const seatCount = document.getElementById('seat-count').innerText = serial;
    // // document.getElementById('A1').setAttribute('disabled', true) 
    // if (serial === 4) {
    //     alert('Warning ! You can  reserve only 4 seats.')
    //     // tr.innerHTML = ''
    // }
    // const priceTotal = pricePerSeat * serial;
    // document.getElementById('total-price').innerText = priceTotal;
    // document.getElementById('grand-total').innerText = priceTotal;

})
document.getElementById('A4').addEventListener('click', function () {
    serial += 1;
    // -----------------------------------
    const seatA1 = document.getElementById('A4').innerText;
    const seatClass = 'Economy';
    const selectedPrice = document.getElementById('seat-price').innerText;
    const pricePerSeat = parseInt(selectedPrice);
    displayData(serial, seatA1, seatClass, pricePerSeat)
    document.getElementById('A4').setAttribute('disabled', true)
    A4.style.background = 'Green'
    A4.style.color = 'white'
})
document.getElementById('B1').addEventListener('click', function () {
    serial += 1;
    // -----------------------------------
    const seatA1 = document.getElementById('B1').innerText;
    const seatClass = 'Economy';
    const selectedPrice = document.getElementById('seat-price').innerText;
    const pricePerSeat = parseInt(selectedPrice);
    displayData(serial, seatA1, seatClass, pricePerSeat)
    document.getElementById('B1').setAttribute('disabled', true)
    B1.style.background = 'Green'
    B1.style.color = 'white'
})
document.getElementById('B2').addEventListener('click', function () {
    serial += 1;
    // -----------------------------------
    const seatA1 = document.getElementById('B2').innerText;
    const seatClass = 'Economy';
    const selectedPrice = document.getElementById('seat-price').innerText;
    const pricePerSeat = parseInt(selectedPrice);
    displayData(serial, seatA1, seatClass, pricePerSeat)
    document.getElementById('B2').setAttribute('disabled', true)
    B2.style.background = 'Green'
    B2.style.color = 'white'
})
document.getElementById('B3').addEventListener('click', function () {
    serial += 1;
    // -----------------------------------
    const seatA1 = document.getElementById('B3').innerText;
    const seatClass = 'Economy';
    const selectedPrice = document.getElementById('seat-price').innerText;
    const pricePerSeat = parseInt(selectedPrice);
    displayData(serial, seatA1, seatClass, pricePerSeat)
    document.getElementById('B3').setAttribute('disabled', true)
    B3.style.background = 'Green'
    B3.style.color = 'white'
})
document.getElementById('B4').addEventListener('click', function () {
    serial += 1;
    // -----------------------------------
    const seatA1 = document.getElementById('B4').innerText;
    const seatClass = 'Economy';
    const selectedPrice = document.getElementById('seat-price').innerText;
    const pricePerSeat = parseInt(selectedPrice);
    displayData(serial, seatA1, seatClass, pricePerSeat)
    document.getElementById('B4').setAttribute('disabled', true)
    B4.style.background = 'Green'
    B4.style.color = 'white'
})


// ----------Coupon code---------

const btn = document.getElementById('promo-apply')
btn.addEventListener('click', function () {
    const couponElement = document.getElementById('promo-code').value;
    const couponCode = couponElement.split(' ').join(' ');
    priceTotal = parseInt(document.getElementById('total-price').innerText);

    if (couponCode === 'NEW15') {
        const grandTotal = document.getElementById('grand-total');
        const discount = 0.15 * priceTotal
        const discountedAmount = priceTotal - discount;
        grandTotal.innerText = discountedAmount;
        const selectedContainer = document.getElementById('selected-place-container');
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${'Discounted Amount'}</td>
        <td>BDT  ${discount}</td>       
        `
        selectedContainer.appendChild(tr);
        document.getElementById('promo-apply').remove();
        document.getElementById('promo-code').remove();
    }
    else if (couponCode === 'Coupon 20') {
        const grandTotal = document.getElementById('grand-total');
        const discount = 0.2 * priceTotal
        const discountedAmount = priceTotal - discount;
        grandTotal.innerText = discountedAmount;
        const selectedContainer = document.getElementById('selected-place-container');
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td >${'Discounted price'}</td>
        <td>BDT  ${discount}</td>       
        `
        selectedContainer.appendChild(tr)
        document.getElementById('promo-apply').remove();
        document.getElementById('promo-code').remove();
    }
    else {
        alert('Enter a valid code');
    }
});

// ---------------------------------------------------

function displayData(serial, seatA1, seatClass, pricePerSeat) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${seatA1}</td>
    <td>${seatClass}</td>    
    <td>${pricePerSeat}</td
`
    container.appendChild(tr)
    let seatReserved = document.getElementById('seat-left').innerText;
    document.getElementById('seat-left').innerText = parseInt(seatReserved) - 1;
    const seatCount = document.getElementById('seat-count').innerText = serial;
    if (serial >4) {
        alert('Warning ! You can  reserve only 4 seats.')
        tr.innerHTML =''    
        priceTotal = pricePerSeat * serial;  
          
    }
    const priceTotal = pricePerSeat * serial;
    document.getElementById('total-price').innerText = priceTotal;
    document.getElementById('grand-total').innerText = priceTotal;

}

// -------form----------------

let button = document.getElementById('booking-btn')
let inputPhoneNumber = document.getElementById('phone-number')
let success =document.getElementById('my_modal_8')
inputPhoneNumber.addEventListener('keyup',function(e){
 console.log(e.currentTarget.value)

 let inputValue=e.currentTarget.value;
 if (inputValue ==='number'){
    button.disabled=true;
      
 }
 else{
    button.disabled=false;
 }

})