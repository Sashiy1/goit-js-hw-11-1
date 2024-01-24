import{S as c,i as u}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(o){return fetch(`${d}?key=${y}&q=${o}&orientation=${h}&image_type=${g}&safesearch=${p}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}const a=document.querySelector(".form"),m=document.querySelector(".gallery");a.addEventListener("submit",E);const d="https://pixabay.com/api/",y="41967229-af64f083e47c21f795887158a",h="horizontal",g="photo",p="true";function E(o){o.preventDefault();const r=o.currentTarget.elements.serching.value;f(r).then(S).catch(l).finally(()=>a.reset())}function S({hits:o}){if(o.length===0)l();else{const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:L,downloads:$})=>` <li class="gallery-item">
  <a class="gallery-link" href="${n}">
  <img class="gallery-image"
  src="${s}"
  alt="${e}" />

  

 
</li>`);m.innerHTML=r.join(""),a.reset()}new c(".gallery-item a",{captionsData:"alt",captionDelay:250})}function l(o){u.error({message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
