let currentIndex = 0;

const stage = document.getElementById("slideStage");
const nav = document.getElementById("slideNav");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentSlide = document.getElementById("currentSlide");
const totalSlides = document.getElementById("totalSlides");
const progressBar = document.getElementById("progressBar");
const deckTitleSide = document.getElementById("deckTitleSide");
const preparedBy = document.getElementById("preparedBy");
const reportDate = document.getElementById("reportDate");
const toggleSidebar = document.getElementById("toggleSidebar");
const soundToggle = document.getElementById("soundToggle");
const startScreen = document.getElementById("startScreen");
const startPresentation = document.getElementById("startPresentation");
const sidebar = document.getElementById("sidebar");
const visibleSlides = deckData.slides.filter(slide => !slide.hidden);

let audioContext = null;
let soundEnabled = localStorage.getItem("hod-bento-sound") !== "off";

function getAudioContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    audioContext = new AudioCtx();
  }
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function tone(ctx, startFreq, endFreq, duration, type = "sine", volume = 0.045, delay = 0) {
  const now = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(startFreq, now);
  osc.frequency.exponentialRampToValueAtTime(Math.max(30, endFreq), now + duration);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration + 0.03);
}

function noise(ctx, duration = 0.08, volume = 0.025, delay = 0, highpass = 500) {
  const sampleRate = ctx.sampleRate;
  const buffer = ctx.createBuffer(1, Math.max(1, Math.floor(sampleRate * duration)), sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  }
  const src = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  filter.type = "highpass";
  filter.frequency.value = highpass;
  gain.gain.value = volume;
  src.buffer = buffer;
  src.connect(filter).connect(gain).connect(ctx.destination);
  const now = ctx.currentTime + delay;
  src.start(now);
  src.stop(now + duration);
}

function playEffect(name) {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  switch (name) {
    case "menu":
      tone(ctx, 330, 250, 0.07, "triangle", 0.026);
      tone(ctx, 165, 135, 0.09, "sine", 0.016, 0.025);
      break;
    case "next":
      tone(ctx, 360, 520, 0.09, "triangle", 0.032);
      tone(ctx, 520, 690, 0.09, "triangle", 0.024, 0.07);
      noise(ctx, 0.045, 0.009, 0.025, 1100);
      break;
    case "prev":
      tone(ctx, 520, 350, 0.1, "triangle", 0.03);
      tone(ctx, 350, 245, 0.09, "triangle", 0.022, 0.07);
      break;
    case "bento1":
      noise(ctx, 0.22, 0.022, 0, 1600);
      tone(ctx, 145, 105, 0.15, "sine", 0.035, 0.02);
      break;
    case "bento2":
      tone(ctx, 392, 392, 0.11, "sine", 0.034);
      tone(ctx, 523, 523, 0.13, "sine", 0.03, 0.075);
      break;
    case "bento3":
      tone(ctx, 660, 860, 0.09, "triangle", 0.03);
      tone(ctx, 880, 1180, 0.15, "sine", 0.02, 0.07);
      break;
    case "bento4":
      noise(ctx, 0.045, 0.048, 0, 2200);
      noise(ctx, 0.035, 0.035, 0.055, 2800);
      tone(ctx, 210, 165, 0.08, "square", 0.012);
      break;
    case "bento5":
      tone(ctx, 520, 210, 0.26, "sine", 0.024);
      tone(ctx, 390, 160, 0.22, "triangle", 0.013, 0.045);
      break;
    case "bento6":
      tone(ctx, 660, 660, 0.12, "sine", 0.025);
      tone(ctx, 830, 830, 0.14, "sine", 0.024, 0.075);
      tone(ctx, 1046, 1046, 0.17, "sine", 0.02, 0.15);
      break;
    case "dessert":
      tone(ctx, 523, 523, 0.2, "sine", 0.028);
      tone(ctx, 659, 659, 0.23, "sine", 0.026, 0.09);
      tone(ctx, 784, 784, 0.32, "sine", 0.022, 0.18);
      break;
    case "toggle":
      tone(ctx, 440, 660, 0.12, "triangle", 0.028);
      break;
    case "intro":
      tone(ctx, 262, 262, 0.16, "sine", 0.026);
      tone(ctx, 330, 330, 0.18, "sine", 0.026, 0.10);
      tone(ctx, 392, 392, 0.20, "sine", 0.028, 0.20);
      tone(ctx, 523, 523, 0.30, "triangle", 0.032, 0.31);
      noise(ctx, 0.08, 0.014, 0.23, 1500);
      break;
    default:
      tone(ctx, 280, 340, 0.07, "triangle", 0.022);
  }
}

