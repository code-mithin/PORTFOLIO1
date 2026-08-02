'use strict';

/* ============================================================================
   PORTFOLIO SCRIPT
   ----------------------------------------------------------------------------
   HOW TO CUSTOMIZE THIS SITE
   ----------------------------------------------------------------------------
   Almost everything you see on the page — your name, bio, skills, projects,
   certificates, timeline, etc. — comes from the single `profile` object
   below. Edit the values in this object and the whole site updates
   automatically. You should NOT need to touch index.html to change your
   personal details.

   File layout:
     1. PROFILE DATA           <- edit this to make the site yours
     2. UTILITY HELPERS        <- small reusable functions
     3. RENDER FUNCTIONS       <- turn `profile` data into HTML
     4. FEATURE / UI LOGIC     <- dark mode, animations, filters, forms, etc.
     5. BOOTSTRAP              <- runs everything once the page loads
   ============================================================================ */


/* ============================================================================
   1. PROFILE DATA
   ----------------------------------------------------------------------------
   Everything below is placeholder / example content so the site looks
   complete out of the box. Replace it with your real information.
   ============================================================================ */
const profile = {

  // ---- Identity -------------------------------------------------------
  name: 'MITHINKUMAR R',
  role: 'Computer Science Student',
  photo: 'assets/images/My-photo.jpg',      // swap for a real photo (jpg/png/webp)
  tagline: "I build clean, functional web experiences and enjoy turning ideas into real, working products — one project at a time.",

  // Roles cycled through by the typing animation in the hero section
  typingRoles: [
    'Computer Science Student',
    'UI/UX Designer',
    'Frontend Developer',
    'Problem Solver'
  ],

  // ---- About ------------------------------------------------------------
  about: {
    paragraphs: [
      "I'm a passionate Computer Science student who enjoys turning ideas into real, working software. My interests span Python, web development, UI/UX design, databases and problem solving — with a growing curiosity about AI and cyber security.",
      "I like building real-world projects rather than just following tutorials — it's how I've learned the most. Whether it's designing a clean interface or wiring up a database behind the scenes, I enjoy the full journey from idea to finished product.",
      "I'm a strong believer in continuous learning. Technology moves fast, and I try to move with it — picking up new tools, frameworks and concepts as I go."
    ],
    goal: 'My goal is to become a highly skilled software developer, capable of building products that are both technically solid and genuinely useful.',
    interests: ['Python', 'Web Development', 'UI/UX', 'Databases', 'Problem Solving', 'Artificial Intelligence', 'Cyber Security', 'Learning New Tech']
  },

  // Small stat cards shown under the About section
  stats: [
    { label: 'Projects Built', value: 2, suffix: '+' },
    { label: 'Certifications', value: 5, suffix: '+' },
    { label: 'Hackathons', value: 1, },
    { label: 'Repositories', value: 6, suffix: '+' }
  ],

  // ---- Skills -------------------------------------------------------------
  // Grouped into tabs. `level` is a percentage (0-100) used for the bar fill.
  skills: {
    categories: [
      {
        id: 'languages',
        label: 'Languages & Frameworks',
        items: [
          { name: 'Python', level: 40, icon: 'fa-brands fa-python' },
          { name: 'C', level: 75, icon: 'fa-solid fa-code' },
          { name: 'HTML5', level: 90, icon: 'fa-brands fa-html5' },
          { name: 'CSS3', level: 75, icon: 'fa-brands fa-css3-alt' },
          { name: 'JavaScript', level: 80, icon: 'fa-brands fa-js' },
          { name: 'TallyERP9', level: 70, icon: 'fa-solid fa-tally' }
        ]
      },
      {
        id: 'tools',
        label: 'Tools & Platforms',
        items: [
          { name: 'SQLite', level: 80, icon: 'fa-solid fa-database' },
          { name: 'MongoDB', level: 50, icon: 'fa-solid fa-leaf' },
          { name: 'Git', level: 90, icon: 'fa-brands fa-git-alt' },
          { name: 'GitHub', level: 95, icon: 'fa-brands fa-github' },
          { name: 'VS Code', level: 90, icon: 'fa-solid fa-laptop-code' },
          { name: 'Figma', level: 80, icon: 'fa-brands fa-figma' }
        ]
      },
      {
        id: 'core',
        label: 'Core Competencies',
        items: [
          { name: 'UI/UX Design', level: 90, icon: 'fa-solid fa-pen-ruler' },
          { name: 'Database Design', level: 60, icon: 'fa-solid fa-sitemap' },
          { name: 'Problem Solving', level: 68, icon: 'fa-solid fa-lightbulb' },
          { name: 'Responsive Design', level: 81, icon: 'fa-solid fa-mobile-screen-button' }
        ]
      }
    ]
  },

  // ---- Education (rendered as a vertical timeline, most recent first) ----
  education: [
    { year: '2026 — 2029', degree: 'B.sc in Computer Science', institution: 'KPR college of arts and science / Bharathiar University', score: 'CGPA: not yet available / 10', icon: 'fa-solid fa-graduation-cap' },
    { year: '2025 — 2026', degree: '12th Standard (Senior Secondary)', institution: 'Holy rosary school', score: '79%', icon: 'fa-solid fa-school' },
    { year: '2023 — 2024', degree: '10th Standard (Secondary)', institution: 'Holy rosary school', score: '69%', icon: 'fa-solid fa-book' }
  ],

  // ---- Certificates --------------------------------------------------------
  certificates: [
    { title: 'Computer Fundamentals with MS Office', issuer: 'Local Institute', date: '2022', image: 'assets/certificates/Office.jpg', link: 'assets/certificates/Office.jpg' },
    { title: 'TALLY ERP9', issuer: 'Local Institute', date: '2024', image: 'assets/certificates/Tally erp9.jpg', link: 'assets/certificates/Tally erp9.jpg' },
    { title: 'DATABASE fundamentals', issuer: 'MongoDB', date: '2026', image: 'assets/certificates/MongoDB.jpg', link: 'assets/certificates/MongoDB.jpg' }
  ],

  // ---- Projects --------------------------------------------------------------
  // `category` powers the filter buttons. `details` powers the "Details" modal
  // and maps directly to the brief: Problem, Solution, Features, Database, UI,
  // Future Improvements, Technologies, Challenges, Lessons Learned.
  projects: [
    {
      id: 'vehicle-rental',
      title: 'Vehicle Rental System',
      description: 'A full-stack web app for browsing, booking and managing vehicle rentals with an admin dashboard.',
      image: 'assets/projects/vehicle-rental.svg',
      category: 'fullstack',
      categoryLabel: 'Full Stack',
      tech: ['Python', 'Flask', 'SQLite', 'HTML/CSS', 'JavaScript'],
      github: '#',
      demo: '#',
      status: 'on going',
      details: {
        problem: 'Small vehicle rental businesses often manage bookings manually with registers or spreadsheets, leading to double bookings and lost records.',
        solution: 'A web application where customers can browse available vehicles, check pricing, and place rental requests, while admins manage the fleet and bookings from a dashboard.',
        features: [
          'Browse and filter available vehicles by type and price',
          'Booking form with date range and availability check',
          'Admin dashboard to add, update and remove vehicles',
          'User authentication for customers and admins',
          'Booking history and status tracking'
        ],
        database: 'SQLite with tables for users, vehicles and bookings, related through foreign keys to keep booking history and availability in sync.',
        ui: 'Clean, card-based layout for vehicle listings with a simple multi-step booking flow, designed to work well on both desktop and mobile.',
        futureImprovements: [
          'Add online payment integration',
          'Send email/SMS booking confirmations',
          'Add a review and rating system for vehicles'
        ],
        technologies: ['Python', 'Flask', 'SQLite', 'HTML5', 'CSS3', 'JavaScript'],
        challenges: [
          'Preventing double-booking of the same vehicle for overlapping dates',
          'Designing a database schema that stayed simple but still handled edge cases'
        ],
        lessonsLearned: [
          'How to structure a Flask app with clean separation of routes, templates and models',
          'The importance of validating data on both the client and server side'
        ]
      }
    },
    {
      id: 'attendance-system',
      title: 'Attendance Management System',
      description: 'A web-based system to record, track and report student or employee attendance, replacing manual registers.',
      image: 'assets/projects/attendance-system.svg',
      category: 'python',
      categoryLabel: 'Python',
      tech: ['Python', 'Flask', 'MongoDB'],
      github: '#',
      demo: '#',
      status: 'on going',
      details: {
        problem: 'Manual attendance tracking is slow, error-prone, and makes it hard to generate reports over time.',
        solution: "A digital attendance system where an admin can mark attendance per class or session, and generate summary reports automatically.",
        features: [
          'Mark attendance as present, absent or late',
          'Search and filter attendance by date or student',
          'Auto-generated attendance percentage per student',
          'Simple, distraction-free admin interface'
        ],
        database: 'MongoDB collections for students and attendance records, chosen for its flexible schema while the feature set was still evolving.',
        ui: "A minimal, table-based interface with quick-select controls, built so marking a full class's attendance takes only a few clicks.",
        futureImprovements: [
          'Add QR-code or biometric based attendance',
          'Export reports to PDF / Excel',
          'Add notifications for low attendance'
        ],
        technologies: ['Python', 'Flask', 'MongoDB', 'HTML5', 'CSS3', 'JavaScript'],
        challenges: [
          'Structuring attendance data so daily records stayed fast to query as the dataset grew',
          'Designing an interface fast enough for real, everyday classroom use'
        ],
        lessonsLearned: [
          'Working with NoSQL data modeling for the first time',
          'How much good UX matters for a tool people rely on every single day'
        ]
      }
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'This very portfolio — a fully responsive personal site built from scratch with vanilla HTML, CSS and JavaScript.',
      image: 'assets/projects/portfolio-website.svg',
      category: 'frontend',
      categoryLabel: 'Frontend',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: '#',
      demo: '#',
      status: 'completed',
      details: {
        problem: 'I needed a single place to showcase my projects, skills and journey — one that felt custom rather than templated.',
        solution: 'A fully responsive, data-driven personal portfolio built without any frameworks, with dark mode, scroll animations and an easy-to-edit content structure.',
        features: [
          'Dark mode with saved preference',
          'Scroll-based reveal animations',
          'Filterable project grid with a details modal',
          'Every section driven by a single JavaScript data object'
        ],
        database: 'Not applicable — this is a static front-end project with no backend or database.',
        ui: 'A light, glassmorphism-influenced design in blue and white, with a subtle developer-themed accent (code-comment style section labels).',
        futureImprovements: [
          'Connect the contact form to a real email service',
          'Add a blog / write-ups section',
          'Add multi-language support'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Font Awesome'],
        challenges: [
          'Keeping the CSS organized across a dozen-plus sections without it turning into spaghetti',
          'Making the animations feel smooth without hurting performance'
        ],
        lessonsLearned: [
          'How far vanilla JavaScript can go without a framework',
          'How much a small, consistent design system speeds up building new sections'
        ]
      }
    }
  ],

  // ---- Experience (no formal job yet — framed as real, hands-on learning) --
  experience: [
    { title: 'Self-Directed Learning', period: '2025 — Present', description: 'Continuously learning through official documentation, structured courses and hands-on projects, treating every new concept as something to build with, not just read about.', icon: 'fa-solid fa-book-open' },
    { title: 'Personal Projects', period: '2026 — Present', description: 'Designed and built multiple full-stack projects end-to-end — from database design to UI — to apply classroom concepts to real problems.', icon: 'fa-solid fa-laptop-code' },
    { title: 'Hackathon Participation', period: '2026 — Present', description: 'Collaborated in team environments under time pressure, contributing to UI/UX and frontend implementation across multiple hackathons.', icon: 'fa-solid fa-people-group' },
    { title: 'Open Source & Community Learning', period: '2026 — Present', description: 'Actively exploring GitHub repositories, contributing small fixes, and learning how real-world codebases are structured.', icon: 'fa-brands fa-github' }
  ],

  // ---- Achievements ---------------------------------------------------------
  achievementsStats: [
    { label: 'Certifications Completed', value: 2, suffix: '+' },
    { label: 'GitHub Contributions', value: 45, suffix: '+' },
    { label: 'Projects Built', value: 2, suffix: '+' },
    { label: 'Hackathons Attended', value: 1, suffix: '+' }
  ],
  achievements: [
    { title: 'Completed Certifications', description: 'Finished multiple self-placed courses in various technologies.', icon: 'fa-solid fa-certificate' },
    { title: 'GitHub Contributions', description: 'Maintained an active GitHub profile with consistent commits across personal projects.', icon: 'fa-brands fa-github' },
    { title: 'Project Portfolio', description: 'Built and deployed multiple full-stack projects from concept to completion.', icon: 'fa-solid fa-diagram-project' },
    { title: 'Learning Journey', description: 'Consistently expanded my skill set — from core programming to databases to design.', icon: 'fa-solid fa-seedling' },
    { title: 'College Participation', description: 'Took part in coding clubs, workshops and technical events at the college level.', icon: 'fa-solid fa-people-group' },
    { title: 'Self-Motivated Growth', description: 'Built a habit of learning something new and shipping something small every month.', icon: 'fa-solid fa-rocket' }
  ],

  // ---- Hackathons -------------------------------------------------------------
  hackathons: [
    { name: 'College-Level Hackathon', date: 'not announced yet', role: 'Frontend Developer/UI and UX designer', description: 'Date is not announced yet. But i Built the frontend for a team project within a tight deadline, translating wireframes into a working, responsive interface while collaborating closely with backend teammates.', tech: ['HTML', 'CSS', 'JavaScript'] }
  ],

  // ---- Timeline: personal learning journey (isFuture = dashed / upcoming) ---
  timeline: [
    { year: '2024', title: 'Started Programming', description: 'Wrote my first lines of code and got hooked on how satisfying it is to build something that actually works.', icon: 'fa-solid fa-flag' },
    { year: '2026', title: 'Learned Python', description: 'Went deep on Python — syntax, logic building and small automation scripts.', icon: 'fa-brands fa-python' },
    { year: '2024', title: 'Learned Databases', description: 'Picked up SQL and database design fundamentals, and started thinking in terms of data models.', icon: 'fa-solid fa-database' },
    { year: '2024', title: 'Started UI/UX', description: 'Got curious about design — learned Figma and the principles behind interfaces people actually enjoy using.', icon: 'fa-solid fa-pen-ruler' },
    { year: '2026', title: 'Built Real Projects', description: 'Moved from tutorials to building complete, end-to-end projects of my own.', icon: 'fa-solid fa-hammer' },
    { year: '2026', title: 'Hackathons', description: 'Joined my first hackathons — learned to build fast, collaborate and ship under pressure.', icon: 'fa-solid fa-bolt' },
    { year: '2026', title: 'Current Learning', description: 'Currently deepening my JavaScript, exploring AI fundamentals, and getting into cyber security basics.', icon: 'fa-solid fa-brain' },
    { year: 'Future', title: 'Future Goals', description: 'Aiming to land a strong internship, contribute to open source, and keep building in public.', icon: 'fa-solid fa-star', isFuture: true }
  ],

  // ---- Resume -------------------------------------------------------------------
  resume: {
    path: 'assets/resume.pdf', // add your real PDF at this path
    blurb: 'Download my complete resume for a detailed look at my education, skills and project experience.'
  },

  // ---- Socials (used in hero, footer) — leave a value empty to hide the icon ---
  socials: {
    github: 'https://github.com/code-mithin',
    linkedin: 'https://www.linkedin.com/in/mithin-kumar-9865-',
    email: 'mailto:mithinkumar9865@gmail.com',
    instagram: 'https://www.instagram.com/btw.mithin'
  },

  // ---- Contact section details ---------------------------------------------
  contact: {
    email: 'mithinkumar9865@gmail.com',
    location: 'Coimbatore,Tamil Nadu, India',
    github: 'https://github.com/code-mithin',
    linkedin: 'https://www.linkedin.com/in/mithin-kumar-9865-'
  },

  footer: {
    tagline: "Thanks for scrolling this far — let's build something great together."
  }
};


/* ============================================================================
   2. UTILITY HELPERS
   ============================================================================ */

/** Escapes text before it's inserted as HTML, so stray characters in your
 *  data (quotes, angle brackets, etc.) never break the markup. */
function escapeHTML(str) {
  if (typeof str !== 'string') return str;
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/** Delays calling `fn` until `delay` ms after the last time it was invoked.
 *  Used for expensive work triggered by fast-firing events (e.g. resize). */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/** Ensures `fn` runs at most once every `limit` ms. Used for scroll events. */
function throttle(fn, limit) {
  let inThrottle = false;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => { inThrottle = false; }, limit);
    }
  };
}

