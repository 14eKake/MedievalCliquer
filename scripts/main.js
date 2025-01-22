import { initResources, updateResources } from './resources.js';
import { initBuildings } from './buildings.js';
import { initUnits } from './units.js';
import { initEnemies } from './enemies.js';

// Initialisation des composants
initResources();
initBuildings();
initUnits();
initEnemies();

// Boucle de jeu (pour les mises à jour automatiques)
setInterval(() => {
    updateResources(); // Mise à jour des ressources
}, 1000);
