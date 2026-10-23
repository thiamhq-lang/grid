# Gridda Korven

Lägg hela `grid/` i samma repo som förra lektionen. Behåll den gamla versionen bredvid.
Spara eller committa en eventuell äldre grid-mapp innan du ersätter den.
Öppna `grid/index.html` i Chrome och redigera `grid/index.html` och `grid/style.css` i VS Code.

Starten har förra lektionens grundutseende och Flexbox-layout, plus komplett HTML för nio nya korvkort.
Bilderna ligger i `assets/` och fungerar utan internet. Kortens styling och Grid skriver du själv.
Ingen installation eller kodagent behövs för uppgiften.

Målbild: [Figma – grid-meny](https://www.figma.com/design/hJHWKh4AG4DWiJoIpLRsU9/?node-id=301-58).
Layouten på stor skärm är grunduppgiften. Mobilanpassning är bonus.

## 1. Gör huvudpanelerna till syskon

`.card` används för header, Extra, korvmenyn, Dryck och footer.
`.dish-card` är ett enskilt korvkort. De har olika föräldrar och olika uppgifter.

Flytta upp de tre panelerna i `.menu-middle` så att alla fem `.card` är direkta barn till `.menu-wrapper`.
Ta bort den tomma wrappern och CSS-regler som bara gäller den.

## 2. Lös yttergriden

- Ge `.menu-wrapper` sex lika kolumner och mellanrum, med Figma som stöd.
- Header och footer täcker hela bredden. Extra får en kolumn, menyn fyra och Dryck en.
- Behåll Flexbox där det passar för innehållet i header och footer.
- Visa Grid-overlay i DevTools. Peka ut föräldern och dess fem barn.

## 3. Bygg korvmenyn

- Ge `.dish-grid` ett eget Grid med fyra lika kolumner.
- Placera Igelkotten (`.featured`) i kolumn 2–3 och rad 1–2.
- De andra korten ska hamna som i Figma. HTML-ordningen är redan förberedd.
- Använd Flexbox i `.dish-card`, `.dish-copy`, `.dish-heading` och `.dish-label` där det behövs.
- Lägg namn och pris på samma rad och beskrivningen under. Premium hör till Igelkotten.
- Skriv CSS för avstånd, typografi och bilder utifrån designen. Vanliga bilder är 3:2.
- Highlight-bilden fyller sin större kortyta utan förvrängning. Jämför `object-fit: cover` och `contain`.

Figma återanvänder Bratwurst-bilden i Chorizo-kortet. Starten följer den bildplaceringen.

## Kontrollera grunduppgiften

- Fem huvudpaneler i yttergriden och nio korvar i det inre Gridet.
- Igelkotten i mitten över två kolumner och två rader.
- Namn, pris, Premium och beskrivningar är läsbara utan överlapp.
- Bilder laddas och korvarna är inte förvrängda.
- Visa båda griden i DevTools och förklara var Flexbox används.
- Jämför vid 1280 och 1440 px. Prova också större fönster.

Spara → kontrollera i Chrome → granska Changes i GitHub Desktop → commit → Push origin.
GitHub-hjälp finns i lektion 2 och projektets tidigare README.

## Bonus: smalare fönster

Använd media queries och samma HTML. Förslag:

| Bredd | Huvudpaneler | Korvkort | Igelkotten |
| --- | --- | --- | --- |
| Under 700 px | Staplade | En kolumn | Vanlig placering |
| 700–1199 px | Staplade | Två kolumner | Hela raden, ingen bestämd rad |
| Från 1200 px | Sex spår, meny över fyra | Fyra kolumner | Kolumn 2–3, rad 1–2 |

Återställ både `grid-column` och `grid-row` för highlighten, och huvudpanelernas span på smal skärm.
Låt header och footer byta flexriktning när det behövs. Återställ highlight-bildens proportioner
när kortet inte längre täcker två rader.
Testa 375, 699, 700, 768, 1199, 1200, 1280 och 1440 px. Dra också mellan bredderna.
Ingen horisontell scroll eller förvrängda bilder.

## Om något strular

- Ingen ändring syns: kontrollera att du redigerar `grid/style.css`, sparar och öppnar rätt HTML-fil.
- Saknad bild: hela `assets/` måste följa med. Behåll relativa sökvägar.
- Grid placerar bara tre barn: kontrollera om `.menu-middle` fortfarande omsluter panelerna.
- För bred sida: undersök gamla flexbredder, fasta mått och placeringar som inte återställts.
