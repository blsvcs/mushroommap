# Sēņotājs — Web pilots (PWA versija)

Uzlabojumi:
- ✅ PWA ar offline atbalstu (service worker + manifest)
- ✅ Markeru klasterēšana (Leaflet.markercluster)
- ✅ EXIF foto vecuma indikators (brīdina, ja >30 d.)
- ✅ Latvijas robežu pārbaude (var atļaut ārpus LV ar ķeksīti)
- ✅ Dublikātu kontrole (~15 m)
- ✅ Attēlu izmēra samazināšana (ātrāk, mazāk atmiņas)

## Izvietošana (GitHub Pages)
1. Izveido publisku repo (piem., `mushroommap-web-pwa`).
2. Ievieto šos failus repo saknē:
   - `index.html`
   - `manifest.webmanifest`
   - `service-worker.js`
   - `icons/apple-touch-icon.png` (jau iekļauts)
   - `README.md`
3. Settings → Pages → Deploy from a branch → main → /root → Save.
4. Atver iPhone Safari norādīto URL → Share → Add to Home Screen.

## iPhone iestatījumi
- Camera lokācija: Settings → Privacy & Security → Location Services → Camera → While Using.
- Ja poga “Saglabāt” ir pelēka: bildē nav GPS vai punkts ārpus LV (atzīmē atļauju).

## Piezīmes
- CDN bibliotēkas (Leaflet, MarkerCluster, exifr) netiek kešotas service workerā, bet darbojas arī offline, ja lapa jau atvērta (app shell kešā).
- Dati joprojām glabājas lokāli (LocalStorage). Vēlāk var pieslēgt Supabase Cloud sinhronizācijai.
