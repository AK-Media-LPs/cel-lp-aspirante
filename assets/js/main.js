(function(){
  var d=document,root=d.documentElement,VERSAO=root.getAttribute('data-versao')||'';
  window.dataLayer=window.dataLayer||[];
  /* UTMs -> checkout Hotmart */
  var q=new URLSearchParams(location.search);
  function val(k){return q.get(k)||'direto';}
  d.querySelectorAll('a.js-checkout').forEach(function(a){
    try{
      var u=new URL(a.getAttribute('href'));
      q.forEach(function(v,k){if(!u.searchParams.has(k))u.searchParams.set(k,v);});
      if(!u.searchParams.has('sck'))u.searchParams.set('sck',[VERSAO,val('utm_source'),val('utm_campaign'),val('utm_content')].join('|'));
      if(!u.searchParams.has('src'))u.searchParams.set('src',VERSAO);
      a.href=u.toString();
    }catch(e){}
    a.addEventListener('click',function(){
      window.dataLayer.push({event:'cta_checkout',cta_posicao:a.getAttribute('data-cta')||'',versao_lp:VERSAO});
    });
  });
  /* Acordeões (pilares e FAQ) */
  d.querySelectorAll('[data-acc]').forEach(function(group){
    var btns=group.querySelectorAll('.acc__btn');
    btns.forEach(function(b){
      b.addEventListener('click',function(){
        var open=b.getAttribute('aria-expanded')==='true';
        btns.forEach(function(o){o.setAttribute('aria-expanded','false');d.getElementById(o.getAttribute('aria-controls')).hidden=true;});
        if(!open){b.setAttribute('aria-expanded','true');d.getElementById(b.getAttribute('aria-controls')).hidden=false;}
      });
    });
  });
  /* YouTube: carrega o player só no clique */
  d.querySelectorAll('[data-yt]').forEach(function(b){
    b.addEventListener('click',function(){
      var f=d.createElement('iframe');
      f.src='https://www.youtube.com/embed/'+b.getAttribute('data-yt')+'?autoplay=1&rel=0&playsinline=1';
      f.title='Depoimento de aluno do CEL';
      f.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.referrerPolicy='strict-origin-when-cross-origin';f.allowFullscreen=true;
      b.replaceWith(f);
    });
  });
  /* CTA fixo no mobile a partir da oferta */
  var sticky=d.querySelector('.sticky'),offer=d.getElementById('oferta');
  function onScroll(){if(!sticky||!offer)return;sticky.classList.toggle('is-on',offer.getBoundingClientRect().top<innerHeight*.4&&innerWidth<768);}
  addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);onScroll();
  /* Animações de entrada */
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!('IntersectionObserver' in window)||reduce){d.querySelectorAll('[data-r]').forEach(function(e){e.classList.add('in');});runCounters(true);return;}
  d.querySelectorAll('[data-stagger]').forEach(function(g){[].forEach.call(g.children,function(c,i){if(!c.hasAttribute('data-r'))c.setAttribute('data-r',g.getAttribute('data-stagger')||'up');c.style.setProperty('--d',(i*.1)+'s');});});
  d.querySelectorAll('[data-r]').forEach(function(e){if(!e.style.getPropertyValue('--d')&&e.parentNode.hasAttribute('data-bars')){var i=[].indexOf.call(e.parentNode.children,e);e.style.setProperty('--d',(i*.07)+'s');}});
  var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{rootMargin:'0px 0px -12% 0px'});
  d.querySelectorAll('[data-r]').forEach(function(e){io.observe(e);});
  runCounters(false);
  function runCounters(instant){
    d.querySelectorAll('[data-count]').forEach(function(el){
      var to=+el.getAttribute('data-count'),pre=el.getAttribute('data-prefix')||'',suf=el.getAttribute('data-suffix')||'';
      if(instant)return;
      var co=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;co.disconnect();var t0=performance.now();
        (function tick(t){var p=Math.min((t-t0)/1600,1),e=1-Math.pow(1-p,3);el.textContent=pre+Math.round(to*e)+suf;if(p<1)requestAnimationFrame(tick);})(t0);
      },{rootMargin:'0px 0px -10% 0px'});co.observe(el);
    });
  }
})();