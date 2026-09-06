// ==========================================================================
// Agil Azizov — Portfolio interactions
// ==========================================================================

/* ---------- i18n dictionary ----------
   Technical terms & proper nouns (Docker, Linux, REST API, Spring Boot,
   CI/CD, DevOps, company/project names) are intentionally left unchanged
   across all three languages. */
const I18N = {
  en: {
    "nav.about": "/about", "nav.experience": "/experience", "nav.skills": "/skills",
    "nav.projects": "/projects", "nav.education": "/education", "nav.contact": "/contact",
    "nav.talk": "Let's talk",
    "hero.pill": "Open to Cybersecurity &amp; IT Infrastructure roles",
    "hero.h1a": "Cybersecurity &amp; Systems Engineer,",
    "hero.h1b": "Linux, Networking &amp; Cloud.",
    "hero.desc": "I'm Agil Azizov, an IT infrastructure &amp; cybersecurity-focused engineer in Baku, Azerbaijan. I work across Linux &amp; Windows administration, networking, cloud and DevOps — securing systems and keeping them running — with a software engineering background in Java &amp; Spring Boot as freelance work on the side.",
    "hero.viewProjects": "View projects →",
    "hero.downloadResume": "Download résumé",
    "hero.stat1": "Years in IT &amp; Backend",
    "hero.stat2": "Systems &amp; services managed",
    "hero.stat3": "Developers mentored",
    "about.title": "Infrastructure first, code as a foundation.",
    "about.p1": "I'm an <strong>IT Infrastructure &amp; Cybersecurity-focused engineer</strong> based in Baku, Azerbaijan, currently working as a <strong>DevOps Engineer</strong> at <strong>QRAVAN</strong> and previously as an <strong>IT Infrastructure &amp; System Administration Specialist</strong> at <strong>Brain Solutions</strong>. My day-to-day centers on <strong>Linux &amp; Windows administration</strong>, <strong>networking</strong> (TCP/IP, DNS, DHCP, SSH, VPN), <strong>cloud &amp; DevOps</strong> tooling, and applying <strong>cybersecurity fundamentals</strong> to keep systems reliable and secure.",
    "about.p2": "Before moving into infrastructure and security, I spent several years as a <strong>backend software engineer</strong>, building REST APIs and services in <strong>Java</strong> and <strong>Spring Boot</strong>. I still take on freelance backend work, and that engineering background now shapes how I approach systems: I understand the applications running on the infrastructure I manage, not just the infrastructure itself.",
    "about.p3": "I've also spent time mentoring junior developers and teaching backend fundamentals — a habit that carries over into how I document systems, write runbooks, and make infrastructure easy for a team to actually operate.",
    "about.fact.location.k": "LOCATION",
    "about.fact.focus.k": "FOCUS", "about.fact.focus.v": "Linux · Networking · Cloud · Cybersecurity",
    "about.fact.currently.k": "CURRENTLY", "about.fact.currently.v": "DevOps Engineer @ QRAVAN",
    "about.fact.education.k": "EDUCATION", "about.fact.education.v": "M.Sc. Cryptography, Azerbaijan Technical University",
    "about.fact.also.k": "ALSO DOES", "about.fact.also.v": "Freelance backend engineering (Java/Spring Boot)",
    "about.fact.avail.k": "AVAILABILITY", "about.fact.avail.v": "Open to new opportunities",
    "exp.title": "Where I've worked",
    "exp.sub": "A chronological log of roles across IT infrastructure, DevOps, cybersecurity and backend engineering.",
    "exp.qravan.desc": "Remote",
    "exp.qravan.b1": "Containerized 4 backend services using Docker and Docker Compose, cutting local environment setup time from a full day to under an hour.",
    "exp.qravan.b2": "Configured and maintained CI/CD pipelines, reducing deployment time from 10 minutes to 2 minutes.",
    "exp.qravan.b3": "Supported containerized deployment workflows for a freelance client project, improving release reliability.",
    "exp.brain.role": "IT Infrastructure &amp; System Administration Specialist",
    "exp.brain.desc": "On-site · Baku, Azerbaijan",
    "exp.brain.b1": "Managed and maintained Linux and Windows systems, handling user accounts, permissions, services and system troubleshooting.",
    "exp.brain.b2": "Configured and maintained network services including TCP/IP, DNS, DHCP, SSH and VPN to ensure reliable system connectivity.",
    "exp.brain.b3": "Automated routine administrative tasks using Bash and Python scripting, improving operational efficiency and reducing manual work.",
    "exp.freelance.role": "Freelance Software Engineer / Backend Developer",
    "exp.freelance.desc": "Part-time &amp; freelance · Baku, Azerbaijan · Otogo LLC · Desinftec LLC · Developia Engineering Academy · Design and Information Technologies Club",
    "exp.freelance.b1": "Built and maintained REST APIs and backend services in Java &amp; Spring Boot across several freelance and part-time engagements, including 35+ endpoints shipped for production platforms.",
    "exp.freelance.b2": "Implemented JWT-based authentication and role-based authorization, secured APIs for 500+ active users, and optimized response times by ~30% through query tuning and caching.",
    "exp.freelance.b3": "Delivered backend development training and mentored 30+ junior developers, with 85% successfully completing the program.",
    "skills.title": "Toolkit",
    "skills.sub": "Grouped by where each tool sits in the stack — not a percentage in sight.",
    "skills.os": "Operating Systems", "skills.sysadmin": "System Administration", "skills.networking": "Networking",
    "skills.cloud": "Cloud &amp; DevOps", "skills.security": "Cybersecurity", "skills.backend": "Backend &amp; Scripting",
    "lang.az": "Azerbaijani", "lang.en": "English", "lang.ru": "Russian",
    "lang.native": "NATIVE", "lang.upperint": "UPPER-INT",
    "projects.title": "Selected work",
    "projects.sub": "Live products and internal systems I've built and deployed the backend and infrastructure for.",
    "status.dev": "In development", "status.prod": "In production",
    "meta.role": "Role", "meta.stack": "Stack", "meta.outcome": "Outcome", "meta.timeline": "Timeline",
    "visitSite": "Visit site →",
    "proj.karier.role": "Career platform · job seekers &amp; employers",
    "proj.karier.desc": "A career platform connecting job seekers with employers across Azerbaijan. I build and maintain the backend services and deployment setup behind profiles, listings and applications, exposed through REST endpoints consumed by the web client.",
    "proj.karier.metaRole": "Backend &amp; deployment",
    "proj.karier.outcome": "Live platform in active use",
    "proj.otogo.role": "B2B mobile platform · car services marketplace",
    "proj.otogo.desc": "A mobile platform connecting car service providers with businesses across Azerbaijan. I containerized the backend with Docker, set up the deployment workflow, and maintain the services that power provider onboarding, service listings and booking flows across 20+ REST endpoints.",
    "proj.otogo.metaRole": "Backend &amp; DevOps",
    "proj.otogo.outcome": "20+ endpoints in active production use",
    "proj.azcon.role": "Construction pricing &amp; cost-calculation platform",
    "proj.azcon.desc": "A platform for comparing and calculating construction material and service prices, connecting users with suppliers and professionals across Azerbaijan. I built the backend and set up the environment powering price calculations and supplier/user data.",
    "proj.azcon.metaRole": "Backend build",
    "proj.eracon.role": "Internal management system for a construction company",
    "proj.eracon.desc": "A web-based internal management system built for a construction company to streamline day-to-day operations, built and deployed end-to-end in about a week from schema to production.",
    "proj.eracon.metaRole": "Backend build",
    "proj.qravan.role": "Discount &amp; cashback app · QR-based partner rewards",
    "proj.qravanproj.desc": "A discount and cashback app where users scan QR codes at partner locations across Azerbaijan for daily discounts and loyalty rewards. I containerized backend services with Docker and Docker Compose and built the CI/CD pipeline behind the platform, cutting deployment time from 10 minutes to 2.",
    "proj.qravanproj.metaRole": "DevOps",
    "edu.title": "Education", "edu.specialization": "Specialization: Cryptography", "edu.bsc": "B.Sc. Computer Science",
    "cert.title": "Certifications", "cert.javabasic": "Java (Basic)", "cert.sqlbasic": "SQL (Basic)",
    "cert.backend": "Backend Development, Certificate of Completion",
    "contact.title": "Let's secure and build something that stays up at 3am without paging you.",
    "contact.sub": "Open to IT infrastructure, DevOps and cybersecurity roles, plus freelance backend projects. Reach out directly — I read everything myself.",
    "contact.send": "Send an email →",
    "footer.text": "© 2026 Agil Azizov. Built with a Linux brain, secured like production.",
  },
  az: {
    "nav.about": "/haqqımda", "nav.experience": "/təcrübə", "nav.skills": "/bacarıqlar",
    "nav.projects": "/layihələr", "nav.education": "/təhsil", "nav.contact": "/əlaqə",
    "nav.talk": "Əlaqə saxla",
    "hero.pill": "Kibertəhlükəsizlik &amp; IT İnfrastruktur vakansiyalarına açığam",
    "hero.h1a": "Kibertəhlükəsizlik &amp; Sistem Mühəndisi,",
    "hero.h1b": "Linux, Şəbəkə &amp; Cloud.",
    "hero.desc": "Mən Agil Əzizovam, Bakı, Azərbaycanda IT infrastrukturu və kibertəhlükəsizliyə fokuslanmış mühəndisəm. Linux &amp; Windows administrasiyası, şəbəkə, cloud və DevOps sahələrində çalışıram — sistemləri təhlükəsiz saxlayıram və işlək vəziyyətdə saxlayıram — əlavə olaraq Java &amp; Spring Boot üzrə freelance backend işləri görürəm.",
    "hero.viewProjects": "Layihələrə bax →",
    "hero.downloadResume": "Rezümeni yüklə",
    "hero.stat1": "İl IT &amp; Backend təcrübəsi",
    "hero.stat2": "İdarə olunan sistem &amp; xidmət",
    "hero.stat3": "Mentorluq edilən developer",
    "about.title": "Əvvəlcə infrastruktur, təməl kimi kod.",
    "about.p1": "Mən Bakı, Azərbaycanda yerləşən <strong>IT İnfrastruktur &amp; Kibertəhlükəsizlik yönümlü mühəndisəm</strong>, hazırda <strong>QRAVAN</strong>-da <strong>DevOps Mühəndisi</strong>, əvvəllər isə <strong>Brain Solutions</strong>-da <strong>IT İnfrastruktur &amp; Sistem Administrasiyası Mütəxəssisi</strong> kimi çalışmışam. Gündəlik işim <strong>Linux &amp; Windows administrasiyası</strong>, <strong>şəbəkə</strong> (TCP/IP, DNS, DHCP, SSH, VPN), <strong>cloud &amp; DevOps</strong> alətləri və sistemləri etibarlı və təhlükəsiz saxlamaq üçün <strong>kibertəhlükəsizlik əsaslarının</strong> tətbiqi üzərində qurulub.",
    "about.p2": "İnfrastruktur və təhlükəsizliyə keçməzdən əvvəl bir neçə il <strong>backend proqram mühəndisi</strong> kimi çalışmışam, <strong>Java</strong> və <strong>Spring Boot</strong> ilə REST API-lər və xidmətlər qurmuşam. Hələ də freelance backend işləri götürürəm və bu mühəndislik təcrübəsi sistemlərə yanaşmamı formalaşdırır: idarə etdiyim infrastrukturda işləyən tətbiqləri də anlayıram, təkcə infrastrukturun özünü yox.",
    "about.p3": "Həmçinin junior developerlərə mentorluq etmiş və backend əsaslarını tədris etmişəm — bu vərdiş sistemləri necə sənədləşdirdiyimə, runbook yazmağıma və infrastrukturu komanda üçün əməliyyata rahat etməyimə də sirayət edir.",
    "about.fact.location.k": "YERLƏŞMƏ",
    "about.fact.focus.k": "FOKUS", "about.fact.focus.v": "Linux · Şəbəkə · Cloud · Kibertəhlükəsizlik",
    "about.fact.currently.k": "HAZIRDA", "about.fact.currently.v": "DevOps Mühəndisi @ QRAVAN",
    "about.fact.education.k": "TƏHSİL", "about.fact.education.v": "Kriptoqrafiya üzrə magistr, Azərbaycan Texniki Universiteti",
    "about.fact.also.k": "HƏMÇİNİN", "about.fact.also.v": "Freelance backend mühəndisliyi (Java/Spring Boot)",
    "about.fact.avail.k": "MÖVCUDLUQ", "about.fact.avail.v": "Yeni imkanlara açığam",
    "exp.title": "Harada işləmişəm",
    "exp.sub": "IT infrastrukturu, DevOps, kibertəhlükəsizlik və backend mühəndisliyi üzrə xronoloji iş tarixçəsi.",
    "exp.qravan.desc": "Uzaqdan",
    "exp.qravan.b1": "Docker və Docker Compose istifadə edərək 4 backend xidmətini konteynerləşdirdim, lokal mühit quruluşunu tam gündən 1 saatdan azına endirdim.",
    "exp.qravan.b2": "CI/CD proseslərini qurdum və saxladım, deployment müddətini 10 dəqiqədən 2 dəqiqəyə endirdim.",
    "exp.qravan.b3": "Freelance müştəri layihəsi üçün konteynerləşdirilmiş deployment iş axınlarını dəstəklədim, buraxılışın etibarlılığını artırdım.",
    "exp.brain.role": "IT İnfrastruktur &amp; Sistem Administrasiyası Mütəxəssisi",
    "exp.brain.desc": "Ofisdə · Bakı, Azərbaycan",
    "exp.brain.b1": "Linux və Windows sistemlərini idarə etdim və saxladım, istifadəçi hesabları, icazələr, xidmətlər və sistem nasazlıqlarının aradan qaldırılması ilə məşğul oldum.",
    "exp.brain.b2": "Etibarlı sistem əlaqəsi üçün TCP/IP, DNS, DHCP, SSH və VPN daxil olmaqla şəbəkə xidmətlərini qurdum və saxladım.",
    "exp.brain.b3": "Bash və Python skriptləşdirməsi ilə adi inzibati tapşırıqları avtomatlaşdırdım, əməliyyat effektivliyini artırdım və əl işini azaltdım.",
    "exp.freelance.role": "Freelance Proqram Mühəndisi / Backend Developer",
    "exp.freelance.desc": "Yarımştat &amp; freelance · Bakı, Azərbaycan · Otogo LLC · Desinftec LLC · Developia Engineering Academy · Design and Information Technologies Club",
    "exp.freelance.b1": "Bir neçə freelance və yarımştat layihədə Java &amp; Spring Boot ilə REST API-lər və backend xidmətləri qurdum və saxladım, o cümlədən istehsalat platformaları üçün 35+ endpoint təqdim etdim.",
    "exp.freelance.b2": "JWT əsaslı autentifikasiya və rol əsaslı avtorizasiya tətbiq etdim, 500+ aktiv istifadəçi üçün API-ləri qorudum və sorğu tənzimləməsi ilə keşləmə vasitəsilə cavab müddətini ~30% optimallaşdırdım.",
    "exp.freelance.b3": "Backend inkişafı üzrə təlim keçdim və 30+ junior developerə mentorluq etdim, onların 85%-i proqramı uğurla tamamladı.",
    "skills.title": "Alət dəsti",
    "skills.sub": "Hər alət stəkdə harada olduğuna görə qruplaşdırılıb — heç bir faiz göstərilmir.",
    "skills.os": "Əməliyyat Sistemləri", "skills.sysadmin": "Sistem Administrasiyası", "skills.networking": "Şəbəkə",
    "skills.cloud": "Cloud &amp; DevOps", "skills.security": "Kibertəhlükəsizlik", "skills.backend": "Backend &amp; Skript",
    "lang.az": "Azərbaycan dili", "lang.en": "İngilis dili", "lang.ru": "Rus dili",
    "lang.native": "ANA DİLİ", "lang.upperint": "YUXARI-ORTA",
    "projects.title": "Seçilmiş işlər",
    "projects.sub": "Backend və infrastrukturunu qurub deploy etdiyim canlı məhsullar və daxili sistemlər.",
    "status.dev": "İnkişafda", "status.prod": "İstehsalatda",
    "meta.role": "Rol", "meta.stack": "Stek", "meta.outcome": "Nəticə", "meta.timeline": "Müddət",
    "visitSite": "Sayta bax →",
    "proj.karier.role": "Karyera platforması · iş axtaranlar &amp; işəgötürənlər",
    "proj.karier.desc": "Azərbaycan üzrə iş axtaranları işəgötürənlərlə birləşdirən karyera platforması. Profillər, elanlar və müraciətlərin arxasındakı backend xidmətlərini və deployment qurulumunu qururam və saxlayıram, veb müştəri tərəfindən istifadə olunan REST endpoint-ləri vasitəsilə.",
    "proj.karier.metaRole": "Backend &amp; deployment",
    "proj.karier.outcome": "Aktiv istifadədə olan canlı platforma",
    "proj.otogo.role": "B2B mobil platforma · avtomobil xidmətləri marketpleysi",
    "proj.otogo.desc": "Azərbaycan üzrə avtomobil xidməti təminatçılarını bizneslərlə birləşdirən mobil platforma. Backend-i Docker ilə konteynerləşdirdim, deployment iş axınını qurdum və provider onboarding, xidmət siyahıları və rezervasiya axınlarını 20+ REST endpoint üzərindən idarə edən xidmətləri saxlayıram.",
    "proj.otogo.metaRole": "Backend &amp; DevOps",
    "proj.otogo.outcome": "20+ endpoint aktiv istehsalat istifadəsində",
    "proj.azcon.role": "Tikinti qiymətləndirmə &amp; hesablama platforması",
    "proj.azcon.desc": "Azərbaycan üzrə istifadəçiləri təchizatçılar və mütəxəssislərlə birləşdirərək tikinti materialı və xidmət qiymətlərini müqayisə edən və hesablayan platforma. Qiymət hesablamaları və təchizatçı/istifadəçi məlumatlarını idarə edən backend-i qurdum və mühiti hazırladım.",
    "proj.azcon.metaRole": "Backend qurulması",
    "proj.eracon.role": "Tikinti şirkəti üçün daxili idarəetmə sistemi",
    "proj.eracon.desc": "Gündəlik əməliyyatları sadələşdirmək üçün bir tikinti şirkəti üçün qurulmuş veb əsaslı daxili idarəetmə sistemi, sxemdən istehsalata qədər təxminən bir həftəyə qurulub və deploy edilib.",
    "proj.eracon.metaRole": "Backend qurulması",
    "proj.qravan.role": "Endirim &amp; keşbek tətbiqi · QR əsaslı partnyor mükafatları",
    "proj.qravanproj.desc": "İstifadəçilərin gündəlik endirimlər və loyallıq mükafatları üçün Azərbaycan üzrə partnyor məkanlarında QR kodları skan etdiyi endirim və keşbek tətbiqi. Backend xidmətlərini Docker və Docker Compose ilə konteynerləşdirdim və platformanın arxasındakı CI/CD prosesini qurdum, deployment müddətini 10 dəqiqədən 2 dəqiqəyə endirdim.",
    "proj.qravanproj.metaRole": "DevOps",
    "edu.title": "Təhsil", "edu.specialization": "İxtisas: Kriptoqrafiya", "edu.bsc": "Kompüter Elmləri üzrə bakalavr",
    "cert.title": "Sertifikatlar", "cert.javabasic": "Java (Əsas)", "cert.sqlbasic": "SQL (Əsas)",
    "cert.backend": "Backend İnkişafı, Bitirmə Sertifikatı",
    "contact.title": "Gəlin sizi 3-də oyatmadan işlək qalan bir şey qoruyaq və quraq.",
    "contact.sub": "IT infrastrukturu, DevOps və kibertəhlükəsizlik vakansiyalarına, həmçinin freelance backend layihələrinə açığam. Birbaşa yazın — hər şeyi özüm oxuyuram.",
    "contact.send": "E-poçt göndər →",
    "footer.text": "© 2026 Agil Əzizov. Linux beyni ilə qurulub, istehsalat kimi qorunub.",
  },
  ru: {
    "nav.about": "/обо-мне", "nav.experience": "/опыт", "nav.skills": "/навыки",
    "nav.projects": "/проекты", "nav.education": "/образование", "nav.contact": "/контакты",
    "nav.talk": "Связаться",
    "hero.pill": "Открыт к вакансиям в кибербезопасности и IT-инфраструктуре",
    "hero.h1a": "Инженер по кибербезопасности и системам,",
    "hero.h1b": "Linux, сети и Cloud.",
    "hero.desc": "Я Агиль Азизов, инженер из Баку, Азербайджан, специализирующийся на IT-инфраструктуре и кибербезопасности. Работаю с администрированием Linux &amp; Windows, сетями, cloud и DevOps — обеспечиваю безопасность систем и их бесперебойную работу — а также веду фриланс-проекты по backend-разработке на Java &amp; Spring Boot.",
    "hero.viewProjects": "Смотреть проекты →",
    "hero.downloadResume": "Скачать резюме",
    "hero.stat1": "Года в IT &amp; Backend",
    "hero.stat2": "Систем и сервисов под управлением",
    "hero.stat3": "Разработчиков под менторством",
    "about.title": "Сначала инфраструктура, код как основа.",
    "about.p1": "Я <strong>инженер, ориентированный на IT-инфраструктуру и кибербезопасность</strong>, живу в Баку, Азербайджан, сейчас работаю <strong>DevOps-инженером</strong> в <strong>QRAVAN</strong>, ранее — <strong>специалистом по IT-инфраструктуре и системному администрированию</strong> в <strong>Brain Solutions</strong>. Моя повседневная работа — это <strong>администрирование Linux &amp; Windows</strong>, <strong>сети</strong> (TCP/IP, DNS, DHCP, SSH, VPN), инструменты <strong>cloud &amp; DevOps</strong> и применение <strong>основ кибербезопасности</strong> для надёжности и защищённости систем.",
    "about.p2": "До перехода в инфраструктуру и безопасность я несколько лет проработал <strong>backend-инженером</strong>, создавая REST API и сервисы на <strong>Java</strong> и <strong>Spring Boot</strong>. Я до сих пор беру фриланс-проекты по backend, и этот инженерный опыт формирует мой подход к системам: я понимаю приложения, работающие на инфраструктуре, которой управляю, а не только саму инфраструктуру.",
    "about.p3": "Также я занимался менторством junior-разработчиков и преподавал основы backend-разработки — эта привычка сказывается на том, как я документирую системы, пишу runbook-и и делаю инфраструктуру удобной для эксплуатации командой.",
    "about.fact.location.k": "ЛОКАЦИЯ",
    "about.fact.focus.k": "ФОКУС", "about.fact.focus.v": "Linux · Сети · Cloud · Кибербезопасность",
    "about.fact.currently.k": "СЕЙЧАС", "about.fact.currently.v": "DevOps-инженер @ QRAVAN",
    "about.fact.education.k": "ОБРАЗОВАНИЕ", "about.fact.education.v": "Магистр по криптографии, Azerbaijan Technical University",
    "about.fact.also.k": "ТАКЖЕ", "about.fact.also.v": "Фриланс backend-разработка (Java/Spring Boot)",
    "about.fact.avail.k": "ДОСТУПНОСТЬ", "about.fact.avail.v": "Открыт новым предложениям",
    "exp.title": "Где я работал",
    "exp.sub": "Хронология ролей в IT-инфраструктуре, DevOps, кибербезопасности и backend-разработке.",
    "exp.qravan.desc": "Удалённо",
    "exp.qravan.b1": "Контейнеризировал 4 backend-сервиса с помощью Docker и Docker Compose, сократив настройку локального окружения с целого дня до менее часа.",
    "exp.qravan.b2": "Настроил и поддерживал CI/CD пайплайны, сократив время деплоя с 10 минут до 2 минут.",
    "exp.qravan.b3": "Поддерживал контейнеризированные процессы деплоя для фриланс-проекта клиента, повышая надёжность релизов.",
    "exp.brain.role": "Специалист по IT-инфраструктуре и системному администрированию",
    "exp.brain.desc": "В офисе · Баку, Азербайджан",
    "exp.brain.b1": "Управлял и поддерживал системы Linux и Windows, включая учётные записи пользователей, права доступа, сервисы и устранение неполадок.",
    "exp.brain.b2": "Настраивал и поддерживал сетевые сервисы, включая TCP/IP, DNS, DHCP, SSH и VPN, для надёжной связи систем.",
    "exp.brain.b3": "Автоматизировал рутинные административные задачи с помощью Bash и Python, повышая эффективность и сокращая ручной труд.",
    "exp.freelance.role": "Фриланс-инженер / Backend-разработчик",
    "exp.freelance.desc": "Частичная занятость &amp; фриланс · Баку, Азербайджан · Otogo LLC · Desinftec LLC · Developia Engineering Academy · Design and Information Technologies Club",
    "exp.freelance.b1": "Создавал и поддерживал REST API и backend-сервисы на Java &amp; Spring Boot в рамках нескольких фриланс- и частичных проектов, включая 35+ эндпоинтов для продакшн-платформ.",
    "exp.freelance.b2": "Реализовал JWT-аутентификацию и ролевую авторизацию, защитил API для 500+ активных пользователей, оптимизировал время отклика на ~30% за счёт тюнинга запросов и кеширования.",
    "exp.freelance.b3": "Проводил обучение по backend-разработке и менторил 30+ junior-разработчиков, 85% из которых успешно завершили программу.",
    "skills.title": "Инструментарий",
    "skills.sub": "Сгруппировано по месту в стеке — без единого процента.",
    "skills.os": "Операционные системы", "skills.sysadmin": "Системное администрирование", "skills.networking": "Сети",
    "skills.cloud": "Cloud &amp; DevOps", "skills.security": "Кибербезопасность", "skills.backend": "Backend &amp; скрипты",
    "lang.az": "Азербайджанский", "lang.en": "Английский", "lang.ru": "Русский",
    "lang.native": "РОДНОЙ", "lang.upperint": "ВЫШЕ СРЕДНЕГО",
    "projects.title": "Избранные работы",
    "projects.sub": "Действующие продукты и внутренние системы, для которых я строил и разворачивал backend и инфраструктуру.",
    "status.dev": "В разработке", "status.prod": "В продакшене",
    "meta.role": "Роль", "meta.stack": "Стек", "meta.outcome": "Результат", "meta.timeline": "Сроки",
    "visitSite": "Открыть сайт →",
    "proj.karier.role": "Карьерная платформа · соискатели &amp; работодатели",
    "proj.karier.desc": "Карьерная платформа, соединяющая соискателей с работодателями по всему Азербайджану. Создаю и поддерживаю backend-сервисы и настройку деплоя для профилей, вакансий и заявок, доступные через REST-эндпоинты для веб-клиента.",
    "proj.karier.metaRole": "Backend &amp; деплой",
    "proj.karier.outcome": "Действующая платформа в активном использовании",
    "proj.otogo.role": "B2B мобильная платформа · маркетплейс автосервисов",
    "proj.otogo.desc": "Мобильная платформа, соединяющая поставщиков автосервисов с бизнесом по всему Азербайджану. Контейнеризировал backend с помощью Docker, настроил процесс деплоя и поддерживаю сервисы для онбординга поставщиков, списков услуг и бронирования через 20+ REST-эндпоинтов.",
    "proj.otogo.metaRole": "Backend &amp; DevOps",
    "proj.otogo.outcome": "20+ эндпоинтов в активном продакшен-использовании",
    "proj.azcon.role": "Платформа расчёта строительных цен",
    "proj.azcon.desc": "Платформа для сравнения и расчёта цен на строительные материалы и услуги, соединяющая пользователей с поставщиками и специалистами по всему Азербайджану. Создал backend и настроил окружение для расчётов цен и данных поставщиков/пользователей.",
    "proj.azcon.metaRole": "Разработка backend",
    "proj.eracon.role": "Внутренняя система управления для строительной компании",
    "proj.eracon.desc": "Веб-система внутреннего управления для строительной компании для упрощения повседневных операций, построенная и развернутая целиком примерно за неделю — от схемы до продакшена.",
    "proj.eracon.metaRole": "Разработка backend",
    "proj.qravan.role": "Приложение скидок и кэшбэка · QR-награды партнёров",
    "proj.qravanproj.desc": "Приложение скидок и кэшбэка, где пользователи сканируют QR-коды в точках партнёров по всему Азербайджану для получения ежедневных скидок и бонусов лояльности. Контейнеризировал backend-сервисы с Docker и Docker Compose и построил CI/CD пайплайн платформы, сократив время деплоя с 10 минут до 2.",
    "proj.qravanproj.metaRole": "DevOps",
    "edu.title": "Образование", "edu.specialization": "Специализация: криптография", "edu.bsc": "Бакалавр компьютерных наук",
    "cert.title": "Сертификаты", "cert.javabasic": "Java (базовый)", "cert.sqlbasic": "SQL (базовый)",
    "cert.backend": "Backend-разработка, сертификат о прохождении",
    "contact.title": "Давайте защитим и построим то, что не разбудит вас в 3 часа ночи.",
    "contact.sub": "Открыт к ролям в IT-инфраструктуре, DevOps и кибербезопасности, а также фриланс-проектам по backend. Пишите напрямую — я читаю всё сам.",
    "contact.send": "Написать письмо →",
    "footer.text": "© 2026 Агиль Азизов. Собрано с мышлением Linux, защищено как продакшен.",
  }
};

