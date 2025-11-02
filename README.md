# PAC 2 - TypeScript

## Dades bàsiques

- **Nom i cognoms**: Júlia Romero Remacha
- ***Login* UOC**: jromerorem
- **Repositori GitHub**: [PAC2_TypeScript](https://github.com/juliarore/PAC2_TypeScript)

---

## Descripció de la pràctica
Aquesta PAC m'ha permès veure detalladament les **diferències entre JavaScript i TypeScript**, així com entendre els avantatges d'utilitzar TypeScript en lloc de JavaScript. També he pogut aprofundir en l'ús de classes, interfícies i l'**arquitectura MVC (*Model*–*View*–*Controller*)**. A més, m'he familiaritzat amb el **procés de tipatge i compilació** i amb la configuració del fitxer `tsconfig.json`.

---

### Exercici 1
L'exercici 1 consisteix a analitzar el funcionament del tipatge a TypeScript  i de la detecció d'errors abans de l'execució del codi.


#### Dificultats
Al principi, em va costar una mica entendre els tipus de variable `never` i `unknown`, però després de buscar informació addicional i veure exemples pràctics, vaig aconseguir comprendre millor la seva utilitat.

---

### Exercici 2
L'exercici 2 consisteix a analitzar en profunditat el fitxer `tsconfig.json` i veure com afecta la configuració del compilador a la generació del codi JavaScript.


#### Dificultats
Vaig haver de fer una recerca per entendre algunes de les opcions del fitxer `tsconfig.json`, ja que era la primera vegada que treballava amb aquest arxiu i volia entendre bé què significava cada opció.

Pel que fa als exercicis on calia substituir els comentaris per codi, vaig investigar sobre `Record<K, T>` perquè era un concepte nou per a mi. Finalment, vaig entendre que `Record<string, Plane>` és una manera de crear un objecte on cada clau (`string`) representa l'ID de l'avió i cada valor és un objecte de tipus `Plane`.

---

### Exercici 3
L'exercici 3 consisteix a transformar una aplicació TODO en JavaScript a TypeScript aplicant l’arquitectura MVC.

Tots els canvis que s'han dut a terme en aquest exercici es descriuen al [README_PEC2_Ej3.md](https://github.com/juliarore/PAC2_TypeScript/blob/main/PEC2_Ej3_Aplicacion_TODO/README_PEC2_Ej3.md).

#### Dificultats
La configuració dels mòduls i la correcta importació i exportació de les classes entre fitxers va ser una mica complicada al principi, però vaig poder resoldre-ho correctament modificant el `tsconfig.json`.