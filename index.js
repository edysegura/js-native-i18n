'use strict'

const locale =  document.getElementById('locale')

function showLocale (e) {
    console.log(e.target.value)
}

locale.addEventListener('change', showLocale)