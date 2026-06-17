(function(){
  const $ = (s,root=document) => root.querySelector(s);
  const $$ = (s,root=document) => Array.from(root.querySelectorAll(s));

  const REPO = '/Camp21-Synergising-Literacies-2026';
  const isPage = location.pathname.includes('/pages/');

  function link(href){
    // From pages/ → links are relative (same folder)
    // From root → need pages/ prefix
    if(isPage) return href.replace('pages/','');
    return href;
  }

  // ── Experience Grid ──────────────────────────────────────────────────
  function renderExperiences(){
    const grid = $('[data-experiences]');
    if(!grid || !window.CAMP21) return;
    grid.innerHTML = CAMP21.experiences.map((e,i) => `
      <a class="exp-card${i>3?' small':''}" href="${link(e.link)}">
        <img src="${e.img}" alt="${e.title}" loading="lazy"
             onerror="this.style.background='#1a2744';this.removeAttribute('src')">
        <div class="exp-content">
          <div class="exp-icon-img">
            <img src="${e.icon}" alt="" width="32" height="32"
                 onerror="this.style.display='none'">
          </div>
          <h3>${e.title}</h3>
          <p>${e.desc}</p>
        </div>
        <div class="arrow">→</div>
      </a>`).join('');
  }

  // ── Live Updates (activity-updates.html ONLY) ────────────────────────
  function renderLiveUpdates(){
    const box = $('[data-live-updates]');
    if(!box || !window.CAMP21) return;
    // Only render if on updates page or explicitly allowed
    const onUpdatesPage = location.pathname.includes('activity-updates');
    if(!onUpdatesPage) {
      box.closest('.live-card')?.remove();
      return;
    }
    box.innerHTML = CAMP21.updates.map(u => `
      <div class="update-row">
        <img src="${u.img}" alt="${u.title}" loading="lazy"
             onerror="this.style.background='#2d4a8a';this.removeAttribute('src')">
        <div>
          <b>${u.title}</b>
          <span>${u.detail}</span>
          <span>${u.time}</span>
        </div>
      </div>`).join('');
  }

  // ── Render functions ──────────────────────────────────────────────────
  function renderGroups(){
    const tbody = $('[data-groups]');
    if(!tbody || !window.CAMP21) return;
    tbody.innerHTML = CAMP21.groups.map(g => `
      <tr>
        <td><strong>${g.name}</strong></td>
        <td>${g.participants}</td>
        <td>${g.trainers}</td>
        <td><span class="status ${g.status==='In Progress'?'progress':g.status==='Pending'?'pending':'done'}">${g.status}</span></td>
      </tr>`).join('');
  }

  function renderTrainers(){
    const tbody = $('[data-trainers]');
    if(!tbody || !window.CAMP21) return;
    tbody.innerHTML = CAMP21.trainers.map(t => `
      <tr><td><strong>${t[0]}</strong></td><td>${t[1]}</td><td>${t[2]}</td></tr>`).join('');
  }

  function renderPhases(){
    const wrap = $('[data-phases]');
    if(!wrap || !window.CAMP21) return;
    wrap.innerHTML = CAMP21.phases.map((p,i) => `
      <div class="step">
        <div class="step-icon s${i+1}">
          <img src="${p.img}" alt="${p.title}" width="32" height="32"
               onerror="this.style.display='none'">
        </div>
        <b>${p.no} · ${p.title}</b>
        <span>${p.desc}</span>
      </div>`).join('');
  }

  // ── Mobile nav ────────────────────────────────────────────────────────
  function mobileNav(){
    const btn = $('.menu-btn'), links = $('.nav-links');
    if(!btn || !links) return;
    btn.addEventListener('click', () => {
      const open = links.classList.toggle('nav-open');
      if(open){
        Object.assign(links.style, {
          display:'flex', position:'absolute', left:'12px', right:'12px',
          top:'70px', background:'rgba(6,26,61,.98)', padding:'14px',
          borderRadius:'18px', flexDirection:'column', alignItems:'stretch',
          zIndex:'999', gap:'4px'
        });
      } else {
        links.style.display = '';
      }
    });
  }

  // ── Active nav link ───────────────────────────────────────────────────
  function setActive(){
    const cur = location.pathname.split('/').pop() || 'index.html';
    $$('a[href]').forEach(a => {
      const h = a.getAttribute('href').split('/').pop();
      if(h === cur) a.classList.add('active');
    });
  }

  // ── Tab switcher (programme page) ─────────────────────────────────────
  window.showDay = function(id, btn){
    $$('.day-panel').forEach(p => p.classList.remove('active'));
    $$('.day-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(id)?.classList.add('active');
    btn?.classList.add('active');
  };

  // ── Init ──────────────────────────────────────────────────────────────
  renderExperiences();
  renderLiveUpdates();
  renderGroups();
  renderTrainers();
  renderPhases();
  mobileNav();
  setActive();
})();