function updateSoundButton() {
  if (!soundToggle) return;
  soundToggle.textContent = soundEnabled ? "🔊 Sound On" : "🔇 Sound Off";
  soundToggle.setAttribute("aria-pressed", soundEnabled ? "true" : "false");
  soundToggle.classList.toggle("muted", !soundEnabled);
}

function navigationSound(defaultSound, targetIndex) {
  return visibleSlides[targetIndex]?.type === "closing" ? "dessert" : defaultSound;
}

const navIcons = ["🍱", "🥢", "🍗", "🥦", "🍜", "🥕", "🍙", "🥟", "🍓", "🍊", "🍰"];

const bentoShortcuts = [
  { number: "1", title: "Major Updates", sub: "Overview", target: 1, icon: "🍗", className: "food-teriyaki" },
  { number: "2", title: "Ongoing Projects", sub: "Connectivity & Systems", target: 4, icon: "🍙", className: "food-rice" },
  { number: "3", title: "System Health", sub: "Support & Security", target: 3, icon: "🥦", className: "food-greens" },
  { number: "4", title: "Completed Items", sub: "Ready to Serve", target: 2, icon: "🍤", className: "food-fried" },
  { number: "5", title: "Upcoming Plans", sub: "Maintenance", target: 5, icon: "🍜", className: "food-noodles" },
  { number: "6", title: "Support Required", sub: "Management Attention", target: 9, icon: "🍓", className: "food-fruit" }
];

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function badge(status, tone = "neutral") {
  return `<span class="badge ${escapeHtml(tone)}">${escapeHtml(status)}</span>`;
}

