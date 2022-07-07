# DeltaVScripts

These scripts are used in DeltaV Live to do SELECT, INSERT, UPDATE and DELETE queries to a Microsoft SQL Server database

All of these scripts are written in typescript since DeltaV Live supports that language.

## Database
Databasen inneholder foreløpig kunn en tabell som heter dbo.PopUpTable, denne tabellen har em id (INT), en Header (VARCHAR(50)), og en Section(TEXT). Et popup objekt kan bli hentet ut, redigert, skrevet/laget eller slettet fra DeltaV Live samt fra en applikasjon. 

## Standards
Standards are used in DeltaV Live to hold the SQL query statement, and to execute them in a secure way.
Instead of writing the query in the script the standard containing the query is called. 

## SELECT
Det er laget en standard som inneholder SQL spørringen for å hente ut et popup object med id lik det som id-en blir satt til. Hva id-en skal være blir bestemt når Open_PU_GEM blir plassert på et display. Open_PU_GEM har et property som heter PopUpID som er en integer, og integeren blir bestemt når GEMen blir plassert i et display.
Når denne GEMen blir trykket på så blir Gem.PopUpID sendt til PopUp_fp, som er et contextual display som viser overskrift og tekst fra popup objektet. PopUp_fp har et OnActivated event hvor SelectObjectscript finnes. 

## INSERT
Det er laget en standard som inneholder SQL spørringen for å legge til et objekt i databasen med en header og section, id er auto increment. Det er laget en INSERT_VALUE_GEM som inneholder to text entry bokser, en for Header og en for Section. Denne GEMen har to variabler, Header og Section, disse variablene blir satt til å være hva brukeren skriver inn i text entry boksene. Når brukeren trykker på Insert knappen så kjører InsertObjectScript.ts. 

## UPDATE
Det er laget en standard som inneholder SQL spørringen for å oppdatere et object i databasen. Brukeren er nødt til å skrive inn et id å objektet de ønsker å redigere, og kan deretter skrive inn header og section i feltene. Når brukeren trykker på "update" knappen så vil objektet med id-en, som brukeren skrev inn, bli oppdatert til å ha de nye verdiene for header og section. Det er et faceplate i DeltaV Live som består av UPDATE_VALUE_GEM og en knapp som det står Update på. UPDATE_VALUE_GEM har tre variabler som blir oppdatert når brukeren skrive i text entry feltene, disse variablene er ID, Header og Section. Disse verdiene bli aksesert i UpdateObjectScript.ts slik at objectet med riktig id blir oppdatert, og blir oppdatert med de verdiene som brukeren skriver inn. 

## DELETE
Det er laget en standard som inneholder SQL spørringen for å slette et objekt. I DeltaV Live så er det et deleteObject_fp,hvor det står "Enter Id of object you want to delete: ", det er også et felt for å skrive inn id og en knapp hvor man kan trykke delete. Text entry feltet er en GEM, så den har en variabel som heter Id. Id variabelen blir oppdatert til å være det som brukeren skrev inn. Når man trykker på delete så blir en dialogboks åpnet, og Id variabelen blir sendt til dialog boksen. På DeleteObjectDialog så står det "Are you sure you want to delete?", også står id-en til objektet som manønsker å slette. Trykker man  på yes så kjører DeleteObjectScript.ts, trykker man No så vil bare delete dialogen lukke seg. 