/** Builds the row of social icon links shared by the hero and footer. */
function buildSocialIcons() {
  const s = profile.socials || {};
  const items = [
    { key: 'github', icon: 'fa-brands fa-github', label: 'GitHub' },
    { key: 'linkedin', icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
    { key: 'email', icon: 'fa-solid fa-envelope', label: 'Email' },
    { key: 'instagram', icon: 'fa-brands fa-instagram', label: 'Instagram' }
  ];
  return items
    .filter((item) => s[item.key])
    .map((item) => `<a href="${s[item.key]}" target="_blank" rel="noopener" aria-label="${item.label}"><i class="${item.icon}"></i></a>`)
    .join('');
}

/** Shows a small toast notification at the bottom of the screen. */
let toastTimer;
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.className = 'toast show' + (type === 'error' ? ' toast-error' : ' toast-success');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}


/* ============================================================================
   3. RENDER FUNCTIONS
   ----------------------------------------------------------------------------
   Each function below takes data from `profile` and injects it into a
   container element already present in index.html. Together, renderAll()
   is what makes the site "data-driven" — nothing personal is hardcoded
   in the HTML itself.
   ============================================================================ */

function renderHero() {
  document.getElementById('heroName').textContent = profile.name;
  document.getElementById('heroTagline').textContent = profile.tagline;

  const photo = document.getElementById('heroPhoto');
  photo.src = profile.photo;
  photo.alt = `Photo of ${profile.name}`;

  document.getElementById('heroSocials').innerHTML = buildSocialIcons();

  document.title = `${profile.name} | ${profile.role}`;
}

