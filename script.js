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
  const sectionIds = ['about','experience','skills','projects','education','contact'];
  const sections = sectionIds
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

  /* ---------- Smooth scroll to a section (shared by nav + terminal) ---------- */
  function scrollToSection(id) {
    const target = document.getElementById(id);
    if (!target) return false;
    const y = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: 'smooth' });
    return true;
  }

  /* ---------- Terminal typing effect ---------- */
  const term = document.getElementById('terminalBody');
  const introLines = [
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

  function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

  function appendRow(html, extraClass) {
    const row = document.createElement('div');
    row.className = 'term-line' + (extraClass ? ' ' + extraClass : '');
    row.innerHTML = html;
    term.appendChild(row);
    term.scrollTop = term.scrollHeight;
    return row;
  }

  async function typeTerminal(){
    if (!term) return;
    for (const line of introLines) {
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
    appendRow('<span class="term-hint">type &#39;help&#39; for commands, e.g. ls, /projects</span>', 'term-hint');
    const input = document.getElementById('terminalInput');
    if (input) input.focus();
  }

  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeTerminal();
        heroObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  if (term) heroObserver.observe(term.closest('.terminal'));

  /* ---------- Interactive terminal input ---------- */
  const terminalInput = document.getElementById('terminalInput');
  const routes = {
    home: 'home', about: 'about', experience: 'experience',
    skills: 'skills', projects: 'projects', education: 'education', contact: 'contact'
  };

  const commandHelp = [
    'available commands:',
    '  ls                 list sections',
    '  cd &lt;section&gt;       jump to a section (or type /section)',
    '  whoami              quick summary',
    '  open github|linkedin|youtube|email   open a link',
    '  clear                clear the terminal',
    '  help                 show this message',
  ].join('\n');

  function runCommand(raw) {
    const cmd = raw.trim();
    if (!cmd) return;

    appendRow(`<span class="prompt">❯</span> <span class="path">${escapeHtml(cmd)}</span>`);

    const lower = cmd.toLowerCase();
    const slashMatch = lower.match(/^\/(\w+)$/);
    const cdMatch = lower.match(/^cd\s+\/?(\w+)$/);
    const sectionArg = slashMatch ? slashMatch[1] : (cdMatch ? cdMatch[1] : null);

    if (lower === 'help' || lower === '--help' || lower === 'man') {
      appendRow(`<pre class="term-out" style="margin:0;font-family:inherit;">${commandHelp}</pre>`, 'term-out');
    } else if (lower === 'ls' || lower === 'ls -la' || lower === 'dir') {
      appendRow(`<span class="term-out">${Object.keys(routes).join('   ')}</span>`, 'term-out');
    } else if (lower === 'clear' || lower === 'cls') {
      term.innerHTML = '';
    } else if (lower === 'whoami') {
      appendRow('<span class="term-out">Agil Azizov — backend engineer, Baku, Azerbaijan. Java / Spring Boot.</span>', 'term-out');
    } else if (lower.startsWith('open ')) {
      const target = lower.replace('open ', '').trim();
      const links = {
        github: 'https://github.com/agilazizovf',
        linkedin: 'https://www.linkedin.com/in/agil-azizov/',
        youtube: 'https://www.youtube.com/@agilazizovf',
        email: 'mailto:agilazizovf@gmail.com',
      };
      if (links[target]) {
        appendRow(`<span class="term-out">opening ${target}...</span>`, 'term-out');
        window.open(links[target], '_blank');
      } else {
        appendRow(`<span class="term-error">open: unknown target "${escapeHtml(target)}" — try github, linkedin, youtube, email</span>`);
      }
    } else if (sectionArg) {
      if (routes[sectionArg]) {
        appendRow(`<span class="term-out">navigating to /${sectionArg} →</span>`, 'term-out');
        scrollToSection(routes[sectionArg]);
      } else {
        appendRow(`<span class="term-error">cd: no such section "${escapeHtml(sectionArg)}" — type "ls" to list sections</span>`);
      }
    } else {
      appendRow(`<span class="term-error">command not found: ${escapeHtml(cmd)} — type "help"</span>`);
    }

    term.scrollTop = term.scrollHeight;
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = terminalInput.value;
        terminalInput.value = '';
        runCommand(val);
      }
    });
    // Clicking anywhere in the terminal focuses the input, like a real shell
    const terminalEl = terminalInput.closest('.terminal');
    if (terminalEl) {
      terminalEl.addEventListener('click', () => terminalInput.focus());
    }
  }

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
      e.preventDefault();
      scrollToSection(id);
    });
  });

});