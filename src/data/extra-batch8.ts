// Batch 8 – poolvärme, vattenvård och pooltyper.
// Byggd på verklig research: Google-autocomplete (fråge-mining), Bing/DDG-SERP
// samt branschens egna kunskapssidor (pahlen.se, folkpool.se, cdn/jula/vidaxl
// för produkter). Inga påhittade siffror – intervall och enheter där fakta är
// osäker. Samma schema som övriga moduler.
export const EXTRA_BATCH8 = [
  {
    slug: 'poolvarmare',
    tag: 'Köpguide',
    h1: 'Poolvärmare – så väljer du rätt uppvärmning till poolen',
    meta_title: 'Poolvärmare – guide till rätt uppvärmning av pool',
    meta_desc:
      'Värmepump, värmeväxlare, elvärmare eller solfångare? Så väljer du rätt poolvärmare, dimensionerar effekten i kW och räknar hem driftkostnaden.',
    lead:
      'En poolvärmare avgör hur länge och hur ofta du faktiskt badar. Det finns fyra vanliga sätt att värma en pool – <strong>värmepump</strong>, <strong>värmeväxlare</strong>, <strong>elvärmare</strong> och <strong>solfångare</strong> – plus ved och gas i vissa anläggningar. Här är hur de fungerar, vad de kostar i drift och hur du dimensionerar effekten så att poolen håller värmen hela säsongen.',
    img: 'poolvarmare',
    image_prompt:
      'An outdoor heat pump for a swimming pool installed beside a garden pool with clear blue water, clean equipment pad, Swedish garden, realistic photo, no people',
    sections: [
      ['Fyra sätt att värma en pool',
        '<p>Alla poolvärmare gör samma sak – tillför energi till vattnet – men på olika sätt och med olika driftkostnad. Översiktligt:</p>'
        + '<ul><li><strong>Värmepump</strong> – hämtar värme ur uteluften och är det mest energieffektiva alternativet för en vanlig utomhuspool.</li>'
        + '<li><strong>Värmeväxlare</strong> – kopplas till en värmekälla du redan har i huset (el-, ved-, pellets- eller oljepanna) och ger snabb uppvärmning.</li>'
        + '<li><strong>Elvärmare</strong> – kompakt, billig i inköp och ger full effekt direkt. Passar små pooler, spabad och badtunnor.</li>'
        + '<li><strong>Solfångare</strong> – billig värme när solen skiner, men ger inget när det är mulet.</li></ul>'
        + '<p>Många kombinerar två: solfångare som bas och värmepump när solen inte räcker. Vill du ha jämn temperatur hela säsongen är värmepumpen den vanligaste lösningen.</p>'],
      ['Värmepump – mest energieffektiv',
        '<p>En poolvärmepump fungerar som ett omvänt kylskåp. Den tar upp värme ur utomhusluften i en <strong>förångare</strong>, överför den till ett köldmedium och lämnar värmen till poolvattnet via en kondensor. Eftersom den flyttar värme i stället för att producera den har den en verkningsgrad (COP) på omkring <strong>5–7</strong> – för varje kWh el får du flera kWh värme.</p>'
        + '<p>Det gör värmepumpen billig i drift, men den kräver fri luft runt omkring. Står den inklämd återcirkulerar kall luft och effekten rasar. Vid kall och fuktig luft isar förångaren och en avfrostningscykel tar över – därför sjunker effekten när det blir riktigt kallt ute. Läs mer i <a href="/kopguider/varmepump-pool/">värmepump till pool</a>.</p>'],
      ['Värmeväxlare – om du har egen värmekälla',
        '<p>Har du en el-, ved-, pellets- eller oljepanna i huset kan en värmeväxlare vara det billigaste alternativet. Poolvattnet leds genom en värmeväxlare som tar värme från husets värmesystem – ingen separat energikälla behövs, och uppvärmningen går snabbt.</p>'
        + '<p>Förutsättningen är att pannan har kapacitet över, och att poolen ligger nära så att rördragningen blir rimlig. Räkna med att en värmeväxlare kan behöva en <a href="/guider/poolvarmepump-bypass/">bypass</a> så att du kan styra flödet genom den.</p>'],
      ['Elvärmare – enkel och billig i inköp',
        '<p>En elvärmare är precis vad den låter som: ett värmeelement som värmer vattnet direkt. Den är kompakt, lätt att installera och ger full effekt omedelbart – ingen uppstarts- eller avfrostningstid. Därför passar den mindre pooler, spabad och badtunnor, eller som snabb hjälp att komma upp i temperatur på våren.</p>'
        + '<p>Nackdelen är driftkostnaden: elvärmaren har i praktiken verkningsgrad 1, så varje kWh värme kostar en kWh el. Till en stor utomhuspool blir det dyrt över en hel säsong – se <a href="/guider/driftkostnad-pool/">driftkostnad för pool</a>.</p>'],
      ['Solfångare – billig värme när solen skiner',
        '<p>En poolsolfångare är svarta absorbatorrör som solen värmer, placerade på tak eller mark. Vatten från poolens pump leds genom rören och tillbaka uppvärmt. Tumregeln är att solfångarens yta ska vara <strong>50–100 % av poolens vattenyta</strong> – en pool på 4 × 8 m klarar sig ofta med 20–30 m².</p>'
        + '<p>Driftkostnaden är mycket låg eftersom solen gör jobbet, men effekten försvinner i mulet väder. Kombinera gärna med ett täcke som håller värmen kvar. Mer i <a href="/kopguider/solfangare-pool/">solfångare till pool</a>.</p>'],
      ['Så dimensionerar du effekten',
        '<p>Rätt effekt beror på poolens volym, hur mycket vattnet kyls av och hur hög temperatur du vill hålla. En grov utgångspunkt:</p>'
        + '<ul><li>Liten ovanmarkspool (10–20 m³): ofta <strong>5–7 kW</strong> värmepump.</li>'
        + '<li>Normal pool (30–50 m³, t.ex. 4 × 8 m): vanligen <strong>9–13 kW</strong>.</li>'
        + '<li>Större eller nedgrävd pool: från <strong>15 kW</strong> och uppåt.</li></ul>'
        + '<p>Välj hellre en effekt över än under – en för klen värmepump får jobba dygnet runt och tappar ändå temperatur i kallt väder. Ett poolskydd sänker behovet märkbart.</p>'],
      ['Driftkostnad och poolskydd',
        '<p>Uppvärmningen är den största driftposten för en pool. Det enskilt billigaste sättet att sänka den är ett <strong>poolskydd</strong>: ett täcke minskar både avdunstningen och värmeförlusten, så värmepumpen behöver arbeta mindre. Ett lamelltäcke eller automatiskt skydd håller värmen kvar bäst, men även en enkel bubbelplast gör stor skillnad.</p>'
        + '<p>Räkneexempel: en pool på 4 × 8 × 1,5 m som hålls på 27 grader maj–september förbrukar i storleksordningen 4 300 kWh uppvärmning. Med ett bra skydd och rätt dimensionerad värmepump sjunker den siffran. Räkna på ditt eget elpris i <a href="/guider/driftkostnad-pool/">driftkostnadsguiden</a>.</p>'],
    ],
    faq: [
      ['Vilken poolvärmare är billigast i drift?',
        'En värmepump, tack vare sin höga verkningsgrad (COP 5–7), eller en solfångare som drivs av solen. En elvärmare är billigast i inköp men dyrast per kWh värme.'],
      ['Hur många kW värmepump behöver jag?',
        'En liten ovanmarkspool klarar sig ofta med 5–7 kW, en normal 4 × 8-pool med 9–13 kW och större pooler behöver 15 kW eller mer. Välj hellre lite över än under.'],
      ['Kan jag värma poolen med husets värmepanna?',
        'Ja, med en värmeväxlare som tar värme från husets el-, ved-, pellets- eller oljesystem. Det kräver att pannan har kapacitet över och att rördragningen blir rimlig.'],
      ['Fungerar en värmepump när det är kallt ute?',
        'Den värmer även i sval luft, men effekten sjunker och avfrostning tar tid vid låg temperatur och hög luftfuktighet. Håll den fri från hinder så att den får luft.'],
      ['Räcker en elvärmare till min pool?',
        'Till små pooler, spabad och badtunnor fungerar den bra. Till en stor utomhuspool blir driftkostnaden hög eftersom elvärmaren har verkningsgrad 1.'],
    ],
    related: ['varmepump-pool', 'solfangare-pool', 'driftkostnad-pool', 'poolvarmepump-bypass'],
  },

  {
    slug: 'poolsalt',
    tag: 'Guide',
    h1: 'Poolsalt – så mycket ska du ha och hur du doserar',
    meta_title: 'Poolsalt – rätt mängd, dosering och skötsel av pool',
    meta_desc:
      'Poolsalt behövs till saltklorinatorn. Så räknar du ut mängden, doserar rätt, väljer rätt salt och håller salthalten stabil säsong efter säsong.',
    lead:
      'Poolsalt används för att ge saltklorinatorn något att arbeta med. Vattnet får en salthalt på <strong>3–5 g per liter</strong>, och klorinatorn omvandlar saltet till fritt klor som desinficerar poolen. Här är hur mycket salt du behöver, hur du doserar och vilket salt du ska välja – och varför salthalten håller sig stabil år efter år.',
    img: 'poolsalt',
    image_prompt:
      'A bag of pool salt and a measuring scoop beside a swimming pool with clear blue water, salt chlorinator control box in the background, daylight, realistic photo, no people',
    sections: [
      ['Vad poolsalt är – och när du behöver det',
        '<p>Poolsalt är helt enkelt natriumklorid (NaCl) som löses upp i poolvattnet. Du behöver det när poolen desinficeras med en <strong>saltklorinator</strong>: en cell spjälkar saltet med elektrolys och bildar fritt klor, som sedan desinficerar vattnet och återgår till salt. På så vis återanvänds saltet i en kretsloppsliknande process.</p>'
        + '<p>Har du vanlig klordesinfektion utan klorinator behöver du inget poolsalt – men ett saltvattenbad upplevs ofta mjukare mot huden. Läs mer i <a href="/guider/saltvattenpool/">saltvattenpool</a> och <a href="/kopguider/saltklorinator/">saltklorinator</a>.</p>'],
      ['Så mycket salt ska poolen ha',
        '<p>De flesta saltklorinatorer vill ha en salthalt på <strong>3–5 g/l</strong>, alltså 3 000–5 000 ppm. Kontrollera alltid cellens anvisning – vissa kräver minst 4 g/l. Räkna ut mängden från poolens volym:</p>'
        + '<ul><li>Volym (m³) × önskad salthalt (g/l) = kilo salt.</li>'
        + '<li>Exempel: en pool på 40 m³ som ska ha 4 g/l behöver 40 × 4 = <strong>160 kg salt</strong>.</li></ul>'
        + '<p>Mät salthalten innan du tillsätter så att du inte överdoserar. Enklast är en <a href="/guider/vattentester-pool/">salthaltstestare eller teststickor</a>.</p>'],
      ['Så doserar du saltet',
        '<ol><li>Häll saltet direkt i poolen längs kanten, inte i skimmern.</li>'
        + '<li>Kör cirkulationspumpen och borsta botten så att saltet löses upp jämnt.</li>'
        + '<li>Låt pumpen gå i minst ett dygn innan du startar klorinatorn – olöst salt kan skada cellen.</li>'
        + '<li>Mät salthalten efter ett dygn och justera vid behov.</li></ol>'
        + '<p>Sprider du ut saltet över ytan löser det upp snabbare än om det ligger i en hög på botten.</p>'],
      ['Rätt salt – inte vilket salt som helst',
        '<p>Använd <strong>rent natriumklorid avsett för pool</strong>. Undvik jodsalt och bordsalt med klumpförebyggande medel, och var försiktig med tösalt/vägsalt som kan innehålla föroreningar och tillsatser som inte hör hemma i poolen. Poolsalt säljs ofta i 25-kg-säckar och är i praktiken ren salt utan tillsatser.</p>'
        + '<p>Är du osäker – välj ett salt som uttryckligen är märkt för pool och saltklorinator.</p>'],
      ['Salt försvinner inte – bara via vattenbyte',
        '<p>En vanlig missuppfattning är att saltet måste fyllas på hela tiden. Saltet förbrukas inte vid kloreringen, utan stannar i vattnet. Det försvinner bara när du byter ut vatten: vid <a href="/guider/backspola-pool/">backspolning</a>, påfyllning eller vattenbyte.</p>'
        + '<p>Därför behöver du i praktiken bara fylla på för att kompensera för det vatten du tappat ut. Håll koll på salthalten några gånger per säsong – ligger den stabilt behöver du inte göra något.</p>'],
      ['Salthalt, klorinator och vattenbalans',
        '<p>Saltklorinatorn producerar klor, men den ersätter inte vattenbalansen. pH ska ligga i intervallet <strong>7,2–7,6</strong> och alkaliniteten ska vara stabil, annars sjunker klorets verkan. Håll även koll på cyanursyran om du kompletterar med puckar.</p>'
        + '<p>Ett saltvattensystem mår bäst av jämn cirkulation och rengjort filter. Se <a href="/guider/klorvarde-pool/">klorvärde i pool</a> för hur du tolkar mätvärdena.</p>'],
    ],
    faq: [
      ['Hur mycket poolsalt behöver jag per kubikmeter?',
        'Räkna med 3–5 kg per m³ för att nå en salthalt på 3–5 g/l. En pool på 40 m³ behöver alltså omkring 120–200 kg beroende på önskad halt och cellens krav.'],
      ['Kan man använda tösalt eller bordsalt i poolen?',
        'Helst inte. Använd rent poolsalt utan jod eller klumpförebyggande medel – tösalt och bordsalt kan innehålla tillsatser och föroreningar som inte hör hemma i poolvattnet.'],
      ['Försvinner saltet över tid?',
        'Nej, saltet förbrukas inte vid kloreringen. Det minskar bara när du tappar ut vatten, till exempel vid backspolning eller vattenbyte – då fyller du på för att kompensera.'],
      ['Vilken salthalt krävs för en saltklorinator?',
        'Oftast 3–5 g/l (3 000–5 000 ppm). Kontrollera cellens anvisning, en del modeller kräver minst 4 g/l för att producera klor effektivt.'],
      ['Måste jag tillsätta salt varje säsong?',
        'Bara om salthalten sjunkit, vilket sker när vatten bytts ut. Ligger halten kvar i intervallet behöver du inte tillsätta något inför säsongen.'],
    ],
    related: ['saltklorinator', 'saltvattenpool', 'klorvarde-pool', 'vattentester-pool'],
  },

  {
    slug: 'alger-i-poolen',
    tag: 'Guide',
    h1: 'Alger i poolen – så får du bort grönt, svart och gult',
    meta_title: 'Alger i poolen – så får du bort grönt och svart vatten',
    meta_desc:
      'Gröna, svarta eller gula alger i poolen? Så uppstår de, så behandlar du dem steg för steg med borstning, chockklorering och filtrering.',
    lead:
      'Alger i poolen är ett av de vanligaste problemen – och nästan alltid ett tecken på att klornivån varit för låg eller pH för högt. Gröna alger går oftast att lösa på ett dygn, medan svarta och senapsgula kräver mer. Här är varför algerna kommer, hur du skiljer typerna åt och en steg-för-steg-behandling som fungerar.',
    img: 'alger-i-poolen',
    image_prompt:
      'A swimming pool with green algae on the walls and cloudy green water, a pool brush leaning at the edge, overcast daylight, realistic photo, no people',
    sections: [
      ['Varför alger uppstår i poolen',
        '<p>Alger finns överallt i omgivningen och behöver bara rätt förhållanden för att blomma. De trivs när:</p>'
        + '<ul><li>Klornivån varit för låg en period.</li>'
        + '<li>pH ligger högt, så kloret inte verkar fullt ut.</li>'
        + '<li>Vattnet är varmt och solen ligger på.</li>'
        + '<li>Cirkulationen är dålig eller filtret igensatt.</li>'
        + '<li>Cyanursyran blivit för hög (klorlås).</li></ul>'
        + '<p>Ofta är det en kombination. Efter ett regn, en värmebölja eller en semester utan tillsyn är risken som störst.</p>'],
      ['Grön, svart och senapsgul alg – vad är skillnaden?',
        '<p>Färgen berättar hur illa det är och hur mycket jobb som krävs:</p>'
        + '<ul><li><strong>Gröna alger</strong> – vanligast, gör vattnet grönt och grumligt. Svarar oftast bra på chockklorering och borstning.</li>'
        + '<li><strong>Senapsgula (gula) alger</strong> – mer motståndskraftiga mot klor och sätter sig gärna på skuggiga väggar. Kräver borstning och högre, ihållande klorhalt.</li>'
        + '<li><strong>Svarta alger</strong> – svårast, sitter djupt i porer och fogar och kommer tillbaka om behandlingen inte fullföljs. Kräver upprepad chockklorering och noggrann borstning.</li></ul>'],
      ['Steg 1 – borsta och ta bort skräp',
        '<p>Fiska upp löv och skräp först. Borsta sedan väggar, botten och trappsteg så att algerna lossnar från ytan – klor och algmedel kommer inte åt alger som sitter fast. Använd en <a href="/kopguider/pooldammsugare/">pooldammsugare</a> eller borste och gör rent filtret.</p>'
        + '<p>Att bara hälla i klor utan att borsta är det vanligaste misstaget – algerna lossnar då inte och kommer snabbt tillbaka.</p>'],
      ['Steg 2 – chockklorera',
        '<p>Kontrollera pH först och sänk det till <strong>7,2–7,4</strong>, annars verkar inte kloret. Kör sedan en <a href="/guider/chockklorering/">chockklorering</a>: vid grönt vatten räcker inte normaldos – sikta på <strong>5–10 mg/l fritt klor</strong> och kör pumpen dygnet runt. Vid svarta och gula alger kan behandlingen behöva upprepas.</p>'
        + '<p>Mät kloret löpande och håll nivån uppe tills vattnet klarnar och algerna släpper från ytorna.</p>'],
      ['Steg 3 – filtrera och flocka',
        '<p>När algerna dör blir vattnet grått och mjölkigt av fria algerester. Nu gäller det att få bort dem ur vattnet: kör pumpen kontinuerligt och tillsätt <a href="/guider/flockningsmedel-pool/">flockningsmedel</a> så att partiklarna klumpar ihop sig och fastnar i filtret. Backspola filtret dagen efter.</p>'
        + '<p>Ett igensatt filter bromsar hela processen – rengör eller byt filtermediet vid behov.</p>'],
      ['Steg 4 – förebygg återfall',
        '<p>När vattnet är klart igen handlar det om att inte hamna där på nytt:</p>'
        + '<ul><li>Håll fritt klor i rätt intervall och pH på 7,2–7,6.</li>'
        + '<li>Håll koll på cyanursyran så att du inte får klorlås.</li>'
        + '<li>Kör filtret tillräckligt länge – hela vattenvolymen bör passera två till tre gånger per dygn.</li>'
        + '<li>Använd <a href="/guider/algmedel-pool/">algmedel</a> förebyggande inför semester och värmebölja.</li></ul>'
        + '<p>Efter vintern gäller samma metod – se <a href="/guider/alger-efter-vintern/">alger efter vintern</a>.</p>'],
      ['Är alger i poolen farliga?',
        '<p>Algerna i en pool är i sig inte giftiga på samma sätt som blommande blågröna alger i en sjö kan vara. Problemet är i stället att grönt vatten betyder att desinfektionen har brustit – då kan bakterier och annat ha fått fäste samtidigt.</p>'
        + '<p>Bada därför inte i grönt eller grumligt vatten. Behandla, få vattnet klart och kontrollera att klor och pH ligger rätt innan du hoppar i igen.</p>'],
    ],
    faq: [
      ['Varför blir poolen grön?',
        'Grönt vatten beror nästan alltid på för låg klorhalt eller för högt pH, ofta i kombination med varmt vatten och svag cirkulation. Algerna blommar då snabbt.'],
      ['Hur får man bort grönt vatten snabbt?',
        'Borsta alla ytor, sänk pH till 7,2–7,4, chockklorera till 5–10 mg/l fritt klor och kör pumpen dygnet runt. Flocka och backspola när vattnet grånar.'],
      ['Är svarta alger svårast att bli av med?',
        'Ja. Svarta alger sitter djupt i porer och fogar och kräver noggrann borstning och upprepad chockklorering. Utan fullföljd behandling kommer de tillbaka.'],
      ['Kan man bada i grönt poolvatten?',
        'Nej. Grönt vatten innebär att desinfektionen brustit och att bakterier kan finnas. Behandla tills vattnet är klart och kemin balanserad innan du badar.'],
      ['Måste jag tömma poolen om den blivit grön?',
        'Sällan. Alger går nästan alltid att åtgärda med borstning, chockklorering och filtrering. Bara vid extremt högt cyanursyra behöver en del vatten bytas.'],
    ],
    related: ['gront-poolvatten', 'algmedel-pool', 'alger-efter-vintern', 'chockklorering'],
  },

  {
    slug: 'poolkupol',
    tag: 'Köpguide',
    h1: 'Poolkupol – så förlänger du badsäsongen i din pool',
    meta_title: 'Poolkupol – så förlänger du badsäsongen i din pool',
    meta_desc:
      'En poolkupol håller värmen, stoppar löv och förlänger badsäsongen för en bråkdel av ett pooltak. Så väljer du rätt kupol till din pool.',
    lead:
      'En poolkupol är ett valv eller tält som lägger sig över poolen och fungerar som ett växthus – solen värmer vattnet, värmen stannar kvar och löv och insekter hålls ute. Den ger en förlängd badsäsong för en bråkdel av priset för ett <a href="/kopguider/pooltak/">pooltak</a>. Här är typerna, storlekarna, priserna och vad du bör tänka på.',
    img: 'poolkupol',
    image_prompt:
      'A transparent pool dome cover over a round above-ground swimming pool in a garden, clear blue water visible inside, soft daylight, realistic photo, no people',
    sections: [
      ['Vad en poolkupol gör',
        '<p>En poolkupol är ett skydd som reser sig över poolen och stänger in luften ovanför vattenytan. Effekten är densamma som i ett växthus: solen värmer luften och vattnet, och värmen kan inte försvinna lika snabbt. Resultatet är en varmare pool och en säsong som börjar tidigare och slutar senare.</p>'
        + '<p>Dessutom håller kupolen ute löv, gräs och insekter, vilket minskar rengöring och kemikalieåtgång. Många upplever att vattnet håller sig varmare flera veckor in på hösten.</p>'],
      ['Poolkupol eller pooltak?',
        '<p>Båda skyddar och värmer, men de är olika dyra och olika stadiga:</p>'
        + '<ul><li><strong>Poolkupol</strong> – billigare, lättare, ofta säsongsbetonad. Mindre isolering och ingen säkerhetsfunktion.</li>'
        + '<li><strong>Pooltak</strong> – styvare konstruktion, högre höjd, bättre isolering och kan förlänga säsongen mer. Klart dyrare.</li></ul>'
        + '<p>Vill du komma billigt undan och mestadels bada sommartid räcker en kupol. Vill du bada i kallare väder och kunna gå under taket, är pooltaket värt sitt pris. Se <a href="/kopguider/pooltak/">pooltak</a>.</p>'],
      ['Uppblåsbar kupol eller fast stomme',
        '<p>Det finns i huvudsak tre varianter:</p>'
        + '<ul><li><strong>Uppblåsbar kupol</strong> – billigast, läggs över poolen och hålls uppe av luft. Enklast att ta av och på.</li>'
        + '<li><strong>Kupol med fast stomme</strong> – aluminium- eller PE-stomme klädd med plast eller kanalplast. Stabilare och tåligare.</li>'
        + '<li><strong>Glaskupol</strong> – den lyxigaste varianten, som ett pooltak men i valvform. Klart dyrast.</li></ul>'],
      ['Form och storlek',
        '<p>Kupoler finns i rund, oval och rektangulär form. Vanliga rundade storlekar ligger kring 360, 460 och 550 cm, och rektangulära modeller förekommer i mått som 440 × 220 cm, 500 × 500 cm och 559 × 275 cm. Mät din pool och lägg till marginal runt omkring så att kupolen ryms med upprullning och kanter.</p>'
        + '<p>Runda pooler täcks oftast av runda kupoler – mät diametern noga, den avgör vilken storlek du ska välja.</p>'],
      ['Vad kostar en poolkupol?',
        '<p>Priset varierar kraftigt med storlek, form och material. En enkel uppblåsbar kupol kan kosta från omkring <strong>2 000–3 000 kr</strong>, medan större kupoler med stomme ligger kring <strong>7 000–15 000 kr</strong> och glaskupoler betydligt högre.</p>'
        + '<p>Räkna även med att kupolen ska förankras ordentligt – vind tar tag i en lätt konstruktion. Se <a href="/guider/driftkostnad-pool/">driftkostnad för pool</a> för hur ett skydd påverkar uppvärmningskostnaden.</p>'],
      ['Montering, förankring och säkerhet',
        '<p>En kupol är enkel att montera men måste förankras mot vind. Kontrollera också takets bärförmåga om snö kan lägga sig på den.</p>'
        + '<p>Viktigt: en poolkupol är <strong>inte</strong> ett säkerhetsskydd. Den bär ingen vikt och skyddar inte mot fall. Har du små barn behöver du ett godkänt skydd vid sidan av – se <a href="/guider/poolstaket-och-poollarm/">poolstaket och poollarm</a>.</p>'],
      ['Skötsel och livslängd',
        '<p>Rengör kupolen med vatten och milt medel, och förvara den torrt och mörkt över vintern så håller plasten längre. UV-ljus åldrar materialet, så en kupol som står ute året runt får kortare livslängd. Över vinter använder du i stället ett <a href="/guider/pooloverdrag/">vinteröverdrag</a>.</p>'],
    ],
    faq: [
      ['Vad kostar en poolkupol?',
        'En enkel uppblåsbar kupol kostar från omkring 2 000–3 000 kr. Större kupoler med stomme ligger ofta kring 7 000–15 000 kr, och glaskupoler betydligt högre.'],
      ['Kan man ha poolkupol på vintern?',
        'Nej, den är gjord för säsongsbruk. Över vintern använder du i stället ett vinteröverdrag som tål frost och snö.'],
      ['Är en poolkupol ett säkerhetsskydd?',
        'Nej. En kupol bär ingen vikt och skyddar inte mot fall. Med små barn behöver du ett godkänt skydd, till exempel staket eller skyddsnät.'],
      ['Hur mycket värmer en poolkupol?',
        'Den fungerar som ett växthus och kan höja temperaturen flera grader och förlänga säsongen i båda ändar. Effekten beror på sol, vind och poolens storlek.'],
      ['Poolkupol eller pooltak – vad ska jag välja?',
        'Vill du billigt förlänga sommarsäsongen räcker en kupol. Vill du bada i kallare väder, ha bättre isolering och kunna gå under taket är pooltaket bättre men dyrare.'],
    ],
    related: ['pooltak', 'pooloverdrag', 'bubbelplast-pool', 'driftkostnad-pool'],
  },

  {
    slug: 'lamelltacke-pool',
    tag: 'Köpguide',
    h1: 'Lamelltäcke till pool – skydd, värme och säkerhet i ett',
    meta_title: 'Lamelltäcke till pool – skydd, värme och säkerhet',
    meta_desc:
      'Ett lamelltäcke flyter på ytan, rullas upp på en axel och håller värmen bättre än bubbelplast. Så fungerar det, vilka mått gäller och vad det kostar.',
    lead:
      'Ett lamelltäcke är ett måttbeställt poolskydd av hopkopplade lameller som flyter på vattenytan och rullas upp på en axel vid poolens kortsida. Det håller värmen kvar betydligt bättre än en tunn <a href="/guider/bubbelplast-pool/">bubbelplast</a>, är bekvämt att sköta och fungerar dessutom som ett säkerhetsskydd. Här är hur det fungerar, vilka mått som gäller och vad det kostar.',
    img: 'lamelltacke-pool',
    image_prompt:
      'A slatted pool cover rolled onto an axle at the short end of a rectangular swimming pool, clear blue water, wooden decking, Nordic garden, daylight, realistic photo, no people',
    sections: [
      ['Vad ett lamelltäcke är',
        '<p>Ett lamelltäcke består av ihakade lameller som bildar en sammanhängande matta på vattenytan. Mattan rullas upp på en axel vid poolens ena kortsida, antingen manuellt eller med motor. Till skillnad från bubbelplast är det <strong>måttbeställt</strong> efter din pool och håller formen år efter år.</p>'
        + '<p>Eftersom det ligger tätt på ytan stoppar det den enskilt största värmeförlusten – avdunstningen – och håller värmen kvar nattetid. Det gör det till ett av de mest effektiva skydden för att sänka uppvärmningskostnaden.</p>'],
      ['Lameller och mått',
        '<p>Lamelltäcken tillverkas efter poolens bredd, längd och form, och kan i många fall anpassas efter en trappa eller annan avvikelse. Lamellerna finns i olika bredd och tjocklek – tjockare lameller isolerar bättre och bär mer vikt.</p>'
        + '<p>Eftersom måtten styr priset är det viktigt att mäta noga innan du beställer. Ett lamelltäcke kan inte klippas till hemma på samma sätt som ett ark bubbelplast.</p>'],
      ['Transparent eller opak',
        '<p>Lameller finns både transparenta och opaka (färgade). Transparenta släpper in ljus och hjälper till att värma vattnet, medan opaka lameller blockerar ljuset och därmed minskar algernas tillväxt. Vilket du väljer beror på om du prioriterar uppvärmning eller vill hålla vattnet mörkt och algfritt.</p>'],
      ['Manuell eller motoriserad upprullning',
        '<p>Upprullningen sker på en axel vid poolkanten. Enklare modeller rullas upp för hand, medan större och tyngre täcken gärna har en <strong>motoriserad</strong> upprullning. En del system har motorn dold under däck – till exempel Pahléns AquaLamell – medan andra har en synlig axel ovanpå sargen.</p>'
        + '<p>Poängen är att täcket ska vara så enkelt att lägga på att du faktiskt gör det varje gång. Ett täcke som ligger på gör hela jobbet.</p>'],
      ['Nedsänkt eller ovanpå sargen',
        '<p>Lamelltäcket kan monteras på två sätt: ovanpå poolens sarg, eller <strong>nedsänkt</strong> så att det glider in i en nisch i däcket och ligger i nivå med marken. Nedsänkt ger ett renare intryck och gör att man inte snubblar på sargen, men kräver mer planering vid bygget.</p>'],
      ['Säkerhet – ett skydd som bär vikt',
        '<p>Till skillnad från ett soltäcke bär ett lamelltäcke vikt. Det innebär att det kan fungera som ett fallskydd och barnsäkring, vilket är ett krav för många fasta pooler. Kontrollera att den modell du väljer är godkänd för ändamålet om säkerhet är viktigt.</p>'
        + '<p>Det är den stora skillnaden mot <a href="/guider/pooloverdrag/">bubbelplast och enkla överdrag</a>, som bara sparar värme. Läs mer i <a href="/poolbygge/poolskydd/">poolskydd</a>.</p>'],
      ['Pris, livslängd och skötsel',
        '<p>Ett lamelltäcke är dyrare än bubbelplast eftersom det är måttbeställt och håller i många år. Priset beror på poolens storlek, lamelltyp och om upprullningen är motoriserad. Skötseln är enkel: skölj av täcket då och då så att smuts och algbeläggning inte sänker effekten, och håll koll på upprullningsmekaniken.</p>'
        + '<p>Ett bra lamelltäcke kan hålla i många säsonger och betalar sig genom lägre uppvärmningskostnad – se <a href="/guider/driftkostnad-pool/">driftkostnad för pool</a>.</p>'],
    ],
    faq: [
      ['Är ett lamelltäcke bättre än bubbelplast?',
        'Ja, på flera punkter: det isolerar bättre, är bekvämare att sköta och bär vikt så att det kan fungera som säkerhetsskydd. Bubbelplast är billigare men slits snabbare och skyddar inte mot fall.'],
      ['Kan man gå på ett lamelltäcke?',
        'Ofta ja – ett lamelltäcke bär vikt och kan fungera som fallskydd. Kontrollera att just din modell är godkänd för ändamålet.'],
      ['Vad kostar ett lamelltäcke?',
        'Det är måttbeställt och priset varierar med poolens storlek, lamelltyp och om upprullningen är motoriserad. Räkna med en klart högre kostnad än för bubbelplast.'],
      ['Lamelltäcke eller pooltak?',
        'Ett lamelltäcke ligger på vattenytan och rullas upp på en axel, medan ett pooltak är ett tak över poolen. Pooltaket förlänger säsongen mer men kostar betydligt mer.'],
      ['Hur länge håller ett lamelltäcke?',
        'Med normal skötsel håller ett lamelltäcke många säsonger. Skölj av det regelbundet och skydda mekaniken så förlängs livslängden.'],
    ],
    related: ['pooloverdrag', 'poolskydd', 'bubbelplast-pool', 'driftkostnad-pool'],
  },

  {
    slug: 'thermoblock-pool',
    tag: 'Köpguide',
    h1: 'Thermoblock-pool – stommen, paketet och priset',
    meta_title: 'Thermoblock-pool – stommen, paketet och priset för pool',
    meta_desc:
      'Thermoblock är isolerande block som fylls med betong och blir en stadig poolstomme. Så byggs en thermoblockpool, vad paketet innehåller och vad den kostar.',
    lead:
      'En thermoblockpool byggs av isolerande block som staplas, armeras och fylls med betong – en stomme som både är stadig och håller värmen. Det är ett flexibelt alternativ till <a href="/guider/glasfiberpool/">glasfiberpool</a> och klassisk <a href="/guider/stalvagsspool/">stålväggspool</a>, och säljs ofta som kompletta paket. Här är hur det fungerar, vad paketet innehåller och vad du bör räkna med.',
    img: 'thermoblock-pool',
    image_prompt:
      'Construction of an insulated block swimming pool, stacked hollow insulated blocks forming pool walls on a concrete slab, reinforcement bars, daylight, realistic photo, no people',
    sections: [
      ['Vad thermoblock är',
        '<p>Thermoblock är ihåliga, isolerande block – ofta av expanderad polystyren (EPS) eller lättbetong – som staplas till poolens väggar. Blocken armeras och fylls sedan med betong, så att de tillsammans bildar en <strong>massiv, isolerad poolstomme</strong>.</p>'
        + '<p>Eftersom väggarna är isolerade håller poolen värmen bättre än en oisolerad stomme, vilket sänker uppvärmningskostnaden och förlänger säsongen. Systemet är vanligt hos flera svenska poolleverantörer och säljs i moduler för olika storlekar.</p>'],
      ['Steg 1 – förbered mark och platta',
        '<p>Poolen kräver ett plant, bärande underlag. Marken schaktas ur och en armerad betongplatta gjuts som botten. Rätt dränering och <a href="/guider/markskydd-pool/">markskydd</a> runt omkring är viktigt så att inte fukt och tjäle skadar konstruktionen.</p>'],
      ['Steg 2 – stapla, armera och gjut blocken',
        '<p>Blocken staplas i förband till önskad form och höjd. Armeringsjärn sticks ned i blockens hålrum och binds ihop, varefter betong fylls i. När betongen härdat står en stabil, isolerad vägg kvar. Ingjutna detaljer som skimmer, inlopp och belysning förbereds innan gjutningen.</p>'],
      ['Steg 3 – liner, teknik och färdigställande',
        '<p>Invändigt kläs poolen med en <a href="/guider/poolliner/">liner</a> som tätar och ger färgen. Därefter installeras pump, filter, värmare och övrig teknik, och poolen fylls och startas upp. En thermoblockstomme kan också byggas in i en altan eller trädäck.</p>'],
      ['Fördelar och nackdelar',
        '<p><strong>Fördelar:</strong> isolerad stomme ger lägre driftkostnad, flexibla mått och former, robust konstruktion och ett bygge som kan göras i etapper.</p>'
        + '<p><strong>Nackdelar:</strong> det är ett tyngre bygge än en prefabricerad pool, kräver noggrant markarbete och tar längre tid. Du behöver också räkna med grävning, gjutning och eventuell hjälp av entreprenör.</p>'],
      ['Vad ett komplett paket innehåller',
        '<p>Ett thermoblockpaket innehåller normalt blocken, liner, skimmer, inlopp, pump, filter och ofta belysning och trappa. Vad som ingår varierar mellan leverantörer – kontrollera listan noga, för tillval som värmepump, pooltak och automation kan lyfta priset rejält. Jämför alltid <a href="/poolbygge/att-kopa-pool/">vad som ingår innan du köper pool</a>.</p>'],
      ['Pris och bygglov',
        '<p>Priset beror på poolens storlek, utrustningsnivå och hur mycket du gör själv. Ett paket för en normal 4 × 8-pool ligger i ett brett spann beroende på innehåll, och tillkommer gör grävning, gjutning, montering och eventuell entreprenad. Räkna med att totalpriset landar klart över paketpriset.</p>'
        + '<p>En nedgrävd pool kräver oftast en <a href="/poolbygge/bygganmalan-och-bygglov/">bygganmälan</a> hos kommunen. Kontrollera vad som gäller på din tomt innan du börjar.</p>'],
    ],
    faq: [
      ['Vad är en thermoblockpool?',
        'En pool vars stomme byggs av ihåliga, isolerande block som armeras och fylls med betong. Resultatet är en stadig, isolerad vägg som sedan kläs med liner.'],
      ['Är thermoblock isolerande?',
        'Ja. Blocken innehåller isolerande material, så poolväggarna håller värmen bättre än en oisolerad stomme – vilket sänker uppvärmningskostnaden och förlänger säsongen.'],
      ['Kan man bygga en thermoblockpool själv?',
        'En del moment kan du göra själv, men gjutning, markarbete och installation kräver ofta erfarenhet. Många väljer att anlita entreprenör för helheten.'],
      ['Vad kostar en thermoblockpool?',
        'Det beror på storlek, utrustning och hur mycket du gör själv. Paketpriset är en del av totalsumman – grävning, gjutning och installation tillkommer.'],
      ['Thermoblock eller betongpool?',
        'Thermoblock är en form av betongpool där väggarna isoleras av blocken och blir enklare att bygga i etapper. En platsgjuten betongpool är mer arbetskrävande men ger friare former.'],
    ],
    related: ['stalvagsspool', 'glasfiberpool', 'betongpool', 'bygganmalan-och-bygglov'],
  },

  {
    slug: 'betongpool',
    tag: 'Guide',
    h1: 'Betongpool – byggsätt, kostnad och vad du bör tänka på',
    meta_title: 'Betongpool – byggsätt, kostnad och vad du bör tänka på',
    meta_desc:
      'En betongpool byggs på plats och är den mest hållbara typen. Så görs den, vad den kostar, när du behöver bygglov och hur du sköter den.',
    lead:
      'En betongpool byggs på plats och är den mest hållbara och formbara pooltypen. Den klarar nästan vilken form och storlek som helst och håller i generationer – men den kostar mer och tar längre tid än en prefabricerad pool. Här är byggsätten, kostnaden, bygglovet och skötseln du bör känna till.',
    img: 'betongpool',
    image_prompt:
      'A newly built concrete swimming pool under construction in a garden, shotcrete walls with smooth finish, clear water starting to fill, daylight, realistic photo, no people',
    sections: [
      ['Vad en betongpool är',
        '<p>En betongpool gjuts eller sprutas på plats, till skillnad från en prefabricerad <a href="/guider/glasfiberpool/">glasfiberpool</a> som lyfts in färdig. Eftersom stommen byggs direkt på tomten kan den anpassas fritt efter tomtens form, terrassering och önskemål – romersk trappa, sittbänk, infälld belysning och fria kurvor är alla möjliga.</p>'
        + '<p>Det gör betongpoolen till den mest flexibla men också mest arbetskrävande typen. Den är vanlig hos dem som vill bygga en pool för mycket långsiktigt bruk.</p>'],
      ['Byggsätt – platsgjuten, sprutbetong eller block',
        '<p>Det finns tre vanliga sätt att bygga en betongstomme:</p>'
        + '<ul><li><strong>Platsgjuten</strong> – betong gjuts i formar. Stabil och exakt, men kräver formar och armeringsarbete.</li>'
        + '<li><strong>Sprutbetong</strong> – betong sprutas mot armering på plats. Snabbt och vanligt för pools.</li>'
        + '<li><strong>Block/thermoblock</strong> – isolerande block staplas och fylls med betong, se <a href="/kopguider/thermoblock-pool/">thermoblock-pool</a>.</li></ul>'],
      ['Med eller utan liner',
        '<p>Invändigt kan betongpoolen kläs på olika sätt. Den vanligaste och mest prisvärda lösningen är en <a href="/guider/poolliner/">liner</a> som tätar och ger färg. Alternativet är puts eller kakel, som är dyrare men ger en mer exklusiv yta och slipper linerbyte. Putsade pooler ställer högre krav på vattenbalansen eftersom ytan påverkar pH.</p>'],
      ['Fördelar och nackdelar',
        '<p><strong>Fördelar:</strong> håller mycket länge, fria former och storlekar, kan byggas in i terrass och trädgård och höjer ofta fastighetens värde. Läs mer i <a href="/poolbygge/pool-okar-vardet-pa-villan/">pool ökar värdet på villan</a>.</p>'
        + '<p><strong>Nackdelar:</strong> högst kostnad, längst byggtid och kräver entreprenör och markarbete. Den är inte heller flyttbar om du skulle vilja det.</p>'],
      ['Vad kostar en betongpool?',
        '<p>En betongpool är den dyraste pooltypen. Totalpriset beror på storlek, utförande, utrustning och hur mycket av markarbetet som tillkommer. Enklare anläggningar ligger i den lägre delen av spannet medan påkostade pooler med kakel, pooltak och automation hamnar högt.</p>'
        + '<p>Begär alltid en specificerad offert på <strong>totalentreprenad</strong> där grävning, gjutning, teknik och färdigställande ingår. Se <a href="/poolbygge/vad-kostar-det-att-bygga-pool/">vad det kostar att bygga pool</a>.</p>'],
      ['Bygglov, mark och tidplan',
        '<p>En nedgrävd betongpool kräver nästan alltid en <a href="/poolbygge/bygganmalan-och-bygglov/">bygganmälan</a> och ibland bygglov, beroende på kommun och tomt. Kontrollera även ledningar, avstånd till tomtgräns och markens beskaffenhet innan arbetet börjar.</p>'
        + '<p>Räkna med att bygget tar från några veckor till ett par månader beroende på väder, gjutning och torktider.</p>'],
      ['Skötsel av en betongpool',
        '<p>När poolen är klar sköts den som vilken pool som helst: håll pH på 7,2–7,6, håll fritt klor i rätt intervall och kör filtret tillräckligt länge. En liner håller tätt och är enkel att byta, medan puts och kakel kräver att du håller koll på vattenbalansen så att ytan inte skadas.</p>'
        + '<p>En fast <a href="/poolbygge/poolskydd/">skyddsanordning</a> och ett bra täcke sparar både värme och underhåll.</p>'],
    ],
    faq: [
      ['Vad kostar en betongpool?',
        'Betongpoolen är den dyraste pooltypen. Totalpriset beror på storlek, utförande, utrustning och markarbete – begär alltid en specificerad offert på totalentreprenad.'],
      ['Betongpool eller glasfiberpool?',
        'Betongpoolen är mer flexibel i form och håller mycket länge men kostar mer och tar längre tid. Glasfiberpoolen lyfts in färdig och är snabbare att installera men mer begränsad i form.'],
      ['Behöver man bygglov för en betongpool?',
        'En nedgrävd pool kräver nästan alltid en bygganmälan och ibland bygglov, beroende på kommun och tomt. Kontrollera alltid med din kommun innan du börjar.'],
      ['Hur lång tid tar det att bygga en betongpool?',
        'Från några veckor till ett par månader beroende på väder, gjutning, torktider och hur mycket markarbete som ingår.'],
      ['Håller en betongpool längre än andra pooler?',
        'Ja, en korrekt byggd betongpool har mycket lång livslängd och kan hålla i generationer med rätt skötsel.'],
    ],
    related: ['glasfiberpool', 'thermoblock-pool', 'stalvagsspool', 'vad-kostar-det-att-bygga-pool'],
  },

  {
    slug: 'rund-pool',
    tag: 'Köpguide',
    h1: 'Rund pool – storlekar, typer och så väljer du rätt',
    meta_title: 'Rund pool – storlekar, typer och så väljer du rätt',
    meta_desc:
      'Rund pool finns från små ovanmarkspooler till nedgrävda stålväggspooler. Så väljer du diameter, typ och tillbehör – och vad en rund pool kostar.',
    lead:
      'En rund pool är ett av de mest populära valen för hemmaträdgården. Den är billigare per vattenvolym, enklare att sätta upp och täcka, och tåls att leka i. Formen finns både som ovanmarkspool och som nedgrävd pool med liner. Här är typerna, storlekarna, tillbehören och vad du bör tänka på innan du köper.',
    img: 'rund-pool',
    image_prompt:
      'A round above-ground steel frame swimming pool in a garden with clear blue water, a ladder at the edge, sunny Nordic garden, realistic photo, no people',
    sections: [
      ['Därför är runda pooler populära',
        '<p>En rund pool är i regel billigare än en rektangulär med samma vattenvolym, eftersom konstruktionen är enklare och starkare. Den är lätt att sätta upp, lätt att täcka och ger en naturlig yta för lek och bad. Formen gör också att ett runt täcke eller en rund kupol är enklare att få på plats.</p>'
        + '<p>Nackdelen är att den inte följer en rak trädgårdslinje och att simlängden blir kort – ska du simma längder är en rektangulär pool bättre. Se även <a href="/guider/liten-pool/">liten pool</a>.</p>'],
      ['Rund pool ovan mark',
        '<p>Den vanligaste runda poolen är en ovanmarkspool med stålram – till exempel från Bestway, Intex och JF Fritid. Den sätts upp på en plan yta, fylls med vatten och kan ofta flyttas eller tas ner säsongsvis. Det finns också uppblåsbara modeller som är ännu enklare men mindre hållbara.</p>'
        + '<p>En stålramspool klarar flera säsonger och finns i många diametrar. Läs mer i <a href="/guider/terasspool-och-ovanmarkspool/">terasspool och ovanmarkspool</a>.</p>'],
      ['Nedgrävd rund pool',
        '<p>Vill du ha en mer permanent rund pool kan en stålväggspool med liner grävas ner helt eller delvis. Stommen är en stålvägg som fästs på en betongplatta och kläs med <a href="/guider/poolliner/">liner</a>. Det ger en fast pool till lägre kostnad än en betongpool – se <a href="/guider/stalvagsspool/">stålväggspool</a>.</p>'
        + '<p>Delvis nedgrävd rund pool är ett populärt mellanting: halva poolen är nere i marken, halva står ovanför och kan byggas in i en altan.</p>'],
      ['Storlekar – vilken diameter passar?',
        '<p>Runda pooler finns i ett antal standarddiametrar. Vanliga ovanmarksmodeller ligger kring <strong>3,0 m, 3,6 m, 4,6 m och 5,5 m</strong>, och djupet brukar vara 1,2–1,5 m. Välj efter hur många som ska bada samtidigt och hur mycket plats du har:</p>'
        + '<ul><li>3,0 m – en eller två badande, små trädgårdar.</li>'
        + '<li>3,6–4,6 m – familjebad, rymmer flera personer.</li>'
        + '<li>5,5 m och uppåt – gott om plats, men kräver större yta.</li></ul>'],
      ['Tillbehör till rund pool',
        '<p>Eftersom formen är standard finns det gott om tillbehör:</p>'
        + '<ul><li>Runda täcken och bubbelplast finns färdigskurna i diametrar som Ø 3,05, 3,6, 4,6 och 5,5 m – se <a href="/guider/bubbelplast-pool/">bubbelplast till pool</a>.</li>'
        + '<li><a href="/kopguider/poolstege/">Poolstege</a> och trappa anpassade för runda modeller.</li>'
        + '<li>Runda <a href="/kopguider/pooltak/">pooltak</a> och <a href="/kopguider/poolkupol/">poolkupoler</a>.</li>'
        + '<li><a href="/guider/markskydd-pool/">Markskydd</a> och bottenmatta som skyddar liner mot vassa föremål.</li></ul>'],
      ['Placering och underlag',
        '<p>En rund pool kräver ett <strong>plant och bärande underlag</strong>. Ojämn mark ger sned vattenyta och ökar påfrestningen på stommen. Lägg ett markskydd under poolen så att grus, rötter och stenar inte skadar botten.</p>'
        + '<p>Ska poolen stå på en altan eller ett trädäck måste du kontrollera bärigheten – en full pool väger flera ton. Kontrollera även avstånd till tomtgräns och eventuella ledningar.</p>'],
      ['Vad kostar en rund pool?',
        '<p>En enkel rund ovanmarkspool med stålram kostar från omkring <strong>2 000–6 000 kr</strong> beroende på diameter och utrustning. En nedgrävd stålväggspool med liner och teknik kostar betydligt mer eftersom grävning, platta och installation tillkommer. Räkna alltid med tillbehör som täcke, stege, pump och filter utöver poolpriset.</p>'
        + '<p>En nedgrävd pool kan kräva <a href="/poolbygge/bygganmalan-och-bygglov/">bygganmälan</a> – kolla med kommunen innan du gräver.</p>'],
    ],
    faq: [
      ['Hur stor rund pool ska man välja?',
        '3,0 m passar en eller två badande, 3,6–4,6 m fungerar bra för familjer och 5,5 m och uppåt ger gott om plats men kräver större yta. Välj efter antal badande och trädgårdens storlek.'],
      ['Kan man gräva ner en rund ovanmarkspool?',
        'Delvis nedgrävning är möjligt för många stålramspooler, men kontrollera att modellen tål det och att stommen avlastas rätt. Helt nedgrävd rund pool görs enklast med en stålväggspool och liner.'],
      ['Vilken diameter har runda pooltäcken?',
        'Runda täcken finns färdigskurna i bland annat Ø 3,05, 3,6, 4,6 och 5,5 m. Mät poolens diameter noga så att täcket passar.'],
      ['Vad kostar en rund pool?',
        'En enkel rund ovanmarkspool med stålram kostar från omkring 2 000–6 000 kr beroende på storlek och utrustning. Nedgrävd stålväggspool blir betydligt dyrare när grävning och teknik tillkommer.'],
      ['Krävs bygglov för en rund pool?',
        'En ovanmarkspool gör det oftast inte, men en nedgrävd pool kräver vanligen bygganmälan och ibland bygglov. Kontrollera med din kommun.'],
    ],
    related: ['liten-pool', 'terasspool-och-ovanmarkspool', 'stalvagsspool', 'poolstege'],
  },
];
