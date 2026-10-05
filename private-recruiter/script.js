const btn=document.querySelector('.menu-btn');
const menu=document.querySelector('.mobile-nav');

if(btn&&menu){
  btn.addEventListener('click',()=>{
    const open=btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded',String(!open));
    menu.classList.toggle('open',!open);
  });

  menu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click',()=>{
      btn.setAttribute('aria-expanded','false');
      menu.classList.remove('open');
    });
  });
}
