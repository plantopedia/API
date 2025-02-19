(function() {
    console.log("Arquivo 468865.js carregado!");

    let localPlantData = {
        name: "Pitangueira Cuzudus",
        scientificName: "Eugenia uniflora",
        lifespan: "50 anos",
        lightRequirement: "8H/Dia",
        waterRequirement: "3L/Dia",
        type: "Frutífera",
        ecologicalBenefits: "Atrai pássaros",
        pestSusceptibility: "Baixa",
        medicinalProperties: "Anti-inflamatório",
        hasFruit: true,
        fruitType: "Comestível",
        leafType: "Simples",
        rootDepth: "2 metros",
        maxHeight: "10 metros",
        growthRate: "30 cm/ano",
        preferredSoil: "Ácido/Seco",
        nativeRegion: "Brasil",
        sustainability: "Melhora o solo",
        popularNames: ["Pitangueira", "Cerejeira-do-rio-grande"],
        image: "https://arvore.aperamservicos.com.br/wp-content/uploads/2014/11/Eugenia_Uniflora_11.jpg",
        about: "A Pitangueira Comum é uma planta de pequeno porte..."
    };

    window.plantDatabase = window.plantDatabase || {};
    window.plantDatabase["468865.js"] = localPlantData;

    console.log("Dados armazenados em window.plantDatabase:", window.plantDatabase["468865.js"]);
})();
