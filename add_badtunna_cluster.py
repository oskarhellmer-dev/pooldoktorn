#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Lägger till badtunna-klustret (5 artiklar) i extra-spa.ts."""
P = "/home/clawd/pooldoktorn-astro/src/data/extra-spa.ts"
s = open(P, encoding="utf-8").read()

AFF = """    aff: {
      title: 'Badtunna eller bastu direkt från tillverkaren',
      text: 'TimberIN tillverkar badtunnor, utomhusbastur och isbad i Sverige. Som läsare hos Pooldoktorn får du 4 % rabatt med koden nedan.',
      cta: 'Se badtunnor hos Badtunnaspa',
      url: 'https://www.badtunnaspa.se/?ref=pooldoktorn',
      code: 'POOLDOKTORN',
    },"""

entries = []

entries.append("""
  {
    slug: 'vedeldad-badtunna',
    tag: 'Spa',
    h1: 'Vedeldad badtunna – så fungerar den',
    meta_title: 'Vedeldad badtunna – funktion, pris och skötsel',
    meta_desc:
      'Så fungerar en vedeldad badtunna: kamin, uppvärmningstid, vedåtgång, vattenvård och vinterförvaring – och vad du bör kontrollera innan köp.',
    lead: 'En vedeldad badtunna värms med eld i stället för el. Det ger låg driftkostnad och en helt annan känsla – men också krav på ved, tålamod och rätt skötsel. Här går vi igenom hur den fungerar i praktiken.',
    img: 'vedeldad-badtunna',
    image_prompt:
      'A wood-fired hot tub in a Nordic garden with a smoking chimney and steam rising from the water, firewood stacked beside it, dusk, realistic photo, no people',
    sections: [
      ['Kaminen och värmekretsen',
        '<p>I en vedeldad tunna sitter en kamin, antingen inbyggd i en mantel runt tunnan eller som en extern ugn kopplad till tunnan via rör. Vattnet värms när det cirkulerar genom kaminen – i en del modeller självcirkulerande, i andra med en liten pump. Principen är enkel: elden värmer vattnet, och ju mer effektiv kamin och mantel är, desto snabbare blir badet varmt.</p>'
        + '<p>Sitter kaminen i en mantel runt tunnan värms vattnet indirekt och tunnan blir behagligt varm att luta sig mot. En extern ugn ger mer eld att titta på men kräver mer rördragning och skydd.</p>'],
      ['Hur lång tid tar uppvärmningen?',
        '<p>Räkna med flera timmar från kallt vatten till badtemperatur, beroende på tunnans volym, kaminens effekt och utetemperaturen. En vanlig uppfattning är att en vedeldad tunna är "snabb" – den är i själva verket långsammare än ett eluppvärmt spabad, men snabbare än att värma en hel pool. Vintertid tar det längre tid eftersom kalluft kyler ytan kontinuerligt.</p>'
        + '<p>Praktiskt innebär det att man ofta eldar i förväg, gärna några timmar innan badet är planerat. Vill du kunna bada spontant är en kombination av elpatron och kamin ett bättre val.</p>'],
      ['Vedåtgång och ekonomi',
        '<p>Driftkostnaden i el är i princip noll – i stället kostar veden och arbetet. Hur mycket ved som går åt beror på tunna, kamin och hur ofta du eldar, men räkna med att det går åt en hel del torr ved per bad, särskilt vintertid. Torr ved brinner renare och ger mer värme per kilo än fuktig ved, så torka veden ordentligt.</p>'
        + '<p>Räknar du över flera år är en vedeldad tunna billig i drift men kräver mer manuell insats. Se också <a href="/spabad/badtunna-pris/">vad en badtunna kostar</a> för helhetsbilden.</p>'],
      ['Vattenvård i en vedeldad tunna',
        '<p>Vattnet cirkulerar inte genom ett filter dygnet runt, vilket är den stora skillnaden mot ett spabad. Det betyder att vattnet behöver bytas oftare och inte kan hållas rent enbart med kemi. Grunderna gäller ändå: håll koll på pH, duscha före bad och byt vatten innan det blir grumligt. Kemigrunderna finns i <a href="/spabad/spabad-vattenbalans/">vattenbalans i spabad</a>.</p>'],
      ['Vinter och tömning',
        '<p>Ska tunnan inte användas vintertid är tömning och vinterförberedelse viktigast av allt. Vatten i kamin, rör och kopplingar som fryser kan spräcka metall och fogar – och det är den enskilt dyraste skadan man kan råka ut för. Töm helt, se till att inget vatten blir stående i kaminen och skydda tunnan mot stående vatten.</p>'],
      ['Checklista innan köp',
        '<ul><li>Kamin inbyggd i mantel eller extern ugn – vad passar din plats?</li>'
        + '<li>Uppskattad uppvärmningstid för den volym du väljer.</li>'
        + '<li>Tillgång till torr ved – och var den ska förvaras.</li>'
        + '<li>Underlag som tål vikten (se <a href="/spabad/bygga-in-badtunna/">bygga in badtunna</a>).</li>'
        + '<li>Plan för tömning och vinterförvaring.</li>'
        + '<li>Garanti och reservdelar till kaminen i Sverige.</li></ul>'],
    ],
    faq: [
      ['Är en vedeldad badtunna billigare i drift än ett spabad?',
        'I el räknat ja – den drivs av ved och har ingen löpande elkostnad. Men du betalar i stället med ved, tid och arbete, och vattnet behöver bytas oftare. Totalkostnaden beror på hur mycket du badar.'],
      ['Kan man värma en vedeldad tunna snabbt?',
        'Inte snabbt i absoluta tal – räkna med flera timmar från kallt vatten. Vill du bada spontant är en elpatron som håller grundvärmen ett bra komplement till kaminen.'],
      ['Fryser en badtunna sönder på vintern?',
        'Inte om den är korrekt tömd och vinterförberedd. Risken ligger i vatten som blir stående i kamin, rör eller kopplingar. Töm ordentligt om tunnan inte ska användas.'],
    ],
""" + AFF + """
    related: ['badtunna', 'badtunna-pris', 'spabad-eller-badtunna'],
  },""")

