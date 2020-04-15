function sendCard() {
  const cardNumber = document.getElementById('card-number').value;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const delay = urlParams.get('delay');

  var pageName = 'success';
  if (cardNumber.length < 4) {
    pageName = 'failure';
  }

  const newURL = `${pageName}.html?card_number=${cardNumber}&delay=${delay}`;
  window.location = newURL;
}

function redirectToConsumer() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const delay = urlParams.get('delay');

  var time = 0;
  if (delay == "1") {
    time = 1000;
  }

  setTimeout(() => {
    _redirectToConsumer();
  }, time);
}

function _redirectToConsumer() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const cardNumber = urlParams.get('card_number');

  const last4Digits = cardNumber.substr(cardNumber.length - 4);
  const bin = cardNumber.substr(0, 6)
  const success = cardNumber.length >= 6

  var scheme = 'MasterCard';
  if (cardNumber.charAt(0) == '4') {
    scheme = 'Visa';
  }

  var url = `alfred.callback://add_credit_card/success/?last_4_digits=${last4Digits}&bin=${bin}&expiry_date=0330&token=${cardNumber}&scheme=${scheme}&provider=payu&should_save=true&tracking=...`
  if (!success) {
    url = `alfred.callback://add_credit_card/failure/?exception=PSPTimeout&tracking=...`
  }

  window.location = url
}
