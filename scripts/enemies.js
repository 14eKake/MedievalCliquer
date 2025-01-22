import { soldiers } from './units.js';

let enemyTimer = 10;
let enemies = 0;

const enemyTimerDisplay = document.getElementById('enemyTimer');
const enemyCountDisplay = document.getElementById('enemyCount');

export function initEnemies() {
    setInterval(() => {
        if (enemyTimer > 0) {
            enemyTimer -= 1;
        } else {
            spawnEnemies();
        }
        updateEnemies();
    }, 1000);
}

function spawnEnemies() {
    enemies += Math.floor(Math.random() * 5) + 1; // Ajoute entre 1 et 5 ennemis
    enemyTimer = 10;
    updateEnemies();
}

function updateEnemies() {
    enemyTimerDisplay.textContent = enemyTimer;
    enemyCountDisplay.textContent = enemies;

    // Si des ennemis sont présents et des soldats sont disponibles
    if (enemies > 0 && soldiers > 0) {
        enemies -= soldiers; // Les soldats combattent
        updateEnemies();
    }
}

export { enemies };