entries.append("""
  {
    slug: 'badtunna-pris',
    tag: 'Spa',
    h1: 'Vad kostar en badtunna?',
    meta_title: 'Badtunna pris – vad kostar en badtunna?',
    meta_desc:
      'Vad en badtunna kostar beror på uppvärmning, storlek och tillval. Här är prisspannet, vad som driver kostnaden och vad du bör räkna in utöver inköpet.',
    lead: 'Priset på en badtunna varierar enormt – från en enkel vedeldad tunna till en isolerad eluppvärmd med lock och kamin. Här är vad som faktiskt avgör priset, och vad många glömmer att räkna in.',
    img: 'badtunna-pris',
    image_prompt:
      'A modern wooden hot tub on a garden deck with a price-conscious clean setup, steam and garden, soft daylight, realistic photo, no people',
    sections: [
      ['Prisspannet – varför det skiljer så mycket',
        '<p>En enkel vedeldad tunna i grundutförande ligger i det lägre spannet, medan en isolerad eluppvärmd tunna med lock, kamin och tillval kostar betydligt mer. Det är inte bara storleken som styr: uppvärmningstyp, isolering, material och kaminens kvalitet gör större skillnad på priset än diametern.</p>'
        + '<p>Undvik att jämföra bara prislappen. En billig tunna med dålig isolering kan bli dyrare över tid om du väljer elvärme, medan en dyrare isolerad tunna kan bli billigare i drift.</p>'],
      ['Vad som driver priset',
        '<ul><li><strong>Uppvärmning:</strong> vedeldad, eluppvärmd eller kombination.</li>'
        + '<li><strong>Isolering:</strong> avgör hur mycket värme som håller sig kvar.</li>'
        + '<li><strong>Material:</strong> träslag, mantel och invändig liner.</li>'
        + '<li><strong>Kamin:</strong> effekt, material och om den sitter i mantel eller externt.</li>'
        + '<li><strong>Storlek:</strong> fler personer kräver mer vatten och mer värme.</li>'
        + '<li><strong>Tillval:</strong> lock, trappa, belysning, filter och jet.</li></ul>'],
      ['Tillval som snabbt drar iväg',
        '<p>Lock med god isolering är nästan alltid värt pengarna om tunnan ska stå ute – det håller temperaturen och minskar nedskräpning i vattnet. Trappa, belysning och ett bra filter är bekvämlighet stillval. Kamin med mer effekt kan kapa uppvärmningstiden väsentligt. Räkna ihop tillvalen innan du bestämmer storlek, för tillvalen kan överraska mer än själva tunnan.</p>'],
      ['Driftkostnad utöver inköpet',
        '<p>En vedeldad tunna har ingen elkostnad men kräver ved. En eluppvärmd tunna drar el löpande, och kostnaden beror nästan helt på isolering och lock. Räkna också in kemikalier, vatten och tätare vattenbyten än i ett spabad, eftersom vattnet inte filtreras löpande. Se <a href="/spabad/spabad-energiforbrukning/">vad ett spabad drar i energi</a> för att förstå hur isolering slår på ekonomin.</p>'],
      ['Installation och underlag',
        '<p>Glöm inte kostnaden för underlag och lyft. En full tunna väger flera ton och behöver ett bärande, plant underlag – packad makadam, betongplatta eller ett däck byggt för lasten. Är tunnan eluppvärmd tillkommer elanslutning av behörig elektriker. Läs mer i <a href="/spabad/bygga-in-badtunna/">bygga in badtunna</a>.</p>'],
      ['Så räknar du hem köpet',
        '<p>Jämför inte bara inköpspris. Räkna in uppvärmning, isolering, ved eller el över flera år, kemikalier, vattenbyten och underlag. En tunna som är rätt dimensionerad för hur du faktiskt badar blir billigare i längden än en för stor tunna som sällan används fullt.</p>'],
    ],
    faq: [
      ['Varför skiljer priset så mycket mellan olika badtunnor?',
        'Framför allt uppvärmningstyp, isolering, material och kaminens kvalitet. Storleken spelar roll, men isolering och uppvärmning påverkar både pris och driftkostnad mer än diametern.'],
      ['Är en billig badtunna alltid dyrare i drift?',
        'Inte automatiskt, men en tunn isolering gör eluppvärmning dyrare och kräver mer arbete med vattnet. En vedeldad tunna har låg driftkostnad i el oavsett, men kräver ved och tid.'],
      ['Vad kostar det att förbereda underlaget?',
        'Det beror på om tunnan ställs på befintligt däck, packad makadam eller en ny betongplatta, och om markarbete behövs. En full tunna väger flera ton, så underlaget är ingen punkt att spara på.'],
    ],
""" + AFF + """
    related: ['badtunna', 'vedeldad-badtunna', 'bygga-in-badtunna'],
  },""")

