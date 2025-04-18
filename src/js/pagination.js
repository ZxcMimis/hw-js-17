import { getImgages } from './get-img-api'

export let perPage = 9
export let pageVar = 1

const loadMoreBtn = document.querySelector('.show-more')

loadMoreBtn.addEventListener('click', () => {
    pageVar +=1
    console.log(perPage)
    getImgages(perPage, pageVar)
})