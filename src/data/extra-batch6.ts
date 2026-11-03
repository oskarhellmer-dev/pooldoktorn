// Batch 6 – spabad-kemi (pH, klor, brom, cyanursyra, grönt vatten) samt två
// pooluppvärmningsguider (bubbelplast/soltäcke, värmeväxlare) och bypass till
// poolvärmepump. Byggd på verklig research (Brave SERP + fråge-mining mot
// spaobad.se, spacare.se, spasupport.se, spabadsbutiken.se, folkpool.se,
// polarpumpen.se, pool-fritid.se, pahlen.se, byggahus.se).
// Genererad av Hermes enligt pooldoktorn-pipelinen. Samma schema som övriga moduler.
export const EXTRA_BATCH6 = [
  {
    slug: 'ph-spabad',
    tag: 'Spa',
    h1: 'pH i spabad – rätt värde och så justerar du',
    meta_title: 'pH i spabad – rätt värde och så justerar du',
    meta_desc:
      'pH i spabad ska ligga på 7,2–7,6. Så mäter du, sänker och höjer pH i rätt ordning, varför värdet svänger och vad du gör när det inte går att rubba.',
    lead:
      'pH-värdet i ett spabad ska ligga mellan 7,2 och 7,6 – helst nära 7,4, där kloret eller bromen arbetar som bäst. Ligger det fel tappar desinficeringen sin verkan, vattnet irriterar hud och ögon och materialet i badet tar skada. Så här mäter och justerar du det i rätt ordning.',
    img: 'ph-spabad',
    image_prompt:
      'A water test kit with a colour comparator showing a pH test result beside an outdoor hot tub with clear blue water, test tablets on a table, daylight, realistic photo, no people',
    sections: [
      ['Varför pH är det viktigaste värdet',
        '<p>Av alla värden i ett spabad är <strong>pH</strong> det som påverkar mest. Det styr hur effektivt desinficeringsmedlet arbetar: vid 7,2–7,6 verkar kloret snabbt och fullt ut, men stiger pH över 7,8 tappar det en stor del av sin verkan. Då hjälper det inte att dosera mer klor – vattnet blir ändå inte rent.</p>'
        + '<p>pH påverkar också badet och materialet. För <strong>högt</strong> värde (basiskt) ger kalkutfällningar, grumligt vatten och hudirritation, och kloret luktar mer. För <strong>lågt</strong> värde (surt) blir vattnet aggressivt och fräter på värmare, pumpar och rör – det sliter helt enkelt på utrustningen. Se hela bilden i <a href="/spabad/spabad-vattenbalans/">vattenbalans i spabad</a>.</p>'],
      ['Mät pH rätt',
        '<p>Använd ett testset med tabletter (fenolrött) eller en digital fotometer och följ instruktionen exakt. Ta provet en bit under ytan, inte vid ytskiktet. Mät <strong>2–3 gånger i veckan</strong> i normal drift, och alltid efter påfyllning av nytt vatten eller efter ett bad med många personer.</p>'
        + '<p>Har du precis tillsatt kemi ska du låta cirkulationen gå i <strong>minst 30 minuter</strong> innan du mäter om – annars får du ett missvisande värde. Teststickor är snabba men minst tillförlitliga; för dosering och felsökning är tabletter eller fotometer säkrare. Fler tips i <a href="/guider/vattentester-pool/">vattentester</a>.</p>'],
      ['Ordningen: alkalinitet först',
        '<p>Det vanligaste misstaget är att justera pH innan bufferten är satt. <strong>Alkaliniteten</strong> (80–120 mg/l) håller pH stabilt. Är den för låg svänger pH upp och ner hur du än doserar, och då kan du aldrig trimma in ett jämnt värde. Justera därför alkaliniteten <strong>först</strong> – sedan pH.</p>'
        + '<p>Höjs med alkalinitetshöjande medel. Är alkaliniteten för hög (ovanligt, men möjligt) sänks den med samma fosfatbaserade medel som pH-sänkare, i omgångar med mätning emellan.</p>'],
      ['Sänka eller höja pH',
        '<ul><li><strong>Sänka pH:</strong> dosera pH-sänkare (natriumbisulfat), vanligen runt 10 % under rekommenderad dosering i ett spabad – volymen är liten och överträffar lätt. Upprepa efter 30 minuter vid behov.</li>'
        + '<li><strong>Höja pH:</strong> dosera pH-höjare (natriumkarbonat), men bara om alkaliniteten redan är på plats.</li></ul>'
        + '<p>Ett spabad rymmer ofta bara 1 000–2 000 liter och håller 38 grader. Därför gäller tumregeln: <strong>dosera mindre än du tror, mät, och justera igen</strong>. Mer kemi är inte samma sak som bättre vatten.</p>'],
      ['När pH inte går att rubba eller svänger',
        '<ul><li><strong>pH svänger hela tiden:</strong> alkaliniteten är för låg – höj den till 80–120 mg/l.</li>'
        + '<li><strong>pH går inte att ändra:</strong> alkaliniteten är för hög och buffrar emot. Sänk den i små steg.</li>'
        + '<li><strong>Vattnet blir grumligt efter justering:</strong> kalk har fällts ut – kontrollera även hårdheten och filtret.</li>'
        + '<li><strong>pH stiger snabbt efter bad:</strong> luftinblandning i massagedysarna gör vattnet basiskt – det är normalt, mät och justera ned vid behov.</li></ul>'],
      ['Enkla vanor som håller pH stabilt',
        '<ul><li>Duscha före bad – mindre hudolja och solkräm.</li>'
        + '<li>Rengör filtret varje till varannan vecka.</li>'
        + '<li>Håll alkaliniteten i schack; den är pH:s stötfångare.</li>'
        + '<li>Justera alltid vid påfyllning av nytt vatten.</li>'
        + '<li>Logga värdena i <a href="/pooljournal/">journalen</a> så att du ser trender.</li></ul>'
        + '<p>Nästa steg är att hålla övriga värden på plats – se <a href="/spabad/klor-spabad/">klor i spabad</a> och <a href="/spabad/spabad-kemikalier/">spakemi</a>.</p>'],
    ],
    faq: [
      ['Vad ska pH ligga på i ett spabad?', 'Mellan 7,2 och 7,6, helst nära 7,4. Där arbetar kloret eller bromen som effektivast och vattnet känns behagligt.'],
      ['Varför svänger pH upp och ner i spabadet?', 'Nästan alltid för låg alkalinitet. Alkaliniteten fungerar som en buffert och ska ligga på 80–120 mg/l innan du finjusterar pH:t.'],
      ['I vilken ordning ska man justera pH och alkalinitet?', 'Alkaliniteten först, sedan pH. Är bufferten fel får du aldrig pH stabilt hur du än doserar.'],
      ['Hur ofta ska man mäta pH i spabadet?', 'Två till tre gånger i veckan vid normal användning, och alltid efter påfyllning av nytt vatten eller ett bad med många personer.'],
      ['Kan man bada direkt efter att ha justerat pH?', 'Låt cirkulationen gå i minst 30 minuter efter tillsats och mät om. När pH ligger i intervallet kan du bada.'],
    ],
    related: ['spabad-vattenbalans', 'klor-spabad', 'spabad-kemikalier', 'grumligt-vatten-spabad'],
  },

  {
    slug: 'klor-spabad',
    tag: 'Spa',
    h1: 'Klor i spabad – rätt nivå, dosering och felsökning',
    meta_title: 'Klor i spabad – nivå, dosering och felsökning',
    meta_desc:
      'Fritt klor i spabad ska ligga på 1–3 mg/l och bundet klor under 0,5 mg/l. Så doserar, mäter och felsöker du – och varför du mäter noll trots tillsatt klor.',
    lead:
      'Klor i ett spabad ska hålla <strong>fritt klor på 1,0–3,0 mg/l</strong> (ppm) och bundet klor under 0,5 mg/l. Är det fria kloret för lågt tar algerna över; är det för högt irriterar vattnet. Så här doserar och mäter du – och vad du gör när mätningen visar noll trots att du tillsatt klor.',
    img: 'klor-spabad',
    image_prompt:
      'A chlorine test kit and a small bottle of spa chlorine granules beside a hot tub with clear blue water, steam rising, test strips on a table, daylight, realistic photo, no people',
    sections: [
      ['Fritt, bundet och totalt klor',
        '<p>Det är <strong>fritt klor</strong> som desinficerar, och det är värdet du mäter och doserar mot. Riktvärdet är 1–3 mg/l; inför ett bad kan du ligga i övre delen av intervallet. <strong>Bundet klor</strong>, eller kloraminer, är klor som redan reagerat med svett, smuts och solkräm – det desinficerar inte utan luktar skarpt och irriterar ögonen.</p>'
        + '<p>Motsatt vad många tror är den klassiska spabadslukten ofta ett tecken på att det <strong>fria</strong> kloret blivit för lågt medan kloraminerna byggts upp. Rätt åtgärd är då att chockklorera, inte att sluta klorera. Se <a href="/guider/chockklorering/">chockklorering</a>.</p>'],
      ['Snabbklor och långtidsklor',
        '<p>Det finns två huvudtyper. <strong>Snabbklor</strong> (granulat) löser sig fort och används för daglig dosering eller enstaka höjning – typiskt varannan dag. <strong>Långtidsklor</strong> är långsamtlösande tabletter som läggs i bräddavloppets silkorg eller i en doserflöte, och håller nivån jämn under längre tid.</p>'
        + '<p>Många granulat bygger samtidigt upp <strong>cyanursyra</strong> – en stabilisator som skyddar kloret mot sol men som med tiden ger klorlås. Väljer du stabiliserat klor behöver du hålla koll på den nivån, se <a href="/spabad/cyanursyra-spabad/">cyanursyra i spabad</a>.</p>'],
      ['Dosering och chockklorering i spabad',
        '<p>Exakt dosering står alltid på förpackningen och beror på badets volym. En vanlig tumregel för chockklorering med granulat är <strong>2–3 teskedar per 1 000 liter</strong> vatten; lös upp granulatet i en hink vatten först så att det inte bleker duk eller skal. Kör pumparna och locket av en stund.</p>'
        + '<p>Efter en chockklorering ska du <strong>vänta cirka 6 timmar</strong> innan du badar, eller till dess att fritt klor fallit tillbaka mot 3 mg/l. Chockar du med <strong>aktivt syre</strong> i stället kan du bada betydligt tidigare.</p>'],
      ['Så mäter du rätt',
        '<ul><li><strong>Testset med tabletter</strong> (DPD 1 för fritt klor) – prisvärt och tillförlitligt.</li>'
        + '<li><strong>Digital fotometer</strong> – mest exakt, visar siffervärde (mäter gärna fritt, totalt, cyansyra och pH i samma enhet).</li>'
        + '<li><strong>Teststickor</strong> – snabba men minst exakta; undvik dem när du felsöker.</li></ul>'
        + '<p>Har du precis klorerat ska du vänta innan du mäter – annars har kloret inte hunnit verka klart.</p>'],
      ['Mäter du noll trots tillsatt klor?',
        '<p>Detta är en av de vanligaste frågorna och har oftast en logisk förklaring:</p>'
        + '<ul><li><strong>För mycket klor bleker testet.</strong> Vid hög halt försvinner den röda färgen och du läser av ett för lågt värde. Späd provet med rent vatten och mät igen.</li>'
        + '<li><strong>Cyanursyran är för hög.</strong> Stabilisatorn binder kloret så att det slutar verka – då hjälper mer klor inte, utan du behöver byta en del av vattnet.</li>'
        + '<li><strong>Kloret förbrukas direkt.</strong> Ett smutsigt bad med mycket organiskt material äter upp kloret så fort du tillsätter det. Chockklorera ordentligt och rengör filtret.</li></ul>'],
      ['För höga klornivåer och förebyggande rutin',
        '<p>Har du fått en för hög klorhalt sjunker den oftast av sig själv – särskilt med locket öppet – men du kan skynda på det med <strong>antiklor</strong>. Bada inte i vatten över cirka 5 mg/l.</p>'
        + '<p>Den bästa rutinen mot alla klorproblem är enkel: mät en gång i veckan, håll pH i 7,2–7,6 (kloret verkar sämre vid högt pH), rengör filtret varje vecka till varannan och chockklorera vid grumligt vatten eller efter många badande. Se <a href="/spabad/spabad-vattenbalans/">vattenbalans</a> och <a href="/spabad/brom-spabad/">brom i spabad</a> om du vill jämföra desinficeringsmedel.</p>'],
    ],
    faq: [
      ['Vad ska klorvärdet ligga på i ett spabad?', 'Fritt klor 1,0–3,0 mg/l och bundet klor under 0,5 mg/l. Inför bad kan du ligga i övre delen av intervallet.'],
      ['Hur mycket klor ska man chockklorera med?', 'En tumregel för granulat är 2–3 teskedar per 1 000 liter vatten. Lös upp i vatten först och följ alltid förpackningens dosering. Vänta cirka 6 timmar innan bad.'],
      ['Varför visar testet noll trots att jag klorerat?', 'Oftast för att för mycket klor bleker testet (späd provet och mät igen), eller för att hög cyanursyra binder kloret. Då behövs ett delvattenbyte.'],
      ['Hur ofta ska man klorera ett spabad?', 'Snabbklor doseras ofta varannan dag, långtidsklor håller nivån längre. Mät en gång i veckan och efter många badande.'],
      ['Kan man bada efter chockklorering?', 'Vänta cirka 6 timmar med klor, eller till dess att fritt klor fallit mot 3 mg/l. Chockar du med aktivt syre kan du bada betydligt tidigare.'],
    ],
    related: ['ph-spabad', 'brom-spabad', 'cyanursyra-spabad', 'klorvarde-pool'],
  },

  {
    slug: 'brom-spabad',
    tag: 'Spa',
    h1: 'Brom i spabad – ett klorfritt alternativ',
    meta_title: 'Brom i spabad – nivåer, dosering och skillnad mot klor',
    meta_desc:
      'Brom i spabad hålls på 2–4 mg/l och är mindre pH-känsligt än klor. Så doserar du tabletter och bromsalt, vilken nivå som gäller och när brom passar bättre.',
    lead:
      'Brom är det vanligaste alternativet till klor i spabad. Rätt nivå är <strong>2–4 mg/l fritt brom</strong>. Brom fungerar bra i ett bredare pH-intervall, luktar mindre och passar känslig hud – men det ställer krav på vilken utrustning du har. Så här doserar och sköter du bromen.',
    img: 'brom-spabad',
    image_prompt:
      'A container of spa bromine tablets and a small brominator float beside an outdoor hot tub with clear blue water, garden setting, daylight, realistic photo, no people',
    sections: [
      ['Varför välja brom i stället för klor',
        '<p>Brom desinficerar i ett <strong>bredare pH-intervall</strong> och är mindre känsligt för pH-svängningar än klor, vilket gör det tacksamt i ett spabad med hög temperatur och litet vatten. Brom bryts ner långsammare och har en mer långvarig effekt – du behöver inte dosera lika ofta.</p>'
        + '<p>Dessutom luktar brom mindre, upplevs mildare mot hud och ögon och passar därför klorkänsliga personer. Nackdelen är priset: brom är dyrare än klor, och en del bad kräver ett <strong>brominatorsystem</strong> för att kunna använda bromsalt.</p>'],
      ['Rätt bromnivå',
        '<p>Sikta på <strong>2,0–4,0 mg/l fritt brom</strong>. Liksom med klor är det den fria, aktiva formen som desinficerar. Mät med samma typ av testset som för klor men med bromsskalan (DPD 1 visar båda, olika färgskalor).</p>'
        + '<p>Håll pH i 7,2–7,6 och alkaliniteten i 80–120 mg/l även med brom – övriga vattenvärden påverkar desinficeringen oavsett medel. Se <a href="/spabad/spabad-vattenbalans/">vattenbalans i spabad</a>.</p>'],
      ['Tabletter eller bromsalt – två olika system',
        '<ul><li><strong>Bromtabletter (20 g):</strong> löser sig långsamt och läggs i bräddavloppets silkorg eller i en doserflöte – <em>aldrig</em> direkt i badet. En tablett räcker ofta 3–6 dagar beroende på filtersystem.</li>'
        + '<li><strong>Bromsalt + brominator/bromgenerator:</strong> generatorn omvandlar bromid till fritt brom och håller nivån automatisk. Då behöver du i stället påfyllning av bromsalt.</li></ul>'
        + '<p>Bromsalt kan inte ersätta bromtabletter rakt av, och bromsalt fungerar inte i ett vanligt klorsystem – utrustningen måste vara byggd för det. Även med generator ska du <strong>mäta bromvärdet</strong> och justera. Se <a href="/spabad/spabad-kemikalier/">spakemi</a>.</p>'],
      ['Dosera och sköt bromen',
        '<p>Börja med att ställa pH och alkalinitet, chocka vattnet en gång och lägg sedan in bromen. Håll nivån jämn – höj vid behov med bromgranulat. Brom är pH-neutralt och inte kalkbildande, vilket gör det skonsamt mot badet.</p>'
        + '<p>Tänk på att brom, liksom klor, bildar bundna föreningar (bromaminer) när det reagerar med föroreningar. Till skillnad från kloraminer desinficerar bromaminerna fortfarande en del, men vid lukt eller grumligt vatten chockar du ändå med ett oxidationsmedel.</p>'],
      ['Brom och din utrustning',
        '<p>Brom passar de flesta spabad, men kontrollera alltid vad tillverkaren rekommenderar innan du byter från klor – vissa system, särskilt med ozon eller UV, är optimerade för ett av medlen. Har du saltvattenspabad eller saltgenerator är bromsalt inte aktuellt i samma krets.</p>'
        + '<p>Brom är ett bra val om du badar ofta och vill ha jämn effekt, har känslig hud eller ogillar klorlukt. Är priset viktigast är klor oftast billigare – jämför i <a href="/spabad/klor-spabad/">klor i spabad</a>.</p>'],
      ['Vanliga frågor om brom',
        '<ul><li><strong>Kan man byta mellan klor och brom?</strong> Ja, men töm och skölj badet och byt vatten innan du byter medel.</li>'
        + '<li><strong>Luktar brom?</strong> Brom luktar mindre än klor men kan ge en svag doft vid grumling eller överdos.</li>'
        + '<li><strong>Räcker brom ensamt?</strong> Du behöver fortfarande oxidationsbehandling (chock) och filterrengöring.</li></ul>'],
    ],
    faq: [
      ['Vilket bromvärde ska man ha i spabad?', 'Fritt brom ska ligga på 2,0–4,0 mg/l, med pH 7,2–7,6 och alkalinitet 80–120 mg/l.'],
      ['Kan man använda bromsalt i alla spabad?', 'Nej. Bromsalt kräver en brominator eller bromgenerator. Utan sådan utrustning använder du brom- eller klortabletter i stället.'],
      ['Var lägger man bromtabletterna?', 'I bräddavloppets silkorg eller i en doserflöte – aldrig direkt i badvattnet. En tablett räcker ofta 3–6 dagar.'],
      ['Luktar brom mindre än klor?', 'Ja, brom ger vanligtvis svagare doft och upplevs mildare mot hud och ögon, vilket gör det populärt för klorkänsliga.'],
      ['Är brom dyrare än klor?', 'Ja, brom är oftast dyrare per behandlad volym, men kan behöva doseras mer sällan och är skonsammare i ett varmt spabad.'],
    ],
    related: ['klor-spabad', 'spabad-vattenbalans', 'spabad-kemikalier', 'cyanursyra-spabad'],
  },

  {
    slug: 'cyanursyra-spabad',
    tag: 'Spa',
    h1: 'Cyanursyra i spabad – när kloret slutar verka',
    meta_title: 'Cyanursyra i spabad – klorlås och rätt nivå',
    meta_desc:
      'Cyanursyra skyddar kloret mot sol men kan ge klorlås. Håll nivån på 30–50 mg/l, förstå varför den bara sänks genom vattenbyte och undvik grönt spavatten.',
    lead:
      'Cyanursyra (CYA), eller cyansyra, skyddar kloret mot att brytas ner av solens UV-ljus och gör att det varar längre. Men halten smyger upp när du använder stabiliserat klor, och över en viss nivå <strong>låser den kloret</strong> så att det slutar desinficera. Då är enda lösningen att byta vatten.',
    img: 'cyanursyra-spabad',
    image_prompt:
      'A water test photometer showing a cyanuric acid reading beside a hot tub, a container of chlorine stabilizer in the foreground, clear blue water, daylight, realistic photo, no people',
    sections: [
      ['Vad cyanursyra gör',
        '<p>Utan stabilisator försvinner en stor del av kloret i solljus på några timmar. <strong>Cyanursyra</strong> binder kloret och skyddar det mot UV – enligt leverantörernas riktlinjer håller kloret sin verkan betydligt längre. Många klorgranulat och puckar innehåller därför cyanursyra redan från start ("stabiliserat klor").</p>'
        + '<p>Problemet är att cyanursyran <strong>inte förbrukas</strong>. Den stannar i vattnet och stiger gradvis varje gång du doserar stabiliserat klor. I ett spabad med litet vatten och täta vattenbyten går det ändå relativt fort.</p>'],
      ['Rätt nivå – och när det blir klorlås',
        '<p>Rekommenderad nivå ligger oftast på <strong>30–50 mg/l</strong>; vissa produkter anger 25–40 mg/l. Under 30 mg/l har du svagt UV-skydd; över cirka 50 mg/l börjar kloret bindas så hårt att desinficeringen minskar markant – det kallas <strong>klorlås</strong>.</p>'
        + '<p>Vid klorlås märker du att kloret "inte tar": du doserar men värdet stannar lågt och vattnet kan bli grumligt eller grönt trots att du klorerar. Risken för grönt vatten ökar kraftigt. Läs mer i <a href="/guider/gront-poolvatten/">grönt vatten</a> och <a href="/spabad/klor-spabad/">klor i spabad</a>.</p>'],
      ['Är cyanursyra farlig?',
        '<p>Cyanursyra i sig är inte skadlig vid normala nivåer. Problemet är <strong>indirekt</strong>: när den är för hög slutar kloret verka, och då kan bakterier och alger frodas i det varma spavattnet. Det är alltså inte cyanursyran du badar i som är risken, utan att desinficeringen tappar sin effekt.</p>'],
      ['Så mäter du cyanursyran',
        '<p>Cyanursyra mäter du med särskilda tabletter eller reagenser (CYA-test) till en fotometer, eller med stickor som inkluderar CYA. Det går inte att mäta med ett vanligt klor/pH-test.</p>'
        + '<p>Mät vid uppstart och sedan med jämna mellanrum – särskilt om du doserar stabiliserat klor dagligen. Har du ett saltvattensbad eller använder ostabiliserat klor stiger halten långsammare.</p>'],
      ['Den enda lösningen: späd ut vattnet',
        '<p>Det finns ingen kemikalie som sänker cyanursyran – <strong>enda sättet är att byta vatten</strong>. Vid halter strax över gränsen räcker det att tappa ur en del och fylla på nytt; ligger den över cirka 100 mg/l rekommenderas ett eller flera större vattenbyten tills nivån är acceptabel.</p>'
        + '<p>Planera därför in <a href="/spabad/vattenbyte-spabad/">vattenbyte i spabad</a> när halten närmar sig taket, och passa på att göra rörrengöring samtidigt.</p>'],
      ['Så undviker du klorlås',
        '<ul><li>Växla mellan <strong>stabiliserat klor</strong> (byggar CYA) och <strong>ostabiliserat klor</strong> (chockklor utan cyanursyra).</li>'
        + '<li>Mät CYA vid varje vattenbyte och några gånger per säsong.</li>'
        + '<li>Använd täcke när badet inte används – då behövs mindre stabiliserat klor.</li>'
        + '<li>Byt vatten enligt intervall (ofta 3–5 gånger per år) så hinner nivån aldrig bli kritisk.</li></ul>'
        + '<p>Jämför med poolens cyanursyra i <a href="/guider/cyanursyra-pool/">cyanursyra i pool</a>.</p>'],
    ],
    faq: [
      ['Vad är en bra cyanursyranivå i spabad?', 'Oftast 30–50 mg/l, en del produkter anger 25–40 mg/l. Under 30 mg/l är UV-skyddet svagt, över 50 mg/l börjar kloret bindas (klorlås).'],
      ['Hur sänker man cyanursyran i ett spabad?', 'Bara genom att byta vatten eller späda ut det. Det finns ingen kemikalie som tar bort cyanursyra. Vid hög nivå tömmer du en del och fyller på nytt.'],
      ['Vad är klorlås?', 'När cyanursyran blivit för hög bind den kloret så att det slutar desinficera. Kloret "tar inte" och vattnet kan bli grumligt eller grönt trots dosering.'],
      ['Är cyanursyra farlig att bada i?', 'Inte vid normala nivåer. Risken är indirekt: vid klorlås tappar desinficeringen effekt, vilket kan tillåta bakterier och alger i det varma vattnet.'],
      ['Måste man mäta cyanursyran?', 'Ja, särskilt om du använder stabiliserat klor. Den mäts med CYA-tabletter till fotometer eller med stickor som inkluderar cyanursyra.'],
    ],
    related: ['klor-spabad', 'vattenbyte-spabad', 'spabad-vattenbalans', 'cyanursyra-pool'],
  },

  {
    slug: 'gront-vatten-spabad',
    tag: 'Spa',
    h1: 'Grönt vatten i spabadet – orsak och åtgärd',
    meta_title: 'Grönt vatten i spabadet – så blir det klart igen',
    meta_desc:
      'Grönt vatten i spabadet beror nästan alltid på alger när kloret tagit slut. Så chockklorerar, filtrerar och förebygger du – och när vattnet måste bytas.',
    lead:
      'Grönt vatten i spabadet beror nästan alltid på <strong>alger</strong>. Det händer när kloret förbrukats och pH:t skenat – typiskt efter en period utan bad, efter många badande eller när vattnet stått varmt och stilla. Med rätt åtgärder blir vattnet klart igen inom ett dygn.',
    img: 'gront-vatten-spabad',
    image_prompt:
      'An outdoor hot tub with green discoloured water, the green water clearly visible, garden setting with green foliage, daylight, realistic photo, no people',
    sections: [
      ['Varför vattnet blir grönt',
        '<p>Alger finns naturligt i allt vatten. De tar över när <strong>det fria kloret blivit för lågt</strong> och <strong>pH:t skenat</strong> – alger frodas i basiskt vatten. Ett varmt spabad med täcke och stillastående vatten är en idealisk miljö. Vanliga utlösare är längre uppehåll i badandet, glömd dosering eller ett igensatt filter som gjort att kloret förbrukats.</p>'
        + '<p>Känn gärna på väggarna: en hal, slemmig hinna är ett säkert tecken på alger. Ibland är vattnet både grönt och grumligt samtidigt.</p>'],
      ['Bada inte i grönt vatten',
        '<p>Grönt spavatten är inte säkert att bada i eftersom desinficeringen är satt ur spel. Avstå tills vattnet är klart och värdena är i balans. Det gäller särskilt om någon har känslig hud eller nedsatt immunförsvar.</p>'],
      ['Så får du tillbaka klart vatten',
        '<p>Jobba i den här ordningen:</p>'
        + '<ol><li><strong>Justera pH</strong> till 7,2–7,6 först – annars verkar kloret sämre. Se <a href="/spabad/ph-spabad/">pH i spabad</a>.</li>'
        + '<li><strong>Chockklorera</strong> rejält och upprepa en gång per dygn tills vattnet är klart och fritt klor håller sig kvar. Se <a href="/guider/chockklorering/">chockklorering</a>.</li>'
        + '<li><strong>Rengör eller byt filtret</strong> och kör pumparna dygnet runt under behandlingen.</li>'
        + '<li><strong>Borsta väggar, botten och vattenlinje</strong> så att algerna lossnar och kan filtreras bort.</li>'
        + '<li><strong>Flocka vid behov</strong> om vattnet är grumligt och filtret inte klarar de små partiklarna.</li></ol>'
        + '<p>Med cirkulation igång och rätt pH klarnar vattnet oftast inom <strong>12–24 timmar</strong>. Händer ingenting alls är vattnet troligen uttjänt och bör bytas.</p>'],
      ['När du i stället ska byta vatten',
        '<p>Kommer det gröna vattnet tillbaka direkt, eller är <strong>cyanursyran hög</strong>, hjälper mer klor inte – då är det klorlås och vattnet måste bytas. Tappa ur, fyll på nytt, kör rörrengöring och balansera om från grunden. Se <a href="/spabad/cyanursyra-spabad/">cyanursyra i spabad</a> och <a href="/spabad/vattenbyte-spabad/">vattenbyte i spabad</a>.</p>'],
      ['Så slipper du grönt vatten igen',
        '<ul><li>Mät pH och klor <strong>minst en gång i veckan</strong>, även när badet inte används.</li>'
        + '<li>Håll fritt klor på 1–3 mg/l – kloret ska aldrig tillåtas gå ner till noll. Se <a href="/spabad/klor-spabad/">klor i spabad</a>.</li>'
        + '<li>Chockklorera förebyggande varje till varannan vecka vid flitigt badande.</li>'
        + '<li>Rengör filtret regelbundet och kör tillräcklig filtercykel.</li>'
        + '<li>Låt locket vara av en stund efter klorering så att gaser får vädras ut.</li></ul>'
        + '<p>Förebygger du med en fast rutin – se <a href="/spabad/skotsel-av-spabad/">skötsel av spabad</a> – blir grönt vatten sällan ett problem.</p>'],
    ],
    faq: [
      ['Varför blir spabadsvattnet grönt?', 'Nästan alltid alger. De tar över när fritt klor blivit för lågt och pH:t skenat – vanligt efter längre uppehåll, många badande eller ett igensatt filter.'],
      ['Kan man bada i grönt spavatten?', 'Nej. Desinficeringen är satt ur spel när vattnet är grönt. Bada först när vattnet är klart och pH och klor ligger i intervallet.'],
      ['Hur snabbt blir grönt spavatten klart igen?', 'Med justerat pH, chockklorering, rent filter och cirkulation dygnet runt klarnar vattnet oftast inom 12–24 timmar.'],
      ['Vad gör jag om det gröna vattnet kommer tillbaka direkt?', 'Då är cyanursyran sannolikt för hög och kloret låst. Mer klor hjälper inte – du behöver byta vatten och balansera om.'],
      ['Hur förebygger jag grönt spavatten?', 'Håll pH i 7,2–7,6 och fritt klor på 1–3 mg/l, mät varje vecka även när badet står, rengör filtret och chockklorera med jämna mellanrum.'],
    ],
    related: ['klor-spabad', 'cyanursyra-spabad', 'grumligt-vatten-spabad', 'chockklorering'],
  },

  {
    slug: 'bubbelplast-pool',
    tag: 'Guide',
    h1: 'Bubbelplast till pool – soltäcke som sparar värme',
    meta_title: 'Bubbelplast till pool – soltäcke och tjocklek',
    meta_desc:
      'Bubbelplast eller soltäcke minskar avdunstning och värmeförlust. Så väljer du mikrontjocklek och form, använder upprullare och sköter täcket så det håller.',
    lead:
      'Bubbelplast – soltäcke eller termotäcke – är den billigaste investeringen som sänker poolens uppvärmningskostnad. Den flyter på ytan, minskar avdunstningen och håller värmen kvar nattetid. Så här väljer du rätt tjocklek och form och sköter täcket så att det håller säsong efter säsong.',
    img: 'bubbelplast-pool',
    image_prompt:
      'A blue bubble-wrap solar cover partly rolled out on the surface of a clear blue swimming pool, an uproller at the pool edge, sunny Nordic garden, realistic photo, no people',
    sections: [
      ['Så funkar ett soltäcke',
        '<p>Bubbelplasten är ett tunt hölje med tusentals luftbubblor som <strong>flyter på vattenytan</strong>. Bubblorna isolerar och hjälper till att ta tillvara solvärmen, medan själva filmen stoppar den enskilt största värmeförlusten i en pool: avdunstningen. En tumregel är att ett täcke kraftigt minskar både avdunstning och värmeförlust – vilket gör att värmepumpen eller värmaren behöver arbeta mindre.</p>'
        + '<p>Det är därför soltäcket räknas som den mest kostnadseffektiva åtgärden av alla. Se hur det påverkar ekonomin i <a href="/guider/driftkostnad-pool/">driftkostnad för pool</a>.</p>'],
      ['Tjocklek i mikron – vad skiljer?',
        '<ul><li><strong>Cirka 180–200 mikron:</strong> tunnaste och billigaste varianten. Sparar värme men slits fortare.</li>'
        + '<li><strong>Cirka 400 mikron:</strong> grövre film med längre livslängd; vanlig på soltäcken sålda per meter.</li>'
        + '<li><strong>Cirka 500–600 mikron:</strong> tjockaste bubbelplasten, håller längst och isolerar mest.</li></ul>'
        + '<p>Tjockleken anges i mikron (µm) och står i produktbeskrivningen. Ett tjockare täcke kostar mer men klarar fler säsonger innan bubblorna krackelerar och försvinner.</p>'],
      ['Form och storlek',
        '<p>Det finns <strong>runda</strong> täcken färdigskurna för ovanmarkspooler (till exempel Ø 3,05 m, 3,6 m, 4,6 m och 5,5 m) och <strong>rektangulära</strong> ark som du klipper till efter din pool. Standardmått som 4 × 8 m och 3 × 6 m förekommer.</p>'
        + '<p>Klipp lite generöst första gången och efterjustera – täcket ska täcka hela ytan, medan ett litet överlapp mot sargen är bättre än glipor. Har du <a href="/guider/terasspool-och-ovanmarkspool/">ovanmarkspool</a> med uppblåsbar toppring finns färdiga täcken med hål för ringen.</p>'],
      ['Upprullare gör vardagen enklare',
        '<p>Ett stort täcke är tungt att dra av och på för hand. En <strong>upprullare</strong> – manuell eller motoriserad – rullar upp täcket vid poolkanten och gör att du faktiskt använder täcket varje gång. Det är hela poängen: täcket ska ligga på när poolen inte används, framför allt <strong>nätterna</strong>, då största värmeförlusten sker.</p>'],
      ['Skötsel och livslängd',
        '<ul><li>Skölj av täcket då och då – smuts och algbeläggning sänker både värme och vattenkvalitet.</li>'
        + '<li>Lägg <strong>bubblorna nedåt</strong> mot vattnet.</li>'
        + '<li>Förvara täcket på rullen, inte i stark sol, när det inte används.</li>'
        + '<li>Byt täcket när bubblorna krackelerat och "tappat sina bubblor" – då isolerar det knappt.</li></ul>'
        + '<p>Räkna med att ett tunt täcke håller en till ett par säsonger och ett tjockare betydligt längre, beroende på sol, klor och hantering.</p>'],
      ['Soltäcke eller säkerhetsskydd?',
        '<p>Ett soltäcke sparar värme men <strong>skyddar inte mot fall</strong> – det bär ingen vikt. Är säkerhet viktigt, till exempel med små barn, kompletterar du med ett säkerhetsöverdrag, lamelltäcke eller pooltak. Se <a href="/poolbygge/poolskydd/">poolskydd</a> och <a href="/guider/pooltackning-sakerhet/">pooltäckning och säkerhet</a>. Vill du kombinera värme och säkerhet i en lösning är <a href="/kopguider/pooltak/">pooltak</a> det starkaste valet.</p>'],
    ],
    faq: [
      ['Vad är ett soltäcke eller bubbelplast till pool?', 'En tunn film med luftbubblor som flyter på vattenytan, minskar avdunstning och värmeförlust och tar tillvara solvärme. Det är den billigaste åtgärden för lägre uppvärmningskostnad.'],
      ['Vilken tjocklek ska man välja?', '180–200 mikron är billigast men slits snabbast. 400 mikron och upp mot 500–600 mikron håller längre och isolerar bättre. Tjockleken anges i mikron i produktbeskrivningen.'],
      ['Ska bubblorna vara upp eller ned?', 'Bubblorna ska ligga nedåt mot vattnet för bästa effekt.'],
      ['Hur länge håller ett bubbelplasttäcke?', 'Ett tunt täcke håller ofta en till ett par säsonger, ett tjockare betydligt längre. Byt när bubblorna krackelerat och försvunnit.'],
      ['Ersätter ett soltäcke ett säkerhetsskydd?', 'Nej. Ett soltäcke bär ingen vikt och skyddar inte mot fall. Kombinera med säkerhetsöverdrag, lamelltäcke eller pooltak om barnsäkerhet krävs.'],
    ],
    related: ['poolskydd', 'driftkostnad-pool', 'pooltak', 'pooltackning-sakerhet'],
  },

  {
    slug: 'poolvarmevaxlare',
    tag: 'Guide',
    h1: 'Värmeväxlare till pool – värme från huset',
    meta_title: 'Värmeväxlare till pool – så funkar det och väljs',
    meta_desc:
      'En värmeväxlare överför värme från bergvärme, fjärrvärme eller panna till poolvattnet. Så dimensionerar du i kW och väljer titan eller stål för din pool.',
    lead:
      'En värmeväxlare överför värme från husets befintliga värmekälla – bergvärmepump, jord- eller sjövärmepump, luft/vatten, fjärrvärme eller panna – till poolvattnet. Har du redan en värmepump i huset kan poolen värmas betydligt billigare än med en separat elvärmare. Så här fungerar det och så dimensionerar du.',
    img: 'poolvarmevaxlare',
    image_prompt:
      'A titanium pool heat exchanger, a cylindrical tube unit with pipe connections, mounted on a wall in a clean pool equipment room with insulated pipes, realistic photo, no people',
    sections: [
      ['Vad en värmeväxlare gör',
        '<p>En värmeväxlare är en värmeöverförare: hett vatten från husets värmesystem leds genom ett nätverk av rör, och poolvattnet passerar på utsidan. Värmen överförs genom rörväggarna utan att de två vattensystemen blandas. Poolen värms alltså med värme som husets värmekälla ändå producerar.</p>'
        + '<p>Det är just separationen som är poängen. Klorhaltigt poolvatten får <strong>inte</strong> blandas med husets värmesystem – det skulle korrodera panna och radiatorer. Värmeväxlaren håller kretsarna åtskilda och för över bara värmen.</p>'],
      ['När passar en värmeväxlare?',
        '<p>Värmeväxlaren är som mest lönsam om du redan har en effektiv värmekälla i huset – framför allt <strong>bergvärmepump</strong>, som ger mycket värme per kilowattimme. Även fjärrvärme, pellets- eller vedpanna och solfångaranläggningar kan kopplas in. Då slipper du en separat poolvärmepump och kan använda husets investering även till badet.</p>'
        + '<p>Saknar du en lämplig värmekälla är en <strong>luft/vatten-värmepump</strong> för poolen ofta ett enklare val – jämför i <a href="/kopguider/varmepump-pool/">värmepump till pool</a>.</p>'],
      ['Material: titan eller rostfritt stål',
        '<ul><li><strong>Titan:</strong> korrosionsbeständigt och tål klor- och saltvatten. Rekommenderas för de flesta pooler och <em>krävs</em> i praktiken för saltvattenpooler.</li>'
        + '<li><strong>Rostfritt syrafast stål:</strong> hållbart vid normala klorhalter, men känsligare om vattnet är aggressivt eller salt.</li></ul>'
        + '<p>För dig med <a href="/kopguider/saltklorinator/">saltklorinator</a> eller saltvattenpool är titan det säkra valet.</p>'],
      ['Dimensionering – effekt i kW',
        '<p>Värmeväxlare dimensioneras i <strong>kW</strong> efter poolens volym och hur snabbt du vill värma den. Marknaden spänner från små enheter på cirka <strong>13 kW</strong> upp till stora på <strong>75–120 kW</strong> (till exempel Pahlen Hi-Flow 13/28/40/75 kW och Maxi-Flo 40–120 kW).</p>'
        + '<p>En tumregel är att en korrekt dimensionerad värmeväxlare kan värma en medelstor pool <strong>inom 1–2 dagar</strong> från kallt till badtemperatur. Väljer du för klen enhet räcker effekten inte när värmekällan samtidigt arbetar åt huset. Räkna därför även på hur mycket effekt husets värmekälla kan avvara till poolen.</p>'],
      ['Installation och flöde',
        '<p>Värmeväxlaren kopplas in på poolens <strong>trycksida efter filter och pump</strong>, med rätt rördragning och ofta en <strong>bypass</strong> så att flödet genom växlaren kan justeras och växlaren kopplas bort vid service. Fel flöde sänker verkningsgraden och kan ge larm – se <a href="/guider/poolvarmepump-bypass/">bypass till poolvärmepump</a> för principen, som gäller även värmeväxlare.</p>'
        + '<p>Installationen görs av installatör eftersom den kopplar samman två system och kräver korrekt dimensionering och rördragning.</p>'],
      ['Skötsel och livslängd',
        '<p>En värmeväxlare kräver minimalt underhåll men är känslig för <strong>dålig vattenbalans</strong>. Håll pH och klor i rätt intervall – aggressivt eller kalkrikt vatten korroderar respektive kalkar igen växlaren och sänker effekten. Skölj/backspola enligt anvisning och kontrollera att flödet inte strypts av smuts.</p>'
        + '<p>Förebygg genom att hålla vattnet balanserat enligt <a href="/guider/poolkemikalier/">poolkemikalier</a> och planera el och rördragning tillsammans med resten av tekniken i <a href="/guider/pumphus/">pumphus</a>.</p>'],
    ],
    faq: [
      ['Vad är en värmeväxlare till pool?', 'En enhet som överför värme från husets värmekälla – bergvärmepump, fjärrvärme eller panna – till poolvattnet utan att vattensystemen blandas.'],
      ['Kan man värma poolen med husets bergvärmepump?', 'Ja, med en värmeväxlare. Då använder du husets värmekälla även till badet, vilket ofta blir billigare än en separat elvärmare.'],
      ['Vilket material ska värmeväxlaren ha?', 'Titan rekommenderas eftersom det tål klor- och saltvatten och inte korroderar. Rostfritt syrafast stål fungerar vid normala klorhalter men är känsligare.'],
      ['Hur stor värmeväxlare behöver jag?', 'Dimensioneras i kW efter poolens volym och önskad uppvärmningshastighet, från cirka 13 kW till över 100 kW. Rätt dimensionerad värms en medelstor pool inom 1–2 dagar.'],
      ['Krävs installation av en fackman?', 'Ja. Värmeväxlaren kopplar samman poolkretsen med husets värmesystem och kräver korrekt dimensionering och rördragning, ofta med en bypass.'],
    ],
    related: ['varmepump-pool', 'poolvarmepump-bypass', 'driftkostnad-pool', 'poolpump'],
  },

  {
    slug: 'poolvarmepump-bypass',
    tag: 'Guide',
    h1: 'Bypass och inkoppling av poolvärmepump',
    meta_title: 'Bypass till poolvärmepump – inkoppling och flöde',
    meta_desc:
      'En bypass låter dig styra flödet genom poolvärmepumpen och koppla bort den vid service. Så kopplar du in, ställer ventilerna och får rätt värmeöverföring.',
    lead:
      'En bypass är en liten extra rörkrets runt poolvärmepumpen som gör att du kan <strong>styra hur mycket vatten som strömmar genom den</strong> – och koppla bort den helt vid service eller byte. Utan bypass får du sämre värmning och måste stänga och tömma hela poolkretsen så fort något ska åtgärdas.',
    img: 'poolvarmepump-bypass',
    image_prompt:
      'A pool heat pump on a concrete pad beside a swimming pool with a bypass manifold of white PVC pipes and ball valves connecting to it, clean equipment area, daylight, realistic photo, no people',
    sections: [
      ['Varför en bypass behövs',
        '<p>En poolvärmepump ger bäst effekt vid ett <strong>lagom flöde</strong>. Pumpar och filter dimensioneras ofta för ett högre flöde än värmepumpen vill ha, och då hinner vattnet passera för snabbt för att värmas upp ordentligt. Med en bypass kan en del av flödet gå vid sidan om värmepumpen, så att den får rätt flöde.</p>'
        + '<p>Den andra stora vinsten är <strong>service</strong>: går värmepumpen sönder eller ska bytas vill du kunna koppla bort den utan att tömma poolen och utan att stänga av cirkulationen. Utan bypass blir varje ingrepp ett projekt. Se även <a href="/kopguider/varmepump-pool/">värmepump till pool</a>.</p>'],
      ['Så är en bypass uppbyggd',
        '<p>Bypassen består av <strong>T-kopplingar, rör och kulventiler</strong> så att vattnet dels kan gå genom värmepumpen, dels förbi den. Kompletta paket innehåller normalt kulventiler, T-kopplingar, PVC-rör, PVC-lim och rörcleaner. Kopplingar är oftast i <strong>50 mm</strong> och anpassade för en standard poolkrets.</p>'
        + '<p>Sätt ventiler både före och efter värmepumpen, samt på själva bypass-ledningen. Då kan du strypa och styra flödet steglöst och stänga av värmepumpen helt när du vill.</p>'],
      ['Rätt ventilinställning',
        '<p>Den vanligaste lösningen är att <strong>bypass-ledningen står öppen</strong>, <strong>inloppet till värmepumpen stryps till omkring halvt öppet</strong> och <strong>utloppet från värmepumpen är helt öppet</strong>. Då pressas en del av flödet förbi värmepumpen och den får det lägre flöde som ger bättre värmeöverföring.</p>'
        + '<p>Stäm av mot värmepumpens manual – den anger ett flödes- och tryckintervall (min/max), och håller du dig utanför kan enheten larma eller värma sämre. Kontrollera gärna den faktiska temperaturen: mät vattnet in och ut ur värmepumpen medan den går. En tydlig temperaturskillnad visar att den värmer.</p>'],
      ['Koppla in värmepumpen',
        '<p>Värmepumpen placeras utomhus på en plan, stadig yta med fritt luftflöde runt om (den tar värme ur uteluften). Koppla in den på poolkretsen <strong>efter filter och pump</strong>, vanligtvis i serie med bypassen ovan. Dra elen enligt manual och gällande krav – en fast ansluten värmepump ska kopplas av behörig elektriker.</p>'
        + '<p>Planera vatten och el tillsammans, och skydda kopplingar och rör. Rördragning och kopplingar hänger ihop med resten av tekniken – se <a href="/guider/poolpump/">poolpump</a> och <a href="/guider/pumphus/">pumphus</a>.</p>'],
      ['Ställa in och köra värmepumpen',
        '<ul><li>Ställ in <strong>börvärde</strong> (önskad badtemperatur) på panelen.</li>'
        + '<li>Använd <strong>nattsänkning</strong> eller lägre börvärde när poolen inte används för att spara el.</li>'
        + '<li>Låt värmepumpen gå tillsammans med cirkulationen – den värmer bara när vatten flödar genom den.</li>'
        + '<li>Kontrollera <strong>avfrostning</strong> vintertid och kring kall väderlek.</li></ul>'
        + '<p>Effekten anpassas efter poolens volym och klimat; se <a href="/guider/driftkostnad-pool/">driftkostnad för pool</a> för att räkna på förbrukningen. Håller du pH och klor i balans håller värmeväxlaren i värmepumpen längre – se <a href="/guider/forangare-varmepump/">förångare på värmepump</a>.</p>'],
    ],
    faq: [
      ['Vad är en bypass till poolvärmepumpen?', 'En rörkrets med kulventiler runt värmepumpen som låter dig styra flödet genom den och koppla bort den vid service utan att tömma poolen.'],
      ['Behövs en bypass verkligen?', 'Ja, i praktiken. Utan bypass kan du inte justera flödet (vilket ger sämre värmeöverföring) och måste stänga och tömma kretsen vid varje service.'],
      ['Hur ställer man ventilerna på bypasen?', 'Vanligen: bypass-ledningen öppen, inloppet till värmepumpen strypt till cirka halvt öppen och utloppet helt öppet. Stäm av mot värmepumpens manual för rätt flöde.'],
      ['Vilken dimension har en bypass?', 'Ofta 50 mm PVC-kopplingar, med kulventiler, T-kopplingar, rör, lim och rörcleaner i färdiga paket.'],
      ['Var kopplas värmepumpen in?', 'Utomhus på en plan yta med fri luftväxling, kopplad på poolkretsen efter filter och pump, i serie med bypassen. Elen ska dras av behörig elektriker.'],
    ],
    related: ['varmepump-pool', 'poolvarmevaxlare', 'poolpump', 'driftkostnad-pool'],
  },
];
