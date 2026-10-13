// Batch 1 – vattenvård & problemlösning (Tier 1, låg konkurrens).
// Genererad av Hermes enligt pooldoktorn-pipeline. Samma schema som övriga moduler.
export const EXTRA_BATCH1 = [
  {
    slug: 'cyanursyra-pool',
    tag: 'Guide',
    h1: 'Cyanursyra i pool – därför slutar kloret att verka',
    meta_title: 'Cyanursyra i pool – så håller du kloret verksamt',
    meta_desc:
      'Hög cyanursyra binder kloret så att det inte längre gör nytta. Så mäter du värdet, håller det rätt – och vad du gör om det redan är för högt.',
    lead: 'Klor som inte biter trots att du fyllt på? Då är cyanursyran oftast boven. Den skyddar kloret mot sol – men låser det också. Här är hur du håller balansen.',
    img: 'cyanursyra-pool',
    image_prompt:
      'A swimming pool test kit with cyanuric acid test strips lying on the pool edge, clear blue water behind, daylight, realistic photo',
    sections: [
      ['Vad är cyanursyra?',
        '<p>Cyanursyra (stabilisator) tillsätts för att skydda kloret mot UV-ljus. Utan den bryts fritt klor ner av solljus på några timmar. Problemet: cyanursyran <strong>försvinner inte</strong> av sig själv. Den anrikas i vattnet och binder mer och mer av kloret.</p>'],
      ['Varför ett för högt värde är farligt',
        '<p>Cyanursyran binder kloret i en form som kallas <em>bundet klor</em> – klor som finns kvar men inte längre desinficerar. Ett högt värde gör därför att du häller i mer och mer klor utan effekt, samtidigt som vattnet kan bli grumligt eller grönt.</p>'
        + '<div class="warn">Använder du puckar och veckoklor med stabilisator byggs cyanursyran upp varje vecka. Det är den vanligaste orsaken till "klor som slutat funka".</div>'],
      ['Rekommenderade nivåer',
        '<ul><li>Utomhuspool: 30–50 mg/l.</li>'
        + '<li>Över 80 mg/l: kloret tappar märkbart i effekt.</li>'
        + '<li>Över 100 mg/l: byt en del av vattnet – ingen dosering räddar det.</li></ul>'],
      ['Så sänker du cyanursyran',
        '<p>Det finns inget medel som tar bort cyanursyra. Det enda som fungerar är att <strong>byta vatten</strong>:</p>'
        + '<ul><li>Mät värdet först.</li>'
        + '<li>Tappa av 20–30 % och fyll på med färskt vatten.</li>'
        + '<li>Mät igen och upprepa vid behov.</li></ul>'
        + '<p>Efter ett delvattenbyte är pH ofta påverkat – kontrollera och justera <a href="guider/ph-och-klor/">pH</a> före nästa klorering.</p>'],
      ['Så undviker du problemet',
        '<p>Växla mellan klor <em>utan</em> stabilisator (t.ex. kalciumhypoklorit eller flytande klor) och puckar. Mät cyanursyran några gånger per säsong – inte bara fritt klor – så upptäcker du problemet innan kloret slutar verka.</p>'],
    ],
    faq: [
      ['Hur ofta ska jag mäta cyanursyra?', 'Några gånger per säsong, och alltid om kloret slutar verka trots att du fyllt på. Använder du puckar med stabilisator bör du mäta oftare.'],
      ['Går cyanursyra att få ner kemiskt?', 'Nej. Det finns inget medel som tar bort cyanursyra – bara utspädning genom att byta en del vatten.'],
      ['Kan jag chockklorera bort högt cyanursyra?', 'Nej. Vid högt värde är kloret bundet och chocken biter inte. Byt vatten först, chockklorera sedan.'],
    ],
    related: ['chockklorering', 'gront-poolvatten', 'ph-och-klor'],
  },

  {
    slug: 'backspolning-pool',
    tag: 'Guide',
    h1: 'Backspolning av poolfilter – så gör du rätt',
    meta_title: 'Backspolning av poolfilter – när och hur',
    meta_desc:
      'Backspolning rensar filtret från skräp och håller flödet uppe. Så vet du när det är dags, hur länge du spolar och vad du gör efteråt.',
    lead: 'Ett igensatt filter sänker flödet, och då funkar varken cirkulation eller klorering som de ska. Backspolning är lösningen – men bara när den behövs.',
    img: 'backspolning-pool',
    image_prompt:
      'A pool sand filter with a multi-port valve being set to backwash, garden hose spraying wastewater, clean pool in the background, daylight, realistic photo',
    sections: [
      ['Varför backspola?',
        '<p>Filtret fångar skräp som passerar genom det. Med tiden fylls det och vattnet får svårare att ta sig igenom. Backspolning vänder flödet och sköljer ut skräpet till avlopp.</p>'],
      ['När är det dags?',
        '<p>Gå inte efter en fast dag. Titta på <strong>tryckmätaren</strong> på filtret:</p>'
        + '<ul><li>Backspola när trycket stigit 0,3–0,5 bar över det normala (rent filter).</li>'
        + '<li>Vid kraftig algblomning eller mycket badande kan det behövas oftare.</li></ul>'
        + '<p>Ett riktmärke är varje eller varannan vecka under säsong – men mätaren avgör.</p>'],
      ['Så backspolar du steg för steg',
        '<ul><li>Stäng pumpen.</li>'
        + '<li>Vrid ventilen till <em>Backwash</em>.</li>'
        + '<li>Starta pumpen och spola tills vattnet i siktglaset är klart (vanligtvis 1–3 minuter).</li>'
        + '<li>Stäng pumpen, vrid till <em>Rinse</em> i cirka 15 sekunder för att lägga sanden till rätta.</li>'
        + '<li>Stäng pumpen, vrid till <em>Filter</em>, starta igen.</li></ul>'
        + '<div class="note">Vrid aldrig ventilen medan pumpen går – det sliter sönder packningarna.</div>'],
      ['Efter backspolning',
        '<p>Kontrollera att trycket är tillbaka på normalt. Vattennivån sjunker när du backspolar – fyll på om det behövs. Backspolning spolar också ut en del vatten och klor, så mät värdena efteråt vid behov.</p>'],
    ],
    faq: [
      ['Hur ofta ska man backspola ett poolfilter?', 'När tryckmätaren stigit 0,3–0,5 bar över normalvärdet. I praktiken varje till varannan vecka under säsong, oftare vid algproblem.'],
      ['Kan man backspola för mycket?', 'Ja. Onödig backspolning slösar vatten och gör att fina partiklar inte hinner filtreras. Backspola när trycket säger till.'],
    ],
    related: ['poolfilter-guide', 'grumligt-poolvatten', 'algmedel-pool'],
  },

  {
    slug: 'mjolkigt-vatten-pool',
    tag: 'Guide',
    h1: 'Mjölkigt poolvatten – så blir vattnet klart igen',
    meta_title: 'Mjölkigt poolvatten – orsaker och lösning',
    meta_desc:
      'Mjölkigt, gråvitt poolvatten är oftast döda alger eller fällningar som är för små för filtret. Så avgör du orsaken och får vattnet klart.',
    lead: 'Vattnet är inte grönt men inte klart – det ser ut som mjölk. Det är nästan alltid samma sak: partiklar som är för små för att fastna i filtret. Så löser du det.',
    img: 'mjolkigt-vatten-pool',
    image_prompt:
      'A residential swimming pool with cloudy milky white-blue water, surface close-up, garden setting, soft daylight, realistic photo',
    sections: [
      ['Varför blir vattnet mjölkigt?',
        '<p>Mjölkigt vatten är alger eller oorganiska partiklar i en storlek som passerar rakt genom filtret. Vanliga orsaker:</p>'
        + '<ul><li>Döda alger efter en chockklorering.</li>'
        + '<li>Hög pH eller alkalinitet som gör att mineraler fälls ut.</li>'
        + '<li>Dålig cirkulation eller igensatt filter.</li>'
        + '<li>Nytt vatten vid påfyllning med hårt vatten.</li></ul>'],
      ['Steg 1 – få kemi och filter i ordning',
        '<p>Justera <a href="guider/ph-och-klor/">pH till 7,2–7,4</a> och kör pumpen dygnet runt. Backspola filtret om trycket är högt – annars cirkulerar du bara runt skräpet.</p>'],
      ['Steg 2 – flocka vattnet',
        '<p>En <strong>flockning</strong> (flockmedel) klumpar ihop de små partiklarna till större som fastnar i filtret. Dosera enligt anvisningen, låt pumpen gå och backspola dagen efter. Många behöver bara en flockning för att få tillbaka klart vatten.</p>'],
      ['Steg 3 – om det inte ger sig',
        '<p>Återkommer grumligheten efter nästa bad eller regn är orsaken ofta algrester eller obalans i kemin. Kontrollera <a href="guider/gront-poolvatten/">klorhalten</a>, filtret och eventuella döda zoner i poolen. En poolrengörare som borstar botten hjälper partiklarna ut i cirkulationen.</p>'],
    ],
    faq: [
      ['Hur lång tid tar det att fixa mjölkigt vatten?', 'Oftast 1–2 dygn med rätt kemi, dygnet-runt-cirkulation och en flockning. Blir det inte bättre behöver filtret ses över.'],
      ['Är mjölkigt vatten farligt att bada i?', 'Det är sällan farligt i sig, men grumlighet döljer ofta klorproblem. Mät vattnet innan du badar.'],
    ],
    related: ['gront-poolvatten', 'chockklorering', 'poolfilter-guide'],
  },

  {
    slug: 'veckoklor',
    tag: 'Guide',
    h1: 'Veckoklor – hur det funkar och när det inte räcker',
    meta_title: 'Veckoklor – funktion, dosering och fallgropar',
    meta_desc:
      'Veckoklor håller klornivån uppe mellan doseringarna men ersätter inte allt. Så använder du det rätt – och undviker fällan med cyanursyra.',
    lead: 'Veckoklor är bekvämt: dosera en gång i veckan och glöm det. Men det finns en fälla de flesta upptäcker först när vattnet blir grönt.',
    img: 'veckoklor',
    image_prompt:
      'A chlorine tablet of weekly pool chlorine held above a swimming pool, package of pool chemicals blurred behind, daylight, realistic photo',
    sections: [
      ['Vad är veckoklor?',
        '<p>Veckoklor är en långsamverkande klortablett (ofta triklor) som löses upp gradvis och håller klornivån uppe i upp till en vecka. Perfekt som bas under säsong.</p>'],
      ['Fällan: stabilisatorn anrikas',
        '<p>De flesta veckoklor innehåller <strong>cyanursyra</strong>. Den skyddar kloret mot sol men försvinner inte – vecka för vecka byggs den upp tills kloret slutar verka. Läs mer i vår guide om <a href="guider/cyanursyra-pool/">cyanursyra</a>.</p>'],
      ['Veckoklor räcker inte alltid',
        '<p>Vid mycket badande, varmt väder eller regn förbrukas kloret snabbare än tabletten hinner kompensera. Då behöver du komplettera:</p>'
        + '<ul><li>Efterdosering med snabbklor eller <a href="guider/chockklorering/">chockklorering</a> vid behov.</li>'
        + '<li>Kontroll av fritt klor några gånger i veckan – inte bara en gång.</li></ul>'],
      ['Så använder du veckoklor rätt',
        '<ul><li>Håll pH i 7,2–7,4 – annars verkar kloret sämre.</li>'
        + '<li>Variera med klor <em>utan</em> stabilisator för att bromsa cyanursyran.</li>'
        + '<li>Mät cyanursyran några gånger per säsong.</li></ul>'],
    ],
    faq: [
      ['Hur mycket veckoklor ska jag använda?', 'Följ förpackningens dosering för din poolvolym. Mät fritt klor efter några dagar – är nivån låg trots tabletten behöver du komplettera.'],
      ['Kan jag bara använda veckoklor?', 'Nej. Veckoklor är en bas, men vid belastning behöver du efterdosera. Annars byggs cyanursyran upp och kloret tappar effekt.'],
    ],
    related: ['chockklorering', 'cyanursyra-pool', 'ph-och-klor'],
  },

  {
    slug: 'snabbklor',
    tag: 'Guide',
    h1: 'Snabbklor – så använder du kalciumhypoklorit rätt',
    meta_title: 'Snabbklor (kalciumhypoklorit) – dosering och bruk',
    meta_desc:
      'Snabbklor höjer kloret direkt och används vid chockklorering. Så blandar du säkert, doserar rätt och undviker klorgas och fällningar.',
    lead: 'Snabbklor är det du tar till när kloret måste upp snabbt. Men det är också den känsligaste klorprodukten att hantera – gör du fel kan det bildas giftig klorgas.',
    img: 'snabbklor',
    image_prompt:
      'White chlorine granules being dissolved in a plastic bucket of water beside a swimming pool, safety gloves nearby, daylight, realistic photo',
    sections: [
      ['Vad är snabbklor?',
        '<p>Snabbklor är kalciumhypoklorit – ett snabbt verkande, ostabiliserat klor utan cyanursyra. Perfekt vid <a href="guider/chockklorering/">chockklorering</a>, vårstart och akuta algproblem, eftersom det inte anrikar stabilisator.</p>'],
      ['Säkerhet först',
        '<div class="warn">Blanda aldrig snabbklor med pH-minus, algmedel eller andra kemikalier i samma hink – det kan bilda giftig klorgas. Använd handskar och blanda alltid pulver i vatten, aldrig vatten i pulver.</div>'],
      ['Dosering',
        '<p>Vid chock ligger målet på 5–10 mg/l fritt klor. Följ förpackningens tabell för din poolvolym. Lös upp granulatet i en hink vatten och fördela det runt poolen medan pumpen går.</p>'],
      ['Efter dosering',
        '<p>Kör pumpen dygnet runt tills vattnet är klart och klornivån är tillbaka på normal drift (1–3 mg/l). Kontrollera pH efteråt – snabbklor höjer pH något.</p>'],
    ],
    faq: [
      ['Snabbklor eller veckoklor?', 'Snabbklor höjer kloret direkt och innehåller ingen stabilisator – bra vid chock och algproblem. Veckoklor är långsamtverkande bas. De kompletterar varandra.'],
      ['Kan snabbklor göra vattnet mjölkigt?', 'Ja, kalciumhypoklorit höjer kalciuminnehållet. Vid hårt vatten kan det ge grumlighet – kör pumpen och backspola vid behov.'],
    ],
    related: ['chockklorering', 'cyanursyra-pool', 'mjolkigt-vatten-pool'],
  },

  {
    slug: 'alger-efter-vintern',
    tag: 'Guide',
    h1: 'Alger i poolen efter vintern – så får du bukt med dem',
    meta_title: 'Alger i poolen efter vintern – åtgärder vid vårstart',
    meta_desc:
      'Grön, grå eller svart sörja i poolen efter vintern? Så åtgärdar du algerna vid vårstarten steg för steg – utan att byta allt vatten.',
    lead: 'Efter en lång vinter med presenning ser poolen ibland ut som en damm. Paniken är överflödig – alger efter vintern går att åtgärda på några dagar om du gör rätt.',
    img: 'alger-efter-vintern',
    image_prompt:
      'A swimming pool covered with green algae and autumn leaves after winter, pool being opened in spring, garden setting, realistic photo',
    sections: [
      ['Lugn – det är nästan alltid alger',
        '<p>Över vintern sjunker kloret och ljuset kommer tillbaka på våren – perfekt för alger. Färgen säger något om hur illa det är:</p>'
        + '<ul><li><strong>Grönt:</strong> klassiska alger, enklast att åtgärda.</li>'
        + '<li><strong>Grå/grumligt:</strong> döda alger, behöver filtrering + flockning.</li>'
        + '<li><strong>Svart:</strong> envis svartalg som sitter hårt – kräver mer arbete.</li></ul>'],
      ['Steg 1 – rensa och chocka',
        '<p>Fiska upp löv och skräp först. Borsta väggar och botten så algerna lossnar, och kör en <a href="guider/chockklorering/">chockklorering</a>. Vid grönt vatten räcker inte normal dos – sikta på 5–10 mg/l fritt klor och kör pumpen dygnet runt.</p>'],
      ['Steg 2 – håll pH rätt',
        '<p>Kloret verkar bara bra vid pH 7,2–7,4. Ligger pH högt efter vintern – sänk det <em>före</em> chocken. Läs mer i vår <a href="guider/ph-och-klor/">pH- och klorguide</a>.</p>'],
      ['Steg 3 – filtrera och flocka',
        '<p>Är vattnet grått och mjölkigt efter chocken är det döda alger som svävar fritt. En flockning klumpar ihop dem så filtret får bort dem. Backspola filtret dagen efter.</p>'],
      ['Steg 4 – förhindra återfall',
        '<p>När vattnet är klart: håll koll på <a href="guider/cyanursyra-pool/">cyanursyran</a>, kör filtret tillräckligt länge och dosera klor löpande. Då slipper du samma jobb nästa vår.</p>'],
    ],
    faq: [
      ['Måste jag tömma poolen efter vintern?', 'Sällan. Alger går nästan alltid att åtgärda med chockklorering, borstning och filtrering. Bara vid extremt högt cyanursyra behöver en del vatten bytas.'],
      ['Hur lång tid tar det att få bort algerna?', 'Grönt vatten: ofta 1–2 dygn. Svartalg kan ta längre tid och kräver mer borstning och upprepad chockklorering.'],
    ],
    related: ['varstart-pool', 'chockklorering', 'gront-poolvatten'],
  },
];
