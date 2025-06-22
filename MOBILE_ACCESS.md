# 📱 Přístup k aplikaci z mobilu

Vaše aplikace je nyní dostupná z mobilního zařízení!

## 🌐 Adresy pro přístup:

### Z počítače (localhost):
- http://localhost:3000

### Z mobilu (přes WiFi):
- http://192.168.88.39:3000

## 📋 Jak se připojit z mobilu:

### 1. Ujistěte se, že:
- ✅ Počítač a mobil jsou připojeny ke stejné WiFi síti
- ✅ Server běží na pozadí (`npm run serve:mobile`)
- ✅ Firewall neblokuje port 3000

### 2. Na mobilu:
1. Otevřete prohlížeč (Chrome, Safari, Firefox)
2. Zadejte adresu: `http://192.168.88.39:3000`
3. Stiskněte Enter

### 3. PWA instalace na mobilu:
- **Android (Chrome)**: Menu → "Add to home screen"
- **iOS (Safari)**: Share tlačítko → "Add to home screen"

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
# Najděte proces a ukončete ho
ps aux | grep docusaurus
kill [PID]
```

## 🚨 Řešení problémů:

### Pokud se nemůžete připojit:

1. **Zkontrolujte firewall:**
   ```bash
   sudo firewall-cmd --add-port=3000/tcp --permanent
   sudo firewall-cmd --reload
   ```

2. **Zkontrolujte, že server běží:**
   ```bash
   netstat -tlnp | grep :3000
   ```

3. **Zkontrolujte IP adresu:**
   ```bash
   ip route get 1.1.1.1 | awk '{print $7}' | head -1
   ```

4. **Testujte připojení:**
   ```bash
   curl http://192.168.88.39:3000
   ```

### Pokud se IP adresa změnila:
Spusťte znovu příkaz pro zjištění IP a aktualizujte adresu v tomto souboru.

## 📱 Testování PWA na mobilu:

1. Otevřete aplikaci v prohlížeči
2. Zkuste offline funkcionalitu (vypněte WiFi)
3. Nainstalujte jako PWA
4. Otestujte app-like vzhled

## 🎉 Výhody mobilního přístupu:

- ✅ Testování PWA funkcionality na skutečném zařízení
- ✅ Testování responzivního designu
- ✅ Testování touch interakcí
- ✅ Testování offline funkcionality
- ✅ Instalace PWA na domovskou obrazovku

---

**Aktuální IP adresa:** 192.168.88.39  
**Port:** 3000  
**URL:** http://192.168.88.39:3000 