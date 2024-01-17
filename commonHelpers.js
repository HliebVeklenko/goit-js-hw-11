import{S as u,i as d}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p=document.querySelector(".form"),l=document.querySelector(".input-text"),c=document.querySelector(".gallery"),i=document.querySelector(".load");i.style.display="none";const f=new u(".gallery a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",r=>{r.preventDefault();const s=l.value;c.innerHTML="",l.value="",i.style.display="block";const a=new URLSearchParams({key:"41881977-c3e0a259ee9c86064d37a09ba",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${a}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(o.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}const e=o.hits.reduce((t,n)=>t+m(n),"");c.innerHTML=e,f.refresh(),i.style.display="none"})});function m(r){return`<li>
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}">
      </a>
      <div class="info">
        <div class="crit-info">
          <span>Likes</span>
          <span class="crit-value">${r.likes}</span>
        </div>
        <div class="crit-info">
          <span>Views</span>
          <span class="crit-value">${r.views}</span>
        </div>
        <div class="crit-info">
          <span>Comments</span>
          <span class="crit-value">${r.comments}</span>
        </div>
        <div class="crit-info">
          <span>Downloads</span>
          <span class="crit-value">${r.downloads}</span>
        </div>
      </div>
    </li>
  `}
//# sourceMappingURL=commonHelpers.js.map
