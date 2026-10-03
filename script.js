const EMAIL = "agilazizovf@gmail.com";

const EXTRA = {
  en: {
    "meta.title": "Agil Azizov — Software Engineer",
    "meta.desc": "Agil Azizov is a backend-focused software engineer in Baku. He builds production APIs, data access, and deployment workflows with Java, Kotlin, Spring Boot, SQL, Docker, and CI/CD.",
    "contact.copied": "Copied",
    "theme.toLight": "Switch to light theme",
    "theme.toDark": "Switch to dark theme",
    "menu.open": "Open menu",
    "menu.close": "Close menu"
  },
  az: {
    "meta.title": "Agil Əzizov — Proqram Mühəndisi",
    "meta.desc": "Agil Əzizov Bakıda backend yönümlü proqram mühəndisidir. Java, Kotlin, Spring Boot, SQL, Docker və CI/CD ilə produksiya API-ləri, data access və deployment qurur.",
    "contact.copied": "Kopyalandı",
    "theme.toLight": "İşıqlı temaya keç",
    "theme.toDark": "Qaranlıq temaya keç",
    "menu.open": "Menyunu aç",
    "menu.close": "Menyunu bağla",
    "skip": "Məzmuna keç",
    "nav.home": "Əsas",
    "nav.about": "Haqqımda",
    "nav.experience": "Təcrübə",
    "nav.skills": "Bacarıqlar",
    "nav.projects": "Layihələr",
    "nav.engineering": "Mühəndislik",
    "nav.contact": "Əlaqə",
    "nav.cta": "Əlaqə",
    "cta.cv": "CV-ni yüklə",
    "hero.kicker": "Proqram mühəndisi · Bakı · Vakansiyalara açığam",
    "hero.title": "Proqram mühəndisi",
    "hero.lede": "Backend sistemlər və onların produksiya yolunu qururam: REST API-lər, relyasiya verilənləri, konteynerlər və kodu buraxan pipeline-lar.",
    "hero.cta": "Təcrübəyə bax",
    "hero.panel": "Hazırda",
    "hero.panel.role": "Proqram mühəndisi",
    "hero.panel.where": "Harada",
    "hero.panel.since": "Tarixdən",
    "hero.panel.focus": "Produksiya backend-ləri, API-lər və buraxılış",
    "hero.fig": "Dizayn etdiyim sorğu yolu",
    "flow.client": "Müştəri",
    "flow.client.d": "Veb və mobil",
    "flow.api": "API",
    "flow.api.d": "REST, kontrakt, auth",
    "flow.service": "Servis",
    "flow.service.d": "Domen məntiqi",
    "flow.data": "Verilənlər bazası",
    "flow.data.d": "Sxema və sorğular",
    "flow.ship.label": "Buraxılış",
    "flow.ship": "Git → CI → image → host",
    "about.title": "Backend işi: API-dən verilənlər bazasına və buraxılışa qədər.",
    "about.p1": "Bakıda proqram mühəndisiyəm. İş server tərəfdədir: API, arxasındakı data modeli, autentifikasiya və bu kod deploy olunduqdan sonra nə baş verdiyi.",
    "about.p2": "Son iki ildə bu, B2B mobillik platforması üçün produksiya backend-i, qorunan API-lər, təhsil platforması və həmin sistemlərin Docker və CI/CD quruluşu olub. Java, Kotlin və Spring Boot istifadə edirəm, relyasiya verilənləri üçün PostgreSQL və MySQL.",
    "about.p3": "Hazırda Əminlər MMC-də Software Engineer kimi çalışıram. Bundan əvvəl Developia Engineering Academy-də Java tədris etmişəm və tələbə koduna baxmışam, ona görə dizayn həm işləməli, həm də izah oluna bilməli idi. Magistratura səviyyəsində kriptoqrafiya da oxuyuram.",
    "about.now": "İndi",
    "about.now.v": "Software Engineer, Əminlər MMC",
    "about.focus": "Fokus",
    "about.focus.v": "Backend sistemlər, API-lər, data access, buraxılış",
    "about.place": "Yer",
    "about.place.v": "Bakı, Azərbaycan",
    "about.edu": "Təhsil",
    "about.edu.v": "Kriptoqrafiya üzrə magistr, Azərbaycan Texniki Universiteti",
    "about.stack": "Stek",
    "edu.title": "Təhsil",
    "edu.msc": "Kriptoqrafiya üzrə magistr",
    "edu.bsc": "Kompüter elmləri üzrə bakalavr",
    "cert.title": "Sertifikatlar",
    "cert.backend": "Backend Development",
    "exp.title": "Üzərində işlədiyim sistemlər",
    "exp.lead": "Bir neçə rol yarımştat olduğu üçün tarixlər üst-üstə düşür. Hər biri sistem, problem və nəticədir — sadəcə tarix siyahısı deyil.",
    "exp.current": "Cari",
    "exp.present": "İndi",
    "exp.eminler.role": "Software Engineer",
    "exp.eminler.sum": "Produksiya proqram təminatı üzrə backend: servis, oxuduğu və yazdığı verilənlər, və bu yol buraxılışdan sonra necə davranır.",
    "label.systems": "Sistemlər",
    "exp.eminler.sys": "Produksiya backend servisləri və arxasındakı relyasiya verilənləri. Daxili məhsul adları və sxema şirkətdə qalır.",
    "label.work": "Mühəndislik",
    "exp.eminler.w1": "Biznesin işlətdiyi proqram təminatı üzrə backend və API.",
    "exp.eminler.w2": "Data access və sorğu performansı: sorğunun yavaş hissəsini tapıb həmin yolu dəyişmək.",
    "exp.eminler.w3": "Xəta yalnız işləyən sistemdə görünəndə produksiya debugging.",
    "label.own": "Məsuliyyət",
    "exp.eminler.own": "Backend dəyişikliyinin özü, o cümlədən deploy-dan sonra da davam edib-etməməsi.",
    "label.result": "Nəticə",
    "exp.eminler.result": "2026-cı ilin sentyabrından davam edən produksiya işi.",
    "tag.perf": "Performans",
    "tag.debug": "Produksiya debugging",
    "exp.qravan.type": "Frilans · Uzaqdan",
    "exp.qravan.role": "DevOps mühəndisi",
    "exp.qravan.sum": "QR endirim və cashback məhsulu üçün dörd backend servisini lokalda təkrarlana bilən və daha tez buraxılan etdim.",
    "exp.qravan.sys": "Dörd backend servisi, onların lokal iş mühiti və onları buraxan pipeline.",
    "exp.qravan.w1": "Servisləri Docker və Docker Compose ilə konteynerləşdirdim.",
    "exp.qravan.w2": "Buraxılış üçün istifadə olunan CI/CD pipeline-larını qurdum və saxladım.",
    "exp.qravan.own": "Çatdırılma yolu: lokal mühit və avtomatik buraxılış. Məhsul funksiyaları yox.",
    "exp.qravan.result": "Lokal quraşdırma təxminən bir gündən bir saatin altına endi. Deployment təxminən 10 dəqiqədən təxminən 2 dəqiqəyə endi.",
    "exp.otogo.type": "Yarımştat · Uzaqdan",
    "exp.otogo.role": "Software Engineer",
    "exp.otogo.sum": "Avtomobil servisi təminatçılarını bizneslərlə birləşdirən B2B platformanın backend-i. Veb və mobil müştərilər eyni API-dən istifadə edir.",
    "exp.otogo.sys": "Təminatçı qeydiyyatı, xidmət siyahıları və bron üçün REST API, üstəgəl Docker buraxılış yolu.",
    "exp.otogo.w1": "Veb və mobil üçün 20-dən çox REST endpoint dizayn edib yazdım.",
    "exp.otogo.w2": "Frontend mühəndisləri ilə API kontraktını elə bağladım ki, inteqrasiya buraxılışdan sonra yox, tez sınsın.",
    "exp.otogo.w3": "Docker əsaslı deployment-ə sahib çıxdım və CI/CD-yə töhfə verdim.",
    "exp.otogo.own": "Bu platformanın API səthi və buraxılış iş axını.",
    "exp.otogo.result": "Həmin endpoint-lər otogo.az-da produksiya istifadədədir.",
    "exp.des.type": "Yarımştat · Hibrid",
    "exp.des.role": "Software Engineer",
    "exp.des.sum": "Produksiya API-lərini bağladım və sıxlaşdırdım: autentifikasiya, data access və deploy-u asanlaşdıran servis bölgüsü.",
    "exp.des.sys": "Spring Security, Hibernate və relyasiya verilənlər bazası olan, 500-dən çox istifadəçiyə xidmət edən produksiya backend servisləri.",
    "exp.des.w1": "JWT autentifikasiyası və rol əsaslı avtorizasiya tətbiq etdim.",
    "exp.des.w2": "Sorğuları və API performansını optimallaşdırdım.",
    "exp.des.w3": "Miqyaslama və deploy-u sadələşdirmək üçün mikroservis yönümlü bölgü qurdum.",
    "exp.des.w4": "Spring Security və Hibernate-i produksiya servislərinə inteqrasiya etdim.",
    "exp.des.own": "Auth, data qatı və backend servislərinin forması.",
    "exp.des.result": "Orta API cavab müddəti təxminən 30% azaldı.",
    "tag.micro": "Mikroservislər",
    "exp.dev.type": "Yarımştat · Hibrid",
    "exp.dev.role": "Java təlimçisi",
    "exp.dev.sum": "Backend tədris etdim və tələbələrin həqiqətən istifadə etdiyi platformanın bir hissəsini qurdum.",
    "exp.dev.sys": "200-dən çox tələbəsi olan təhsil platforması üçün backend servisləri.",
    "exp.dev.w1": "Spring Boot ilə 15-dən çox REST endpoint və təkrar istifadə olunan backend komponentləri yazdım.",
    "exp.dev.w2": "İnteqrasiya yayınmadan əvvəl API strukturunu frontend developerləri ilə uzlaşdırdım.",
    "exp.dev.w3": "Junior developerlərə implementasiya, debugging və review boyunca mentorluq etdim.",
    "exp.dev.own": "Kurs backend-i və tələbələrin ona qarşı yazdığı kodun standartı.",
    "exp.dev.result": "Kohortun istifadə etdiyi platforma və yenidən yazılmadan genişlənə bilən API.",
    "tag.review": "Code review",
    "exp.men.type": "Yarımştat · Hibrid",
    "exp.men.role": "Backend mentor",
    "exp.men.sum": "Tələbələrə Java və Spring Boot üzrə, əsasən mühazirə ilə yox, review və debugging ilə mentorluq etdim.",
    "exp.men.w1": "30-dan çox tələbəyə Java və Spring Boot əsasları üzrə mentorluq etdim.",
    "exp.men.w2": "İşlək backend-i bitirməyə yönəlmiş code review və texniki sessiyalar keçirdim.",
    "exp.men.result": "Tələbələrin təxminən 85%-i proqramı tamamladı.",
    "skills.title": "Sistem qurmaq üçün istifadə etdiklərim",
    "skills.lead": "Dillərin siyahısı kimi yox, işin hissələrinə görə.",
    "sk.lang": "Proqramlaşdırma dilləri",
    "sk.lang.d": "İşlədiyim dillər, backend servislərdən daha aşağı səviyyəli koda qədər.",
    "sk.front": "Frontend",
    "sk.front.d": "İnterfeys tərəfi, iş yalnız API olmayanda.",
    "sk.back": "Backend mühəndisliyi",
    "sk.back.d": "Servislər, sorğunun emalı, validasiya və təhlükəsizlik sərhədi.",
    "sk.arch": "Arxitektura",
    "sk.arch.d": "Backend-i yenidən yazmadan dəyişə biləcəyi formada qurmaq.",
    "sk.patterns": "Dizayn pattern-ləri",
    "sk.layered": "Qatlı servislər",
    "sk.micro": "Mikroservislər",
    "sk.contracts": "API kontraktları",
    "sk.db": "Verilənlər bazaları",
    "sk.db.d": "Relyasiya dizaynı, miqrasiyalar və API-nin həqiqətən gözlədiyi sorğular.",
    "sk.schema": "Sxema dizaynı",
    "sk.query": "Sorğu optimallaşdırması",
    "sk.msg": "Mesajlaşma",
    "sk.msg.d": "Kafka və RabbitMQ ilə asinxron inteqrasiya.",
    "sk.ops": "DevOps və infrastruktur",
    "sk.ops.d": "Commit-dən işləyən hosta: image, pipeline və Linux.",
    "sk.test": "Test və debugging",
    "sk.test.d": "Buraxılışdan əvvəl yoxlama, produksiya xətasından sonra diaqnoz.",
    "sk.proddebug": "Produksiya debugging",
    "sk.human": "Dillər",
    "sk.human.d": "İş dilləri.",
    "lang.az": "Azərbaycan dili",
    "lang.native": "Ana dili",
    "lang.en": "İngilis dili",
    "lang.ui": "Yuxarı-orta",
    "lang.ru": "Rus dili",
    "proj.title": "Seçilmiş sistemlər",
    "proj.lead": "Alfred hələ aktiv inkişafda olan şəxsi sistemdir. Aşağıdakı produksiya sistemləri ayrı işarələnib ki, ikisi qarışmasın.",
    "proj.al.sub": "Linux server idarəetməsi, Telegram interfeysi üzərindən",
    "kind.active": "Aktiv inkişaf",
    "kind.personaleng": "Şəxsi mühəndislik layihəsi",
    "proj.al.desc": "Linux serverini idarə etmək çox vaxt SSH terminalı, monitorinq alətləri və deploy əmrləri arasında keçid deməkdir. Alfred bu iş axınlarını bir idarə olunan Telegram interfeysində toplamaq üçün qurduğum modul Python sistemidir: monitorinq, əməliyyat əmrləri, Docker və deployment, SSH üzərindən.",
    "label.built": "Hazırdır",
    "proj.al.built": "Saxlanılan server bağlantıları, CPU, yaddaş, disk, port, servis, proses və jurnal yoxlamaları, üstəgəl mövcud paket yeniləmələrinin hesabatı. Docker baxışı; start, stop və restart yalnız təsdiqdən sonra. Git və image deploy, tarixçə, deploy jurnalı və rollback skripti. Söhbət Azərbaycan, İngilis, Rus və Türk dillərindədir. SSH məxfi açarları MySQL-ə yazılmazdan əvvəl bağlanır.",
    "label.next": "İnkişafda",
    "proj.al.planned": "GitHub və CI üslubunda deployment yoxlamaları, təsdiqlənmiş bərpa əmrləri, saxlanılan sağlamlıq tarixçəsi və eyni yoxlamaları e-poçt, Slack və ya vebdə oxumaq.",
    "proj.al.stack": "Əsas stek",
    "proj.al.note": "Repozitoriya özəldir və açıq demo yoxdur.",
    "proj.otogo.sub": "Avtomobil servisləri üçün B2B bazar",
    "kind.prod": "Produksiya",
    "proj.otogo.desc": "Azərbaycan üzrə avtomobil servisi təminatçılarını bizneslərlə birləşdirən platforma. Veb və mobil eyni API üzərindədir.",
    "label.problem": "Problem",
    "proj.otogo.problem": "Təminatçılara qeydiyyat, siyahı və bron üçün iki müştəri növünün paylaşa biləcəyi bir backend lazım idi.",
    "label.contrib": "Töhfəm",
    "proj.otogo.contrib": "20-dən çox REST endpoint və Docker deployment iş axınını dizayn edib qurdum.",
    "label.approach": "Yanaşma",
    "proj.otogo.approach": "Frontend mühəndisləri ilə razılaşdırılmış API kontraktı, Spring Boot servisləri, MySQL və CI/CD ilə konteyner buraxılışı.",
    "label.challenge": "Çətinlik",
    "proj.otogo.challenge": "Veb və mobil eyni anda inteqrasiya olunarkən bir kontraktı sabit saxlamaq.",
    "label.concepts": "Konseptlər",
    "proj.otogo.concepts": "API dizaynı, inteqrasiya, konteyner buraxılışı",
    "link.site": "Sayta bax",
    "proj.az.sub": "Tikinti qiymətləri və təchizatçı verilənləri",
    "proj.az.desc": "Tikinti materialı və xidmət qiymətlərini müqayisə və hesablamaq, təchizatçı və mütəxəssislərə çıxmaq üçün platforma.",
    "proj.az.problem": "Qiymət hesablaması yalnız saxlanılan qiymət, təchizatçı və istifadəçi API-nin qaytardığı ilə eyni qalanda faydalıdır.",
    "proj.az.contrib": "Hesablamaların və təchizatçı, istifadəçi verilənlərinin arxasındakı backend-i və mühiti qurdum.",
    "proj.az.approach": "Hesablama və kataloq axınları üçün relyasiya model üzərində Spring Boot servisləri.",
    "proj.az.challenge": "Hesablama saxlanılan verilənə tabe olmalı idi. API-də qısa yol bazanın dəstəkləmədiyi qiyməti göstərərdi.",
    "proj.az.concepts": "Relyasiya modeli, REST, verilən uyğunluğu",
    "tag.sepdec": "Sen — Dek 2025",
    "proj.era.sub": "Tikinti şirkəti üçün daxili sistem",
    "proj.era.desc": "Tikinti şirkətinin gündəlik əməliyyatları üçün veb sistem. Sxemadan deploy olunmuş quruluşa qədər.",
    "proj.era.problem": "Əməliyyat verilənləri şirkətin həqiqətən işlədə biləcəyi sistemdən kənarda idi.",
    "proj.era.contrib": "Backend-i qurdum və deploy etdim.",
    "proj.era.approach": "İlk buraxılışda şirkətə lazım olan həcmlə Spring Boot servisi və relyasiya saxlancı.",
    "proj.era.challenge": "Sxemadan produksiya təxminən bir həftə. Model həm bitəcək qədər kiçik, həm də işlədiləcək qədər möhkəm olmalı idi.",
    "proj.era.concepts": "Sxema dizaynı, qısa müddətdə buraxılış",
    "tag.jul25": "İyl 2025",
    "proj.qr.sub": "QR endirim və tərəfdaş cashback",
    "kind.devops": "Produksiya · DevOps",
    "proj.qr.desc": "İstifadəçilər tərəfdaş məkanlarda endirim və loyallıq üçün QR oxuyur. Mənim hissəm dörd backend servisinin iş mühiti və buraxılış yolu idi.",
    "proj.qr.problem": "Yeni maşın faydalı olmağa təxminən bir gün aparırdı, buraxılış isə təxminən 10 dəqiqəlik əl işi idi.",
    "proj.qr.contrib": "Servisləri konteynerləşdirdim və CI/CD pipeline qurdum. Məhsul funksiyalarına sahib deyildim.",
    "proj.qr.approach": "Dörd servis üçün Docker Compose, lokal və buraxılış eyni tip artefakt istifadə etsin, deploy-un qarşısında pipeline.",
    "proj.qr.challenge": "Lokal stek ilə buraxılan stek üst-üstə düşməsə, pipeline yalnız laptopun işlədiyini sübut edərdi.",
    "proj.qr.concepts": "Konteynerlər, CI/CD, mühit uyğunluğu",
    "tag.qrwhen": "Yan — Avq 2026",
    "proj.ka.sub": "Namizəd və işəgötürən üçün karyera platforması",
    "kind.dev": "İnkişafda",
    "proj.ka.desc": "Azərbaycan üçün işə qəbul platforması. Profillər, elanlar və müraciətlər veb müştəri üçün REST kimi açılır.",
    "proj.ka.problem": "Müştəri sadəcə düzümdən artıq olmamışdan əvvəl hesab, elan və müraciət üçün backend lazımdır.",
    "proj.ka.contrib": "Backend servislərini və deployment quruluşunu qururam.",
    "proj.ka.approach": "Bu üç axın ətrafında Spring Boot, MySQL və REST endpoint-lər.",
    "proj.ka.challenge": "Məhsul dəyişərkən API sabit qalmalıdır. Bu, bitmiş produksiya sistemi deyil.",
    "proj.ka.concepts": "REST, relyasiya verilənləri, deployment",
    "proj.ms.name": "Book, Order və User servisləri",
    "proj.ms.sub": "Şəxsi · servis sərhədləri",
    "kind.personal": "Şəxsi",
    "proj.ms.desc": "Book, order və user-i Eureka reyestrinin arxasında ayrı servislərə bölən şəxsi Spring Boot layihəsi. Sərhədlərin öyrənilməsidir, işlətdiyim məhsul deyil.",
    "proj.ms.problem": "Bir tətbiq eyni səbəbdən dəyişməyən üç həyat dövrəsini gizlədirdi.",
    "proj.ms.contrib": "Onları servislərə və reyestrə böldüm, order servisini digər ikisinə bağladım.",
    "proj.ms.approach": "Java 17, Spring Boot 3, Eureka server, order servisindən OpenFeign, saxlama üçün JPA və MySQL, girişdə Bean Validation.",
    "proj.ms.challenge": "Servisin hansı verilənə sahib olduğunu və sahib olmadığı veriləni necə istədiyini qərarlaşdırmaq. Bunu produksiya trafiki kimi göstərmədən.",
    "proj.ms.concepts": "Servis sərhədləri, discovery, API müştəriləri, relyasiya saxlancı",
    "proj.more": "Digər repozitoriyalar GitHub-dadır",
    "eng.title": "Sistemlər necə qurulur",
    "eng.lead": "Başımda ayrı saxladığım iki yol, sonra bunun göründüyü üç iş. İşəgötürənin daxili detalları kənarda qalır.",
    "eng.req": "Sorğu yolu",
    "eng.req.1": "Sənədləşdirilmiş endpoint çağırır",
    "eng.req.2": "Auth, validasiya, kontrakt",
    "eng.req.3": "Qaydalar burada yaşayır, controller-də yox",
    "eng.req.4": "Sorğunun həqiqətən gözlədiyi query",
    "eng.ship": "Buraxılış yolu",
    "eng.ship.1": "Dəyişiklik review oluna bilir",
    "eng.ship.2": "Build və yoxlamalar",
    "eng.image": "Image",
    "eng.ship.3": "Lokalda və buraxılışda eyni artefakt",
    "eng.host": "Host",
    "eng.ship.4": "Linux, lazım olanda qarşısında Nginx",
    "case.perf.title": "API və sorğu performansı",
    "case.perf.problem": "500-dən çox istifadəçiyə xidmət edən autentifikasiyalı API-lər lazım olduğundan yavaş idi. Gözləmə çatışmayan funksiyada yox, sorğu yolunda idi.",
    "case.perf.approach": "Bunu data access problemi kimi götürdüm: handler-lar hansı sorğuları işlədir, Hibernate nə yükləyir, API nəyi dayandırmalıdır. Spring Security və JWT auth sərhədi olaraq qaldı.",
    "case.perf.result": "Orta cavab müddəti təxminən 30% düşdü. Bu işin ətrafındakı servis bölgüsü deploy-ları da kiçiltdi.",
    "case.em.title": "Canlı backend-də performans",
    "case.em.problem": "Sorğu yavaş və ya səhv yalnız produksiyada olur. Lokal yol bunu göstərmir.",
    "case.em.approach": "Çağırışı API-dən sorğuya qədər izlə. Sorğunun ehtiyac duymadığı işi çıxart. Dəyişikliyi yalnız düzgün görünən kod parçasında yox, işləyən sistemdə təsdiqlə.",
    "case.em.result": "Bu, cari işdir. Şirkətin daxilindən vaxt ölçüləri, cədvəl forması və ya biznes qaydaları dərc etmirəm.",
    "case.qr.title": "Dörd servis üçün buraxılış yolu",
    "case.qr.problem": "Dörd servis dörd quraşdırma ritualı demək idi. Buraxılış pipeline yox, 10 dəqiqəlik prosedur idi.",
    "case.qr.approach": "Maşın dəsti Docker Compose ilə qaldırsın, buraxılış isə ikinci addımlar dəsti yox, eyni artefakt olsun deyə CI/CD.",
    "case.qr.result": "Quraşdırma bir saatin altında. Deployment təxminən 2 dəqiqə.",
    "eng.fine": "Bu səhifədə etimadnamə, daxili ünvan, özəl sxema və ya məxfi biznes veriləni yoxdur.",
    "contact.title": "Backend və ya proqram mühəndisliyi üçün işə alırsınızsa, birbaşa yazın.",
    "contact.lead": "Mesajları özüm oxuyuram. Lazımi keçidlər aşağıdadır.",
    "contact.mail": "E-poçt",
    "contact.email": "E-poçt göndər",
    "footer.top": "Yuxarı qayıt"
  },
  ru: {
    "meta.title": "Агиль Азизов — Software Engineer",
    "meta.desc": "Агиль Азизов — backend-ориентированный software engineer в Баку. Продакшен API, доступ к данным и выкладка на Java, Kotlin, Spring Boot, SQL, Docker и CI/CD.",
    "contact.copied": "Скопировано",
    "theme.toLight": "Включить светлую тему",
    "theme.toDark": "Включить тёмную тему",
    "menu.open": "Открыть меню",
    "menu.close": "Закрыть меню",
    "skip": "К содержанию",
    "nav.home": "Главная",
    "nav.about": "Обо мне",
    "nav.experience": "Опыт",
    "nav.skills": "Навыки",
    "nav.projects": "Проекты",
    "nav.engineering": "Инженерия",
    "nav.contact": "Контакт",
    "nav.cta": "Контакт",
    "cta.cv": "Скачать CV",
    "hero.kicker": "Software Engineer · Баку · Открыт к ролям",
    "hero.title": "Software Engineer",
    "hero.lede": "Собираю backend-системы и путь, которым они попадают в прод: REST API, реляционные данные, контейнеры и пайплайны.",
    "hero.cta": "Смотреть опыт",
    "hero.panel": "Сейчас",
    "hero.panel.role": "Software Engineer",
    "hero.panel.where": "Где",
    "hero.panel.since": "С",
    "hero.panel.focus": "Продакшен-backend, API и выкладка",
    "hero.fig": "Путь запроса, который я проектирую",
    "flow.client": "Клиент",
    "flow.client.d": "Веб и мобильные",
    "flow.api": "API",
    "flow.api.d": "REST, контракт, auth",
    "flow.service": "Сервис",
    "flow.service.d": "Доменная логика",
    "flow.data": "База данных",
    "flow.data.d": "Схема и запросы",
    "flow.ship.label": "Выкладка",
    "flow.ship": "Git → CI → image → host",
    "about.title": "Backend: от API к базе и к релизу.",
    "about.p1": "Я software engineer в Баку. Работа на стороне сервера: API, модель данных за ним, аутентификация и то, что происходит с кодом после выкладки.",
    "about.p2": "За последние два года это продакшен-backend B2B-платформы, защищённые API, учебная платформа и Docker с CI/CD, которыми эти системы выкладываются. Пишу на Java, Kotlin и Spring Boot. Реляционные данные — PostgreSQL и MySQL.",
    "about.p3": "Сейчас я Software Engineer в Əminlər MMC. До этого преподавал Java и разбирал код студентов в Developia Engineering Academy: дизайн должен был и работать, и объясняться. Параллельно учусь в магистратуре по криптографии.",
    "about.now": "Сейчас",
    "about.now.v": "Software Engineer, Əminlər MMC",
    "about.focus": "Фокус",
    "about.focus.v": "Backend-системы, API, доступ к данным, выкладка",
    "about.place": "Город",
    "about.place.v": "Баку, Азербайджан",
    "about.edu": "Образование",
    "about.edu.v": "Магистратура по криптографии, Азербайджанский технический университет",
    "about.stack": "Стек",
    "edu.title": "Образование",
    "edu.msc": "Магистратура, криптография",
    "edu.bsc": "Бакалавр компьютерных наук",
    "cert.title": "Сертификаты",
    "cert.backend": "Backend Development",
    "exp.title": "Системы, с которыми я работал",
    "exp.lead": "Даты пересекаются, потому что часть ролей была частичной занятостью. Каждая — это система, задача и результат, а не строка в хронологии.",
    "exp.current": "Сейчас",
    "exp.present": "сейчас",
    "exp.eminler.role": "Software Engineer",
    "exp.eminler.sum": "Backend продакшен-систем: сервис, данные, которые он читает и пишет, и как этот путь ведёт себя после релиза.",
    "label.systems": "Системы",
    "exp.eminler.sys": "Продакшен backend-сервисы и реляционные данные за ними. Внутренние имена продуктов и схема остаются в компании.",
    "label.work": "Инженерия",
    "exp.eminler.w1": "Backend и API для ПО, которое бизнес реально эксплуатирует.",
    "exp.eminler.w2": "Доступ к данным и производительность запросов: найти медленную часть запроса и изменить именно её.",
    "exp.eminler.w3": "Отладка в проде, когда сбой виден только на работающей системе.",
    "label.own": "Ответственность",
    "exp.eminler.own": "Само изменение backend, включая то, держится ли оно после выкладки.",
    "label.result": "Результат",
    "exp.eminler.result": "Продакшен-работа с сентября 2026.",
    "tag.perf": "Производительность",
    "tag.debug": "Отладка в проде",
    "exp.qravan.type": "Фриланс · Удалённо",
    "exp.qravan.role": "DevOps-инженер",
    "exp.qravan.sum": "Сделал четыре backend-сервиса воспроизводимыми локально и быстрее в релизе для QR-скидок и кэшбэка.",
    "exp.qravan.sys": "Четыре backend-сервиса, их локальный запуск и пайплайн, который их выкладывает.",
    "exp.qravan.w1": "Упаковал сервисы в Docker и Docker Compose.",
    "exp.qravan.w2": "Настроил и поддерживал CI/CD-пайплайны релиза.",
    "exp.qravan.own": "Путь поставки: локальное окружение и автоматический релиз. Не функции продукта.",
    "exp.qravan.result": "Локальная настройка — с примерно дня до меньше часа. Выкладка — с примерно 10 минут до примерно 2 минут.",
    "exp.otogo.type": "Частичная занятость · Удалённо",
    "exp.otogo.role": "Software Engineer",
    "exp.otogo.sum": "Backend B2B-платформы, которая связывает автосервисы и бизнес. Веб и мобильные клиенты сидят на одном API.",
    "exp.otogo.sys": "REST API для подключения провайдеров, каталога услуг и бронирования, плюс Docker-релиз.",
    "exp.otogo.w1": "Спроектировал и сделал 20+ REST-эндпоинтов для веба и мобильных клиентов.",
    "exp.otogo.w2": "Зафиксировал контракт API с frontend-инженерами, чтобы интеграция ломалась рано, а не после релиза.",
    "exp.otogo.w3": "Вёл Docker-выкладку и участвовал в CI/CD.",
    "exp.otogo.own": "Поверхность API и процесс релиза этой платформы.",
    "exp.otogo.result": "Эти эндпоинты в проде на otogo.az.",
    "exp.des.type": "Частичная занятость · Гибрид",
    "exp.des.role": "Software Engineer",
    "exp.des.sum": "Закрыл и ужал продакшен API: аутентификация, доступ к данным и разрез сервисов, который проще выкладывать.",
    "exp.des.sys": "Продакшен backend на Spring Security, Hibernate и реляционной базе, 500+ пользователей.",
    "exp.des.w1": "Сделал JWT-аутентификацию и ролевую авторизацию.",
    "exp.des.w2": "Оптимизировал запросы и время ответа API.",
    "exp.des.w3": "Собрал микросервисный разрез, чтобы масштабирование и выкладка были проще.",
    "exp.des.w4": "Встроил Spring Security и Hibernate в продакшен-сервисы.",
    "exp.des.own": "Auth, слой данных и форма backend-сервисов.",
    "exp.des.result": "Среднее время ответа API снизилось примерно на 30%.",
    "tag.micro": "Микросервисы",
    "exp.dev.type": "Частичная занятость · Гибрид",
    "exp.dev.role": "Преподаватель Java",
    "exp.dev.sum": "Преподавал backend и собирал часть платформы, которой студенты реально пользовались.",
    "exp.dev.sys": "Backend учебной платформы, 200+ студентов.",
    "exp.dev.w1": "Сделал 15+ REST-эндпоинтов на Spring Boot и переиспользуемые backend-компоненты.",
    "exp.dev.w2": "Согласовал структуру API с frontend до того, как интеграция разъехалась.",
    "exp.dev.w3": "Менторил младших разработчиков на реализации, отладке и ревью.",
    "exp.dev.own": "Backend курса и планка кода, который студенты писали против него.",
    "exp.dev.result": "Платформа, которой пользовался поток, и API, который можно расширять, а не переписывать.",
    "tag.review": "Code review",
    "exp.men.type": "Частичная занятость · Гибрид",
    "exp.men.role": "Backend-ментор",
    "exp.men.sum": "Вёл студентов по Java и Spring Boot в основном через ревью и отладку, а не лекции.",
    "exp.men.w1": "Менторил 30+ студентов по основам Java и Spring Boot.",
    "exp.men.w2": "Провёл ревью и технические сессии с целью довести backend до рабочего состояния.",
    "exp.men.result": "Около 85% студентов закончили программу.",
    "skills.title": "Чем я собираю системы",
    "skills.lead": "По частям работы, а не списком языков.",
    "sk.lang": "Языки программирования",
    "sk.lang.d": "Языки, на которых я работаю, от backend-сервисов до более низкого уровня.",
    "sk.front": "Frontend",
    "sk.front.d": "Интерфейс, когда работа не ограничивается API.",
    "sk.back": "Backend",
    "sk.back.d": "Сервисы, обработка запроса, валидация и граница безопасности.",
    "sk.arch": "Архитектура",
    "sk.arch.d": "Как устроен backend, чтобы его можно было менять без переписывания.",
    "sk.patterns": "Паттерны проектирования",
    "sk.layered": "Слои сервисов",
    "sk.micro": "Микросервисы",
    "sk.contracts": "Контракты API",
    "sk.db": "Базы данных",
    "sk.db.d": "Реляционная модель, миграции и запросы, которых API реально ждёт.",
    "sk.schema": "Проектирование схемы",
    "sk.query": "Оптимизация запросов",
    "sk.msg": "Сообщения",
    "sk.msg.d": "Асинхронная интеграция на Kafka и RabbitMQ.",
    "sk.ops": "DevOps и инфраструктура",
    "sk.ops.d": "От коммита до работающего хоста: образ, пайплайн и Linux.",
    "sk.test": "Тесты и отладка",
    "sk.test.d": "Проверка до релиза и диагноз после сбоя в проде.",
    "sk.proddebug": "Отладка в проде",
    "sk.human": "Языки",
    "sk.human.d": "Рабочие языки.",
    "lang.az": "Азербайджанский",
    "lang.native": "Родной",
    "lang.en": "Английский",
    "lang.ui": "Выше среднего",
    "lang.ru": "Русский",
    "proj.title": "Избранные системы",
    "proj.lead": "Alfred — личная система в активной разработке. Прод-системы ниже помечены отдельно, чтобы их не путали.",
    "proj.al.sub": "Автоматизация DevOps и управление серверами Linux",
    "kind.active": "Активная разработка",
    "kind.personaleng": "Личный инженерный проект",
    "proj.al.desc": "Управление сервером Linux часто значит переключаться между SSH, мониторингом и командами выкладки. Alfred — модульная система на Python, которую я собираю, чтобы эти процессы жили в одном управляемом интерфейсе Telegram: мониторинг, рабочие команды, Docker и выкладка, через SSH.",
    "label.built": "Сделано",
    "proj.al.built": "Сохранённые подключения к серверам и проверки CPU, памяти, диска, портов, служб, процессов и журналов, плюс отчёт о доступных обновлениях пакетов. Осмотр Docker; start, stop и restart только после подтверждения. Выкладка из Git и из образа, с историей, журналом и скриптом отката. Чат на азербайджанском, английском, русском и турецком. Приватные SSH-ключи запечатываются до записи в MySQL.",
    "label.next": "В разработке",
    "proj.al.planned": "Проверки выкладки в стиле GitHub и CI, подтверждённые команды исправления, сохранённая история здоровья и другой способ читать те же проверки: почта, Slack или веб.",
    "proj.al.stack": "Основной стек",
    "proj.al.note": "Репозиторий закрытый, публичного демо нет.",
    "proj.otogo.sub": "B2B-площадка автосервисов",
    "kind.prod": "Продакшен",
    "proj.otogo.desc": "Платформа связывает автосервисы и бизнес по Азербайджану. Веб и мобильные клиенты сидят на одном API.",
    "label.problem": "Задача",
    "proj.otogo.problem": "Провайдерам нужен был один backend для подключения, каталога и брони, общий для двух видов клиентов.",
    "label.contrib": "Моя часть",
    "proj.otogo.contrib": "Спроектировал и сделал 20+ REST-эндпоинтов и Docker-выкладку.",
    "label.approach": "Подход",
    "proj.otogo.approach": "Контракт API с frontend, сервисы на Spring Boot, MySQL и контейнерный релиз с CI/CD.",
    "label.challenge": "Сложность",
    "proj.otogo.challenge": "Держать один контракт стабильным, пока веб и мобильные клиенты интегрировались одновременно.",
    "label.concepts": "Понятия",
    "proj.otogo.concepts": "Дизайн API, интеграция, контейнерная поставка",
    "link.site": "Открыть сайт",
    "proj.az.sub": "Цены на строительство и данные поставщиков",
    "proj.az.desc": "Платформа для сравнения и расчёта цен на материалы и услуги и для выхода на поставщиков и специалистов.",
    "proj.az.problem": "Расчёт цены полезен только если сохранённые цены, поставщики и пользователи совпадают с тем, что возвращает API.",
    "proj.az.contrib": "Собрал backend и окружение для расчётов и данных поставщиков и пользователей.",
    "proj.az.approach": "Сервисы Spring Boot поверх реляционной модели для расчёта и каталога.",
    "proj.az.challenge": "Расчёт должен следовать сохранённым данным. Короткий путь в API показал бы цену, которой в базе нет.",
    "proj.az.concepts": "Реляционная модель, REST, согласованность данных",
    "tag.sepdec": "Сен — Дек 2025",
    "proj.era.sub": "Внутренняя система строительной компании",
    "proj.era.desc": "Веб-система ежедневных операций строительной компании, от схемы до выложенной сборки.",
    "proj.era.problem": "Операционные данные жили вне системы, которую компания могла реально вести.",
    "proj.era.contrib": "Собрал backend и выложил его.",
    "proj.era.approach": "Сервис Spring Boot и реляционное хранилище в объёме первого релиза.",
    "proj.era.challenge": "Около недели от схемы до прода. Модель должна была быть достаточно маленькой, чтобы успеть, и достаточно цельной, чтобы на ней работать.",
    "proj.era.concepts": "Проектирование схемы, поставка в короткий срок",
    "tag.jul25": "Июл 2025",
    "proj.qr.sub": "QR-скидки и кэшбэк партнёров",
    "kind.devops": "Продакшен · DevOps",
    "proj.qr.desc": "Пользователь сканирует QR у партнёра ради скидки и лояльности. Моя часть — среда исполнения и путь релиза четырёх backend-сервисов.",
    "proj.qr.problem": "Новая машина становилась полезной примерно за день, релиз занимал около 10 минут ручной работы.",
    "proj.qr.contrib": "Упаковал сервисы и собрал CI/CD. Функции продукта были не мои.",
    "proj.qr.approach": "Docker Compose на четыре сервиса, чтобы локально и в релизе был один тип артефакта, и пайплайн перед выкладкой.",
    "proj.qr.challenge": "Локальный набор и выложенный набор должны совпадать, иначе пайплайн доказывает только то, что ноутбук запускается.",
    "proj.qr.concepts": "Контейнеры, CI/CD, совпадение окружений",
    "tag.qrwhen": "Янв — Авг 2026",
    "proj.ka.sub": "Карьерная платформа для соискателей и работодателей",
    "kind.dev": "В разработке",
    "proj.ka.desc": "Платформа найма для Азербайджана. Профили, вакансии и отклики открыты как REST для веб-клиента.",
    "proj.ka.problem": "Клиенту нужен backend аккаунтов, вакансий и откликов, иначе это остаётся вёрсткой.",
    "proj.ka.contrib": "Собираю backend-сервисы и выкладку.",
    "proj.ka.approach": "Spring Boot, MySQL и REST вокруг этих трёх потоков.",
    "proj.ka.challenge": "API должен оставаться стабильным, пока продукт ещё меняется. Это не законченная прод-система.",
    "proj.ka.concepts": "REST, реляционные данные, выкладка",
    "proj.ms.name": "Сервисы Book, Order и User",
    "proj.ms.sub": "Личный · границы сервисов",
    "kind.personal": "Личный",
    "proj.ms.desc": "Личный проект на Spring Boot: book, order и user как отдельные сервисы за реестром Eureka. Это изучение границ, не продукт, который я эксплуатирую.",
    "proj.ms.problem": "Одно приложение прятало три жизненных цикла, которые меняются не по одной причине.",
    "proj.ms.contrib": "Разделил их на сервисы и реестр и подключил order к двум другим.",
    "proj.ms.approach": "Java 17, Spring Boot 3, сервер Eureka, OpenFeign из order, JPA и MySQL для хранения, Bean Validation на входе.",
    "proj.ms.challenge": "Решить, какими данными сервис владеет и как он просит чужие, не выдавая это за прод-трафик.",
    "proj.ms.concepts": "Границы сервисов, discovery, API-клиенты, реляционное хранение",
    "proj.more": "Остальные репозитории на GitHub",
    "eng.title": "Как устроены системы",
    "eng.lead": "Два пути, которые я держу отдельно, и три работы, где это проявилось. Внутренности работодателей сюда не входят.",
    "eng.req": "Путь запроса",
    "eng.req.1": "Вызов описанного эндпоинта",
    "eng.req.2": "Auth, валидация, контракт",
    "eng.req.3": "Правила живут здесь, не в контроллере",
    "eng.req.4": "Запрос, которого вызов реально ждёт",
    "eng.ship": "Путь выкладки",
    "eng.ship.1": "Изменение можно ревьюить",
    "eng.ship.2": "Сборка и проверки",
    "eng.image": "Образ",
    "eng.ship.3": "Тот же артефакт локально и в релизе",
    "eng.host": "Хост",
    "eng.ship.4": "Linux, при необходимости Nginx перед ним",
    "case.perf.title": "Производительность API и запросов",
    "case.perf.problem": "API с аутентификацией для 500+ пользователей отвечали медленнее, чем нужно. Ожидание было в пути запроса, не в отсутствующей функции.",
    "case.perf.approach": "Я смотрел на это как на доступ к данным: какие запросы выполняли обработчики, что грузил Hibernate и что API мог перестать делать. Spring Security и JWT остались границей auth.",
    "case.perf.result": "Среднее время ответа снизилось примерно на 30%. Разрез сервисов вокруг этой работы ещё и уменьшил выкладки.",
    "case.em.title": "Производительность живого backend",
    "case.em.problem": "Запрос медленный или неверный только в проде. Локальный путь этого не показывает.",
    "case.em.approach": "Пройти вызов от API до запроса. Убрать работу, которая запросу не нужна. Проверить изменение на работающей системе, а не только в куске кода, который выглядел нормально.",
    "case.em.result": "Это текущая работа. Тайминги, форму таблиц и бизнес-правила изнутри компании я не публикую.",
    "case.qr.title": "Путь релиза для четырёх сервисов",
    "case.qr.problem": "Четыре сервиса означали четыре ритуала настройки. Релиз был десятиминутной процедурой, а не пайплайном.",
    "case.qr.approach": "Docker Compose, чтобы машина поднимала набор, и CI/CD, чтобы релиз был тем же артефактом, а не вторым списком шагов.",
    "case.qr.result": "Настройка меньше часа. Выкладка около 2 минут.",
    "eng.fine": "На этой странице нет учётных данных, внутренних адресов, закрытой схемы и конфиденциальных бизнес-данных.",
    "contact.title": "Если вы нанимаете на backend или software engineering, напишите напрямую.",
    "contact.lead": "Письма читаю сам. Нужные ссылки ниже.",
    "contact.mail": "Почта",
    "contact.email": "Написать письмо",
    "footer.top": "Наверх"
  }
};

