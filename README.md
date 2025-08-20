# Sēņotājs — PWA ar Meklēšanu un Filtriem

Šī versija pievieno:
- ✅ Meklēšanu (nosaukums/suga/apraksts)
- ✅ Filtru pēc **sezonas** un **sugas**
- ✅ Režīmu **“Tuvākie”** ar rādiusu (2/5/10/25 km) — vajag atļaut lokāciju
- ✅ Klasterēšanu, offline, EXIF vecumu, LV robežas pārbaudi, dublikātu kontroli

## Instalēšana (GitHub Pages)
1) Iekopē failus repo saknē (aizstāj `index.html`):
   - `index.html`
   - `manifest.webmanifest`
   - `service-worker.js`
   - `icons/apple-touch-icon.png`
2) Settings → Pages → Deploy from a branch → main → /root → Save.
3) Atver iPhone, veic “Add to Home Screen”.

## Lietošana
- Meklēšanas lauks filtrē pēc nosaukuma/sugas/apraksta.
- “Sezona” un “Suga” filtri sašaurina rezultātus.
- “Tuvākie” + rādiuss rāda tikai punktus noteiktā attālumā no tavas atrašanās vietas; saraksts arī tiek kārtots pēc attāluma.
