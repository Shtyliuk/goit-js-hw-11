import{S as c,i as u}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function f(l){if(!l.trim())throw new Error("Query cannot be empty");const s="https://pixabay.com",o="/api/",a="49495202-279cad4ade428b3db0cc5c04a",e=new URLSearchParams({key:a,q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"}),r=`${s}${o}?${e}`;console.log(r);try{const t=await fetch(r);if(!t.ok){const i=await t.json();throw new Error(i.message||`Error: ${t.status}`)}return await t.json()}catch(t){throw console.error("Fetch error:",t),t}}const n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function y(l){const{webformatURL:s,largeImageURL:o,tags:a,likes:e,views:r,comments:t,downloads:i}=l;return`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${s}" alt="${a}" />
      </a>
      <ul class="gallery-body">
        <li class="gallery-info">
          <h3>Likes:</h3>
          <p>${e}</p>
        </li>
        <li class="gallery-info">
          <h3>Views:</h3>
          <p>${r}</p>
        </li>
        <li class="gallery-info">
          <h3>Comments:</h3>
          <p>${t}</p>
        </li>
        <li class="gallery-info">
          <h3>Downloads:</h3>
          <p>${i}</p>
        </li>
      </ul>
    </li>`}function m(l){const s=l.hits.map(o=>y(o)).join(`
`);n.gallery.insertAdjacentHTML("beforeend",s),new c(".gallery a",{captionDelay:250,captionsData:"alt"})}n.loader.style.display="none";n.form.addEventListener("submit",d);function d(l){l.preventDefault(),n.gallery.innerHTML="",n.loader.style.display="flex";const s=l.target.elements["search-text"].value.trim();f(s).then(o=>{o.hits.length===0?u.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"white",backgroundColor:"red",position:"topRight"}):m(o)}).catch(o=>{console.log(o)}).finally(()=>{n.loader.style.display="none"}),l.target.reset()}
//# sourceMappingURL=index.js.map