entries.append("""
  {
    slug: 'bygga-in-badtunna',
    tag: 'Spa',
    h1: 'Bygga in badtunna – underlag, däck och nedfällning',
    meta_title: 'Bygga in badtunna – underlag och trädäck',
    meta_desc:
      'Så bygger du in en badtunna: bärande underlag, nedfällning i trädäck, åtkomst till kamin och dränering – och misstagen som blir dyra att ångra.',
    lead: 'En inbyggd badtunna smälter in i trädgården, men den ställer krav på underlag, åtkomst och dränering. Gör du fel med grunden eller glömmer kaminen blir det dyrt att ångra. Här är det som måste vara rätt.',
    img: 'bygga-in-badtunna',
    image_prompt:
      'A wooden hot tub recessed into a timber deck in a Nordic garden, integrated into decking, evening light, realistic photo, no people',
    sections: [
      ['Planera innan du bygger',
        '<p>Bestäm tunnans modell, mått och uppvärmning innan du bygger något runt den. Diameter, höjd, kaminens placering och serviceutrymmet styr allt. Rita upp däck, avstånd och åtkomst på papper först – det är billigare att ändra en skiss än ett färdigt däck.</p>'],
      ['Underlag som tål vikten',
        '<p>En full tunna väger flera ton. Underlaget ska vara plant, bärande och dränerande: packad makadam med markskiva, en betongplatta eller ett däck byggt för lasten. Står tunnan på något som sätter sig lutar den, och då belastas fogar och kopplingar fel. Markförhållandena styr vad som krävs – lera och organiskt material är sämre än fast mineraljord.</p>'],
      ['Nedfällning i trädäck',
        '<p>Ska tunnan fällas ned i ett däck måste däcket dimensioneras för lasten, med tätare bärreglar just där tunnan står. Lämna en demonterbar sektion eller lucka för åtkomst till teknik och kamin. Lyftstroppar under tunnan underlättar framtida service avsevärt.</p>'],
      ['Åtkomst till kamin och teknik',
        '<p>Det vanligaste misstaget är att bygga in tunnan så att kamin och kopplingar blir oåtkomliga. En vedeldad tunna behöver åtkomst till kaminen för rengöring och sotning, och eluppvärmda modeller behöver åtkomst till patron och rör. Räkna med fritt utrymme runt alla sidor som behöver servas.</p>'],
      ['Dränering och tömning',
        '<p>Planera hur vattnet ska ut när du tömmer tunnan, och se till att det inte blir stående runt underlaget. Stående vatten mjukar upp mark och kan skada konstruktionen över tid. Ett dränerande bärlager och en tydlig väg för slangen eller pumpen löser det enkelt om du tänker på det i förväg.</p>'],
      ['Material som håller i svenskt klimat',
        '<p>Välj material tåliga mot fukt, kyla och frost. Komposit och impregnerat trä fungerar bra i trädgård, och undvik ytor som blir hala av is och blöta. En inbyggd tunna ska tåla svenska vintrar utan att underhållet blir ett heltidsjobb.</p>'],
    ],
    faq: [
      ['Hur mycket tål en full badtunna – behöver jag förstärka däcket?',
        'En full tunna väger flera ton, så ett vanligt trädäck räcker sällan utan åtgärd. Dimensionera bärreglarna för lasten eller gjut en platta. Räkna alltid med vikten av vatten och badande, inte bara tunnan.'],
      ['Måste jag kunna komma åt kaminen efter inbyggnad?',
        'Ja. Kaminen behöver rengöras och sotas, och kopplingar behöver kunna inspekteras. Bygg in tunnan så att dessa delar är åtkomliga, annars blir nästa service dyr.'],
      ['Kan jag bygga in en vedeldad tunna i ett trädäck?',
        'Ja, om däcket dimensioneras för lasten, kaminen får åtkomst och underlaget dränerar. Tänk särskilt på skydd mot värme och gnistor där kaminen möter trä.'],
    ],
""" + AFF + """
    related: ['badtunna', 'vedeldad-badtunna', 'installera-spabad-markarbete'],
  },""")

