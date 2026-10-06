// Nya guider (omgång 2) – byggda mot verkliga sökvolymer ur Keyword Planner.
// Egna texter, samma schema som content.json.
export const EXTRA_GUIDER2 = [
  {
    slug: 'poolpump',
    tag: 'Guide',
    h1: 'Poolpump – guide till rätt pump och flöde',
    meta_title: 'Poolpump – guide till rätt pump och flöde',
    meta_desc:
      'Poolpumpen är hjärtat i reningsverket. Så dimensionerar du rätt flöde, väljer mellan enfas och varvtalsstyrning och undviker de vanligaste pumpproblemen.',
    lead: 'Utan rätt flöde spelar det ingen roll hur bra filter du har – vattnet hinner inte renas. Pumpen ska omsätta hela poolens volym några gånger per dygn, varken mer eller mindre.',
    img: 'poolpump',
    image_prompt: 'A pool circulation pump unit in a clean pool equipment room beside a swimming pool, pipes and valves, daylight, realistic photo, no people',
    sections: [
      ['Vad poolpumpen gör',
        '<p>Pumpen suger vatten genom skimmer och bräddavlopp, trycker det genom filtret och tillbaka ut i poolen. Flödet avgör hur ofta vattnet passerar reningsverket – och därmed hur rent det blir.</p>'],
      ['Rätt flöde – tumregeln',
        '<p>En vanlig tumregel är att hela vattenvolymen ska omsättas ungefär två till tre gånger per dygn. En pool på 40 m³ behöver alltså ett flöde som klarar cirka 80–120 m³ under dygnet, vilket de flesta pumpar når genom att gå 6–10 timmar per dag.</p>'],
      ['Enfas eller varvtalsstyrd',
        '<p>En <strong>envarvig pump</strong> är billig men går alltid på full effekt. En <strong>varvtalsstyrd pump</strong> kan köra längre på låg effekt och drar betydligt mindre el för samma reningsvolym – oftast den mest kostnadseffektiva investeringen du kan göra i reningsverket.</p>'],
      ['Vanliga pumpproblem',
        '<ul><li><strong>Luft i systemet:</strong> pumpen suger luft via otät korg eller inlopp och tappar tryck.</li>'
        + '<li><strong>Igensatt förfilter:</strong> rengör pumpkorgen ofta.</li>'
        + '<li><strong>För högt filtetryck:</strong> backspola filtret.</li>'
        + '<li><strong>Pumpen låter illa:</strong> kan vara lager, smuts eller torrkörning.</li></ul>'],
      ['Effektiv drift',
        '<p>Kör pumpen på timer anpassad efter volym och temperatur, inte dygnet runt på full effekt. Läs mer om <a href="/guider/poolfilter-guide/">filter och sandfilter</a>, <a href="/guider/backspola-pool/">hur du backspolar</a> och <a href="/poolbygge/energismarta-losningar/">energismarta lösningar</a>.</p>'],
    ],
    faq: [
      ['Hur länge ska poolpumpen gå per dag?', 'Så länge att hela vattenvolymen omsätts två till tre gånger per dygn – oftast 6–10 timmar beroende på pump, volym och temperatur.'],
      ['Är en varvtalsstyrd pump värd merkostnaden?', 'Ofta ja. Den går många timmar per dag och drar betydligt mindre på låg effekt, vilket ger lägre elräkning för samma rening.'],
      ['Varför tappar pumpen tryck?', 'Vanligast är igensatt förfilterkorg eller luft i systemet. Kolla korgen först, därefter att pumpen suger tätt.'],
    ],
    related: ['poolfilter-guide', 'energismarta-losningar', 'pumphus'],
  },
  {
    slug: 'backspola-pool',
    tag: 'Guide',
    h1: 'Backspola poolen – när och hur du gör det',
    meta_title: 'Backspola pool – när och hur du gör det',
    meta_desc:
      'Backspolning rensar sandfiltret och återställer flödet. Så vet du när det är dags, gör det rätt och undviker att slösa vatten i onödan.',
    lead: 'Backspolning är den enklaste skötselåtgärden som gör mest skillnad – men bara om du gör den när filtret faktiskt behöver det. För ofta slösar vatten, för sällan försämrar reningen.',
    img: 'backspola-pool',
    image_prompt: 'A person backwashing a pool sand filter with a multi-port valve, water draining onto grass beside a swimming pool, daylight, realistic photo',
    sections: [
      ['Varför backspola',
        '<p>När filtret fångar smuts stiger trycket och flödet sjunker. Backspolning vänder vattenflödet så att smutsen spolas ut ur filtret – reningen blir effektiv igen.</p>'],
      ['När det är dags',
        '<p>Utgå från tryckmätaren: stiger den cirka 0,2–0,3 bar över det normala nystartade värdet är det dags. Som grov riktlinje backspolar man var 7:e–14:e dag under säsong, oftare vid mycket badande.</p>'],
      ['Steg för steg',
        '<ol><li>Stäng pumpen.</li><li>Vrid ventilen till backspolning.</li><li>Starta pumpen och spola tills vattnet i siktglaset är klart, ca 1–2 minuter.</li><li>Stäng av och vrid till sköljning, kör några sekunder.</li><li>Vrid tillbaka till filtrering och starta pumpen.</li></ol>'],
      ['Vanliga misstag',
        '<ul><li>Backspola utan att stänga pumpen.</li><li>Glömma sköljningen, så smuts åker tillbaka i poolen.</li><li>Backspola för sällan och köra på högt tryck.</li></ul>'],
      ['Efter backspolning',
        '<p>Fyll på vatten i poolen till rätt nivå, eftersom backspolning tappar en del. Håll koll på tryckmätaren som normalt. Se även <a href="/guider/poolfilter-guide/">filterguiden</a> och <a href="/guider/poolvard-vecka/">veckorutinen</a>.</p>'],
    ],
    faq: [
      ['Hur ofta ska man backspola poolen?', 'När trycket stigit ca 0,2–0,3 bar över normalt, oftast var 7:e–14:e dag i säsong. Vid kraftig badbelastning oftare.'],
      ['Hur länge ska man backspola?', 'Tills vattnet i siktglaset är klart, oftast 1–2 minuter, följt av några sekunders sköljning.'],
      ['Tappar poolen vatten vid backspolning?', 'Ja, en del vatten går åt. Fyll efter till rätt nivå så att skimmern fungerar.'],
    ],
    related: ['poolfilter-guide', 'poolpump', 'poolvard-vecka'],
  },
  {
    slug: 'pumphus',
    tag: 'Guide',
    h1: 'Pumphus till poolen – guide för tekniken',
    meta_title: 'Pumphus till poolen – guide för tekniken',
    meta_desc:
      'Pumphuset skyddar pump, filter och värme – och dämpar ljud. Så planerar du storlek, placering, el och ventilation så att tekniken håller länge.',
    lead: 'Pumphuset är poolens teknikrum. Ett genomtänkt pumphus skyddar utrustningen mot frost och väder, dämpar ljudet och gör service och vinterstängning mycket enklare.',
    img: 'pumphus',
    image_prompt: 'A neat wooden pool equipment house with a pump and filter inside, beside a garden swimming pool, daylight, realistic photo, no people',
    sections: [
      ['Varför pumphus',
        '<p>Pump, filter och värmare mår bäst frostfritt, torrt och skyddat. Ett pumphus håller dem skyddade vid <a href="/guider/vinterstangning-pool/">vinterstängning</a>, dämpar pumpens ljud och skyddar mot skräp och fukt.</p>'],
      ['Storlek och innehåll',
        '<p>Räkna in pump, filter, eventuell värmepump eller värmare, ventiler och rör, plus plats att komma åt för service. Det ska vara lätt att byta filter och komma åt ventilerna utan att krypa.</p>'],
      ['Placering',
        '<p>Sätt pumphuset så nära poolen att rörlängden blir rimlig – för långa sugledningar ger tryckfall. Undvik att ställa det under sovrumsfönster, eftersom pumpen låter. Ordna dränering så vatten inte blir stående.</p>'],
      ['El, ventilation och frostskydd',
        '<ul><li>Egen säkrad elmatning med jordfelsbrytare.</li>'
        + '<li>Ventilation så fukt inte byggs upp.</li>'
        + '<li>Isolering och frostvakt om tekniken används vintertid.</li>'
        + '<li>Belysning så du ser vad du gör vid service.</li></ul>'],
      ['Service och vinter',
        '<p>Ett pumphus gör <a href="/guider/backspola-pool/">backspolning</a> och underhåll enkelt. Planera för hur du stänger av och tömmer systemet inför vintern. Läs vidare om <a href="/poolbygge/att-kopa-pool/">att köpa pool</a>.</p>'],
    ],
    faq: [
      ['Behöver poolen ett pumphus?', 'Inte obligatoriskt, men det skyddar utrustningen mot frost, fukt och skräp och dämpar ljudet – särskilt värdefullt i kallare klimat.'],
      ['Hur stort ska pumphuset vara?', 'Tillräckligt för pump, filter och tillhörande utrustning med plats att komma åt för service. Räkna hellre för stort än för trångt.'],
      ['Måste pumphuset vara uppvärmt?', 'Om tekniken används vintertid behövs frostskydd och isolering. Används poolen bara sommartid kan systemet tömmas vid vinterstängning.'],
    ],
    related: ['poolpump', 'vinterstangning-pool', 'energismarta-losningar'],
  },
  {
    slug: 'glasfiberpool',
    tag: 'Guide',
    h1: 'Glasfiberpool – fördelar, nackdelar och val',
    meta_title: 'Glasfiberpool – fördelar och nackdelar',
    meta_desc:
      'Glasfiberpool är fabriksfärdig, snabb att installera och enkel att sköta. Här är fördelarna, begränsningarna och vad du bör tänka på före köp.',
    lead: 'En glasfiberpool kommer färdig från fabrik och lyfts på plats – snabbare att installera och enklare att sköta än en gjuten pool. Begränsningen är att du väljer ur ett färdigt sortiment av former och storlekar.',
    img: 'glasfiberpool',
    image_prompt: 'A freshly installed white fiberglass swimming pool shell in a garden, construction setting, daylight, realistic photo, no people',
    sections: [
      ['Vad en glasfiberpool är',
        '<p>Stommen är gjuten i glasfiberarmerad plast vid fabrik och kommer som en hel form. Den grävs ner eller delvis ner, och ytan är slät och tät utan liner eller kakel.</p>'],
      ['Fördelar',
        '<ul><li>Snabb installation – få arbetsdagar på plats.</li>'
        + '<li>Slät yta utan fogar, lätt att rengöra och svårare för alger att fästa.</li>'
        + '<li>Lång livslängd och lågt underhåll.</li>'
        + '<li>Mindre risk för läckage än byggda pooler.</li></ul>'],
      ['Nackdelar och begränsningar',
        '<ul><li>Bundna former och storlekar – inte måttbeställd.</li>'
        + '<li>Kräver grävmaskin och kranlyft på plats.</li>'
        + '<li>Kan inte byggas i lika fria former som betong.</li>'
        + '<li>Färg och yta är bestämda på förhand.</li></ul>'],
      ['Skötsel',
        '<p>Underhållet är enkelt: håll <a href="/guider/ph-och-klor/">pH och klor</a> i balans, kör pump och filter enligt <a href="/guider/poolpump/">pumpguiden</a> och täck poolen när den inte används.</p>'],
      ['Jämför med andra byggsätt',
        '<p>Läs vår <a href="/poolbygge/att-kopa-pool/">guide om att köpa pool</a> för att jämföra glasfiber mot betong/liner och ovanmark. Se också <a href="/poolbygge/vad-kostar-det-att-bygga-pool/">kostnadsguiden</a>.</p>'],
    ],
    faq: [
      ['Hur länge håller en glasfiberpool?', 'Glasfiber är känt för lång livslängd med lågt underhåll. Exakt livslängd beror på skötsel, vattenkemi och klimat.'],
      ['Är glasfiberpool dyrare än betong?', 'Ofta ligger den mellan ovanmark och gjuten betong i pris, men installation med grävning och lyft tillkommer. Jämför hela projektet, inte bara poolen.'],
      ['Kan man bygga glasfiberpool själv?', 'Själva formen levereras färdig, men grävning, lyft och anslutning kräver maskiner och erfarenhet. De flesta anlitar entreprenör.'],
    ],
    related: ['att-kopa-pool', 'vad-kostar-det-att-bygga-pool', 'liner-till-poolen'],
  },
  {
    slug: 'terasspool-och-ovanmarkspool',
    tag: 'Guide',
    h1: 'Terasspool och ovanmarkspool – guide',
    meta_title: 'Terasspool och ovanmarkspool – guide',
    meta_desc:
      'Ovanmarkspool och terasspool är billigare och snabbare än nedgrävd pool. Här är typerna, vad de kostar i drift och vad du ska tänka på före köp.',
    lead: 'En ovanmarkspool eller terasspool kräver ingen stor grävning och kan vara igång på kort tid. Den är billigare i inköp men har lägre livslängd och begränsad höjd och form.',
    img: 'terasspool',
    image_prompt: 'An above ground swimming pool on a wooden deck terrace in a garden, ladder, sunny day, realistic photo, no people',
    sections: [
      ['Vad som menas',
        '<p><strong>Ovanmarkspool</strong> står på marken eller en altan med synliga väggar. <strong>Terasspool</strong> är ofta delvis nedsänkt i en trall eller byggd i anslutning till en terass så att kanten är i nivå med golvet.</p>'],
      ['Fördelar',
        '<ul><li>Lägre inköpspris och snabbare installation.</li>'
        + '<li>Kan ofta monteras ner och flyttas.</li>'
        + '<li>Ingen tung grävning eller bygglov i samma utsträckning.</li>'
        + '<li>Bra första pool utan stort byggprojekt.</li></ul>'],
      ['Nackdelar',
        '<ul><li>Kortare livslängd och känsligare väggar.</li>'
        + '<li>Sämre isolering – kräver mer uppvärmning för samma temperatur.</li>'
        + '<li>Begränsade mått och höjder.</li>'
        + '<li>Bräddavlopp och inbyggt reningsverk saknas ibland.</li></ul>'],
      ['Drift och skötsel',
        '<p>Även en ovanmarkspool behöver rätt kemi. Håll <a href="/guider/ph-och-klor/">pH och klor</a> i balans och lär dig <a href="/guider/poolvard-vecka/">veckorutinen</a>. Många använder en <a href="/kopguider/basta-poolrengoraren/">rengörare</a> för botten.</p>'],
      ['För vem passar den?',
        '<p>Perfekt om du vill bada utan byggprojekt eller bor så att en nedgrävd pool inte är möjlig. Vill du ha fria former och längst livslängd är en <a href="/poolbygge/att-kopa-pool/">nedgrävd pool</a> bättre – läs också <a href="/guider/glasfiberpool/">om glasfiberpool</a>.</p>'],
    ],
    faq: [
      ['Behöver en ovanmarkspool bygglov?', 'Oftare inte, men reglerna varierar. Stäm av med din kommun om poolen ska stå permanent eller byggas in i en terass.'],
      ['Hur länge håller en ovanmarkspool?', 'Kortare än en nedgrävd pool, ofta en bit under vad en gjuten eller glasfiberpool klarar. Livslängden beror på konstruktion och skötsel.'],
      ['Kostar den mycket i drift?', 'Uppvärmningen drar mer än hos en isolerad nedgrävd pool eftersom värmeförlusten är större. Ett <a href="/poolbygge/poolskydd/">skydd</a> sänker förbrukningen märkbart.'],
    ],
    related: ['liten-pool', 'att-kopa-pool', 'poolskydd'],
  },
  {
    slug: 'stalvagsspool',
    tag: 'Guide',
    h1: 'Stålväggspool – guide',
    meta_title: 'Stålväggspool – fördelar och uppbyggnad',
    meta_desc:
      'En stålväggspool har stålplåt som stomme med liner på insidan. Så är den uppbyggd, vad den kostar och hur den skiljer sig från glasfiber och betong.',
    lead: 'En stålväggspool består av en stålplåtsstomme med liner på insidan och används både nedgrävd och som ovanmark. Den är ett mellanting i pris och flexibilitet mellan ovanmark och gjuten pool.',
    img: 'stalvagsspool',
    image_prompt: 'A steel wall swimming pool structure with a liner being installed, construction setting in a garden, daylight, realistic photo, no people',
    sections: [
      ['Uppbyggnad',
        '<p>Prefabrikerade stålpaneler monteras till en stomme som grävs ner eller ställs på marken. En <a href="/poolbygge/liner-till-poolen/">liner</a> klär insidan och gör poolen tät, och botten gjuts eller förbereds för duk.</p>'],
      ['Fördelar',
        '<ul><li>Rimligare än gjuten betong men stadigare än enklare ovanmarkspooler.</li>'
        + '<li>Går att bygga nedgrävd med kant i nivå med marken.</li>'
        + '<li>Snabbare att bygga än en fullgjuten pool.</li>'
        + '<li>Fungerar med standardutrustning för rening och värme.</li></ul>'],
      ['Nackdelar',
        '<ul><li>Linern behöver så småningom bytas.</li>'
        + '<li>Stommen kräver rostskydd mot fukt.</li>'
        + '<li>Fria former och mått är begränsade.</li></ul>'],
      ['Skötsel',
        '<p>Linern mår bäst av bra vattenkemi: håll <a href="/guider/ph-och-klor/">pH och klor</a> i balans och täck poolen. Stommen skyddas genom att hålla dränering runt poolen i ordning.</p>'],
      ['Jämför byggsätt',
        '<p>Stålvägg, glasfiber eller betong? Läs <a href="/poolbygge/att-kopa-pool/">guiden om att köpa pool</a> och <a href="/guider/glasfiberpool/">om glasfiberpool</a> för en helhetsbild.</p>'],
    ],
    faq: [
      ['Rostar en stålväggspool?', 'Stommen skyddas mot fukt och korrosion, och med rätt dränering och underhåll håller den länge. Skador i skyddet bör åtgärdas.'],
      ['Kan stålväggspool vara nedgrävd?', 'Ja, den används både ovan mark och nedgrävd med kant i nivå med marken.'],
      ['Hur länge håller linern?', 'Linerns livslängd beror på vattenkemi, UV och användning. Med bra skötsel håller den i många år innan byte.'],
    ],
    related: ['liner-till-poolen', 'att-kopa-pool', 'glasfiberpool'],
  },
  {
    slug: 'liten-pool',
    tag: 'Guide',
    h1: 'Liten pool – guide för små trädgårdar',
    meta_title: 'Liten pool – guide för små trädgårdar',
    meta_desc:
      'En liten pool passar små tomter och ger lägre driftkostnad. Så väljer du storlek, typ och utrustning – och vad du tjänar jämfört med en större pool.',
    lead: 'En liten pool behöver inte betyda sämre bad. Den passar små trädgårdar, värms upp snabbare och kostar mindre att driva – men kräver att du väljer rätt typ och utrustning.',
    img: 'liten-pool',
    image_prompt: 'A small compact swimming pool in a small urban garden, neat landscaping, daylight, realistic photo, no people',
    sections: [
      ['Varför en liten pool',
        '<p>Volymen styr både kemikalieåtgång och uppvärmning. En mindre pool värms snabbare, kräver mindre utrustning och blir klar fortare att använda – perfekt när tomten är begränsad.</p>'],
      ['Ungefärliga storlekar',
        '<p>Små pooler ryms ofta mellan några få kubikmeter och cirka 20 m³. Även en blygsam volym räcker för svalka, barnens lek och avkoppling – simträning kräver mer längd.</p>'],
      ['Typer som passar',
        '<ul><li><a href="/guider/terasspool-och-ovanmarkspool/">Ovanmarkspool</a> – snabb och billig.</li>'
        + '<li><a href="/guider/glasfiberpool/">Glasfiberpool</a> i liten storlek.</li>'
        + '<li>Spabad eller swimspa om du vill kombinera.</li></ul>'],
      ['Utrustning',
        '<p>Även en liten pool behöver pump, filter och kemi. Dimensionera utrustningen efter volymen så den varken blir över- eller underdimensionerad. Se <a href="/guider/poolpump/">pumpguiden</a> och <a href="/guider/poolfilter-guide/">filterguiden</a>.</p>'],
      ['Drift',
        '<p>Mät och håll <a href="/guider/ph-och-klor/">pH och klor</a> som vanligt, om än på mindre volymer där värdena svänger fortare. Logga gärna i <a href="/pooljournal/">pooljournalen</a>.</p>'],
    ],
    faq: [
      ['Hur liten kan en pool vara?', 'Det finns pooler på bara några kubikmeter som räcker för svalka och barnlek. Ska du simma behövs mer längd, ofta minst 6–8 meter.'],
      ['Är en liten pool billigare att driva?', 'Ja, mindre volym värmas snabbare och kräver mindre kemi och pumpkapacitet, vilket sänker driftkostnaden.'],
      ['Passar en liten pool en liten tomt?', 'Ja, ovanmark och kompakta modeller är gjorda för det. Tänk på säkerhetsavstånd och att det ska gå att komma åt för service.'],
    ],
    related: ['terasspool-och-ovanmarkspool', 'att-kopa-pool', 'poolskydd'],
  },
  {
    slug: 'alkalinitet-pool',
    tag: 'Guide',
    h1: 'Alkalinitet i pool – rätt nivå och justering',
    meta_title: 'Alkalinitet i pool – rätt nivå och justering',
    meta_desc:
      'Alkaliniteten håller pH stabilt. Så mäter du den, vilken nivå som är rätt och hur du höjer eller sänker den utan att pH skjuter i höjden.',
    lead: 'Alkaliniteten är vattnets buffert och förklaringen till varför pH ibland far runt. Ligger den fel kan du justera pH hur mycket som helst utan att det håller sig stabilt.',
    img: 'alkalinitet',
    image_prompt: 'A water test kit measuring alkalinity with reagents beside a swimming pool, close up, daylight, realistic photo, no people',
    sections: [
      ['Vad alkalinitet är',
        '<p>Total alkalinitet mäter vattnets förmåga att stå emot pH-förändringar. Rätt nivå gör pH stabilt; fel nivå gör att pH skjuter i höjden eller dyker vid minsta tillsats.</p>'],
      ['Rätt nivå',
        '<p>Rekommenderad alkalinitet är oftast 80–160 mg/l, med ett ideal runt 100–120 mg/l. Läs mer i <a href="/pooljournal/">pooljournalens riktvärdestabell</a>.</p>'],
      ['Justera i rätt ordning',
        '<p>Börja alltid med alkaliniteten, sedan pH, sedan kloret. Är alkaliniteten fel kommer pH aldrig att ligga still, hur du än doserar.</p>'],
      ['Höj och sänk',
        '<ul><li><strong>För låg:</strong> använd preparat för att höja alkalinitet och mät om mellan stegen.</li>'
        + '<li><strong>För hög:</strong> sänk med pH-minus/preparat för att sänka alkalinitet, cirkulera och mät.</li></ul>'],
      ['Koppling till pH',
        '<p>Alkalinitet och pH hänger ihop men är inte samma sak. Läs <a href="/guider/ph-och-klor/">pH och klor – rätt nivåer</a> för helheten och använd <a href="/kalkylator/">kalkylatorn</a> för dosering.</p>'],
    ],
    faq: [
      ['Vad är rätt alkalinitet i en pool?', 'Oftast 80–160 mg/l, med ett idealvärde runt 100–120 mg/l.'],
      ['Varför stiger pH hela tiden?', 'En låg alkalinitet gör pH instabilt. Hög alkalinitet kan göra pH svårt att rubba nedåt. Justera alkaliniteten först.'],
      ['Ska jag justera alkalinitet eller pH först?', 'Alkaliniteten först. Den håller pH stabilt, så rätt buffert gör efterföljande pH-justering mycket enklare.'],
    ],
    related: ['ph-och-klor', 'kalkylator', 'pooljournal'],
  },
  {
    slug: 'barnpool',
    tag: 'Guide',
    h1: 'Barnpool och pool för barnfamiljer – guide',
    meta_title: 'Barnpool – säkerhet och rätt val',
    meta_desc:
      'Barn och pool kräver säkerhet först. Så väljer du barnvänlig pool, rätt skydd och enkla rutiner som gör badandet tryggt för hela familjen.',
    lead: 'Har du små barn är säkerheten viktigare än poolens storlek och form. Rätt skydd, en tydlig ingång och fasta regler gör poolen trygg – för både barn och vuxna.',
    img: 'barnpool',
    image_prompt: 'A child pool area in a safe fenced garden with a small swimming pool and a locked gate, sunny day, realistic photo, no people',
    sections: [
      ['Säkerhet först',
        '<p>En pool är en risk för små barn. Barnsäkert skydd, staket med låsbar grind eller högt överdrag är inte ett tillval utan grunden. Läs <a href="/poolbygge/poolskydd/">guiden om poolskydd</a> och <a href="/guider/pooltackning-sakerhet/">pooltäckning och säkerhet</a>.</p>'],
      ['Barnvänlig pool',
        '<ul><li>En grund del eller en <a href="/poolbygge/pooltrappa-eller-stege/">bred trappa</a> att sitta på.</li>'
        + '<li>Halkskyddade kanter och tydlig ingång.</li>'
        + '<li>Lagom djup för lek även i den djupa delen för äldre barn.</li></ul>'],
      ['Rutiner som gör skillnad',
        '<ul><li>Sätt alltid tillbaka skyddet efter bad.</li>'
        + '<li>Ha uppsikt – ingen badar ensam.</li>'
        + '<li>Lär barnen simma och respektera reglerna.</li>'
        + '<li>Håll leksaker borta från poolkanten när de inte används.</li></ul>'],
      ['Vattenkemi med barn',
        '<p>Barn badar mer och sväljer mer vatten. Håll <a href="/guider/ph-och-klor/">pH och klor</a> i rätt zon, särskilt pH 7,2–7,6 som är skonsamt mot hud och ögon, och chockklorera efter intensiva bad.</p>'],
      ['Rätt pool för familjen',
        '<p>En <a href="/guider/liten-pool/">mindre pool</a> eller ovanmarkspool med bra skydd passar ofta barnfamiljer bäst. Läs <a href="/poolbygge/att-kopa-pool/">att köpa pool</a>.</p>'],
    ],
    faq: [
      ['Vilket skydd är säkrast med små barn?', 'Ett säkerhetsöverdrag eller pooltak som bär vikt, kombinerat med staket och låsbar grind. En tunn solfolie hindrar inte ett fall.'],
      ['Finns det pooler särskilt för barn?', 'Det finns grunda barnpooler, men säkerheten hänger mer på skydd och tillsyn än på poolmodellen. Välj gärna en grund del och bred ingång.'],
      ['Vilket pH är skonsamt för barn?', 'pH 7,2–7,6, helst nära 7,2, är skonsamt mot hud och ögon. Håll fritt klor i 1–3 mg/l.'],
    ],
    related: ['poolskydd', 'liten-pool', 'pooltrappa-eller-stege'],
  },
  {
    slug: 'klortabletter',
    tag: 'Guide',
    h1: 'Klortabletter – guide för pool och spabad',
    meta_title: 'Klortabletter – guide för pool och spabad',
    meta_desc:
      'Klortabletter ger jämn klorhalt och enkel dosering. Så väljer du rätt typ för pool eller spabad, undviker cyanursyra-problem och doserar säkert.',
    lead: 'Klortabletter är det bekvämaste sättet att hålla jämn klorhalt, men sorten spelar stor roll. Fel tabletter bygger upp cyanursyra som gör kloret overksamt.',
    img: 'klortabletter',
    image_prompt: 'Chlorine tablets in a floating dispenser beside a swimming pool, close up of white tablets, daylight, realistic photo, no people',
    sections: [
      ['Typer av klortabletter',
        '<ul><li><strong>Långverkande (stabiliserade, ofta 200 g).</strong> Vanliga i pool, löser sig långsamt men innehåller cyanursyra.</li>'
        + '<li><strong>Kalciumhypoklorit.</strong> Utan cyanursyra, bra komplement.</li>'
        + '<li><strong>Storlekar för spabad.</strong> Mindre tabletter anpassade för mindre volym och högre temperatur.</li></ul>'],
      ['Cyanursyra – den viktiga varningen',
        '<p>Stabiliserade tabletter tillför cyanursyra varje gång. Den bryts inte ner och byggs upp över säsongen. Över 50 mg/l tappar kloret effekt trots att du mäter ett fint värde. Läs mer i <a href="/pooljournal/">pooljournalen</a> om riktvärden.</p>'],
      ['Dosering för pool',
        '<p>Utgå från volymen och håll fritt klor 1–3 mg/l. Lägg tabletterna i en doserare eller bräddavloppets korg enligt anvisningen – aldrig direkt mot liner.</p>'],
      ['Dosering för spabad',
        '<p>Spabad har liten volym och hög temperatur, vilket gör att kloret förbrukas snabbare. Dosera försiktigt och mät oftare. Se <a href="/kopguider/spabad-kopguide/">spabad-köpguiden</a>.</p>'],
      ['Snabbklor vid behov',
        '<p>Vid grönt vatten eller efter intensivt badande räcker inte tabletter. Då <a href="/guider/chockklorering/">chockklorerar</a> du med snabbklor. Läs också <a href="/guider/ph-och-klor/">pH och klor</a>.</p>'],
    ],
    faq: [
      ['Vilka klortabletter är bäst för pool?', 'Långverkande stabiliserade tabletter ger jämn halt och enkel skötsel, men håll koll på cyanursyran. Komplettera med cyanursyrefritt klor vid behov.'],
      ['Kan man använda pooldosering i spabad?', 'Använd mindre mängd och spabadanpassade tabletter. Spadets volym är liten och temperaturen hög, så doseringen blir helt annorlunda.'],
      ['Varför slutar klortabletterna fungera?', 'Oftast för hög cyanursyra – kloret är bundet och overksamt även om du mäter ett värde. Lösningen är att byta en del av vattnet.'],
    ],
    related: ['chockklorering', 'ph-och-klor', 'spabad-kopguide'],
  },
  {
    slug: 'pooltak',
    tag: 'Köpguide',
    h1: 'Pooltak – guide till skydd, värme och val',
    meta_title: 'Pooltak – skydd, värme och rätt val',
    meta_desc:
      'Ett pooltak håller värme och skräp ute, sänker driftkostnaden och höjer säkerheten. Här är typerna, vad som avgör valet och vad du bör räkna på.',
    lead: 'Ett pooltak är en av de mest kostnadseffektiva investeringarna för en pool: det minskar värmeförlusten, håller skräp borta och ökar säkerheten – men kräver utrymme och en genomtänkt lösning.',
    img: 'pooltak',
    image_prompt: 'A telescopic pool enclosure with polycarbonate panels over a swimming pool in a garden, daylight, realistic photo, no people',
    sections: [
      ['Vad ett pooltak gör',
        '<p>Taket täcker poolen och bildar en "växthuseffekt" som värmer vattnet och minskar avdunstning. Det håller samtidigt skräp och löv ute och fungerar som ett skydd när poolen inte används.</p>'],
      ['Typer',
        '<ul><li><strong>Teleskoptak.</strong> Skjuts ihop och ut, i kanalplast eller glas – vanligast.</li>'
        + '<li><strong>Lågt överdragstak.</strong> Enklare och lägre modeller för mindre pooler.</li>'
        + '<li><strong>Högt tak.</strong> Går att bada under även i sämre väder men tar mer plats.</li></ul>'],
      ['Vad som avgör valet',
        '<ul><li>Poolens mått och form – taket måste passa exakt.</li>'
        + '<li>Hur högt tak du vill kunna bada under.</li>'
        + '<li>Utrymme att skjuta ihop taket på.</li>'
        + '<li>Snölast och vind i din del av landet.</li></ul>'],
      ['Effekt på driftkostnad',
        '<p>Genom att minska värmeförlust och avdunstning sänker taket både energi- och kemikalieåtgång. Läs <a href="/poolbygge/energismarta-losningar/">energismarta lösningar</a> och <a href="/poolbygge/poolskydd/">poolskydd</a> för helheten.</p>'],
      ['Säkerhet',
        '<p>Ett ordentligt pooltak kan bidra till säkerheten, men kontrollera vad modellen klarar. Kombinera gärna med staket och grind, särskilt med små barn – se <a href="/guider/barnpool/">guiden för barnfamiljer</a>.</p>'],
    ],
    faq: [
      ['Sparar ett pooltak pengar?', 'Ja. Genom att minska värmeförlust och avdunstning sänker det energi- och kemikalieåtgång, och det håller dessutom skräp borta.'],
      ['Vilket pooltak är bäst?', 'Det beror på poolens mått, önskad höjd och utrymmet att skjuta ihop taket. Ett teleskoptak i kanalplast är den vanligaste kompromissen mellan pris och funktion.'],
      ['Klara ett pooltak snö?', 'Kraftigare modeller klarar snölast, men kontrollera takets specifikation för ditt klimat och skotta vid behov.'],
    ],
    aff: {
      title: 'Pooltak och skydd',
      text: 'Tak, överdrag och solfolie – jämför modeller som passar din poolstorlek.',
      cta: 'Se poolskydd',
      url: 'https://www.poolstore.se',
    },
    related: ['poolskydd', 'energismarta-losningar', 'pooltackning-sakerhet'],
  },
];
