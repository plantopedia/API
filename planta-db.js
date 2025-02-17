window.plantIndex = {
"Pitangueira": "468865.js",
"Pitangueira Comum": "468865.js",

/* Test Files */
"Pitangueira Roxa": "468865.js",
"Pitangueira Verde": "468865.js",
"Pitangueira Azul": "468865.js",
"Pitangueira Amarelo": "468865.js",
"Pitangueira Marrom": "468865.js",
"Pitangueira Rosa": "468865.js",

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
    let arquivosVistos = new Set();
    let resultados = [];

    for (let key in window.plantIndex) {
        if (normalizeText(key).includes(nomeNormalizado)) {
            let arquivo = window.plantIndex[key];

            if (typeof arquivo === "string") {
                // Se for uma string, adiciona diretamente
                if (!arquivosVistos.has(arquivo)) {
                    arquivosVistos.add(arquivo);
                    resultados.push(arquivo);
                }
            } else if (Array.isArray(arquivo)) {
                // Se for um array, adiciona todos os itens únicos
                for (let item of arquivo) {
                    if (!arquivosVistos.has(item)) {
                        arquivosVistos.add(item);
                        resultados.push(item);
                    }
                }
            } else if (typeof arquivo === "object" && arquivo !== null) {
                // Se for um objeto, pega todos os valores e adiciona
                for (let valor of Object.values(arquivo)) {
                    if (!arquivosVistos.has(valor)) {
                        arquivosVistos.add(valor);
                        resultados.push(valor);
                    }
                }
            }
        }
    }

    return resultados.length > 0 ? resultados : [null];
}
