// ==========================================================================
// Agil Azizov — Portfolio interactions
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Nav scroll state ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = ['about','experience','skills','projects','education','contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const navLinks = document.querySelectorAll('[data-nav]');

  const setActive = (id) => {
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
    });
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  sections.forEach(sec => sectionObserver.observe(sec));

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Terminal typing effect ---------- */
  const term = document.getElementById('terminalBody');
  const lines = [
    { type: 'cmd', text: 'curl https://api.agil.dev/v1/profile' },
    { type: 'out', text: '{' },
    { type: 'out', text: '  "name": "Agil Azizov",', indent: true },
    { type: 'out', text: '  "role": "Backend Engineer",', indent: true },
    { type: 'out', text: '  "stack": ["Java", "Spring Boot", "MySQL"],', indent: true },
    { type: 'out', text: '  "location": "Baku, AZ",', indent: true },
    { type: 'out', text: '  "status": "200 OK"', indent: true },
    { type: 'out', text: '}' },
    { type: 'cmd', text: 'echo $STATUS' },
    { type: 'out', text: 'ready to ship →' },
  ];

  function highlight(text){
    return text
      .replace(/"([a-zA-Z_]+)":/g, '<span class="term-key">"$1"</span>:')
      .replace(/: "([^"]*)"/g, ': <span class="term-str">"$1"</span>');
  }

  async function typeTerminal(){
    if (!term) return;
    for (const line of lines) {
      const row = document.createElement('div');
      row.className = 'term-line';
      term.appendChild(row);

      if (line.type === 'cmd') {
        const prompt = document.createElement('span');
        prompt.className = 'prompt';
        prompt.textContent = '❯ ';
        row.appendChild(prompt);
        const textNode = document.createElement('span');
        textNode.className = 'path';
        row.appendChild(textNode);

        for (const ch of line.text) {
          textNode.textContent += ch;
          await sleep(18);
        }
        await sleep(220);
      } else {
        row.innerHTML = highlight(line.text);
        row.classList.add('term-out');
        await sleep(70);
      }
      term.scrollTop = term.scrollHeight;
    }
    const caret = document.createElement('span');
    caret.className = 'term-caret';
    term.appendChild(caret);
  }

  function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeTerminal();
        heroObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  if (term) heroObserver.observe(term.closest('.terminal'));

  /* ---------- Cursor glow ---------- */
  const glow = document.getElementById('cursorGlow');
  if (glow && window.matchMedia('(pointer:fine)').matches) {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let gx = mx, gy = my;
    window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
    function animateGlow(){
      gx += (mx - gx) * 0.12;
      gy += (my - gy) * 0.12;
      glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%,-50%)`;
      requestAnimationFrame(animateGlow);
    }
    animateGlow();
  } else if (glow) {
    glow.style.display = 'none';
  }

  /* ---------- Magnetic buttons ---------- */
  if (window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0,0)';
      });
    });
  }

  /* ---------- Copy email ---------- */
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = 'agilazizovf@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const original = copyBtn.textContent;
        copyBtn.textContent = 'Copied to clipboard ✓';
        setTimeout(() => { copyBtn.textContent = original; }, 1800);
      } catch {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  /* ---------- Smooth anchor scroll offset for fixed nav ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

});