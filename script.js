const current=(location.pathname.split('/').pop()||'index.html');
const nav=[['Home','index.html'],['Photos','photos.html'],['Screening Events','screening-events.html'],['Online Booking','book-online.html'],['About','about.html'],['Contact','contact.html']];
document.querySelector('#site-header').innerHTML=`<div class="site-header"><div class="nav-wrap"><a class="brand" href="index.html">MayFilm<br>STUDIO</a><button class="menu-toggle" aria-label="Open menu">☰</button><nav class="nav">${nav.map(([n,h])=>`<a class="${current===h?'active':''}" href="${h}">${n}</a>`).join('')}</nav></div></div>`;
document.querySelector('#site-footer').innerHTML=`<footer class="footer">© 2024 By <a href="index.html">MayFilm STUDIO. LTD</a></footer>`;
document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));
const lightbox=document.querySelector('.lightbox');
if(lightbox){document.querySelectorAll('.masonry img').forEach(img=>img.addEventListener('click',()=>{lightbox.querySelector('img').src=img.src;lightbox.classList.add('open')}));lightbox.addEventListener('click',()=>lightbox.classList.remove('open'));}