function renderAbout() {
  document.getElementById('aboutText').innerHTML =
    (profile.about.paragraphs || []).map((p) => `<p>${escapeHTML(p)}</p>`).join('');

  document.getElementById('aboutGoal').textContent = profile.about.goal;

  document.getElementById('aboutInterests').innerHTML =
    (profile.about.interests || []).map((i) => `<span class="chip">${escapeHTML(i)}</span>`).join('');

  const statsEl = document.getElementById('aboutStats');
  statsEl.setAttribute('data-reveal-group', '');
  statsEl.innerHTML = (profile.stats || []).map((stat) => `
    <div class="stat-card" data-reveal-item>
      <div class="stat-number">${stat.value}${stat.suffix || ''}</div>
      <div class="stat-label">${escapeHTML(stat.label)}</div>
    </div>
  `).join('');
}

function renderSkills() {
  const categories = profile.skills.categories || [];
  const tabsEl = document.getElementById('skillsTabs');
  const panelsEl = document.getElementById('skillsPanels');

  tabsEl.innerHTML = categories.map((cat, i) =>
    `<button class="skill-tab${i === 0 ? ' active' : ''}" data-category="${cat.id}">${escapeHTML(cat.label)}</button>`
  ).join('');

  panelsEl.innerHTML = categories.map((cat, i) => `
    <div class="skills-panel${i === 0 ? ' active' : ''}" data-category="${cat.id}" data-reveal-group>
      ${(cat.items || []).map((skill) => `
        <div class="skill-item" data-reveal-item>
          <div class="skill-item-head">
            <span class="skill-item-name"><i class="${skill.icon}"></i>${escapeHTML(skill.name)}</span>
            <span class="skill-item-level">${skill.level}%</span>
          </div>
          <div class="skill-bar-track">
            <div class="skill-bar-fill" data-level="${skill.level}"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function renderEducation() {
  const el = document.getElementById('educationTimeline');
  el.setAttribute('data-reveal-group', '');
  el.innerHTML = (profile.education || []).map((edu) => `
    <div class="edu-item" data-reveal-item>
      <span class="edu-dot"></span>
      <div class="edu-card">
        <span class="edu-year">${escapeHTML(edu.year)}</span>
        <h3 class="edu-degree">${escapeHTML(edu.degree)}</h3>
        <p class="edu-institution">${escapeHTML(edu.institution)}</p>
        <div class="edu-meta">
          <span><i class="${edu.icon || 'fa-solid fa-chart-simple'}"></i>${escapeHTML(edu.score)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCertificates() {
  const el = document.getElementById('certificatesGrid');
  el.setAttribute('data-reveal-group', '');
  el.innerHTML = (profile.certificates || []).map((cert) => `
    <div class="cert-card" data-reveal-item>
      <div class="cert-image-wrap">
        <img src="${cert.image}" alt="${escapeHTML(cert.title)} certificate" loading="lazy" />
      </div>
      <div class="cert-body">
        <h3 class="cert-title">${escapeHTML(cert.title)}</h3>
        <p class="cert-issuer">${escapeHTML(cert.issuer)}</p>
        <p class="cert-date"><i class="fa-regular fa-calendar"></i> ${escapeHTML(cert.date)}</p>
        <a href="${cert.link || cert.image}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
          <i class="fa-solid fa-eye"></i> View Certificate
        </a>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const projects = profile.projects || [];
  const filtersEl = document.getElementById('projectFilters');
  const gridEl = document.getElementById('projectsGrid');

  // Build the filter button list from whatever categories exist in the data
  const seen = new Set();
  const categories = ['all'];
  const labels = { all: 'All' };
  projects.forEach((p) => {
    if (!seen.has(p.category)) {
      seen.add(p.category);
      categories.push(p.category);
      labels[p.category] = p.categoryLabel || p.category;
    }
  });

  filtersEl.innerHTML = categories.map((cat, i) =>
    `<button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${cat}">${escapeHTML(labels[cat])}</button>`
  ).join('');

  gridEl.setAttribute('data-reveal-group', '');
  const cardsHTML = projects.map((project) => `
    <div class="project-card" data-category="${project.category}" data-reveal-item>
      <div class="project-image-wrap">
        <img src="${project.image}" alt="${escapeHTML(project.title)} preview" loading="lazy" />
        <span class="project-status ${project.status === 'completed' ? 'status-completed' : 'status-inprogress'}">
          ${project.status === 'completed' ? 'Completed' : 'In Progress'}
        </span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${escapeHTML(project.title)}</h3>
        <p class="project-desc">${escapeHTML(project.description)}</p>
        <div class="project-tech">${(project.tech || []).map((t) => `<span class="chip">${escapeHTML(t)}</span>`).join('')}</div>
        <div class="project-actions">
          <button type="button" class="btn btn-primary btn-sm project-details-btn" data-project-id="${project.id}">
            <i class="fa-solid fa-book-open"></i> Details
          </button>
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm"><i class="fa-brands fa-github"></i> Code</a>` : ''}
          ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener" class="btn btn-outline btn-sm"><i class="fa-solid fa-up-right-from-square"></i> Live</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // A permanent trailing tile, always visible regardless of the active filter
  const comingSoonHTML = `
    <div class="project-card coming-soon-card" data-category="_always" data-reveal-item>
      <div class="project-image-wrap">
        <img src="assets/projects/coming-soon.svg" alt="More projects coming soon" loading="lazy" />
      </div>
      <div class="project-body">
        <h3 class="project-title">More Coming Soon</h3>
        <p class="project-desc">I'm always building. Check back soon for new projects, or follow my GitHub for the latest.</p>
      </div>
    </div>
  `;

  gridEl.innerHTML = cardsHTML + comingSoonHTML;
}

function renderExperience() {
  const el = document.getElementById('experienceGrid');
  el.setAttribute('data-reveal-group', '');
  el.innerHTML = (profile.experience || []).map((exp) => `
    <div class="experience-card" data-reveal-item>
      <div class="experience-icon"><i class="${exp.icon}"></i></div>
      <div>
        <h3 class="experience-title">${escapeHTML(exp.title)}</h3>
        <span class="experience-period">${escapeHTML(exp.period)}</span>
        <p class="experience-desc">${escapeHTML(exp.description)}</p>
      </div>
    </div>
  `).join('');
}

function renderAchievements() {
  const countersEl = document.getElementById('achievementsCounters');
  countersEl.innerHTML = (profile.achievementsStats || []).map((stat) => `
    <div class="counter-card">
      <span class="counter-number" data-target="${stat.value}" data-suffix="${stat.suffix || ''}">0${stat.suffix || ''}</span>
      <span class="counter-label">${escapeHTML(stat.label)}</span>
    </div>
  `).join('');

  const gridEl = document.getElementById('achievementsGrid');
  gridEl.setAttribute('data-reveal-group', '');
  gridEl.innerHTML = (profile.achievements || []).map((a) => `
    <div class="achievement-card" data-reveal-item>
      <div class="achievement-icon"><i class="${a.icon}"></i></div>
      <h3 class="achievement-title">${escapeHTML(a.title)}</h3>
      <p class="achievement-desc">${escapeHTML(a.description)}</p>
    </div>
  `).join('');
}

function renderHackathons() {
  const el = document.getElementById('hackathonsGrid');
  el.setAttribute('data-reveal-group', '');
  el.innerHTML = (profile.hackathons || []).map((h) => `
    <div class="hackathon-card" data-reveal-item>
      <div class="hackathon-head">
        <h3 class="hackathon-name">${escapeHTML(h.name)}</h3>
        <span class="hackathon-date">${escapeHTML(h.date)}</span>
      </div>
      <span class="hackathon-role">${escapeHTML(h.role)}</span>
      <p class="hackathon-desc">${escapeHTML(h.description)}</p>
      <div class="hackathon-tech">${(h.tech || []).map((t) => `<span class="chip">${escapeHTML(t)}</span>`).join('')}</div>
    </div>
  `).join('');
}

function renderTimeline() {
  const el = document.getElementById('journeyTimeline');
  el.setAttribute('data-reveal-group', '');
  el.innerHTML = (profile.timeline || []).map((item) => `
    <div class="journey-item${item.isFuture ? ' is-future' : ''}" data-reveal-item>
      <span class="journey-dot"><i class="${item.icon}"></i></span>
      <div class="journey-card">
        <span class="journey-year">${escapeHTML(item.year)}</span>
        <h3 class="journey-title">${escapeHTML(item.title)}</h3>
        <p class="journey-desc">${escapeHTML(item.description)}</p>
      </div>
    </div>
  `).join('');
}

function renderResume() {
  document.getElementById('resumeBlurb').textContent = profile.resume.blurb;
  document.querySelectorAll('a[href="assets/resume.pdf"]').forEach((a) => { a.href = profile.resume.path; });
  const embed = document.getElementById('resumeEmbed');
  if (embed) embed.src = profile.resume.path;
}

function renderContact() {
  const c = profile.contact || {};
  const items = [
    { icon: 'fa-solid fa-envelope', label: 'Email', value: c.email, href: c.email ? `mailto:${c.email}` : null },
    { icon: 'fa-solid fa-location-dot', label: 'Location', value: c.location, href: null },
    { icon: 'fa-brands fa-github', label: 'GitHub', value: c.github, href: profile.socials.github },
    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', value: c.linkedin, href: profile.socials.linkedin }
  ].filter((item) => item.value);

  document.getElementById('contactInfo').innerHTML = items.map((item) => `
    <div class="contact-info-item">
      <div class="contact-info-icon"><i class="${item.icon}"></i></div>
      <div>
        <div class="contact-info-label">${escapeHTML(item.label)}</div>
        ${item.href
          ? `<a class="contact-info-value" href="${item.href}" target="_blank" rel="noopener">${escapeHTML(item.value)}</a>`
          : `<div class="contact-info-value">${escapeHTML(item.value)}</div>`}
      </div>
    </div>
  `).join('');
}

function renderFooter() {
  document.getElementById('footerTagline').textContent = (profile.footer && profile.footer.tagline) || '';
  document.getElementById('footerSocials').innerHTML = buildSocialIcons();

  const navItems = [...document.querySelectorAll('.nav-menu .nav-link')].map((link) => ({
    href: link.getAttribute('href'),
    label: link.textContent
  }));
  document.getElementById('footerQuickLinks').innerHTML = navItems
    .map((item) => `<li><a href="${item.href}">${escapeHTML(item.label)}</a></li>`)
    .join('');

  document.getElementById('footerCopyright').textContent =
    `© ${new Date().getFullYear()} ${profile.name}. All rights reserved.`;
}

/** Runs every render function in one place, in a sensible top-to-bottom order. */
function renderAll() {
  renderHero();
  renderAbout();
  renderSkills();
  renderEducation();
  renderCertificates();
  renderProjects();
  renderExperience();
  renderAchievements();
  renderHackathons();
  renderTimeline();
  renderResume();
  renderContact();
  renderFooter();
}


/* ============================================================================
   4. FEATURE / UI LOGIC
   ============================================================================ */

/* ---- Preloader: hide once the page has fully loaded, with a small minimum
   display time so it doesn't just flash on fast connections. ---- */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  const minDisplay = 500;
  const start = Date.now();
  window.addEventListener('load', () => {
    const wait = Math.max(0, minDisplay - (Date.now() - start));
    setTimeout(() => preloader.classList.add('hidden'), wait);
  });
}

/* ---- Custom cursor: only on devices with a precise pointer (mouse/trackpad).
   Touch devices are skipped entirely so nothing gets in the way of tapping. ---- */
function initCustomCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const dot = document.getElementById('cursorDot');
  const outline = document.getElementById('cursorOutline');
  if (!dot || !outline) return;

  document.body.classList.add('cursor-ready');

  let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  (function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    outline.style.left = `${outlineX}px`;
    outline.style.top = `${outlineY}px`;
    requestAnimationFrame(animateOutline);
  })();

  const hoverSelector = 'a, button, .btn, .project-card, .cert-card, input, textarea';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSelector)) outline.classList.add('cursor-active');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSelector)) outline.classList.remove('cursor-active');
  });
}

