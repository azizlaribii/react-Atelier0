import React, { useEffect } from 'react';
import './Ecmascript/index.js'; // Exécute les exercices
import './Ecmascript/fonction.js'; // Exécute la fonction Search

function App() {
    useEffect(() => {
        // Les console.log apparaîtront dans la console du navigateur
        console.log("Application React chargée - Vérifie la console !");
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Atelier React - ES6</h1>
            <p>Ouvre la console du navigateur (F12) pour voir les résultats des exercices.</p>
            <ul>
                <li>Exercice 1: findLongestWord</li>
                <li>Exercice 2: countOccurrences</li>
                <li>Exercice 3: calculateTotalGrades</li>
                <li>Exercice 4: Tableau Tab avec ID et fonction Search</li>
            </ul>
        </div>
    );
}

export default App;