import{a as k,S as w,i as p}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=l(s);fetch(s.href,r)}})();const E=async(e,t=1,l=15)=>{const a=await k.get("https://pixabay.com/api/",{params:{key:"44369714-aeb99d27cdb76d6e65f8cf0da",q:e,image_type:"photo",page:t,per_page:l}});if(a.status!==200)throw new Error(a.status);return a.data},S=(e,t)=>{t.insertAdjacentHTML("beforeend",v(e)),f.refresh()},f=new w(".gallery-link",{captionsData:"alt",captionDelay:250});f.on("error.simplelightbox",function(e){console.log(e)});function v(e){return e.reduce((t,{webformatURL:l,largeImageURL:a,tags:s,likes:r,views:i,comments:b,downloads:L})=>t+=`<li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img
          class="gallery-image"
          src="${l}" 
          alt="${s}"
        />
        <div class="picture-describe">
        <span><span class="title">Likes</span>${r}</span>
        <span><span class="title">Views</span>${i}</span>
        <span><span class="title">Comments</span>${b}</span>
        <span><span class="title">Downloads</span>${L}</span>
        </div>
      </a>
    </li>`,"")}const d=document.querySelector(".gallery"),c=document.createElement("div");c.className="loader";d.appendChild(c);const o=document.querySelector(".load-more"),y=document.getElementById("loading-message");let n=1,g="",m=0;const q={position:"topRight",theme:"dark",color:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!"};document.querySelector("form").addEventListener("submit",async e=>{e.preventDefault(),d.innerHTML="",n=1,g=e.target.searchrequest.value,await h(g),e.target.reset()});o.addEventListener("click",()=>{h(g)});const h=async e=>{c.style.display="flex",o.style.display="none",y.style.display="block";try{const t=await E(e,n);if(c.style.display="none",y.style.display="none",t.hits.length===0&&n===1){p.error(q),o.style.display="none";return}t.hits.length>0&&(S(t.hits,d),n+=1,m=t.totalHits,n>Math.ceil(m/15)?(o.style.display="none",p.info({position:"topRight",theme:"dark",color:"#007bff",message:"We're sorry, but you've reached the end of search results."})):t.hits.length<15&&n===2?(o.style.display="none",p.info({position:"topRight",theme:"dark",color:"#007bff",message:"We're sorry, but you've reached the end of search results."})):o.style.display="block")}catch(t){c.style.display="none",y.style.display="none",d.innerHTML="Something went wrong. <br/>Please, check your connection and try again.",console.error(t)}},u=document.querySelector(".slide");u&&(u.addEventListener("click",e=>{document.body.classList.toggle("black"),document.body.firstElementChild.classList.toggle("black"),document.getElementById("searchrequest").classList.toggle("black"),e.target.firstElementChild.checked=!e.target.firstElementChild.checked}),setTimeout(()=>{u.style.opacity="0.1"},5e3));
//# sourceMappingURL=commonHelpers.js.map
