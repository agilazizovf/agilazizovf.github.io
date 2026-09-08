// ==========================================================================
// Agil Azizov — Portfolio interactions
// ==========================================================================

const I18N = {
  en: {
    "nav.about": "/about", "nav.experience": "/experience", "nav.skills": "/skills",
    "nav.projects": "/projects", "nav.education": "/education", "nav.contact": "/contact",
    "nav.talk": "Let's talk",
    "hero.pill": "Open to Software Engineering roles",
    "hero.h1a": "Software Engineer,",
    "hero.h1b": "Java, Kotlin, Spring Boot &amp; Cybersecurity.",
    "hero.desc": "I'm Agil Azizov, a Backend Software Engineer based in Baku, Azerbaijan. I build scalable applications and REST APIs using Java, Kotlin, and Spring Boot, with a strong foundation in database infrastructure, DevOps, and a keen interest in cybersecurity.",
    "hero.viewProjects": "View projects →",
    "hero.downloadResume": "Download résumé",
    "hero.stat1": "Years in Software Engineering",
    "hero.stat2": "Production REST endpoints",
    "hero.stat3": "Developers mentored",
    "about.title": "Backend architecture, clean code, secure systems.",
    "about.p1": "I'm a <strong>Backend Software Engineer</strong> based in Baku, Azerbaijan, with over 2 years of experience building scalable applications using <strong>Java, Kotlin, and Spring Boot</strong>[cite: 4]. My work involves designing RESTful APIs, implementing robust security layers with Spring Security and JWT, optimizing database performance, and managing containerized deployments[cite: 4].",
    "about.p2": "Alongside core software engineering, I maintain a strong practical background in <strong>DevOps tooling</strong> (Docker, CI/CD, Nginx) and an active enthusiasm for <strong>cybersecurity</strong>, allowing me to approach backend development with a secure-by-design mindset.",
    "about.p3": "I have also spent significant time as a Java instructor and mentor at Developia Engineering Academy, teaching backend fundamentals to aspiring developers and helping them bridge the gap between theory and production environments[cite: 4].",
    "about.fact.location.k": "LOCATION",
    "about.fact.focus.k": "FOCUS", "about.fact.focus.v": "Java · Kotlin · Spring Boot · Microservices",
    "about.fact.currently.k": "CURRENTLY", "about.fact.currently.v": "Software Engineer &amp; Instructor",
    "about.fact.education.k": "EDUCATION", "about.fact.education.v": "M.Sc. Cryptography, Azerbaijan Technical University[cite: 4]",
    "about.fact.also.k": "INTERESTS", "about.fact.also.v": "Cybersecurity, DevOps &amp; Distributed Systems",
    "about.fact.avail.k": "AVAILABILITY", "about.fact.avail.v": "Open to Software Engineering roles",
    "exp.title": "Where I've worked",
    "exp.sub": "A chronological log of my professional journey in software engineering and backend development.",
    "exp.qravan.desc": "Baku, Azerbaijan",
    "exp.qravan.b1": "Containerized 4 backend services using Docker and Docker Compose, cutting local environment setup time from a full day to under an hour[cite: 4].",
    "exp.qravan.b2": "Configured and maintained CI/CD pipelines, reducing deployment time from 10 minutes to 2 minutes[cite: 4].",
    "exp.otogo.role": "Software Engineer (Part-time, Remote)",
    "exp.otogo.desc": "Baku, Azerbaijan",
    "exp.otogo.b1": "Engineered and implemented 20+ REST API endpoints for web and mobile applications[cite: 4].",
    "exp.otogo.b2": "Partnered with frontend engineers to define API contracts and ensure seamless end-to-end integration for the B2B mobility platform[cite: 4].",
    "exp.otogo.b3": "Owned Docker-based deployment workflows and contributed to CI/CD automation, streamlining the release process[cite: 4].",
    "exp.desinftec.role": "Software Engineer (Part-time, Hybrid)",
    "exp.desinftec.desc": "Baku, Azerbaijan",
    "exp.desinftec.b1": "Implemented JWT authentication and role-based authorization for secure APIs serving 500+ users[cite: 4].",
    "exp.desinftec.b2": "Optimized database queries and API performance, reducing average response times by approximately 30%[cite: 4].",
    "exp.desinftec.b3": "Structured a microservice-oriented architecture that improved scalability and streamlined deployments[cite: 4].",
    "exp.desinftec.b4": "Owned the integration of Spring Security and Hibernate into production backend services[cite: 4].",
    "exp.developia.role": "Java Instructor (Part-time, Hybrid)",
    "exp.developia.desc": "Baku, Azerbaijan",
    "exp.developia.b1": "Built backend services supporting an educational platform with over 200 students[cite: 4].",
    "exp.developia.b2": "Developed 15+ REST API endpoints using Spring Boot and designed reusable components[cite: 4].",
    "exp.developia.b3": "Coordinated with frontend developers and mentored junior developers throughout the development cycle[cite: 4].",
    "exp.mentor.role": "Backend Mentor (Part-time, Hybrid)",
    "exp.mentor.desc": "Baku, Azerbaijan",
    "exp.mentor.b1": "Mentored more than 30 students in Java and Spring Boot fundamentals[cite: 4].",
    "exp.mentor.b2": "Conducted code reviews and technical mentoring sessions, helping ~85% of students complete the program successfully[cite: 4].",
    "skills.title": "Technical Toolkit",
    "skills.sub": "Technologies and frameworks I utilize to architect and deliver robust backend systems.",
    "skills.langs": "Languages", "skills.frameworks": "Frameworks &amp; Libraries", "skills.databases": "Databases &amp; Messaging",
    "skills.apis": "APIs &amp; Testing", "skills.devops": "DevOps &amp; Tools", "skills.concepts": "Concepts &amp; Security",
    "lang.az": "Azerbaijani", "lang.en": "English", "lang.ru": "Russian",
    "lang.native": "NATIVE", "lang.upperint": "UPPER-INT",
    "projects.title": "Selected work",
    "projects.sub": "Production platforms and backend systems I have architected and built.",
    "status.prod": "In production",
    "meta.role": "Role", "meta.stack": "Stack", "meta.outcome": "Outcome", "meta.timeline": "Timeline",
    "visitSite": "Visit site →",
    "proj.otogo.role": "B2B mobile platform · car services marketplace[cite: 4]",
    "proj.otogo.desc": "A mobile platform connecting car service providers with businesses across Azerbaijan[cite: 4]. Engineered 20+ REST API endpoints[cite: 4], established Docker-based deployment workflows, and handled end-to-end integration.",
    "proj.desinftec.role": "Secure backend services &amp; microservice architecture[cite: 4]",
    "proj.qravan.role": "DevOps &amp; containerized deployment workflows[cite: 4]",
    "proj.qravanproj.desc": "Containerized 4 backend services using Docker and Docker Compose, reducing local environment setup time significantly, and configured automated CI/CD pipelines to cut deployment time down to 2 minutes[cite: 4].",
    "edu.title": "Education", "edu.msc": "Master of Science", "edu.mscspec": "Specialization: Cryptography[cite: 4]", "edu.bsc": "B.Sc. Computer Science",
    "cert.title": "Certifications", "cert.javabasic": "Java (Basic)", "cert.sqlbasic": "SQL (Basic)",
    "cert.backend": "Backend Development",
    "contact.title": "Let's build secure, scalable backend solutions together.",
    "contact.sub": "Open to Software Engineering and Backend Development roles. Reach out directly — I read everything myself.",
    "contact.send": "Send an email →",
    "footer.text": "© 2026 Agil Azizov. Built with Java &amp; Spring Boot, secured for production.",
  },
  az: {
    "nav.about": "/haqqımda", "nav.experience": "/təcrübə", "nav.skills": "/bacarıqlar",
    "nav.projects": "/layihələr", "nav.education": "/təhsil", "nav.contact": "/əlaqə",
    "nav.talk": "Əlaqə saxla",
    "hero.pill": "Proqram mühəndisliyi vakansiyalarına açığam",
    "hero.h1a": "Proqram Mühəndisi,",
    "hero.h1b": "Java, Kotlin, Spring Boot &amp; Kibertəhlükəsizlik.",
    "hero.desc": "Mən Agil Əzizovam, Bakı, Azərbaycanda Backend Proqram Mühəndisiyəm. Java, Kotlin və Spring Boot istifadə edərək miqyaslana bilən tətbiqlər və REST API-lər qururam, verilənlər bazası infrastrukturu və DevOps sahəsində güclü təmələ, həmçinin kibertəhlükəsizliyə böyük marağa sahibəm.",
    "hero.viewProjects": "Layihələrə bax →",
    "hero.downloadResume": "Rezümeni yüklə",
    "hero.stat1": "İl Proqram Mühəndisliyi təcrübəsi",
    "hero.stat2": "İstehsalat REST endpoint-ləri",
    "hero.stat3": "Mentorluq edilən developer",
    "about.title": "Backend arxitekturası, təmiz kod, təhlükəsiz sistemlər.",
    "about.p1": "Mən Bakı, Azərbaycanda yerləşən <strong>Backend Proqram Mühəndisiyəm</strong>, <strong>Java, Kotlin və Spring Boot</strong> istifadə edərək miqyaslana bilən tətbiqlərin qurulmasında 2 ildən artıq təcrübəm var[cite: 4]. İşim RESTful API-lərin dizayn edilməsini, Spring Security və JWT ilə təhlükəsizlik qatlarının tətbiqini, verilənlər bazası performansının optimallaşdırılmasını və konteynerləşdirilmiş deployment-lərin idarə olunmasını əhatə edir[cite: 4].",
    "about.p2": "Proqram mühəndisliyi ilə yanaşı, <strong>DevOps alətləri</strong> (Docker, CI/CD, Nginx) üzrə güclü praktiki təmələ və <strong>kibertəhlükəsizliyə</strong> aktiv marağa sahibəm ki, bu da mənə backend inkişafına təhlükəsizlik yönümlü yanaşmağa kömək edir.",
    "about.p3": "Həmçinin Developia Engineering Academy-də Java təlimçisi və mentoru kimi uzun müddət çalışmışam, gənc developerlərə backend əsaslarını öyrətmişəm və onlara nəzəriyyə ilə istehsalat mühitləri arasındakı körpünü qurmağa kömək etmişəm[cite: 4].",
    "about.fact.location.k": "YERLƏŞMƏ",
    "about.fact.focus.k": "FOKUS", "about.fact.focus.v": "Java · Kotlin · Spring Boot · Mikroservislər",
    "about.fact.currently.k": "HAZIRDA", "about.fact.currently.v": "Proqram Mühəndisi &amp; Təlimçi",
    "about.fact.education.k": "TƏHSİL", "about.fact.education.v": "Kriptoqrafiya üzrə magistr, Azərbaycan Texniki Universiteti[cite: 4]",
    "about.fact.also.k": "MARAQLAR", "about.fact.also.v": "Kibertəhlükəsizlik, DevOps &amp; Paylanmış Sistemlər",
    "about.fact.avail.k": "MÖVCUDLUQ", "about.fact.avail.v": "Proqram Mühəndisliyi rollarına açığam",
    "exp.title": "Harada işləmişəm",
    "exp.sub": "Proqram mühəndisliyi və backend inkişafı üzrə peşəkar yolumun xronoloji qeydi.",
    "exp.qravan.desc": "Bakı, Azərbaycan",
    "exp.qravan.b1": "Docker və Docker Compose istifadə edərək 4 backend xidmətini konteynerləşdirdim, lokal mühit quruluşunu əhəmiyyətli dərəcədə azaltdım[cite: 4].",
    "exp.qravan.b2": "CI/CD proseslərini qurdum və saxladım, deployment müddətini 2 dəqiqəyə endirdim[cite: 4].",
    "exp.otogo.role": "Proqram Mühəndisi (Yarımştat, Uzaqdan)",
    "exp.otogo.desc": "Bakı, Azərbaycan",
    "exp.otogo.b1": "Veb və mobil tətbiqlər üçün 20+ REST API endpoint-i mühəndislik etdim və tətbiq etdim[cite: 4].",
    "exp.otogo.b2": "B2B mobillik platforması üçün API kontraktlarını təyin etmək və inteqrasiyanı təmin etmək üçün frontend mühəndisləri ilə əməkdaşlıq etdim[cite: 4].",
    "exp.otogo.b3": "Docker əsaslı deployment iş axınlarına sahib çıxdım və buraxılış prosesini sadələşdirdim[cite: 4].",
    "exp.desinftec.role": "Proqram Mühəndisi (Yarımştat, Hibrid)",
    "exp.desinftec.desc": "Bakı, Azərbaycan",
    "exp.desinftec.b1": "500+ istifadəçiyə xidmət göstərən təhlükəsiz API-lər üçün JWT autentifikasiyası və rol əsaslı avtorizasiya tətbiq etdim[cite: 4].",
    "exp.desinftec.b2": "Verilənlər bazası sorğularını və API performansını optimallaşdırdım, cavab müddətlərini ~30% azaltdım[cite: 4].",
    "exp.desinftec.b3": "Miqyaslana bilməni yaxşılaşdıran mikroservis yönümlü arxitektura strukturlaşdırdım[cite: 4].",
    "exp.desinftec.b4": "Spring Security və Hibernate-in istehsalat backend xidmətlərinə inteqrasiyasını həyata keçirdim[cite: 4].",
    "exp.developia.role": "Java Təlimçisi (Yarımştat, Hibrid)",
    "exp.developia.desc": "Bakı, Azərbaycan",
    "exp.developia.b1": "200-dən çox tələbəsi olan təhsil platformasını dəstəkləyən backend xidmətləri qurdum[cite: 4].",
    "exp.developia.b2": "Spring Boot istifadə edərək 15+ REST API endpoint-i inkişaf etdirdim[cite: 4].",
    "exp.developia.b3": "İnkişaf dövrü ərzində frontend developerləri ilə əlaqələndirdim və junior developerlərə mentorluq etdim[cite: 4].",
    "exp.mentor.role": "Backend Mentoru (Yarımştat, Hibrid)",
    "exp.mentor.desc": "Bakı, Azərbaycan",
    "exp.mentor.b1": "Java və Spring Boot təməlləri üzrə 30-dan çox tələbəyə mentorluq etdim[cite: 4].",
    "exp.mentor.b2": "Kod baxışları və texniki mentorluq sessiyaları keçirdim, tələbələrin ~85%-ə proqramı uğurla başa vurmağa kömək etdim[cite: 4].",
    "skills.title": "Texniki Alət Dəsti",
    "skills.sub": "Güclü backend sistemləri qurmaq üçün istifadə etdiyim texnologiyalar və freymvorklar.",
    "skills.langs": "Dillər", "skills.frameworks": "Freymvorklar &amp; Kitabxanalar", "skills.databases": "Verilənlər Bazası &amp; Mesajlaşma",
    "skills.apis": "API-lər &amp; Test", "skills.devops": "DevOps &amp; Alətlər", "skills.concepts": "Konseptlər &amp; Təhlükəsizlik",
    "lang.az": "Azərbaycan dili", "lang.en": "İngilis dili", "lang.ru": "Rus dili",
    "lang.native": "ANA DİLİ", "lang.upperint": "YUXARI-ORTA",
    "projects.title": "Seçilmiş işlər",
    "projects.sub": "Arxitekturasını qurub hazırladığım istehsalat platformaları və backend sistemləri.",
    "status.prod": "İstehsalatda",
    "meta.role": "Rol", "meta.stack": "Stek", "meta.outcome": "Nəticə", "meta.timeline": "Müddət",
    "visitSite": "Sayta bax →",
    "proj.otogo.role": "B2B mobil platforma · avtomobil xidmətləri marketpleysi[cite: 4]",
    "proj.otogo.desc": "Azərbaycan üzrə avtomobil xidməti təminatçılarını bizneslərlə birləşdirən mobil platforma[cite: 4]. 20+ REST API endpoint-i mühəndislik edildi[cite: 4], Docker əsaslı deployment iş axınları quruldu.",
    "proj.desinftec.role": "Təhlükəsiz backend xidmətləri &amp; mikroservis arxitekturası[cite: 4]",
    "proj.qravan.role": "DevOps &amp; konteynerləşdirilmiş deployment iş axınları[cite: 4]",
    "proj.qravanproj.desc": "Docker və Docker Compose istifadə edərək 4 backend xidməti konteynerləşdirildi, lokal mühit quraşdırma vaxtı azaldıldı və deployment müddətini 2 dəqiqəyə endirmək üçün avtomatlaşdırılmış CI/CD quraşdırıldı[cite: 4].",
    "edu.title": "Təhsil", "edu.msc": "Magistr dərəcəsi", "edu.mscspec": "İxtisas: Kriptoqrafiya[cite: 4]", "edu.bsc": "Kompüter Elmləri üzrə bakalavr",
    "cert.title": "Sertifikatlar", "cert.javabasic": "Java (Əsas)", "cert.sqlbasic": "SQL (Əsas)",
    "cert.backend": "Backend İnkişafı",
    "contact.title": "Gəlin təhlükəsiz və miqyaslana bilən backend həllərini birlikdə quraq.",
    "contact.sub": "Proqram mühəndisliyi və backend inkişafı rollarına açığam. Birbaşa yazın — hər şeyi özüm oxuyuram.",
    "contact.send": "E-poçt göndər →",
    "footer.text": "© 2026 Agil Əzizov. Java &amp; Spring Boot ilə qurulub, istehsalat üçün qorunub.",
  },
  ru: {
    "nav.about": "/обо-мне", "nav.experience": "/опыт", "nav.skills": "/навыки",
    "nav.projects": "/проекты", "nav.education": "/образование", "nav.contact": "/контакты",
    "nav.talk": "Связаться",
    "hero.pill": "Открыт к вакансиям Software Engineering",
    "hero.h1a": "Software Engineer,",
    "hero.h1b": "Java, Kotlin, Spring Boot &amp; Cybersecurity.",
    "hero.desc": "Я Агиль Азизов, Backend Software Engineer из Баку, Азербайджан. Создаю масштабируемые приложения и REST API на Java, Kotlin и Spring Boot, обладая сильной базой в инфраструктуре баз данных, DevOps и искренним интересом к кибербезопасности.",
    "hero.viewProjects": "Смотреть проекты →",
    "hero.downloadResume": "Скачать резюме",
    "hero.stat1": "Года в Software Engineering",
    "hero.stat2": "Продакшн REST эндпоинтов",
    "hero.stat3": "Разработчиков под менторством",
    "about.title": "Backend архитектура, чистый код, безопасные системы.",
    "about.p1": "Я <strong>Backend Software Engineer</strong> из Баку, Азербайджан, с более чем 2-летним опытом создания масштабируемых приложений на <strong>Java, Kotlin и Spring Boot</strong>[cite: 4]. Моя работа включает проектирование RESTful API, внедрение надежных уровней безопасности с помощью Spring Security и JWT, оптимизацию производительности баз данных и управление контейнеризированными деплоями[cite: 4].",
    "about.p2": "Помимо основной разработки, у меня есть сильный практический опыт в <strong>инструментах DevOps</strong> (Docker, CI/CD, Nginx) и живой интерес к <strong>кибербезопасности</strong>, что позволяет мне подходить к backend-разработке с позиций secure-by-design.",
    "about.p3": "Я также уделял много времени работе в качестве инструктора и ментора по Java в Developia Engineering Academy, обучая основам backend начинающих разработчиков[cite: 4].",
    "about.fact.location.k": "ЛОКАЦИЯ",
    "about.fact.focus.k": "ФОКУС", "about.fact.focus.v": "Java · Kotlin · Spring Boot · Микросервисы",
    "about.fact.currently.k": "СЕЙЧАС", "about.fact.currently.v": "Software Engineer &amp; Инструктор",
    "about.fact.education.k": "ОБРАЗОВАНИЕ", "about.fact.education.v": "Магистр по криптографии, Azerbaijan Technical University[cite: 4]",
    "about.fact.also.k": "ИНТЕРЕСЫ", "about.fact.also.v": "Кибербезопасность, DevOps &amp; Distributed Systems",
    "about.fact.avail.k": "ДОСТУПНОСТЬ", "about.fact.avail.v": "Открыт к ролям Software Engineering",
    "exp.title": "Где я работал",
    "exp.sub": "Хронология моего профессионального пути в программной инженерии и backend-разработке.",
    "exp.qravan.desc": "Баку, Азербайджан",
    "exp.qravan.b1": "Контейнеризировал 4 backend-сервиса с помощью Docker и Docker Compose, сократив время настройки локального окружения[cite: 4].",
    "exp.qravan.b2": "Настроил и поддерживал CI/CD пайплайны, сократив время деплоя до 2 минут[cite: 4].",
    "exp.otogo.role": "Software Engineer (Частичная занятость, Удаленно)",
    "exp.otogo.desc": "Баку, Азербайджан",
    "exp.otogo.b1": "Разработал и внедрил 20+ REST API эндпоинтов для веб- и мобильных приложений[cite: 4].",
    "exp.otogo.b2": "Взаимодействовал с frontend-инженерами для определения контрактов API и обеспечения интеграции B2B мобильной платформы[cite: 4].",
    "exp.otogo.b3": "Курировал Docker-деплой и автоматизацию релизных процессов через CI/CD[cite: 4].",
    "exp.desinftec.role": "Software Engineer (Частичная занятость, Гибрид)",
    "exp.desinftec.desc": "Баку, Азербайджан",
    "exp.desinftec.b1": "Реализовал JWT-аутентификацию и ролевую авторизацию для защищенных API, обслуживающих 500+ пользователей[cite: 4].",
    "exp.desinftec.b2": "Оптимизировал запросы к БД и производительность API, сократив время отклика примерно на 30%[cite: 4].",
    "exp.desinftec.b3": "Спроектировал микросервисно-ориентированную архитектуру для повышения масштабируемости[cite: 4].",
    "exp.desinftec.b4": "Интегрировал Spring Security и Hibernate в продакшн backend-сервисы[cite: 4].",
    "exp.developia.role": "Инструктор по Java (Частичная занятость, Гибрид)",
    "exp.developia.desc": "Баку, Азербайджан",
    "exp.developia.b1": "Создавал backend-сервисы для образовательной платформы с более чем 200 студентами[cite: 4].",
    "exp.developia.b2": "Разработал 15+ REST API эндпоинтов с использованием Spring Boot[cite: 4].",
    "exp.developia.b3": "Координировал работу с frontend-разработчиками и менторил начинающих инженеров[cite: 4].",
    "exp.mentor.role": "Backend Mentor (Частичная занятость, Гибрид)",
    "exp.mentor.desc": "Баку, Азербайджан",
    "exp.mentor.b1": "Провел менторство для более чем 30 студентов по основам Java и Spring Boot[cite: 4].",
    "exp.mentor.b2": "Проводил код-ревью и технические сессии, помогая ~85% студентов успешно завершить программу[cite: 4].",
    "skills.title": "Технический стек",
    "skills.sub": "Технологии и фреймворки, которые я использую для проектирования надежных backend-систем.",
    "skills.langs": "Языки", "skills.frameworks": "Фреймворки &amp; Библиотеки", "skills.databases": "Базы данных &amp; Очереди",
    "skills.apis": "API &amp; Тестирование", "skills.devops": "DevOps &amp; Инструменты", "skills.concepts": "Концепции &amp; Безопасность",
    "lang.az": "Азербайджанский", "lang.en": "Английский", "lang.ru": "Русский",
    "lang.native": "РОДНОЙ", "lang.upperint": "ВЫШЕ СРЕДНЕГО",
    "projects.title": "Избранные работы",
    "projects.sub": "Продакшн платформы и backend-системы, которые я спроектировал и построил.",
    "status.prod": "В продакшене",
    "meta.role": "Роль", "meta.stack": "Стек", "meta.outcome": "Результат", "meta.timeline": "Сроки",
    "visitSite": "Открыть сайт →",
    "proj.otogo.role": "B2B мобильная платформа · маркетплейс автосервисов[cite: 4]",
    "proj.otogo.desc": "Мобильная платформа, связывающая поставщиков автоуслуг с бизнесом[cite: 4]. Создано 20+ REST API эндпоинтов[cite: 4], настроены рабочие процессы деплоя через Docker.",
    "proj.desinftec.role": "Безопасные backend сервисы &amp; микросервисная архитектура[cite: 4]",
    "proj.qravan.role": "DevOps &amp; контейнеризированный деплой[cite: 4]",
    "proj.qravanproj.desc": "Контейнеризированы 4 backend-сервиса с помощью Docker и Docker Compose, настроены автоматизированные пайплайны CI/CD для сокращения времени деплоя до 2 минут[cite: 4].",
    "edu.title": "Образование", "edu.msc": "Магистр наук", "edu.mscspec": "Специализация: Криптография[cite: 4]", "edu.bsc": "Бакалавр компьютерных наук",
    "cert.title": "Сертификаты", "cert.javabasic": "Java (базовый)", "cert.sqlbasic": "SQL (базовый)",
    "cert.backend": "Backend-разработка",
    "contact.title": "Давайте создавать надежные и масштабируемые backend-решения вместе.",
    "contact.sub": "Открыт к позициям Software Engineer и Backend Developer. Пишите напрямую — я читаю всё сам.",
    "contact.send": "Написать письмо →",
    "footer.text": "© 2026 Агиль Азизов. Создано на Java &amp; Spring Boot, защищено для продакшена.",
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

  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  const sectionIds = ['about','experience','skills','projects','education','contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
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

  function scrollToSection(id) {
    const target = document.getElementById(id);
    if (!target) return false;
    const y = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: 'smooth' });
    return true;
  }

  const term = document.getElementById('terminalBody');
  const introLines = [
    { type: 'cmd', text: 'curl https://api.agil.dev/v1/profile' },
    { type: 'out', text: '{' },
    { type: 'out', text: '  "name": "Agil Azizov",', indent: true },
    { type: 'out', text: '  "role": "Software Engineer",', indent: true },
    { type: 'out', text: '  "stack": ["Java", "Kotlin", "Spring Boot", "Docker"],', indent: true },
    { type: 'out', text: '  "interest": "Cybersecurity",', indent: true },
    { type: 'out', text: '  "location": "Baku, AZ",', indent: true },
    { type: 'out', text: '  "status": "200 OK"', indent: true },
    { type: 'out', text: '}' },
    { type: 'cmd', text: 'echo $STATUS' },
    { type: 'out', text: 'server running, ready to scale →' },
  ];

  function highlight(text){
    return text
      .replace(/"([a-zA-Z_]+)":/g, '<span class="term-key">"$1"</span>:')
      .replace(/: "([^"]*)"/g, ': <span class="term-str">"$1"</span>');
  }

  function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

  function appendRow(html, extraClass) {
    if (!term) return;
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
    appendRow("<span class=\"term-hint\">type 'help' for commands, e.g. ls, /projects</span>", 'term-hint');
    const input = document.getElementById('terminalInput');
    if (input) input.focus();
  }

  const termEl = term ? term.closest('.terminal') : null;
  if (termEl) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeTerminal();
          heroObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    heroObserver.observe(termEl);
  }

  const terminalInput = document.getElementById('terminalInput');
  const routes = {
    home: 'home', about: 'about', experience: 'experience',
    skills: 'skills', projects: 'projects', education: 'education', contact: 'contact'
  };

  const commandHelp = [
    'available commands:',
    '  ls                 list sections',
    '  cd &lt;section&gt;       jump to a section',
    '  whoami              quick summary',
    '  theme                toggle light/dark theme',
    '  lang en|az|ru        switch language',
    '  open github|linkedin|youtube|email   open a link',
    '  clear                clear terminal',
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

    if (lower === 'help' || lower === '--help') {
      appendRow(`<pre class="term-out" style="margin:0;font-family:inherit;">${commandHelp}</pre>`, 'term-out');
    } else if (lower === 'ls' || lower === 'dir') {
      appendRow(`<span class="term-out">${Object.keys(routes).join('   ')}</span>`, 'term-out');
    } else if (lower === 'clear' || lower === 'cls') {
      if (term) term.innerHTML = '';
    } else if (lower === 'whoami') {
      appendRow('<span class="term-out">Agil Azizov — Software Engineer (Java, Kotlin, Spring Boot) & Cybersecurity Enthusiast, Baku, Azerbaijan.</span>', 'term-out');
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
        appendRow(`<span class="term-error">open: unknown target "${escapeHtml(target)}"</span>`);
      }
    } else if (sectionArg) {
      if (routes[sectionArg]) {
        appendRow(`<span class="term-out">navigating to /${sectionArg} →</span>`, 'term-out');
        scrollToSection(routes[sectionArg]);
      } else {
        appendRow(`<span class="term-error">cd: no such section "${escapeHtml(sectionArg)}"</span>`);
      }
    } else {
      appendRow(`<span class="term-error">command not found: ${escapeHtml(cmd)}</span>`);
    }

    if (term) term.scrollTop = term.scrollHeight;
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
    const terminalEl = terminalInput.closest('.terminal');
    if (terminalEl) {
      terminalEl.addEventListener('click', () => terminalInput.focus());
    }
  }

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

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const id = href.slice(1);
        if (document.getElementById(id)) {
          e.preventDefault();
          scrollToSection(id);
        }
      }
    });
  });
});