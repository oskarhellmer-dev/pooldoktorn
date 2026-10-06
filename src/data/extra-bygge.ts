// Poolbygge-sektionen: 12 egna artiklar om att planera, bygga och äga pool.
// Eget innehåll – inget kopierat. Samma schema som content.json.
export const EXTRA_BYGGE = [
  {
    slug: 'att-kopa-pool',
    tag: 'Bygge',
    h1: 'Att köpa pool – komplett guide inför köpet',
    meta_title: 'Att köpa pool – guide inför poolköpet',
    meta_desc:
      'Plats, storlek, byggsätt och driftkostnad avgör om poolköpet blir lyckat. Här är allt du bör bestämma innan du skriver på – och frågorna du ställer till leverantören.',
    lead: 'Ett poolköp blir sällan dyrt för att poolen är fel – utan för att besluten kring den fattades i fel ordning. Bestäm plats och storlek först, byggsätt sen, och priset sist. Då faller resten på plats.',
    img: 'att-kopa-pool',
    image_prompt:
      'A neat backyard garden with a modern rectangular swimming pool at golden hour, lounge chairs, hedges, realistic architectural photo, no people',
    sections: [
      ['Börja med platsen, inte poolen',
        '<p>Var poolen hamnar styr nästan allt annat: sol- och insynsförhållanden, avstånd till huset, var el och avlopp dras och hur mycket som måste grävas. En pool som ligger i skuggan stora delar av dagen blir kall och används mindre.</p>'
        + '<p>Tänk också på säkerheten tidigt. Barnsäkert skydd, låsbar grind eller staket ska rymmas i planen redan nu, inte läggas till efteråt.</p>'],
      ['Storlek och form – rätt för er, inte för grannen',
        '<p>En vanlig villapool ligger mellan 15 och 100 m³. Välj efter hur ni faktiskt badar: simträning kräver längd, barnfamiljer vill ha en grund del och en trappa, och den som mest vill svalka sig klarar sig med mindre.</p>'
        + '<p>Kom ihåg att vattenvolymen styr både kemikaliekostnad och uppvärmning. Varje extra kubikmeter ska värmas och renas hela säsongen.</p>'],
      ['Byggsätt – de tre vägarna',
        '<ul><li><strong>Betong med liner eller kakel.</strong> Mest flexibelt i form och storlek, dyrast, längst livslängd. Passar dig som bygger för att stanna.</li>'
        + '<li><strong>Glasfiber/polyester.</strong> Färdig form, snabbare installation, färre fogar och oftast lägre underhåll. Begränsas av tillgängliga storlekar.</li>'
        + '<li><strong>Ovan mark.</strong> Billigast och snabbast, inget stort ingrepp i trädgården. Kortare livslängd och mer begränsad höjd och form.</li></ul>'],
      ['Utrustning som måste vara med',
        '<p>Reningsverk med pump och filter, in- och utlopp (bräddavlopp), belysning och ett värmesystem är kärnan. Fråga vilka delar som ingår i offerten och vilka som är tillval – det är här prisskillnader ofta gömmer sig.</p>'
        + '<p><a href="/guider/poolfilter-guide/">Sandfilter, patronfilter eller glas</a> och <a href="/kopguider/varmepump-pool/">rätt dimensionerad värmepump</a> gör större skillnad för driftkostnaden än vad många tror.</p>'],
      ['Driftkostnaden – räkna på den, inte bara köpesumman',
        '<p>El till pump och värme, kemikalier, vatten och byte av slitdelar löper varje år. Uppvärmning och cirkulation står för största delen. Med <a href="/poolbygge/energismarta-losningar/">energismarta val</a> och ett bra <a href="/poolbygge/poolskydd/">poolskydd</a> sänker du den betydligt.</p>'],
      ['Frågor att ställa till leverantören',
        '<ul><li>Vad ingår i fastpriset, och vad faktureras utöver?</li>'
        + '<li>Vem ansöker om bygganmälan och vem står för eventuell grävning och återställning?</li>'
        + '<li>Hur lång garanti ges på liner, pump och filter?</li>'
        + '<li>Kan jag prata med tidigare kunder på orten?</li>'
        + '<li>Vad händer med trädgården runtomkring efteråt?</li></ul>'],
    ],
    faq: [
      ['Vad är rimligt att börja med – pool eller entreprenör?',
        'Pool. Bestäm plats, storlek och byggsätt innan du begär offerter. Då blir offerterna jämförbara och du undviker att en leverantörs val styr hela projektet.'],
      ['Måste jag ha bygglov för en pool?',
        'Oftast räcker en bygganmälan, men reglerna skiljer sig mellan kommuner och inom strandskyddade områden. Läs vår guide om <a href="/poolbygge/bygganmalan-och-bygglov/">bygganmälan och bygglov</a> och stäm alltid av med din kommun.'],
      ['Hur lång tid tar ett poolbygge?',
        'Ett enklare projekt kan bli klart på några veckor, medan en gjuten pool med kringarbete ofta tar en till flera månader beroende på väder, grävning och entreprenörens schema.'],
      ['Är en billigare pool alltid sämre?',
        'Inte nödvändigtvis – men prisskillnader sitter oftast i utrustning, isolering och hur mycket arbete som ingår. Jämför vad offerterna faktiskt innehåller, inte bara slutsumman.'],
    ],
    aff: {
      title: 'Vattenvård och testkit',
      text: 'Oavsett pooltyp behöver du ett pålitligt sätt att mäta pH och klor från dag ett.',
      cta: 'Se testkit och kemikalier',
      url: 'https://www.poolstore.se',
    },
    related: ['vad-kostar-det-att-bygga-pool', 'fran-drom-till-verklighet', 'liner-till-poolen'],
  },

  {
    slug: 'fran-drom-till-verklighet',
    tag: 'Bygge',
    h1: 'Från dröm till verklighet – så planerar du ditt poolprojekt',
    meta_title: 'Från dröm till verklighet – planera poolbygget',
    meta_desc:
      'En tydlig tidslinje från första skissen till färdig pool: budget, tillstånd, upphandling och vad som händer under bygget. Så undviker du förseningar och överraskningar.',
    lead: 'De flesta poolprojekt som drar över tid och budget har inte otur – de har hoppat över ett steg i planeringen. Här är ordningen som gör projektet förutsägbart, från idé till första bad.',
    img: 'fran-drom-till-verklighet',
    image_prompt:
      'A garden sketch plan and measuring tape lying on a patio table beside a garden with a newly built pool under construction, daylight, realistic photo, no people',
    sections: [
      ['Översikt: projektets sex faser',
        '<p>Ett poolprojekt går genom sex faser: idé, planering, tillstånd, upphandling, bygge och drift. Lägger du mest tid på planeringsfasen sparar du mest i de fyra efterföljande.</p>'],
      ['Steg 1 – Sätt mål och ramar',
        '<p>Bestäm hur poolen ska användas, hur många som badar samtidigt och vilken säsong ni vill kunna bada. Målet styr storlek, uppvärmning och skydd – inte tvärtom.</p>'],
      ['Steg 2 – Planera platsen',
        '<p>Mät upp trädgården, kontrollera sol- och skuggförhållanden över dagen och ta reda på var el, vatten och dagvatten finns. Tänk in gångvägar, säkerhetsavstånd och var maskiner ska komma in.</p>'],
      ['Steg 3 – Sätt budget med marginal',
        '<p>Räkna med köpesumman plus kringarbete som grävning, marksten, staket och återställning av trädgården. En buffert på 10–20 % ovanpå grundbudgeten är klok – oväntade markförhållanden är vanliga.</p>'],
      ['Steg 4 – Ordna tillstånd',
        '<p>I de flesta fall krävs en bygganmälan till kommunen, och i känsliga lägen även bygglov. Gör detta tidigt – handläggning tar tid och kan förskjuta hela projektet.</p>'],
      ['Steg 5 – Upphandla och jämför',
        '<p>Begär flera offerter på samma underlag så de blir jämförbara. Jämför vad som ingår, inte bara priset, och be om referensprojekt. Skriv avtal som tydligt anger tidplan, betalningsplan och ansvar.</p>'],
      ['Steg 6 – Under bygget och efter',
        '<p>Var tillgänglig för beslut, fotografera förloppet och dokumentera var ledningar ligger. När poolen är klar: lär dig vattenvården direkt från start och börja logga värdena i <a href="/pooljournal/">pooljournalen</a> så du lär känna din anläggning.</p>'],
    ],
    faq: [
      ['Hur lång tid bör man avsätta för planeringen?',
        'Räkna med minst några månader, och längre om bygglov krävs eller om entreprenörer är fullbokade. En grundlig planering är den enskilt största tidsbesparingen i hela projektet.'],
      ['När på året är det bäst att bygga?',
        'Många bygger på våren för att kunna bada samma sommar. Att <a href="/poolbygge/bygga-pool-pa-hosten/">bygga på hösten</a> har också fördelar – lägre priser och kortare kö.'],
      ['Behöver jag anlita en projektledare?',
        'För enkla projekt räcker det oftast att en entreprenör ansvarar. Vid större projekt med flera yrkesgrupper kan projektledning löna sig för att hålla tidplan och ansvar tydliga.'],
    ],
    related: ['att-kopa-pool', 'vad-kostar-det-att-bygga-pool', 'visualisera-poolprojekt'],
  },

  {
    slug: 'vad-kostar-det-att-bygga-pool',
    tag: 'Bygge',
    h1: 'Vad kostar det att bygga pool? Priser och faktorer',
    meta_title: 'Vad kostar det att bygga pool? Pris och faktorer',
    meta_desc:
      'Priset på en pool drivs av byggsätt, storlek, markförhållanden och kringarbete. Här är faktorerna som styr totalkostnaden och de dolda kostnaderna få pratar om.',
    lead: 'Det finns inget enkelt pris på en pool – samma storlek kan kosta mycket olika beroende på byggsätt, mark och hur mycket kringarbete som ingår. Det här är faktorerna som avgör, så att du kan jämföra offerter på riktigt.',
    img: 'vad-kostar-det-att-bygga-pool',
    image_prompt:
      'A swimming pool under construction in a residential garden, excavator and concrete structure, building site, daylight, realistic photo, no people',
    sections: [
      ['Varför inget fast pris finns',
        '<p>En pool är ett byggprojekt, inte en vara. Markförhållanden, tillgänglighet för maskiner, val av byggsätt och mängden kringarbete varierar från tomt till tomt. Därför anger seriösa leverantörer priser som intervall eller efter platsbesök, inte som en fast klumpsumma.</p>'
        + '<div class="note">Priserna i den här guiden anges som riktmärken. Begär alltid en aktuell offert för din tomt och dina förutsättningar – marknaden och materialpriser ändras.</div>'],
      ['Byggsättet är den största enskilda faktorn',
        '<ul><li><strong>Ovan mark</strong> är oftast den lägsta investeringen: ingen grävning, snabb uppställning.</li>'
        + '<li><strong>Glasfiber/polyester</strong> ligger i mellanskiktet: fabrikstillverkad form, men kräver grävning och lyft på plats.</li>'
        + '<li><strong>Betong med liner</strong> är den mest flexibla men också dyraste vägen, särskilt med kakel och specialformer.</li></ul>'],
      ['Storlek, form och djup',
        '<p>Kostnaden följer vattenvolymen: mer grävning, mer material, större pump och filter och högre driftkostnad. Specialformer, trappor och djupdelar ökar arbetstiden och därmed priset.</p>'],
      ['Marken och tomtens förutsättningar',
        '<p>Berg, hög grundvattennivå, trång infart eller ledningar i vägen kan fördyra kraftigt. Ett platsbesök som kartlägger detta tidigt kan spara stora summor jämfört med att upptäcka problemet med grävmaskinen på plats.</p>'],
      ['Kringarbete – den dolda posten',
        '<p>Det som byggs <em>runt</em> poolen glöms ofta bort i budgeten: marksten eller trall, staket och säkerhetsgrind, belysning, dränering, återställning av gräsmatta och ibland ny el till pumphuset. Lägg ihop dessa innan du jämför – de kan utgöra en betydande del av totalkostnaden.</p>'],
      ['Driftkostnaden löper varje år',
        '<p>Utöver investeringen kommer el till pump och värme, kemikalier, vattenpåfyllning och byte av slitdelar. Med <a href="/poolbygge/energismarta-losningar/">energismarta lösningar</a>, en rätt dimensionerad <a href="/kopguider/varmepump-pool/">värmepump</a> och ett <a href="/poolbygge/poolskydd/">skydd</a> hålls den nere.</p>'],
    ],
    faq: [
      ['Varför varierar priset så mycket mellan offerter?',
        'Oftast för att de inte innehåller samma saker. En offert kan utesluta grävning, kringarbete eller utrustning som en annan räknar in. Jämför post för post, inte bara totalsumman.'],
      ['Tillkommer kostnader jag inte ser i offerten?',
        'Ja, ofta kringarbete som marksten, staket och återställning, samt eventuell el- och VA-anslutning. Fråga uttryckligen vad som inte ingår.'],
      ['Hur räknar jag ut driftkostnaden innan köp?',
        'Utgå från poolens volym, uppvärmningstyp och hur många månader du värmer. El till värme och cirkulation dominerar, och ett bra skydd sänker både uppvärmning och kemikalieåtgång.'],
    ],
    related: ['att-kopa-pool', 'fran-drom-till-verklighet', 'energismarta-losningar'],
  },

  {
    slug: '10-steg-till-livet-som-poolagare',
    tag: 'Bygge',
    h1: '10 steg till livet som poolägare',
    meta_title: '10 steg till livet som poolägare',
    meta_desc:
      'Från första spadtaget till en pool som sköter sig själv: tio konkreta steg som gör dig till en trygg poolägare – och håller vattnet badklart hela säsongen.',
    lead: 'Att bli poolägare är enklare än många tror – förutsatt att du gör sakerna i rätt ordning. Här är de tio steg som tar dig från nybörjare till en pool som sköter sig själv.',
    img: '10-steg-till-livet-som-poolagare',
    image_prompt:
      'A clean turquoise swimming pool in a private garden with a robot cleaner on the bottom, sunny summer day, realistic photo, no people',
    sections: [
      ['Inledning',
        '<p>Livet som poolägare handlar mindre om kemi än om rutin. Gör du rätt saker några minuter i veckan slipper du de akuta problemen. Följ stegen i tur och ordning.</p>'],
      ['Steg 1 – Lär känna din anläggning',
        '<p>Ta reda på din vattenvolym i kubikmeter, hur pumpen och filtret fungerar och var ventiler och backspolning sitter. Allt annat utgår från volymen.</p>'],
      ['Steg 2 – Skaffa ett pålitligt test',
        '<p>Strips duger för en snabbkoll, men ett fotometriskt test eller dropptest ger exakta värden för pH och klor. Det är grunden för all dosering.</p>'],
      ['Steg 3 – Lär dig de fem nyckeltalen',
        '<p>pH, fritt klor, alkalinitet, cyanursyra och hårdhet. Kan du dessa har du kontroll. Läs mer om <a href="/guider/ph-och-klor/">pH och klor</a> och om <a href="/pooljournal/">hur du loggar värdena</a>.</p>'],
      ['Steg 4 – Balansera vattnet en gång ordentligt',
        '<p>Börja med alkaliniteten, sedan pH, sedan kloret. Fel ordning gör att du justerar i cirklar. Målet är stabilt pH 7,2–7,6 och fritt klor 1–3 mg/l.</p>'],
      ['Steg 5 – Sätt en veckorutin',
        '<p>Mät vatten, rengör korgarna, sug botten och backspola filtret någon gång i veckan eller varannan. Kort och regelbundet slår långt och sällan.</p>'],
      ['Steg 6 – Lär dig backspola rätt',
        '<p>Backspola när tryckmätaren stigit märkbart över normalt värde. Backspola för ofta och du slösar vatten; för sällan och filtreringen blir dålig.</p>'],
      ['Steg 7 – Dosera i små steg och mät igen',
        '<p>Häll aldrig i en gissad mängd kemi. Tillsätt, cirkulera, mät, och justera vidare. Små steg gör att du aldrig behöver ångra en överdosering.</p>'],
      ['Steg 8 – Skydda poolen',
        '<p>Ett <a href="/poolbygge/poolskydd/">skydd</a> räddar värme, minskar kemikalieåtgång och håller skräp ute. Solfolie och täckning är bland de enklaste besparingarna som finns.</p>'],
      ['Steg 9 – Automatisera det som går',
        '<p>Varvtalsstyrd pump, timer och <a href="/guider/smart-pool-automation/">automatisk dosering</a> tar bort de tråkiga momenten och håller värdena jämnare.</p>'],
      ['Steg 10 – Stäng och starta säsongen rätt',
        '<p>En korrekt <a href="/guider/vinterstangning-pool/">vinterstängning</a> och <a href="/guider/varstart-pool/">vårstart</a> gör nästa säsong enkel. Det här är de två tillfällen då de flesta problem uppstår – och samtidigt de enklaste att förebygga.</p>'],
    ],
    faq: [
      ['Hur mycket tid kräver en pool per vecka?',
        'Med en enkel rutin handlar det oftast om 15–30 minuter i veckan: mäta vatten, rengöra korgar och backspola vid behov. En robot och automatisering minskar tiden ytterligare.'],
      ['Måste jag mäta vattnet varje dag?',
        'Nej. En gång i veckan räcker vid normal drift. Vid högsäsong, mycket badande eller efter regn kan tätare mätning vara klok.'],
      ['Vad är det vanligaste nybörjarmisstaget?',
        'Att hoppa över pH och bara dosera klor. Kloret jobbar dåligt vid fel pH, och man slösar kemikalier på ett problem som egentligen sitter i pH-värdet.'],
    ],
    related: ['att-kopa-pool', 'energismarta-losningar', 'poolskydd'],
  },

  {
    slug: 'pool-okar-vardet-pa-villan',
    tag: 'Bygge',
    h1: 'Ökar pool värdet på villan? Så mycket kan den ge',
    meta_title: 'Ökar pool värdet på villan? Så räknar du',
    meta_desc:
      'En pool höjer sällan värdet med hela byggkostnaden. Här är vad som faktiskt styr värdeökningen, när poolen ger plus och när den kostar mer än den ger.',
    lead: 'En pool kan göra villan mer attraktiv för en viss köpare – men den höjer sällan värdet med hela byggkostnaden. Om det blir en vinst beror på läge, köpare och hur poolen är byggd.',
    img: 'pool-okar-vardet-pa-villan',
    image_prompt:
      'An elegant Swedish villa with a swimming pool in the garden, real estate listing view, sunny day, realistic architectural photo, no people',
    sections: [
      ['Kort svar',
        '<p>En pool är i första hand en trivselinvestering, inte en värdeinvestering. Den kan göra villan lättare att sälja och locka fler köpare i rätt segment, men räkna inte med att få tillbaka hela byggkostnaden. Se poolen som något du köper för din egen skull.</p>'],
      ['Vad som faktiskt höjer värdet',
        '<ul><li><strong>Säker och välgjord pool.</strong> Ett fackmässigt bygge, gott skick och ett godkänt skydd signalerar låg risk för köparen.</li>'
        + '<li><strong>Privat och väderskyddat läge.</strong> Insynsskyddat läge och sol stora delar av dagen höjer upplevelsen.</li>'
        + '<li><strong>Låg driftkostnad.</strong> Värmepump, varvtalsstyrd pump och täckning gör poolen billigare att äga – vilket köpare uppskattar.</li></ul>'],
      ['När poolen inte höjer värdet',
        '<p>En pool kan till och med bli en belastning om den är sliten, dyr i drift eller om köparen är fel segment. Familjer utan småbarn eller köpare som ser skötsel som ett problem värderar den inte alls. I områden där pool är ovanligt kan den snarare begränsa köpargruppen.</p>'],
      ['Räkneexempel på marginalen',
        '<p>Tänk dig att poolen kostat en summa att bygga. Efter några år har en viss del av kostnaden "betalats igen" i form av egen användning och i vissa fall ett högre försäljningspris. Det är summan av de två – nytta över tid och eventuell värdeökning – som räknas, inte värdeökningen ensam.</p>'
        + '<div class="note">Några exakta procentsatser går inte att slå fast generellt. Det beror på ort, prisklass och köparna. Se poolen som ett boendeval med ett delvis återvunnet värde, inte som en säker avkastning.</div>'],
      ['Alternativ om du vill hålla kostnaden nere',
        '<p>Om målet är att hålla investeringen nere men ändå få bad kan en mindre pool, ett spabad eller en <a href="/poolbygge/att-kopa-pool/">mer budgetvänlig pooltyp</a> vara rimligare. Läs också om hur du sänker <a href="/poolbygge/energismarta-losningar/">driftkostnaden</a>.</p>'],
    ],
    faq: [
      ['Ger en pool alltid ett högre försäljningspris?',
        'Nej. Den kan locka fler köpare och göra villan lättare att sälja i rätt segment, men i fel område eller fel prisklass kan poolen snarare begränsa köpargruppen.'],
      ['Syns poolen i en värdering?',
        'En mäklare väger in poolen som en del av trivsel och skick, men den värderas sällan till hela byggkostnaden. Skick, driftkostnad och läge spelar stor roll för vilken vikt den får.'],
      ['Är det värt att bygga pool bara för värdet?',
        'Nej. Ekonomiskt är poolen oftast ingen ren värdeinvestering. Bygg den för att du vill använda den – då blir en eventuell värdeökning en bonus i stället för själva syftet.'],
    ],
    related: ['att-kopa-pool', 'vad-kostar-det-att-bygga-pool', 'energismarta-losningar'],
  },

  {
    slug: 'energismarta-losningar',
    tag: 'Bygge',
    h1: 'Energismarta poollösningar – sänk driftskostnaden',
    meta_title: 'Energismarta poolösningar – sänk driften',
    meta_desc:
      'Uppvärmning och cirkulation står för den största delen av poolens elräkning. Här är de åtgärder som sänker driftkostnaden mest – i rätt ordning.',
    lead: 'Den största besparingen ligger sällan i att byta ut allt på en gång – utan i att sänka energin där den förbrukas mest: uppvärmning och cirkulation. Börja med det som betalar sig snabbast.',
    img: 'energismarta-losningar',
    image_prompt:
      'A modern energy-efficient pool heat pump unit beside a garden swimming pool, peaceful green garden, daylight, realistic photo, no people',
    sections: [
      ['Var energin faktiskt går åt',
        '<p>I en normal villapool går den klart största delen av elen till uppvärmning, följt av cirkulationspumpen. Belysning och mindre tillbehör är marginellt. Det är alltså värme och pump du ska angripa först.</p>'],
      ['Kort svar: de fem bästa åtgärderna',
        '<ul><li><strong>Täck poolen</strong> när den inte används – minskar värmeförlusten kraftigt.</li>'
        + '<li><strong>Värmepump</strong> i stället för direkt elvärme ger flera gånger mer värme per kilowattimme.</li>'
        + '<li><strong>Varvtalsstyrd pump</strong> cirkulerar vattnet på lägre varv och lägre effekt.</li>'
        + '<li><strong>Rätt filtertid</strong> – kör inte pumpen längre än nödvändigt.</li>'
        + '<li><strong>Höj temperaturen lagom</strong> – varje grad högre temperatur kostar kontinuerligt.</li></ul>'],
      ['Uppvärmning – värmepump, sol eller direkt el',
        '<p>En <a href="/kopguider/varmepump-pool/">värmepump</a> flyttar värme från luften och ger betydligt fler kilowattimmar värme per kilowattimme el än en elpatron. Solfångare ger gratis värme på sommaren men kräver takyta och sol. Direkt elvärme är enkelt men dyrast i drift – använd det helst som komplement, inte huvudlösning.</p>'],
      ['Cirkulation och pumpstyrning',
        '<p>En varvtalsstyrd pump kan köra länge på låg effekt i stället för kort på hög. Eftersom effektbehovet ökar snabbt med varvtalet blir besparingen stor. Utnyttja dessutom gärna billigare eltimmar för uppvärmning.</p>'],
      ['Skydd och täckning sparar två gånger om',
        '<p>Ett <a href="/poolbygge/poolskydd/">poolskydd</a> minskar både värmeförlust och avdunstning. Mindre avdunstning betyder också mindre kemikalieåtgång och mindre påfyllningsvatten – alltså lägre kostnad på flera fronter samtidigt.</p>'],
      ['Automation håller allt på plats',
        '<p>Timer, temperaturstyrning och <a href="/guider/smart-pool-automation/">automatisk dosering</a> ser till att pumpen och värmen jobbar när de behövs och vilar när de inte gör nytta. Det sänker både elförbrukning och kemikalieslöseri.</p>'],
    ],
    faq: [
      ['Vad sparar mest på elräkningen?',
        'I praktiken kombinationen täckning och värmepump. Täckningen minskar värmeförlusten och värmepumpen gör varje kilowattimme el betydligt mer effektiv än direkt elvärme.'],
      ['Är en varvtalsstyrd pump värd merkostnaden?',
        'Ofta ja, eftersom den körs i många timmar per dag och drar mycket mindre på låg varvtal. Besparingen beror på drifttid och elpris, men den brukar betala sig inom rimlig tid.'],
      ['Hur mycket hjälper poolskyddet?',
        'Betydligt. Ett skydd minskar värmeförlusten och avdunstningen, vilket sänker energiåtgången för uppvärmning och behovet av både vatten och kemikalier.'],
    ],
    related: ['poolskydd', 'vad-kostar-det-att-bygga-pool', 'att-kopa-pool'],
  },

  {
    slug: 'bygga-pool-pa-hosten',
    tag: 'Bygge',
    h1: 'Bygga pool på hösten – fördelar och nackdelar',
    meta_title: 'Bygga pool på hösten – för- och nackdelar',
    meta_desc:
      'Att bygga pool utanför högsäsong kan ge kortare kö och bättre pris. Här är fördelarna, nackdelarna och vad som måste vara klart innan frosten kommer.',
    lead: 'De flesta vill ha poolen klar till sommaren – och beställer därför på våren, när alla andra gör det. Att bygga på hösten kan ge både kortare väntetid och bättre pris, om du planerar för kylan.',
    img: 'bygga-pool-pa-hosten',
    image_prompt:
      'A garden with a swimming pool under construction in autumn, orange leaves, excavator, overcast daylight, realistic photo, no people',
    sections: [
      ['Varför hösten kan vara rätt tid',
        '<p>Poolbyggare har mest att göra tidigt på säsongen. På hösten är trycket lägre, vilket ofta ger kortare väntetid, bättre tillgång till hantverkare och ibland mer förhandlingsutrymme i priset.</p>'],
      ['Fördelar',
        '<ul><li>Kortare kö och mer flexibel tidplan.</li>'
        + '<li>Ofta lägre pris utanför högsäsong.</li>'
        + '<li>Poolen hinner "sätta sig" och kan tas i drift direkt vid vårstarten.</li>'
        + '<li>Trädgården runt poolen hinner etablera sig innan nästa sommar.</li></ul>'],
      ['Nackdelar',
        '<ul><li>Känsligare för väder – regn, tjäle och tidig frost kan fördröja gjutning och återställning.</li>'
        + '<li>Svårare att plantera och färdigställa trädgården samma år.</li>'
        + '<li>Vissa arbeten, som plattsättning och gjutning, kräver plusgrader.</li></ul>'],
      ['Detta måste vara klart före frosten',
        '<p>Gjutning av betong, återfyllning och anslutning av el och vatten bör vara klara innan tjälen kommer. Markarbete och stomme fungerar bra i kylig väderlek, men vattenburna arbeten och ytskikt är känsligare.</p>'],
      ['Övervintra en ny pool',
        '<p>Är poolen inte tagen i drift ska den ändå vinterskyddas korrekt. Läs vår guide om <a href="/guider/vinterstangning-pool/">vinterstängning</a> för hur du skyddar liner, utrustning och rör. En ny pool som står fel över vintern kan skadas innan den ens använts.</p>'],
      ['Så planerar du för en höstinstallation',
        '<p>Bestäm redan i god tid vad som ska göras före och efter frosten, och skriv in det i avtalet. Läs även <a href="/poolbygge/fran-drom-till-verklighet/">planeringsguiden</a> för hela tidslinjen.</p>'],
    ],
    faq: [
      ['Kan man bygga pool på vintern?',
        'Stora delar av markarbetet går att göra vintertid, men gjutning, ytskikt och en del installationer kräver att det inte är tjäle eller minusgrader. Planera de väderkänsliga momenten till mildare perioder.'],
      ['Blir det verkligen billigare på hösten?',
        'Ofta, eftersom efterfrågan är lägre. Hur mycket beror på entreprenörens beläggning och materialpriser – jämför offerter och var tydlig med tidplanen.'],
      ['Är en ny pool svårare att övervintra?',
        'Den behöver samma omsorg som en använd pool, ibland mer eftersom liner och anslutningar är nya. Följ en ordentlig vinterstängningsrutin även första året.'],
    ],
    related: ['att-kopa-pool', 'fran-drom-till-verklighet', 'poolskydd'],
  },

  {
    slug: 'bygganmalan-och-bygglov',
    tag: 'Bygge',
    h1: 'Bygganmälan och bygglov för pool – vad gäller?',
    meta_title: 'Bygganmälan och bygglov för pool – regler',
    meta_desc:
      'Krävs bygglov eller bygganmälan för pool? Här är skillnaden, när strandskydd och detaljplan spelar in, och checklistan inför kontakt med kommunen.',
    lead: 'Oftast räcker en bygganmälan – men det beror på poolens utformning, tomtens läge och kommunens regler. Säkerhet och avstånd till tomtgräns gäller oavsett vad du bygger.',
    img: 'bygganmalan-och-bygglov',
    image_prompt:
      'A garden with a swimming pool and a safety fence around it, planning documents and a house in the background, daylight, realistic photo, no people',
    sections: [
      ['Kort svar',
        '<p>En pool är normalt inte en byggnad och kräver därför sällan bygglov. I de flesta kommuner räcker det med en bygganmälan, ibland kombinerat med en anmälan om markarbete. Kontrollera alltid med din kommun – reglerna varierar och ändras.</p>'],
      ['Skillnaden mellan bygganmälan och bygglov',
        '<p><strong>Bygganmälan</strong> innebär att du informerar kommunen innan arbetet börjar. <strong>Bygglov</strong> är ett formellt tillstånd som krävs i fler fall – till exempel inom detaljplanerat område, i vissa känsliga lägen eller om poolen kompletteras med byggnader som poolhus eller tak.</p>'],
      ['När det blir mer komplicerat',
        '<ul><li><strong>Strandskydd.</strong> Nära vatten (sjöar, hav, vattendrag) kan strandskyddet kräva dispens förutom i de fall kommunen upphävt det i detaljplan.</li>'
        + '<li><strong>Detaljplan.</strong> Planen kan styra var och hur du får bygga på tomten.</li>'
        + '<li><strong>Byggnader.</strong> Poolhus, tak och större komplementbyggnader följer egna regler.</li></ul>'],
      ['Säkerhet – det som gäller oavsett',
        '<p>En privat pool omfattas inte av samma krav som en allmän badanläggning, men säkerheten är ditt ansvar. Barnsäkert skydd, staket med låsbar grind eller andra skyddsåtgärder skyddar framför allt – och kan i vissa sammanhang krävas. Räkna in detta redan i <a href="/poolbygge/att-kopa-pool/">planeringen</a>.</p>'],
      ['Checklista inför kontakt med kommunen',
        '<ul><li>Rita in poolens placering och mått på en tomtkarta.</li>'
        + '<li>Kontrollera om tomten ligger inom detaljplan eller strandskydd.</li>'
        + '<li>Notera avståndet till tomtgräns och eventuella ledningar.</li>'
        + '<li>Fråga om bygganmälan, markarbete och eventuellt bygglov behövs samtidigt.</li>'
        + '<li>Fråga om det finns krav på återställning efter grävning.</li></ul>'],
      ['Gräv inte förrän du vet',
        '<p>Att börja gräva innan anmälan är klar kan leda till onödiga problem. Läs hela <a href="/poolbygge/fran-drom-till-verklighet/">planeringen</a> så att tillståndssteget kommer i rätt ordning.</p>'],
    ],
    faq: [
      ['Krävs bygglov för en pool på villatomt?',
        'I de flesta fall inte, men undantag finns – särskilt inom detaljplan, nära vatten eller tillsammans med poolhus och tak. Stäm alltid av med din kommun.'],
      ['Vad händer om jag bygger utan anmälan?',
        'Du riskerar att behöva avbryta arbetet, söka tillstånd i efterhand och i värsta fall betala byggsanktionsavgift. Gör anmälan innan arbetet börjar.'],
      ['Gäller strandskydd även en privat pool?',
        'Ja, om poolen ligger inom strandskyddat område kan dispens krävas. Reglerna beror på hur nära vattnet tomten ligger och om kommunen upphävt strandskyddet i detaljplan.'],
    ],
    related: ['att-kopa-pool', 'fran-drom-till-verklighet', 'poolskydd'],
  },

  {
    slug: 'liner-till-poolen',
    tag: 'Bygge',
    h1: 'Liner till poolen – material, färg och val',
    meta_title: 'Liner till poolen – material, färg och val',
    meta_desc:
      'Liner är poolens tätskikt och avgör både utseende och känsla. Här är materialen, färgernas effekt på vattenfärgen och vad som påverkar livslängden.',
    lead: 'Linern är det skikt du och vattnet ser, och den skyddar stommen mot vatten. Rätt val handlar om mer än färg – material, tjocklek och montering avgör hur länge den håller.',
    img: 'liner-till-poolen',
    image_prompt:
      'Close view of a fresh blue pool liner being fitted into a swimming pool, clean turquoise surface, daylight, realistic photo, no people',
    sections: [
      ['Vad är en liner?',
        '<p>En liner är en färdigformad duk som klär insidan av poolen och gör den vattentät. Den används i betongpooler och i många prefabricerade pooler. Förutom att hålla vattnet på plats ger den poolen dess färg och ytfinish.</p>'],
      ['Materialen',
        '<ul><li><strong>PVC-liner.</strong> Vanligast, mjuk och formbar, finns i många mönster och färger. Känsligare för vassa föremål.</li>'
        + '<li><strong>Armarad/belagd liner.</strong> PVC med förstärkning – tåligare och mer formstabil.</li>'
        + '<li><strong>TPO/tryckkänslig liner.</strong> Ofta motståndskraftig mot kemikalier och UV, används i högre kvalitetssegment.</li></ul>'],
      ['Färgen förändrar vattnet',
        '<p>Linerns färg styr hur vattnet upplevs. Ljusblå ger den klassiska turkosa poolkänslan. Mörkare grå eller grön tonar vattnet mot djupare, mer "naturligt" blå och döljer smuts något bättre. Sand och gräddvita toner ger ett ljusare, mjukare intryck.</p>'],
      ['Tjocklek och livslängd',
        '<p>Tjockare liner slits långsammare men är inte automatiskt bättre – passform och montering spelar minst lika stor roll. Livslängden beror på vattenkemi, UV-exponering och mekanisk påfrestning. Att hålla <a href="/guider/ph-och-klor/">pH och klor</a> i balans skyddar linern mer än något annat.</p>'],
      ['Skötsel som förlänger livet',
        '<ul><li>Håll pH stabilt – både för surt och för basiskt vatten sliter på duken.</li>'
        + '<li>Undvik att tappa vassa föremål och använd inte skarpa redskap mot botten.</li>'
        + '<li>Täck poolen när den inte används – minskar UV och smuts.</li>'
        + '<li>Torka rent vid vattenlinjen innan smuts gror in.</li></ul>'],
      ['När det är dags att byta',
        '<p>Rynkor, urblekning, sprickor eller punkteringsläckor är tecken på att linern närmar sig slutet. Ett byte görs när poolen är tömd och innebär att en ny duk monteras. Planera bytet utanför badsäsongen.</p>'],
    ],
    faq: [
      ['Hur länge håller en liner?',
        'Försiktigt sagt många år, men livslängden varierar kraftigt med vattenkemi, sol och användning. Rätt balanserat vatten och täckning förlänger livet betydligt.'],
      ['Kan jag byta liner själv?',
        'Visst, men det kräver noggrannhet – särskilt vid måttagning och infästning i bräddavlopp och trappa. Fel passform ger rynkor och läckor. Många väljer att anlita en installatör.'],
      ['Vilken färg gör vattnet blåast?',
        'Ljusblå liner ger den mest klassiska turkosa tonen. Mörkare grå och gröna toner ger ett djupare blått intryck, medan sand- och gräddvita toner ger ett ljusare vatten.'],
    ],
    aff: {
      title: 'Liner, rengöring och vattenvård',
      text: 'Rätt vattenkemi är det som förlänger linerns liv. Se testkit och preparat.',
      cta: 'Se vattenvård',
      url: 'https://www.poolstore.se',
    },
    related: ['att-kopa-pool', 'poolskydd', 'pooltrappa-eller-stege'],
  },

  {
    slug: 'pooltrappa-eller-stege',
    tag: 'Bygge',
    h1: 'Pooltrappa eller stege – så väljer du',
    meta_title: 'Pooltrappa eller stege – så väljer du rätt',
    meta_desc:
      'Stege eller inbyggd trappa? Här är skillnaderna i komfort, säkerhet, utrymme och pris – så att du väljer rätt lösning för just din pool och dina badare.',
    lead: 'Valet mellan stege och trappa handlar om hur du vill ta dig i och ur vattnet. Stegen är enkel och flexibel, trappan är bekväm och säkrare – men kräver mer av poolen och planeringen.',
    img: 'pooltrappa-eller-stege',
    image_prompt:
      'A swimming pool with a wide submerged entry step and a stainless steel ladder, clear blue water, garden, daylight, realistic photo, no people',
    sections: [
      ['Skillnaden i korthet',
        '<p>En <strong>stege</strong> monteras vid kanten och används för att klättra i och ur. En <strong>trappa</strong> byggs in i poolen och ger en bredare, mer naturlig nedgång – ofta med en hylla eller sittsteg. Trappan ska planeras redan vid bygget.</p>'],
      ['Stege – för- och nackdelar',
        '<ul><li>Enkel att installera och flytta, lägre kostnad.</li>'
        + '<li>Tar ingen plats inne i poolen i övrigt.</li>'
        + '<li>Mindre bekväm för barn, äldre och den som vill sitta i vattnet.</li>'
        + '<li>Kräver säker montering så den inte glider.</li></ul>'],
      ['Trappa – för- och nackdelar',
        '<ul><li>Bekväm och säker ingång, bra för familjer.</li>'
        + '<li>Ger ofta en sittplats eller en grund del att vistas på.</li>'
        + '<li>Kräver inbyggnad och påverkar poolens utformning.</li>'
        + '<li>Högre kostnad och ett beslut som måste tas tidigt.</li></ul>'],
      ['Inbyggd eller fristående lösning',
        '<p>En fristående trappa kan ställas i poolen i efterhand, medan en inbyggd trappa gjuts eller monteras som en del av stommen. Fristående lösningar är enklare att lägga till men tar mer plats i vattnet och kan upplevas mindre stabila.</p>'],
      ['Säkerhet för barn och äldre',
        '<p>Breda steg, halkskydd och en tydlig ingång gör poolen säkrare för både små barn och äldre. Trappan blir ofta en naturlig samlingsplats. Kombinera gärna med ett <a href="/poolbygge/poolskydd/">poolskydd</a> som håller obehöriga borta när poolen inte används.</p>'],
      ['Pris och rekommendation',
        '<p>Trappan kostar mer men höjer komforten för nästan alla badare. Har du barn, äldre i familjen eller badar ofta är en trappa ofta värd det. Är poolen främst för simning eller budgeten stram, räcker en rejäl stege.</p>'],
    ],
    faq: [
      ['Kan jag lägga till en trappa i efterhand?',
        'En inbyggd trappa är svårast att lägga till efteråt eftersom den hör ihop med stommen. Fristående trappor och stegar går att komplettera senare.'],
      ['Vad är säkrast för barn?',
        'Breda steg med halkskydd och en tydlig, säker ingång – tillsammans med ett barnsäkert skydd på poolen när den inte används.'],
      ['Tar en stege mycket plats?',
        'Nej, den sitter vid kanten. En fristående trappa tar däremot mer plats inne i poolen och påverkar hur du kan röra dig i vattnet.'],
    ],
    related: ['att-kopa-pool', 'liner-till-poolen', 'poolskydd'],
  },

  {
    slug: 'poolskydd',
    tag: 'Bygge',
    h1: 'Poolskydd – säkerhet, värme och rätt val',
    meta_title: 'Poolskydd – säkerhet, värme och val',
    meta_desc:
      'Poolskydd håller barn och djur borta, sparar värme och minskar kemikalieåtgång. Här är typerna att välja mellan och vad som avgör valet.',
    lead: 'Ett poolskydd gör tre saker samtidigt: det skyddar mot obehöriga bad, håller värmen kvar och minskar både kemikalieåtgång och skräp. Vilket skydd du väljer beror på om säkerheten, värmen eller priset väger tyngst.',
    img: 'poolskydd',
    image_prompt:
      'A rectangular swimming pool covered with a safety cover in a private garden, autumn leaves on the cover, daylight, realistic photo, no people',
    sections: [
      ['Varför ett skydd är en av de bästa investeringarna',
        '<p>Skyddet påverkar flera kostnader på en gång. Det minskar värmeförlusten, bromsar avdunstningen (som drar energi och kemikalier) och håller löv och skräp ute så att reningen får mindre att jobba med. Det är därför skyddet ofta räknas som den enskilt mest kostnadseffektiva åtgärden.</p>'],
      ['Typerna',
        '<ul><li><strong>Solfolie.</strong> Flyter på ytan, billig, sparar värme och minskar avdunstning. Skyddar inte mot fall.</li>'
        + '<li><strong>Presenning med upprullning.</strong> Håller skräp borta, enkel, men inte personsäker.</li>'
        + '<li><strong>Säkerhetsöverdrag.</strong> Spänns fast och bär vikt – det skydd som skyddar mot att någon faller i.</li>'
        + '<li><strong>Lamelltäckning.</strong> Rullar ut över ytan, begränsar kroppsgenomträngning och sparar värme och kemikalier.</li>'
        + '<li><strong>Pooltak.</strong> Högst värme- och säkerhetseffekt men större investering och kräver utrymme.</li></ul>'],
      ['Säkerhet har egna krav',
        '<p>Ett skydd som ska hindra att ett barn faller i måste vara konstruerat för det – en tunn solfolie gör ingen nytta där. Barnsäkra lösningar kombineras ofta med staket och grind. Läs mer i vår guide om <a href="/guider/pooltackning-sakerhet/">pooltäckning och säkerhet</a>.</p>'],
      ['Värme och kemibesparing',
        '<p>Ju tätare skyddet sluter om ytan, desto mindre värme och vatten försvinner. I kombination med rätt <a href="/poolbygge/energismarta-losningar/">energismarta lösningar</a> gör skyddet att värmepumpen behöver arbeta mindre och att du doserar mindre kemi.</p>'],
      ['Så väljer du',
        '<p>Prioriterar du säkerhet och har små barn: välj ett säkerhetsöverdrag eller pooltak. Prioriterar du värme och enkel vardag: en lamelltäckning är ett starkt alternativ. Vill du komma billigt undan och mest hålla skräp borta: solfolie eller presenning med upprullning.</p>'],
    ],
    faq: [
      ['Vilket skydd sparar mest energi?',
        'De tätaste skydden – lamelltäckning och pooltak – minskar värmeförlusten mest. Även solfolie ger tydlig besparing till låg kostnad.'],
      ['Kan ett skydd ersätta staket?',
        'Ett säkerhetsöverdrag eller pooltak kan ge ett starkt skydd mot fall, men kraven och rekommendationerna varierar. Kombinationen skydd och staket med låsbar grind är den säkraste lösningen.'],
      ['Hur påverkar skyddet kemikalieåtgången?',
        'Mindre skräp och mindre avdunstning gör att vattnet håller sig stabilare, vilket sänker både klorbehov och påfyllning av vatten.'],
    ],
    related: ['energismarta-losningar', 'att-kopa-pool', 'pooltrappa-eller-stege'],
  },

  {
    slug: 'visualisera-poolprojekt',
    tag: 'Bygge',
    h1: 'Visualisera ditt poolprojekt innan du bygger',
    meta_title: 'Visualisera ditt poolprojekt innan du bygger',
    meta_desc:
      'Se poolen i trädgården innan spaden sätts i marken. Enkla metoder – från snöre och krita till 3D och AR – för att testa storlek, läge och proportioner.',
    lead: 'Det är svårt att föreställa sig hur en pool känns i sin trädgård på en ritning. Genom att mäta upp och visualisera innan bygget upptäcker du fel proportioner och dåligt läge medan det fortfarande är gratis att ändra.',
    img: 'visualisera-poolprojekt',
    image_prompt:
      'A garden with a swimming pool area marked out on the lawn with string and stakes, house in background, daylight, realistic photo, no people',
    sections: [
      ['Varför visualisera?',
        '<p>En pool tar större plats än man tror, och läget avgör både sol, insyn och hur trädgården används. Att testa idén i verklig skala – innan grävningen – är det billigaste sättet att undvika ett dyrt misstag.</p>'],
      ['Enklaste metoden: snöre och krita',
        '<p>Mät ut poolens exakta mått i trädgården med snöre, pinnar eller rent mjöl/krita på gräset. Ställ ut stolar vid kanten och gå runt. Du får direkt en känsla för skala, gångutrymme och hur mycket gräsmatta som blir kvar.</p>'],
      ['Tänk på sol, skugga och insyn',
        '<p>Studera hur skuggan rör sig under en dag: träd, husväggar och häckar påverkar hur mycket sol ytan får och hur tidigt på säsongen poolen värms. Tänk också på insyn från grannar och gata.</p>'],
      ['3D-verktyg och modeller',
        '<p>Med enkla 3D-program eller en app för trädgårdsplanering kan du bygga upp trädgården i skala och prova poolens storlek, form och färg. Utgå från dina egna mått på tomten och huset så blir bilden realistisk.</p>'],
      ['AR – pool i din egen trädgård',
        '<p>Med förstärkt verklighet (AR) kan du via mobilen placera en virtuell pool i din faktiska trädgård och se hur den ser ut i rätt perspektiv. Det ger en bra uppfattning om proportioner och läge, även om tekniken inte ersätter exakta mått.</p>'],
      ['Testa innan du bestämmer',
        '<p>Oavsett metod: lev med idén några dagar. Flytta markeringen, prova olika storlekar och se hur trädgården fungerar runtomkring. Först när du är nöjd går du vidare till <a href="/poolbygge/fran-drom-till-verklighet/">planering och upphandling</a>.</p>'],
    ],
    faq: [
      ['Behöver jag dyra program för att visualisera?',
        'Nej. Snöre och krita i trädgården ger överraskande mycket, och det finns gratis eller billiga appar för trädgårdsplanering och AR om du vill se poolen mer realistiskt.'],
      ['Hur vet jag att poolen får plats?',
        'Mät upp poolens mått i verklig skala på plats och lägg till utrymme för gång, kanter och säkerhetsavstånd. Då ser du direkt om det blir trångt.'],
      ['Varför är läget viktigare än formen?',
        'Läget styr sol, insyn och hur trädgården används runtomkring. Formen kan ändras senare i tanken – men en pool på fel plats är svår att flytta.'],
    ],
    related: ['att-kopa-pool', 'fran-drom-till-verklighet', 'vad-kostar-det-att-bygga-pool'],
  },
];
