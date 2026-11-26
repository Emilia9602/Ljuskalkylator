Ljuskalkylator

Projektbeskrivning

Ljuskalkylatorn är en webbapplikation för att skapa, beräkna och hantera recept för egentillverkade ljus. Applikationen ska samla recept, material och kostnadsberäkningar på ett ställe för att göra det enklare att utveckla nya recept och få bättre kontroll över materialåtgång och tillverkningskostnader. 

Applikationen är i första hand avsedd för personligt bruk och ska kunna hantera både recept med och utan doft.

1. Funktionella krav

1.1 Översikt

Applikationen ska ha en översiktssida som ger en snabb sammanfattning av innehållet.

- Visa antal sparade recept.
- Visa antal aktiva material.
- Visa antal recept per status: utkast, ej testade och godkända.
- Ge möjlighet att skapa ett nytt recept direkt från översikten.
- Visa senast skapade eller ändrade recept.
- Ge snabb åtkomst till receptkalkylatorn och materialregistret.

1.2 Receptkalkylator

Användaren ska kunna skapa nya ljusrecept och beräkna ingredienser utifrån önskad mängd.

- Ange receptets namn.
- Välja om beräkningen ska utgå från total möngd ljusmassa i gram eller från antal ljus och önskad vikt per ljus för respektive ljusstorlek.
- Ange antal behållare och deras volym i milliliter för respektive ljusstorlek.
- Hantera flera olika behållarstorlekar i samma recept.
- Ange önskad fyllnadsgrad i procent.
- Lägga till en eller flera vaxtyper.
- Ange egna proportioner mellan vaxtyper.
- Välja om receptet ska innehålla doft eller vara doftfritt.
- Beräkna ingrediensmängder i procent, gram och milliliter.
- Visa en sammanställning av receptets ingredienser och mängder.
- Beräkningarna ska uppdateras automatiskt när användaren ändrar inmatade värden.
- Visa en löpande förhandsvisning av ingredienser, mängder och kostnader.
- Hämta ingredienser från materialregistret.
- Möjlighet att ta bort eller byta ingredienser.
- Vaxtypernas proportioner ska anges i procent och tillsammans utgöra 100% av vaxblandningen.
- Doftolja och färgämnen ska anges i procent av den totala vaxmängden.
- Ett recept får innehålla högst en doftolja, men flera färgämnen.
- Doftoljan ska kunna fördelas mellan receptets olika lager och dekorationer.
- Fördelningen ska anges i gram eller procent av receptets totala doftoljemängd.
- Den sammanlagda fördelningen ska motsvara 100% av receptets doftolja.
- Enskilda lager och dekorationer ska kunna vara doftfria.
- Behållare och vekar ska kunna väljas separat för olika ljusstorlekar.
- Ett recept ska kunna innehålla flera ljusstorlekar med olika antal och vikt per ljus.
- Ingrediensernas totala mängder ska visas för hela receptet, inte separat för varje ljusstorlek.
- Förhandsvisningen ska visa varje ingrediens separat i gram och milliliter där det är relevant.
- Visa total materialkostnad för hela receptet och kostnad per ljus.
- Visa materialkostnad och försäljningspris separat för varje ljusstorlek.

Beräkningarna ska ta hänsyn till materialens densitet vid omvandling mellan vikt och volym.

1.2.1 Lager och dekorationer

Användaren ska kunna dela upp varje ljusstorlek i flera lager och dekorationer.