entries.append("""
  {
    slug: 'utomhusbastu',
    tag: 'Spa',
    h1: 'Utomhusbastu – så väljer du rätt',
    meta_title: 'Utomhusbastu – köpguide för trädgården',
    meta_desc:
      'Utomhusbastu för trädgården: vedeldad eller el, isolering, placering, underlag och vad du bör kontrollera innan köp.',
    lead: 'En utomhusbastu förlänger badsäsongen och blir en plats att varva ner på året runt. Men vedeldad eller el, och hur den placeras, avgör både upplevelsen och kostnaden. Här är valen som spelar roll.',
    img: 'utomhusbastu',
    image_prompt:
      'A small wooden outdoor sauna cabin in a Nordic garden at dusk with warm light in the window and a path, realistic photo, no people',
    sections: [
      ['Vedeldad eller elbastu?',
        '<p>En vedeldad bastu har den traditionella känslan: veden, elden och ljudet hör till upplevelsen. Den kräver ved, tändning och lite mer arbete, och uppvärmningen tar tid. En elbastu startar snabbt, håller jämn temperatur och kan styras enkelt – men ger inte samma eldkänsla och kräver en korrekt elanslutning. Frågan är vad du värderar: ritualen eller bekvämligheten.</p>'],
      ['Isolering och uppvärmningstid',
        '<p>Isolering är avgörande för både uppvärmningstid och driftkostnad, särskilt om bastun ska användas året runt. En välisolerad bastu blir snabbare varm och håller värmen bättre, medan en enklare konstruktion värms snabbare upp men tappar värme fortare. Titta på väggarnas tjocklek och hur bastun är tänkt att användas – säsongsvis eller året runt.</p>'],
      ['Placering och underlag',
        '<p>Bastun behöver ett plant och bärande underlag, och placeringen påverkar både upplevelse och praktik. Tänk på avstånd till huset (för rök, värme och åtkomst), avskildhet, och hur du tar dig dit vintertid. En vedeldad bastu behöver dessutom utrymme för ved och skorsten med bra höjd och avstånd till brännbart.</p>'],
      ['Ventilation och säkerhet',
        '<p>Ventilation är en av de mest förbisedda detaljerna i en bastu. Luft måste kunna röra sig för att ge syre till elden eller aggregatet och för att fukten ska ventileras ut. Kamin och aggregat ska ha rätt skyddsavstånd till trä och brännbart material, och skorstenen ska vara rätt dimensionerad och säkrad. Följ tillverkarens anvisningar noggrant.</p>'],
      ['Skötsel och vinter',
        '<p>Trä i bastu ska tåla värme och fukt utan att spricka – välj lämpliga träslag och behandla sparsamt. Ventilera ut fukt efter varje bad så mögel inte får fäste. En bastu som står oanvänd vintertid mår bättre av torr luft och viss grundvärme, medan en vedeldad bastu ska hållas torr och skyddad.</p>'],
      ['Checklista innan köp',
        '<ul><li>Vedeldad eller elbastu – och varför?</li>'
        + '<li>Isolering och tänkt användning året runt eller säsongsvis.</li>'
        + '<li>Placering med avstånd, avskildhet och vinteråtkomst.</li>'
        + '<li>Ventilation och skyddsavstånd till brännbart.</li>'
        + '<li>Underlag som tål vikten och dränerar.</li>'
        + '<li>Elanslutning av behörig elektriker om den är eldriven.</li>'
        + '<li>Garanti och reservdelar i Sverige.</li></ul>'],
    ],
    faq: [
      ['Vedeldad eller elbastu – vad är bäst?',
        'Vedeldad ger den traditionella upplevelsen men kräver ved och tid; elbastu är snabb, jämn och enkel men saknar elden. Valet handlar mest om hur du vill använda bastun, inte om vilken som är objektivt bättre.'],
      ['Behöver en utomhusbastu isoleras?',
        'Om den ska användas året runt, ja. Isoleringen avgör hur snabbt den blir varm och hur mycket värme den håller, vilket påverkar både komfort och driftkostnad.'],
      ['Hur viktig är ventilationen i en bastu?',
        'Mycket viktig. Ventilation ger syre till värmeaggregatet och för bort fukt så att inte mögel bildas. Dålig ventilation märks både i luftkvaliteten och i hur bastun åldras.'],
    ],
""" + AFF + """
    related: ['badtunna', 'vedeldad-badtunna', 'spabad-eller-badtunna'],
  },""")

