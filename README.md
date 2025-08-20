# Sēņotājs — Web pilots

Vienkārša web-aplikācija (bez servera), kur var pievienot sēņu punktus kartē **tikai ar foto, kam ir GPS EXIF**. Dati glabājas **lokāli** (LocalStorage).

## Kā palaist (GitHub Pages)
1. Izveido publisku GitHub repozitoriju (piem., `mushroommap-web`).
2. Augšupielādē `index.html` šī repo saknē (root).
3. Repo **Settings → Pages**: Source = *Deploy from a branch*, Branch = *main*, Folder = */root*, **Save**.
4. Pēc izvietošanas atver norādīto GitHub Pages adresi.
5. iPhone Safari → Share → **Add to Home Screen**.

## Lietošana
- Spied **+ Pievienot**, izvēlies **foto ar GPS**, ievadi nosaukumu u.c. un **Saglabā**.
- Ja foto **nav GPS**, saglabāt nevar (poga atspējota).
- Dati saglabājas šajā ierīcē; vari **Eksportēt** un **Importēt** `.json`.

## Piezīmes
- Kartes slānis: OpenStreetMap (Leaflet).
- EXIF nolasīšanai: `exifr` bibliotēka.