function renderList(items = []) {
  return `<ul class="clean-list">${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function foodIcon(text = "", index = 0) {
  const lower = String(text).toLowerCase();
  if (lower.includes("email") || lower.includes("spam")) return "🥬";
  if (lower.includes("internet") || lower.includes("connect")) return "🍜";
  if (lower.includes("antivirus") || lower.includes("security")) return "🥦";
  if (lower.includes("printer") || lower.includes("toner")) return "🍙";
  if (lower.includes("subscription") || lower.includes("renewal")) return "🍓";
  if (lower.includes("maintenance") || lower.includes("warranty")) return "🥕";
  if (lower.includes("system") || lower.includes("odoo") || lower.includes("pms")) return "🥟";
  if (lower.includes("completed") || lower.includes("upgrade")) return "🍗";
  const icons = ["🍗", "🍙", "🥦", "🍤", "🍜", "🍓", "🥕", "🥟"];
  return icons[index % icons.length];
}

function renderHeader(slide) {
  return `
    <header class="slide-header">
      <div class="paper-label">${escapeHtml(slide.label)}</div>
      <h2>${escapeHtml(slide.title)}</h2>
      <p>${escapeHtml(slide.subtitle)}</p>
    </header>`;
}

function renderHero(slide) {
  const meetingLine = (deckData.reportDate || "").replace("HOD Meeting: ", "");
  return `
    <article class="slide hero-bento">
      <div class="hero-title-row">
        <div>
          <p class="hero-kicker">Fresh ideas, always served!</p>
          <h2>IT UPDATE</h2>
          <h3>Head of Department Meeting</h3>
          <div class="meeting-date">${escapeHtml(meetingLine)}</div>
        </div>
        <div class="sticky-note">
          <span>Small<br>Updates</span>
          <strong>Big<br>Impact!</strong>
          <b>☺</b>
        </div>
      </div>

      <div class="bento-tray" aria-label="Interactive report menu">
        ${bentoShortcuts.map(item => `
          <button type="button" class="bento-cell ${item.className}" data-jump="${item.target}" data-sound="bento${item.number}" aria-label="Open ${escapeHtml(item.title)}">
            <div class="food-scene" aria-hidden="true">
              <span>${item.icon}</span><span>${item.icon}</span><span>${item.icon}</span>
            </div>
            <div class="bento-label">
              <i>${item.number}</i>
              <span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.sub)}</small></span>
            </div>
          </button>
        `).join("")}
      </div>

      <div class="hero-foot">
        <span>🍴 Click any bento compartment to jump to that section.</span>
        <span class="napkin-copy">GOOD FOOD · GOOD SYSTEM · SAME ENERGY ☺</span>
      </div>
    </article>`;
}

function renderSummary(slide) {
  return `
    <article class="slide wood-board-slide">
      ${renderHeader(slide)}
      <div class="red-tray summary-tray">
        ${(slide.stats || []).map((stat, index) => `
          <section class="stat-food-card tone-${escapeHtml(stat.tone || "neutral")}">
            <div class="stat-food">${foodIcon(stat.label, index)}</div>
            <strong>${escapeHtml(stat.value)}</strong>
            <span>${escapeHtml(stat.label)}</span>
          </section>
        `).join("")}
      </div>
      <div class="recipe-card">
        <div class="recipe-pin">📌</div>
        <h3>Today’s Specials</h3>
        ${renderList(slide.highlights)}
      </div>
    </article>`;
}

function renderCards(slide) {
  return `
    <article class="slide wood-board-slide">
      ${renderHeader(slide)}
      <div class="food-card-grid ${slide.cards?.length === 1 ? "single" : ""}">
        ${(slide.cards || []).map((card, index) => `
          <section class="food-card">
            <div class="food-card-top">
              <div class="food-icon-bowl">${foodIcon(card.title, index)}</div>
              <div class="food-card-title">
                <h3>${escapeHtml(card.title)}</h3>
                ${badge(card.status, card.tone)}
              </div>
            </div>
            <div class="food-card-body">
              ${renderList(card.details)}
            </div>
            <div class="card-corner">✦</div>
          </section>
        `).join("")}
      </div>
    </article>`;
}

function renderTable(slide) {
  return `
    <article class="slide wood-board-slide">
      ${renderHeader(slide)}
      <div class="menu-table-wrap">
        <div class="menu-table-title">🍽️ Serving List</div>
        <div class="table-scroll">
          <table>
            <thead><tr>${(slide.columns || []).map(col => `<th>${escapeHtml(col)}</th>`).join("")}</tr></thead>
            <tbody>
              ${(slide.rows || []).map((row, rowIndex) => `
                <tr>
                  ${row.map((cell, cellIndex) => `<td>${cellIndex === 0 ? `<span class="row-food">${foodIcon(cell, rowIndex)}</span>` : ""}${escapeHtml(cell)}</td>`).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </article>`;
}

function renderTimeline(slide) {
  return `
    <article class="slide wood-board-slide">
      ${renderHeader(slide)}
      <div class="serving-line">
        ${(slide.items || []).map((item, index) => `
          <section class="serving-step">
            <div class="serving-food">${foodIcon(item.title, index)}</div>
            <div class="serving-number">${index + 1}</div>
            <div class="serving-copy">
              <div class="timeline-title-row">
                <h3>${escapeHtml(item.title)}</h3>
                ${badge(item.tag, "info")}
              </div>
              <p>${escapeHtml(item.details)}</p>
            </div>
          </section>
        `).join("")}
      </div>
    </article>`;
}

function renderNextActions(slide) {
  return `
    <article class="slide wood-board-slide">
      ${renderHeader(slide)}
      <div class="ticket-grid">
        ${(slide.actions || []).map((action, index) => `
          <section class="order-ticket">
            <div class="ticket-number">${String(index + 1).padStart(2, "0")}</div>
            <div class="ticket-content">
              <h3>${escapeHtml(action.title)}</h3>
              <div class="ticket-meta">
                <span>👨‍🍳 <strong>Owner</strong><br>${escapeHtml(action.owner)}</span>
                <span>⏰ <strong>Target</strong><br>${escapeHtml(action.due)}</span>
              </div>
            </div>
            ${badge(action.status, action.status === "Pending" ? "warning" : action.status === "Monitoring" ? "info" : action.status === "In Progress" ? "warning" : "success")}
          </section>
        `).join("")}
      </div>
    </article>`;
}

function renderClosing(slide) {
  return `
    <article class="slide closing-food-slide">
      <div class="dessert-plate">🍰</div>
      <p class="hero-kicker">Dessert is served</p>
      <h2>${escapeHtml(slide.title)}</h2>
      <p class="closing-subtitle">${escapeHtml(slide.subtitle)}</p>
      <div class="closing-note">
        <h3>Kitchen Notes</h3>
        ${renderList(slide.notes)}
      </div>
      <div class="thank-you-sticker">Thank you! ☺</div>
    </article>`;
}

function renderSlide() {
  const slide = visibleSlides[currentIndex];
  const renderers = {
    hero: renderHero,
    summary: renderSummary,
    cards: renderCards,
    table: renderTable,
    timeline: renderTimeline,
    nextActions: renderNextActions,
    closing: renderClosing
  };

  stage.innerHTML = (renderers[slide.type] || renderCards)(slide);
  window.scrollTo({ top: 0, behavior: "smooth" });
  stage.scrollTop = 0;
  currentSlide.textContent = String(currentIndex + 1);
  totalSlides.textContent = String(visibleSlides.length);
  progressBar.style.width = `${((currentIndex + 1) / visibleSlides.length) * 100}%`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === visibleSlides.length - 1;

  Array.from(nav.children).forEach((button, index) => {
    button.classList.toggle("active", index === currentIndex);
  });
}

function buildNav() {
  deckTitleSide.textContent = deckData.title;
  preparedBy.textContent = deckData.preparedBy;
  reportDate.textContent = deckData.reportDate;
  totalSlides.textContent = String(visibleSlides.length);

  nav.innerHTML = visibleSlides.map((slide, index) => `
    <button type="button" data-slide="${index}">
      <span class="nav-food">${navIcons[index % navIcons.length]}</span>
      <span class="nav-copy"><small>Dish ${String(index + 1).padStart(2, "0")}</small>${escapeHtml(slide.label || slide.title)}</span>
    </button>`).join("");

  nav.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-slide]");
    if (!button) return;
    const target = Number(button.dataset.slide);
    playEffect(navigationSound("menu", target));
    currentIndex = target;
    renderSlide();
  });
}

