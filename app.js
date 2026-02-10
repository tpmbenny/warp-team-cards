// Warp Engineering Team — interactive flip cards
// - Data comes from your DOCX (full names, bullets, and LinkedIn URLs)
// - Front images are slices you’ll export from "Warp Eng Team.png"
// - Place slices under assets/fronts/ with the filenames referenced below

// Optional per-avatar object-position overrides (percentages).
// Example: AVATAR_POS["code-aloke-d"] = { x: "48%", y: "35%" };
const AVATAR_POS = {};

const TEAM_DATA = [
  {
    id: "leadership",
    title: "Engineering Leadership",
    members: [
      {
        slug: "leadership-john-r",
        frontShort: "John R",
        fullName: "John Rector",
        bullets: [
          "Previous Companies: Reddit (Sr Director of Engineering), Dialpad (Cofounder/VP Engineering - 10 years, $1.2B valuation), Google, Microsoft",
          "Total Years of Experience: 20+ years",
          "Education: Stanford University (MS Computer Science, BA Philosophy and Religious Studies)"
        ],
        linkedin: "https://www.linkedin.com/in/johnarector/",
        avatar: "assets/avatars/John_Rector.png"
      }
    ]
  },
  {
    id: "app",
    title: "App",
    members: [
      {
        slug: "app-aloke-d",
        frontShort: "Aloke D",
        fullName: "Aloke Desai",
        bullets: [
          "Previous Companies: Google (4 years)",
          "Total Years of Experience: 8+ years",
          "Education: Pomona College (BA CS & Mathematical Economics)"
        ],
        linkedin: "https://www.linkedin.com/in/aloke-desai/",
        avatar: "assets/avatars/Aloke_Desai.png"
      },
      {
        slug: "app-andy-c",
        frontShort: "Andy C",
        fullName: "Andrew Carlson",
        bullets: [
          "Previous Companies: Instagram (1+), Onehot Labs (2+), Stem Disintermedia (2+)",
          "Total Years of Experience: 5+ years",
          "Education: UC Berkeley (MS Data Science), UCLA (MS Chemistry), UC Riverside (BS Chemistry)"
        ],
        linkedin: "https://www.linkedin.com/in/acarl005/",
        avatar: "assets/avatars/Andy_Carlson.png"
      },
      {
        slug: "app-zach-b",
        frontShort: "Zach B",
        fullName: "Zach Bai",
        bullets: [
          "Previous Companies: Google (4 years)",
          "Total Years of Experience: 6+ years",
          "Education: Harvard University (AB CS)"
        ],
        linkedin: "https://www.linkedin.com/in/zachbai/",
        avatar: "assets/avatars/Zach_Bai.png"
      },
      {
        slug: "app-harry-a",
        frontShort: "Harry A",
        fullName: "Harry Albert",
        bullets: [
          "First full-time role at Warp",
          "Previous Internships: Bubble & Meta",
          "Education: Williams College (BA CS & Philosophy)"
        ],
        linkedin: "https://www.linkedin.com/in/harry-albert/",
        avatar: "assets/avatars/Harry_Albert.png"
      },
      {
        slug: "app-kevin-y",
        frontShort: "Kevin Y",
        fullName: "Kevin Yang",
        bullets: [
          "First full-time role at Warp",
          "Previous Internships: Recruit Co. (2+), LinkedIn",
          "Education: Minerva University (BS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/yunfan-yang-46824b153/",
        avatar: "assets/avatars/Kevin_Yang.png"
      },
      {
        slug: "app-moira-h",
        frontShort: "Moira H",
        fullName: "Moira Huang",
        bullets: [
          "Previous Companies: Flatiron Health (3+ years, Sr SWE), AWS (1 year)",
          "Total Years of Experience: 5+ years",
          "Education: UC Berkeley (BS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/moirahuang/",
        avatar: "assets/avatars/Moira_Huang.png"
      },
      {
        slug: "app-roland-h",
        frontShort: "Roland H",
        fullName: "Roland Huang",
        bullets: [
          "Previous Companies: Nuro (4+ years)",
          "Total Years of Experience: 6+ years",
          "Education: Yale University (Combined BS/MS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/roland-huang-128a85107/",
        avatar: "assets/avatars/Roland_Huang.png"
      },
      {
        slug: "app-advait-m",
        frontShort: "Advait M",
        fullName: "Advait Maybhate",
        bullets: [
          "First full-time role at Warp",
          "Internships: Warp, Ramp, Octant, Instabase, Riot Games, Google (2x), Social Capital, North, Christie Digital (2x)",
          "Education: UWaterloo (BS CS), Georgia Tech (MS CS - in progress)"
        ],
        linkedin: "https://www.linkedin.com/in/advait-m/",
        avatar: "assets/avatars/Advait_Maybhate.png"
      },
      {
        slug: "app-kevin-c",
        frontShort: "Kevin C",
        fullName: "Kevin Chevalier",
        bullets: [
          "Previous Companies: Thorn (6), CircleUp (4), Mayo Clinic (2), Curata (4)",
          "Total Years of Experience: 17+ years",
          "Education: MIT (MEng CSE, BS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/kevin-chevalier-90b55583/",
        avatar: "assets/avatars/Kevin_Chevalier.png"
      },
      {
        slug: "app-pei",
        frontShort: "Pei",
        fullName: "Pei Li",
        bullets: [
          "Previous Companies: Vellum (Founding Eng), Venue (Co-Founder YC W23), CodeMode (Founder/CEO), Wealthsimple, Shopify",
          "Total Years of Experience: 9+ years",
          "Education: University of Toronto (BASc Engineering Science)"
        ],
        linkedin: "https://www.linkedin.com/in/peicodes/",
        avatar: "assets/avatars/Pei_Li.png"
      },
      {
        slug: "app-maggie-s",
        frontShort: "Maggie S",
        fullName: "Maggie Shan",
        bullets: [
          "Previous Internships: Primer.ai, PlayStation, Raymond James",
          "Total Years of Experience: 2+ years",
          "Education: UWaterloo (Honours BCS), Wilfrid Laurier (BBA)"
        ],
        linkedin: "https://www.linkedin.com/in/maggieshan/",
        avatar: "assets/avatars/Maggie_Shan.png"
      },
      {
        slug: "app-lucie-l",
        frontShort: "Lucie L",
        fullName: "Lucie Le Blanc",
        bullets: [
          "Previous Companies: Kalshi; Internships at Tilt Dev, Reddit, Google, Facebook",
          "Total Years of Experience: 4+ years",
          "Education: Columbia University/Barnard College (BS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/lucie-leblanc/",
        avatar: "assets/avatars/Lucie_Le_Blanc.png"
      },
      {
        slug: "app-david-s",
        frontShort: "David S",
        fullName: "David Stern",
        bullets: [
          "Previous Companies: YouTube (Staff SWE - 7), Google (2)",
          "Total Years of Experience: 12+ years",
          "Education: Brown University (ScB CS)"
        ],
        linkedin: "https://www.linkedin.com/in/david-stern-24b71637/",
        avatar: "assets/avatars/David_Stern.png"
      },
      {
        slug: "app-varoon-k",
        frontShort: "Varoon K",
        fullName: "Varoon Kodithala",
        bullets: [
          "Started as intern at Warp; previously interned at Censys",
          "Notable: Built Warp's first-class code editor as an intern",
          "Education: Georgia Tech (BS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/vkodithala/",
        avatar: "assets/avatars/Varoon_Kodithala.png"
      }
    ]
  },
  {
    id: "revenue",
    title: "Revenue",
    members: [
      {
        slug: "revenue-jeff-l",
        frontShort: "Jeff L",
        fullName: "Jeff Lloyd",
        bullets: [
          "Previous Companies: Square (5+), Splunk (4)",
          "Total Years of Experience: 11+ years",
          "Education: Stanford University (BS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/jeff-lloyd-3a29a416/",
        avatar: "assets/avatars/Jeff_Lloyd.png"
      },
      {
        slug: "revenue-isaiah-w",
        frontShort: "Isaiah W",
        fullName: "Isaiah Witzke",
        bullets: [
          "Previous Companies: Carta (Software Engineer 2)",
          "Total Years of Experience: 4+ years",
          "Education: TBD"
        ],
        linkedin: "https://www.linkedin.com/in/isaiah-witzke-4990a6175/",
        avatar: "assets/avatars/Isaiah_Witzke.png"
      },
      {
        slug: "revenue-tyler-l",
        frontShort: "Tyler L",
        fullName: "Tyler Lam",
        bullets: [
          "Previous Companies: Hive (1+), Internships @ Meta, Amazon",
          "Total Years of Experience: 2+ years",
          "Education: University of Calgary (BSc Software Engineering)"
        ],
        linkedin: "https://www.linkedin.com/in/tylerwlam/",
        avatar: "assets/avatars/Tyler_Lam.png"
      }
    ]
  },
  {
    id: "quality",
    title: "Quality",
    members: [
      {
        slug: "quality-suraj-g",
        frontShort: "Suraj G",
        fullName: "Suraj Gupta",
        bullets: [
          "First full-time role at Warp",
          "Internships: Snowflake, Wish, OpsLevel, Gluskin Sheff, PureFacts Financial",
          "Education: University of Waterloo (Honours BCS)"
        ],
        linkedin: "https://www.linkedin.com/in/szgupta/",
        avatar: "assets/avatars/Suraj_Gupta.png"
      },
      {
        slug: "quality-daniel-p",
        frontShort: "Daniel P",
        fullName: "Daniel Peng",
        bullets: [
          "Previous Companies: Gem; internships at Tableau, Amazon, data.world, Connected, TD",
          "Total Years of Experience: 2+ years",
          "Education: University of Waterloo (BS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/daniel-peng/",
        avatar: "assets/avatars/Daniel_Peng.png"
      },
      {
        slug: "quality-matt-a",
        frontShort: "Matt A",
        fullName: "Matthew Albright",
        bullets: [
          "Previous Companies: Google (20+ years)",
          "Total Years of Experience: 21+ years",
          "Education: Penn State (BS Computer Engineering)"
        ],
        linkedin: "https://www.linkedin.com/in/matthew-albright-11077b1/",
        avatar: "assets/avatars/Matthew_Albright.png"
      },
      {
        slug: "quality-leon-f",
        frontShort: "Leon F",
        fullName: "Leon Fattakhov",
        bullets: [
          "Previous Companies: Amazon (Software Development Engineer)",
          "Total Years of Experience: 4+ years",
          "Education: University of Waterloo (BS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/leon-fattakhov/",
        avatar: "assets/avatars/Leon_Fattakhov.png"
      }
    ]
  },
  {
    id: "platform",
    title: "Platform",
    members: [
      {
        slug: "platform-ben-n",
        frontShort: "Ben N",
        fullName: "Benjamin Navetta",
        bullets: [
          "Previous Companies: Twitter (3+ years)",
          "Total Years of Experience: 6+ years",
          "Education: Brown University (BS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/benjaminnavetta/",
        avatar: "assets/avatars/Benjamin_Navetta.png"
      },
      {
        slug: "platform-ian-h",
        frontShort: "Ian H",
        fullName: "Ian Hodge",
        bullets: [
          "Previous Companies: Meta (2 years)",
          "Total Years of Experience: 5+ years",
          "Education: Stanford University (BS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/ian-hodge-4876aa117/",
        avatar: "assets/avatars/Ian_Hodge.png"
      },
      {
        slug: "platform-katarina-j",
        frontShort: "Katarina J",
        fullName: "Katarina Jankov",
        bullets: [
          "Previous Companies: Stripe (Software Engineer)",
          "Total Years of Experience: 5+ years",
          "Education: Cornell University (BS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/kjankov/",
        avatar: "assets/avatars/Katarina_Jankov.png"
      },
      {
        slug: "platform-safia-a",
        frontShort: "Safia A",
        fullName: "Safia Abdalla",
        bullets: [
          "Previous Companies: Microsoft (Principal SWE — ASP.NET Core, .NET Aspire)",
          "Notable: Major open source contributor (nteract, Jupyter ecosystem)",
          "Education: Northwestern University (BS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/safiaabdalla/",
        avatar: "assets/avatars/Safia_Abdalla.png"
      },
      {
        slug: "platform-lili",
        frontShort: "Lili",
        fullName: "Lili Wilson",
        bullets: [
          "First full-time role at Warp",
          "Internships: Warp, Vividly; MIT CSAIL + Brain & Cognitive Sciences research",
          "Education: MIT (BS Computer Science)"
        ],
        linkedin: "https://www.linkedin.com/in/lili-m-wilson/",
        avatar: "assets/avatars/Lili_Wilson.png"
      },
      {
        slug: "platform-abhi-p",
        frontShort: "Abhi P",
        fullName: "Abhishek Pandya",
        bullets: [
          "First full-time role at Warp",
          "Previous Internships: Warp and Amazon",
          "Education: UPenn (MS Data Science, BSE CS)"
        ],
        linkedin: "https://www.linkedin.com/in/abhishekanujpandya/",
        avatar: "assets/avatars/Abhishek_Pandya.png"
      },
      {
        slug: "platform-ben-s",
        frontShort: "Ben S",
        fullName: "Ben Stobaugh",
        bullets: [
          "Previous Companies: Abnormal AI (Senior SWE)",
          "Total Years of Experience: 5+ years",
          "Education: University of Texas at Austin (BS CS)"
        ],
        linkedin: "https://www.linkedin.com/in/benstobaugh/",
        avatar: "assets/avatars/Ben_Stobaugh.png"
      }
    ]
  }
];

function createCard(member, teamId) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.team = teamId;
  card.dataset.slug = member.slug;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-pressed', 'false');
  card.setAttribute('aria-label', `Card for ${member.frontShort} in ${teamId} team. Press Enter to flip.`);

  const inner = document.createElement('div');
  inner.className = 'card-inner';

  const front = document.createElement('div');
  front.className = 'card-face front';

  // Constructed front: small avatar + name
  const frontWrap = document.createElement('div');
  frontWrap.className = 'front-content';

  const avatar = document.createElement('img');
  avatar.className = 'front-avatar';
  avatar.src = member.avatar || `assets/avatars/${member.slug}.png`;
  avatar.alt = `${member.fullName} headshot`;
  avatar.loading = 'lazy';
  const pos = AVATAR_POS[member.slug];
  if (pos && pos.x && pos.y) {
    avatar.style.objectPosition = `${pos.x} ${pos.y}`;
  }

  const ftext = document.createElement('div');
  ftext.className = 'front-text';
  const fname = document.createElement('div');
  fname.className = 'front-name';
  fname.textContent = member.frontShort;

  ftext.appendChild(fname);
  frontWrap.appendChild(avatar);
  frontWrap.appendChild(ftext);
  front.appendChild(frontWrap);

  const back = document.createElement('div');
  back.className = 'card-face back';

  // Make the engineer's name a direct link to LinkedIn when available
  let title;
  if (member.linkedin) {
    title = document.createElement('a');
    title.className = 'card-back-title';
    title.href = member.linkedin;
    title.target = '_blank';
    title.rel = 'noopener';
    title.textContent = member.fullName;
  } else {
    title = document.createElement('div');
    title.className = 'card-back-title';
    title.textContent = member.fullName;
  }

  const list = document.createElement('ul');
  list.className = 'card-back-list';
  member.bullets.forEach(b => {
    const li = document.createElement('li');
    li.textContent = b;
    list.appendChild(li);
  });

  back.appendChild(title);
  back.appendChild(list);

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);
  return card;
}

function renderTeams() {
  TEAM_DATA.forEach(team => {
    const grid = document.querySelector(`[data-team="${team.id}"]`);
    if (!grid) return;
    team.members.forEach(member => {
      const el = createCard(member, team.id);
      grid.appendChild(el);
    });
  });
}

function closeAll(except = null) {
  document.querySelectorAll('.card.is-flipped').forEach(c => {
    if (c !== except) {
      c.classList.remove('is-flipped');
      c.setAttribute('aria-pressed', 'false');
    }
  });
}

function expandCardToFitBack(card) {
  const back = card.querySelector('.card-face.back');
  if (!back) return;
  // Measure the full content height of the back face
  const needed = back.scrollHeight;
  // Only increase if content exceeds current height
  const current = card.getBoundingClientRect().height;
  if (needed > current) {
    card.style.height = `${needed}px`;
    card.style.aspectRatio = 'auto';
  }
}

function resetCardSizing(card) {
  card.style.height = '';
  card.style.aspectRatio = '';
}

function toggleCard(card, forceOpen) {
  const willOpen = forceOpen !== undefined ? forceOpen : !card.classList.contains('is-flipped');
  if (willOpen) {
    closeAll(card);
    card.classList.add('is-flipped');
    card.setAttribute('aria-pressed', 'true');
    // Expand to fit back content when opened via click/focus
    expandCardToFitBack(card);
  } else {
    card.classList.remove('is-flipped');
    card.setAttribute('aria-pressed', 'false');
    // Restore default sizing when closed
    resetCardSizing(card);
  }
}

function wireInteractions() {
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // On pointer hover desktops, expand height while hovered so back text never clips
  if (supportsHover) {
    document.addEventListener('mouseover', (e) => {
      const card = e.target.closest && e.target.closest('.card');
      if (!card) return;
      // Ignore internal mouseover transitions within the same card
      if (e.relatedTarget && card.contains(e.relatedTarget)) return;
      expandCardToFitBack(card);
    });
    document.addEventListener('mouseout', (e) => {
      const card = e.target.closest && e.target.closest('.card');
      if (!card) return;
      if (e.relatedTarget && card.contains(e.relatedTarget)) return;
      // If the card is explicitly opened via click (is-flipped), keep it expanded
      if (card.classList && card.classList.contains('is-flipped')) return;
      resetCardSizing(card);
    });
  }

  document.addEventListener('click', (e) => {
    const linkClick = e.target.closest && e.target.closest('a[href]');
    if (linkClick) return; // let links work

    const card = e.target.closest && e.target.closest('.card');
    if (card) {
      // Tap/click toggles
      toggleCard(card);
    } else {
      closeAll();
    }
  });

  // Keyboard and focus/blur behavior mirrors hover
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });

  document.addEventListener('keydown', (e) => {
    const card = e.target.closest && e.target.closest('.card');
    if (!card) return;
    // If focus is on or inside a link, let the link handle Enter/Space
    const inLink = e.target.closest && e.target.closest('a[href]');
    if (inLink) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCard(card);
    }
  });

  document.addEventListener('focusin', (e) => {
    const card = e.target.closest && e.target.closest('.card');
    if (card && supportsHover) toggleCard(card, true);
    if (card) expandCardToFitBack(card);
  });
  document.addEventListener('focusout', (e) => {
    const card = e.target.closest && e.target.closest('.card');
    if (card && supportsHover) toggleCard(card, false);
    if (card) resetCardSizing(card);
  });

  // Recalculate for the currently opened (clicked) card on resize
  window.addEventListener('resize', () => {
    const open = document.querySelector('.card.is-flipped');
    if (open) {
      // Clear then re-expand to measure with new layout
      resetCardSizing(open);
      expandCardToFitBack(open);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTeams();
  wireInteractions();
});