- Möjlighet att lägga till valfritt antal lager och dekorationer för varje ljusstorlek.
- Ge varje lager och dekoration ett eget namn.
- Ange storleken på varje del i procent eller gram.
- Procentandelen ska baseras på den färdiga ljusvikten.
- Den angivna vikten ska avse delens färdiga vikt, inklusive vax, doftolja och färgämnen.
- Beräkningen ska därför räkna ut den mängd vax som behövs för att uppnå den angivna färdiga vikten.
- Välja egna vaxtyper och proportioner för varje del.
- Välja egna färgämnen och mängder för varje del.
- Färgämnen ska kunna anges i gram eller procent av delens vaxmängd.
- Varje del ska kunna innehålla flera vaxtyper och flera färgämnen.
- Varje del ska kunna ha en egen fördelning mellan vaxtyperna.
- Ange hur receptets doftolja ska fördelas mellan de olika delarna. Den totala mängden doftolja ska fortfarande motsvara den angivna doftprocenten för hela ljuset.
- Säkerställa att den totala mängden och doftprocenten blir korrekt för hela ljuset.
- Summan av alla lager och dekorationer ska motsvara 100% eller den angivna färdiga totalvikten för ljuset.
- Om mängderna inte stämmer ska användaren få ett tydligt felmeddelande.
- Receptet ska kunna sparas som utkast även om beräkningen inte är komplett, men det ska inte kunna markeras som ej testat eller godkänt förrän alla obligatoriska värden är giltliga.
- Visa hur mycket av varje ingrediens som behövs för varje lager och dekoration.
- Beräkna materialåtgång och kostnader separat för varje del och sammanlagt för hela ljuset.
- Möjlighet att spara enskilda lager och dekorationer som mallar för framtida recept.
- Anpassa mallarnas mängder automatiskt efter ljusets storlek.
- Möjlighet att ändra en använd mall utan att originalmallen påverkas.
- Mallar ska kunna skapas från grunden eller utifrån en befintlig del i ett recept. 
- Mallar ska kunna redigeras, byta namn och tas bort.
- En mall ska kunna spara den doftprocent och doftfördelning som användes när mallen skapades. Dessa värden ska kunna förifyllas när mallen används i ett nytt recept och anpassas efter det nya receptets inställningar.
- När en mall används ska dess värden kopieras till receptet. Ändringar i receptet ska inte påverka originalmallen.
- Receptet ska behålla information om vilken mall som användes, även om mallen senare tas bort.

1.3 Recepthantering

Användaren ska kunna hantera sina sparade recept.

- Spara nya recept.
- Visa sparade recept.
- Redigera befintliga recept.
- Ta bort recept.
- Möjlighet att arkivera recept utan att ta bort permanent.
- Arkiverade recept ska kunna återställas.
- Permanent borttagning ska kräva bekräftelse.
- Ett godkänt recept ska endast ändra status till ej testat om receptets innehåll eller beräkningar ändras. Ändringar av enbart receptnamn eller anteckningar ska inte påverka statusen.
- Behålla receptens ursprungliga värden när standardinställningar eller materialpriser ändras.
- Visa antal recept per status: utkast, ej testade och godkända.
- Spara ofärdiga recept som utkast och fortsätta redigera de senare.
- Ange receptets status: utkast, ej testat eller godkänt.
- Användaren ska själv kunna markera ett recept som godkänt efter provgjutning.
- Möjlighet att lägga till och redigera anteckningar till varje recept.
- Användaren ska själv kunna markera receptet som godkänt igen efter en ny provgjutning.
- Möjlighet att kopiera ett befintligt recept.
- En kopia ska få ett nytt unikt ID och automatiskt namnet ”Kopia av (receptnamn)”, som användaren kan ändra.
- Kopian ska innehålla samma ljusstorlekar, lager, dekorationer, ingredienser, proportioner, doftfördelning, vekar, behållare, anteckningar och prisinställningar som originalet.
- Kopian ska börja med statusen utkast.
- Kopian ska behålla originalets sparade materialpriser och beräknade kostnader som utgångsvärden.
- Kopian ska vara fristående från originalet. Ändringar i kopian påverkar inte originalreceptet och tvärtom.
- Användaren ska kunna uppdatera kopians materialpriser separat.
- Recept ska sparas automatiskt som utkast medan användaren arbetar med de.
- Autosparning ska ske med en kort fördröjning efter att användaren har gjort ändringar.
- Användaren ska även kunna spara recept manuellt.
- Ett nytt utkast ska sparas när användaren börjar fylla i ett recept, inte bara när kalkylatorn öppnas.
- Ett helt tomt utkast ska tas bort automatiskt.
- Användaren ska få tydlig återkoppling om sparstatus och om sparning misslyckas.
- Applikationen ska försöka spara igen när anslutningen återställs.
- Möjlighet att uppdatera ett sparat recept med aktuella materialpriser.
- Innan uppdateringen genomförs ska användaren kunna jämföra de tidigare och de nya materialkostnaderna.
- Uppdateringen ska räkna om materialkostnader och föreslagna försäljningspriser.
- Ingrediensernas mängder och proportioner ska inte förändras vid prisuppdateringen.
- Ett manuellt angivet försäljningspris ska behållas vid prisuppdateringen.
- Ett aktivt recept ska först arkiveras innan det kan tas bort permanent.
- Arkiverade recept ska kunna återställas eller tas bort permanent efter bekräftelse.