const en = {};
document.querySelectorAll("[data-i18n]").forEach((el) => {
  const key = el.getAttribute("data-i18n");
  if (!(key in en)) en[key] = el.textContent;
});

let lang = "en";

function dict() {
  return Object.assign({}, en, EXTRA.en, lang === "en" ? {} : EXTRA[lang]);
}

function t(key) {
  const d = dict();
  return d[key] !== undefined ? d[key] : en[key] || "";
}

function applyLanguage(next) {
  lang = EXTRA[next] ? next : "en";
  const d = dict();
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (d[key] !== undefined) el.textContent = d[key];
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    const on = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  });
  document.title = d["meta.title"];
  const desc = document.getElementById("meta-desc");
  if (desc) desc.setAttribute("content", d["meta.desc"]);
  syncControls();
  try { localStorage.setItem("agil-portfolio-lang", lang); } catch (e) {}
}

function syncControls() {
  const themeBtn = document.getElementById("themeToggle");
  const menuBtn = document.getElementById("menuToggle");
  const light = document.documentElement.getAttribute("data-theme") === "light";
  if (themeBtn) themeBtn.setAttribute("aria-label", light ? t("theme.toDark") : t("theme.toLight"));
  if (menuBtn) {
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-label", open ? t("menu.close") : t("menu.open"));
  }
}

