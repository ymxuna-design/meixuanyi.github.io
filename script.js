const current=(location.pathname.split('/').pop()||'index.html');
const photoPages=['photos.html','views.html','people.html'];
document.querySelector('#site-header').innerHTML=`
  <div class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">MayFilm<br>STUDIO</a>
      <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">☰</button>
      <nav class="nav" aria-label="Main navigation">
        <a class="${current==='index.html'?'active':''}" href="index.html">Home</a>
        <div class="nav-item ${photoPages.includes(current)?'active':''}">
          <a href="photos.html" aria-haspopup="true">Photos</a>
          <div class="submenu">
            <a class="${current==='views.html'?'active':''}" href="views.html">人间景（Views in Life）</a>
            <a class="${current==='people.html'?'active':''}" href="people.html">在人间（People in Life）</a>
          </div>
        </div>
        <a class="${current==='screening-events.html'?'active':''}" href="screening-events.html">Screening Events</a>
        <a class="${current==='book-online.html'?'active':''}" href="book-online.html">Online Booking</a>
        <a class="${current==='about.html'?'active':''}" href="about.html">About</a>
        <a class="${current==='contact.html'?'active':''}" href="contact.html">Contact</a>
      </nav>
    </div>
  </div>`;
document.querySelector('#site-footer').innerHTML=`<footer class="footer">© 2024 By <a href="index.html">MayFilm STUDIO. LTD</a></footer>`;

const menuToggle=document.querySelector('.menu-toggle');
menuToggle.addEventListener('click',()=>{
  const nav=document.querySelector('.nav');
  const isOpen=nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(isOpen));
});

const lightbox=document.querySelector('.lightbox');
if(lightbox){
  document.querySelectorAll('.masonry img').forEach(img=>img.addEventListener('click',()=>{
    lightbox.querySelector('img').src=img.src;
    lightbox.classList.add('open');
  }));
  lightbox.addEventListener('click',()=>lightbox.classList.remove('open'));
}

// The image shifts gently while the visitor scrolls, matching Wix's parallax feel.
const parallaxPanels=[...document.querySelectorAll('.parallax-bg')];
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let ticking=false;
function updateParallax(){
  const viewportCenter=window.innerHeight/2;
  parallaxPanels.forEach(panel=>{
    const rect=panel.getBoundingClientRect();
    const panelCenter=rect.top+rect.height/2;
    const offset=Math.max(-85,Math.min(85,(viewportCenter-panelCenter)*0.14));
    panel.style.setProperty('--parallax-y',`${offset}px`);
  });
  ticking=false;
}
if(parallaxPanels.length&&!reducedMotion){
  updateParallax();
  addEventListener('scroll',()=>{
    if(!ticking){requestAnimationFrame(updateParallax);ticking=true;}
  },{passive:true});
  addEventListener('resize',updateParallax);
}
