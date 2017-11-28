'use strict'

const locale =  document.getElementById('locale')
const currency = document.getElementById('currency')
const date = document.getElementById('date')

const inputNumber = 1234.56
const inputDate = new Date()

function getCurrency(locale) {
    return {
        'en-US': 'USD',
        'pt-BR': 'BRL',
        'de-DE': 'EUR',
        'ja-JP': 'JPY'
    }[locale]
}

function setLocale(locale) {
    currency.innerHTML = inputNumber.toLocaleString(locale, { style: 'currency', currency: getCurrency(locale) })
    date.innerHTML = inputDate.toLocaleString(locale)
}

setLocale(locale.value)
locale.addEventListener('change', (e) => setLocale(e.target.value))