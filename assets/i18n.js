/* ============================================
   K8 VALIDATE — i18n (Polish default / English toggle)
   assets/i18n.js

   HOW THIS WORKS
   - Polish text lives directly in each .html file (the "real"
     content, so the site is correct even if this script fails).
   - This file holds the matching PL + EN strings under the same
     keys as the data-i18n attributes in the HTML.
   - "common" holds text shared across every page (nav, footer).
   - "index", "about", "casestudies" hold page-specific text —
     add new page namespaces here as those pages get translated.
   ============================================ */

const translations = {
  pl: {
    common: {
      role: "Ekspert ds. Walidacji i Kwalifikacji",
      nav: {
        home: "Strona główna",
        about: "O mnie",
        expertise: "Kompetencje",
        experience: "Doświadczenie",
        casestudies: "Studia przypadków",
        contact: "Kontakt"
      },
      footer: "© 2026 Katarzyna Szkodzińska K8 Validate. Wszelkie prawa zastrzeżone."
    },
    index: {
      hero: {
        tag: "GMP • Media techniczne • Urządzenia • Obiekty",
        sub: "Kompleksowe rozwiązania w zakresie walidacji i kwalifikacji dla przemysłu farmaceutycznego i biotechnologicznego — od projektu po pełną zgodność z GMP.<br><br><strong>7+ lat doświadczenia&nbsp;&nbsp;|&nbsp;&nbsp;Projekty międzynarodowe&nbsp;&nbsp;|&nbsp;&nbsp;Podejście oparte na ryzyku</strong>",
        btnContact: "Skontaktuj się",
        btnExperience: "Zobacz doświadczenie"
      },
      about: {
        label: "O mnie",
        title: "Precyzja w każdym protokole:",
        p1: "Jestem specjalistką ds. walidacji i kwalifikacji z ponad 7-letnim doświadczeniem w środowisku farmaceutycznym i wyrobów medycznych.",
        p2: "Wspieram firmy w zapewnieniu zgodności pomieszczeń, mediów technicznych, urządzeń i procesów z wymaganiami GMP — od wczesnych etapów projektowania, przez uruchomienie i kwalifikację, aż po rekwalifikację.",
        p3: "Moje doświadczenie łączy praktyczną walidację techniczną z dogłębną znajomością systemów inżynieryjnych, w tym HVAC, BMS oraz mediów krytycznych.",
        p4: "Pracowałam przy międzynarodowych projektach w Europie, Stanach Zjednoczonych i Azji, dostarczając rozwiązania w złożonych, silnie regulowanych środowiskach.",
        learnMore: "Dowiedz się więcej",
        stat1Label: "Lat doświadczenia",
        stat2Label: "Zrealizowanych projektów",
        stat3Label: "Nieudanych audytów",
        stat4Label: "i zgodność GMP"
      },
      expertise: {
        label: "Kompetencje",
        title: "Co oferuję:",
        card1: {
          title: "Pomiary i szkolenia",
          body: "- Pomiary prędkości przepływu powietrza (UDAF / LAF)<br>- Pomiary krotności wymian powietrza (ACH) – systemy HVAC<br>- Testy szczelności filtrów HEPA (testy przecieku)<br>- Badania czystości powietrza (zliczanie cząstek)<br>- Pomiary różnicy ciśnień (kaskada ciśnień)<br>- Mapowanie temperatury i wilgotności (badania termiczne)<br>- Wizualizacja przepływu powietrza (testy dymowe)<br>- Testy powrotu do stanu równowagi pomieszczeń czystych"
        },
        card2: {
          title: "Warsztaty",
          body: "- Pomieszczenia czyste (HVAC) – C&amp;Q i rekwalifikacja<br>- Systemy przepływu laminarnego (UDAF/LAF) – C&amp;Q i rekwalifikacja<br>- Systemy barierowe (izolatory, RABS) – walidacja procesu i rekwalifikacja<br>- Urządzenia termostatyczne oraz strefy CRT/CTT – C&amp;Q i rekwalifikacja"
        },
        card3: {
          title: "Walidacja i kwalifikacja",
          body: "- Kwalifikacja pomieszczeń czystych i systemów UDAF<br>- Kwalifikacja urządzeń laboratoryjnych i procesowych<br>- Realizacja FAT / SAT / DQ / IQ / OQ / PQ<br>- Strategia i planowanie walidacji<br>- Podejście oparte na ryzyku (ICH Q9)<br>- Rekwalifikacja i zarządzanie cyklem życia<br>- Izolatory i biodekontaminacja H₂O₂<br>- Rozwiązywanie problemów i optymalizacja systemów"
        },
        card4: {
          title: "Dokumentacja i zgodność jakościowa",
          body: "- URS, SOP i dokumentacja walidacyjna<br>- Opracowanie i wdrażanie systemów zarządzania jakością (QMS)<br>- Odchylenia, CAPA, kontrola zmian<br>- Oceny ryzyka i wpływu<br>- Gotowość do audytów i inspekcji"
        },
        card5: {
          title: "Zarządzanie obiektami i mediami technicznymi",
          body: "- Zarządzanie ryzykiem i budżetem inwestycyjnym (CAPEX)<br>- Systemy HVAC i monitoring środowiskowy<br>- Systemy BMS / FMS / EMS<br>- Systemy mediów technicznych (ogrzewanie, chłodzenie, woda, gazy)<br>- Zgodność z GMP i EU GMP Aneks 1"
        }
      },
      experience: {
        label: "Doświadczenie",
        title: "Zrealizowane projekty:",
        item1: { role: "Specjalistka ds. Kwalifikacji", body: "Oprócz zarządzania pełnym cyklem kwalifikacji pomieszczeń czystych, stref o kontrolowanej temperaturze oraz urządzeń, prowadzę międzyzakładowy projekt standaryzacji procedur kwalifikacji i rekwalifikacji systemów HVAC, pomieszczeń czystych oraz urządzeń termostatycznych w zakładach Polpharma Biologics w Gdańsku i Warszawie." },
        item2: { role: "Inżynierka Procesowa w Projekcie Zakładu API", body: "Jako właścicielka pakietu prac (Work Package Owner) odpowiadałam za systemy HVAC, BMS, EMS, FMS, magazyny chłodnicze oraz pomieszczenia czyste w projekcie Recovery, w tym za przegląd projektu, wybór dostawców, negocjacje umów, koordynację wykonawców oraz przygotowanie list VPL, zapewniając zgodność z wymaganiami GMP i EU GMP Aneks 1." },
        item3: { role: "Inżynierka Procesowa ds. Rozwoju Cykli", body: "Jako konsultantka międzynarodowa w projekcie Optima, odpowiadałam za opracowanie i przeprowadzenie walidacji cykli biodekontaminacji linii izolatorów oraz systemów H2O2 dla technologii pomieszczeń czystych, wspierając klientów farmaceutycznych w Chinach, Włoszech, USA, Danii, Niemczech i Szwajcarii." },
        item4: { role: "Specjalistka ds. Walidacji", body: "Konsultantka wspierająca opracowanie i wdrażanie systemów zarządzania jakością (QMS) zgodnych z normami ISO. Opracowywanie dokumentacji kwalifikacyjnej (DQ/IQ/OQ/PQ) dla pomieszczeń czystych, stref chłodniczych oraz urządzeń procesowych." },
        item5: { role: "Specjalistka ds. Systemów HVAC", body: "Odpowiedzialna za zarządzanie systemami obiektowymi w 7 budynkach, obejmującymi obszary produkcyjne, laboratoria, magazyny i biura. Zakres obowiązków obejmował nadzór nad utrzymaniem ruchu, działania kwalifikacyjne oraz wdrażanie CAPA." },
        item6: { role: "Projektantka Instalacji Sanitarnych", body: "Odpowiedzialna za projekty koncepcyjne, budowlane i wykonawcze systemów HVAC dla projektów remontowych szpitali, w tym pomiary przepływu powietrza i regulację parametrów wentylacji." },
        item7: { role: "Inżynierka Sprzedaży", body: "Inżynierka sprzedaży odpowiedzialna za dobór urządzeń chłodniczych oraz prowadzenie komunikacji technicznej z klientami i producentami międzynarodowymi." },
        item8: { role: "Asystentka Projektanta", body: "Wsparcie projektowania systemów HVAC i mediów technicznych dla dużych projektów komercyjnych: Bloomberg Palace w Londynie, Norway House w Warszawie oraz Browary Warszawskie w Warszawie." }
      },
      contact: {
        label: "Kontakt",
        title: "Pracujmy razem.",
        body: "Dostępna do projektów czasowych, długoterminowych kontraktów oraz bieżącego wsparcia walidacyjnego. Skontaktuj się, aby omówić potrzeby Twojego obiektu.",
        emailLink: "Napisz do mnie e-mail",
        linkedinLink: "Połącz się ze mną na LinkedIn",
        formName: "Imię i nazwisko",
        formNamePlaceholder: "Twoje imię i nazwisko",
        formEmail: "E-mail",
        formEmailPlaceholder: "twoj@email.com",
        formMessage: "Wiadomość",
        formMessagePlaceholder: "Opowiedz mi o swoim projekcie...",
        sendBtn: "Wyślij wiadomość",
        alertFill: "Proszę wypełnić wszystkie pola.",
        subjectPrefix: "Zapytanie od "
      }
    }
  },

  en: {
    common: {
      role: "Validation & Qualification Expert",
      nav: {
        home: "Home",
        about: "About",
        expertise: "Expertise",
        experience: "Experience",
        casestudies: "Case Studies",
        contact: "Contact"
      },
      footer: "© 2026 Katarzyna Szkodzińska K8 Validate. All rights reserved."
    },
    index: {
      hero: {
        tag: "GMP • Utilities • Equipment • Facilities",
        sub: "Delivering end-to-end validation and qualification solutions across pharmaceutical and biotech industries — from design to full GMP compliance.<br><br><strong>7+ Years experience&nbsp;&nbsp;|&nbsp;&nbsp;International projects&nbsp;&nbsp;|&nbsp;&nbsp;Risk-based approach</strong>",
        btnContact: "Get in Touch",
        btnExperience: "View Experience"
      },
      about: {
        label: "About",
        title: "Precision in every protocol:",
        p1: "I am a Validation and Qualification Specialist with over 7 years of experience in pharmaceutical and medical device environments.",
        p2: "I support companies in ensuring that facilities, utilities, equipment, and processes meet GMP requirements — from early design stages through commissioning, qualification, and requalification.",
        p3: "My experience combines hands-on technical validation with a strong understanding of engineering systems, including HVAC, BMS, and critical utilities.",
        p4: "I have worked on international projects across Europe, the United States, and Asia, delivering solutions in complex, highly regulated environments.",
        learnMore: "Learn more",
        stat1Label: "Years Experience",
        stat2Label: "Projects Completed",
        stat3Label: "Failed Audits",
        stat4Label: "& GMP Compliant"
      },
      expertise: {
        label: "Expertise",
        title: "What I offer:",
        card1: {
          title: "Measurement & Training",
          body: "- Airflow velocity measurements (UDAF / LAF)<br>- Air change rate (ACH) measurements - HVAC systems<br>- HEPA filter integrity testing (leak testing)<br>- Air cleanliness testing (particle counting)<br>- Differential pressure measurements (pressure cascade)<br>- Temperature &amp; humidity mapping (thermal studies)<br>- Airflow visualization (smoke studies)<br>- Cleanroom recovery testing"
        },
        card2: {
          title: "Workshops",
          body: "- Cleanroom (HVAC) - C&amp;Q and Requalification<br>- Laminar airflow systems (UDAF/LAF) - C&amp;Q and Requalification<br>- Barrier systems (Isolators, RABS) - PV and Requalification<br>- Thermostatic equipment &amp; CRT/CTT areas - C&amp;Q and Requalification"
        },
        card3: {
          title: "Validation & Qualification",
          body: "- Cleanrooms and UDAF systems qualification<br>- Laboratory and process equipment qualification<br>- Execution of FAT / SAT / DQ / IQ / OQ / PQ<br>- Validation strategy and planning<br>- Risk-based approach (ICH Q9)<br>- Requalification and lifecycle management<br>- Isolators and H₂O₂ bio-decontamination<br>- Troubleshooting and system optimization"
        },
        card4: {
          title: "Documentation & Quality Compliance",
          body: "- URS, SOPs and validation documentation<br>- QMS development and implementation<br>- Deviations, CAPA, Change Control<br>- Risk &amp; Impact Assessments<br>- Audit and inspection readiness"
        },
        card5: {
          title: "Facilities & Utilities Management",
          body: "- Risk and CAPEX management<br>- HVAC systems and environmental monitoring<br>- BMS / FMS / EMS systems<br>- Utility systems (heating, cooling, water, gases)<br>- GMP and EU GMP Annex 1 compliance"
        }
      },
      experience: {
        label: "Experience",
        title: "Completed Projects:",
        item1: { role: "Qualification Specialist", body: "Alongside managing end-to-end qualification lifecycle activities for cleanrooms, controlled temperature areas and equipment, I lead a cross-site project standardizing qualification and requalification procedures for HVAC systems, cleanrooms and thermostatic equipment across Polpharma Biologics sites in Gdańsk and Warsaw." },
        item2: { role: "Associate Process Engineer in API Project Facility", body: "As a Work Package Owner, I was responsible for HVAC, BMS, EMS, FMS, Cold Storage and cleanroom systems in Recovery project, including design review, supplier selection, contract negotiations, contractor coordination and VPL preparation, ensuring compliance with GMP and EU GMP Annex 1 requirements." },
        item3: { role: "Process Engineer for Cycle Development", body: "As an international consultant during the Optima project, responsible for developing and performing bio-decontamination cycles validation of isolator lines and H2O2 systems for cleanroom technologies supporting pharmaceutical clients in China, Italy, USA, Denmark, Germany and Switzerland." },
        item4: { role: "Validation Specialist", body: "Consultant supporting development and implementation of QMS systems in compliance with ISO standards. Developing qualification documentation (DQ/IQ/OQ/PQ) for cleanrooms, cold storage areas and process equipment." },
        item5: { role: "HVAC Systems Specialist", body: "Responsible for managing facility systems across 7 buildings including production areas, laboratories, warehouses and offices. Scope included maintenance supervision, qualification activities and CAPA implementation." },
        item6: { role: "Sanitary Installation Designer", body: "Responsible for conceptual, construction and detailed design of HVAC systems for hospital renovation projects, including airflow measurements and adjustment of ventilation parameters." },
        item7: { role: "Sales Engineer", body: "Sales Engineer responsible for selection of refrigeration equipment and management of technical communication with international clients and manufacturers." },
        item8: { role: "Designer Assistant", body: "Supporting design of HVAC and utilities systems for major commercial projects: Bloomberg Palace, London; Norway House, Warsaw; Browary Warszawskie, Warsaw." }
      },
      contact: {
        label: "Contact",
        title: "Let's work together.",
        body: "Available for project-based engagements, long-term contracts, and ongoing validation support. Get in touch to discuss your facility's needs.",
        emailLink: "Send me an e-mail",
        linkedinLink: "Connect with me on LinkedIn",
        formName: "Name",
        formNamePlaceholder: "Your name",
        formEmail: "Email",
        formEmailPlaceholder: "your@email.com",
        formMessage: "Message",
        formMessagePlaceholder: "Tell me about your project...",
        sendBtn: "Send Message",
        alertFill: "Please fill in all fields.",
        subjectPrefix: "Enquiry from "
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
