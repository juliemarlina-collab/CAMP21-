const CAMP21 = {
  event: {
    title: 'Camp21: Synergising Literacies 2026',
    subtitle: 'AI-Powered Design Thinking for Sustainable Cultural Heritage',
    venue: 'Kompleks Kraf Kuala Lumpur · Jalan Conlay',
    dates: '13–16 July 2026',
    registrationLink: 'https://shorturl.at/Mo98y',
    telegramLink: 'https://t.me/+vTPGEFIaXMs5Mjhl',
    smartDtAppLink: 'https://smart-dt-project.netlify.app/welcome.html',
    mapsLink: 'https://maps.app.goo.gl/Z4ntupM7cBtSWwfD7?g_st=ac'
  },

  // ── Live updates shown on activity-updates.html ONLY ─────────────────
  updates: [
    {time:'Now',      title:'Batik Discovery Workshop',  detail:'Cultural motif exploration underway at Studio 1.',  img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/batik-discovery.png'},
    {time:'10:30 AM', title:'Songket Weave Lab',         detail:'Prototype session and craft observation.',          img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/songket-weave.png'},
    {time:'11:15 AM', title:'Wau Innovation Studio',     detail:'Ideation in progress.',                            img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/wau-studio.png'},
    {time:'12:00 PM', title:'Gallery Walk',              detail:'Exhibition space open.',                           img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/gallery-walk.png'}
  ],

  // ── DT phases — icons from Canva row 2-3 ─────────────────────────────
  phases: [
    {no:'01', title:'Empathise', desc:'Interview artisans and understand the real cultural heritage challenge.', img:'/Camp21-Synergising-Literacies-2026/assets/Icons/icon-empathy.png'},
    {no:'02', title:'Define',    desc:'Frame the right problem rooted in craft and community need.',            img:'/Camp21-Synergising-Literacies-2026/assets/Icons/icon-evidence.png'},
    {no:'03', title:'Ideate',    desc:'Generate AI-powered heritage-inspired ideas.',                          img:'/Camp21-Synergising-Literacies-2026/assets/Icons/icon-ideate.png'},
    {no:'04', title:'Prototype', desc:'Build and test with AI visuals, mockups or video.',                     img:'/Camp21-Synergising-Literacies-2026/assets/Icons/icon-prototype.png'},
    {no:'05', title:'Test',      desc:'Gather feedback, refine and prepare your pitch.',                       img:'/Camp21-Synergising-Literacies-2026/assets/Icons/icon-checklist.png'}
  ],

  // ── Experience grid
  // img  = CRAFT CARD (full photo background)
  // icon = SMALL ICON (overlay badge) — from Canva named icons
  // ─────────────────────────────────────────────────────────────────────
  experiences: [
    {
      title: 'Programme Flow',
      desc:  'Day-by-day schedule for all 4 days.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/batik-discovery.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-calendar.png',
      link:  'pages/programme.html'
    },
    {
      title: 'Trainers & Duties',
      desc:  'Phase trainers and group facilitation team.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/songket-weave.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-participants.png',
      link:  'pages/trainers.html'
    },
    {
      title: 'Group Missions',
      desc:  '6 groups, 10 participants each, 2 trainers per group.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/wau-studio.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-community.png',
      link:  'pages/groups.html'
    },
    {
      title: 'DT Journey',
      desc:  '5-phase Design Thinking from empathy to pitch.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/ukiran-heritage.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-journey.png',
      link:  'pages/dt-journey.html'
    },
    {
      title: 'Test Treasure',
      desc:  'Feedback, reflection and final pitch readiness for Phase 05.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-test-treasure.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-test.png',
      link:  'pages/dt-journey.html'
    },
    {
      title: 'Gallery Walk',
      desc:  'Heritage exhibition and creativity showcase.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/gallery-walk.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-gallery.png',
      link:  'pages/gallery-walk.html'
    },
    {
      title: 'Judge Portal',
      desc:  'Evaluation rubric and live score submission.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-judge-portal.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-checklist.png',
      link:  'pages/judges.html'
    },
    {
      title: 'Evidence Board',
      desc:  'Capture and submit DT templates T01–T16.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/hero-smartdt.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-evidence.png',
      link:  'pages/evidence-board.html'
    },
    {
      title: "Participants' Corner",
      desc:  'SMART DT App, T01–T16 checklist, group task and pitch guide.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/kompleks-kraf.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-craft.png',
      link:  'pages/participants.html'
    },
    {
      title: 'Organiser Control Room',
      desc:  'Live status, evidence, logistics and contacts for secretariat.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/kompleks-kraf.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-updates.png',
      link:  'pages/organiser.html'
    },
    {
      title: 'Help Desk Contacts',
      desc:  'Lead trainer, secretariat, tech support and emergency contacts.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-partipants-corner.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-contact.png',
      link:  'pages/contacts.html'
    }
  ],

  // ── Schedule ──────────────────────────────────────────────────────────
  schedule: [
    {
      date:'12 July 2026 (Sunday)', theme:'Arrival Day',
      note:'Participants, accompanying lecturers, facilitators and speakers arrive at their respective accommodations.',
      sessions:[]
    },
    {
      date:'13 July 2026 (Monday)', theme:'Heritage Immersion & Empathize DT + KL Exploration',
      sessions:[
        {time:'7:00 am',             prog:'Pick up Participants',                                           venue:'Pick up points'},
        {time:'8:30 – 9:00 am',      prog:'Registration & Breakfast',                                      venue:'Main Seminar Hall'},
        {time:'9:00 – 9:30 am',      prog:'Programme Briefing / Smart Green Briefing',                     venue:'Main Seminar Hall'},
        {time:'9:30 – 10:00 am',     prog:'Ice Breaking & Group Formation',                                venue:'Main Seminar Hall'},
        {time:'10:00 am – 12:30 pm', prog:'Guided Craft Gallery Tour / Motif Exploration & Artisan Interview', venue:'Main Seminar Hall'},
        {time:'12:30 – 2:00 pm',     prog:'Lunch / Zohor Prayer',                                         venue:'Hall & Surau'},
        {time:'3:30 – 5:00 pm',      prog:'Design Thinking Workshop: Empathize & Define',                  venue:'Main Seminar Hall'},
        {time:'5:00 – 5:30 pm',      prog:'Day 1 Reflection & Asar Prayer',                               venue:'Hall & Surau'},
        {time:'5:30 – 7:00 pm',      prog:'Dinner / Maghrib Prayer',                                      venue:'Main Seminar Hall'},
        {time:'8:30 – 10:30 pm',     prog:'KL Exploration (Hop-On Hop-Off Bus & Reflection)',              venue:'Around Kuala Lumpur'},
        {time:'10:30 pm',            prog:'Sending off Participants',                                      venue:'Kompleks Kraf'}
      ]
    },
    {
      date:'14 July 2026 (Tuesday)', theme:'Ideate',
      sessions:[
        {time:'7:00 am',             prog:'Pick up Participants',                                          venue:'Pick up points'},
        {time:'8:30 – 9:00 am',      prog:'Breakfast',                                                    venue:'Main Seminar Hall'},
        {time:'9:00 – 10:30 am',     prog:'Design Thinking Workshop: Ideate',                             venue:'Main Seminar Hall'},
        {time:'10:30 am – 12:00 pm', prog:'Motif Exploration & Artisan Interview',                        venue:'Main Seminar Hall'},
        {time:'12:00 – 1:30 pm',     prog:'Lunch / Zohor Prayer',                                        venue:'Hall & Surau'},
        {time:'1:30 – 2:30 pm',      prog:'Mind Mapping & Concept Sketching',                            venue:'Main Seminar Hall'},
        {time:'2:30 – 3:30 pm',      prog:'Group Reflection',                                            venue:'Main Seminar Hall'},
        {time:'7:30 – 8:30 pm',      prog:'Dinner & Maghrib Prayer',                                     venue:'Main Seminar Hall'},
        {time:'8:30 – 10:30 pm',     prog:'Discussion',                                                  venue:'Main Seminar Hall'},
        {time:'10:30 pm',            prog:'Sending off Participants',                                     venue:'Kompleks Kraf'}
      ]
    },
    {
      date:'15 July 2026 (Wednesday)', theme:'Prototyping & Pitch Preparation',
      sessions:[
        {time:'7:00 am',             prog:'Pick up Participants',                                         venue:'Pick Up Points'},
        {time:'8:30 – 9:00 am',      prog:'Breakfast',                                                   venue:'Main Seminar Hall'},
        {time:'9:00 – 11:00 am',     prog:'Prototyping Workshop',                                        venue:'Main Seminar Hall'},
        {time:'11:00 am – 12:30 pm', prog:'Tie Dye Workshop',                                            venue:'Craft Area'},
        {time:'12:30 – 1:30 pm',     prog:'Lunch / Zohor Prayer',                                        venue:'Surau'},
        {time:'1:30 – 3:30 pm',      prog:'Pitch & Storytelling Preparation',                            venue:'Main Seminar Hall'},
        {time:'3:30 – 5:00 pm',      prog:'Closing Rehearsal',                                           venue:'Laman Wau'},
        {time:'5:30 – 8:30 pm',      prog:'Dinner / Maghrib Prayer',                                     venue:'Main Seminar Hall & Surau'},
        {time:'8:30 – 10:30 pm',     prog:'Discussion',                                                  venue:'Main Seminar Hall'},
        {time:'10:30 pm',            prog:'Sending off Participants',                                     venue:'Kompleks Kraf'}
      ]
    },
    {
      date:'16 July 2026 (Thursday)', theme:'Pitching & Closing Ceremony',
      sessions:[
        {time:'7:00 am',             prog:'Pick up Participants',                                         venue:'Pick Up Points'},
        {time:'8:30 – 9:00 am',      prog:'Breakfast',                                                   venue:'Main Seminar Hall'},
        {time:'9:00 – 11:30 am',     prog:'⭐ Pitching & Evaluation Session',                            venue:'Laman Wau'},
        {time:'11:30 am – 12:30 pm', prog:'Panel Feedback',                                              venue:'Laman Wau'},
        {time:'12:30 – 1:30 pm',     prog:'Lunch Break',                                                 venue:'Laman Wau'},
        {time:'1:30 – 2:30 pm',      prog:'Zohor Prayer',                                                venue:'Surau'},
        {time:'2:30 – 4:00 pm',      prog:'🏆 Closing Ceremony & Prize Giving',                          venue:'Laman Wau'}
      ]
    }
  ],

  groups: [
    {id:1, name:'Team Warisan', participants:10, trainers:'MOHD. ZULKAFLI BIN MOHAMED + MUZIMAH AIDA BINTI MD MUSTAFA', status:'In Progress'},
    {id:2, name:'Team Tenun', participants:10, trainers:'MOHD RIDHUAN BIN ISMAIL + SITI HANIS-SYAZANA BINTI MOHAMAD', status:'In Progress'},
    {id:3, name:'Team Batik', participants:10, trainers:'KATHERINE LIVAN KEHING BINTI ABDULLAH + NUR SALINA BINTI SYAWALLUDDIN', status:'Needs Support'},
    {id:4, name:'Team Songket', participants:10, trainers:'SARA RURAN FABIAN + MUHAMAD SYIRAZI BIN SUHAIMI', status:'Pending'},
    {id:5, name:'Team Ukiran', participants:10, trainers:'MUHAMMAD ZAKI BIN YAHAYA + NOOR DARLIZA BINTI MOHAMAD ZAMRI', status:'Pending'},
    {id:6, name:'Team Wau', participants:10, trainers:'TS. MOHAMMED FARID BIN ISHAK + NOR HANIZA BINTI MUSTAFAR KAMAR', status:'Pending'}
  ],

  trainers:[
    ['Lead Trainer', 'JULIE MARLINA BINTI HASAN', 'Overall programme flow, DT quality control, trainer coordination and escalation'],
    ['Phase 01 Input', 'NOOR DARLIZA BINTI MOHAMAD ZAMRI', 'Empathy, artisan interview, observation and user insight briefing'],
    ['Phase 02 Input', 'TS. MOHAMMED FARID BIN ISHAK', 'Define phase, POV statement and How Might We question framing'],
    ['Phase 03 Input', 'MOHD. ZULKAFLI BIN MOHAMED', 'Ideation, SCAMPER, AI-assisted brainstorming and idea selection'],
    ['Phase 04 Input', 'MUZIMAH AIDA BINTI MD MUSTAFA', 'Prototype planning, mockup development and AI visual concept guidance'],
    ['Phase 05 Input', 'MUHAMMAD ZAKI BIN YAHAYA', 'Testing, gallery walk feedback, pitch flow and final reflection'],
    ['Tech/App Support', 'NOR HANIZA BINTI MUSTAFAR KAMAR + NURFARHANAH BINTI OMAR', 'SMART DT App access, QR code, login support, submission backup and troubleshooting'],
    ['Documentation Team', 'SITI HANIS-SYAZANA BINTI MOHAMAD + SARA RURAN FABIAN', 'Photos, videos, activity updates, evidence board and report assets'],
    ['Judge Liaison', 'NUR SALINA BINTI SYAWALLUDDIN', 'Judge briefing, score form link, pitch order and panel feedback coordination'],
    ['Logistics Support', 'KATHERINE LIVAN KEHING BINTI ABDULLAH + MUHAMAD SYIRAZI BIN SUHAIMI', 'Venue movement, group readiness, meal timing, pick-up reminders and participant support'],
    ['AI Instructor', 'Madam Sathya', 'AI tools briefing, prompt guidance, AI-supported ideation and prototype support'],
    ['Pitching Speaker', 'Mr Ram', 'Pitching input, storytelling structure, stage confidence and final presentation preparation']
  ],

  trainerDirectory:[
    {name:"MOHD. ZULKAFLI BIN MOHAMED", institution:"POLITEKNIK KOTA BHARU"},
    {name:"MUZIMAH AIDA BINTI MD MUSTAFA", institution:"POLITEKNIK KOTA BHARU"},
    {name:"MOHD RIDHUAN BIN ISMAIL", institution:"POLITEKNIK SULTAN MIZAN ZAINAL ABIDIN"},
    {name:"SITI HANIS-SYAZANA BINTI MOHAMAD", institution:"POLITEKNIK MUADZAM SHAH"},
    {name:"KATHERINE LIVAN KEHING BINTI ABDULLAH", institution:"POLITEKNIK MUKAH"},
    {name:"NUR SALINA BINTI SYAWALLUDDIN", institution:"KOLEJ KOMUNITI PASIR SALAK"},
    {name:"SARA RURAN FABIAN", institution:"POLITEKNIK MUKAH, SARAWAK"},
    {name:"MUHAMAD SYIRAZI BIN SUHAIMI", institution:"POLITEKNIK MUADZAM SHAH"},
    {name:"MUHAMMAD ZAKI BIN YAHAYA", institution:"POLITEKNIK UNGKU OMAR"},
    {name:"JULIE MARLINA BINTI HASAN", institution:"POLITEKNIK PORT DICKSON"},
    {name:"NOOR DARLIZA BINTI MOHAMAD ZAMRI", institution:"POLITEKNIK PORT DICKSON"},
    {name:"TS. MOHAMMED FARID BIN ISHAK", institution:"POLITEKNIK PORT DICKSON"},
    {name:"NOR HANIZA BINTI MUSTAFAR KAMAR", institution:"POLITEKNIK PORT DICKSON"},
    {name:"NURFARHANAH BINTI OMAR", institution:"POLITEKNIK PORT DICKSON"},
    {name:"Madam Sathya", institution:"External Speaker · AI Instructor"},
    {name:"Mr Ram", institution:"External Speaker · Pitching Speaker"}
  ],

  rubric:[
    {criteria:'Content & Innovative Thinking', weight:30, desc:'Creative integration of AI and Design Thinking.'},
    {criteria:'Presentation & Communication',  weight:30, desc:'Clear, confident, engaging delivery and visual design.'},
    {criteria:'Feasibility & Impact',          weight:20, desc:'Realistic plan, measurable impact, SDG 11 alignment.'},
    {criteria:'Team Collaboration',            weight:10, desc:'Balanced participation and cohesive teamwork.'},
    {criteria:'Q&A Handling',                  weight:10, desc:'Ability to address judges\u2019 questions effectively.'}
  ]
};
