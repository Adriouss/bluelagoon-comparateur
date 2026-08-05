// comparateur-spas-v1.js
// Données issues des FT « MAJ 2025/2026 » + corrections validées K. Ranson (23, 24 et 25/07/2026).
// En cas de conflit, les emails de correction font foi.
// Catégories : therapeutique · relaxation · detente · loisir · debordement · mosaique · bainfroid
//
// Couleurs de badge à ajouter au CSS (cohérentes avec les blocs collections du site) :
// .spa-badge.therapeutique{background:#e84604} .spa-badge.relaxation{background:#2e8b3a}
// .spa-badge.detente{background:#004E89}      .spa-badge.loisir{background:#7f92ad}
// .spa-badge.debordement{background:#c49a00}  .spa-badge.mosaique{background:#8a5a9e}
// .spa-badge.bainfroid{background:#1A9C9C}

const allSpasData = {
  "therapeutique": [
    { "id": "infiny3", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/spa+infiny+2-3d8cfbf6.png", "title": "Infiny 3", "collection": "Thérapeutique", "collectionClass": "therapeutique", "link": "https://www.bluelagoonspas.com/spa-infiny", "specs": { "Dimensions": "230 × 230 × 95 cm", "Places": "5 places (2 allongées)", "Jets de Massage": "134 jets", "Pompes": "6 pompes (4 de massage)", "Indice de Performance": "110 / 110", "Caractéristiques Principales": "Master Lady Confort, Tunnel de massage jambes & mollets, Dôme voûtes plantaires, Full Spin Massage" } },
    { "id": "eternity", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/jacuzzi-6-places-eternity.webp", "title": "Eternity", "collection": "Thérapeutique", "collectionClass": "therapeutique", "link": "https://www.bluelagoonspas.com/spa-eternity", "specs": { "Dimensions": "230 × 250 × 95 cm", "Places": "6 places (2 allongées)", "Jets de Massage": "136 jets", "Pompes": "6 pompes (4 de massage)", "Indice de Performance": "108 / 110", "Caractéristiques Principales": "Jet POWERBACK, Dôme voûtes plantaires, Tunnel jambes & mollets, Full Spin Massage" } },
    { "id": "lagoon2", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/lagoon2.webp", "title": "Lagoon II", "collection": "Thérapeutique", "collectionClass": "therapeutique", "link": "https://www.bluelagoonspas.com/spa-lagoon", "specs": { "Dimensions": "216 × 216 × 95 cm", "Places": "4 places (2 allongées)", "Jets de Massage": "110 jets", "Pompes": "5 pompes (3 de massage)", "Indice de Performance": "108 / 110", "Caractéristiques Principales": "Master Lady Confort, Dôme voûtes plantaires, Tunnel jambes & mollets, Full Spin Massage" } },
    { "id": "esprit", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/Esprit.png", "title": "Esprit", "collection": "Thérapeutique", "collectionClass": "therapeutique", "link": "https://www.bluelagoonspas.com/spa-esprit", "specs": { "Dimensions": "220 × 220 × 95 cm", "Places": "6 places (1 allongée)", "Jets de Massage": "105 jets", "Pompes": "5 pompes (3 de massage)", "Indice de Performance": "107 / 110", "Caractéristiques Principales": "Master Lady Confort, Tunnel jambes & mollets, Full Spin Massage" } },
    { "id": "familydream", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/Family+dream2022+-+vertical-636f02db.png", "title": "Family Dream", "collection": "Thérapeutique", "collectionClass": "therapeutique", "link": "https://www.bluelagoonspas.com/spa-family-dream", "specs": { "Dimensions": "340 × 238 × 130 cm", "Places": "7 places (2 allongées)", "Jets de Massage": "91 jets", "Pompes": "6 pompes (4 de massage)", "Indice de Performance": "108 / 110", "Caractéristiques Principales": "Détente, aquagym et nage, Tunnel jambes & mollets, Full Spin Massage" } },
    { "id": "harmony", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/harmony+550px.png", "title": "Harmony", "collection": "Thérapeutique", "collectionClass": "therapeutique", "link": "https://www.bluelagoonspas.com/spa-harmony", "specs": { "Dimensions": "216 × 180 × 95 cm", "Places": "3 places (2 allongées)", "Jets de Massage": "84 jets", "Pompes": "5 pompes (3 de massage)", "Indice de Performance": "106 / 110", "Caractéristiques Principales": "Master Lady Confort, Dôme voûtes plantaires, Tunnel jambes & mollets" } }
  ],
  "relaxation": [
    { "id": "soprano", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/spa_soprano.png", "title": "Soprano", "collection": "Relaxation", "collectionClass": "relaxation", "link": "https://www.bluelagoonspas.com/spa-soprano", "specs": { "Dimensions": "230 × 230 × 90 cm", "Places": "6 places (2 allongées)", "Jets de Massage": "107 jets", "Pompes": "5 pompes (3 de massage)", "Indice de Performance": "98 / 110", "Caractéristiques Principales": "Dôme voûtes plantaires, Jet POWERBACK, Full Spin Massage, Pack Leds" } },
    { "id": "adagio", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/spa_adagio.png", "title": "Adagio", "collection": "Relaxation", "collectionClass": "relaxation", "link": "https://www.bluelagoonspas.com/spa-adagio", "specs": { "Dimensions": "218 × 218 × 90 cm", "Places": "5 places (2 allongées)", "Jets de Massage": "99 jets", "Pompes": "5 pompes (3 de massage)", "Indice de Performance": "99 / 110", "Caractéristiques Principales": "Dôme voûtes plantaires, Jet POWERBACK, Full Spin Massage, Pack Leds" } },
    { "id": "concerto", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/spa-concerto.webp", "title": "Concerto", "collection": "Relaxation", "collectionClass": "relaxation", "link": "https://www.bluelagoonspas.com/spa-concerto", "specs": { "Dimensions": "210 × 200 × 84 cm", "Places": "4 places (2 allongées)", "Jets de Massage": "85 jets", "Pompes": "5 pompes (3 de massage)", "Indice de Performance": "96 / 110", "Caractéristiques Principales": "Master Lady Confort, Jet POWERBACK, Full Spin Massage, Pack Leds" } },
    { "id": "tempo", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/Spa_Tempo.png", "title": "Tempo", "collection": "Relaxation", "collectionClass": "relaxation", "link": "https://www.bluelagoonspas.com/spa-tempo", "specs": { "Dimensions": "210 × 170 × 84 cm", "Places": "3 places (2 allongées)", "Jets de Massage": "71 jets", "Pompes": "4 pompes (2 de massage)", "Indice de Performance": "94 / 110", "Caractéristiques Principales": "Jet POWERBACK, Full Spin Massage, Pack Ambiance" } }
  ],
  "detente": [
    { "id": "stella", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/spa-stella.webp", "title": "Stella", "collection": "Détente", "collectionClass": "detente", "link": "https://www.bluelagoonspas.com/spa-stella", "specs": { "Dimensions": "230 × 230 × 90 cm", "Places": "6 places (2 allongées)", "Jets de Massage": "80 jets", "Pompes": "4 pompes (2 de massage)", "Indice de Performance": "80 / 110", "Caractéristiques Principales": "Jet POWERBACK, Full Spin Massage, Cascade rétro-éclairée" } },
    { "id": "savana", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/savana.webp", "title": "Savana", "collection": "Détente", "collectionClass": "detente", "link": "https://www.bluelagoonspas.com/spa-savana", "specs": { "Dimensions": "218 × 218 × 90 cm", "Places": "5 places (2 allongées)", "Jets de Massage": "71 jets", "Pompes": "4 pompes (2 de massage)", "Indice de Performance": "80 / 110", "Caractéristiques Principales": "Master Lady Confort, Jet POWERBACK, Full Spin Massage" } },
    { "id": "oasis", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/OASIS-bassin.png", "title": "Oasis", "collection": "Détente", "collectionClass": "detente", "link": "https://www.bluelagoonspas.com/spa-oasis", "specs": { "Dimensions": "210 × 210 × 84 cm", "Places": "5 places (2 allongées)", "Jets de Massage": "69 jets (59 eau + 10 air)", "Pompes": "2 pompes de massage", "Indice de Performance": "80 / 110", "Caractéristiques Principales": "Table lumineuse de série, Jet POWERBACK, Full Spin Massage" } },
    { "id": "siena", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/Siena.png", "title": "Siena", "collection": "Détente", "collectionClass": "detente", "link": "https://www.bluelagoonspas.com/spa-siena", "specs": { "Dimensions": "210 × 200 × 84 cm", "Places": "4 places (2 allongées)", "Jets de Massage": "63 jets", "Pompes": "4 pompes (2 de massage)", "Indice de Performance": "78 / 110", "Caractéristiques Principales": "Jet POWERBACK, Full Spin Massage, Cascade rétro-éclairée" } },
    { "id": "lyra", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/spa_Lyra.png", "title": "Lyra", "collection": "Détente", "collectionClass": "detente", "link": "https://www.bluelagoonspas.com/spa-lyra", "specs": { "Dimensions": "210 × 170 × 84 cm", "Places": "3 places (2 allongées)", "Jets de Massage": "56 jets", "Pompes": "4 pompes (2 de massage)", "Indice de Performance": "73 / 110", "Caractéristiques Principales": "Jet POWERBACK, Full Spin Massage, Pack Ambiance" } },
    { "id": "galaxy", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/spa_galaxy-2681aec1.png", "title": "Galaxy", "collection": "Détente", "collectionClass": "detente", "link": "https://www.bluelagoonspas.com/spa-galaxy", "specs": { "Dimensions": "210 × 210 × 93 cm", "Places": "6 places assises", "Jets de Massage": "40 jets", "Pompes": "3 pompes (1 de massage)", "Indice de Performance": "65 / 110", "Caractéristiques Principales": "Chromothérapie Light Show, Cascade rétro-éclairée, Pack Ambiance" } },
    { "id": "marbella", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/Marbella_spa_detente.png", "title": "Marbella", "collection": "Détente", "collectionClass": "detente", "link": "https://www.bluelagoonspas.com/spa-marbella", "specs": { "Dimensions": "Ø 180 × 88 cm", "Places": "5 places assises", "Jets de Massage": "31 jets", "Pompes": "3 pompes (1 de massage)", "Indice de Performance": "62 / 110", "Caractéristiques Principales": "Spa rond, Chromothérapie, Cascade rétro-éclairée, Pack Ambiance" } }
  ],
  "loisir": [
    { "id": "sweetyluxe", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/spa_sweety.png", "title": "Sweety Luxe", "collection": "Loisir", "collectionClass": "loisir", "link": "https://www.bluelagoonspas.com/spa-sweetylux", "specs": { "Dimensions": "210 × 210 × 83 cm", "Places": "5 places (2 allongées)", "Jets de Massage": "51 jets", "Pompes": "4 pompes (2 de massage)", "Indice de Performance": "68 / 110", "Caractéristiques Principales": "TurboFlow, Master Lady Confort, Cascade rétro-éclairée" } },
    { "id": "orionis", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/spa-jacuzzi-orionis2.webp", "title": "Orionis", "collection": "Loisir", "collectionClass": "loisir", "link": "https://www.bluelagoonspas.com/spa-orionis", "specs": { "Dimensions": "200 × 200 × 79 cm", "Places": "5 places (2 allongées)", "Jets de Massage": "48 jets", "Pompes": "3 pompes (2 de massage)", "Indice de Performance": "66 / 110", "Caractéristiques Principales": "Loisir ECO, Chromothérapie Light Show, Venturi de série" } },
    { "id": "cookies", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/spa_cookies-4fa59ddc.png", "title": "Cookies", "collection": "Loisir", "collectionClass": "loisir", "link": "https://www.bluelagoonspas.com/spa-cookies", "specs": { "Dimensions": "213 × 160 × 78 cm", "Places": "3 places (2 allongées)", "Jets de Massage": "35 jets", "Pompes": "3 pompes (2 de massage)", "Indice de Performance": "66 / 110", "Caractéristiques Principales": "Finition PRO, TurboFlow, Filtration professionnelle incluse" } },
    { "id": "astralis", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/spa+astralis.webp", "title": "Astralis", "collection": "Loisir", "collectionClass": "loisir", "link": "https://www.bluelagoonspas.com/spa-astralis", "specs": { "Dimensions": "210 × 158 × 76 cm", "Places": "3 places (2 allongées)", "Jets de Massage": "22 jets", "Pompes": "1 pompe de massage", "Indice de Performance": "63 / 110", "Caractéristiques Principales": "Loisir ECO, Chromothérapie Light Show, Venturi de série" } }
  ],
  "debordement": [
    { "id": "pro714", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/PRO714.png", "title": "Pro 714+", "collection": "Débordement", "collectionClass": "debordement", "link": "https://www.bluelagoonspas.com/spa-714", "specs": { "Dimensions": "380 × 240 × 100 cm", "Places": "14 places assises", "Jets de Massage": "122 jets", "Pompes": "5 pompes (3 de massage)", "Indice de Performance": "99 / 110", "Caractéristiques Principales": "Bac de débordement intégré, Fonction Libre-Service, Filtration professionnelle" } },
    { "id": "pro712", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/PRO+712.png", "title": "Pro 712+", "collection": "Débordement", "collectionClass": "debordement", "link": "https://www.bluelagoonspas.com/spa-712", "specs": { "Dimensions": "300 × 240 × 105 cm", "Places": "12 places assises", "Jets de Massage": "106 jets", "Pompes": "6 pompes (4 de massage)", "Indice de Performance": "89 / 110", "Caractéristiques Principales": "Bac de débordement intégré, Fonction Libre-Service, Master Lady Confort" } },
    { "id": "pro705", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/PRO705.png", "title": "Pro 705+", "collection": "Débordement", "collectionClass": "debordement", "link": "https://www.bluelagoonspas.com/spa-705", "specs": { "Dimensions": "240 × 240 × 100 cm", "Places": "5 places (2 allongées)", "Jets de Massage": "61 jets", "Pompes": "4 pompes (2 de massage)", "Indice de Performance": "82 / 110", "Caractéristiques Principales": "Bac de débordement intégré, Fonction Libre-Service, Master Lady Confort" } },
    { "id": "pro706", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/PRO+706+-800px.png", "title": "Pro 706+", "collection": "Débordement", "collectionClass": "debordement", "link": "https://www.bluelagoonspas.com/spa-706", "specs": { "Dimensions": "Ø 240 × 105 cm", "Places": "6 places assises", "Jets de Massage": "53 jets", "Pompes": "4 pompes (2 de massage)", "Indice de Performance": "82 / 110", "Caractéristiques Principales": "Spa rond, Bac tampon 400 L, Fonction Libre-Service" } }
  ],
  "mosaique": [
    { "id": "promosaico912", "img": "", "title": "Pro Mosaico 912", "collection": "Mosaïque", "collectionClass": "mosaique", "link": "#", "specs": { "Dimensions": "400 × 240 × 95 cm", "Places": "11 places assises", "Jets de Massage": "75 jets (55 eau + 20 air)", "Type de Bassin": "À débordement", "Mosaïque": "Ezarri – 7 collections de série", "Caractéristiques Principales": "Local technique requis, Bac tampon 1 000 L en option, Habillage encastrable" } },
    { "id": "mosaico905", "img": "", "title": "Mosaico 905", "collection": "Mosaïque", "collectionClass": "mosaique", "link": "#", "specs": { "Dimensions": "220 × 220 × 95 cm", "Places": "5 places (2 allongées)", "Jets de Massage": "58 jets (26 eau + 32 air)", "Type de Bassin": "Skimmer", "Mosaïque": "Ezarri – 7 collections de série", "Caractéristiques Principales": "Local technique requis, Chromothérapie de série, Habillage encastrable" } },
    { "id": "mosaico906", "img": "", "title": "Mosaico 906", "collection": "Mosaïque", "collectionClass": "mosaique", "link": "#", "specs": { "Dimensions": "Ø 240 × 95 cm", "Places": "6 places assises", "Jets de Massage": "38 jets", "Type de Bassin": "Skimmer", "Mosaïque": "Ezarri – 7 collections de série", "Caractéristiques Principales": "Spa rond, Local technique requis, Chromothérapie de série" } },
    { "id": "promosaico906", "img": "", "title": "Pro Mosaico 906", "collection": "Mosaïque", "collectionClass": "mosaique", "link": "#", "specs": { "Dimensions": "Ø 240 × 95 cm", "Places": "6 places assises", "Jets de Massage": "38 jets", "Type de Bassin": "À débordement", "Mosaïque": "Ezarri – 7 collections de série", "Caractéristiques Principales": "Spa rond, Bac tampon 1 000 L en option, Filtration professionnelle en option" } }
  ],
  "bainfroid": [
    { "id": "plungepoolbore", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/Plungepool+Bore1.webp", "title": "Plunge Pool Boré", "collection": "Bain froid", "collectionClass": "bainfroid", "link": "https://www.bluelagoonspas.com/plunge-pool", "specs": { "Dimensions": "213 × 106 × 76 cm", "Places": "1 place", "Plage de Fonctionnement": "5 °C à 40 °C", "Filtration": "Cartouche grande capacité – 250 W", "Caractéristiques Principales": "Système de refroidissement intégré, Pack isolation renforcée, Couverture isothermique de série" } }
  ]
};

window.renderGlobalComparator = function(category, containerId) {
    const data = allSpasData[category];
    const container = document.getElementById(containerId);
    if (!data || !container) return;

    container.innerHTML = `
    <div class="comparator-wrapper"><div class="comparator-section">
        <div class="selectors-container" style="display:flex"></div>
        <div class="table-wrapper"><table></table></div>
        <div class="comparison-cols"></div>
    </div></div>`;

    const table = container.querySelector('table');
    const selectors = container.querySelector('.selectors-container');
    const cols = container.querySelector('.comparison-cols');

    const headerHtml = (spa) => `<div class="spa-header">${spa.img ? `<img src="${spa.img}" class="spa-img" alt="${spa.title}">` : ''}<div class="spa-title">${spa.title}</div><span class="spa-badge ${spa.collectionClass}">${spa.collection}</span></div>`;

    // Headers Desktop
    let tHtml = '<tr><th>Caractéristiques</th>';
    data.forEach((spa, i) => {
        tHtml += `<th class="spa-col" data-idx="${i}">${headerHtml(spa)}</th>`;
    });
    tHtml += '</tr>';

    // Specs
    Object.keys(data[0].specs).forEach(key => {
        tHtml += `<tr><td>${key}</td>`;
        data.forEach((spa, i) => { tHtml += `<td class="spa-col" data-idx="${i}">${spa.specs[key] || '—'}</td>`; });
        tHtml += '</tr>';
    });

    // Action
    tHtml += '<tr><td>Action</td>';
    data.forEach((spa, i) => { tHtml += `<td class="spa-col" data-idx="${i}"><a href="${spa.link}" class="btn">Découvrir</a></td>`; });
    tHtml += '</tr>';
    table.innerHTML = tHtml;

    // Menus
    let sHtml = '';
    const nbSelects = Math.min(2, data.length);
    for (let i = 1; i <= nbSelects; i++) {
        sHtml += `<div class="selector-group"><label>Spa ${i}</label><select>`;
        data.forEach((spa, idx) => { sHtml += `<option value="${idx}" ${idx === i-1 ? 'selected' : ''}>${spa.title}</option>`; });
        sHtml += `</select></div>`;
    }
    selectors.innerHTML = sHtml;

    const update = () => {
        const selected = Array.from(selectors.querySelectorAll('select')).map(s => parseInt(s.value));

        table.querySelectorAll('.spa-col').forEach(c => {
            c.style.display = selected.includes(parseInt(c.dataset.idx)) ? 'table-cell' : 'none';
        });

        let cHtml = '';
        selected.forEach(idx => {
            const spa = data[idx];
            cHtml += `<div class="comparison-col">${headerHtml(spa)}`;
            Object.keys(spa.specs).forEach(k => {
                cHtml += `<div class="comparison-row"><div class="comparison-row-label">${k}</div><div class="comparison-row-value">${spa.specs[k] || '—'}</div></div>`;
            });
            cHtml += `<div class="comparison-row" style="border:none;margin-top:10px"><a href="${spa.link}" class="btn">Découvrir</a></div></div>`;
        });
        cols.innerHTML = cHtml;
    };

    selectors.querySelectorAll('select').forEach(s => s.addEventListener('change', update));
    update();
};

// Fonction pour les pages produit (met le spa actuel en premier)
window.initProductComparator = function(spaId, category, containerId) {
    let data = [...(allSpasData[category] || [])];
    if (!data.length) return;

    const currentIndex = data.findIndex(s => s.id === spaId);
    if (currentIndex > 0) {
        const current = data[currentIndex];
        data = [current, ...data.filter((_, i) => i !== currentIndex)];
    }

    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
    <div class="comparator-wrapper"><div class="comparator-section">
        <div class="selectors-container" style="display:flex"></div>
        <div class="table-wrapper"><table></table></div>
        <div class="comparison-cols"></div>
    </div></div>`;

    const table = container.querySelector('table');
    const selectors = container.querySelector('.selectors-container');
    const cols = container.querySelector('.comparison-cols');

    const headerHtml = (spa) => `<div class="spa-header">${spa.img ? `<img src="${spa.img}" class="spa-img" alt="${spa.title}">` : ''}<div class="spa-title">${spa.title}</div><span class="spa-badge ${spa.collectionClass}">${spa.collection}</span></div>`;

    let tHtml = '<tr><th>Caractéristiques</th>';
    data.forEach((spa, i) => {
        tHtml += `<th class="spa-col" data-idx="${i}">${headerHtml(spa)}</th>`;
    });
    tHtml += '</tr>';

    Object.keys(data[0].specs).forEach(key => {
        tHtml += `<tr><td>${key}</td>`;
        data.forEach((spa, i) => { tHtml += `<td class="spa-col" data-idx="${i}">${spa.specs[key] || '—'}</td>`; });
        tHtml += '</tr>';
    });

    tHtml += '<tr><td>Action</td>';
    data.forEach((spa, i) => { tHtml += `<td class="spa-col" data-idx="${i}"><a href="${spa.link}" class="btn">Découvrir</a></td>`; });
    tHtml += '</tr>';
    table.innerHTML = tHtml;

    let sHtml = '';
    const nbSelects = Math.min(2, data.length);
    for (let i = 1; i <= nbSelects; i++) {
        sHtml += `<div class="selector-group"><label>Spa ${i}</label><select>`;
        data.forEach((spa, idx) => { sHtml += `<option value="${idx}" ${idx === i-1 ? 'selected' : ''}>${spa.title}</option>`; });
        sHtml += `</select></div>`;
    }
    selectors.innerHTML = sHtml;

    const update = () => {
        const selected = Array.from(selectors.querySelectorAll('select')).map(s => parseInt(s.value));

        table.querySelectorAll('.spa-col').forEach(c => {
            c.style.display = selected.includes(parseInt(c.dataset.idx)) ? 'table-cell' : 'none';
        });

        let cHtml = '';
        selected.forEach(idx => {
            const spa = data[idx];
            cHtml += `<div class="comparison-col">${headerHtml(spa)}`;
            Object.keys(spa.specs).forEach(k => {
                cHtml += `<div class="comparison-row"><div class="comparison-row-label">${k}</div><div class="comparison-row-value">${spa.specs[k] || '—'}</div></div>`;
            });
            cHtml += `<div class="comparison-row" style="border:none;margin-top:10px"><a href="${spa.link}" class="btn">Découvrir</a></div></div>`;
        });
        cols.innerHTML = cHtml;
    };

    selectors.querySelectorAll('select').forEach(s => s.addEventListener('change', update));
    update();
};
