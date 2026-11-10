# Bonus & Lønn

En enkel norsk iPhone-vennlig PWA. Ren HTML, CSS og JavaScript, uten byggsteg, eksterne biblioteker eller analyseverktøy.

## Bruk
Åpne nettsiden i Safari, velg **Del → Legg til på Hjem-skjermen**, og åpne ikonet. Legg inn egne tall i tre korte steg. Safari og hjemskjerm-appen kan bruke ulik lagring; fyll helst inn tallene etter installasjon.

- Hjem: overslag på første bonusår og måloppnåelse.
- Mål: opptil åtte vektede mål. Loggen endrer ikke målene automatisk.
- Logg: dokumenter resultater, sveip mot venstre eller trykk Slett.
- Lønn: historiske markedsreferanser og kopierbar oppsummering.
- Innstillinger: endre tall, eksporter/importer JSON og slett lokale data.

Data lagres bare i localStorage på enheten for denne nettadressen. Ingen automatisk synkronisering, skybackup, innlogging eller serverdatabase. Ta jevnlig sikkerhetskopi; nettleseren kan slette lokale data. Eksportfilen inneholder private tall. GitHub Pages leverer de offentlige appfilene og kan behandle vanlig tilgangsinformasjon. Ikke legg eksportfiler i dette repoet.

## Beregninger
Dette er en kalkulator, ikke bekreftede bonusvilkår, personlig skatterådgivning eller garanti for utbetaling. Bonusåret og kurven må bekreftes med HR.

Første bonusår avkortes til hele måneder i arbeid. Starter du midt i en måned, teller første hele måned etter start. Appen viser første bonusår og ruller ikke automatisk til neste år. Ingen automatisk ekstrapolering av resultat hittil.

Ved oppgitt terskel: 0 under terskel, 50 % ved terskel, lineært til 100 % ved mål. Uten terskel brukes resultat/mål under mål. Ved oppgitt tak: lineært fra 100 % ved mål til 150 % ved tak; uten tak brukes resultat/mål, begrenset til 150 %. Alle mål må være «høyere er bedre». Vektet utbetaling summeres uten normalisering; overslaget skjules på Hjem hvis vektene ikke blir 100 %. Netto er brutto × (1 − oppgitt marginalskatt).

Historiske referanser: SSB tabell 11418 yrke 2433 (2025), NITO lønnskalkulator salg/marked (2025), NITO privat 5–9 år etter eksamen per 1.10.2025. Tallene er manuelt innlagt og oppdateres ikke automatisk. Detaljert utvalg og sammenligningsgrunnlag vises i appen. NITO er ikke koblet til medlemskonto.

## Utvikling og publisering
Kjør `python3 -m http.server 8080` i mappen og åpne localhost:8080. HTTPS eller localhost er nødvendig for service worker og utklippstavle. Ved endringer i appskallet, oppdater cache-versjonen i `sw.js`.

GitHub Pages: main branch, root. Alle stier er relative og fungerer under en prosjektsti. Ingen personlige standardlønninger, navn eller arbeidsgiverdata ligger i appkoden.
