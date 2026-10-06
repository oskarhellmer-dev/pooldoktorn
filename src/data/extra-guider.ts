// Nya guider (utbyggnad). Samma schema som content.json.
export const EXTRA_GUIDER = [
  {
    slug: 'chockklorering',
    tag: 'Guide',
    h1: 'Chockklorering av pool – så gör du rätt',
    meta_title: 'Chockklorering av pool – så gör du rätt',
    meta_desc:
      'Chockklorering tar död på alger och kloraminer. Så räknar du dosen, när du ska chocka och vad du gör efteråt – utan att slösa kemikalier.',
    lead: 'Chockklorering är poolens återställningsknapp. Gör du den rätt är vattnet rent igen inom ett dygn. Gör du den fel luktar poolen klor och du har slösat pengar.',
    img: 'chockklorering',
    image_prompt:
      'A person measuring chlorine granules into a bucket of water beside a swimming pool, pool chemicals, daylight, realistic photo',
    sections: [
      ['När ska du chockklorera?',
        '<p>Chockklorering är en kraftig engångsdos klor – till skillnad från den löpande underhållsdoseringen. Du chockklorerar när:</p>'
        + '<ul><li>Vattnet är grönt eller grumligt.</li>'
        + '<li>Poolen luktar starkt klor (tecken på kloraminer).</li>'
        + '<li>Många har badat, eller efter regn och varmt väder.</li>'
        + '<li>Vid vårstart och vid påfyllning av mycket nytt vatten.</li></ul>'],
      ['Steg 1 – Mät först',
        '<p>Kontrollera <strong>pH, fritt klor och cyanursyra</strong> innan du häller i något. Chlor verkar bara bra när pH ligger i 7,2–7,4. Är cyanursyran hög (över 80 mg/l) är kloret bundet och chockkloreringen biter inte – då måste en del vatten bytas.</p>'],
      ['Steg 2 – Sänk pH till 7,2–7,4',
        '<p>Justera pH <em>före</em> chocken. Vid högre pH tappar kloret effekt och du behöver mer för samma resultat.</p>'],
      ['Steg 3 – Dosera chocken',
        '<p>Sikta på 5–10 mg/l fritt klor. Använd snabbklor (kalciumhypoklorit) eller natriumdiklor och lös upp granulatet i en hink vatten <strong>enligt förpackningens dosering</strong> – häll aldrig koncentrerat pulver direkt på liner eller duk.</p>'
        + '<div class="warn">Blanda aldrig klor med pH-justerare eller algmedel i samma hink. Det kan bilda giftig klorgas.</div>'],
      ['Steg 4 – Cirkulera dygnet runt',
        '<p>Kör pumpen 24 timmar tills vattnet är klart och klornivån är tillbaka på normal drift, 1–3 mg/l. Utan cirkulation når inte kloret ut i hela poolen.</p>'],
      ['Steg 5 – Efter chocken',
        '<p>Mät klornivån innan bad – vänta tills fritt klor är under cirka 3 mg/l. Backspola filtret när trycket stigit. Är vattnet mjölkigt efter chocken är det döda alger; en flockning hjälper filtret fånga dem.</p>'],
      ['Vanliga misstag',
        '<ul><li>Chockklorera utan att sänka pH.</li>'
        + '<li>För liten dos – då överlever algerna.</li>'
        + '<li>Sluta cirkulera för tidigt.</li>'
        + '<li>Fortsätta med stabiliserat klor så cyanursyran skenar.</li></ul>'],
    ],
    faq: [
      ['Hur mycket klor ska jag chocka med?',
        'Sikta på 5–10 mg/l fritt klor, vilket för de flesta pooler innebär en dos flera gånger den vanliga underhållsdosen. Följ alltid doseringen på din produkt – den varierar med klortypen.'],
      ['Kan man bada direkt efter chockklorering?',
        'Nej. Vänta tills fritt klor är tillbaka under cirka 3 mg/l. Vid 1–3 mg/l är vattnet normalt att bada i.'],
      ['Hur ofta behöver man chockklorera?',
        'Vid behov, inte på schema. Oftast efter kraftig badbelastning, efter grönt vatten, vid vårstart och efter långa varma perioder.'],
    ],
    aff: {
      title: 'Snabbklor och testkit',
      text: 'Snabbklor, pH-minus och ett dropptest är grunden för en lyckad chockklorering.',
      cta: 'Se chockklor',
      url: 'https://www.poolstore.se',
    },
    related: ['gront-poolvatten', 'ph-och-klor', 'algmedel-pool'],
  },

  {
    slug: 'grumligt-poolvatten',
    tag: 'Guide',
    h1: 'Grumligt vatten i poolen – varför och vad du gör',
    meta_title: 'Grumligt vatten i poolen – orsaker och åtgärd',
    meta_desc:
      'Grumligt eller mjölkigt vatten i poolen beror sällan på samma sak. Här är orsakerna, hur du skiljer dem åt och vad du gör – steg för steg.',
    lead: 'Grumligt vatten är inte samma problem som grönt vatten. Det är oftast döda alger, fel kemi eller ett filter som inte hinner med. Rätt åtgärd beror på orsaken.',
    img: 'grumligt-poolvatten',
    image_prompt:
      'A backyard swimming pool with milky cloudy white-blue water, garden setting, daylight, realistic photo, close view of water',
    sections: [
      ['Grönt, grumligt och mjölkigt är tre olika saker',
        '<p><strong>Grönt</strong> = levande alger. <strong>Mjölkigt/mjölkblått</strong> = döda alger eller utfällning som svävar. <strong>Grågrumligt</strong> = smuts och partiklar som filtret inte fångar. Åtgärden skiljer sig.</p>'],
      ['Vanligaste orsakerna',
        '<ul><li><strong>Filtret hinner inte med.</strong> Igensatt filter, för kort filtertid eller för litet filter.</li>'
        + '<li><strong>Döda alger.</strong> Vanligt strax efter lyckad chockklorering.</li>'
        + '<li><strong>Kemi ur balans.</strong> Högt pH, hög alkalinitet eller för hårt vatten ger utfällningar.</li>'
        + '<li><strong>Kloraminer.</strong> Bundet klor kan göra vattnet disigt.</li>'
        + '<li><strong>Kalk eller metaller.</strong> Påfyllt vatten med hög kalkhalt ger mjölkighet.</li></ul>'],
      ['Steg 1 – Backspola eller rengör filtret',
        '<p>Börja alltid här. Står tryckmätaren omkring 0,5 bar över normaltryck behöver filtret backspolas (sand/glas) eller patronen spolas/byter. Ett igensatt filter kan inte klarna vatten, hur mycket kemi du än tillsätter.</p>'],
      ['Steg 2 – Mät och balansera',
        '<p>Kontrollera pH (7,2–7,6), alkalinitet (80–120 mg/l <sup>*</sup>) och fritt klor (1–3 mg/l). Högt pH eller hög alkalinitet ger ofta mjölkigt vatten. Justera i små steg.</p>'],
      ['Steg 3 – Om det är döda alger: flocka',
        '<p>Efter chockklorering är mjölkighet ofta döda alger som är för små för filtret. En <strong>flockning</strong> (flockmedel) gör att de klumpar ihop sig och fastnar i filtret. Backspola dagen efter.</p>'],
      ['Steg 4 – Kör cirkulationen längre',
        '<p>Öka filtertiden tills vattnet är klart. Hela vattenvolymen bör omsättas minst en gång per dygn – mer när vattnet är grumligt.</p>'],
      ['Förebygg',
        '<ul><li>Håll pH stabilt i mitten av intervallet, inte på gränsen.</li>'
        + '<li>Backspola innan trycket blir för högt.</li>'
        + '<li>Klorera löpande och chockklorera vid behov.</li>'
        + '<li>Använd flockmedel efter algproblem.</li></ul>'],
    ],
    faq: [
      ['Varför blir poolvattnet mjölkigt?',
        'Oftast döda alger efter en chockklorering, ett filter som inte hinner med, eller utfällningar till följd av högt pH eller hårt vatten. Börja med att backspola filtret.'],
      ['Hur får man bort grumligt vatten snabbt?',
        'Backspola filtret, balansera pH och alkalinitet, kör cirkulationen dygnet runt och använd flockmedel om vattnet är mjölkigt av döda alger. Räknas med 1–3 dygn.'],
      ['Är grumligt vatten farligt att bada i?',
        'Grumligt vatten kan dölja dålig vattenkvalitet och gör det svårare att se en nödställd. Chockklorera och klarna vattnet innan bad om du är osäker.'],
    ],
    aff: {
      title: 'Flockmedel och filtermedia',
      text: 'Flockmedel och fräsch filtermedia löser de flesta grumlighetsproblem.',
      cta: 'Se flockmedel',
      url: 'https://www.poolstore.se',
    },
    related: ['gront-poolvatten', 'poolfilter-guide', 'chockklorering'],
  },

  {
    slug: 'algmedel-pool',
    tag: 'Guide',
    h1: 'Algmedel i poolen – när och hur du använder det',
    meta_title: 'Algmedel i poolen – när och hur det används',
    meta_desc:
      'Algmedel förebygger alger men ersätter inte klor. Så använder du algmedel rätt, vilka typer som finns och varför överdosering ställer till problem.',
    lead: 'Algmedel är ett skydd, inte en lösning. Använt rätt sparar det dig en chockklorering. Använt fel gör det vattnet skummigt och sliter på filtret.',
    img: 'algmedel-pool',
    image_prompt:
      'A bottle of pool algaecide next to a swimming pool with clear blue water, pool maintenance products, daylight, realistic photo',
    sections: [
      ['Vad algmedel gör – och inte gör',
        '<p>Algmedel (algaecid) hämmar algernas tillväxt. Det <strong>dödar inte</strong> en redan etablerad algblomning och ersätter aldrig klor – det är kloret som desinficerar. Tänk på algmedel som ett skyddsnät under perioder då algerna har lätt att ta över.</p>'],
      ['När det är värt att använda',
        '<ul><li>Förebyggande vid semester och långa bortavaro.</li>'
        + '<li>Under värmeböljor och efter kraftigt regn.</li>'
        + '<li>Vid vinterstängning (särskilt vinteralgmedel).</li>'
        + '<li>Om du tidigare haft återkommande algproblem.</li></ul>'
        + '<p>I en pool med stabil kemi och tillräckligt klor behövs oftast inget algmedel i vardagen.</p>'],
      ['Typer av algmedel',
        '<table><thead><tr><th>Typ</th><th>Verkan</th><th>Bra för</th></tr></thead><tbody>'
        + '<tr><td>Kvartär ammonium</td><td>Förebyggande, billig</td><td>Underhåll, men kan skumma</td></tr>'
        + '<tr><td>Polymer/klarningsmedel</td><td>Klump</td><td>Förebyggande utan skumbildning</td></tr>'
        + '<tr><td>Vinteralgmedel</td><td>Långsam</td><td>Vinterstängning</td></tr>'
        + '</tbody></table>'],
      ['Så använder du det rätt',
        '<ol><li>Balansera vattnet först – pH och klor.</li>'
        + '<li>Dosera enligt förpackningen. Börja i nedre intervallet.</li>'
        + '<li>Vid pågående algblomning: chockklorera först, algmedel efter.</li>'
        + '<li>Vid vinterstängning: använd vintertyp tillsammans med vinterklor.</li></ol>'],
      ['Var inte överdosera',
        '<p>För mycket algmedel gör vattnet skummigt, kan sätta fett på filtermediet och i värsta fall bilda utfällning. Dosera efter din vattenvolym och hellre för lite än för mycket.</p>'],
    ],
    faq: [
      ['Kan algmedel ersätta klor?',
        'Nej. Algmedel hämmar alger men desinficerar inte vattnet. Klor är fortfarande grunden, algmedel är ett komplement.'],
      ['Hur ofta ska man använda algmedel?',
        'Endast vid behov eller förebyggande vid riskperioder – semester, värmebölja, efter regn och vid vinterstängning. Inte som fast veckodos om kemin är stabil.'],
      ['Varför skummar poolen efter algmedel?',
        'Oftast överdosering eller en kvartär-ammoniumprodukt som skummar. Sluta dosera, kör cirkulationen och låt det klinga av.'],
    ],
    aff: {
      title: 'Algmedel och vintermedel',
      text: 'Välj rätt algmedel efter användning – underhåll, klarning eller vinterstängning.',
      cta: 'Se algmedel',
      url: 'https://www.poolstore.se',
    },
    related: ['gront-poolvatten', 'chockklorering', 'vinterstangning-pool'],
  },

  {
    slug: 'smart-pool-automation',
    tag: 'Guide',
    h1: 'Smart pool – automation, dosering och hemautomation',
    meta_title: 'Smart pool – automation och dosering',
    meta_desc:
      'Automatisk dosering, appstyrda pumpar och hemautomation (Home Assistant, Homematic) gör poolen enklare att sköta. Så bygger du en smartare pool utan krångel.',
    lead: 'Den som glömmer mäta vattnet får grönt vatten. Automation tar bort det mänskliga glömskan — och gör poolen billigare att driva.',
    img: 'smart-pool-automation',
    image_prompt:
      'A tablet with a pool control app lying on a table beside a modern swimming pool, pool automation, daylight, realistic photo',
    sections: [
      ['Varför automatisera poolen?',
        '<p>De flesta poolproblem börjar med att något inte mättes i tid. Automation mäter och justerar kontinuerligt — jämnare vattenkemi, mindre kloråtgång, lägre elkostnad och färre dyra misstag. För dig som reser bort är det dessutom den billigaste tryggheten.</p>'],
      ['Vad kan automatiseras?',
        '<ul><li><strong>Dosering.</strong> Automatisk klor- och pH-dosering håller värdena stabila utan manuell mätning.</li>'
        + '<li><strong>Pump och filtrering.</strong> Tidsstyrda eller varvtalsstyrda pumpar som anpassar flödet efter behov.</li>'
        + '<li><strong>Värmepump.</strong> Schemaläggning efter elpris och utetemperatur.</li>'
        + '<li><strong>Belysning.</strong> Scheman, färg och scenarier.</li>'
        + '<li><strong>Nivå och larm.</strong> Påminnelser och larm vid avvikelser.</li></ul>'],
      ['Nivåer av automation',
        '<table><thead><tr><th>Nivå</th><th>Vad du får</th><th>Passar</th></tr></thead><tbody>'
        + '<tr><td>Enkel</td><td>Tidsstyrda pumpar och belysning</td><td>De flesta pooler</td></tr>'
        + '<tr><td>Medel</td><td>Automatisk dosering</td><td>Pooler med återkommande kemiproblem</td></tr>'
        + '<tr><td>Avancerad</td><td>Full styrning + hemautomation</td><td>Dig som vill integrera allt</td></tr>'
        + '</tbody></table>'],
      ['Hemaautomation – Home Assistant och liknande',
        '<p>Kör du <strong>Home Assistant</strong> eller ett liknande system kan poolen bli en del av ditt smarta hem: scheman som följer elpriset, notiser när något avviker och åtgärder som körs automatiskt. Det finns integrationsprojekt för pumpar, värmepumpar och doseringssystem – kolla att just din utrustning stöds innan du köper.</p>'],
      ['Vad du bör tänka på',
        '<ul><li><strong>Kompatibilitet först.</strong> Köp utrustning som kan styras eller övervakas, inte sluten elektronik utan gränssnitt.</li>'
        + '<li><strong>Säkerhet.</strong> El vid pool kräver jordfelsbrytare och korrekt installation av behörig elektriker.</li>'
        + '<li><strong>Börja enkelt.</strong> Tidsstyrning och doseringshjälp ger mest nytta per krona.</li>'
        + '<li><strong>Rör inte kemin blint.</strong> Även automatisk dosering behöver kontrolleras då och då.</li></ul>'],
    ],
    faq: [
      ['Är automatisk dosering värt pengarna?',
        'Om du har återkommande problem med klor eller pH, eller reser bort ofta, ja. Det håller kemin jämnare och minskar risken för dyra algproblem. Är kemin redan stabil ger det mest bekvämlighet.'],
      ['Kan jag styra poolen via Home Assistant?',
        'Ja, om utrustningen har ett öppet gränssnitt eller stöd. Kontrollera att just din pump, värmepump eller doseringsutrustning stöds innan köp – slutna system kan ofta inte integreras.'],
      ['Vad är den enklaste automationen att börja med?',
        'Tidsstyrda pumpar och belysning, plus ett bra testkit. Det kostar minst och löser de vanligaste misstagen: att glömma cirkulation och mätning.'],
    ],
    aff: {
      title: 'Utrustning för smart pool',
      text: 'Tidsstyrning, doseringshjälp och kompatibel utrustning — kolla kompatibilitet först.',
      cta: 'Se poolautomation',
      url: 'https://www.poolstore.se',
    },
    related: ['poolvard-vecka', 'ph-och-klor', 'varmepump-pool'],
  },
];
