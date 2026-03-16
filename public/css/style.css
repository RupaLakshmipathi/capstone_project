:root {
  --primary: #ff6f91;
  --secondary: #ffc2d1;
  --accent: #845ec2;
  --bg: #fff5f7;
  --text: #2e2033;
  --muted: #6d5a72;
  --surface: #ffffff;
  --danger: #cf3f73;
  --shadow: 0 20px 45px rgba(132, 94, 194, 0.12);
  --radius-lg: 24px;
  --radius-md: 16px;
  --radius-sm: 10px;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
  font-family: "Manrope", sans-serif;
  color: var(--text);
  background: var(--bg);
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.main-content {
  padding: 1rem 0 3.5rem;
}

.bg-orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(2px);
  z-index: -3;
}

.orb-a {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle at 20% 20%, rgba(255, 111, 145, 0.26), rgba(255, 194, 209, 0));
  top: -90px;
  left: -80px;
}

.orb-b {
  width: 320px;
  height: 320px;
  background: radial-gradient(circle at 20% 20%, rgba(132, 94, 194, 0.22), rgba(255, 111, 145, 0));
  right: -100px;
  top: 20%;
}

.bg-wave {
  position: fixed;
  inset: auto 0 0;
  height: 220px;
  background: linear-gradient(180deg, rgba(255, 194, 209, 0), rgba(255, 194, 209, 0.3));
  z-index: -2;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(8px);
  background: rgba(255, 245, 247, 0.88);
  border-bottom: 1px solid rgba(255, 111, 145, 0.2);
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 74px;
}

.brand {
  font-family: "Fraunces", serif;
  font-size: 1.65rem;
  color: var(--accent);
  letter-spacing: 0.3px;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.main-nav a {
  padding: 0.55rem 0.95rem;
  border-radius: 999px;
  font-weight: 600;
  color: var(--muted);
  transition: all 0.2s ease;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--text);
  background: rgba(255, 194, 209, 0.6);
}

.nav-cta {
  background: linear-gradient(120deg, var(--accent), var(--primary));
  color: #fff !important;
}

.nav-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 18px rgba(132, 94, 194, 0.25);
}

.nav-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 111, 145, 0.35);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  padding: 10px 9px;
  gap: 4px;
}

.nav-toggle span {
  display: block;
  height: 2px;
  border-radius: 999px;
  background: var(--text);
}

.flash {
  border-radius: var(--radius-sm);
  padding: 0.85rem 1rem;
  margin: 1rem 0;
  font-weight: 600;
  animation: slideDown 0.35s ease;
}

.flash-success {
  background: rgba(79, 187, 116, 0.18);
  border: 1px solid rgba(79, 187, 116, 0.45);
  color: #176b31;
}

.flash-error {
  background: rgba(207, 63, 115, 0.15);
  border: 1px solid rgba(207, 63, 115, 0.4);
  color: #8d1f4b;
}

.hero {
  background: linear-gradient(135deg, rgba(255, 111, 145, 0.12), rgba(132, 94, 194, 0.12));
  border: 1px solid rgba(255, 111, 145, 0.18);
  box-shadow: var(--shadow);
  border-radius: var(--radius-lg);
  padding: clamp(1.25rem, 3vw, 2.2rem);
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 1.5rem;
}

.hero-compact {
  grid-template-columns: 1fr;
  text-align: center;
}

.hero-copy h1,
.panel h1 {
  margin: 0.2rem 0 0.6rem;
  font-family: "Fraunces", serif;
  font-weight: 700;
  font-size: clamp(1.85rem, 3.5vw, 2.7rem);
  line-height: 1.08;
}

.hero-copy p {
  color: var(--muted);
  max-width: 60ch;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-size: 0.78rem;
  color: var(--accent);
  font-weight: 700;
}

.hero-actions,
.panel-actions,
.card-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.hero-card {
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(255, 194, 209, 0.75);
  border-radius: var(--radius-md);
  padding: 1.2rem;
}

.hero-card h3 {
  margin-top: 0;
  font-family: "Fraunces", serif;
}

.hero-card ul {
  margin: 0;
  padding-left: 1rem;
  color: var(--muted);
}

.hero-card li + li {
  margin-top: 0.5rem;
}

