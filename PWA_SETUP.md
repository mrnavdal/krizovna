# PWA Nastavení pro Křížovna

Tento projekt byl úspěšně nakonfigurován jako Progressive Web App (PWA).

## ✅ Co bylo přidáno:

### 1. Soubory
- `static/manifest.json` - Web App Manifest
- ✅ `static/img/icon-192x192.png` - PWA ikona 192x192 (vytvořena z SVG loga)
- ✅ `static/img/icon-512x512.png` - PWA ikona 512x512 (vytvořena z SVG loga)

### 2. Konfigurace
- ✅ PWA plugin nainstalován: `@docusaurus/plugin-pwa`
- ✅ Upraven `docusaurus.config.ts` s PWA pluginem
- ✅ Přidány meta tagy pro iOS podporu
- ✅ Nastaveny PWA ikony a barvy
- ✅ Service Worker vytvořen automaticky pluginem

## 🚀 PWA funkce, které máte:

- ✅ **Offline funkcionalita** - Service Worker cacheuje důležité soubory
- ✅ **Instalace na domovskou obrazovku** - Manifest umožňuje instalaci jako aplikace
- ✅ **App-like vzhled** - Bez adresního řádku v standalone módu
- ✅ **Caching** - Automatické cacheování stránek a zdrojů
- ✅ **iOS podpora** - Apple touch ikony a meta tagy
- ✅ **Skutečné PWA ikony** - PNG ikony vytvořené z vašeho SVG loga

## 🔧 Co bylo opraveno:

### Problém s PWA instalací:
- ❌ **Před:** Placeholder ikony (textové soubory) - prohlížeč neuznával PWA
- ✅ **Po:** Skutečné PNG ikony vytvořené z vašeho SVG loga
- ✅ **Výsledek:** PWA instalace nyní funguje správně

### Vytvoření ikon:
```bash
# Instalace nástroje pro konverzi SVG
sudo dnf install librsvg2-tools -y

# Vytvoření PNG ikon z SVG loga
rsvg-convert -w 192 -h 192 static/img/logo.svg -o static/img/icon-192x192.png
rsvg-convert -w 512 -h 512 static/img/logo.svg -o static/img/icon-512x512.png
```

## 📱 Jak testovat PWA:

### Chrome/Edge:
1. Otevřete http://192.168.88.39:3000
2. Otevřete DevTools (F12)
3. Jděte na Application → Manifest
4. Klikněte "Add to home screen"
5. Nebo použijte tlačítko instalace v adresním řádku

### Android:
1. Otevřete Chrome na http://192.168.88.39:3000
2. Menu → "Add to home screen"
3. Potvrďte instalaci

### iOS Safari:
1. Otevřete Safari na http://192.168.88.39:3000
2. Share tlačítko → "Add to home screen"
3. Potvrďte instalaci

## 🔧 Příkazy pro správu serveru:

### Spuštění serveru pro mobilní přístup:
```bash
npm run serve:mobile
```

### Spuštění vývojového serveru pro mobilní přístup:
```bash
npm run start:mobile
```

### Zastavení serveru:
```bash
pkill -f "docusaurus serve"
```

## ⚠️ Poznámky:
- PWA funguje pouze přes HTTPS (kromě localhost)
- Pro produkci nezapomeňte nastavit správnou URL v `docusaurus.config.ts`
- Service Worker je automaticky generován PWA pluginem
- Offline funkcionalita je aktivní ihned po instalaci
- Ikony jsou nyní skutečné PNG soubory vytvořené z vašeho SVG loga

## 🎉 Gratulace!
Vaše aplikace je nyní plně funkční PWA s:
- ✅ Offline podporou
- ✅ Možností instalace na domovskou obrazovku
- ✅ Skutečnými PWA ikonami
- ✅ App-like vzhledem
- ✅ Podporou pro iOS a Android

**Adresa pro testování:** http://192.168.88.39:3000 