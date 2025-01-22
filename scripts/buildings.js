import { gold, wood, food, stone, updateResources } from './resources.js';

let farms = 0;
let barracks = 0;

const farmDisplay = document.getElementById('farmCount');
const barracksDisplay = document.getElementById('barracksCount');

export function initBuildings() {
    document.getElementById('buildFarm').addEventListener('click', () => {
        if (gold >= 50 && wood >= 20) {
            gold -= 50;
            wood -= 20;
            farms += 1;
            updateResources();
            updateBuildings();
        }
    });

    document.getElementById('buildBarracks').addEventListener('click', () => {
        if (gold >= 100 && stone >= 50) {
            gold -= 100;
            stone -= 50;
            barracks += 1;
            updateResources();
            updateBuildings();
        }
    });
}

function updateBuildings() {
    farmDisplay.textContent = farms;
    barracksDisplay.textContent = barracks;
}

export { farms, barracks };
