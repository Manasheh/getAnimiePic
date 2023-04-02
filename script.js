
const btnEl = document.querySelector('#btn')
const imgEl = document.querySelector('#image')
const nameEl = document.querySelector('#name')
const animeEl = document.querySelector('#anime')

async function getAnime() {

    try {
        btnEl.disabled = true;
        btnEl.innerText = 'Loading...'
        imgEl.src = 'spinner.svg'

        const apiURL = 'https://api.catboys.com/img'
        const response = await fetch(apiURL)
        const data = await response.json()

        animeEl.style.display = 'block'
        imgEl.src = data.url
        nameEl.innerText = data.artist
        btnEl.innerText = 'Get Anime'
        btnEl.disabled = false
    } catch (error) {
        btnEl.disabled = false
        btnEl.innerText = 'Get Anime'
        nameEl.innerText = 'An error happened'
    }


}

btnEl.addEventListener('click', getAnime)