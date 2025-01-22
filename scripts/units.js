import { food, updateResources } from './resources.js';

let soldiers = 0;
const soldierDisplay = document.getElementById('soldierCount');

export function initUnits() {
    document.getElementById('recruitSoldier').addEventListener('click', () => {
        if (food >= 10) {
            food -= 10;
            soldiers += 1;
            updateResources();
            updateUnits();
        }
    });
}

function updateUnits() {
    soldierDisplay.textContent = soldiers;
}

export { soldiers };
