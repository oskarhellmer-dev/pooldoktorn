// Recensionssektionen: en dedikerad sida per poolrobot.
// Eget innehåll – specar från tillverkare/återförsäljare, sammanvägt med vad
// testare och ägare säger. Vi labbtestar inte själva (det står på varje sida).
export const EXTRA_RECENSIONER = [
  {
    slug: 'dolphin-s300i',
    tag: 'Recension',
    h1: 'Dolphin S300i – recension',
    meta_title: 'Dolphin S300i – recension och testgenomgång',
    meta_desc:
      'Dolphin S300i är Maytronics appstyrda premiumrobot för botten, väggar och vattenlinje. Här är styrkor, svagheter och vem den passar – utan säljsnack.',
    lead: 'Dolphin S300i är den modell som oftast lyfts fram som bästa totalval i sin klass. Den är appstyrd, tar hela poolen inklusive vattenlinjen och har en filtrering som få konkurrenter matchar. Frågan är om priset är värt det för dig.',
    img: 'dolphin-s300i',
    image_prompt:
      'A modern white and blue corded robotic pool cleaner on the floor of a clear blue swimming pool, angled view showing the filter basket, clean water, daylight',
    sections: [
      ['Snabb översikt',
        '<table><tbody>'
        + '<tr><td>Typ</td><td>Sladdbunden (transformator)</td></tr>'
        + '<tr><td>Klarar</td><td>Botten, väggar och vattenlinje</td></tr>'
        + '<tr><td>Max pool</td><td>ca 12 x 4 m, alla poolformer</td></tr>'
        + '<tr><td>Rengöringstid</td><td>1,5 / 2 / 2,5 timmar (flera program)</td></tr>'
        + '<tr><td>Sugkapacitet</td><td>ca 18 m³/h</td></tr>'
        + '<tr><td>Filter</td><td>Flerskiktsfilter, fin + ultrafin korg</td></tr>'
        + '<tr><td>Styrning</td><td>App (MyDolphin) via Bluetooth, även manuell styrning</td></tr>'
        + '</tbody></table>'
        + '<div class="note">Specifikationerna är tillverkarens och återförsäljarnas. Vi labbtestar inte robotarna själva – bedömningen väger samman specar med vad testare och ägare rapporterar.</div>'],
      ['Vad som är bra',
        '<ul><li><strong>Tar hela poolen.</strong> Botten, väggar och vattenlinje – den enda kategori som verkligen automatiskt håller rent överallt.</li>'
        + '<li><strong>App och fjärrstyrning.</strong> Du schemalägger körningar, väljer program och kan styra roboten manuellt via mobilen. Få modeller ger den kontrollen.</li>'
        + '<li><strong>Finkornig filtrering.</strong> Flerskiktsfiltret med ultrafin insats tar det disiga partikelmaterialet som grövre korgar lämnar kvar.</li>'
        + '<li><strong>Klarar alla underlag.</strong> Larvband och aktiv borste gör den säker på liner, betong och kakel.</li>'
        + '<li><strong>Pool-scanning och filterindikator.</strong> Den anpassar körningen och säger till när korgen behöver tömmas.</li>'
        + '<li><strong>Servicebarhet.</strong> Maytronics har den bredaste reservdels- och servicekedjan i Sverige.</li></ul>'],
      ['Vad som är mindre bra',
        '<ul><li><strong>Priset.</strong> Detta är en premiumrobot, och du betalar för funktionerna.</li>'
        + '<li><strong>Ingen swivel.</strong> Kabeln saknar roterande infästning, så den kan trassla sig under körning om du inte håller ordning på den.</li>'
        + '<li><strong>Sladdbunden.</strong> Du betalar med en kabel att hantera, i gengäld får du obegränsad drifttid.</li></ul>'],
      ['För vem passar den?',
        '<p>Har du en nedgrävd pool upp till ca 12 meter, vill slippa städa väggar och vattenlinje och vill kunna styra från mobilen är S300i ett av de tryggaste valen. Är poolen liten, har du svårt med sladdar eller vill hålla nere kostnaden – titta på en sladdlös modell i stället.</p>'],
      ['Teknisk detalj: vattenlinjen',
        '<p>Att roboten klarar vattenlinjen är en av de funktioner som faktiskt gör skillnad i vardagen. Fett och solkräm lägger sig i vattenytan och bildar en rand som en golvrobot aldrig når. En vattenlinjefunktion borstar bort den innan den hinner gro in – vilket sparar dig manuell skrubbning varje vecka.</p>'],
    ],
    faq: [
      ['Klarar Dolphin S300i väggar och vattenlinje?',
        'Ja, den städar botten, väggar och vattenlinje. Det är en av anledningarna till att den lyfts fram som ett totalval i sin klass.'],
      ['Måste poolens pump vara igång när roboten kör?',
        'Nej. En självständig robot har egen pump och eget filter och är oberoende av poolens cirkulation. Den kan köras även när reningsverket står still.'],
      ['Behöver jag en app för att använda den?',
        'Nej, roboten kan köras utan app. Appen ger dig schemaläggning, programval och manuell styrning, men är inte ett krav för att köra en rengöring.'],
    ],
    aff: {
      title: 'Dolphin-robotar',
      text: 'Jämför Dolphin-modellerna och se vilken som passar din poolstorlek och dina ytor.',
      cta: 'Se Dolphin-robotar',
      url: 'https://www.poolstore.se',
    },
    related: ['dolphin-e20', 'dolphin-e10', 'basta-poolroboten', 'basta-poolrengoraren'],
  },

  {
    slug: 'dolphin-e20',
    tag: 'Recension',
    h1: 'Dolphin E20 – recension',
    meta_title: 'Dolphin E20 – recension av Maytronics instegsrobot',
    meta_desc:
      'Dolphin E20 tar botten och väggar till ett lägre pris än premiummodellerna. Här är styrkor, svagheter och för vem den passar – ärlig genomgång utan säljsnack.',
    lead: 'Dolphin E20 är steget in i Maytronics värld för dig som vill ha en sladdbunden robot som tar både botten och väggar – men utan premiummodellernas app och vattenlinjefunktion. Ett rakt, pålitligt val för mindre pooler.',
    img: 'dolphin-e20',
    image_prompt:
      'A corded robotic pool cleaner climbing the wall of a small clear blue pool, compact white robot, garden background, daylight',
    sections: [
      ['Snabb översikt',
        '<table><tbody>'
        + '<tr><td>Typ</td><td>Sladdbunden (transformator)</td></tr>'
        + '<tr><td>Klarar</td><td>Botten och väggar (ej vattenlinje)</td></tr>'
        + '<tr><td>Max pool</td><td>ca 10 m</td></tr>'
        + '<tr><td>Driftstid</td><td>ca 2 timmar</td></tr>'
        + '<tr><td>Kabel</td><td>15 m</td></tr>'
        + '<tr><td>Filter</td><td>Enkelskiktsfilter, filterkorg med toppåtkomst</td></tr>'
        + '<tr><td>Styrning</td><td>Enkel panel, utan app</td></tr>'
        + '</tbody></table>'],
      ['Vad som är bra',
        '<ul><li><strong>Botten och väggar.</strong> Klättrar väggar och tar beläggningar som en golvmodell missar.</li>'
        + '<li><strong>Aktiv borste.</strong> Löser upp beläggning så att sugkraften får med sig smutsen.</li>'
        + '<li><strong>Oberoende av reningsverket.</strong> Egen pump och eget filter – poolens cirkulation behöver inte vara igång.</li>'
        + '<li><strong>Enkel att sköta.</strong> Filterkorgen nås från toppen och vattnet rinner av snabbt.</li>'
        + '<li><strong>Maytronics-kvalitet och reservdelar.</strong> Beprövad konstruktion med god tillgång på slitdelar.</li></ul>'],
      ['Vad som är mindre bra',
        '<ul><li><strong>Ingen vattenlinje.</strong> Vattenlinjeranden får du ta manuellt.</li>'
        + '<li><strong>Enkelskiktsfilter.</strong> Fångar grövre skräp men inte det finaste finkornet – för disigt vatten kan du behöva komplettera.</li>'
        + '<li><strong>Ingen app eller schemaläggning.</strong> Du startar den med en enkel panel.</li>'
        + '<li><strong>Gräns kring 10 meter</strong> och ingen transportvagn.</li>'
        + '<li><strong>Kabeln kan trassla</strong> och roboten är tung att lyfta ur vattnet.</li></ul>'],
      ['För vem passar den?',
        '<p>E20 passar dig med en mindre nedgrävd pool (upp till ca 10 m) som vill ha botten och väggar rena till ett mellanpris. Vill du klara vattenlinjen och få appstyrning går du upp till S300i. Har du bara en liten ovanmarkspool kan E10 räcka.</p>'],
      ['Teknisk detalj: aktiv borste',
        '<p>Aktiv borste innebär att borsten drivs och roterar aktivt mot underlaget, i stället för att bara glida med. Det gör att tunn beläggning – som ett tunt lager alger eller smuts i porerna – lossnar och kan sugas upp. På en liner eller ett klinkergolv märks skillnaden tydligt jämfört med en robot utan aktiv borste.</p>'],
    ],
    faq: [
      ['Klarar Dolphin E20 väggar?',
        'Ja, den tar både botten och väggar. Vattenlinjen ingår däremot inte – den får du rengöra manuellt.'],
      ['Hur stor pool klarar Dolphin E20?',
        'Den är avsedd för pooler upp till omkring 10 meter. Är din pool större bör du välja en modell med högre kapacitet, annars tar rengöringen för lång tid.'],
      ['Måste filteranläggningen vara igång?',
        'Nej. Roboten är oberoende av poolens filteranläggning och kan köras även när cirkulationen är avstängd.'],
    ],
    aff: {
      title: 'Dolphin E-serien',
      text: 'Jämför E10, E20 och större modeller efter poolstorlek och vilka ytor du vill slippa städa.',
      cta: 'Se Dolphin E-serien',
      url: 'https://www.poolstore.se',
    },
    related: ['dolphin-e10', 'dolphin-s300i', 'basta-poolroboten', 'basta-poolrengoraren'],
  },

  {
    slug: 'dolphin-e10',
    tag: 'Recension',
    h1: 'Dolphin E10 – recension',
    meta_title: 'Dolphin E10 – recension: enkel bottenrobot',
    meta_desc:
      'Dolphin E10 är Maytronics billigaste robot och städar bara botten i mindre ovanmarkspooler. Är den värd priset, eller finns det bättre val? Ärlig recension.',
    lead: 'Dolphin E10 är instegsmodellen – billigast i Maytronics sortiment och byggd för en enda uppgift: att städa botten i mindre ovanmarkspooler. Enkel och beprövad, men långtifrån komplett. Här är vad du bör veta innan du köper.',
    img: 'dolphin-e10',
    image_prompt:
      'A small compact robotic pool cleaner on the flat floor of an above-ground pool, simple design, clear water, daylight',
    sections: [
      ['Snabb översikt',
        '<table><tbody>'
        + '<tr><td>Typ</td><td>Sladdbunden (transformator)</td></tr>'
        + '<tr><td>Klarar</td><td>Botten (ej väggar, ej vattenlinje)</td></tr>'
        + '<tr><td>Driftstid</td><td>ca 1,5 timme</td></tr>'
        + '<tr><td>Kabel</td><td>12 m</td></tr>'
        + '<tr><td>Pumpflöde</td><td>ca 15 m³/h</td></tr>'
        + '<tr><td>Filter</td><td>Grovfilter (nät)</td></tr>'
        + '<tr><td>Motor</td><td>24 V DC</td></tr>'
        + '</tbody></table>'],
      ['Vad som är bra',
        '<ul><li><strong>Lägsta priset.</strong> Det billigaste sättet att få en automatisk bottenrengöring från Maytronics.</li>'
        + '<li><strong>Enkel och beprövad.</strong> Få delar som kan krångla, och reservdelar finns.</li>'
        + '<li><strong>Bra för plan botten.</strong> På ett plant golv i en mindre ovanmarkspool gör den jobbet.</li></ul>'],
      ['Vad som är mindre bra',
        '<ul><li><strong>Bara botten.</strong> Ingen väggklättring och ingen vattenlinje.</li>'
        + '<li><strong>Enbart grovfilter (nät).</strong> Den tar löv och grövre skräp men inte det finaste finkornet – disigt vatten löser den inte.</li>'
        + '<li><strong>Manuell start varje gång.</strong> Ingen schemaläggning eller app.</li>'
        + '<li><strong>Begränsad.</strong> För de flesta poolägare finns bättre val till ungefär samma pris.</li></ul>'],
      ['För vem passar den?',
        '<p>E10 passar dig med en liten, plan ovanmarkspool som bara behöver botten rengjord och som vill komma billigt undan. Har du väggar att tänka på, disigt vatten eller vill kunna schemalägga – välj en modell ett steg upp.</p>'],
      ['Teknisk detalj: varför filtervalet spelar roll',
        '<p>E10 har en grov nätbehållare. Den fångar löv, gräs och sand men släpper igenom de mikroskopiska partiklar som gör vattnet mjölkigt. Vill du komma åt disighet behöver roboten ett finare eller ultrafint filter. Det är därför en dyrare modell kan upplevas ge klarare vatten även om båda suger lika bra.</p>'],
    ],
    faq: [
      ['Klarar Dolphin E10 väggar?',
        'Nej. E10 städar enbart botten. Behöver du väggar eller vattenlinje får du välja en modell högre upp i sortimentet.'],
      ['Passar Dolphin E10 en nedgrävd pool?',
        'Den är främst avsedd för mindre ovanmarkspooler med plan botten. Har du en nedgrävd pool med väggar och sluttningar är den inte rätt val.'],
      ['Hur ofta ska filtret rengöras?',
        'Töm och spola nätkorgen efter varje körning. Ett igensatt filter sänker sugkraften direkt och gör att rengöringen tar längre tid.'],
    ],
    aff: {
      title: 'Poolrobotar för ovanmarkspool',
      text: 'Jämför instegsmodeller och se vilka som klarar mer än bara botten.',
      cta: 'Se poolrobotar',
      url: 'https://www.poolstore.se',
    },
    related: ['dolphin-e20', 'dolphin-s300i', 'basta-poolroboten', 'basta-poolrengoraren'],
  },

  {
    slug: 'wybot-c2-vision-a',
    tag: 'Recension',
    h1: 'WYBOT C2 Vision-A – recension',
    meta_title: 'WYBOT C2 Vision-A – recension och köpråd',
    meta_desc:
      'WYBOT C2 Vision-A är en sladdlös robot med AI-kamera för pooler upp till 200 m². Här är vad testare säger om sugkraft, batteri och navigering – ärlig recension.',
    lead: 'WYBOT C2 Vision-A är det mest avancerade i den sladdlösa kategorin: en AI-kamera som upptäcker smuts, flera rengöringslägen i appen och kapacitet för stora pooler. Men kameran är inte allt – batteritid och sugkraft avgör hur den känns i vardagen.',
    img: 'wybot-c2-vision-a',
    image_prompt:
      'A black cordless robotic pool cleaner with a camera on the floor of a large clear blue swimming pool, modern design, daylight',
    sections: [
      ['Snabb översikt',
        '<table><tbody>'
        + '<tr><td>Typ</td><td>Sladdlös (batteri)</td></tr>'
        + '<tr><td>Klarar</td><td>Botten, väggar och vattenlinje</td></tr>'
        + '<tr><td>Max pool</td><td>ca 200 m²</td></tr>'
        + '<tr><td>Navigering</td><td>AI-kamera</td></tr>'
        + '<tr><td>Filter</td><td>Tvåstegs, HEPA-steg i turboläge</td></tr>'
        + '<tr><td>Styrning</td><td>App med flera lägen</td></tr>'
        + '</tbody></table>'],
      ['Vad som är bra',
        '<ul><li><strong>AI-kamera och smart navigering.</strong> Roboten upptäcker smuts och kör mer systematiskt än en modell med slumpmässig rörelse.</li>'
        + '<li><strong>Kapacitet för stora pooler.</strong> Klarar ytor upp till omkring 200 m² – bland de högsta i klassen.</li>'
        + '<li><strong>Tvåstegsfiltrering.</strong> HEPA-steget i turboläge tar mycket finkorn.</li>'
        + '<li><strong>Klarar väggar och vattenlinje.</strong> Inte bara botten.</li>'
        + '<li><strong>Sladdlös.</strong> Ingen kabel att hantera.</li></ul>'],
      ['Vad som är mindre bra',
        '<ul><li><strong>Sugkraften.</strong> Tester har pekat på att flödet är lägre än hos sladdbundna modeller i samma prisklass – ett återkommande tema för sladdlösa robotar.</li>'
        + '<li><strong>Batteri och laddning.</strong> Körtiden begränsas av batteriet, och en del användare upplever att roboten behöver laddas ofta och att en del av körtiden går åt till schemaläggning.</li>'
        + '<li><strong>Behöver appen.</strong> Full funktion kräver mobilen.</li></ul>'],
      ['För vem passar den?',
        '<p>C2 Vision-A passar dig med en stor pool som vill ha kameranavigering och slippa sladd, och som accepterar att batteridrift innebär kompromisser på ren kraft. Vill du ha maximal sugkraft och obegränsad körtid är en sladdbunden modell fortfarande starkare.</p>'],
      ['Teknisk detalj: AI-kamera kontra gyroskop',
        '<p>Ett gyroskop håller kurs och gör att roboten kör rakt, men den vet inte var smutsen finns. En AI-kamera går ett steg längre: den analyserar bilden under vattnet och riktar sig mot synlig smuts. I teorin ger det effektivare rengöring. I praktiken beror resultatet på hur bra mjukvaran är – kameran är bara så bra som algoritmen bakom den.</p>'],
    ],
    faq: [
      ['Är WYBOT C2 Vision-A värd kameran?',
        'Kameran ger smartare navigering och riktad rengöring, vilket märks mest i stora eller oregelbundna pooler. Är poolen liten och enkel tillför den mindre.'],
      ['Hur länge räcker batteriet?',
        'Drifttiden begränsas av batteriet och varierar med läge och pool. En del användare rapporterar att den behöver laddas ofta – räkna med att hantera laddning mellan körningar.'],
      ['Klara den väggar och vattenlinje?',
        'Ja, modellen är byggd för botten, väggar och vattenlinje, till skillnad från enklare bottenrobotar.'],
    ],
    aff: {
      title: 'Sladdlösa poolrobotar',
      text: 'Jämför batteridrivna robotar med och utan kamera efter din poolstorlek.',
      cta: 'Se sladdlösa robotar',
      url: 'https://www.poolstore.se',
    },
    related: ['aiper-scuba-e1', 'aiper-scuba-se', 'dolphin-s300i', 'basta-poolroboten'],
  },

  {
    slug: 'aiper-scuba-e1',
    tag: 'Recension',
    h1: 'AIPER Scuba E1 – recension',
    meta_title: 'AIPER Scuba E1 – recension och köpråd',
    meta_desc:
      'AIPER Scuba E1 är en sladdlös poolrobot med ultrafin filtrering ner till 3 µm. Här är styrkor, svagheter och de viktiga begränsningarna – ärlig recension.',
    lead: 'AIPER Scuba E1 lockar med ultrafin filtrering och ett mellanpris. Den är lätt, sladdlös och tar finkorn som grövre robotar missar. Men den har en tydlig begränsning som du måste känna till innan du köper.',
    img: 'aiper-scuba-e1',
    image_prompt:
      'A black and grey cordless robotic pool cleaner on the flat floor of a clear blue pool, compact modern design, daylight',
    sections: [
      ['Snabb översikt',
        '<table><tbody>'
        + '<tr><td>Typ</td><td>Sladdlös (batteri)</td></tr>'
        + '<tr><td>Klarar</td><td>Botten (plana golv)</td></tr>'
        + '<tr><td>Max pool</td><td>ca 100 m²</td></tr>'
        + '<tr><td>Körtid</td><td>ca 100–130 minuter</td></tr>'
        + '<tr><td>Filter</td><td>Dubbel filtrering ner till ca 3 µm</td></tr>'
        + '</tbody></table>'],
      ['Vad som är bra',
        '<ul><li><strong>Ultrafin filtrering.</strong> Dubbelfiltret tar partiklar ner mot 3 µm – bland de finaste i klassen. Bra mot disigt vatten.</li>'
        + '<li><strong>Lätt och sladdlös.</strong> Enkel att lyfta i och ur poolen.</li>'
        + '<li><strong>Räckvidd.</strong> Klarar ytor upp till omkring 100 m².</li></ul>'],
      ['Vad som är mindre bra',
        '<ul><li><strong>Bara plana golv.</strong> Tester är tydliga: den är inte byggd för sluttningar, trappor eller väggar. Har du det blir rengöringen ofullständig.</li>'
        + '<li><strong>Batteridrift.</strong> Begränsad körtid och laddning mellan körningar.</li>'
        + '<li><strong>Varumärkets batterihistorik.</strong> AIPER har rapporterats haft problem med batterier och återkallelser på vissa modeller. Oavsett modell bör en sladdlös robot alltid laddas utanför vattnet och på en säker plats.</li></ul>'],
      ['För vem passar den?',
        '<p>E1 passar dig med en plan botten i en ovanmarkspool eller nedgrävd pool utan sluttningar, som vill ha fin filtrering och slippa sladd. Har din pool trappor, sluttningar eller höga väggar är den fel val.</p>'],
      ['Teknisk detalj: mikron och disigt vatten',
        '<p>Siffran i µm anger hur små partiklar filtret fångar – lägre är finare. Ett filter på 3 µm tar korn som är osynliga för ögat men som gör vattnet mjölkigt. Det är just den typen av partiklar som stannar kvar i vattnet även efter att sandfiltret kört, eftersom de är mindre än vad mediet fångar. Därför kan en robot med fint filter göra mer för klarheten än vad själva pumpsuget antyder.</p>'],
    ],
    faq: [
      ['Klarar AIPER Scuba E1 väggar?',
        'Nej. Den är avsedd för plana poolgolv och klarar inte sluttningar, trappor eller väggar. Behöver du väggrengöring får du välja en annan modell.'],
      ['Vad betyder filtrering ner till 3 µm?',
        'Det anger att filtret fångar partiklar ner till omkring 3 mikrometer – mycket fint. Det hjälper mot disigt vatten som grövre filter inte kommer åt.'],
      ['Är sladdlösa robotar säkra?',
        'De ska laddas utanför vattnet och på en torr, säker plats. Alla litiumbatterier bör hanteras med omdöme; följ tillverkarens anvisningar och ladda aldrig vid poolen.'],
    ],
    aff: {
      title: 'Sladdlösa poolrobotar',
      text: 'Jämför robotar med fin filtrering för klarare vatten i mindre pooler.',
      cta: 'Se sladdlösa robotar',
      url: 'https://www.poolstore.se',
    },
    related: ['aiper-scuba-se', 'wybot-c2-vision-a', 'dolphin-e10', 'basta-poolroboten'],
  },

  {
    slug: 'aiper-scuba-se',
    tag: 'Recension',
    h1: 'AIPER Scuba SE – recension',
    meta_title: 'AIPER Scuba SE – recension och köpråd',
    meta_desc:
      'AIPER Scuba SE är en billig sladdlös bottenrobot för mindre pooler. Men testare är kritiska. Här är vad du måste veta innan du köper – ärlig recension.',
    lead: 'AIPER Scuba SE är ett av de billigaste sätten att få en sladdlös poolrobot. Priset är lockande, men flera oberoende testare är tydligt kritiska till både sugkraft, batteritid och byggkvalitet. Här är hela bilden.',
    img: 'aiper-scuba-se',
    image_prompt:
      'A small black cordless robotic pool cleaner on the floor of a clear blue above-ground pool, simple compact design, daylight',
    sections: [
      ['Snabb översikt',
        '<table><tbody>'
        + '<tr><td>Typ</td><td>Sladdlös (batteri)</td></tr>'
        + '<tr><td>Klarar</td><td>Botten</td></tr>'
        + '<tr><td>Max pool</td><td>ca 80 m²</td></tr>'
        + '<tr><td>Körtid</td><td>ca 90 minuter</td></tr>'
        + '<tr><td>Filter</td><td>Filterkorg och två golvborstar</td></tr>'
        + '</tbody></table>'],
      ['Vad som är bra',
        '<ul><li><strong>Lågt pris.</strong> Ett av de billigaste sladdlösa alternativen.</li>'
        + '<li><strong>Sladdlös och smidig.</strong> Ingen kabel, lätt att handskas med i små pooler.</li>'
        + '<li><strong>Två golvborstar.</strong> Hjälper till att få med löst skräp på botten.</li></ul>'],
      ['Vad som är mindre bra',
        '<ul><li><strong>Svag sugkraft.</strong> Testare beskriver sugkraften som otillräcklig jämfört med prisklassen.</li>'
        + '<li><strong>Begränsad batteritid.</strong> Körtiden räcker inte alltid för hela ytan.</li>'
        + '<li><strong>Ineffektiv navigering.</strong> Den täcker inte poolen jämnt.</li>'
        + '<li><strong>Tveksam byggkvalitet.</strong> Sammantaget avråder åtminstone en testare direkt från modellen.</li>'
        + '<li><strong>Varumärkets batterihistorik.</strong> AIPER har rapporterats haft batteriproblem och återkallelser på vissa modeller – ladda alltid utanför vattnet.</li></ul>'],
      ['För vem passar den?',
        '<p>Den passar främst den som absolut vill hålla kostnaden nere och har en mycket liten pool där botten ändå blir hyggligt ren. Är kraven högre – jämn täckning, stark sugkraft och pålitlighet – finns bättre val, ofta för inte mycket mer.</p>'],
      ['Teknisk detalj: varför navigering avgör resultatet',
        '<p>En billig robot kan ha fullt tillräcklig motor men ändå lämna smuts kvar, helt enkelt för att den inte kör över hela botten. Utan gyroskop eller karta rör den sig slumpmässigt och kan fastna i samma område. Det är därför två robotar med liknande sugkraft kan ge helt olika resultat: navigeringen, inte motorn, avgör hur mycket av poolen som faktiskt blir ren.</p>'],
    ],
    faq: [
      ['Är AIPER Scuba SE bra?',
        'Den är billig och sladdlös, men flera oberoende testare är kritiska till sugkraft, batteritid och byggkvalitet. Den fungerar bäst i mycket små pooler med enkla behov.'],
      ['Klarar den väggar?',
        'Nej, den är avsedd för botten.'],
      ['Hur länge räcker batteriet?',
        'Omkring 90 minuter enligt specifikationen, men testare upplever att körtiden kan vara en begränsning för hela ytan.'],
    ],
    aff: {
      title: 'Poolrobotar för små pooler',
      text: 'Jämför billiga sladdlösa robotar och de modeller som klarar mer.',
      cta: 'Se poolrobotar',
      url: 'https://www.poolstore.se',
    },
    related: ['aiper-scuba-e1', 'bwt-fsa900', 'dolphin-e10', 'basta-poolroboten'],
  },

  {
    slug: 'bwt-fsa900',
    tag: 'Recension',
    h1: 'BWT FSA900 – recension',
    meta_title: 'BWT FSA900 – recension av sladdlös poolrobot',
    meta_desc:
      'BWT FSA900 är en sladdlös bottenrobot med 4 liters behållare, smart navigering och snabb laddning. Här är styrkor, svagheter och vem den passar – ärlig recension.',
    lead: 'BWT FSA900 är en sladdlös bottenrobot som satsar på det praktiska: stor behållare, snabb laddning och smart navigering. Den har fått höga betyg i tester, men också tydliga begränsningar. Här är hela bilden.',
    img: 'bwt-fsa900',
    image_prompt:
      'A white and grey cordless robotic pool cleaner on the floor of a small clear blue pool, compact design with visible debris container, daylight',
    sections: [
      ['Snabb översikt',
        '<table><tbody>'
        + '<tr><td>Typ</td><td>Sladdlös (litiumbatteri)</td></tr>'
        + '<tr><td>Klarar</td><td>Botten</td></tr>'
        + '<tr><td>Max pool</td><td>ca 45 m²</td></tr>'
        + '<tr><td>Cykeltid</td><td>ca 45 minuter</td></tr>'
        + '<tr><td>Behållare</td><td>4 liter</td></tr>'
        + '<tr><td>Laddning</td><td>ca 90 minuter</td></tr>'
        + '</tbody></table>'],
      ['Vad som är bra',
        '<ul><li><strong>Stor behållare.</strong> 4 liter gör att du slipper tömma lika ofta – praktiskt för mindre pooler med mycket löv.</li>'
        + '<li><strong>Snabb laddning.</strong> Omladdning på omkring 90 minuter är snabbt i klassen.</li>'
        + '<li><strong>Smart navigering.</strong> Optimerar körvägen över botten i stället för att bara studsa runt.</li>'
        + '<li><strong>Batteridrift utan kabel.</strong> Total rörelsefrihet.</li>'
        + '<li><strong>Höga betyg i tester.</strong> Har fått mycket starka omdömen i oberoende tester.</li></ul>'],
      ['Vad som är mindre bra',
        '<ul><li><strong>Endast botten.</strong> Ingen vägg- eller vattenlinjefunktion.</li>'
        + '<li><strong>Kräver smartphone.</strong> För att använda alla funktioner behöver du appen.</li>'
        + '<li><strong>Begränsad poolstorlek.</strong> Avsedd för mindre pooler, upp till omkring 45 m².</li></ul>'],
      ['För vem passar den?',
        '<p>FSA900 passar dig med en mindre pool som vill ha en smidig sladdlös bottenrengöring med stor behållare och snabb laddning. Behöver du väggar eller vattenlinje, eller har en stor pool, är den inte rätt val.</p>'],
      ['Teknisk detalj: varför storleken på behållaren spelar roll',
        '<p>Behållarens volym avgör hur ofta du behöver tömma roboten – och hur mycket den hinner samla innan sugkraften avtar när korgen blir full. En robot med liten korg tappar effekt under körningen och lämnar skräp kvar på slutet. En stor behållare som 4 liter håller sugkraften uppe under hela cykeln, vilket märks särskilt i pooler med mycket löv.</p>'],
    ],
    faq: [
      ['Klarar BWT FSA900 väggar?',
        'Nej, den rengör botten. Väggar och vattenlinje får du ta manuellt.'],
      ['Hur stor pool klarar den?',
        'Den är avsedd för mindre pooler, upp till omkring 45 m².'],
      ['Måste jag använda appen?',
        'För grundläggande körning räcker roboten, men för att använda alla funktioner behöver du appen i mobilen.'],
    ],
    aff: {
      title: 'Sladdlösa bottenrobotar',
      text: 'Jämför robotar med stor behållare och snabb laddning för mindre pooler.',
      cta: 'Se sladdlösa robotar',
      url: 'https://www.poolstore.se',
    },
    related: ['aiper-scuba-se', 'aiper-scuba-e1', 'basta-poolroboten', 'basta-poolrengoraren'],
  },

  {
    slug: 'ultenic-pooleco-10',
    tag: 'Recension',
    h1: 'Ultenic Pooleco 10 – recension',
    meta_title: 'Ultenic Pooleco 10 – recension och köpråd',
    meta_desc:
      'Ultenic Pooleco 10 är en av de billigaste sladdlösa poolrobotarna. Den är lätt och smidig, men testare pekar på svag täckning. Här är hela bilden – ärlig recension.',
    lead: 'Ultenic Pooleco 10 är ett budgetalternativ i den sladdlösa klassen, med dubbla motorer och lång drifttid till ett lågt pris. Den är lätt och smidig – men en oberoende testare är tydlig med att den lämnar för mycket skräp kvar.',
    img: 'ultenic-pooleco-10',
    image_prompt:
      'A black cordless robotic pool cleaner with a float on the floor of a clear blue pool, budget compact design, daylight',
    sections: [
      ['Snabb översikt',
        '<table><tbody>'
        + '<tr><td>Typ</td><td>Sladdlös (batteri)</td></tr>'
        + '<tr><td>Klarar</td><td>Botten</td></tr>'
        + '<tr><td>Max pool</td><td>ca 80 m²</td></tr>'
        + '<tr><td>Körtid</td><td>ca 90 minuter</td></tr>'
        + '<tr><td>Behållare</td><td>ca 2,5 liter</td></tr>'
        + '<tr><td>Sugflöde</td><td>ca 30 GPM, dubbla motorer</td></tr>'
        + '</tbody></table>'],
      ['Vad som är bra',
        '<ul><li><strong>Lågt pris.</strong> Bland de billigaste sladdlösa robotarna.</li>'
        + '<li><strong>Lätt.</strong> Enkel att lyfta och hantera.</li>'
        + '<li><strong>Laddport på ovansidan.</strong> Praktiskt – du slipper vända på roboten för att ladda.</li>'
        + '<li><strong>Flytkropp.</strong> Gör den lätt att hitta och fiska upp ur vattnet.</li>'
        + '<li><strong>Lång drifttid och dubbla motorer</strong> enligt specifikationen.</li></ul>'],
      ['Vad som är mindre bra',
        '<ul><li><strong>Svag täckning.</strong> En oberoende testare beskriver den som lättdistraherad och att den lämnar mycket skräp orört.</li>'
        + '<li><strong>Sämre än konkurrenter i samma pris.</strong> Testaren menar att likvärdiga modeller presterar bättre.</li>'
        + '<li><strong>Endast botten.</strong> Ingen vägg- eller vattenlinjefunktion.</li></ul>'],
      ['För vem passar den?',
        '<p>Den passar dig med en liten pool och låg budget som accepterar att täckningen inte är perfekt. Är kraven högre på jämnt resultat finns bättre val i samma prisklass.</p>'],
      ['Teknisk detalj: varför "dubbla motorer" inte automatiskt betyder bättre',
        '<p>Dubbla motorer och ett högt angivet sugflöde (i GPM) låter imponerande, men flödet säger bara hur mycket vatten som passerar – inte hur mycket av botten roboten hinner över. En robot kan ha kraftfull motor och ändå lämna skräp kvar om navigeringen är svag. Därför bör du väga täckning och navigering lika tungt som motor och flöde när du jämför budgetmodeller.</p>'],
    ],
    faq: [
      ['Är Ultenic Pooleco 10 bra?',
        'Den är billig, lätt och har praktiska detaljer som laddport på ovansidan. Men en oberoende testare pekar på svag täckning och att den lämnar skräp kvar jämfört med konkurrenter i samma pris.'],
      ['Klarar den väggar?',
        'Nej, den rengör botten.'],
      ['Vad betyder GPM i specifikationen?',
        'GPM står för gallon per minut och anger sugflödet. Högre flöde lyfter tyngre skräp, men säger inget om hur jämnt roboten täcker botten.'],
    ],
    aff: {
      title: 'Budget-poolrobotar',
      text: 'Jämför billiga sladdlösa robotar och de modeller som ger jämnare resultat.',
      cta: 'Se poolrobotar',
      url: 'https://www.poolstore.se',
    },
    related: ['aiper-scuba-se', 'bwt-fsa900', 'dolphin-e10', 'basta-poolroboten'],
  },

  {
    slug: 'bestway-flowclear-aquarover',
    tag: 'Recension',
    h1: 'Bestway Flowclear AquaRover 58622 – recension',
    meta_title: 'Bestway Flowclear AquaRover 58622 – recension',
    meta_desc:
      'Bestway Flowclear AquaRover 58622 är en sladdlös bottenrobot för ovanmarkspooler med behållare och jetsystem. Här är styrkor och begränsningar – ärlig recension.',
    lead: 'Bestway Flowclear AquaRover 58622 är byggd för ovanmarkspooler: sladdlös, med egen skräpbehållare och ett jetsystem som rör upp skräp från botten. Ett enkelt insteg i automatisk rengöring – om förväntningarna är rätt satta.',
    img: 'bestway-flowclear-aquarover',
    image_prompt:
      'A blue cordless robotic pool cleaner on the floor of a round above-ground pool, simple plastic design, clear water, daylight',
    sections: [
      ['Snabb översikt',
        '<table><tbody>'
        + '<tr><td>Typ</td><td>Sladdlös (batteri)</td></tr>'
        + '<tr><td>Klarar</td><td>Botten</td></tr>'
        + '<tr><td>Passar</td><td>Runda och rektangulära ovanmarkspooler (ca Ø 610 / 956 cm)</td></tr>'
        + '<tr><td>Körtid</td><td>ca 90 minuter</td></tr>'
        + '<tr><td>Filter</td><td>Skräpbehållare med jetsystem</td></tr>'
        + '</tbody></table>'],
      ['Vad som är bra',
        '<ul><li><strong>Byggd för ovanmarkspooler.</strong> Dimensionerad för de vanligaste runda och rektangulära modellerna.</li>'
        + '<li><strong>Egen skräpbehållare.</strong> Skräpet hamnar i roboten, inte i poolens filter.</li>'
        + '<li><strong>Jetsystem.</strong> Rör upp skräp från botten så att det kan samlas upp.</li>'
        + '<li><strong>Sladdlös och enkel.</strong> Ingen kabel, låg tröskel att komma igång.</li></ul>'],
      ['Vad som är mindre bra',
        '<ul><li><strong>Endast botten.</strong> Ingen vägg- eller vattenlinjefunktion.</li>'
        + '<li><strong>Enkel konstruktion.</strong> Byggd för enkla pooler – inte för krävande eller stora nedgrävda pooler.</li>'
        + '<li><strong>Batteridrift.</strong> Körtiden begränsas av batteriet.</li></ul>'],
      ['För vem passar den?',
        '<p>AquaRover passar dig med en ovanmarkspool som vill ha en enkel, sladdlös bottenrengöring och inte behöver väggar eller vattenlinje. För en nedgrävd pool med sluttningar och väggar är den för begränsad.</p>'],
      ['Teknisk detalj: jetsystem och upprörd smuts',
        '<p>Ett jetsystem sprutar vatten mot botten för att röra upp skräp som ligger intill eller fastnar, så att roboten kan suga upp det i stället för att bara glida över. Det hjälper mot lättare beläggning, men ersätter inte sugkraft eller en borste när smutsen sitter hårt. På en ovanmarkspool med löv och sand räcker det oftast; på ingrodd beläggning gör det inte.</p>'],
    ],
    faq: [
      ['Passar Bestway AquaRover en nedgrävd pool?',
        'Den är byggd för ovanmarkspooler, främst runda och rektangulära modeller. För nedgrävda pooler med väggar och sluttningar är den inte rätt val.'],
      ['Klarar den väggar?',
        'Nej, den rengör botten. Behöver du väggar och vattenlinje får du välja en annan modell.'],
      ['Hamnar skräpet i poolens filter?',
        'Nej. AquaRover har en egen skräpbehållare, så skräpet hamnar i roboten och avlastar poolens filter.'],
    ],
    aff: {
      title: 'Poolrobotar för ovanmarkspool',
      text: 'Jämför enkla sladdlösa robotar som passar ovanmarkspooler.',
      cta: 'Se poolrobotar',
      url: 'https://www.poolstore.se',
    },
    related: ['netspa-coyote', 'aiper-scuba-se', 'dolphin-e10', 'basta-poolroboten'],
  },

  {
    slug: 'netspa-coyote',
    tag: 'Recension',
    h1: 'Netspa Coyote RO-Coyote2 – recension',
    meta_title: 'Netspa Coyote RO-Coyote2 – recension',
    meta_desc:
      'Netspa Coyote RO-Coyote2 är en sladdlös bottenrobot med robust byggnad för liner och kakel. Här är vad den gör bra och var gränserna går – ärlig recension.',
    lead: 'Netspa Coyote RO-Coyote2 är en enkel sladdlös bottenrobot med robust konstruktion som ska tåla både liner och kakel. Ett prisvärt alternativ för dig som vill ha grundläggande bottenrengöring utan kabel.',
    img: 'netspa-coyote',
    image_prompt:
      'A cordless robotic pool cleaner on the tiled floor of a clear blue pool, robust design, daylight',
    sections: [
      ['Snabb översikt',
        '<table><tbody>'
        + '<tr><td>Typ</td><td>Sladdlös (batteri)</td></tr>'
        + '<tr><td>Klarar</td><td>Botten</td></tr>'
        + '<tr><td>Underlag</td><td>Liner och kakel</td></tr>'
        + '<tr><td>Filter</td><td>Skräpbehållare</td></tr>'
        + '<tr><td>Konstruktion</td><td>Robust, för grundläggande bottenrengöring</td></tr>'
        + '</tbody></table>'],
      ['Vad som är bra',
        '<ul><li><strong>Robust byggd.</strong> Konstruktionen ska klara både liner och kakel utan att skada ytan.</li>'
        + '<li><strong>Sladdlös.</strong> Ingen kabel att hantera – lätt att komma igång.</li>'
        + '<li><strong>Låg tröskel.</strong> Ett prisvärt steg in i automatisk rengöring.</li></ul>'],
      ['Vad som är mindre bra',
        '<ul><li><strong>Endast botten.</strong> Ingen vägg- eller vattenlinjefunktion.</li>'
        + '<li><strong>Enkel funktion.</strong> Den ersätter inte en avancerad robot med navigering och fin filtrering.</li>'
        + '<li><strong>Batteridrift.</strong> Begränsad körtid och laddning mellan körningar.</li>'
        + '<li><strong>Begränsad information.</strong> Detaljerade oberoende tester är få – bedöm den efter dina egna behov och poolstorlek.</li></ul>'],
      ['För vem passar den?',
        '<p>Den passar dig med en mindre pool och enkla behov som vill ha grundläggande, sladdlös bottenrengöring och en robust maskin som tål liner eller kakel. Har du högre krav på täckning, väggar eller fin filtrering finns bättre val.</p>'],
      ['Teknisk detalj: liner eller kakel – borstar och material',
        '<p>Poolens material styr vilka borstar som är lämpliga. Liner är mjuk och repar lätt, så den vill ha mjuka PVC-borstar och ett skonsamt tryck. Kakel och betong tål kraftigare borstar. Väljer du fel kan borsten slita på linern eller inte rå på beläggningen på kaklet. Kontrollera därför att roboten är avsedd för din pooltyp innan du köper.</p>'],
    ],
    faq: [
      ['Klarar Netspa Coyote väggar?',
        'Nej, den rengör botten. Väggar och vattenlinje får du ta manuellt.'],
      ['Passar den liner och kakel?',
        'Den är byggd för att vara robust och klara både liner och kakel. Kontrollera ändå att borstarna passar din pooltyp.'],
      ['Finns oberoende tester?',
        'Detaljerade oberoende tester av denna modell är få. Bedöm den efter dina behov, poolstorlek och de specifikationer som anges hos återförsäljaren.'],
    ],
    aff: {
      title: 'Poolrobotar för liner och kakel',
      text: 'Jämför robotar som är skonsamma mot liner men tål kakel.',
      cta: 'Se poolrobotar',
      url: 'https://www.poolstore.se',
    },
    related: ['bestway-flowclear-aquarover', 'aiper-scuba-se', 'basta-poolroboten', 'basta-poolrengoraren'],
  },
];
