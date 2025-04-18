const listEl = document.querySelector('.list')
export const makeMarkup = (data) =>{
    const titlesMakrup = data.hits.map(obj=>
        `<li class="img-item">
                <img src="${obj.largeImageURL}" alt="">
        </li>`
    ).join('')
    listEl.insertAdjacentHTML("beforeend", titlesMakrup)
}