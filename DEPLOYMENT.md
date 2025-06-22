# Nasazení Křížovny na GitHub Pages

## Předpoklady

1. Máte GitHub účet
2. Máte vytvořený repository s názvem `krizovna`
3. Repository je veřejné nebo máte GitHub Pro (pro soukromé repository)

## Kroky pro nasazení

### 1. Push kódu na GitHub

```bash
git add .
git commit -m "Připraveno pro nasazení na GitHub Pages"
git push origin main
```

### 2. Povolení GitHub Pages

1. Jděte na vaše repository na GitHub
2. Klikněte na **Settings** (Nastavení)
3. V levém menu klikněte na **Pages**
4. V sekci **Source** vyberte **GitHub Actions**
5. GitHub Actions workflow se automaticky spustí při push na main branch

### 3. Kontrola nasazení

1. Po úspěšném nasazení najdete vaši aplikaci na: `https://mrnavdal.github.io/krizovna/`
2. GitHub Actions workflow můžete sledovat v záložce **Actions** vašeho repository

## Funkce aplikace

- **PWA (Progressive Web App)**: Aplikace se může nainstalovat jako nativní aplikace
- **Offline podpora**: Funguje i bez internetového připojení
- **Responzivní design**: Optimalizováno pro mobilní zařízení
- **Český jazyk**: Plně lokalizováno do češtiny

## Vývoj

Pro lokální vývoj:

```bash
npm start
```

Pro build:

```bash
npm run build
```

## Struktura projektu

- `src/` - Zdrojové soubory
- `docs/` - Dokumentace
- `blog/` - Blog příspěvky
- `static/` - Statické soubory (obrázky, manifest)
- `.github/workflows/` - GitHub Actions workflow

## Troubleshooting

### Problém s baseUrl
Pokud se stránky nenačítají správně, zkontrolujte `baseUrl` v `docusaurus.config.ts`. Mělo by být `/krizovna/` pro repository s názvem `krizovna`.

### Problém s PWA
Zkontrolujte, že máte správně nastavené cesty v `manifest.json` a že ikony existují v `static/img/` složce. 