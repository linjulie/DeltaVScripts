# DeltaVScripts

These scripts are used in DeltaV Live to do SELECT, INSERT, UPDATE and DELETE queries to a Microsoft SQL Server database

All of these scripts are written in typescript since DeltaV Live supports that language.

## Standards
Standards are used in DeltaV Live to hold the SQL query statement, and to execute them in a secure way.
Instead of writing the query in the script the standard containing the query is called. 

## SELECT
Det er laget en standard som inneholder SQL spørringen for å hente ut et popup object med id lik det som id-en blir satt til. Hva id-en skal være blir bestemt når Open_PU_GEM blir plassert på et display. Open_PU_GEM har et property som heter PopUpID som er en integer, og integeren blir bestemt når GEMen blir plassert i et display.
Når denne GEMen blir trykket på så blir Gem.PopUpID sendt til PopUp_fp, som er et contextual display som viser overskrift og tekst fra popup objektet. PopUp_fp har et OnActivated event hvor SelectObjectscript finnes. 

## INSERT

## UPDATE

## DELETE