/* ---- Dark mode toggle. Source of truth is the `data-theme` attribute on
   <html>; localStorage is used only as best-effort persistence and is
   wrapped in try/catch so the toggle still works even where storage is
   blocked (e.g. certain embedded/sandboxed previews). ---- */
function initThemeToggle() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const icon = toggleBtn ? toggleBtn.querySelector('i') : null;

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore: storage unavailable */ }
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
    } else {
      root.removeAttribute('data-theme');
      if (icon) { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
    }
  }

  const saved = safeGet('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  toggleBtn && toggleBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    safeSet('portfolio-theme', next);
  });
}

/* ---- Mobile navigation: hamburger toggle + slide-in panel + backdrop. ---- */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  if (!hamburger || !navMenu) return;

  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }
  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('open');
    overlay.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  hamburger.addEventListener('click', () => {
    navMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  overlay.addEventListener('click', closeMenu);
  navMenu.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
}

/* ---- Sticky navbar background + active link highlighting while scrolling. ---- */
function initStickyNav() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!navbar || !sections.length) return;

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    let currentId = sections[0].id;
    const scrollPos = window.scrollY + 160;
    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) currentId = section.id;
    });
    navLinks.forEach((link) => link.classList.toggle('active', link.dataset.nav === currentId));
  }

  window.addEventListener('scroll', throttle(onScroll, 100));
  onScroll();
}

