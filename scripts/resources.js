// Variables de ressources
let gold = 0;
let wood = 0;
let stone = 0;
let food = 0;

// DOM Elements
const goldDisplay = document.getElementById('goldCount');
const woodDisplay = document.getElementById('woodCount');
const stoneDisplay = document.getElementById('stoneCount');
const foodDisplay = document.getElementById('foodCount');

// Fonction pour initialiser les ressources
export function initResources() {
    document.getElementById('clickGold').addEventListener('click', () => {
        gold += 10;
        updateResources();
    });
}

// Mise à jour de l'affichage
export function updateResources() {
    goldDisplay.textContent = gold;
    woodDisplay.textContent = wood;
    stoneDisplay.textContent = stone;
    foodDisplay.textContent = food;
}

// Export des ressources pour d'autres modules
export { gold, wood, stone, food };
