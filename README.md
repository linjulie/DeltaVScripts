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

## DELETE