/* ---- Hero typing animation: types then deletes each role in sequence. ---- */
function initTypingEffect() {
  const el = document.getElementById('typingText');
  const roles = profile.typingRoles;
  if (!el || !roles || !roles.length) return;

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 75);
  }
  tick();
}

/* ---- Lightweight particle network for the hero background. Respects
   prefers-reduced-motion and reacts live to dark/light mode changes. ---- */
function initParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const hero = canvas.closest('.hero');
  const ctx = canvas.getContext('2d');
  let width, height, particles;

  function isDark() { return document.documentElement.getAttribute('data-theme') === 'dark'; }

  function resize() {
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  function createParticles() {
    const count = Math.min(55, Math.floor((width * height) / 20000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const dotColor = isDark() ? 'rgba(91, 141, 255, 0.55)' : 'rgba(46, 92, 246, 0.4)';
    const lineColor = isDark() ? '91, 141, 255' : '46, 92, 246';

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${lineColor}, ${(1 - dist / 130) * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', debounce(() => { resize(); createParticles(); }, 200));
}

/* ---- Scroll-reveal: fades + rises elements into view the first time they
   cross into the viewport. Cards inside a [data-reveal-group] get a small
   per-item stagger via the --i CSS variable. ---- */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));

  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    group.querySelectorAll('[data-reveal-item]').forEach((el, i) => {
      el.style.setProperty('--i', i % 10);
      observer.observe(el);
    });
  });
}

