// comparateur-final-sync-v3.js
// Données mises à jour d'après les FT « MAJ 2026 » + corrections validées K. Ranson (23, 24 et 25/07/2026).
// En cas de conflit, les emails de correction (plus récents, valeurs usine confirmées) font foi.
const allSpasData = {
  "mono": [
    { "id": "swim23s", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/acapulco2.webp", "title": "Swimm 23S", "collection": "Mono", "collectionClass": "swim", "link": "#", "specs": { "Dimensions": "460 × 228 × 153,5 cm", "Places": "4 places", "Système de Nage": "3 pompes · 3 jets Powerswimm", "Jets Massage": "22 jets", "Hauteur de Nage": "120 cm", "Consommation Moyenne": "≈ 3,00 € / séance", "Caractéristiques Principales": "Nage à contre-courant, Sièges confort, LED" } },
    { "id": "swim22", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/swim22.webp", "title": "Swim 22", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-swim22", "specs": { "Dimensions": "398 × 230 × 116 cm", "Places": "4 places", "Système de Nage": "3 pompes · 3 jets à Lame", "Jets Massage": "45 jets", "Hauteur de Nage": "98 cm", "Consommation Moyenne": "≈ 2,50 € / séance", "Caractéristiques Principales": "Nage à contre-courant, Jets réglables, Éclairage" } },
    { "id": "classico", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/classico.webp", "title": "Classico", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-classico", "specs": { "Dimensions": "450 × 228 × 154,5 cm", "Places": "5 places", "Système de Nage": "3 pompes · 6 jets Superswimm", "Jets Massage": "38 jets", "Hauteur de Nage": "120 cm", "Consommation Moyenne": "≈ 3,10 € / séance", "Caractéristiques Principales": "Système de nage, Mur de massage, Sièges ergonomiques, LED multicolore" } },
    { "id": "swim24s", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/swim24s.webp", "title": "Swim 24S", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-swim24s", "specs": { "Dimensions": "580 × 230 × 155 cm", "Places": "4 places", "Système de Nage": "3 pompes · 3 jets à Lame", "Jets Massage": "49 jets", "Hauteur de Nage": "130 cm", "Consommation Moyenne": "≈ 3,40 € / séance", "Caractéristiques Principales": "Nage à contre-courant, Zone détente, Chromothérapie" } },
    { "id": "swim22s", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/swim22.webp", "title": "Swim 22S", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-swim22s", "specs": { "Dimensions": "398 × 230 × 155 cm", "Places": "4 places", "Système de Nage": "3 pompes · 3 jets à Lame", "Jets Massage": "45 jets", "Hauteur de Nage": "130 cm", "Consommation Moyenne": "≈ 2,00 € / séance", "Caractéristiques Principales": "Système de nage, Jets de massage, Éclairage LED" } },
    { "id": "lusso", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/lusso.webp", "title": "Lusso", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-lusso", "specs": { "Dimensions": "530 × 228 × 167,5 cm", "Places": "5 places", "Système de Nage": "3 pompes · 6 jets Superswimm", "Jets Massage": "39 jets", "Hauteur de Nage": "130 cm", "Consommation Moyenne": "≈ 3,20 € / séance", "Caractéristiques Principales": "Nage à contre-courant, Pack Aquagym de série, Chromothérapie LED" } },
    { "id": "storm", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/storm.webp", "title": "Storm", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-storm", "specs": { "Dimensions": "398 × 230 × 159 cm", "Places": "4 places", "Système de Nage": "3 pompes · 3 jets à Lame", "Jets Massage": "36 jets (26 hydro + 10 air)", "Hauteur de Nage": "130 cm", "Consommation Moyenne": "≈ 2,50 € / séance", "Caractéristiques Principales": "Nage à contre-courant, Zone massage, Éclairage LED" } },
    { "id": "swim28s", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/Swim28+PRO+2+2025.png", "title": "Swim 28S", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-swim28s", "specs": { "Dimensions": "585 × 230 × 155 cm", "Places": "5 places", "Système de Nage": "3 pompes · 3 jets de nage", "Jets Massage": "72 jets", "Hauteur de Nage": "130 cm", "Consommation Moyenne": "≈ 3,50 € / séance", "Caractéristiques Principales": "Système de nage performant, Mur de massage, Chromothérapie" } },
    { "id": "acapulco2", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/acapulco2.webp", "title": "Acapulco 2", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-acapulco2", "specs": { "Dimensions": "560 × 228 × 153,5 cm", "Places": "4 places", "Système de Nage": "3 pompes · 3 jets Powerswimm", "Jets Massage": "22 jets", "Hauteur de Nage": "120 cm", "Consommation Moyenne": "≈ 3,00 € / séance", "Caractéristiques Principales": "Nage à contre-courant, Sièges confort, LED" } }
  ],
  "double": [
    { "id": "puntacana", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/punta-cana.webp", "title": "Punta Cana", "collection": "Double", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-punta-cana", "specs": { "Dimensions": "580 × 225 × 155 cm", "Places": "4 places", "Système de Nage": "3 pompes · 3 jets à Lame", "Jets Massage": "38 jets", "Hauteur de Nage": "130 cm", "Consommation Moyenne": "≈ 4,50 € / séance", "Caractéristiques Principales": "Double bassin, Nage intensive, Zone massage XXL" } },
    { "id": "giulia", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/giulia-spa-de-nage.webp", "title": "Giulia", "collection": "Double", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-giulia", "specs": { "Dimensions": "590 × 220 × 166,5 cm", "Places": "6 places", "Système de Nage": "3 pompes · 3 jets Superswimm", "Jets Massage": "73 jets", "Hauteur de Nage": "130 cm", "Consommation Moyenne": "≈ 4,20 € / séance", "Caractéristiques Principales": "Double bassin, Nage pro, Chromothérapie" } },
    { "id": "duce", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/duce.webp", "title": "Duce", "collection": "Double", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-duce", "specs": { "Dimensions": "598 × 228 × 167,5 cm", "Places": "7 places", "Système de Nage": "3 pompes · 6 jets Superswimm", "Jets Massage": "80 jets", "Hauteur de Nage": "130 cm", "Consommation Moyenne": "≈ 4,00 € / séance", "Caractéristiques Principales": "Double bassin, Mur de massage, LED" } },
    { "id": "fidji", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/fidji.webp", "title": "Fidji", "collection": "Double", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-fidji", "specs": { "Dimensions": "590 × 225 × 165,5 cm", "Places": "5 places", "Système de Nage": "3 pompes · 3 jets Superswimm", "Jets Massage": "54 jets", "Hauteur de Nage": "130 cm", "Consommation Moyenne": "≈ 4,60 € / séance", "Caractéristiques Principales": "Double bassin, Zone massage XXL, Chromothérapie LED" } }
  ],
  "pro": [
    { "id": "stormPro", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/storm-pro.webp", "title": "Storm Pro", "collection": "Pro", "collectionClass": "pro", "link": "https://www.bluelagoonspas.com/spa-de-nage-storm-pro", "specs": { "Dimensions": "466 × 230 × 159 cm", "Places": "3 places", "Jets de Nage": "1 turbine 2,8 kW – 12 vitesses", "Jets Massage": "36 jets (26 hydro + 10 air)", "Hauteur de Nage": "130 cm", "Caractéristiques Principales": "Système turbine, Nage professionnelle, Débit 20 m³/min, Résistance réglable" } },
    { "id": "swim22Pro", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/swim22-pro.webp", "title": "Swim 22 Pro", "collection": "Pro", "collectionClass": "pro", "link": "https://www.bluelagoonspas.com/spa-de-nage-swim22-pro", "specs": { "Dimensions": "466 × 230 × 155 cm", "Places": "4 places", "Jets de Nage": "1 turbine 2,8 kW – 12 vitesses", "Jets Massage": "45 jets", "Hauteur de Nage": "130 cm", "Caractéristiques Principales": "Turbine haute performance, Jets massage intégrés, Chromothérapie, Zone relaxation" } },
    { "id": "swim24Pro", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/swim24-pro.webp", "title": "Swim 24 Pro", "collection": "Pro", "collectionClass": "pro", "link": "https://www.bluelagoonspas.com/spa-de-nage-swim24-pro", "specs": { "Dimensions": "580 × 230 × 155 cm", "Places": "4 places", "Jets de Nage": "1 turbine 2,8 kW – 12 vitesses", "Jets Massage": "49 jets", "Hauteur de Nage": "130 cm", "Caractéristiques Principales": "Système turbine pro, Nage intensive, Massage ciblé, LED" } },
    { "id": "swim28Pro", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/Swim28+PRO+2+2025.png", "title": "Swim 28 Pro", "collection": "Pro", "collectionClass": "pro", "link": "https://www.bluelagoonspas.com/spa-de-nage-swim28-pro", "specs": { "Dimensions": "630 × 230 × 155 cm", "Places": "5 places", "Jets de Nage": "1 turbine 2,8 kW – 12 vitesses", "Jets Massage": "72 jets", "Hauteur de Nage": "130 cm", "Caractéristiques Principales": "Turbine 2,8 kW, Nage intensive, Mur de massage, LED RGB" } }
  ]
};

window.renderGlobalComparator = function(category, containerId) {
    const data = allSpasData[category];
    const container = document.getElementById(containerId);
    if (!data || !container) return;

    // Layout
    container.innerHTML = `
    <div class="comparator-wrapper"><div class="comparator-section">
        <div class="selectors-container" style="display:flex"></div>
        <div class="table-wrapper"><table></table></div>
        <div class="comparison-cols"></div>
    </div></div>`;

    const table = container.querySelector('table');
    const selectors = container.querySelector('.selectors-container');
    const cols = container.querySelector('.comparison-cols');

    // Headers Desktop
    let tHtml = '<tr><th>Caractéristiques</th>';
    data.forEach((spa, i) => {
        tHtml += `<th class="spa-col" data-idx="${i}"><div class="spa-header"><img src="${spa.img}" class="spa-img"><div class="spa-title">${spa.title}</div><span class="spa-badge ${spa.collectionClass}">${spa.collection}</span></div></th>`;
    });
    tHtml += '</tr>';

    // Specs
    Object.keys(data[0].specs).forEach(key => {
        tHtml += `<tr><td>${key}</td>`;
        data.forEach((spa, i) => { tHtml += `<td class="spa-col" data-idx="${i}">${spa.specs[key]}</td>`; });
        tHtml += '</tr>';
    });

    // Action
    tHtml += '<tr><td>Action</td>';
    data.forEach((spa, i) => { tHtml += `<td class="spa-col" data-idx="${i}"><a href="${spa.link}" class="btn">Découvrir</a></td>`; });
    tHtml += '</tr>';
    table.innerHTML = tHtml;

    // Menus
    let sHtml = '';
    for (let i = 1; i <= 2; i++) {
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
            cHtml += `<div class="comparison-col"><div class="spa-header"><img src="${spa.img}" class="spa-img"><div class="spa-title">${spa.title}</div><span class="spa-badge ${spa.collectionClass}">${spa.collection}</span></div>`;
            Object.keys(spa.specs).forEach(k => {
                cHtml += `<div class="comparison-row"><div class="comparison-row-label">${k}</div><div class="comparison-row-value">${spa.specs[k]}</div></div>`;
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
    let data = [...allSpasData[category]];
    if (!data) return;

    // Réordonner pour mettre le spa actuel en premier
    const currentIndex = data.findIndex(s => s.id === spaId);
    if (currentIndex > 0) {
        const current = data[currentIndex];
        data = [current, ...data.filter((_, i) => i !== currentIndex)];
    }

    const container = document.getElementById(containerId);
    if (!container) return;

    // Layout
    container.innerHTML = `
    <div class="comparator-wrapper"><div class="comparator-section">
        <div class="selectors-container" style="display:flex"></div>
        <div class="table-wrapper"><table></table></div>
        <div class="comparison-cols"></div>
    </div></div>`;

    const table = container.querySelector('table');
    const selectors = container.querySelector('.selectors-container');
    const cols = container.querySelector('.comparison-cols');

    // Headers Desktop
    let tHtml = '<tr><th>Caractéristiques</th>';
    data.forEach((spa, i) => {
        tHtml += `<th class="spa-col" data-idx="${i}"><div class="spa-header"><img src="${spa.img}" class="spa-img"><div class="spa-title">${spa.title}</div><span class="spa-badge ${spa.collectionClass}">${spa.collection}</span></div></th>`;
    });
    tHtml += '</tr>';

    // Specs
    Object.keys(data[0].specs).forEach(key => {
        tHtml += `<tr><td>${key}</td>`;
        data.forEach((spa, i) => { tHtml += `<td class="spa-col" data-idx="${i}">${spa.specs[key]}</td>`; });
        tHtml += '</tr>';
    });

    // Action
    tHtml += '<tr><td>Action</td>';
    data.forEach((spa, i) => { tHtml += `<td class="spa-col" data-idx="${i}"><a href="${spa.link}" class="btn">Découvrir</a></td>`; });
    tHtml += '</tr>';
    table.innerHTML = tHtml;

    // Menus
    let sHtml = '';
    for (let i = 1; i <= 2; i++) {
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
            cHtml += `<div class="comparison-col"><div class="spa-header"><img src="${spa.img}" class="spa-img"><div class="spa-title">${spa.title}</div><span class="spa-badge ${spa.collectionClass}">${spa.collection}</span></div>`;
            Object.keys(spa.specs).forEach(k => {
                cHtml += `<div class="comparison-row"><div class="comparison-row-label">${k}</div><div class="comparison-row-value">${spa.specs[k]}</div></div>`;
            });
            cHtml += `<div class="comparison-row" style="border:none;margin-top:10px"><a href="${spa.link}" class="btn">Découvrir</a></div></div>`;
        });
        cols.innerHTML = cHtml;
    };

    selectors.querySelectorAll('select').forEach(s => s.addEventListener('change', update));
    update();
};