entries.append("""
  {
    slug: 'isbad',
    tag: 'Spa',
    h1: 'Isbad hemma – så börjar du säkert',
    meta_title: 'Isbad hemma – säker guide för kallbad',
    meta_desc:
      'Så börjar du med isbad hemma: temperatur, tid, säkerhet, vad som händer i kroppen och vad du behöver för att komma igång på ett tryggt sätt.',
    lead: 'Kallbad och isbad har blivit en folkrörelse, men det gäller att börja klokt. Här är grunderna i temperatur, tid och säkerhet – och vad du behöver hemma för att göra det tryggt.',
    img: 'isbad',
    image_prompt:
      'An outdoor ice bath tub with cold water and light steam in a Nordic garden, early morning light, realistic photo, no people',
    sections: [
      ['Varför kallbad?',
        '<p>Många beskriver en tydlig pigghet och ett lyft i humöret efter ett kallt bad, och det är en av de vanligaste anledningarna att fortsätta. Upplevelsen av kontroll och närvaro i kylan är en del av poängen. Effekterna varierar mellan personer, och ett kallbad ersätter inte vård – men som vana är det för många både enkel och givande.</p>'],
      ['Temperatur och tid',
        '<p>Ett isbad behöver inte vara nollgradigt för att göra nytta. Vatten kring 10–15 grader upplevs redan som mycket kallt, och många börjar där. Tid i vattnet hålls kort: ofta räknat i sekunder upp till någon minut i början, och man går i och ur lugnt. Längre tid bygger man upp gradvis över veckor, aldrig på en gång.</p>'],
      ['Säkerhet först',
        '<p>Bada aldrig ensam, särskilt inte i början. Gå i lugnt och kontrollerat, aldrig med ett hopp. Har du hjärt- eller kärlsjukdom, högt blodtryck, epilepsi, är gravid eller tar mediciner som påverkar blodcirkulationen – prata med vården först. Kyla kan ge chockreaktion, snabb andning och kraftig sammandragning av blodkärl. Avbryt direkt om du känner yrsel eller obehag, och värm dig långsamt efteråt.</p>'],
      ['Så bygger du rutinen',
        '<p>Börja kort och ofta. Några gånger i veckan med korta bad är bättre än ett långt då och då. Vänj dig vid kylan gradvis, använd andningen för att hålla dig lugn, och lägg gärna in en stund av uppvärmning efteråt – en varm dusch eller en varm dryck. Rutinen är viktigare än intensiteten.</p>'],
      ['Utrustning och att få kallt vatten',
        '<p>För isbad hemma behöver du en tunna eller ett kärl som tål kyla och rymmer dig, plus ett sätt att få vattnet kallt. En del använder en tunna med lock som får stå ute under vintern, andra kyler vattnet aktivt. Tänk på underlaget – vatten är tungt – och på att kunna tömma kärlet enkelt. Se också <a href="/spabad/badtunna/">badtunna – så väljer du rätt</a> om du vill kombinera kallbad med varmt bad.</p>'],
      ['Vanliga misstag',
        '<ul><li>Att hoppa i stället för att gå i lugnt.</li>'
        + '<li>Att stanna för länge för att "klara mer" första gången.</li>'
        + '<li>Att bada ensam utan någon som ser dig.</li>'
        + '<li>Att inte värma upp ordentligt efteråt.</li>'
        + '<li>Att ignorera kroppens signaler i kylan.</li></ul>'],
    ],
    faq: [
      ['Hur kallt vatten behövs för ett isbad?',
        'Nollgradigt är inte ett krav. Vatten kring 10–15 grader upplevs redan som mycket kallt och är en rimlig startpunkt. Många håller sig där eller svalare utan att gå ner till iskallt.'],
      ['Hur länge ska man bada isbad?',
        'Kort, särskilt i början – ofta räknat i sekunder upp till någon minut. Tiden byggs upp gradvis över veckor. Rutinen med korta, regelbundna bad är viktigare än långa enstaka.'],
      ['Är isbad farligt?',
        'Kallbad innebär en kraftig påfrestning på kroppen och bör göras med respekt. Bada aldrig ensam, gå i lugnt, avbryt vid yrsel eller obehag, och rådgör med vården om du har hjärt- eller kärlsjukdom, högt blodtryck, epilepsi eller är gravid.'],
    ],
""" + AFF + """
    related: ['badtunna', 'utomhusbastu', 'spabad-eller-badtunna'],
  },""")

assert s.rstrip().endswith("];")
s2 = s.rstrip()[:-2].rstrip() + "\n" + "\n".join(entries) + "\n];\n"
open(P, "w", encoding="utf-8").write(s2)
print("Lade till 5 artiklar. Ny radantal:", s2.count("\n") + 1)