/* ---- Animated counters (achievements section) ---- */
function initCounters() {
  const counters = document.querySelectorAll('.counter-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10) || 0;
      const suffix = el.dataset.suffix || '';
      const duration = 1500;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach((el) => observer.observe(el));
}

/* ---- Skill bars fill on first scroll-into-view ---- */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill[data-level]');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = `${entry.target.dataset.level}%`;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach((el) => observer.observe(el));
}

/* ---- Skill category tabs. Also force-fills bars in the panel being shown,
   since a bar hidden behind `display: none` may not have been observed
   correctly the first time around. ---- */
function initSkillTabs() {
  const tabs = document.querySelectorAll('.skill-tab');
  const panels = document.querySelectorAll('.skills-panel');
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;
      tabs.forEach((t) => t.classList.toggle('active', t === tab));
      panels.forEach((p) => p.classList.toggle('active', p.dataset.category === category));

      const activePanel = document.querySelector('.skills-panel.active');
      if (activePanel) {
        activePanel.querySelectorAll('.skill-bar-fill[data-level]').forEach((bar) => {
          bar.style.width = `${bar.dataset.level}%`;
        });
      }
    });
  });
}

/* ---- Project category filter ---- */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.toggle('active', b === btn));
      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const alwaysShow = card.dataset.category === '_always';
        const show = alwaysShow || filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden-by-filter', !show);
      });
    });
  });
}

