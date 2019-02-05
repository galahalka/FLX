var price = Number(prompt('please enter price'));
var discount = Number(prompt('please enter discount'));


if (typeof (price) === 'number' && price > 0 && price < 9999999 && 
    typeof (discount) === 'number' && discount > 0 && discount < 99) {
    var priceWithDiscount = price - price * discount / 100;
    var saved = price - priceWithDiscount;
    alert(`Price without discount: ${Math.round(price*100)/100}
Discount: ${Math.round(discount*100)/100}
Price with discount: ${Math.round(priceWithDiscount*100)/100}
Saved: ${Math.round(saved*100)/100}`);

} else {
    alert('Invalid data');
}