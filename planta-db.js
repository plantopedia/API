window.plantIndex = {
    "Pitangueira": "468865.js",
    "Pitangueira Comum": "468865.js",
    "Alta Pitangea": "468865.js",
    "Eugenia Uniflora": "468865.js",
    "Cerejeira do Rio Grande": "468865.js",
    "Pitangea": "468865.js",
    "Pitanga": "468865.js"
};

function normalizeText(text) {
    return text
        .normalize("NFD") 
        .replace(/[\u0300-\u036f]/g, "") 
        .toLowerCase()
        .replace(/\s+/g, "-");
}

window.normalizedIndex = {};
for (let key in window.plantIndex) {
    window.normalizedIndex[normalizeText(key)] = window.plantIndex[key];
}

function buscarPlantas(nome) {
    let nomeNormalizado = normalizeText(nome);
    let resultados = [];

    for (let key in window.plantIndex) {
        if (normalizeText(key).includes(nomeNormalizado)) {
            let arquivos = Array.isArray(window.plantIndex[key]) 
                ? window.plantIndex[key] 
                : [window.plantIndex[key]];
            
            resultados.push({ nome: key, arquivos });
        }
    }

    return resultados.length > 0 ? resultados : [{ nome: "Nenhuma planta encontrada.", arquivos: [] }];
}