1.4 Materialregister

Applikationen ska innehålla ett materialregister där användaren kan hantera material och deras inköpsuppgifter.

Material som ska kunna registreras:
- Vaxtyper.
- Doftoljor.
- Färgämnen.
- Vekar, exempelvis trävekar och bomullsvekar.
- Behållare, exempelvis glasburkar.
- Materialtyperna ska vara fasta: vax, doftolja, färgämne, veke och behållare.
- Möjlighet att filtrera material efter materialtyp.
- Visa materialets aktuella kostnad per gram, milliliter eller styck direkt i materialöversikten.
- Möjlighet att filtrera mellan aktiva och arkiverade material.
- Möjlighet att sortera material efter namn, materialtyp och kostnad per enhet.
- Behållarens volym ska kunna anges separat i milliliter per behållare.
- Arkiverade material ska kunna återaktiveras.
- Material som används i sparade recept eller mallar ska inte kunna tas bort permanent, utan endast arkiveras.
- Material som inte används i något recept eller någon mall ska kunna arkiveras eller tas bort permanent.
- Arkiverade material ska kunna återaktiveras.
- Ett materials enhet ska inte kunna ändras efter att materialet har använts i ett recept eller en mall.
- Ändringar av materialets inköpspris ska inte påverka redan sparade recept automatiskt.

Varje material ska kunna innehålla:

- Namn.
- Materialtyp.
- Inköpspris.
- Inköpt mängd eller antal.
- Enhet, exempelvis gram, milliliter eller styck.
- Densitet där det behövs.

Applikationen ska automatiskt kunna räkna ut materialets pris per gram, milliliter eller styck utifrån inköpsmängd och inköpspris.

Användaren ska kunna lägga till, visa, redigera och ta bort material.

Arkiverade material ska finnas kvar i registret och i äldre recept, men inte kunna väljas till nya recept.

1.5 Kostnadsberäkning

Applikationen ska kunna beräkna receptets materialkostnader utifrån ingredienser och materialpriser.

Kostnadsberäkningen ska omfatta:

- Vax.
- Doftoljor.
- Färgämnen och andra tillsatser.
- Vekar.
- Behållare.

Applikationen ska visa:

- Kostnaden för varje ingrediens och material separat.
- Total materialkostnad.
- Materialkostnad per ljus.
- Kostnaden separat för varje ljusstorlek.
- Kostnaden separat för varje lager och dekoration.
- Den sammanlagda materialkostnaden för hela receptet, inklusive alla ljusstorlekar.

Arbetskostnad och andra företagskostnader ingår inte i projektets kostnadsberäkning.

1.6 Försäljningspris

Applikationen ska ge användaren möjlighet att beräkna och uppskatta försäljningspriser.

- Ange ett eget försäljningspris.
- Beräkna prisförslag utifrån materialkostnad och önskat påslag eller marginal.
- Visa beloppet som återstår efter materialkostnaden.
- Kunna hantera moms i prisberäkningen.
- Ange momssats.
- Välja om försäljningspriset anges inklusive eller exklusive moms.
- Visa försäljningspris både inklusive och exklusive moms. 
- Möjlighet att ange separata försäljningspriser för varje ljusstorlek.
- Möjlighet att beräkna prisförslag antingen genom påslag eller önskad marginal.
- Vid manuellt angivet försäljningspris ska användaren kunna välja om priset anges inklusive eller exklusive moms.
- Vid ändring av momssats ska det manuellt angivna priset behållas, medan det motsvarande priset inklusive eller exklusive moms räknas om.
- Prisförslaget ska kunna ändras mellan påslag och marginal utan att det manuellt angivna försäljningspriset påverkas.

