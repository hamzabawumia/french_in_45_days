// src/_data/quizData.js
const rawData = require('../data/rawData.json'); // Adjust the path as necessary

const chunkSize = 5;

function getQuizData() {
    const quizData = [];
    const totalPairs = rawData.length;

    for (let i = 0; i < totalPairs; i += chunkSize) {
        const chunk = rawData.slice(i, i + chunkSize);
        quizData.push({
            question: "Match the ENGLISH sentences, phrases, or words with their correct meanings in FRENCH",
            pairs: chunk
        });
    }

    return quizData;
}

module.exports = getQuizData();
