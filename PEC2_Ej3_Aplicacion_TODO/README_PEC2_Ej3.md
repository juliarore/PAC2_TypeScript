# README - Exercici 3

## Instruccions per a la transpilació i execució de l’aplicació TODO

### 1. Instal·lar dependències

```bash
npm install -g typescript
```

### 2. Transpilar l’aplicació

Executar l’ordre següent des de l’arrel del projecte, on es troba el fitxer `tsconfig.json`:

```bash
tsc
```

Aquesta instrucció generarà automàticament els fitxers `.js` dins de la carpeta `./dist/`.

### 3. Executar l’aplicació

Obrir el fitxer `index.html` amb ***Live Server*** o bé executar:

```bash
npx serve .
```

Això obrirà l’aplicació al navegador (`http://localhost:3000`).

---

## Justificació dels canvis realitzats

- S'ha creat un arxiu `.gitignore` per evitar pujar al repositori els fitxers i carpetes generats per la compilació de TypeScript (`/dist` i `buildcache`).
- S’ha modificat la propietat "module" a *es2015* al fitxer `tsconfig.json`. S'ha afegit `"moduleResolution": "bundler"` per assegurar una correcta resolució dels mòduls. D'aquesta manera, es poden utilitzar imports amb l'extensió `.js` en lloc de `.ts`. Això s'ha fet perquè durant la transpilació no feia correctament la resolució dels mòduls i no es podia executar l'aplicació al navegador.
- S'ha transformat tot el codi de JavaScript a TypeScript amb tipatge estricte i s'han creat les interfícies necessàries per a cada mòdul (*Model*, *View* i *Controller*).
- S'ha modificat l'`index.html` per carregar només el fitxer `app.js`, el qual importa la resta de mòduls.