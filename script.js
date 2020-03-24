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
  var scheme = 'SchmasterCard';
  if (cardNumber.charAt(0) == '4') {
    scheme = 'Schmisa';
  }

  var domain = "success"
  if (cardNumber.length < 4) {
    domain = "failure"
  }

  const newURL = `schmalfred-consumer://add-card/${domain}?last_4_digits=${last4Digits}&scheme=${scheme}`;
  alert(newURL);
  window.location = newURL
}
