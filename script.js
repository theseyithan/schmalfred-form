function sendCard() {
  const cardNumber = document.getElementById('card-number').value;
  const newURL = 'success.html?card_number='.concat(cardNumber);
  window.location.replace(newURL);
}

function redirectToConsumer() {
  setTimeout(() => {
    _redirectToConsumer();
  }, 1000);
}

function _redirectToConsumer() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const cardNumber = urlParams.get('card_number');

  const last4Digits = cardNumber.substr(cardNumber.length - 4);
  const scheme = 'SchmasterCard';
  const newURL = `schmalfred-consumer://add-card/success?last_4_digits:${last4Digits}&scheme=${scheme}`;
  window.location.replace(newURL);
}
