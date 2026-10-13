/* ============================================
   K8 VALIDATE — i18n (Polish default / English toggle)
   assets/i18n.js

   - Polski tekst jest też wpisany bezpośrednio w plikach .html
     (strona działa poprawnie nawet wtedy, gdy ten skrypt się nie wczyta).
   - Ten plik trzyma pary PL + EN pod tymi samymi kluczami co atrybuty
     data-i18n / data-i18n-html / data-i18n-placeholder w HTML.
   - "common" — teksty wspólne (menu, stopka); "index" — strona główna.
   - Strony Akademii mają swoje angielskie teksty w atrybutach data-en
     (obsługuje je akademia.js).
   ============================================ */

const translations = {
  "pl": {
    "common": {
      "brand_sub": "Akademia Walidacji · walidacja i kwalifikacja GMP",
      "nav": {
        "akademia": "Akademia Walidacji",
        "akademia_cleanroom": "Cleanroom i komory UDAF / BSC",
        "akademia_mapping": "Mapowanie temperatury",
        "casestudies": "Case Studies",
        "about": "O mnie",
        "experience": "Doświadczenie",
        "contact": "Kontakt"
      },
      "footer": "© 2026 K8 Validate · Katarzyna Szkodzińska. Wszelkie prawa zastrzeżone.",
      "privacy": "Polityka prywatności"
    },
    "index": {
      "hero": {
        "tag": "GMP · Cleanroom · Komory UDAF / BSC · Izolatory · Mapowanie temperatury · CSV",
        "lead": "Walidacja i kwalifikacja w GMP — tak, żeby decyzja wytrzymała pytania inspektora.",
        "sub": "Praktyczne kursy Akademii Walidacji i wsparcie projektów: pomieszczenia czyste, komory UDAF / BSC, izolatory, mapowanie temperatury i walidacja systemów skomputeryzowanych.",
        "badges": "9+ lat w GMP&nbsp;&nbsp;|&nbsp;&nbsp;projekty w 6 krajach&nbsp;&nbsp;|&nbsp;&nbsp;podejście oparte na ryzyku",
        "btnAcademy": "Akademia Walidacji →",
        "btnContact": "Skontaktuj się"
      },
      "whoami": {
        "label": "Kim jestem",
        "role": "ekspertka ds. walidacji i kwalifikacji",
        "text": "Autorka Akademii Walidacji. Kwalifikuję pomieszczenia czyste, komory UDAF / BSC, izolatory i urządzenia termostatyczne oraz waliduję systemy skomputeryzowane.",
        "btn": "O mnie"
      },
      "about": {
        "label": "O mnie",
        "title": "Precyzja w każdym protokole",
        "p1": "Jestem specjalistką ds. walidacji i kwalifikacji z ponad 9-letnim doświadczeniem w środowisku GMP — w przemyśle farmaceutycznym, biotechnologicznym i wyrobów medycznych.",
        "p2": "Prowadzę pełny cykl kwalifikacji — pomieszczeń czystych, systemów HVAC, komór UDAF / BSC, izolatorów oraz urządzeń i obszarów o kontrolowanej temperaturze — od projektu, przez DQ / IQ / OQ / PQ, po rekwalifikację.",
        "p3": "Zajmuję się również walidacją systemów skomputeryzowanych (CSV) zgodnie z GAMP 5, EU GMP Annex 11 i 21 CFR Part 11 — od oceny ryzyka i URS, przez macierz śledzenia wymagań, po protokoły IQ / OQ / PQ i integralność danych.",
        "p4": "Łączę praktykę walidacyjną z inżynierskim zapleczem HVAC, BMS i mediów krytycznych. Pracowałam przy projektach w Europie, USA i Azji.",
        "p5": "W Akademii Walidacji dzielę się tym doświadczeniem: uczę nie tylko, jak wykonać test, ale jak podjąć decyzję i obronić ją przed inspektorem.",
        "learnMore": "Dowiedz się więcej",
        "stat1Label": "lat w GMP",
        "stat2Label": "zrealizowanych projektów",
        "stat3Label": "krajów, w których realizowałam projekty"
      },
      "expertise": {
        "label": "Kompetencje",
        "title": "Co oferuję:",
        "card1": {
          "title": "Pomiary i testy",
          "body": "- Pomiary prędkości przepływu powietrza (UDAF / LAF)<br>- Pomiary krotności wymian powietrza (ACH) – systemy HVAC<br>- Testy szczelności filtrów HEPA (testy przecieku)<br>- Badania czystości powietrza (zliczanie cząstek)<br>- Pomiary różnicy ciśnień (kaskada ciśnień)<br>- Mapowanie temperatury i wilgotności (badania termiczne)<br>- Wizualizacja przepływu powietrza (testy dymowe)<br>- Testy powrotu do stanu równowagi pomieszczeń czystych"
        },
        "card2": {
          "title": "Szkolenia i warsztaty",
          "body": "- Pomieszczenia czyste (HVAC) – C&amp;Q i rekwalifikacja<br>- Systemy przepływu laminarnego (UDAF/LAF) – C&amp;Q i rekwalifikacja<br>- Systemy barierowe (izolatory, RABS) – walidacja procesu i rekwalifikacja<br>- Urządzenia termostatyczne oraz strefy CRT/CCT – C&amp;Q i rekwalifikacja"
        },
        "card3": {
          "title": "Walidacja i kwalifikacja",
          "body": "- Kwalifikacja pomieszczeń czystych i systemów UDAF<br>- Kwalifikacja urządzeń laboratoryjnych i procesowych<br>- Realizacja FAT / SAT / DQ / IQ / OQ / PQ<br>- Strategia i planowanie walidacji<br>- Podejście oparte na ryzyku (ICH Q9)<br>- Rekwalifikacja i zarządzanie cyklem życia<br>- Izolatory i biodekontaminacja H₂O₂<br>- Rozwiązywanie problemów i optymalizacja systemów"
        },
        "csv": {
          "title": "Walidacja systemów skomputeryzowanych (CSV)",
          "body": "- Klasyfikacja GAMP 5 i ocena ryzyka<br>- URS / FS i macierz śledzenia wymagań (RTM)<br>- Protokoły IQ / OQ / PQ<br>- Audit trail i kontrola dostępu<br>- Backup / restore<br>- Integralność danych (ALCOA+)<br>- Zgodność z EU GMP Annex 11 i 21 CFR Part 11"
        },
        "card4": {
          "title": "Dokumentacja i zgodność jakościowa",
          "body": "- URS, SOP i dokumentacja walidacyjna<br>- Opracowanie i wdrażanie systemów zarządzania jakością (QMS)<br>- Odchylenia, CAPA, kontrola zmian<br>- Oceny ryzyka i wpływu<br>- Gotowość do audytów i inspekcji"
        },
        "card5": {
          "title": "Zarządzanie obiektami i mediami technicznymi",
          "body": "- Zarządzanie ryzykiem i budżetem inwestycyjnym (CAPEX)<br>- Systemy HVAC i monitoring środowiskowy<br>- Systemy BMS / FMS / EMS<br>- Systemy mediów technicznych (ogrzewanie, chłodzenie, woda, gazy)<br>- Zgodność z GMP i EU GMP Aneks 1"
        }
      },
      "experience": {
        "label": "Doświadczenie",
        "title": "Doświadczenie zawodowe",
        "item0": {
          "date": "08.2026 — obecnie",
          "role": "Inżynierka ds. walidacji i kwalifikacji CSV",
          "company": "Międzynarodowa firma farmaceutyczna · Dział Technicznego Zapewnienia Jakości",
          "body": "Walidacja systemów skomputeryzowanych w środowisku GMP zgodnie z GAMP 5 i EU GMP Annex 11 — od klasyfikacji systemu i oceny ryzyka, przez URS i macierz śledzenia wymagań (RTM), po protokoły IQ / OQ / PQ i przygotowanie dokumentacji do audytów. Wsparcie kwalifikacji systemów i urządzeń w ramach Technicznego Zapewnienia Jakości."
        },
        "item1": {
          "role": "Specjalistka ds. Kwalifikacji",
          "body": "Oprócz zarządzania pełnym cyklem kwalifikacji pomieszczeń czystych, stref o kontrolowanej temperaturze oraz urządzeń, prowadzę międzyzakładowy projekt standaryzacji procedur kwalifikacji i rekwalifikacji systemów HVAC, pomieszczeń czystych oraz urządzeń termostatycznych w zakładach Polpharma Biologics w Gdańsku i Warszawie."
        },
        "item2": {
          "role": "Inżynierka Procesowa w Projekcie Zakładu API",
          "body": "Jako właścicielka pakietu prac (Work Package Owner) odpowiadałam za systemy HVAC, BMS, EMS, FMS, magazyny chłodnicze oraz pomieszczenia czyste w projekcie Recovery, w tym za przegląd projektu, wybór dostawców, negocjacje umów, koordynację wykonawców oraz przygotowanie list VPL, zapewniając zgodność z wymaganiami GMP i EU GMP Aneks 1."
        },
        "item3": {
          "role": "Inżynierka Procesowa ds. Rozwoju Cykli",
          "body": "Jako konsultantka międzynarodowa w projekcie Optima, odpowiadałam za opracowanie i przeprowadzenie walidacji cykli biodekontaminacji linii izolatorów oraz systemów H2O2 dla technologii pomieszczeń czystych, wspierając klientów farmaceutycznych w Chinach, Włoszech, USA, Danii, Niemczech i Szwajcarii."
        },
        "item4": {
          "role": "Specjalistka ds. Walidacji",
          "body": "Konsultantka wspierająca opracowanie i wdrażanie systemów zarządzania jakością (QMS) zgodnych z normami ISO. Opracowywanie dokumentacji kwalifikacyjnej (DQ/IQ/OQ/PQ) dla pomieszczeń czystych, stref chłodniczych oraz urządzeń procesowych."
        },
        "item5": {
          "role": "Specjalistka ds. Systemów HVAC",
          "body": "Odpowiedzialna za zarządzanie systemami obiektowymi w 7 budynkach, obejmującymi obszary produkcyjne, laboratoria, magazyny i biura. Zakres obowiązków obejmował nadzór nad utrzymaniem ruchu, działania kwalifikacyjne oraz wdrażanie CAPA."
        },
        "item6": {
          "role": "Projektantka Instalacji Sanitarnych",
          "body": "Odpowiedzialna za projekty koncepcyjne, budowlane i wykonawcze systemów HVAC dla projektów remontowych szpitali, w tym pomiary przepływu powietrza i regulację parametrów wentylacji."
        },
        "item7": {
          "role": "Inżynierka Sprzedaży",
          "body": "Inżynierka sprzedaży odpowiedzialna za dobór urządzeń chłodniczych oraz prowadzenie komunikacji technicznej z klientami i producentami międzynarodowymi."
        },
        "item8": {
          "role": "Asystentka Projektanta",
          "body": "Wsparcie projektowania systemów HVAC i mediów technicznych dla dużych projektów komercyjnych: Bloomberg Palace w Londynie, Norway House w Warszawie oraz Browary Warszawskie w Warszawie."
        }
      },
      "tags": {
        "Pharma": "Farmacja",
        "Cold_Storage": "Magazyny chłodnicze",
        "Isolator": "Izolatory",
        "Bio_Decontamination": "Biodekontaminacja",
        "Supervision": "Nadzór",
        "Construction_Lead": "Kierowanie budową",
        "Designer": "Projektant",
        "Hospitals": "Szpitale",
        "Sales": "Sprzedaż",
        "Refrigeration_Equipment": "Urządzenia chłodnicze",
        "HVAC_Utilities": "Media HVAC",
        "Project_Lifecycle": "Cykl życia projektu"
      },
      "contact": {
        "label": "Kontakt",
        "title": "Pracujmy razem.",
        "body": "Dostępna do projektów czasowych, długoterminowych kontraktów oraz bieżącego wsparcia walidacyjnego. Napisz, aby omówić potrzeby Twojego obiektu albo dobrać kurs do Twojej pracy.",
        "emailLink": "Napisz do mnie e-mail",
        "linkedinLink": "Połącz się ze mną na LinkedIn",
        "formName": "Imię i nazwisko",
        "formNamePlaceholder": "Twoje imię i nazwisko",
        "formEmail": "E-mail",
        "formEmailPlaceholder": "twoj@email.com",
        "formCourse": "Kurs (opcjonalnie)",
        "courseNone": "— zapytanie ogólne —",
        "groupFull": "Kursy pełne",
        "groupSpec": "Kursy specjalistyczne",
        "groupClean": "Ścieżka: Cleanroom i komory UDAF / BSC",
        "groupMap": "Ścieżka: Mapowanie temperatury",
        "formMessage": "Wiadomość",
        "formMessagePlaceholder": "Opowiedz mi o swoim projekcie...",
        "sendBtn": "Wyślij wiadomość",
        "privacyNote": "Administratorem Twoich danych jest Katarzyna Szkodzińska (K8 Validate). Dane z formularza wykorzystam wyłącznie do odpowiedzi na Twoje zapytanie. Szczegóły: <a href=\"polityka-prywatnosci.html\">Polityka prywatności</a>.",
        "alertFill": "Proszę wypełnić imię, e-mail i wiadomość.",
        "subjectPrefix": "Zapytanie od ",
        "subjectCourse": "Kurs: "
      }
    }
  },
  "en": {
    "common": {
      "brand_sub": "Validation Academy · GMP validation & qualification",
      "nav": {
        "akademia": "Validation Academy",
        "akademia_cleanroom": "Cleanrooms and UDAF / Class II BSC",
        "akademia_mapping": "Temperature Mapping",
        "casestudies": "Case Studies",
        "about": "About",
        "experience": "Experience",
        "contact": "Contact"
      },
      "footer": "© 2026 K8 Validate · Katarzyna Szkodzińska. All rights reserved.",
      "privacy": "Privacy Policy"
    },
    "index": {
      "hero": {
        "tag": "GMP · Cleanrooms · UDAF / Class II BSC · Isolators · Temperature mapping · CSV",
        "lead": "Validation and qualification in GMP — so your decision holds up to an inspector’s questions.",
        "sub": "Practical Validation Academy courses and project support: cleanrooms, UDAF / Class II BSC, isolators, temperature mapping and computerised system validation.",
        "badges": "9+ years in GMP&nbsp;&nbsp;|&nbsp;&nbsp;projects in 6 countries&nbsp;&nbsp;|&nbsp;&nbsp;risk-based approach",
        "btnAcademy": "Validation Academy →",
        "btnContact": "Get in touch"
      },
      "whoami": {
        "label": "Who I am",
        "role": "validation & qualification expert",
        "text": "Author of the Validation Academy. I qualify cleanrooms, UDAF / Class II BSC cabinets, isolators and temperature-controlled equipment, and I validate computerised systems.",
        "btn": "About me"
      },
      "about": {
        "label": "About me",
        "title": "Precision in every protocol",
        "p1": "I am a validation and qualification specialist with more than 9 years of experience in GMP environments — across the pharmaceutical, biotechnology and medical device industries.",
        "p2": "I run the full qualification lifecycle — cleanrooms, HVAC systems, UDAF / Class II BSC equipment, isolators, and temperature-controlled equipment and areas — from design through DQ / IQ / OQ / PQ to requalification.",
        "p3": "I also validate computerised systems (CSV) in line with GAMP 5, EU GMP Annex 11 and 21 CFR Part 11 — from risk assessment and URS, through the requirements traceability matrix, to IQ / OQ / PQ protocols and data integrity.",
        "p4": "I combine hands-on validation with an engineering background in HVAC, BMS and critical utilities. I have worked on projects in Europe, the USA and Asia.",
        "p5": "In the Validation Academy I share this experience: not just how to perform a test, but how to make a decision and defend it in front of an inspector.",
        "learnMore": "Learn more",
        "stat1Label": "years in GMP",
        "stat2Label": "completed projects",
        "stat3Label": "countries with project experience"
      },
      "expertise": {
        "label": "Expertise",
        "title": "What I offer:",
        "card1": {
          "title": "Measurements & tests",
          "body": "- Airflow velocity measurements (UDAF / LAF)<br>- Air change rate (ACH) measurements – HVAC systems<br>- HEPA filter integrity testing (leak testing)<br>- Air cleanliness testing (particle counting)<br>- Differential pressure measurements (pressure cascade)<br>- Temperature &amp; humidity mapping (thermal studies)<br>- Airflow visualization (smoke studies)<br>- Cleanroom recovery testing"
        },
        "card2": {
          "title": "Training & workshops",
          "body": "- Cleanrooms (HVAC) – C&amp;Q and requalification<br>- Laminar airflow systems (UDAF/LAF) – C&amp;Q and requalification<br>- Barrier systems (isolators, RABS) – process validation and requalification<br>- Thermostatic equipment &amp; CRT/CCT areas – C&amp;Q and requalification"
        },
        "card3": {
          "title": "Validation & qualification",
          "body": "- Cleanrooms and UDAF systems qualification<br>- Laboratory and process equipment qualification<br>- Execution of FAT / SAT / DQ / IQ / OQ / PQ<br>- Validation strategy and planning<br>- Risk-based approach (ICH Q9)<br>- Requalification and lifecycle management<br>- Isolators and H₂O₂ bio-decontamination<br>- Troubleshooting and system optimization"
        },
        "csv": {
          "title": "Computerised System Validation (CSV)",
          "body": "- GAMP 5 classification and risk assessment<br>- URS / FS and requirements traceability matrix (RTM)<br>- IQ / OQ / PQ protocols<br>- Audit trail and access control<br>- Backup / restore<br>- Data integrity (ALCOA+)<br>- EU GMP Annex 11 and 21 CFR Part 11 compliance"
        },
        "card4": {
          "title": "Documentation & quality compliance",
          "body": "- URS, SOPs and validation documentation<br>- QMS development and implementation<br>- Deviations, CAPA, change control<br>- Risk &amp; impact assessments<br>- Audit and inspection readiness"
        },
        "card5": {
          "title": "Facilities & utilities management",
          "body": "- Risk and CAPEX management<br>- HVAC systems and environmental monitoring<br>- BMS / FMS / EMS systems<br>- Utility systems (heating, cooling, water, gases)<br>- GMP and EU GMP Annex 1 compliance"
        }
      },
      "experience": {
        "label": "Experience",
        "title": "Professional experience",
        "item0": {
          "date": "08.2026 — present",
          "role": "CSV Validation & Qualification Engineer",
          "company": "International pharmaceutical company · Technical Quality Assurance",
          "body": "Computerised system validation in a GMP environment in line with GAMP 5 and EU GMP Annex 11 — from system classification and risk assessment, through URS and the requirements traceability matrix (RTM), to IQ / OQ / PQ protocols and audit-ready documentation. Supporting system and equipment qualification within Technical Quality Assurance."
        },
        "item1": {
          "role": "Qualification Specialist",
          "body": "Alongside managing end-to-end qualification lifecycle activities for cleanrooms, controlled temperature areas and equipment, I lead a cross-site project standardizing qualification and requalification procedures for HVAC systems, cleanrooms and thermostatic equipment across Polpharma Biologics sites in Gdańsk and Warsaw."
        },
        "item2": {
          "role": "Associate Process Engineer in API Project Facility",
          "body": "As a Work Package Owner, I was responsible for HVAC, BMS, EMS, FMS, Cold Storage and cleanroom systems in Recovery project, including design review, supplier selection, contract negotiations, contractor coordination and VPL preparation, ensuring compliance with GMP and EU GMP Annex 1 requirements."
        },
        "item3": {
          "role": "Process Engineer for Cycle Development",
          "body": "As an international consultant during the Optima project, responsible for developing and performing bio-decontamination cycles validation of isolator lines and H2O2 systems for cleanroom technologies supporting pharmaceutical clients in China, Italy, USA, Denmark, Germany and Switzerland."
        },
        "item4": {
          "role": "Validation Specialist",
          "body": "Consultant supporting development and implementation of QMS systems in compliance with ISO standards. Developing qualification documentation (DQ/IQ/OQ/PQ) for cleanrooms, cold storage areas and process equipment."
        },
        "item5": {
          "role": "HVAC Systems Specialist",
          "body": "Responsible for managing facility systems across 7 buildings including production areas, laboratories, warehouses and offices. Scope included maintenance supervision, qualification activities and CAPA implementation."
        },
        "item6": {
          "role": "Sanitary Installation Designer",
          "body": "Responsible for conceptual, construction and detailed design of HVAC systems for hospital renovation projects, including airflow measurements and adjustment of ventilation parameters."
        },
        "item7": {
          "role": "Sales Engineer",
          "body": "Sales Engineer responsible for selection of refrigeration equipment and management of technical communication with international clients and manufacturers."
        },
        "item8": {
          "role": "Designer Assistant",
          "body": "Supporting design of HVAC and utilities systems for major commercial projects: Bloomberg Palace, London; Norway House, Warsaw; Browary Warszawskie, Warsaw."
        }
      },
      "tags": {
        "Pharma": "Pharma",
        "Cold_Storage": "Cold Storage",
        "Isolator": "Isolators",
        "Bio_Decontamination": "Bio Decontamination",
        "Supervision": "Supervision",
        "Construction_Lead": "Construction Lead",
        "Designer": "Designer",
        "Hospitals": "Hospitals",
        "Sales": "Sales",
        "Refrigeration_Equipment": "Refrigeration Equipment",
        "HVAC_Utilities": "HVAC Utilities",
        "Project_Lifecycle": "Project Lifecycle"
      },
      "contact": {
        "label": "Contact",
        "title": "Let’s work together.",
        "body": "Available for project-based engagements, long-term contracts and ongoing validation support. Get in touch to discuss your facility’s needs or to find the course that fits your work.",
        "emailLink": "Send me an e-mail",
        "linkedinLink": "Connect with me on LinkedIn",
        "formName": "Name",
        "formNamePlaceholder": "Your name",
        "formEmail": "Email",
        "formEmailPlaceholder": "your@email.com",
        "formCourse": "Course (optional)",
        "courseNone": "— general enquiry —",
        "groupFull": "Full courses",
        "groupSpec": "Specialist courses",
        "groupClean": "Path: Cleanrooms and UDAF / Class II BSC",
        "groupMap": "Path: Temperature Mapping",
        "formMessage": "Message",
        "formMessagePlaceholder": "Tell me about your project...",
        "sendBtn": "Send message",
        "privacyNote": "The controller of your data is Katarzyna Szkodzińska (K8 Validate). I will use the form data only to reply to your enquiry. Details: <a href=\"polityka-prywatnosci.html\">Privacy Policy</a>.",
        "alertFill": "Please fill in name, email and message.",
        "subjectPrefix": "Enquiry from ",
        "subjectCourse": "Course: "
      }
    }
  }
};

/* ---- Shared engine — do not duplicate per page ---- */

function i18nGet(lang, path) {
  return path.split('.').reduce(function (o, k) {
    return (o && o[k] !== undefined) ? o[k] : undefined;
  }, translations[lang]);
}

function applyLanguage(lang) {
  if (!translations[lang]) lang = 'pl';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const val = i18nGet(lang, el.getAttribute('data-i18n'));
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    const val = i18nGet(lang, el.getAttribute('data-i18n-html'));
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    const val = i18nGet(lang, el.getAttribute('data-i18n-placeholder'));
    if (val !== undefined) el.placeholder = val;
  });

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) toggleBtn.textContent = (lang === 'pl') ? 'EN' : 'PL';

  try { localStorage.setItem('k8-lang', lang); } catch (e) { /* ignore */ }
}

function initLangToggle() {
  let saved = 'pl';
  try { saved = localStorage.getItem('k8-lang') || 'pl'; } catch (e) { /* ignore */ }

  applyLanguage(saved);

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const current = (document.documentElement.lang === 'pl') ? 'pl' : 'en';
      applyLanguage(current === 'pl' ? 'en' : 'pl');
    });
  }
}

document.addEventListener('DOMContentLoaded', initLangToggle);
