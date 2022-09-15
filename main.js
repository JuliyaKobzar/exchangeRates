const ratesBitcoin = document.querySelector(".input__bit");
const ratesUsd = document.querySelector(".input__usd");
const btnResult = document.querySelector(".btn__result");
const result = document.querySelector(".result");

btnResult.onclick = function () {
  res = ratesUsd.value / ratesBitcoin.value;
  result.innerHTML = `You can buy ${res} BTC`;
};
