function sendCard() {
  const cardNumber = document.getElementById('card-number').value;
  var pageName = 'success';
  if (cardNumber.length < 4) {
    pageName = 'failure';
  }

  const newURL = `${pageName}.html?card_number=${cardNumber}`;
  window.location = newURL;
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
  var scheme = 'SchmasterCard';
  if (cardNumber.charAt(0) == '4') {
    scheme = 'Schmisa';
  }

  var domain = "success"
  if (cardNumber.length < 4) {
    domain = "failure"
  }

  const newURL = `schmalfred-consumer://add-card/${domain}?last_4_digits=${last4Digits}&scheme=${scheme}`;
  window.location = newURL
}
