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
const sidebar = document.getElementById("sidebar");
const visibleSlides = deckData.slides.filter(slide => !slide.hidden);

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
          <button type="button" class="bento-cell ${item.className}" data-jump="${item.target}" aria-label="Open ${escapeHtml(item.title)}">
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
    currentIndex = Number(button.dataset.slide);
    renderSlide();
  });
}

stage.addEventListener("click", (event) => {
  const jump = event.target.closest("[data-jump]");
  if (!jump) return;
  const target = Number(jump.dataset.jump);
  if (!Number.isFinite(target) || target < 0 || target >= visibleSlides.length) return;
  currentIndex = target;
  renderSlide();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) currentIndex -= 1;
  renderSlide();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < visibleSlides.length - 1) currentIndex += 1;
  renderSlide();
});

document.addEventListener("keydown", (event) => {
  if (["ArrowRight", "PageDown", " "].includes(event.key)) {
    if (currentIndex < visibleSlides.length - 1) currentIndex += 1;
    renderSlide();
  }
  if (["ArrowLeft", "PageUp"].includes(event.key)) {
    if (currentIndex > 0) currentIndex -= 1;
    renderSlide();
  }
  if (event.key === "Home") {
    currentIndex = 0;
    renderSlide();
  }
});

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

buildNav();
renderSlide();
