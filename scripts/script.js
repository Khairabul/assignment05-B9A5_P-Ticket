let serial = 0;
document.getElementById('A1').addEventListener('click', function () {
    serial += 1;
    const seatA1 = document.getElementById('A1').innerText;
    const seatClass = 'Economy';
    const selectedPrice = document.getElementById('seat-price').innerText;
    const pricePerSeat = parseInt(selectedPrice);
    // seatReserved(serial, seatA1, seatClass, pricePerSeat);
    // --------Adding the price details------------------
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
    // document.getElementById('A1').setAttribute('disabled', true) 
    if (serial === 4) {
        alert('Warning ! You can  reserve only 4 seats.')
        // tr.innerHTML = ''
    }
    const priceTotal = pricePerSeat * serial;
    document.getElementById('total-price').innerText = priceTotal;
    document.getElementById('grand-total').innerText=priceTotal;

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
        <td>${'Discounted price'}</td>
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

//------------Form------------------------
// document.getElementById('booking-btn').setAttribute('disabled',true);
// document.getElementById('booking-btn').addEventListener('click',function(){
//     const bookingButton=document.getElementById('booking-btn')
//     const phoneNumber=document.querySelector('.phone-number');    
//     if (phoneNumber.value.length=== 0 || phoneNumber.value === ''|phoneNumber.value=== null){

//     }
// })
      
// document.getElementById('booking-btn').addEventListener('click',function(){
//     const sectionId=document.getElementById('section-id')
//     sectionId.classList.add('hidden')
//     const bookingConfirmation=document.getElementById('booking-confirmation')
    
//     bookingConfirmation.classList.remove('hidden')
// })

// function play(){
//     const sectionId=document.getElementById('section-id')
//     sectionId.classList.add('hidden')
//     const bookingConfirmation=document.getElementById('booking-confirmation')
    
//     bookingConfirmation.classList.remove('hidden')
// }



// function seatToReserved(evenId){
//     document.getElementById(evenId).addEventListener('click', function (even) {
//         serial += 1;
//         const seat = document.getElementById(evenId).innerText;})
// }

// function seatReserved(serial, seatA1, seatClass, pricePerSeat) {
//     const container = document.getElementById('table-container');
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//     <td>${serial}</td>
//     <td>${seatA1}</td>
//     <td>${seatClass}</td>
//     <td>${pricePerSeat}</td
//     `
//     container.appendChild(tr)
//     const seatReserved = document.getElementById('seat-left').innerText;
//     document.getElementById('seat-left').innerText = parseInt(seatReserved) - serial;
//     document.getElementById('seat-count').innerText =  serial;
//     if (serial > 4) {
//         alert('You have already selected 4 seats')
//     }
//     document.getElementById('A1').setAttribute('disabled', true,'green')
// }
