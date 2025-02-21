/* Banco de Dados */
window.plantIndex = {
"Pitangueira": "468865.js"
};

/* Normalizador, permite o usuário pesquisar de diversas formas */
function normalizeText(text) {
return text
.normalize("NFD") 
.replace(/[\u0300-\u036f]/g, "") 
.toLowerCase()
.replace(/\s+/g, "-"); }

window.normalizedIndex = {};
for (let key in window.plantIndex) {
window.normalizedIndex[normalizeText(key)] = window.plantIndex[key]; }

function buscarPlantas(nome) {
let nomeNormalizado = normalizeText(nome);
let resultados = new Map(); 

for (let key in window.plantIndex) {
if (normalizeText(key).includes(nomeNormalizado)) {
let arquivo = window.plantIndex[key];

if (!resultados.has(arquivo)) {
resultados.set(arquivo, { nome: key, arquivo });
}}}

return resultados.size > 0 
? Array.from(resultados.values()) 
: [{ nome: "Nenhuma planta encontrada.", arquivo: null }]; }
