const e=document.querySelector(".list"),t=t=>{let o=t.hits.map(e=>`<li class="img-item">
                <img src="${e.largeImageURL}" alt="">
        </li>`).join("");e.insertAdjacentHTML("beforeend",o)};let o=1;document.querySelector(".show-more").addEventListener("click",()=>{o+=1,console.log(9),n(9,o)});const n=(e,o)=>fetch(`https://pixabay.com/api/?&key=48306443-446e4eebc6203163013c3f315&orientation='horizontal'&colors=pink&page=${o}&per_page=${e}`).then(e=>e.json()).then(e=>t(e));n(9,o);
//# sourceMappingURL=hw-js-17.2a0c93e1.js.map
