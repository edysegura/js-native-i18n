'use strict'

const locale = document.getElementById('locale')
const currency = document.getElementById('currency')
const date = document.getElementById('date')

const inputNumber = 1234.56
const inputDate = new Date()

function getCurrencyByLocale(locale) {
  return {
    'en-US': 'USD',
    'pt-BR': 'BRL',
    'de-DE': 'EUR',
    'ja-JP': 'JPY'
  }[ locale ]
}

function applyLocale(locale) {
  const currencyParams = {
    style: 'currency',
    currency: getCurrencyByLocale(locale)
  }
  currency.textContent = inputNumber.toLocaleString(locale, currencyParams)
  date.textContent = inputDate.toLocaleString(locale)
}

applyLocale(locale.value)
locale.addEventListener('change', event => applyLocale(event.target.value))