.feature-grid {
  margin-top: 1.3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.feature-card {
  background: var(--surface);
  border: 1px solid rgba(255, 111, 145, 0.15);
  border-radius: var(--radius-md);
  padding: 1.2rem;
  box-shadow: 0 15px 30px rgba(255, 111, 145, 0.1);
}

.feature-card h3 {
  margin-top: 0;
  font-family: "Fraunces", serif;
}

.feature-card p {
  margin-bottom: 0;
  color: var(--muted);
}

.panel {
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(255, 194, 209, 0.7);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  padding: clamp(1rem, 2.4vw, 1.8rem);
  margin-top: 1rem;
}

.narrow-panel {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.panel-head,
.section-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.9rem;
  flex-wrap: wrap;
}

.section-title-row h2,
.section-title-row h1 {
  margin: 0;
  font-family: "Fraunces", serif;
}

.chip {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(132, 94, 194, 0.12);
  color: var(--accent);
  font-weight: 700;
}

.empty-state {
  text-align: center;
  background: rgba(255, 194, 209, 0.2);
  border: 1px dashed rgba(255, 111, 145, 0.4);
  border-radius: var(--radius-md);
  padding: 1.4rem;
}

.empty-state h3 {
  margin-top: 0;
  font-family: "Fraunces", serif;
}

.auth-shell {
  min-height: calc(100vh - 220px);
  display: grid;
  place-items: center;
  padding: 1rem 0;
}

.auth-card {
  width: min(520px, 100%);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 194, 209, 0.75);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.auth-card h1 {
  margin-top: 0;
  font-family: "Fraunces", serif;
}

.auth-card p {
  color: var(--muted);
}

.stack-form {
  display: grid;
  gap: 0.65rem;
  margin-top: 1rem;
}

label {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text);
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid rgba(132, 94, 194, 0.22);
  border-radius: 12px;
  padding: 0.7rem 0.8rem;
  font: inherit;
  background: #fff;
  color: var(--text);
}

input:focus,
select:focus,
textarea:focus {
  outline: 2px solid rgba(255, 111, 145, 0.35);
  border-color: var(--primary);
}

textarea {
  resize: vertical;
}

.btn {
  border: none;
  border-radius: 12px;
  padding: 0.66rem 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: linear-gradient(120deg, var(--primary), #ff8aa6);
  color: #fff;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 24px rgba(255, 111, 145, 0.32);
}

.btn-ghost {
  background: rgba(132, 94, 194, 0.08);
  color: var(--accent);
}

.btn-ghost:hover {
  background: rgba(132, 94, 194, 0.14);
}

.btn-danger {
  background: rgba(207, 63, 115, 0.12);
  color: #972851;
}

.btn-danger:hover {
  background: rgba(207, 63, 115, 0.2);
}

.btn-small {
  padding: 0.48rem 0.75rem;
  border-radius: 10px;
  font-size: 0.86rem;
}

.btn-full {
  width: 100%;
  margin-top: 0.4rem;
}

.auth-note {
  margin-bottom: 0;
  text-align: center;
}

.auth-note a,
.text-link {
  color: var(--accent);
  font-weight: 700;
}

.filter-form {
  display: grid;
  grid-template-columns: 1.8fr 1fr auto auto;
  gap: 0.65rem;
  margin-top: 0.85rem;
}

.product-grid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.product-card {
  background: var(--surface);
  border: 1px solid rgba(255, 194, 209, 0.7);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 12px 24px rgba(255, 111, 145, 0.14);
}

.product-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background: rgba(255, 194, 209, 0.35);
}

.product-content {
  padding: 0.95rem;
  display: grid;
  gap: 0.3rem;
}

.product-content h3 {
  margin: 0;
  font-family: "Fraunces", serif;
  font-size: 1.2rem;
}

.price {
  color: var(--primary);
  font-weight: 800;
  font-size: 1.1rem;
  margin: 0.2rem 0;
}

.muted {
  color: var(--muted);
  margin: 0;
}

.line-clamp {
  margin: 0;
  color: var(--muted);
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-actions {
  padding: 0 0.95rem 0.95rem;
}

.inline-form {
  margin: 0;
}

.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem;
}

.detail-media img {
  width: 100%;
  border-radius: var(--radius-md);
  object-fit: cover;
  max-height: 460px;
}

.seller-box {
  margin-top: 1rem;
  border: 1px solid rgba(132, 94, 194, 0.25);
  border-radius: var(--radius-sm);
  padding: 0.85rem;
  background: rgba(132, 94, 194, 0.05);
}

.seller-box h3 {
  margin-top: 0;
}

.site-footer {
  border-top: 1px solid rgba(255, 111, 145, 0.2);
  background: rgba(255, 255, 255, 0.55);
}

.footer-content {
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
  color: var(--muted);
  font-size: 0.9rem;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 980px) {
  .hero,
  .product-detail {
    grid-template-columns: 1fr;
  }

  .product-grid,
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .filter-form {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 760px) {
  .nav-toggle {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
  }

  .main-nav {
    display: none;
    position: absolute;
    right: 1rem;
    top: 70px;
    flex-direction: column;
    align-items: stretch;
    min-width: 210px;
    background: #fff;
    border: 1px solid rgba(255, 194, 209, 0.95);
    border-radius: 14px;
    box-shadow: 0 10px 25px rgba(46, 32, 51, 0.12);
    padding: 0.55rem;
  }

  .main-nav.open {
    display: flex;
  }

  .main-nav a {
    border-radius: 9px;
  }

  .feature-grid,
  .product-grid,
  .filter-form {
    grid-template-columns: 1fr;
  }

  .footer-content {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0.7rem 0;
  }
}
