# Respostes teoria - Exercici 1  

Per provocar expressament un `TypeError` al fitxer `code1.ts`, s'ha modificat el valor de la propietat `apple` de l'objecte `c` perquè sigui un *string* en lloc d'un *number*. Això fa que l'operació de multiplicació definida a la variable `d` doni error, ja que no es pot multiplicar una cadena de text per un nombre.

![TypeError provocat](image.png)

A diferència de JavaScript, TypeScript ens avisa d'aquest tipus d'errors abans d'executar el codi, cosa que ens permet **detectar i corregir problemes durant el desenvolupament**, evitant errors futurs i millorant la fiabilitat del codi.

---

1. Per a cadascun dels valors del fitxer `code2.ts`, quin tipus de dades inferirà TypeScript? Expliqueu per què s'ha inferit aquest tipus de dades.

- `const a = 1042`: Tipus 1042 (*literal number*) perquè és una constant i, com que el seu valor no pot canviar, TypeScript infereix el valor literal en lloc de *number*.
- `const b = 'apples and oranges'`: Tipus 'apples and oranges' (*literal string*) perquè és una constant i TypeScript infereix el valor literal de la cadena de text, no només *string*.
- `const c = 'pineapples'`: Tipus 'pineapples' (*literal string*). És el mateix cas que l'anterior.
- `const d = [true, true, false]`: Tipus `boolean[]` perquè és un *array* que conté valors booleans (*true* i *false*).
- `const e = { type: 'ficus' }`: Tipus `{ type: string }` perquè és un objecte amb una propietat de tipus *string*. TypeScript no conserva el valor literal `ficus` aquí perquè l'objecte podria tenir altres propietats o canviar el valor de `type` en altres parts del codi.
- `const f = [1, false]`: Tipus `(number | boolean)[]` perquè és un *array* que conté valors de tipus diferent (*number* i *boolean*), així que TypeScript infereix un tipus d'unió.
- `const g = [3]`: Tipus `number[]` perquè és un *array* amb un únic valor numèric.
- `const h = null`: Tipus `null` perquè és un valor nul.

---

2. Per què es dispara cadascun dels errors del fitxer `code3.ts`?

---

3. Quina és la diferència entre una classe i una interfície a TypeScript?