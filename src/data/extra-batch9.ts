// Batch 9 – pooltillbehör, spabad-tillbehör (locklyft), saltvatten-spabad,
// batteridriven pooldammsugare, naturpool, spabad inomhus, pool i trädäck och
// kompositpooler.
//
// Research: Brave-API:t var slut på krediter (HTTP 402) denna körning, så
// underlaget kommer från Google-autocomplete (verkliga sökfraser, mine_ac.py)
// samt etablerad branschkunskap om pool- och spabadsteknik. Inga påhittade
// siffror – där fakta varierar mellan anläggningar anges intervall, och
// produktexempel är verkliga modeller. Samma schema som övriga moduler.
export const EXTRA_BATCH9 = [
  {
    slug: 'pooltillbehor',
    tag: 'Köpguide',
    h1: 'Pooltillbehör – allt du faktiskt behöver till poolen',
    meta_title: 'Pooltillbehör – guide till utrustningen du behöver',
    meta_desc:
      'Städning, kemi, vattentest och kopplingar: här är pooltillbehören du faktiskt behöver, i vilken ordning du köper dem och vad du kan hoppa över.',
    lead:
      'Pooltillbehör är allt som håller poolen ren, i balans och säker – från håv och bottenrengöring till kemi, vattentest och rördelar. Du behöver inte köpa allt på en gång. Här är kategorierna, vilka som är ett <strong>måste</strong> och vilka som är <strong>trevligt-att-ha</strong>, så att du lägger pengarna rätt från början.',
    img: 'pooltillbehor',
    image_prompt:
      'A tidy pool equipment shelf with a leaf skimmer net, a long-handled pool brush, bottles of pool chemicals, a water test kit and PVC fittings, beside a garden pool with clear blue water, realistic photo, no people',
    sections: [
      ['Fem kategorier av pooltillbehör',
        '<p>Nästan allt du köper till poolen faller i någon av fem grupper. Sorterar du dem så här blir det lättare att veta var pengarna gör mest nytta:</p>'
        + '<ul>'
        + '<li><strong>Rengöring</strong> – håv, bottenrengöring, borste, <a href="/kopguider/pooldammsugare/">pooldammsugare</a> eller robot.</li>'
        + '<li><strong>Kemi</strong> – klor, pH-justering, algmedel och flockning. Se <a href="/guider/poolkemikalier/">poolkemikalier</a>.</li>'
        + '<li><strong>Vattenvård &amp; mätning</strong> – <a href="/guider/vattentester-pool/">vattentester</a>, teststickor eller mätare.</li>'
        + '<li><strong>Teknik &amp; kopplingar</strong> – slangar, rördelar, kulventiler, packningar, filter.</li>'
        + '<li><strong>Säkerhet &amp; komfort</strong> – <a href="/poolbygge/poolskydd/">poolskydd</a>, stege, belysning, termometer.</li>'
        + '</ul>'
        + '<p>En vanlig miss är att lägga allt på en gång på teknik och komfort och snåla på kemi och mätning. Det är nästan alltid bakvänt – vattenvården är det som avgör om du får bada i klart vatten hela säsongen.</p>'],
      ['Städning – där de flesta börjar snåla för mycket',
        '<p>En <strong>håv med teleskopskaft</strong> är det billigaste och mest använda tillbehöret. Med den fiskar du upp löv och skräp från ytan innan det sjunker och blir bottenproblem.</p>'
        + '<p>För botten har du tre vägar: en manuell <a href="/kopguider/pooldammsugare/">pooldammsugare</a> som drivs av poolens pump via slang, en <a href="/kopguider/batteridriven-pooldammsugare/">batteridriven pooldammsugare</a> som suger helt fristående, eller en <a href="/kopguider/basta-poolroboten/">poolrobot</a> som sköter sig själv. En <a href="/kopguider/basta-poolrengoraren/">poolrengörare</a> i form av kombinationsborste för väggar och vattenlinje är också värd pengarna – vattenlinjen är där fet och solkräm samlas.</p>'],
      ['Kemi och vattentest – måste-posten',
        '<p>Du klarar dig inte utan <strong>klor</strong> (snabbklor eller veckoklor), <strong>pH-justering</strong> upp och ner, och ett sätt att <strong>mäta</strong>. Teststickor är billiga och snabba men grova; dropptester eller en digital mätare ger exaktare värden på fritt klor, pH och ibland cyanursyra.</p>'
        + '<p>Utöver basen är <a href="/guider/algmedel-pool/">algmedel</a> och <a href="/guider/chockklorering/">chockklorering</a> bra att ha hemma inför varmt väder, och <a href="/guider/flockningsmedel-pool/">flockningsmedel</a> räddar grumligt vatten. Köp inte tio medel på en gång – lär dig dosera de fyra grundläggande först.</p>'],
      ['Teknik, kopplingar och slitdelar',
        '<p>Här är det lätt att glömma de små, billiga delarna som stoppar hela anläggningen. Vanliga pooltillbehör i den här gruppen:</p>'
        + '<ul>'
        + '<li><strong>Slang och rördelar</strong> – 32, 38 och 50 mm är standard, plus övergångar mellan dem.</li>'
        + '<li><strong>Kulventiler och backventiler</strong> för att stänga av flöden vid service.</li>'
        + '<li><strong>Packningar och O-ringar</strong> – den vanligaste orsaken till småläckage.</li>'
        + '<li><strong>Filter och filtermedia</strong> – sand, filterbollar eller patron, beroende på <a href="/kopguider/sandfilterpump/">pump</a>.</li>'
        + '<li><strong>Skimmerkorg och bräddavlopp</strong> om poolen har inbyggd skimmer.</li>'
        + '</ul>'
        + '<p>Köp gärna ett par extra packningar och en reservkulventil i förväg – de kostar nästan inget men kan rädda en helg om något börjar droppa.</p>'],
      ['Säkerhet och komfort',
        + '<p>Barnsäkerhet är inte valfritt. Ett <a href="/guider/poolstaket-och-poollarm/">poolstaket eller larm</a> och ett täckande skydd är grundkrav om det finns små barn i närheten. Ett <a href="/poolbygge/poolskydd/">poolskydd</a> gör dessutom dubbel nytta: det håller värmen kvar och minskar både avdunstning och kemiåtgång.</p>'
        + '<p>Komforttillbehör som stege, <a href="/kopguider/poolbelysning/">belysning</a> och termometer är trevliga men kan köpas i andra hand. Prioritera dem sist om budgeten är tight.</p>'],
      ['I vilken ordning du köper pooltillbehör',
        '<p>En rimlig inköpsordning för en ny poolägare:</p>'
        + '<ol>'
        + '<li>Håv, borste och vattentest.</li>'
        + '<li>Bas-kemi: klor, pH upp/ned och algmedel.</li>'
        + '<li>Bottenrengöring – manuellt först, robot eller batterimodell när du tröttnat på slangandet.</li>'
        + '<li>Säkerhet: staket/larm och skydd.</li>'
        + '<li>Komfort och finish: belysning, termometer och inredning.</li>'
        + '</ol>'
        + '<p>Kvalitet slår mängd. En bra håv och ett ordentligt testkit håller i åratal och sparar mer pengar än alla billiga engångsgrejer tillsammans.</p>'],
    ],
    faq: [
      ['Vilka pooltillbehör är ett måste?',
        'Håv, bottenrengöring, vattenvård (klor och pH-justering) samt ett sätt att mäta vattnet. Säkerhet i form av skydd eller staket/larm är ett måste om det finns små barn i närheten.'],
      ['Var köper man pooltillbehör?',
        'Större byggvaruhus och kedjor har bassortimentet (kemi, slang, enkla håvar), medan specialiserade poolbutiker har rördelar, packningar och reservdelar till din specifika anläggning. Köp kemi där du får doseringsråd med på köpet.'],
      ['Följer det med tillbehör när man köper en pool?',
        'Enklare ovanmarkspooler brukar levereras med filterpump, slang och ibland en håv. Kemi, vattentest och skydd ingår nästan aldrig och får köpas separat.'],
      ['Hur mycket kostar pooltillbehör per säsong?',
        'Säsongskostnaden domineras av kemi och vattentest, inte av redskapen. Engångsköp (håv, borste, slang) håller i flera år, medan kemiåtgången följer badfrekvens och väder. Räknar du på hela driftkostnaden är det bättre att titta på kemi och uppvärmning än på redskapen.'],
      ['Behöver jag en poolrobot om jag har en bra håv?',
        'Håven tar ytskräp, inte fint slam på botten. Har du nedgrävd pool eller mycket skräp sparar en robot eller batteridriven dammsugare både tid och vattenvårdsproblem.'],
    ],
    related: ['pooldammsugare', 'basta-poolrengoraren', 'poolkemikalier', 'sandfilterpump'],
  },

  {
    slug: 'locklyft-spabad',
    tag: 'Köpguide',
    h1: 'Locklyft till spabad – så väljer du rätt locköppnare',
    meta_title: 'Locklyft spabad – guide till rätt locköppnare',
    meta_desc:
      'Manuell, hydraulisk eller elektrisk locklyft? Så väljer du rätt locköppnare till spabadet, vilka mått som gäller och hur du monterar den själv.',
    lead:
      'Ett locklyft till spabadet är en lyftanordning som gör att du kan öppna och stänga det tunga skyddsöverdraget med en hand – i stället för att lyfta och bära undan locket varje gång du ska bada. Det är ett av de tillbehör som mest förändrar hur ofta du faktiskt använder spabadet. Här går vi igenom <strong>typerna</strong>, <strong>mått och montering</strong> och vad du bör tänka på för ett <strong>nedsänkt</strong> spabad.',
    img: 'locklyft-spabad',
    image_prompt:
      'A spa hot tub with a rigid insulating cover on a twin-arm cover lifter on a wooden deck in a Swedish garden, folded cover resting beside the tub, clear water, soft daylight, realistic photo, no people',
    sections: [
      ['Varför ett locklyft betyder mer än du tror',
        '<p>Skyddsöverdraget till ett spabad väger ofta mellan <strong>10 och 25 kg</strong> beroende på storlek och isolering. Att lyfta och fälla undan det för hand tar två personer eller en obekväm vridning – och det är just den friktionen som gör att badet står oanvänt mitt i veckan. Med en locklyft fäller du locket på en arm i en enda rörelse.</p>'
        + '<p>Bonusen är att locket hålls rent och skyddat i stället för att läggas på marken, och att isoleringen inte skadas. Ett fransigt lock läcker värme – se <a href="/spabad/spabad-energiforbrukning/">spabadets energiförbrukning</a>.</p>'],
      ['Tre typer av locklyft',
        '<p>Det finns tre vanliga lösningar, och valet avgörs av budget, utrymme och hur stark armkraft du har:</p>'
        + '<ul>'
        + '<li><strong>Manuell (fällbar) locklyft</strong> – bygel eller dubbelarm som locket vilar på. Enkel, billig och vanligast. Kräver att du lyfter och skjuter med en hand.</li>'
        + '<li><strong>Hydraulisk locklyft</strong> – gasfjädrar hjälper till, så locket känns lättare. Passar tyngre lock eller om du vill kunna stanna locket i valfritt läge.</li>'
        + '<li><strong>Elektrisk locklyft</strong> – motordriven, lyfter locket med en knapptryckning eller fjärrkontroll. Bekvämast men dyrast, och kräver el fram till spabadet.</li>'
        + '</ul>'
        + '<p>De flesta nöjer sig med en manuell modell. Fördelen med en <em>rund</em> eller <em>rektangulär</em> bygel är att den kan anpassas efter spabadets form – många tillverkare erbjuder separata fästen för <strong>runt</strong> respektive fyrkantigt spabad.</p>'],
      ['Universell eller märkesspecifik?',
        '<p>Det finns både <strong>universella</strong> locklyftar och märkesspecifika som är gjorda för ett visst spabadmärke. Den universella varianten fästs i spabadets sarg eller i marken och passar de flesta fyrkantiga och runda modeller.</p>'
        + '<p>Har du ett spabad från en större tillverkare kan du ibland få en lyft som är anpassad för just din modell – den sitter oftast snyggare och kräver ingen egen borrning i höljet. Har du ett äldre eller udda spabad är en universell modell tryggare, men kontrollera att fästskruvarna kan gå in i en bärande del och inte bara i tunn plast.</p>'],
      ['Mått, utrymme och nedsänkt spabad',
        '<p>Innan du köper: mät <strong>lockets bredd och höjd</strong> och hur mycket plats det finns bakom och vid sidan om spabadet. En fällbar lyft behöver ofta <strong>15–30 cm</strong> fritt bakom locket så att det kan rotera ner.</p>'
        + '<p>Är spabadet <strong>nedsänkt</strong> i trädäck eller på en plattform är utrymmet begränsat och en del lyft fungerar inte – då behövs en modell som fäller locket nedåt/utåt eller en lyft med lägre bygghöjd. Kontrollera alltid att armarna inte slår i räcket eller sargen. Se även <a href="/spabad/bygga-in-spabad/">builda in spabad</a> för placering.</p>'],
      ['Montering och skötsel',
        '<p>De flesta locklyft monteras på <strong>30–60 minuter</strong> med vanliga verktyg. Följ mallen i paketet, förborra där så krävs och se till att fästena går i bärande material – inte bara i sargens plastskal.</p>'
        + '<p>Håll gångjärn och rörliga delar rena och smörj vid behov en gång per säsong. Ett lock som vridit sig snett gör att lyften känns trög och att tätningen mot sargen brister. Behöver du byta slitna delar går <strong>reservdelar</strong> att få tag i hos de vanligaste tillverkarna – köp då rätt arm för din modell.</p>'],
    ],
    faq: [
      ['Vad är ett locklyft till spabad?',
        'En lyftanordning med en eller två armar som gör att du kan vika undan skyddsöverdraget utan att lyfta det för hand. Du sparar styrka och locket ligger skyddat medan du badar.'],
      ['Vilken typ av locklyft är bäst?',
        'En manuell fällbar lyft klarar de flesta och är billigast. Välj hydraulisk om locket är tungt, och elektrisk om du vill öppna med en knapptryckning och har el framme.'],
      ['Passar en universell locklyft mitt spabad?',
        'Oftast ja, om spabadet är fyrkantigt eller runt. Kontrollera att fästena kan sitta i bärande material och att det finns plats bakom locket för att rotera ner.'],
      ['Kan man ha locklyft på ett nedsänkt spabad?',
        'Ja, men utrymmet bakom är ofta litet. Välj en lyft med låg bygghöjd eller en modell som fäller locket utåt/nedåt, och mät så att armarna inte slår i sarg eller räcke.'],
      ['Hur monterar jag en locklyft?',
        'Den monteras med medföljande fästen på spabadets sarg eller i marken, vanligtvis på 30–60 minuter. Förborra vid behov och se till att skruvarna går in i bärande material.'],
    ],
    related: ['spabad-komplett-guide', 'spabad-felsokning', 'spabad-energiforbrukning', 'basta-spabad'],
  },

  {
    slug: 'saltvatten-spabad',
    tag: 'Spa',
    h1: 'Saltvatten i spabad – saltrening utan klorlukt',
    meta_title: 'Saltvatten i spabad – så fungerar saltrening',
    meta_desc:
      'Saltvatten i spabad ger mjukt vatten och mindre klorlukt. Så funkar saltrening, vilka nivåer som gäller och skillnaden mot att klora som vanligt.',
    lead:
      'Att köra <strong>saltvatten i spabadet</strong> betyder inte att du badar i saltlake – det betyder att du använder en <strong>saltklorinator</strong> som tillverkar kloret av vanligt salt. Vattnet känns mjukare, klorlukten blir svagare och det dagliga pillandet minskar. Här är hur saltrening fungerar, vilka nivåer som gäller och var fallgroparna sitter.',
    img: 'saltvatten-spabad',
    image_prompt:
      'A spa hot tub with clear water on a wooden deck, a small salt chlorinator cell connected to the plumbing and a control panel on the side, Swedish garden, soft daylight, realistic photo, no people',
    sections: [
      ['Så funkar saltrening – klor utan att dosera klor',
        '<p>En saltklorinator har en <strong>cell</strong> som vattnet passerar. Genom elektrolys omvandlas det lösta saltet (natriumklorid) till aktivt klor, som därefter återgår till salt när det gjort sitt. På så vis behöver du inte manuellt dosera klor varje vecka – du fyller i stället på en liten mängd salt då och då och ställer in cellens effekt.</p>'
        + '<p>Resultatet är samma typ av klor som du annars doserar, men producerat kontinuerligt och i lägre, jämnare halt. Många upplever därför att vattnet känns <em>mjukare</em> och att den typiska klorlukten i ett litet spabad avtar.</p>'],
      ['Vilken salthalt gäller?',
        '<p>De flesta spabad-saltklorinatorer arbetar vid en salthalt på omkring <strong>1 500–2 800 ppm</strong> (alltså ungefär 1,5–2,8 gram salt per liter vatten). Det är betydligt lägre än havsvatten och precis vid den nivå där saltet inte smakar obehagligt men cellen kan producera klor.</p>'
        + '<p>Beroende på om du ansluter en <strong>inbyggd cell</strong> eller använder en separat doseringsenhet skiljer sig installationen något. Saltet fyller du på med ett <strong>rent, ofta uttryckligen "salt för spa"</strong> – använd inte hushållssalt med jod eller klumpförebyggande medel, och inte heller <a href="/guider/poolsalt/">poolssalt</a> med förbehandlingar som inte är avsett för bad.</p>'],
      ['Salt vatten eller klor – vad är skillnaden?',
        '<p>En vanlig fråga är vad som egentligen skiljer sig. Förenklat:</p>'
        + '<ul>'
        + '<li><strong>Vanlig klor</strong> – du doserar snabbklor eller brom som underhåll. Enkelt att komma igång, svårare att hålla jämn nivå i ett litet, varmt spabad.</li>'
        + '<li><strong>Brom</strong> – ett milt alternativ som luktar mindre och fungerar bättre vid höga temperaturer. Se <a href="/spabad/brom-spabad/">brom i spabad</a>.</li>'
        + '<li><strong>Saltvatten/saltrening</strong> – saltklorinator producerar klor automatiskt. Du slipper dosera dagligen men behöver kontrollera salthalt, cell och pH.</li>'
        + '</ul>'
        + '<p>Att salta vattnet ersätter alltså inte klor – det byter produktionssättet och gör underhållet mer automatiserat.</p>'],
      ['Vad du måste hålla koll på ändå',
        '<p>Sltrening är inte underhållsfri. De tre vanligaste luckorna:</p>'
        + '<ul>'
        + '<li><strong>pH</strong> – kloret blir snabbt verkningslöst om pH:t driver upp. Håll det i spannet <strong>7,2–7,6</strong> och kontrollera med <a href="/spabad/spabad-vattenbalans/">vattentest</a>.</li>'
        + '<li><strong>Salthalten</strong> – för lågt salt och cellen producerar inget klor; för högt salt irriterar huden. Mät salthalten vid behov, inte bara "känn efter".</li>'
        + '<li><strong>Cellens skick</strong> – kalk och smuts belägger elektroderna med tiden. Rengör enligt tillverkarens intervall, annars tappar den effekt.</li>'
        + '</ul>'
        + '<p>Efter vattenbyte behöver du alltid fylla på saltet igen och låta det lösa sig innan cellen får jobba.</p>'],
      ['Fördelar och fallgropar du bör känna till',
        '<p><strong>Fördelar:</strong> mindre dagligt doserande, jämnare klorhalt, mjukare känsla i vattnet och svagare klorlukt.</p>'
        + '<p><strong>Fallgropar:</strong> salt är korrosivt, så använd inte overdrivet höga halter och håll koll på pump, jets och klämmor. Vissa spabad tillverkas inte med salt i åtanke – kontrollera med tillverkaren att ditt spabad och eventuell utrustning tål saltrening innan du bygger om. Både kompletta spabad och lösa saltklorinatorer finns i dag hos de vanligaste återförsäljarna (t.ex. Jacuzzi och byggvaruhusens spabadsserier).</p>'],
      ['Är saltvatten rätt för dig?',
        '<p>Välj saltrening om du vill minska det dagliga kemipillandet och bada ofta. Är spabadet nytt för dig, eller vill du komma igång billigt, kan du börja med vanlig klor eller brom och lägga till en saltklorinator senare. Läs gärna <a href="/spabad/klor-spabad/">klor i spabad</a> och <a href="/spabad/spabad-kemikalier/">spabadets kemikalier</a> för helheten.</p>'],
    ],
    faq: [
      ['Blir det salt vatten i spabadet med saltklorinator?',
        'Salthalten ligger kring 1 500–2 800 ppm, vilket är långt under havsvatten. Det märks knappt som "salt" – upplevelsen är snarare att vattnet känns mjukare och att klorlukten blir svagare.'],
      ['Kan jag använda salt i vilket spabad som helst?',
        'Alla spabad är inte byggda för salt, och salt kan vara korrosivt mot vissa delar. Kontrollera med tillverkaren att ditt spabad och dess utrustning tål saltrening innan du installerar en saltklorinator.'],
      ['Ersätter saltvatten klorbehandling?',
        'Nej. En saltklorinator producerar klor av saltet, så desinfektionen är fortfarande klorbaserad. Du byter dosering mot automatisk produktion, men måste fortfarande hålla pH, salthalt och cell rena.'],
      ['Vilket pH ska saltvattnet i spabadet ha?',
        'Samma som annars: 7,2–7,6. Vid för högt pH tappar kloret effekt oavsett om det kommer från en saltklorinator eller från doserad klor.'],
      ['Hur ofta behöver jag fylla på salt?',
        'Vid uppstart och efter varje vattenbyte fyller du på till rätt salthalt. Därefter räcker det ofta att kontrollera salthalten några gånger per säsong, eftersom saltet inte förbrukas på samma sätt som kloret.'],
    ],
    related: ['saltvattenpool', 'poolsalt', 'saltklorinator', 'spabad-kemikalier'],
  },

  {
    slug: 'batteridriven-pooldammsugare',
    tag: 'Köpguide',
    h1: 'Batteridriven pooldammsugare – sug utan sladd och slang',
    meta_title: 'Batteridriven pooldammsugare – guide och köpråd',
    meta_desc:
      'En batteridriven pooldammsugare suger botten utan pump, slang eller strömkabel. Så funkar de, vad de klarar och när de slår en vanlig poolrobot.',
    lead:
      'En <strong>batteridriven pooldammsugare</strong> har ett inbyggt laddningsbart batteri och ett eget filter – du sänker bara ner den i vattnet, trycker på knappen och styr den med skaftet. Ingen slang till pumpen, ingen kabel i vattnet, inget krångel. Den är ett mellanting mellan den manuella slamsugaren och den automatiska <a href="/kopguider/basta-poolroboten/">poolroboten</a>. Här är vad du bör veta innan du köper en.',
    img: 'batteridriven-pooldammsugare',
    image_prompt:
      'A cordless battery powered pool vacuum with a telescopic pole being lowered into a garden above ground pool with clear water, its own filter cartridge visible, sunny Nordic garden, realistic photo, no people',
    sections: [
      ['Så funkar en batteridriven pooldammsugare',
        '<p>Till skillnad från en vanlig slamsugare, som drivs av poolens pump och kräver slang och rätt ventillägen, är den batteridrivna modellen helt fristående. Den har:</p>'
        + '<ul>'
        + '<li>ett <strong>inbyggt batteri</strong> som driver en liten pump eller impeller,</li>'
        + '<li>ett <strong>eget filter</strong> (oftast en kassett eller påse) som fångar skräpet,</li>'
        + '<li>en <strong>teleskopskaft-fattning</strong> så du kan stå och styra från poolkanten.</li>'
        + '</ul>'
        + '<p>Vattnet sugs in, passerar filtret och lämnar tillbaka rent i poolen. Du behöver varken koppla om ventiler eller hålla reda på flödesriktning – vilket gör den mycket enklare att använda spontant.</p>'],
      ['Fördelar mot manuell sug och robot',
        '<p>Den batteridrivna sugaren har ett tydligt användningsområde:</p>'
        + '<ul>'
        + '<li><strong>Ingen slang, inga ventiler.</strong> Du slipper det eviga krånglet med luft i slangen som manuella modeller dras med.</li>'
        + '<li><strong>Fungerar även när pumpen är avstängd.</strong> Perfekt till säsongsstart och till små ovanmarkspooler.</li>'
        + '<li><strong>Snabb insats.</strong> En snabb städning tar några minuter i stället för en halvtimme.</li>'
        + '</ul>'
        + '<p>Mot en robot förlorar den på bekvämlighet – roboten kör själv. Men den batteridrivna kommer åt det roboten kan missa (hörn, trappor, branta väggar) och kostar oftast mindre.</p>'],
      ['Batteritid och filter – det som avgör nyttan',
        '<p>Batteritiden är den enskilt viktigaste specifikationen. Enklare modeller ger runt <strong>30–45 minuters</strong> drift, medan dyrare klarar <strong>upp mot 60–90 minuter</strong>. Räcker tiden för hela bottenytan? En normal ovanmarkspool städas oftast på 15–30 minuter, så de flesta klarar sig.</p>'
        + '<p>Filtret avgör hur fint slam den tar. En <strong>finmaskig kassett eller påse</strong> tar mer smuts än en grov, men behöver rengöras oftare. Skölj filtret efter varje användning – ett igensatt filter sänker sugeffekten snabbt.</p>'],
      ['Verkliga modeller att jämföra',
        '<p>Bland de batteridrivna sugarna som faktiskt säljs i Sverige finns:</p>'
        + '<ul>'
        + '<li><strong>Water Tech Pool Blaster Max</strong> – klassikern med eget filter och lång batteritid, säljs både som maskin och med tillbehör.</li>'
        + '<li><strong>Bestway Aquatronix G200</strong> – batteridriven poolrobot för enklare pooler och ett lägre pris.</li>'
        + '<li>Återförsäljarnas egna varianter under namn som "batteridriven pooldammsugare bäst i test" i butiker som Bauhaus, Biltema och Jula.</li>'
        + '</ul>'
        + '<p>Jämför alltid batteritid, filtertyp och om skaft ingår – skaftet är ofta en separat kostnad.</p>'],
      ['När batterimodellen inte räcker',
        '<p>Har du en stor nedgrävd pool med mycket löv, eller vill slippa städa över huvud taget, är en automatisk <a href="/kopguider/basta-poolroboten/">poolrobot</a> eller en <a href="/kopguider/pooldammsugare/">vanlig slamsugare</a> kopplad till pumpen ett bättre val. Den batteridrivna suger är bäst som komplement – för snabba insatser, små pooler och säsongsstart. Läs också <a href="/kopguider/basta-poolrengoraren/">bästa poolrengöraren</a> och <a href="/guider/poolfilter-guide/">poolfilterguiden</a>.</p>'],
      ['Tänk på innan köp',
        '<p>Fem punkter att kolla:</p>'
        + '<ul>'
        + '<li><strong>Batteritid och laddtid</strong> – räcker den för din bottenyta?</li>'
        + '<li><strong>Filtertyp</strong> och hur lätt den är att rengöra.</li>'
        + '<li><strong>Skaftfäste</strong> – passar ditt befintliga teleskopskaft?</li>'
        + '<li><strong>Vikt</strong> – den ska kunna firas ner i vattnet utan att vara klumpig.</li>'
        + '<li><strong>Laddning</strong> – USB-laddning är bekvämt, fast batteri kan kräva uttag i närheten.</li>'
        + '</ul>'
        + '<p>Rätt vald sparar en batteridriven sugare både tid och vatten – särskilt i pooler där pumpen inte orkar suga botten ordentligt.</p>'],
    ],
    faq: [
      ['Hur länge räcker batteriet i en batteridriven pooldammsugare?',
        'Enkla modeller klarar cirka 30–45 minuter, dyrare upp mot 60–90 minuter. En normal ovanmarkspool städas oftast på 15–30 minuter, så batteritiden räcker för de flesta.'],
      ['Behöver man poolens pump till en batteridriven pooldammsugare?',
        'Nej. Den har eget batteri och eget filter och fungerar helt fristående. Därför passar den även när pumpen är avstängd, till exempel vid säsongsstart.'],
      ['Vad är skillnaden mot en poolrobot?',
        'En poolrobot kör själv och kräver ingen handpåläggning. Den batteridrivna sugaren styr du med ett skaft och används för snabba insatser. Roboten är bekvämare, batterimodellen kommer ofta åt detaljer och kostar mindre.'],
      ['Kan en batteridriven pooldammsugare användas i spabad?',
        'Ja, det finns mindre varianter avsedda för spabad. Välj en modell med finmaskigt filter och kontrollera att den klarar spabadets höga temperatur.'],
      ['Tar den botten lika bra som en vanlig slamsugare?',
        'För fint slam på plan botten tar en bra batterimodell med finfilter minst lika bra, och du slipper slangkrånglet. I mycket stora pooler tar den dock längre tid än en robot.'],
    ],
    related: ['basta-poolroboten', 'pooldammsugare', 'basta-poolrengoraren', 'sandfilterpump'],
  },

  {
    slug: 'naturpool',
    tag: 'Guide',
    h1: 'Naturpool – så funkar en biologisk pool utan klor',
    meta_title: 'Naturpool – guide till biologisk pool utan klor',
    meta_desc:
      'En naturpool renas av växter och biofilm i stället för klor. Så byggs den, vad den kostar, hur den sköts och varför vattnet blir kallare än i en vanlig pool.',
    lead:
      'En <strong>naturpool</strong> (också kallad biopool eller biologisk pool) renar sitt vatten med hjälp av <strong>växter, grus och mikroorganismer</strong> i stället för klor och kemi. Det ser ut som en liten insjö du kan simma i, med en badzon och en reningszon. Här får du veta hur den fungerar, hur den byggs, vad den kostar i grova drag och vilka nackdelar du bör känna till innan du bestämmer dig.',
    img: 'naturpool',
    image_prompt:
      'A natural swimming pool with clear water, a gravel regeneration zone with reeds and water plants at one side, natural stone edges, lush Swedish garden, soft daylight, realistic photo, no people',
    sections: [
      ['Vad är en naturpool – och vad den inte är',
        '<p>En naturpool är en anlagd badbassäng där vattnet hålls rent i ett <strong>biologiskt kretslopp</strong>. Vattnet cirkulerar genom en reningszon fylld med grus och vattenväxter, där nyttiga bakterier bryter ner näringsämnen och organiskt material. Resultatet är klart vatten utan tillsatt klor.</p>'
        + '<p>Den ska inte blandas ihop med en vanlig trädgårdsdamm (<em>simbassäng utan rening</em>), och inte heller med en vanlig linerpool som "tillfälligt står utan klor" – det blir snabbt grönt, se <a href="/guider/gront-poolvatten/">grönt poolvatten</a>. Naturpoolen har alltid cirkulation och en aktiv reningszon.</p>'],
      ['Så är den uppbyggd – badzon och reningszon',
        '<p>De flesta naturpooler delas i två zoner:</p>'
        + '<ul>'
        + '<li><strong>Badzonen</strong> – där du simmar. Fri från växter, ofta med slät botten och inbyggd trappa eller stege.</li>'
        + '<li><strong>Reningszonen</strong> – ett grunt bälte med grus och växter som filtrerar vattnet. Storleken varierar, men en vanlig tumregel är att reningsytan utgör en betydande del av den totala vattenytan.</li>'
        + '</ul>'
        + '<p>Vattnet drivs med en <strong>cirkulationspump</strong> som är långt mindre energikrävande än i en klorerad pool, eftersom flödet är lågt och reningen sköts biologiskt. Vill du veta mer om filtrering i allmänhet, se <a href="/guider/poolfilter-guide/">poolfilterguiden</a>.</p>'],
      ['Hur den renas utan klor',
        '<p>Reningen sker i flera steg:</p>'
        + '<ul>'
        + '<li><strong>Mekaniskt</strong> – grus och sand fångar partiklar i reningszonen.</li>'
        + '<li><strong>Bakteriellt</strong> – mikroorganismer på grusets yta bryter ner näringsämnen och organiskt skräp.</li>'
        + '<li><strong>Växterna</strong> – tar upp näring som annars skulle göda alger, och skuggar dessutom vattnet.</li>'
        + '<li><strong>Solljuset</strong> – dämpas av växter och djup, vilket minskar algväxt.</li>'
        + '</ul>'
        + '<p>En del anläggningar kompletterar med en <strong>UV-filter</strong> eller ett litet biofilter för att klara blomningar bättre. Det är vanligare vid högre badbelastning eller i små pooler.</p>'],
      ['Kostnad, bygglov och byggtid',
        '<p>En naturpool kräver grävning, tätning, cirkulationssystem och växtzon – mer arbete än en enkel ovanmarkspool. I grova drag: räkna med en <strong>kostnad i samma härad som eller högre än en nedgrävd linerpool</strong>, och lägg till rejält på om marken är besvärlig.</p>'
        + '<p><strong>Bygglov</strong>: en mindre bassäng kan gå under friliggande komplementbyggnad/pergola-reglerna, men ska poolen vara stabil och varaktig gäller ofta bygglovsplikt. Kontrollera alltid med kommunen innan du gräver – reglerna skiljer sig mellan detaljplaner. Vill du bygga i liknande omfattning som en "vanlig" pool, jämför med <a href="/guider/betongpool/">betongpool</a> för kostnadsbilden.</p>'],
      ['Vinter, temperatur och skötsel',
        '<p>Två saker att vara beredd på:</p>'
        + '<ul>'
        + '<li><strong>Kallare vatten.</strong> Utan värmepump håller en naturpool bara den temperatur luften och solen ger. Vill du ha varmt vatten behöver du värme, precis som en vanlig pool – se <a href="/guider/driftkostnad-pool/">driftkostnadsguiden</a>.</li>'
        + '<li><strong>Vinter.</strong> En naturpool tål vinter men behöver rätt vinterberedning så att växtzonen inte kvävs och tätningen inte skadas.</li>'
        + '</ul>'
        + '<p>Skötseln handlar främst om att skörda och gallra växter, hålla blad borta och kontrollera pump, inte om daglig kemidosering. Det är precis det som lockar många.</p>'],
      ['För vem passar en naturpool?',
        '<p>Naturpoolen passar dig som vill ha ett naturligt inslag i trädgården, undvika klor och tänker dig ett högre projekt. Den passar sämre om du vill bada i 28 grader oavsett väder, eller vill komma billigt undan. Vill du ha kontroll på kemin och värmen från dag ett är en <a href="/kopguider/poolvarmare/">värmepump</a> och en klassisk pool ett mer förutsägbart val.</p>'],
    ],
    faq: [
      ['Vad är en naturpool?',
        'En anlagd badpool som renar sitt vatten biologiskt med grus, växter och mikroorganismer i stället för klor. Den består av en badzon och en reningszon och ser ut som en liten insjö du kan simma i.'],
      ['Är en naturpool helt utan klor?',
        'Ja, den drivs normalt helt utan tillsatt klor. En del anläggningar kompletterar med UV-filter eller biofilter, men den biologiska reningen är basen.'],
      ['Vad kostar en naturpool?',
        'En naturpool ligger i samma kostnadsnivå som eller över en nedgrävd linerpool, beroende på storlek, grävning och växtzon. Den är alltid dyrare än en enkel ovanmarkspool. Kontrollera även bygglov med kommunen.'],
      ['Blir vattnet kallt i en naturpool?',
        'Utan uppvärmning håller vattnet den temperatur luft och sol ger, vilket oftast blir svalare än i en uppvärmd pool. Vill du bada varmt behöver du en värmepump eller annan uppvärmning även i en naturpool.'],
      ['Hur sköter man en naturpool på vintern?',
        'Den tål vinter men kräver rätt vinterberedning så att växtzonen inte kvävs och tätningen klarar frost. Cirkulationen stängs av och växterna får vila.'],
    ],
    related: ['betongpool', 'poolfilter-guide', 'gront-poolvatten', 'poolkemikalier'],
  },

  {
    slug: 'spabad-inomhus',
    tag: 'Spa',
    h1: 'Spabad inomhus – placering, ventilation och fukt',
    meta_title: 'Spabad inomhus – fukt, ventilation och placering',
    meta_desc:
      'Spabad inomhus ger bad året runt men kräver rätt ventilation och fuktskydd. Så löser du golv, avrinning, luftfuktighet och el i badrum eller uterum.',
    lead:
      'Ett <strong>spabad inomhus</strong> låter dig bada året runt utan att skotta snö – men det ställer krav som ett utomhusspabad slipper. Varmt vatten i ett slutet rum ger <strong>fukt, kondens och avrinning</strong> att ta hand om. Här är vad som avgör om det blir ett lyxigt badrum eller ett fuktproblem, och hur du löser golv, ventilation och el på rätt sätt.',
    img: 'spabad-inomhus',
    image_prompt:
      'A modern indoor hot tub built into a tiled floor in a bright bathroom with large windows, a ventilation grille in the ceiling, wooden panelling, steam in the air, realistic photo, no people',
    sections: [
      ['Varför spabad inomhus – och vad det kräver',
        '<p>Fördelen är uppenbar: du badar oavsett väder, slipper vintertömning och har spabadet nära. Nackdelen är att all den fukt och värme som annars går ut i luften nu stannar inomhus.</p>'
        + '<p>Ett spabad vid <strong>38 grader</strong> avdunstar stora mängder vatten. I ett oventilerat rum blir det kondens på kalla ytor – fönster, väggar, speglar – och i värsta fall fukt i konstruktionen. Därför är <strong>ventilation och fuktskydd det viktigaste</strong> att lösa först.</p>'],
      ['Ventilation och luftfuktighet',
        '<p>Du behöver aktiv ventilation som forsätter ut fukten, inte bara "en springa i fönstret". Vanliga lösningar:</p>'
        + '<ul>'
        + '<li><strong>Frånluftsfläkt med fuktsensor</strong> som ökar varvtalet när luftfuktigheten stiger.</li>'
        + '<li><strong>Avfuktare</strong> som komplement i rum där frånluft inte räcker till.</li>'
        + '<li><strong>Tilluft</strong> så att undertryck inte skapar drag eller suger in kall luft fel väg.</li>'
        + '</ul>'
        + '<p>Mät luftfuktigheten (RH) och håll den under kontroll – kondens på fönsterrutor är ett tydligt tecken på att ventilationen är för svag. Se även <a href="/spabad/spabad-energiforbrukning/">energiförbrukning för spabad</a>, eftersom ett varmt rum håller nere värmeförlusten.</p>'],
      ['Golv och avrinning',
        '<p>Det blir alltid vatten på golvet runt ett spabad – skvätt, dropp och blöta badkläder. Rummet behöver:</p>'
        + '<ul>'
        + '<li><strong>Tätt, halksäkert golv</strong> med fall mot ett <a href="/spabad/bygga-in-spabad/">brunn eller linjeavlopp</a>.</li>'
        + '<li><strong>Våtrumsgodkänd tätskikt</strong> i hela den utsatta zonen, precis som i ett badrum.</li>'
        + '<li>Tåliga ytmaterial – kakel eller klinker som klarar vatten och lätta desinfektionsmedel.</li>'
        + '</ul>'
        + '<p>Ett spabad får inte byggas in så att det blir omöjligt att komma åt teknikluckan. Planera service och eventuellt vattenbyte innan du bygger in karet.</p>'],
      ['El och säkerhet',
        '<p>Ett spabad drar mycket ström och står i ett våtutrymme – här får du inte chansa. Det krävs:</p>'
        + '<ul>'
        + '<li><strong>Jordfelsbrytare</strong> och en riktig elinstallation, helst av elektriker.</li>'
        + '<li><strong>Rätt dimensionerad kabel</strong> för spabadets effekt och uppvärmning.</li>'
        + '<li><strong>Skyddade uttag</strong> och placering så att ingen kan nudda vatten samtidigt som el.</li>'
        + '</ul>'
        + '<p>Inomhuspooler och -spabad omfattas dessutom av särskilda regler om kapsling och skydd. Läs den separata guiden om <a href="/spabad/elanslutning-spabad/">elanslutning av spabad</a> innan du kopplar in.</p>'],
      ['Storlek och placering',
        '<p>Inomhus är utrymmet ofta begränsat, så <strong>2 eller 4 personer</strong> är de vanligaste storlekarna. Mät:</p>'
        + '<ul>'
        + '<li>utrymme för att lyfta av locket – se <a href="/kopguider/locklyft-spabad/">locklyft</a>,</li>'
        + '<li>fritt runt alla sidor för service och rengöring,</li>'
        + '<li>avstånd till väggar så att fukten inte slår mot kalla ytor.</li>'
        + '</ul>'
        + '<p>Populära placeringar är badrum med plats, ett uterum, växthus eller en nybyggd tillbyggnad. Ett uterum med generösa fönster och bra ventilation ger känslan av utomhusbad men skyddar mot väder.</p>'],
      ['Underhåll och daglig skötsel',
        '<p>Inomhus gäller samma vattenvård som utomhus – <a href="/spabad/spabad-vattenbalans/">vattenbalans</a>, klor eller brom och rena filter. Undvik dock starka doftande medel, eftersom lukten stannar i rummet. Torka upp spill direkt, och håll koll på fukt och kondens dagligen. Läs mer i <a href="/spabad/spabad-komplett-guide/">den kompletta spabadguiden</a>.</p>'],
    ],
    faq: [
      ['Kan man ha spabad inomhus?',
        'Ja, det är populärt för att kunna bada året runt. Det kräver dock aktiv ventilation, fuktskydd och rätt elinstallation, eftersom varmt vatten i ett stängt rum ger kondens och fukt.'],
      ['Hur löser man fukten från ett spabad inomhus?',
        'Med aktiv frånluft (gärna fuktsensor), kompletterande avfuktare och tilluft så att rummet ventileras ordentligt. Kondens på fönster och kalla ytor är ett tecken på att ventilationen är för svag.'],
      ['Vilket golv behövs runt ett spabad inomhus?',
        'Ett tätt, halksäkert golv med fall mot brunn eller linjeavlopp, plus våtrumsgodkänt tätskikt i utsatt zon – samma krav som i ett badrum.'],
      ['Hur mycket el drar ett spabad inomhus?',
        'Uppvärmningen är den stora posten, men ett varmt och torrt rum minskar värmeförlusten jämfört med att stå ute. Koppla alltid in på jordfelsbrytare och låt helst elektriker göra installationen.'],
      ['Kan man bygga in spabadet helt?',
        'Ja, men lämna alltid en åtkomlig tekniklucka för pump, filter och el. Ett helt inbyggt spabad utan servicelucka blir mycket svårt att underhålla.'],
    ],
    related: ['bygga-in-spabad', 'spabad-energiforbrukning', 'spabad-komplett-guide', 'spabad-vattenbalans'],
  },

  {
    slug: 'pool-i-tradack',
    tag: 'Guide',
    h1: 'Pool i trädäck – så bygger du in poolen i altanen',
    meta_title: 'Pool i trädäck – bygga in pool i altan och däck',
    meta_desc:
      'Så bygger du in poolen i trädäck eller altan: mått, bärande konstruktion, serviceluckor, säkerhet och material för nordiskt klimat.',
    lead:
      'En <strong>pool i trädäck</strong> – där poolen byggs in i altanen så att vattnet ligger i nivå med trallen – är ett av de snyggaste sätten att lösa en pool på en trång eller lutande tomt. I stället för ett stort hål i gräsmattan får du ett sammanhängande däck som flyter ut i vattnet. Men det ställer krav på <strong>bärande konstruktion, mått och serviceluckor</strong>. Här är vad du behöver tänka på.',
    img: 'pool-i-tradack',
    image_prompt:
      'A rectangular swimming pool built flush into a wooden deck in a Swedish garden, clear blue water level with the boards, a ladder, a lift-up service hatch beside the pool, soft daylight, realistic photo, no people',
    sections: [
      ['Två sätt att kombinera pool och trädäck',
        '<p>Det finns i grunden två varianter:</p>'
        + '<ul>'
        + '<li><strong>Pool nedsänkt i däcket</strong> – en nedgrävd pool där trallen byggs runt om, i nivå med vattenytan. Kräver riktig bärande stomme.</li>'
        + '<li><strong>Ovanmarkspool i däck</strong> – en ovanmarkspool som byggs in så att bara övre delen och sargen syns, ofta på lutande tomt. Billigare men kräver att däcket klarar att bära runt poolen.</li>'
        + '</ul>'
        + '<p>Den första ger den renaste looken, den andra är enklare att sköta och bygga. Se <a href="/guider/terasspool-och-ovanmarkspool/">terasspool och ovanmarkspool</a> för fler varianter.</p>'],
      ['Bärande konstruktion – det som måste hålla',
        '<p>Ett trädäck runt en pool bär inte bara sin egen vikt utan också människor, möbler och ibland snö. Konstruktionen vilar vanligen på:</p>'
        + '<ul>'
        + '<li><strong>Plintar eller betongfundament</strong> ner till frostfritt djup, så att däcket inte rör sig med tjällossningen.</li>'
        + '<li><strong>Balkar i rätt dimension</strong> – spännvidden avgör hur grova de måste vara.</li>'
        + '<li><strong>Rostfria eller varmförzinkade beslag</strong> där trä möter fukt.</li>'
        + '</ul>'
        + '<p>Ett däck runt en nedgrävd pool måste dessutom lämna plats för poolväggens konstruktion och rördragning. Har du en <a href="/guider/stalvagsspool/">stålväggspool</a> eller <a href="/guider/glasfiberpool/">glasfiberpool</a> ser infästningen olika ut – kolla tillverkarens anvisning innan du bygger.</p>'],
      ['Mått, nivå och tolerans',
        '<p>Att bygga i nivå med vattnet kräver noggrannhet:</p>'
        + '<ul>'
        + '<li>Lämna en <strong>liten överhöjd på däcket</strong> så att regnvatten rinner bort från poolen.</li>'
        + '<li>Håll <strong>jämnt avstånd</strong> mellan trall och poolkant hela vägen; ojämna springor syns direkt.</li>'
        + '<li>Tänk på att trä rör sig med fukt och temperatur – lämna rörelsefog mot fasta delar.</li>'
        + '</ul>'
        + '<p>En sarg eller kantsten runt poolen skyddar både trall och poolvägg och ger en tydlig avslutning. Se <a href="/guider/poolsarg/">poolsarg</a>.</p>'],
      ['Serviceluckor och åtkomst',
        '<p>Det vanligaste misstaget är att bygga så tätt att man inte kommer åt tekniken. Planera redan från början:</p>'
        + '<ul>'
        + '<li><strong>Uppfällbara luckor</strong> i däcket ovanför <a href="/guider/cirkulationspump-pool/">cirkulationspump</a>, filter och kopplingar.</li>'
        + '<li><strong>Åtkomst till poollampa och inlopp</strong> utan att riva trall.</li>'
        + '<li><strong>Utrymme för vintertömning</strong> och avstängningsventiler.</li>'
        + '</ul>'
        + '<p>Gör luckorna lätta att lyfta med handtag, så att en vanlig service aldrig blir ett projekt.</p>'],
      ['Material för nordiskt klimat',
        '<p>Välj material som tål fukt, frost och sol:</p>'
        + '<ul>'
        + '<li><strong>Tryckimpregnerat trä</strong> – billigt och beprövat, kräver olja/underhåll.</li>'
        + '<li><strong>Trall i komposit</strong> – underhållsfritt och halkdämpat, dyrare.</li>'
        + '<li><strong>Ädelträ som lärk och teak</strong> – vackert men dyrt.</li>'
        + '</ul>'
        + '<p>Runt poolen är <strong>halksäkerhet</strong> viktig – välj gärna en räfflad eller borstad yta, och undvik hala lacker.</p>'],
      ['Säkerhet och skötsel',
        '<p>Ligger poolen i nivå med däcket minskar risken att snubbla, men barnsäkerheten kvarstår. Ett <a href="/poolbygge/poolstaket-och-poollarm/">staket eller larm</a> och ett <a href="/poolbygge/poolskydd/">skydd</a> är fortfarande grundkrav med små barn i huset.</p>'
        + '<p>Skötselmässigt är ett däck runt poolen lättare att hålla rent än en gräskant, men du behöver hålla efter löv i springor och se till att vattnet inte samlas där träet möter poolkanten. Med rätt konstruktion håller ett poolträdäck i många år och höjer dessutom värdet på tomten.</p>'],
    ],
    faq: [
      ['Kan man bygga in en ovanmarkspool i ett trädäck?',
        'Ja, det är en vanlig lösning på lutande eller trånga tomter. Poolen byggs in så att bara övre delen syns, men däcket måste dimensioneras för att bära runt poolen och lämna åtkomst till tekniken.'],
      ['Hur bygger man ett trädäck som bär runt en pool?',
        'Med plintar eller fundament ner till frostfritt djup, balkar i rätt dimension för spännvidden och rostfria eller varmförzinkade beslag. Ett däck runt en pool bär både människor och snö och får inte svikta.'],
      ['Måste poolen ligga i nivå med däcket?',
        'Nej, men nedsänkt i nivå ger den renaste looken. Du kan också bygga ett upphöjt däck med poolen något under kanten, vilket förenklar konstruktionen.'],
      ['Vilket trallmaterial passar runt pool?',
        'Tryckimpregnerat trä är billigast, komposit är underhållsfritt och dyrare, och ädelträ som lärk eller teak är vackrast men kostsammast. Välj en halksäker yta runt poolen.'],
      ['Hur kommer man åt pump och filter under däcket?',
        'Med uppfällbara serviceluckor i däcket ovanför pump, filter och kopplingar. Planera luckorna från början så att service och vintertömning går lätt utan att riva trall.'],
    ],
    related: ['terasspool-och-ovanmarkspool', 'rund-pool', 'poolskydd', 'pooltrappa-eller-stege'],
  },

  {
    slug: 'kompositpool',
    tag: 'Köpguide',
    h1: 'Kompositpool – poolen i glasfiberförstärkt plast',
    meta_title: 'Kompositpool – guide till pool i komposit',
    meta_desc:
      'En kompositpool är formgjuten i glasfiberförstärkt plast och levereras i ett stycke. Så står den mot betong och liner, och det här kostar den.',
    lead:
      'En <strong>kompositpool</strong> är ett färdigformat poolkar tillverkat i komposit – glasfiberförstärkt plast (GFRP) – som levereras i ett stycke och lyfts ner i gropen. Den har slät, tålig yta, går snabbt att installera och kräver minimalt underhåll. Här jämför vi komposit med betong, liner och block, går igenom fördelar, nackdelar och vad du bör tänka på vid köp.',
    img: 'kompositpool',
    image_prompt:
      'A one-piece composite swimming pool shell being lowered by a small crane into a prepared hole in a Swedish garden, smooth light grey interior visible, clean clear water, realistic photo, no people',
    sections: [
      ['Vad är en kompositpool?',
        '<p>Ordet "komposit" betyder sammansatt material – i praktiken oftast <strong>glasfiberarmerad plast</strong>, där glasfiberväv gjuts in i polyester eller vinyl. Karet formgjuts i en form, får ett jämnt, färdigt ytskikt och transporteras som en enda enhet.</p>'
        + '<p>Det gör den till en "färdig pool": när den väl är på plats återstår i princip bara att fylla vatten och koppla in tekniken. Den ligger nära <a href="/guider/glasfiberpool/">glasfiberpoolen</a> men komposit är ett vidare begrepp för den formgjutna konstruktionen – inklusive varianter för <strong>ovan mark</strong>.</p>'],
      ['Komposit mot betong, block och liner',
        '<p>Så står de vanligaste pooltyperna mot varandra:</p>'
        + '<ul>'
        + '<li><strong>Komposit / formgjuten</strong> – slät, tålig yta, enhetlig kvalitet, snabb installation. Begränsat utbud av former och mått.</li>'
        + '<li><strong><a href="/guider/betongpool/">Betongpool</a></strong> – helt fria former och storlekar, men dyrast och långsammast att bygga.</li>'
        + '<li><strong><a href="/kopguider/thermoblock-pool/">Blockpool (thermoblock)</a></strong> – flexibel och prisvärd, byggs på plats med liner. Se <a href="/guider/poolliner/">poolliner</a>.</li>'
        + '<li><strong>Linerpool (ramliner)</strong> – standardformer, billigast, men liner är en slitdel som byts ibland.</li>'
        + '</ul>'
        + '<p>Komposit och glasfiber vinner på tid och underhåll, betong på frihet, och block/liner på pris.</p>'],
      ['Fördelar med kompositpool',
        '<ul>'
        + '<li><strong>Snabb installation</strong> – karet är färdigt och lyfts på plats; mycket av byggtiden försvinner.</li>'
        + '<li><strong>Slät, kväve-/algtrög yta</strong> – lätt att hålla ren, och färre gömställen för alger än en skarvad liner.</li>'
        + '<li><strong>Tålig</strong> – klarar frost och rörelser bättre än många ger det kredit för, förutsatt rätt underarbete.</li>'
        + '<li><strong>Lång livslängd</strong> – ett välskött kar kan hålla i decennier.</li>'
        + '</ul>'
        + '<p>För många är den slätare ytan och den kortare byggtiden de stora vinsterna.</p>'],
      ['Nackdelar du bör känna till',
        '<ul>'
        + '<li><strong>Begränsade former</strong> – du väljer bland tillverkarens modeller, inte helt fritt.</li>'
        + '<li><strong>Transport och lyft</strong> – ett kar i ett stycke kräver lyft och tillfart för lastbil/kran.</li>'
        + '<li><strong>Högre pris än liner</strong> – men ofta lägre totalt än betong.</li>'
        + '<li><strong>Repor</strong> – går att polera bort, men en skarp yta kan märkas.</li>'
        + '</ul>'
        + '<p>Är tomten trång eller lutande kan transporten bli krångligast av allt. Planera lyftvägen innan du beställer.</p>'],
      ['Kostnad – i grova drag',
        '<p>Ett komposit- eller glasfiberkar i ett stycke ligger i pris mellan en billig linerpool och en byggd betongpool. Utöver karet tillkommer <strong>grävning, underarbete, teknik (pump och filter), uppvärmning och ev. däck</strong>.</p>'
        + '<p>Eftersom "nedgrävd kompositpool med installation och värme" kan landa kring några hundra tusen kronor beroende på storlek, vill du räkna på helheten – inte bara karet. Jämför alltid totalkostnad inkl. markarbete och <a href="/guider/driftkostnad-pool/">driftkostnad</a> mellan alternativen.</p>'],
      ['Tänk på innan köp',
        '<ul>'
        + '<li><strong>Mått och djup</strong> – passa dina behov: barnvänlig grund del vs. djup del för vuxna.</li>'
        + '<li><strong>Rektangulär eller formad</strong> – rektangulära kar passar ofta bättre i smala tomter.</li>'
        + '<li><strong>Ytans finish</strong> – färg och struktur (t.ex. ljus sand vs. mörkare) påverkar både känsla och värme.</li>'
        + '<li><strong>Ovan mark eller nedgrävd</strong> – vissa kompositpooler finns i båda utföranden.</li>'
        + '<li><strong>Trafikväg och lyft</strong> – planera för kran/lastbil innan beställning.</li>'
        + '</ul>'
        + '<p>Verifiera alltid tillverkarens anvisningar för underarbete och dränering – ett formgjutet kar ställer högre krav på att marken är rätt förberedd, annars kommer sättningar. Läs också <a href="/kopguider/poolpaket/">poolpaket</a> för vad ett komplett köp brukar innehålla.</p>'],
    ],
    faq: [
      ['Vad är en kompositpool?',
        'En färdigformgjuten pool i komposit, oftast glasfiberförstärkt plast, som levereras i ett stycke och lyfts ner i gropen. Den har slät, tålig yta och är snabb att installera.'],
      ['Är komposit samma sak som glasfiberpool?',
        'Nära besläktat. Glasfiberpool är det vanligaste utförandet av kompositpool, men komposit är ett vidare begrepp för det formgjutna, sammansatta materialet.'],
      ['Vad kostar en kompositpool?',
        'I grova drag mellan en billig linerpool och en byggd betongpool. Kom ihåg att räkna in grävning, underarbete, teknik, uppvärmning och eventuellt däck – karet är bara en del av totalkostnaden.'],
      ['Vilka nackdelar har en kompositpool?',
        'Du är begränsad till tillverkarens former och mått, karet kräver transport och lyft till plats, och priset är högre än för en enkel linerpool. Ett skarpt föremål kan också göra märken i ytan.'],
      ['Är en kompositpool bra i nordiskt klimat?',
        'Ja, ett rätt installerat kar tål frost, men det förutsätter korrekt underarbete och dränering. Följ tillverkarens anvisningar för att undvika sättningar och följdskador.'],
    ],
    related: ['betongpool', 'glasfiberpool', 'thermoblock-pool', 'poolliner'],
  },
];
