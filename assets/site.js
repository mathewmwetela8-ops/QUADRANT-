
document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded',function(){
  var still=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sel='main .card, main .svc, main .pic, main .val, main .why>*, main h2, main .step, main .steps>*, main .bro>*, main .charter>*, main .cards>*, main .ticks li';
  var els=[];
  [].forEach.call(document.querySelectorAll(sel),function(el){if(el.closest('.hero,.svc-hero,.rv'))return;el.classList.add('rv');els.push(el);var p=el.parentElement,i=[].indexOf.call(p.children,el);el.style.transitionDelay=Math.min(i,5)*90+'ms'});
  var ill=document.querySelectorAll('.illus');
  if(still||!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('in')});[].forEach.call(ill,function(s){s.classList.add('on')});}
  else{
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){var t=x.target;t.classList.add('in');io.unobserve(t);setTimeout(function(){t.style.transitionDelay=''},1400)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
    els.forEach(function(el){io.observe(el)});
    var io2=new IntersectionObserver(function(es){es.forEach(function(x){x.target.classList.toggle('on',x.isIntersecting)})},{threshold:.05});
    [].forEach.call(ill,function(s){io2.observe(s)});
    setTimeout(function(){els.forEach(function(el){if(el.getBoundingClientRect().top<innerHeight)el.classList.add('in')})},1200);
  }
  var b=document.querySelector('.menu-btn'),n=document.querySelector('.nav');
  if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  var f=document.querySelector('form.quote');
  if(f){
    var q=new URLSearchParams(location.search).get('service')||(location.hash||'').replace('#','');
    var s=f.querySelector('#q-service'); if(q&&s){for(var i=0;i<s.options.length;i++){if(s.options[i].value===q)s.selectedIndex=i}}
    f.addEventListener('submit',function(ev){ev.preventDefault();
      // TODO before launch: send the form to the office inbox or CRM (for example a form service or the website host's form handler).
      f.hidden=true;document.querySelector('.thanks').hidden=false;});
  }
});