function applyLanguage(lang){
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  try { localStorage.setItem('agil-portfolio-lang', lang); } catch(e) {}
}

function initLanguage(){
  let saved = 'en';
  try { saved = localStorage.getItem('agil-portfolio-lang') || 'en'; } catch(e) {}
  applyLanguage(saved);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
}

/* ---------- Theme toggle ---------- */
function initTheme(){
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem('agil-portfolio-theme'); } catch(e) {}
  if (saved) root.setAttribute('data-theme', saved);
  const toggle = document.getElementById('themeToggle');
  if (toggle){
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('agil-portfolio-theme', next); } catch(e) {}
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {

  initTheme();
  initLanguage();

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
    { type: 'out', text: '  "role": "Cybersecurity & Systems Engineer",', indent: true },
    { type: 'out', text: '  "focus": ["Linux", "Networking", "Cloud", "DevOps", "Security"],', indent: true },
    { type: 'out', text: '  "background": "Java / Spring Boot",', indent: true },
    { type: 'out', text: '  "location": "Baku, AZ",', indent: true },
    { type: 'out', text: '  "status": "200 OK"', indent: true },
    { type: 'out', text: '}' },
    { type: 'cmd', text: 'echo $STATUS' },
    { type: 'out', text: 'systems secure, ready to ship →' },
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
    '  theme                toggle light/dark theme',
    '  lang en|az|ru        switch language',
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
    const langMatch = lower.match(/^lang\s+(en|az|ru)$/);

    if (lower === 'help' || lower === '--help' || lower === 'man') {
      appendRow(`<pre class="term-out" style="margin:0;font-family:inherit;">${commandHelp}</pre>`, 'term-out');
    } else if (lower === 'ls' || lower === 'ls -la' || lower === 'dir') {
      appendRow(`<span class="term-out">${Object.keys(routes).join('   ')}</span>`, 'term-out');
    } else if (lower === 'clear' || lower === 'cls') {
      term.innerHTML = '';
    } else if (lower === 'whoami') {
      appendRow('<span class="term-out">Agil Azizov — Cybersecurity & Systems Engineer, Baku, Azerbaijan. Linux / Networking / Cloud / DevOps, with a Java / Spring Boot background.</span>', 'term-out');
    } else if (lower === 'theme') {
      document.getElementById('themeToggle')?.click();
      appendRow('<span class="term-out">theme toggled →</span>', 'term-out');
    } else if (langMatch) {
      applyLanguage(langMatch[1]);
      appendRow(`<span class="term-out">language set to ${langMatch[1]} →</span>`, 'term-out');
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
  const finePointer = window.matchMedia('(pointer:fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (glow && finePointer && !reducedMotion) {
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
  if (finePointer && !reducedMotion) {
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

  /* ---------- Subtle 3D tilt on cards (performance-conscious) ---------- */
  if (finePointer && !reducedMotion) {
    const tiltEls = document.querySelectorAll('.tilt-el');
    tiltEls.forEach(el => {
      let raf = null;
      el.addEventListener('mousemove', (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          const rotX = (-py * 4).toFixed(2);
          const rotY = (px * 4).toFixed(2);
          el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-2px)`;
          raf = null;
        });
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });

    /* ---------- Hero parallax shapes ---------- */
    const parallax = document.getElementById('heroParallax');
    if (parallax) {
      const shapes = parallax.querySelectorAll('.p-shape, .p-ring');
      window.addEventListener('mousemove', (e) => {
        const px = e.clientX / window.innerWidth - 0.5;
        const py = e.clientY / window.innerHeight - 0.5;
        shapes.forEach((el, i) => {
          const depth = (i % 3 + 1) * 6;
          el.style.transform = `translate(${px * depth}px, ${py * depth}px)`;
        });
      }, { passive: true });
    }
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