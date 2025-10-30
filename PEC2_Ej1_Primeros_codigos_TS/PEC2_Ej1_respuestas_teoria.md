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
- `Cannot assign to 'i' because it is a constant`: El primer error és degut al fet que s'està intentant assignar un nou valor a una constant, cosa que no és possible ni en TypeScript ni en JavaScript, ja que les variables constants no poden ser reassignades.
- `Argument of type 'string' is not assignable to parameter of type 'number'`: El segon error es produeix perquè s'està intentant afegir un valor de tipus *string* a l'array d'una variable que ha estat declarada com a `number[]`. Com que l'*array* només pot contenir nombres, afegir una cadena de text provoca un *TypeError*.
- `Type '4' is not assignable to type 'never'`: El tercer error apareix perquè s’intenta assignar el valor `4` a una variable declarada amb el tipus `never`. El tipus `never` representa valors que no poden existir mai, com ara funcions que no retornen res o situacions que no es poden donar. És per això que TypeScript no permet assignar cap valor a una variable d’aquest tipus.
- `'l' is of type 'unknown'`: El quart error es produeix perquè s'està intentant fer ús d'una variable declarada com a `unknown`. Aquest tipus indica que es desconeix quin el valor conté la variable, i TypeScript obliga a comprovar-ne el tipus abans d’utilitzar-la. Com que en aquest cas no s’ha verificat si `l` és un *number*, la multiplicació no es pot dur a terme fins que no es comprovi el tipus amb una condició (`typeof l === 'number'`).

---

3. Quina és la diferència entre una classe i una interfície a TypeScript?
- Una **classe** serveix per crear objectes amb les seves propietats i mètodes, és a dir, defineix l'estructura i el comportament dels objectes. A més, les classes es poden instanciar per crear múltiples objectes amb les mateixes característiques (`new`). També poden incloure constructors, propietats, *getters* i *setters*, així com mecanismes d’herència (`extends`), modificadors d’accés (`public`, `private`, `protected`) i la possibilitat d’implementar interfícies (`implements`).
- En canvi, una **interfície** només descriu com ha de ser l'estructura d'un objecte, especificant les propietats i els tipus que ha de tenir, però no implementa cap funcionalitat.