1.7 Inställningar

Applikationen ska ha en inställningssida där användaren kan anpassa standardvärden för beräkningarna.

Exempel på inställningar:

- Standardprocent för doft.
- Standardfördelning mellan vaxtyper.
- Standardfyllnadsgrad.
- Standardpåslag eller önskad marginal.
- Momssats.
- Ändringar i standardinställningarna ska endast påverka nya recept. Sparade recept ska behålla sina egna inställningar.

Standardinställningar ska kunna ändras för ett enskilt recept utan att de sparade standardvärdena påverkas.

2. Regler för recept och material

- Sparade recept ska behålla sina ursprungliga ingredienser, proportioner och materialpriser.
- Ändringar i materialregistret ska inte automatiskt påverka redan sparade recept. 
- Användaren ska själv kunna välja att uppdatera ett sparat recept med aktuella materialpriser.
- Arkiverade material ska fortfarande vara tillgängliga i äldre recept.
- Recept med och utan doft ska kunna hanteras utan att doftolja automatiskt inkluderas i doftfria recept.
- Beräkningar mellan gram och milliliter ska ta hänsyn till materialets densitet.
- Behållarens fyllnadsgrad ska kunna anges separat från dess totala volym.
- Ändringar i ett godkänt recept ska medföra att receptets status ändras till ej testat tills det har provgjutits och godkänts på nytt.
- Ett recept får innehålla högst en doftolja totalt, som kan fördelas mellan receptets olika lager och dekorationer.
- Doftprocenten ska beräknas utifrån den totala vaxmängden i receptet. 
- Färgämnen ska beräknas utifrån vaxmängden i respektive lager eller dekoration. 
- En kopia av ett recept ska vara fristående från originalet och få ett unikt ID.
- Mallar ska kopieras in i receptet och inte vara permanent kopplade till receptets innehåll.
- Ändringar i en mall ska inte påverka recept där mallen redan har använts.
- Ändringar av materialpriser ska endast påverka sparade recept när användaren själv väljer att uppdatera priserna.
- Uppdatering av materialpriser ska inte ändra receptets status eftersom ingredienser och proportioner inte ändras.
- Ändringar av momssatsen i ett sparat recept ska räkna om priser inklusive och exklusive moms utan att materialkostnaderna påverkas.
- Varje sparat recept ska behålla sin egen momssats även om standardinställningen ändras.

3. Icke-funktionella krav

Applikationen ska:

- Ha ett användarvänligt och tydligt gränssnitt. 
- Vara responsiv och fungera på både mobil och dator.
- Presentera beräkningar och kostnader på ett lättförståeligt sätt. 
- Hantera inmatningar och validering för att minska risken för felaktiga beräkningar.
- Spara recept och material så att informationen finns kvar mellan besök.
- Ha en enhetlig design och tydlig navigering.
- Visa tydliga felmeddelanden när inmatade värden eller beräkningar inte är giltliga.
- Ge återkoppling när ett recept har sparats automatiskt eller när en automatisk sparning misslyckades.

4. Avgränsningar

Följande funktioner ingår inte i examensarbetet:

- Stöd för flera användare och separata användarkonton.
- Webbutik och betalningslösningar.
- Kundhantering.
- Lagerhantering och produktionsplanering.
- Bokföring och fullständiga skatteberäkningar.
- Arbetskostnader och andra företagskostnader.
- Etiketter, förpackningar och presentmaterial.
- Andra produkter än egentillverkade ljus, exempelvis doftpinnar.
- Integration med Goldie Ranch befintliga webbplats.

Dessa funktioner kan eventuellt utvecklas i ett senare skede. 