/* ---- Project details modal ---- */
function buildProjectModalHTML(project) {
  const d = project.details || {};
  const list = (arr) => (arr || []).map((item) => `<li>${escapeHTML(item)}</li>`).join('');
  const chips = (arr) => (arr || []).map((t) => `<span class="chip">${escapeHTML(t)}</span>`).join('');

  return `
    <img src="${project.image}" alt="${escapeHTML(project.title)} screenshot" />
    <h3 id="modalTitle">${escapeHTML(project.title)}</h3>
    <div class="project-tech">${chips(d.technologies || project.tech)}</div>

    <div class="modal-section"><h4><i class="fa-solid fa-circle-question"></i> Problem</h4><p>${escapeHTML(d.problem || '')}</p></div>
    <div class="modal-section"><h4><i class="fa-solid fa-lightbulb"></i> Solution</h4><p>${escapeHTML(d.solution || '')}</p></div>
    <div class="modal-section"><h4><i class="fa-solid fa-list-check"></i> Features</h4><ul>${list(d.features)}</ul></div>
    <div class="modal-section"><h4><i class="fa-solid fa-database"></i> Database</h4><p>${escapeHTML(d.database || '')}</p></div>
    <div class="modal-section"><h4><i class="fa-solid fa-palette"></i> UI</h4><p>${escapeHTML(d.ui || '')}</p></div>
    <div class="modal-section"><h4><i class="fa-solid fa-arrow-trend-up"></i> Future Improvements</h4><ul>${list(d.futureImprovements)}</ul></div>
    <div class="modal-section"><h4><i class="fa-solid fa-triangle-exclamation"></i> Challenges</h4><ul>${list(d.challenges)}</ul></div>
    <div class="modal-section"><h4><i class="fa-solid fa-graduation-cap"></i> Lessons Learned</h4><ul>${list(d.lessonsLearned)}</ul></div>

    <div class="modal-actions">
      ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="btn btn-secondary"><i class="fa-brands fa-github"></i> View Code</a>` : ''}
      ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener" class="btn btn-primary"><i class="fa-solid fa-up-right-from-square"></i> Live Demo</a>` : ''}
    </div>
  `;
}

function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const closeBtn = document.getElementById('modalClose');
  if (!modal || !modalContent) return;

  function openModal(project) {
    modalContent.innerHTML = buildProjectModalHTML(project);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }
  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  }

  document.querySelectorAll('.project-details-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const project = profile.projects.find((p) => p.id === btn.dataset.projectId);
      if (project) openModal(project);
    });
  });

  closeBtn && closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
}

/* ---- Back-to-top button + scroll progress bar ---- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (btn) {
    window.addEventListener('scroll', throttle(() => {
      btn.classList.toggle('visible', window.scrollY > 500);
    }, 150));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  const footerBtn = document.getElementById('footerTopBtn');
  footerBtn && footerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  function update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${docHeight > 0 ? (scrollTop / docHeight) * 100 : 0}%`;
  }
  window.addEventListener('scroll', throttle(update, 50));
  update();
}