function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      root.classList.add("theme-switch");
      void root.offsetWidth;
    }
    root.setAttribute("data-theme", next);
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
      m.setAttribute("content", next === "light" ? "#f5f6f7" : "#0c1014");
    });
    try { localStorage.setItem("agil-portfolio-theme", next); } catch (e) {}
    syncControls();
    if (!reduce) {
      window.setTimeout(() => root.classList.remove("theme-switch"), 500);
    }
  });
}

function initMenu() {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
    syncControls();
    if (open) {
      const first = menu.querySelector("a");
      if (first) first.focus();
    }
  };

  toggle.addEventListener("click", () => setOpen(menu.hidden));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980 && !menu.hidden) setOpen(false);
  });
}

function initNav() {
  const nav = document.getElementById("nav");
  const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const ids = ["home", "about", "experience", "skills", "projects", "engineering", "contact"];
  const links = document.querySelectorAll("[data-nav]");
  const visible = new Map();

  const paint = () => {
    let active = "home";
    ids.forEach((id) => { if (visible.get(id)) active = id; });
    links.forEach((a) => {
      const on = a.getAttribute("href") === "#" + active;
      if (on) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting));
    paint();
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

function initReveal() {
  const nodes = document.querySelectorAll(".reveal");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("in"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  nodes.forEach((n) => observer.observe(n));
}

function initCopy() {
  const btn = document.getElementById("copyEmail");
  const status = document.getElementById("copied");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      if (status) status.textContent = t("contact.copied");
    } catch (e) {
      window.location.href = "mailto:" + EMAIL;
    }
  });
}

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
});

initTheme();
initMenu();
initNav();
initReveal();
initCopy();

let savedLang = "en";
try { savedLang = localStorage.getItem("agil-portfolio-lang") || "en"; } catch (e) {}
applyLanguage(savedLang);
syncControls();