stage.addEventListener("click", (event) => {
  const jump = event.target.closest("[data-jump]");
  if (!jump) return;
  const target = Number(jump.dataset.jump);
  if (!Number.isFinite(target) || target < 0 || target >= visibleSlides.length) return;
  playEffect(jump.dataset.sound || navigationSound("menu", target));
  currentIndex = target;
  renderSlide();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    const target = currentIndex - 1;
    playEffect(navigationSound("prev", target));
    currentIndex = target;
  }
  renderSlide();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < visibleSlides.length - 1) {
    const target = currentIndex + 1;
    playEffect(navigationSound("next", target));
    currentIndex = target;
  }
  renderSlide();
});

document.addEventListener("keydown", (event) => {
  if (["ArrowRight", "PageDown", " "].includes(event.key)) {
    if (currentIndex < visibleSlides.length - 1) {
      const target = currentIndex + 1;
      playEffect(navigationSound("next", target));
      currentIndex = target;
    }
    renderSlide();
  }
  if (["ArrowLeft", "PageUp"].includes(event.key)) {
    if (currentIndex > 0) {
      const target = currentIndex - 1;
      playEffect(navigationSound("prev", target));
      currentIndex = target;
    }
    renderSlide();
  }
  if (event.key === "Home") {
    playEffect("menu");
    currentIndex = 0;
    renderSlide();
  }
});

toggleSidebar.addEventListener("click", () => {
  playEffect("menu");
  sidebar.classList.toggle("hidden");
});

soundToggle?.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem("hod-bento-sound", soundEnabled ? "on" : "off");
  updateSoundButton();
  if (soundEnabled) playEffect("toggle");
});

startPresentation?.addEventListener("click", () => {
  getAudioContext();
  playEffect("intro");
  document.body.classList.add("presentation-started");
  startScreen?.classList.add("is-leaving");

  window.setTimeout(() => {
    startScreen?.remove();
    document.body.classList.remove("presentation-locked");
  }, 850);
});

updateSoundButton();
buildNav();
renderSlide();
