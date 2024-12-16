function showPrice() {
    var originalPrice = document.querySelector('#oPrice').value;
    var rate = document.querySelector('#rate').value;
    var savedPrice = originalPrice * (rate / 100);
    var resultPrice = originalPrice - savedPrice;
    document.querySelector('#showResult').innerHTML = "상품의 원래 가격은" + originalPrice + "원이고, 할인율은" + rate + "%이며, 절약한 금액은" + savedPrice + "원이며, 할인된 가격은" + resultPrice + "원입니다.";
}