// ── MATRIX RAIN ──
(function(){
  var canvas=document.getElementById('matrix-canvas');
  if(!canvas) return;
  var ctx=canvas.getContext('2d');
  var W,H,cols,drops;
  var chars='アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF{}[]();<>=/*+-|$#@!~^&';
  function resize(){
    W=canvas.width=window.innerWidth;
    H=canvas.height=window.innerHeight;
    cols=Math.floor(W/18);
    drops=[];
    for(var i=0;i<cols;i++) drops[i]=Math.random()*-50|0;
  }
  resize();
  window.addEventListener('resize',resize);
  function draw(){
    ctx.fillStyle='rgba(7,10,16,0.055)';
    ctx.fillRect(0,0,W,H);
    ctx.font='13px "IBM Plex Mono",monospace';
    for(var i=0;i<cols;i++){
      var c=chars[Math.random()*chars.length|0];
      var x=i*18;
      var y=drops[i]*18;
      var bright=Math.random()>.97;
      ctx.fillStyle=bright?'rgba(180,220,255,0.9)':'rgba(99,179,237,0.35)';
      ctx.fillText(c,x,y);
      if(y>H&&Math.random()>.975) drops[i]=0;
      drops[i]+=.5;
    }
  }
  setInterval(draw,50);
})();

// ── TERMINAL ANIMATION ──
(function(){
  var body=document.getElementById('terminal-body');
  if(!body) return;
  var lines=[
    {type:'cmd',prompt:'hassan@dev:~$',cmd:' whoami'},
    {type:'out',cls:'hi',text:'Hassan Zameer — Senior Full-Stack Engineer'},
    {type:'blank'},
    {type:'cmd',prompt:'hassan@dev:~$',cmd:' cat role.txt'},
    {type:'out',cls:'acc',text:'Founding engineer. Built Jobz 0→1.'},
    {type:'out',cls:'',text:'6+ years shipping production systems at scale.'},
    {type:'blank'},
    {type:'cmd',prompt:'hassan@dev:~$',cmd:' ls skills/'},
    {type:'out',cls:'grn',text:'rails/   react/   nextjs/   typescript/   aws/'},
    {type:'out',cls:'grn',text:'elasticsearch/   openai/   kubernetes/   stripe/'},
    {type:'blank'},
    {type:'cmd',prompt:'hassan@dev:~$',cmd:' echo $STATUS'},
    {type:'out',cls:'amb',text:'OPEN_TO_REMOTE_OPPORTUNITIES=true'},
    {type:'blank'},
    {type:'cursor'}
  ];
  var lineIdx=0,charIdx=0,typing=false;
  function addLine(l){
    var d=document.createElement('div');
    d.className='t-line';
    if(l.type==='blank'){d.style.height='10px';body.appendChild(d);return;}
    if(l.type==='cursor'){
      var p=document.createElement('div');p.className='t-line';
      p.innerHTML='<span class="t-prompt">hassan@dev:~$</span> <span id="terminal-cursor"></span>';
      body.appendChild(p);return;
    }
    if(l.type==='cmd'){
      d.innerHTML='<span class="t-prompt">'+l.prompt+'</span><span class="t-cmd"></span>';
      body.appendChild(d);
      var span=d.querySelector('.t-cmd');
      typeText(span,l.cmd,function(){setTimeout(nextLine,120);});
      return;
    }
    if(l.type==='out'){
      d.innerHTML='<span class="t-out'+(l.cls?' '+l.cls:'')+'">'+l.text+'</span>';
      body.appendChild(d);
      setTimeout(nextLine,60);
    }
  }
  function typeText(el,text,cb){
    var i=0;
    (function t(){
      if(i<text.length){el.textContent+=text[i++];setTimeout(t,28+(Math.random()*20-10));}
      else cb();
    })();
  }
  function nextLine(){
    if(lineIdx>=lines.length) return;
    addLine(lines[lineIdx++]);
    body.scrollTop=body.scrollHeight;
  }
  setTimeout(function(){nextLine();},600);
})();

// ── HERO TYPEWRITER ──
(function(){
  var txt='Senior Full-Stack Engineer';
  var el=document.getElementById('hero-typed');
  if(!el) return;
  var i=0;
  function type(){if(i<txt.length){el.textContent+=txt[i++];setTimeout(type,45+(Math.random()*20-10));}}
  setTimeout(type,3200);
})();

// ── DIVIDER CODE STRINGS ──
(function(){
  var snippets=[
    'git log --oneline --graph -- hassan/career.rb',
    'SELECT * FROM experience WHERE impact = "HIGH" ORDER BY date DESC;',
    'kubectl get pods -n production | grep Running',
    'npm run build -- --project=featured && git push origin main',
    'curl -s https://hassan.dev/contact | jq ".email"'
  ];
  var ids=['divider1','divider2','divider3','divider4','divider5'];
  ids.forEach(function(id,i){
    var el=document.getElementById(id);
    if(el) typeDiv(el,snippets[i]);
  });
  function typeDiv(el,txt){
    var i=0;
    (function t(){if(i<txt.length){el.textContent+=txt[i++];setTimeout(t,22);}})();
  }
})();

// ── SCROLL REVEAL ──
(function(){
  var all=document.querySelectorAll('.reveal,.reveal-left');
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}
    });
  },{threshold:.08,rootMargin:'0px 0px -30px 0px'});
  all.forEach(function(el){io.observe(el);});
})();

// ── MOBILE NAV ──
(function(){
  var btn=document.getElementById('navToggle');
  var nav=document.getElementById('mobileNav');
  if(!btn||!nav) return;
  btn.addEventListener('click',function(){
    var o=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(o));
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    });
  });
})();

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){
    var t=document.querySelector(this.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});

// ── GLITCH ON INTERVAL ──
(function(){
  var el=document.querySelector('h1.glitch');
  if(!el) return;
  setInterval(function(){
    el.style.animation='none';
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        el.style.animation='glitch .35s steps(2) forwards';
      });
    });
  },6000);
})();
