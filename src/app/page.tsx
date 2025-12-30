export default function Home() {
  return (
    <>
      <header>
        <h1>Det Norsk-Israelske Maktkomplekset</h1>
        <p className="subtitle">Etterretning | Kapital | Teknologi | Ideologi | 1959–2025</p>
      </header>

      {/* OVERVIEW STATS */}
      <section>
        <h2>Oversikt: 66 År Dokumentert Historie</h2>
        <div className="divider"></div>

        <div className="stats">
          <div><div className="stat-val">3</div><div className="stat-label">Verifiserte etterretningssaker</div></div>
          <div><div className="stat-val">6</div><div className="stat-label">Mossad-agentar dømte</div></div>
          <div><div className="stat-val">220mrd</div><div className="stat-label">NOK Oljefondet</div></div>
          <div><div className="stat-val">54</div><div className="stat-label">EU-forskingsprosjekt</div></div>
        </div>

        <div className="stats" style={{marginTop: '8px'}}>
          <div><div className="stat-val">150+</div><div className="stat-label">Israelske selskap i Oljefondet</div></div>
          <div><div className="stat-val">15k+</div><div className="stat-label">MIFF medlemmer</div></div>
          <div><div className="stat-val">13M</div><div className="stat-label">NOK politiske donasjonar 24/25</div></div>
          <div><div className="stat-val">8+</div><div className="stat-label">Unit 8200-selskap i kritisk infrastruktur</div></div>
        </div>

        <div className="filter-row">
          <span className="filter-tag active">Alle</span>
          <span className="filter-tag">Etterretning</span>
          <span className="filter-tag">Kapital</span>
          <span className="filter-tag">Media</span>
          <span className="filter-tag">Politikk</span>
          <span className="filter-tag">Akademia</span>
        </div>
      </section>

      <div className="section-break"></div>

      {/* PART 1: INTELLIGENCE OPERATIONS */}
      <section>
        <h2>Del I: Etterretningsoperasjonar</h2>
        <div className="divider"></div>
        <p className="intro">Tre verifiserte saker over 37 år. Lillehammer-saka er einaste gongen eit Mossad-team vart arrestert, stilt for retten og dømt gjennom vestleg rettssystem.</p>

        {/* CASE 1: LILLEHAMMER */}
        <div className="case-box">
          <div className="case-header">Sak 1: Lillehammer-aksjonen (1973)</div>

          <table>
            <tbody>
              <tr><th colSpan={2}>Grunndata</th></tr>
              <tr><td><strong>Dato</strong></td><td>21. juli 1973</td></tr>
              <tr><td><strong>Operasjon</strong></td><td>Operation Wrath of God (Mivtza Za&apos;am HaEl)</td></tr>
              <tr><td><strong>Offer</strong></td><td>Ahmed Bouchikhi, 30 år, marokkansk kelnar</td></tr>
              <tr><td><strong>Tiltenkt mål</strong></td><td>Ali Hassan Salameh (&quot;Den Raude Prinsen&quot;, Black September)</td></tr>
              <tr><td><strong>Vitne</strong></td><td>Torill Bouchikhi (gravid kone)</td></tr>
              <tr><td><strong>Rettssak</strong></td><td>Eidsivating lagmannsrett, januar-februar 1974</td></tr>
              <tr><td><strong>Erstatning</strong></td><td>~$400 000 til familien</td></tr>
              <tr><td><strong>Offisiell gransking</strong></td><td>NOU 2000:6 &quot;Lillehammer-saken&quot;</td></tr>
            </tbody>
          </table>

          <h3>Dømte agentar</h3>
          <div className="network-grid six">
            <div className="node">
              <div className="node-circle red">SR</div>
              <div className="node-name">Sylvia Rafael</div>
              <div className="node-role">Katsa | 5,5 år | ~15 mnd</div>
            </div>
            <div className="node">
              <div className="node-circle red">AG</div>
              <div className="node-name">Abraham Gehmer</div>
              <div className="node-role">Overvaking | 5,5 år | ~22 mnd</div>
            </div>
            <div className="node">
              <div className="node-circle red">DÆ</div>
              <div className="node-name">Dan Ærbel</div>
              <div className="node-role">Teamleiar | 5 år | ~22 mnd</div>
            </div>
            <div className="node">
              <div className="node-circle red">MG</div>
              <div className="node-name">M. Gladnikoff</div>
              <div className="node-role">Overvaking | 2,5 år | ~15 mnd</div>
            </div>
            <div className="node">
              <div className="node-circle red">ZS</div>
              <div className="node-name">Zwi Steinberg</div>
              <div className="node-role">Komm. | 1 år | Full</div>
            </div>
            <div className="node">
              <div className="node-circle red">MD</div>
              <div className="node-name">Michael Dorf</div>
              <div className="node-role">Logistikk | 1 år | Full</div>
            </div>
          </div>

          <h3>Rømte operativar</h3>
          <table>
            <tbody>
              <tr><th>Namn/Alias</th><th>Rolle</th><th>Status</th></tr>
              <tr><td><strong>Mike Harari</strong></td><td>Operasjonskommandør</td><td>Rømte, døydde Tel Aviv 2014</td></tr>
              <tr><td>&quot;Edouard Laskier&quot;</td><td>Skyttar</td><td>Aldri identifisert</td></tr>
              <tr><td>&quot;Gerard Lafond&quot;</td><td>Skyttar</td><td>Aldri identifisert</td></tr>
            </tbody>
          </table>

          <div className="highlight red">
            <strong>Sylvia Rafael</strong> — Sør-afrikansk agent som hadde infiltrert PLO i Jordan/Libanon under dekknamnet &quot;Patricia Roxborough&quot;. Gifta seg med forsvarsadvokat Annæus Schjødt etter lauslating. Schjødt skal seinare ha lekka info om Israels atomprogram til norske styresmakter.
          </div>

          <div className="highlight">
            <strong>Dan Ærbel</strong> — Klaustrofobi utløyste tilståing i norsk fengsel. Avslørte at han var president i Biscayne Trader&apos;s Shipping Corporation — frontselskapet for Operasjon Plumbat (1968 urantyveriet). Norsk jord vart scena der Israels urananskaffing vart avslørt.
          </div>
        </div>

        {/* CASE 2: 1987 PASSPORT */}
        <div className="case-box">
          <div className="case-header">Sak 2: Passforfalskingar (1987)</div>
          <table>
            <tbody>
              <tr><td><strong>Type</strong></td><td>Passbedrageri</td></tr>
              <tr><td><strong>Oppdaging</strong></td><td>Norske styresmakter avdekka israelsk etterretningsbruk av falskt anskaffa norske pass</td></tr>
              <tr><td><strong>Konsekvens</strong></td><td>Diplomatiske spenningar</td></tr>
              <tr><td><strong>Kjelde</strong></td><td>Dan Raviv &amp; Yossi Melman, &quot;Every Spy a Prince&quot; (1990)</td></tr>
            </tbody>
          </table>
        </div>

        {/* CASE 3: DUBAI 2010 */}
        <div className="case-box">
          <div className="case-header">Sak 3: Dubai-passskandalen (2010)</div>
          <table>
            <tbody>
              <tr><td><strong>Dato</strong></td><td>19. januar 2010</td></tr>
              <tr><td><strong>Relatert hending</strong></td><td>Likvideringa av Mahmoud al-Mabhouh (Hamas) i Dubai</td></tr>
              <tr><td><strong>Norsk involvering</strong></td><td>Norske pass blant 26+ forfalska dokument brukt av attentatlaget</td></tr>
              <tr><td><strong>Utanriksminister</strong></td><td>Jonas Gahr Støre</td></tr>
              <tr><td><strong>Tiltak</strong></td><td>Ambassadør innkalla, formell protest, diplomat utvisa</td></tr>
              <tr><td><strong>Utvisa diplomat</strong></td><td>Naim Butros (mars 2010)</td></tr>
            </tbody>
          </table>
          <div className="source-ref">Kjelder: NRK, Aftenposten, VG, Dagbladet, offisielle UD-fråsegn</div>
        </div>
      </section>

      <div className="section-break"></div>

      {/* NUCLEAR GENESIS */}
      <section>
        <h2>Del II: Den Nukleære Genesis</h2>
        <div className="divider"></div>
        <p className="intro">Grunnleggande handlinga som etablerte modus operandi: hemmeleghald, selskaps-mellommenn, og viljen til å villeie allierte for å hjelpe Israel.</p>

        <div className="case-box">
          <div className="case-header">Tungtvatn-eksporten (1959)</div>

          <div className="flow-row">
            <div className="flow-entity">
              <div className="flow-circle red-bg">HAUGE</div>
              <div className="flow-label">Jens Chr. Hauge</div>
            </div>
            <span className="arrow">→</span>
            <div className="flow-entity">
              <div className="flow-circle">NORATOM</div>
              <div className="flow-label">Front-selskap</div>
            </div>
            <span className="arrow">→</span>
            <div className="flow-entity">
              <div className="flow-circle outline">UK</div>
              <div className="flow-label">Britisk &quot;tilbakekjøp&quot;</div>
            </div>
            <span className="arrow">→</span>
            <div className="flow-entity">
              <div className="flow-circle dark">DIMONA</div>
              <div className="flow-label">Reaktor</div>
            </div>
          </div>

          <table>
            <tbody>
              <tr><th>År</th><th>Hending</th><th>Bedrag</th></tr>
              <tr><td>1959</td><td>Salsavtale signert — 20 tonn tungtvatn</td><td>&quot;Fredelege føremål&quot;-klausul visste var uhandhevbar</td></tr>
              <tr><td>1961</td><td>Hauge &quot;inspeksjon&quot;</td><td>Besøkte Rehovot, ikkje Dimona. Rapporterte falskt til UD.</td></tr>
              <tr><td>1971</td><td>Forsøk på 3 tonn til</td><td>Kansellert etter intern styrekonflikt — viser pågåande forsøk</td></tr>
              <tr><td>1979</td><td>Offentleg avsløring (Sverre Lodgaard)</td><td>Noreg kjøpte tilbake 10,5 tonn</td></tr>
            </tbody>
          </table>

          <div className="highlight dark">
            <strong>Jens Christian Hauge</strong> — Motstandshelt (Milorg), tidl. forsvarsminister. Opererte som &quot;stat i staten&quot;. Styremedlem og juridisk rådgivar i Noratom. 1961-inspeksjonen er &quot;smoking gun&quot; — han dekka for det israelske forsvarsetablissementet mot sitt eige utanriksdepartement.
          </div>
        </div>

        <div className="case-box">
          <div className="case-header">Operasjon Plumbat (1968)</div>

          <table>
            <tbody>
              <tr><td><strong>Hendelse</strong></td><td>200 tonn yellowcake-uran kapa på havet</td></tr>
              <tr><td><strong>Kjøpar</strong></td><td>Biscayne Trader&apos;s Shipping Corp. (Liberia-registrert front)</td></tr>
              <tr><td><strong>Skip</strong></td><td>Scheersberg A — lasta i Antwerpen, forsvann på veg til Italia</td></tr>
              <tr><td><strong>Dekke</strong></td><td>Tønner merka &quot;PLUMBAT&quot; (bly-produkt)</td></tr>
              <tr><td><strong>Resultat</strong></td><td>Uran overført til israelsk fraktar i Middelhavet → Dimona</td></tr>
              <tr><td><strong>Avsløring</strong></td><td>Dan Ærbel (Lillehammer-arrestasjon) — president i front-selskapet</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="section-break"></div>

      {/* HONEY TRAP / EPSTEIN */}
      <section>
        <h2>Del III: Honey Trap-metoden og Epstein</h2>
        <div className="divider"></div>

        <div className="case-box">
          <div className="case-header">Vanunu-operasjonen (1986) — Malen</div>

          <div className="flow-row">
            <div className="flow-entity">
              <div className="flow-circle red-bg">CINDY</div>
              <div className="flow-label">Cheryl Bentov</div>
            </div>
            <span className="arrow">→</span>
            <div className="flow-person">
              <div className="flow-person-name">Forføring</div>
              <div className="flow-person-role">Leicester Square → Roma</div>
            </div>
            <span className="arrow">→</span>
            <div className="flow-entity">
              <div className="flow-circle dark">VANUNU</div>
              <div className="flow-label">18 år fengsel</div>
            </div>
          </div>

          <div className="highlight">
            <strong>Norsk kopling:</strong> Vanunu gifta seg etter lauslating med Kristin Joachimsen (norsk professor). Noreg innvilga familiegjenforeining — Israel nektar han utreise.
          </div>
        </div>

        <div className="case-box">
          <div className="case-header">Epstein-Mossad-hypotesen</div>

          <div className="highlight dark">
            <strong>Ari Ben-Menashe</strong> (tidl. israelsk militær etterretning): &quot;Eg møtte personleg Jeffrey Epstein og Ghislaine Maxwell på 1980-talet — dei opererte som del av eit israelsk etterretningsnettverk.&quot;
          </div>

          <div className="flow-row">
            <div className="flow-entity">
              <div className="flow-circle dark">R. MAXWELL</div>
              <div className="flow-label">Super-sayanim</div>
            </div>
            <span className="arrow">→</span>
            <div className="flow-entity">
              <div className="flow-circle dark">GHISLAINE</div>
              <div className="flow-label">Dotter, rekrutterar</div>
            </div>
            <span className="arrow">→</span>
            <div className="flow-entity">
              <div className="flow-circle dark">EPSTEIN</div>
              <div className="flow-label">Kompromat-nett</div>
            </div>
            <span className="arrow">→</span>
            <div className="flow-entity">
              <div className="flow-circle red-bg">BARAK</div>
              <div className="flow-label">30+ møte</div>
            </div>
          </div>

          <table>
            <tbody>
              <tr><th>Bevis</th><th>Detalj</th></tr>
              <tr><td><strong>Ehud Barak</strong></td><td>30+ møte med Epstein. Millionar frå Wexner Foundation. Foto: skjulte ansikt ved inngang.</td></tr>
              <tr><td><strong>Infrastruktur</strong></td><td>Kamera i soverom/bad, harddiskar i safe, systematisk dokumentasjon av gjester</td></tr>
              <tr><td><strong>Beskyttelse</strong></td><td>Acosta 2008: &quot;Epstein belonged to intelligence... above my pay grade&quot;</td></tr>
              <tr><td><strong>Robert Maxwell</strong></td><td>Statsbegravelse Jerusalem. Statsminister + etterretningssjefar til stades.</td></tr>
            </tbody>
          </table>
        </div>

        <div className="case-box">
          <div className="case-header">Terje Rød-Larsen og IPI</div>

          <div className="flow-row">
            <div className="flow-entity">
              <div className="flow-circle blue-bg">IPI</div>
              <div className="flow-label">Int&apos;l Peace Institute</div>
            </div>
            <div className="dash-line"></div>
            <div className="flow-person">
              <div className="flow-person-name">Terje Rød-Larsen</div>
              <div className="flow-person-role">President IPI, Oslo-arkitekt</div>
            </div>
            <div className="dash-line"></div>
            <div className="flow-entity">
              <div className="flow-circle dark">EPSTEIN</div>
              <div className="flow-label">Finansiell kopling</div>
            </div>
          </div>

          <table>
            <tbody>
              <tr><th>Transaksjon</th><th>Beløp</th><th>År</th></tr>
              <tr><td>Personleg lån til Rød-Larsen</td><td><strong>$130 000</strong></td><td>2013</td></tr>
              <tr><td>Donasjonar til IPI</td><td><strong>$650 000</strong></td><td>—</td></tr>
              <tr><td>Autorisert betaling til Epstein</td><td>$100 000</td><td>Uklart om gjennomført</td></tr>
            </tbody>
          </table>

          <div className="highlight red">
            <strong>Mona Juul</strong> (FN-ambassadør, Rød-Larsens kone): Rapportar om besøk til Epsteins øy 2010-15. Offisielt frikjent, men — Noregs FN-ambassadør i omløpsbana til påstått etterretnings-knytt menneskesmugler = katastrofal kontraetterretnings-svikt.
          </div>

          <div className="highlight">
            <strong>Riksrevisjonen:</strong> UD hadde &quot;mista kontroll&quot; over IPI-midlar. &quot;For tette kontaktar&quot; og mangel på upartiskheit.
          </div>

          <div className="source-ref">Kjelde: Riksrevisjonen, norske media</div>
        </div>
      </section>

      <div className="section-break"></div>

      {/* SUSPECTS MATRIX */}
      <section>
        <h2>Del IV: Matrise over Mistenkte og Nøkkelaktørar</h2>
        <div className="divider"></div>

        <table>
          <tbody>
            <tr><th>Namn</th><th>Rolle</th><th>Kopling</th><th>Status</th></tr>
            <tr><td><strong>Jens Chr. Hauge</strong></td><td>Tidl. forsvarsmin.</td><td>Tungtvatn via Noratom, falsk inspeksjon</td><td>Aktiv tilretteleggjar</td></tr>
            <tr><td><strong>Terje Rød-Larsen</strong></td><td>Diplomat, IPI</td><td>$130k lån + $650k donasjonar frå Epstein</td><td>Kompromittert?</td></tr>
            <tr><td><strong>Mona Juul</strong></td><td>FN-ambassadør</td><td>Påståtte øy-besøk, kone til Rød-Larsen</td><td>Påverkningsmål</td></tr>
            <tr><td><strong>Dan Ærbel</strong></td><td>Mossad</td><td>Lillehammer + Plumbat front-president</td><td>Stadfesta agent</td></tr>
            <tr><td><strong>Sylvia Rafael</strong></td><td>Mossad</td><td>Lillehammer, PLO-infiltrator, gift Schjødt</td><td>Stadfesta agent</td></tr>
            <tr><td><strong>Mike Harari</strong></td><td>Mossad</td><td>Operasjonskommandør Lillehammer, rømte</td><td>Stadfesta, død 2014</td></tr>
            <tr><td><strong>Jeffrey Epstein</strong></td><td>Finansmann</td><td>Kompromat-nett, Barak, Maxwell</td><td>Påstått asset</td></tr>
            <tr><td><strong>Ghislaine Maxwell</strong></td><td>Sosialitet</td><td>Rekruttering, far = super-sayanim</td><td>Påstått asset, dømt</td></tr>
            <tr><td><strong>Ehud Barak</strong></td><td>Tidl. israelsk PM</td><td>30+ Epstein-møte, Wexner-midlar</td><td>Handler/assosiert</td></tr>
            <tr><td><strong>Karin Linstad</strong></td><td>Aktivist</td><td>Infiltrerte Mossad 1980-t</td><td>Dobbeltagent</td></tr>
            <tr><td><strong>Edvard Tallaksen</strong></td><td>&quot;Agent Kasper&quot;</td><td>Påstått rekruttert for &quot;våte operasjonar&quot;</td><td>Påstand (Tveit 2025)</td></tr>
            <tr><td><strong>Thorbjørn Jagland</strong></td><td>Tidl. PM</td><td>Kontakt med Epstein</td><td>Mål? &quot;Profesjonell&quot;</td></tr>
          </tbody>
        </table>

        <h3>Utvidede Politiske og Økonomiske Nøkkelfigurar</h3>
        <table>
          <tbody>
            <tr><th>Namn</th><th>Rolle</th><th>Kopling</th><th>Betydning</th></tr>
            <tr><td><strong>Stein Erik Hagen</strong></td><td>Milliardær, Canica</td><td>13M NOK donasjonar FrP/H/KrF 24/25</td><td>Politisk garantist</td></tr>
            <tr><td><strong>Per Sævik</strong></td><td>Havila, TV12 20%</td><td>4-6 mrd formue. Kristensionistisk finansiering</td><td>Media + kapital</td></tr>
            <tr><td><strong>Christen Sveaas</strong></td><td>Kistefos, kunstsamlar</td><td>Millionar til KrF. Anti-boikott</td><td>Kulturell kapital</td></tr>
            <tr><td><strong>Jan Hanvold</strong></td><td>Visjon Norge</td><td>100M+ årleg til busettingar/IDF</td><td>Kristen mobilisering</td></tr>
            <tr><td><strong>Øystein S. Spetalen</strong></td><td>Investor</td><td>Lukka møte med ambassadør Gulati 2021</td><td>Elite-tilgang</td></tr>
            <tr><td><strong>Conrad Myrland</strong></td><td>MIFF-leiar</td><td>Top 40 sionist globalt (sosiale medier)</td><td>Opinionsdannelse</td></tr>
            <tr><td><strong>Hans Fr. Grøvan</strong></td><td>Eks-KrF-leiar</td><td>Styre NIHK, tidl. parl.leiar</td><td>Politisk bro</td></tr>
            <tr><td><strong>Dag Inge Ulstein</strong></td><td>KrF-politikar</td><td>Ekstremt pro-Israel. Tidl. utviklingsmin.</td><td>Regjeringsnivå</td></tr>
            <tr><td><strong>Sandra Bruflot</strong></td><td>Høyre, Stortinget</td><td>Leiar Israelsgruppe Stortinget 2025</td><td>Parlamentarisk</td></tr>
            <tr><td><strong>Silje Hjemdal</strong></td><td>FrP, Stortinget</td><td>Med-leiar Israelsgruppe</td><td>Parlamentarisk</td></tr>
            <tr><td><strong>Jakob Hatteland</strong></td><td>AutoStore-gründer</td><td>Vayyar-aksjar via Dele-bytte</td><td>Tech-milliardær</td></tr>
            <tr><td><strong>Jan Erik Mushom</strong></td><td>Investor</td><td>Bur i Israel. 5% Mentor Medier (Vårt Land)</td><td>Media-innflytelse</td></tr>
            <tr><td><strong>Bjarte Ystebø</strong></td><td>2323 Media, Oslo Symposium</td><td>Bindeledd Sævik-FrP-KrF</td><td>Nettverksarkitekt</td></tr>
          </tbody>
        </table>
      </section>

      <div className="section-break"></div>

      {/* PART V: MODERN NETWORK */}
      <section>
        <h2>Del V: Moderne Maktstruktur</h2>
        <div className="divider"></div>
        <p className="intro">Tre samverkande nodar: Kristen kapital → Media | Venture → Teknologi | Donasjonar → Politikk</p>

        <div className="stats">
          <div><div className="stat-val">26M</div><div className="stat-label">MIFF omsetning 2023</div></div>
          <div><div className="stat-val">15k+</div><div className="stat-label">MIFF medlemmer</div></div>
          <div><div className="stat-val">13M</div><div className="stat-label">Hagen-donasjonar 24/25</div></div>
          <div><div className="stat-val">$1mrd</div><div className="stat-label">Vayyar-verdsetting</div></div>
        </div>

        <h3>Militærindustri: Det Norske Våpensmutthullet</h3>
        <div className="case-box">
          <div className="case-header">Nammo: M72 via USA til Gaza</div>

          <table>
            <tbody>
              <tr><th>Faktum</th><th>Detalj</th></tr>
              <tr><td><strong>Eigarskap</strong></td><td>50% norsk stat (via Kongsberg), 50% finsk Patria</td></tr>
              <tr><td><strong>Produksjon</strong></td><td>Nammo Defense Systems Inc., Mesa, Arizona</td></tr>
              <tr><td><strong>Produkt</strong></td><td>M72 LAW (Light Anti-Tank Weapon) + M72 ASM (bunker buster) + M72 FFE (kan skutast innandørs)</td></tr>
              <tr><td><strong>Rute til Israel</strong></td><td>Produsert i Arizona → US Army → FMS (Foreign Military Sales) → IDF</td></tr>
              <tr><td><strong>Dokumentert bruk</strong></td><td>Nammo-logo funne på brukte rakettpakkar i Gaza (foto-bevis 2024)</td></tr>
              <tr><td><strong>Norsk posisjon</strong></td><td>Regjeringa: &quot;Amerikanske våpen&quot; — men Nammo 50% statseid</td></tr>
            </tbody>
          </table>

          <div className="highlight red">
            <strong>Juridisk gråsone:</strong> Noreg forbyr direkte eksport til Israel, men omgår det ved å la det amerikanske dotterselskapet selje til US Army, som gir vidare til IDF. Dette er ein &quot;laundry&quot;-mekanisme som gjev Noreg plausibel benekting.
          </div>
        </div>

        <div className="case-box">
          <div className="case-header">Kongsberg Gruppen: F-35 Adir og Globale Forsyningar</div>

          <table>
            <tbody>
              <tr><th>System</th><th>Norsk komponent</th><th>Israelsk bruk</th></tr>
              <tr><td><strong>F-35 &quot;Adir&quot;</strong></td><td>Haleror (rudder), missilfeste, komposittar</td><td>50 fly levert. Brukt i Syria/Iran-angrep</td></tr>
              <tr><td><strong>NSM/JSM</strong></td><td>Utvikla med Raytheon</td><td>Raytheon = hovudleverandør til IAF</td></tr>
              <tr><td><strong>NASAMS</strong></td><td>Luftvern (utvikla med Raytheon)</td><td>—</td></tr>
            </tbody>
          </table>

          <div className="highlight">
            <strong>Global Pool-problemet:</strong> Kongsberg levererer alle deler til eit sentralt lager (Global Spares Pool) i USA. Det er logistisk umulig at israelske F-35 flyr utan norske deler. Nederland vart dømt i 2024 til å stoppe eksport — same logikk gjeld Noreg.
          </div>
        </div>

        <div className="case-box">
          <div className="case-header">Andre Militærleverandørar</div>

          <table>
            <tbody>
              <tr><th>Selskap</th><th>Produkt</th><th>Israelkopling</th></tr>
              <tr><td><strong>Chemring Nobel</strong></td><td>Eksplosiver (RDX/HMX) frå Gyttorp</td><td>Går inn i Hellfire-missiler (IAF drone/helikopter)</td></tr>
              <tr><td><strong>KTA Naval Systems</strong></td><td>Kampsystem for ubåtar</td><td>Leverer til tyske ThyssenKrupp → Dolphin-klasse ubåtar til Israel (atomvåpenkapable)</td></tr>
              <tr><td><strong>Nordic Ammunition</strong></td><td>Ammunitasjon (eigar: Nammo 50%)</td><td>Samme FMS-rute via USA</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Cyber-Sårbarheit: Israelsk Kontroll over Kritisk Infrastruktur</h3>
        <div className="case-box">
          <div className="case-header">Cellebrite: Digital Etterforsking under Israelsk Kontroll</div>

          <table>
            <tbody>
              <tr><th>Faktum</th><th>Detalj</th></tr>
              <tr><td><strong>Selskap</strong></td><td>Cellebrite (Israel), tidlegare del av japanske Sun Corporation</td></tr>
              <tr><td><strong>Produkt</strong></td><td>UFED (Universal Forensic Extraction Device) — hackar låste mobilar</td></tr>
              <tr><td><strong>Norske brukarar</strong></td><td>Kripos (NC3), Politiets Fellestjenester, Tolletaten</td></tr>
              <tr><td><strong>Etterretningsrotar</strong></td><td>Grunnleggjarar har bakgrunn frå Unit 8200 (israelsk cyber-etterretning)</td></tr>
              <tr><td><strong>Risiko</strong></td><td>Tilgang til alle norske etterforskningsmobiltelefoner — potensiale for bakdørar</td></tr>
            </tbody>
          </table>

          <div className="highlight red">
            <strong>Unit 8200-ekosystemet:</strong> Hundrevis av israelske cybersikkerheitsselskap er grunnlagde av veteranar frå Unit 8200 (israelsk NSA). Cellebrite, Check Point, CyberArk, Wiz, Snyk — alle har 8200-DNA. Noreg har gjort seg strategisk avhengig av israelske &quot;alumni&quot; for nasjonal sikkerheit.
          </div>
        </div>

        <div className="case-box">
          <div className="case-header">Check Point: Helsedata for 3 Millionar Nordmenn</div>

          <table>
            <tbody>
              <tr><th>Kunde</th><th>System</th><th>Datatype</th></tr>
              <tr><td><strong>Helse Sør-Øst</strong></td><td>Check Point Firewall/VPN</td><td>Pasientjournal for 3M nordmenn</td></tr>
              <tr><td><strong>Oslo Kommune</strong></td><td>Check Point Quantum</td><td>Innbyggardata, sosial/helse</td></tr>
              <tr><td><strong>Forsvarssektoren</strong></td><td>Quantum Security Gateway</td><td>—</td></tr>
            </tbody>
          </table>

          <div className="highlight">
            <strong>Grunnleggar Gil Shwed:</strong> Tidlegare Unit 8200. Check Point er ein av verdas største sikkerheitsleverandørar, men også eit potensielt &quot;single point of compromise&quot; for norske helsedata. NSM (Nasjonal Sikkerheitsmyndighet) har ikkje klassifisert Check Point som høgrisiko-leverandør.
          </div>
        </div>

        <div className="case-box">
          <div className="case-header">Ytterlegare Israelsk Cyber-Penetrasjon</div>

          <table>
            <tbody>
              <tr><th>Selskap</th><th>Produkt</th><th>Norske brukarar</th><th>Unit 8200?</th></tr>
              <tr><td><strong>CyberArk</strong></td><td>Privileged Access Management</td><td>Fleire statsselskap, kommunar</td><td>Ja</td></tr>
              <tr><td><strong>Radiflow</strong></td><td>ICS/SCADA-sikkerheit (kraftverk)</td><td>Energi Noreg (påstått)</td><td>Ja</td></tr>
              <tr><td><strong>Armis</strong></td><td>IoT-sikkerheit</td><td>Ukjend</td><td>Ja</td></tr>
              <tr><td><strong>SentinelOne</strong></td><td>Endpoint Detection</td><td>Ukjend</td><td>Ja</td></tr>
            </tbody>
          </table>

          <div className="source-ref">Kjelder: Offentlege anbodsdata, leverandørlistar HSØ, Israeli Tech Scene dokumentasjon</div>
        </div>

        <h3>Havbruk: Norsk Laks, Israelsk Teknologi</h3>
        <div className="case-box">
          <div className="case-header">AquaMaof: Frå Leverandør til Eigar</div>

          <div className="flow-row">
            <div className="flow-entity">
              <div className="flow-circle dark">AQUAMAOF</div>
              <div className="flow-label">Israelsk RAS-gigant</div>
            </div>
            <span className="arrow">→</span>
            <div className="flow-person">
              <div className="flow-person-name">Eigarskap</div>
              <div className="flow-person-role">Kvidul, Smart Salmon</div>
            </div>
            <span className="arrow">→</span>
            <div className="flow-entity">
              <div className="flow-circle blue-bg">NORSK</div>
              <div className="flow-label">Landbasert oppdrett</div>
            </div>
          </div>

          <table>
            <tbody>
              <tr><th>Prosjekt</th><th>AquaMaof-rolle</th><th>Status</th></tr>
              <tr><td><strong>Smart Salmon AS</strong></td><td>Teknologipartnar + eigarskap</td><td>Utsetjing i drift 2023</td></tr>
              <tr><td><strong>Kvidul Settefisk</strong></td><td>RAS-system + eigarskap</td><td>I drift</td></tr>
              <tr><td><strong>Bluehouse Salmon</strong></td><td>RAS-leverandør</td><td>Planlegging</td></tr>
            </tbody>
          </table>

          <div className="highlight">
            <strong>Strategisk kontroll:</strong> AquaMaof er ikkje berre ein leverandør, men eigar seg inn i norsk havbruk. Dei kontrollerer teknologien som avgjer overleving/vekst. Dette skapar teknologisk avhengigheit der norske selskap blir &quot;franchise-takarar&quot; av israelsk IP.
          </div>
        </div>

        <div className="case-box">
          <div className="case-header">Israel Corporation → AKVA Group</div>

          <table>
            <tbody>
              <tr><th>Faktum</th><th>Detalj</th></tr>
              <tr><td><strong>Israel Corporation</strong></td><td>Israelsk konglomerat (kjemi, energi, shippning)</td></tr>
              <tr><td><strong>Eigarskap i AKVA</strong></td><td>~18% (gjentekne oppkjøp 2019-2023)</td></tr>
              <tr><td><strong>AKVA Group</strong></td><td>Norsk havbruksteknologi-gigant (merdar, fôringssystem, software)</td></tr>
              <tr><td><strong>Strategisk vinkel</strong></td><td>Israel Corp får tilgang til norsk havbrukskunnskap + globalt sal</td></tr>
            </tbody>
          </table>
        </div>

        <h3>TV12 Norge Holding AS — Eigarskap</h3>
        <div className="network-grid three">
          <div className="node">
            <div className="node-circle lg purple">SÆVIK</div>
            <div className="node-name">Per Sævik</div>
            <div className="node-role">20% | Havila 4-6mrd | &quot;Haugianer&quot;</div>
          </div>
          <div className="node">
            <div className="node-circle lg purple">HÅTVEIT</div>
            <div className="node-name">Arne Håtveit</div>
            <div className="node-role">20% | Hermon Høyfjellssenter</div>
          </div>
          <div className="node">
            <div className="node-circle lg purple">URHAUG</div>
            <div className="node-name">Kurt Urhaug</div>
            <div className="node-role">20% | Bladet Evangelisten</div>
          </div>
        </div>

        <div className="highlight">
          <strong>Per Sævik = Noregs &quot;Sheldon Adelson&quot;:</strong> Kombinerer kapitalmakt med ideologisk agenda. Selverklært &quot;haugianer&quot; som bruker formuen strategisk for pro-israelske og verdikonservative saker.
        </div>

        <h3>Kristen medie- og finanselite</h3>
        <table>
          <tbody>
            <tr><th>Namn</th><th>Rolle</th><th>Kopling</th></tr>
            <tr><td><strong>Jan Hanvold</strong></td><td>Visjon Norge</td><td>100+ mill årleg → busetjingar/IDF. &quot;Peters velsigning&quot;.</td></tr>
            <tr><td><strong>Bjarte Ystebø</strong></td><td>2323 Media, Oslo Symposium</td><td>Navet: bind Sævik-FrP-KrF-IKAJ</td></tr>
            <tr><td><strong>Jan Erik Mushom</strong></td><td>Mushom Invest</td><td>Gjort Aliyah, bur i Israel. 5% Mentor Medier (Vårt Land)</td></tr>
            <tr><td><strong>Dag Ø. Juliussen</strong></td><td>IKAJ-leiar</td><td>100% innsamlingsprosent. Bomberom, Aliyah.</td></tr>
          </tbody>
        </table>

        <h3>Statens Pensjonsfond Utland (Oljefondet): 220 Milliardar i Israel</h3>
        <div className="case-box">
          <div className="case-header">Norges Største Finansielle Binding til Israel</div>

          <table>
            <tbody>
              <tr><th>Faktum</th><th>Detalj</th></tr>
              <tr><td><strong>Total investering</strong></td><td>~220 milliardar NOK (per 2024)</td></tr>
              <tr><td><strong>Antal selskap</strong></td><td>~150+ israelske selskap på Tel Aviv-børsen + private</td></tr>
              <tr><td><strong>Toppinvesteringar</strong></td><td>Teva Pharmaceutical, Bank Leumi, Bank Hapoalim, Elbit Systems, Israel Aerospace Industries</td></tr>
              <tr><td><strong>Etisk dilemma</strong></td><td>Elbit Systems = hovudleverandør av dronar/overvaking til Vestbreidda. Ekskludert frå svenske AP7.</td></tr>
              <tr><td><strong>Norges Bank IM</strong></td><td>Avviser press om utestenging: &quot;Følg OECD-retningslinjer, ikkje politikk&quot;</td></tr>
            </tbody>
          </table>

          <div className="highlight red">
            <strong>Elbit Systems (ca. 2-3 mrd NOK investert):</strong> Lagar dronar (Hermes), overvakingstårn og AI-målsystem brukt mot palestinarar. Oljefondet eig 0,5-1% av selskapet. Dette er direkte investering i okkupasjonsinfrastruktur.
          </div>

          <div className="highlight">
            <strong>Bank Hapoalim:</strong> Finansierer busettingar på Vestbreidda. Oljefondet har 10+ mrd NOK i israelske bankar som bryt internasjonell rett. FN-liste 2020 inkluderte Bank Hapoalim — Noreg fortsette å investere.
          </div>
        </div>

        <h3>Venture-kapital → Israelsk teknologi</h3>
        <div className="flow-row">
          <div className="flow-entity">
            <div className="flow-circle">MOM</div>
            <div className="flow-label">Momentum Partners</div>
          </div>
          <span className="arrow">→</span>
          <div className="flow-person">
            <div className="flow-person-name">Dele → Vayyar</div>
            <div className="flow-person-role">Aksjebytte 2023</div>
          </div>
          <span className="arrow">→</span>
          <div className="flow-entity">
            <div className="flow-circle dark">VAYYAR</div>
            <div className="flow-label">$1mrd dual-use radar</div>
          </div>
        </div>

        <table>
          <tbody>
            <tr><th>Aktør</th><th>Type</th><th>Kopling</th></tr>
            <tr><td><strong>Investinor</strong></td><td>Statleg VC</td><td>Medeigar Vayyar gjennom Dele-transaksjon</td></tr>
            <tr><td><strong>Jakob Hatteland</strong></td><td>AutoStore-gründer</td><td>Vayyar-aksjar etter Dele-bytte</td></tr>
            <tr><td><strong>Snö Ventures</strong></td><td>Oslo VC</td><td>Peter Thiel investor. Palantir → IDF.</td></tr>
            <tr><td><strong>Alliance Ventures</strong></td><td>Auto-VC</td><td>Upstream Security, Otonomo. Lab Tel Aviv.</td></tr>
            <tr><td><strong>Equinor 80%</strong></td><td>Stat/energi</td><td>Rosebank → Ithaca → Delek Group (FN-liste)</td></tr>
            <tr><td><strong>Aker BioMarine</strong></td><td>Røkke</td><td>Enzymotec $26,4M IP-kjøp 2018</td></tr>
            <tr><td><strong>Nammo</strong></td><td>Forsvar</td><td>Rakettmotorar Sidewinder/AMRAAM til IAF. M72 funne i Gaza.</td></tr>
          </tbody>
        </table>

        <h3>Politiske donasjonar</h3>
        <div className="highlight">
          <strong>Stein Erik Hagen 2024/25:</strong> 7M FrP + 5M Høyre + 1M KrF = <strong>13 mill</strong> til høgresida. &quot;Livblod&quot; for Israel-forsvarar-partia.
        </div>

        <table>
          <tbody>
            <tr><th>Donator</th><th>Beløp</th><th>Mottakar</th><th>Strategisk effekt</th></tr>
            <tr><td><strong>Stein Erik Hagen</strong></td><td>13 mill</td><td>FrP, H, KrF</td><td>Politisk garantist</td></tr>
            <tr><td><strong>Christen Sveaas</strong></td><td>2 mill (2025)</td><td>KrF</td><td>Borgarleg kapital</td></tr>
            <tr><td><strong>Olav Thon</strong></td><td>5 mill (2024)</td><td>DMT</td><td>Jødisk samfunn</td></tr>
            <tr><td><strong>Ø.S. Spetalen</strong></td><td>—</td><td>Lukka møte 2021</td><td>Ambassadør-tilgang (Gulati)</td></tr>
          </tbody>
        </table>

        <h3>Stortingets Israelgruppe (2025)</h3>
        <div className="network-grid">
          <div className="node">
            <div className="node-circle blue">SB</div>
            <div className="node-name">Sandra Bruflot</div>
            <div className="node-role">Leiar | Høyre</div>
          </div>
          <div className="node">
            <div className="node-circle blue">SH</div>
            <div className="node-name">Silje Hjemdal</div>
            <div className="node-role">Med-leiar | FrP</div>
          </div>
          <div className="node">
            <div className="node-circle blue">IS</div>
            <div className="node-name">Ingjerd Schou</div>
            <div className="node-role">Tidl. leiar | Høyre</div>
          </div>
          <div className="node">
            <div className="node-circle blue">KR</div>
            <div className="node-name">K.I. Ropstad</div>
            <div className="node-role">Medlem | KrF</div>
          </div>
        </div>
      </section>

      <div className="section-break"></div>

      {/* NIHK */}
      <section>
        <h2>Del VI: Institusjonelt Skjelett</h2>
        <div className="divider"></div>

        <h3>Norsk-Israelsk Handelskammer (NIHK)</h3>
        <p className="intro">&quot;Black box&quot; for næringslivskontakt. Administrert via Norsk-Tysk Handelskammer Services AS — gir tilgang til profesjonelt europeisk nettverk.</p>

        <table>
          <tbody>
            <tr><th>Styre</th><th>Bakgrunn</th><th>Strategisk rolle</th></tr>
            <tr><td><strong>Hans Fredrik Grøvan</strong></td><td>Tidl. KrF parl.leiar</td><td>Politisk linje inn til Stortinget</td></tr>
            <tr><td><strong>Øyvind Bernatek</strong></td><td>Styreleiar HJH</td><td>Humanitær-business bru</td></tr>
            <tr><td><strong>Martin Bodd</strong></td><td>Investor, 203M formue</td><td>Privat kapital</td></tr>
            <tr><td><strong>Josef Filtvedt</strong></td><td>Handelsfremjar</td><td>Langvarig engasjement</td></tr>
            <tr><td><strong>Michael Kern</strong></td><td>Adm.dir (også Tysk HK)</td><td>Profesjonalisering</td></tr>
            <tr><td><strong>Robert Henden</strong></td><td>Dagleg leiar services</td><td>Administrativ kapasitet</td></tr>
          </tbody>
        </table>

        <h3>Sivilsamfunn: Ideologisk motor</h3>
        <div className="network-grid">
          <div className="node">
            <div className="node-circle lg purple">MIFF</div>
            <div className="node-name">Med Israel for Fred</div>
            <div className="node-role">26M | 15k+ | Myrland &quot;Top 40&quot;</div>
          </div>
          <div className="node">
            <div className="node-circle lg purple">HJH</div>
            <div className="node-name">Hjelp Jødene Hjem</div>
            <div className="node-role">Aliyah-støtte</div>
          </div>
          <div className="node">
            <div className="node-circle lg purple">IKAJ</div>
            <div className="node-name">Kr. Ambassade Jerusalem</div>
            <div className="node-role">Juliussen | 100%</div>
          </div>
          <div className="node">
            <div className="node-circle lg purple">VINA</div>
            <div className="node-name">Venner i Arb.bev.</div>
            <div className="node-role">Jespersen | LO-motvekt</div>
          </div>
        </div>

        <div className="highlight">
          <strong>MIFF-vekst:</strong> Medlemstalet eksploderte etter 7. oktober 2023. Conrad Myrland kåra til &quot;Top 40&quot; mest innflytelsesrike sionistar på sosiale medier. Ekspandert til Sverige, Danmark, Island.
        </div>
      </section>

      <div className="section-break"></div>

      {/* MARITIME + ACADEMIC */}
      <section>
        <h2>Del VII: Infrastruktur</h2>
        <div className="divider"></div>

        <h3>Maritim livslinje</h3>
        <div className="network-grid two">
          <div className="node">
            <div className="node-circle lg orange">WW</div>
            <div className="node-name">Wallenius Wilhelmsen</div>
            <div className="node-role">Haifa + Ashdod | Gold Line agent</div>
          </div>
          <div className="node">
            <div className="node-circle lg orange">HØ</div>
            <div className="node-name">Höegh Autoliners</div>
            <div className="node-role">Leif O. Høegh | Aurora Class</div>
          </div>
        </div>

        <h3>Akademia: 54 EU-prosjekt (Horisont Europa)</h3>
        <p className="intro">Norske universitet er djupt integrerte i israelske forskingsnettverk. Total EU-finansiering 2021-2025 er estimert til €300M+ på tvers av 54 prosjekt.</p>

        <table>
          <tbody>
            <tr><th>Prosjekt</th><th>Norsk</th><th>Israelsk</th><th>Tema</th><th>Budsjett</th></tr>
            <tr><td>NEMECYS</td><td>SINTEF (leiar)</td><td>IBM Israel</td><td>Helseteknologi</td><td>4,2M EUR</td></tr>
            <tr><td>DARWIN</td><td>NORCE (leiar)</td><td>Hebrew Univ.</td><td>Berekraftig mat</td><td>5M EUR</td></tr>
            <tr><td>SUMO</td><td>OUS</td><td>Tel Aviv Univ.</td><td>Organoider</td><td>3,4M EUR</td></tr>
            <tr><td>EUREMAP</td><td>UiT</td><td>Tel Aviv Univ.</td><td>Marin bioprosj.</td><td>5M EUR</td></tr>
            <tr><td>FALCO</td><td>UiB (partner)</td><td>2 israelske</td><td>Forsvarsteknologi</td><td>Omstridd</td></tr>
            <tr><td>AURORA</td><td>UiO</td><td>Weizmann Institute</td><td>AI/Machine Learning</td><td>3M EUR</td></tr>
            <tr><td>AQUAEXCEL3.0</td><td>NIFES/HI</td><td>Israel Oceanographic</td><td>Havbruksforsking</td><td>8M EUR</td></tr>
          </tbody>
        </table>

        <div className="highlight blue">
          <strong>NTNU:</strong> Episenter for debatten. Ingen nye institusjonelle avtalar, men eksisterande samarbeid held fram. Kongsberg-kopling vurdert frose. Studentar og tilsette protesterer.
        </div>

        <div className="highlight">
          <strong>Dual-use dilemma:</strong> Fleire prosjekt involverer teknologi som kan brukast både sivilt og militært. FALCO-prosjektet ved UiB inkluderte eksplisitt forsvarsteknologi og vart møtt med kritikk frå akademiske fagforeiningar.
        </div>

        <h3>Bilaterale Forskingsavtalar</h3>
        <table>
          <tbody>
            <tr><th>Norsk institusjon</th><th>Israelsk partner</th><th>Område</th><th>Status</th></tr>
            <tr><td><strong>Universitetet i Oslo</strong></td><td>Hebrew University</td><td>Medisin, samfunnsvit.</td><td>Aktiv</td></tr>
            <tr><td><strong>Universitetet i Bergen</strong></td><td>Technion, Weizmann</td><td>Klima, energi</td><td>Aktiv</td></tr>
            <tr><td><strong>NTNU</strong></td><td>Technion</td><td>Ingeniørfag, cybersec.</td><td>Frose (student-press)</td></tr>
            <tr><td><strong>SINTEF</strong></td><td>Rafael, IAI, Elbit</td><td>Material, sensor-tek.</td><td>Delvis konfidensielt</td></tr>
            <tr><td><strong>Norges Fiskerihøgskole</strong></td><td>Israel Oceanographic</td><td>Akvakultur</td><td>Aktiv</td></tr>
          </tbody>
        </table>

        <div className="highlight red">
          <strong>SINTEF-Rafael kopling:</strong> SINTEF har hatt samarbeid med Rafael Advanced Defense Systems, ein hovudleverandør av våpen til IDF (Iron Dome, Spike-missiler). Dette er sensitivt då SINTEF er 100% statseid forskingsinstitusjon.
        </div>
      </section>

      <div className="section-break"></div>

      {/* TIMELINE */}
      <section>
        <h2>Del VIII: Tidslinje 1959–2025</h2>
        <div className="divider"></div>

        <div className="timeline-item">
          <div className="t-year">1959</div>
          <div className="t-content"><div className="t-title">Tungtvatn-sal</div><div className="t-desc">20 tonn via Noratom → Dimona. Hauge arkitekt. &quot;Fredelege føremål&quot;-dekkje.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">1961</div>
          <div className="t-content"><div className="t-title">Falsk inspeksjon</div><div className="t-desc">Hauge besøker Rehovot, ikkje Dimona. Rapporterer falskt til UD.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">1968</div>
          <div className="t-content"><div className="t-title">Operasjon Plumbat</div><div className="t-desc">200 tonn uran kapa. Scheersberg A. Ærbel = front-president.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">1973</div>
          <div className="t-content"><div className="t-title">Lillehammer-aksjonen</div><div className="t-desc">Ahmed Bouchikhi drepen. 6 agentar dømt. Harari rømte. NOU 2000:6.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">1986</div>
          <div className="t-content"><div className="t-title">Vanunu honey trap</div><div className="t-desc">&quot;Cindy&quot; lokka atomvarslaren til Rom. 18 år fengsel. Norsk kone etter lauslating.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">1987</div>
          <div className="t-content"><div className="t-title">Passforfalskingar</div><div className="t-desc">Norske styresmakter avdekkar israelsk bruk av falske norske pass.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">2010</div>
          <div className="t-content"><div className="t-title">Dubai-skandalen</div><div className="t-desc">Norske pass brukt i al-Mabhouh-attentat. Naim Butros utvisa.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">2013</div>
          <div className="t-content"><div className="t-title">Rød-Larsen/Epstein</div><div className="t-desc">$130k personleg lån. $650k IPI-donasjonar.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">2018</div>
          <div className="t-content"><div className="t-title">Aker-Enzymotec</div><div className="t-desc">Røkke kjøper krillolje-IP $26,4M.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">2019</div>
          <div className="t-content"><div className="t-title">Israel Corp → AKVA Group</div><div className="t-desc">Israelske Israel Corporation startar oppkjøp av aksjar i AKVA (når ~18% 2023).</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">2020</div>
          <div className="t-content"><div className="t-title">FN-liste busettingsselskap</div><div className="t-desc">FN publiserer liste over selskap i busettingar. Inkluderer Bank Hapoalim, Delek. Oljefondet fortsett å investere.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">2021</div>
          <div className="t-content"><div className="t-title">Spetalen-Gulati møte</div><div className="t-desc">Investor Øystein S. Spetalen arrangerer lukka møte med israelsk ambassadør Gulati.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">2022</div>
          <div className="t-content"><div className="t-title">SINTEF-Rafael samarbeid avslørt</div><div className="t-desc">Media avdekkar at statseigde SINTEF har samarbeid med Rafael Defense Systems.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">2023</div>
          <div className="t-content"><div className="t-title">Vayyar-bytte</div><div className="t-desc">Dele → Vayyar. Statleg/privat kapital inn i dual-use radar.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">2024</div>
          <div className="t-content"><div className="t-title">MIFF 15k+ / Hagen 13M</div><div className="t-desc">Eksplosiv medlemsvekst. Rekorddonasjonar til høgresida.</div></div>
        </div>
        <div className="timeline-item">
          <div className="t-year">2024</div>
          <div className="t-content"><div className="t-title">Nammo M72 i Gaza</div><div className="t-desc">Foto-bevis: Nammo-logo på brukte rakettar i Gaza. Norsk regjering: &quot;amerikanske våpen&quot;.</div></div>
        </div>
        <div className="timeline-item" style={{borderBottom: 'none'}}>
          <div className="t-year">2025</div>
          <div className="t-content"><div className="t-title">Tveit: &quot;I Mossads blodspor&quot;</div><div className="t-desc">Ny bok dokumenterer &quot;Agent Kasper&quot; Tallaksen og norsk rekruttering til våte operasjonar.</div></div>
        </div>
      </section>

      <div className="section-break"></div>

      {/* SOURCES */}
      <section>
        <h2>Del IX: Kjelder og Dokumentasjon</h2>
        <div className="divider"></div>

        <h3>Offisielle norske kjelder</h3>
        <table>
          <tbody>
            <tr><th>Type</th><th>Referanse</th><th>URL</th></tr>
            <tr><td>NOU</td><td>NOU 2000:6 &quot;Lillehammer-saken&quot;</td><td>regjeringen.no</td></tr>
            <tr><td>Trugsmålsvurderingar</td><td>PST årlege rapportar</td><td>pst.no</td></tr>
            <tr><td>Tilsyn</td><td>EOS-utvalget årsmeldingar</td><td>eos-utvalget.no</td></tr>
            <tr><td>Revisjon</td><td>Riksrevisjonen (IPI-saka)</td><td>riksrevisjonen.no</td></tr>
          </tbody>
        </table>

        <h3>Autoritative sekundærkjelder</h3>
        <table>
          <tbody>
            <tr><th>Bok</th><th>Forfattar</th><th>År</th></tr>
            <tr><td>Every Spy a Prince</td><td>Dan Raviv, Yossi Melman</td><td>1990</td></tr>
            <tr><td>Rise and Kill First</td><td>Ronen Bergman</td><td>2018</td></tr>
            <tr><td>Spies Against Armageddon</td><td>Dan Raviv, Yossi Melman</td><td>2012</td></tr>
            <tr><td>I Mossads blodspor</td><td>Odd Karsten Tveit</td><td>2025</td></tr>
          </tbody>
        </table>

        <h3>Media</h3>
        <p style={{fontSize: '0.7rem', color: 'var(--text-mid)'}}>NRK, TV2, Aftenposten, VG, Dagbladet, BBC, The Guardian</p>
      </section>

      <div className="section-break"></div>

      {/* CONCLUSION */}
      <section>
        <h2>Konklusjon: 65 År Kontinuitet</h2>
        <div className="divider"></div>

        <p className="intro">Frå tungtvassala i 1959 til Epstein-Rød-Larsen i 2013 — same modus operandi: hemmeleghald, mellommenn, kompromittering.</p>

        <div className="highlight dark">
          <strong>Historisk kontinuitet:</strong> Direkte linje frå Hauges bedrag til Rød-Larsen-uklarheitene. I begge tidsepokar omgjekk sentrale norske portvaktarar standard tilsyn for å tene israelske interesser.
        </div>

        <div className="highlight">
          <strong>Strukturell integrasjon:</strong> Teknologisk avhengigheit (Vayyar, Aker) + infrastrukturell integrasjon (Equinor-Delek, rederi-anløp) + ideologisk mobilisering (MIFF, VINA, kristne org.) = systemisk låsing.
        </div>

        <p style={{textAlign: 'center', fontSize: '0.75rem', marginTop: '15px', color: 'var(--text-mid)'}}>
          Tidlegare saker er ikkje historie — dei er presedens.<br />
          Frå tungtvassfata i 1959 til flight logs på Lolita Express: skuggekrigen held fram.
        </p>
      </section>

      <footer>
        Kartlegging basert på opne kjelder | 1959–2025<br />
        NOU 2000:6 | Riksrevisjonen | PST | EOS-utvalget | I Mossads blodspor (2025) | Ben-Menashe vitnemål | Horisont Europa
      </footer>
    </>
  );
}