/* ---- Contact form: client-side validation + a friendly confirmation.
   ------------------------------------------------------------------------
   This form does NOT send a real email — a static HTML/CSS/JS site has no
   backend to send from. To make it functional, pick one:
     1) Formspree (https://formspree.io)  — point the fetch() URL below at
        your form endpoint and POST `formData` to it.
     2) EmailJS (https://www.emailjs.com) — call emailjs.send() here with
        your service ID, template ID and public key.
     3) Your own backend — POST the field values to your own API route.
   ------------------------------------------------------------------------ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');
  const submitBtn = document.getElementById('contactSubmitBtn');

  function setError(input, errorEl, message) {
    input.classList.toggle('invalid', !!message);
    errorEl.textContent = message || '';
  }

  function validate() {
    let valid = true;

    if (!nameInput.value.trim()) {
      setError(nameInput, document.getElementById('errName'), 'Please enter your name.');
      valid = false;
    } else {
      setError(nameInput, document.getElementById('errName'), '');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      setError(emailInput, document.getElementById('errEmail'), 'Please enter a valid email address.');
      valid = false;
    } else {
      setError(emailInput, document.getElementById('errEmail'), '');
    }

    if (messageInput.value.trim().length < 10) {
      setError(messageInput, document.getElementById('errMessage'), 'Message should be at least 10 characters.');
      valid = false;
    } else {
      setError(messageInput, document.getElementById('errMessage'), '');
    }

    return valid;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) return;

    submitBtn.disabled = true;
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';

    // Simulated send — replace this block with a real fetch()/EmailJS call.
    setTimeout(() => {
      showToast("Message sent! I'll get back to you soon.", 'success');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHTML;
    }, 900);
  });
}


/* ============================================================================
   5. BOOTSTRAP
   ----------------------------------------------------------------------------
   Render the data-driven content first, THEN wire up interactivity — several
   features below (skill bars, project filters, the modal, etc.) query
   elements that only exist after renderAll() has run.
   ============================================================================ */
function initAll() {
  initPreloader();
  initCustomCursor();
  initThemeToggle();
  initMobileNav();
  initStickyNav();
  initTypingEffect();
  initParticles();
  initScrollReveal();
  initCounters();
  initSkillBars();
  initSkillTabs();
  initProjectFilter();
  initProjectModal();
  initBackToTop();
  initScrollProgress();
  initContactForm();
}

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initAll();
});
