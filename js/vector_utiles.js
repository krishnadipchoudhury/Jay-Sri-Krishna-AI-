// Master keyword list for binary vector indexing
const KEYWORD_LIST = ["area", "capital", "population", "river", "himalaya", "desert", "climate", "size", "weather", "tiger"]; 
export const VECTOR_SIZE = KEYWORD_LIST.length;

/**
 * Generates a binary vector for a knowledge item based on its keywords.
 * @param {Object} item - The knowledge item object.
 * @returns {number[]} The generated binary vector.
 */
export function generateKnowledgeVector(item) {
    const vector = new Array(VECTOR_SIZE).fill(0);
    if (!item.keywords) return vector;

    item.keywords.forEach(keyword => {
        const index = KEYWORD_LIST.indexOf(keyword.toLowerCase());
        if (index !== -1) {
            vector[index] = 1;
        }
    });
    return vector;
}

/**
 * Generates a binary vector for the user input.
 * @param {string} input - The pre-processed user input string.
 * @returns {number[]} The generated binary vector.
 */
export function generateInputVector(input) {
    const vector = new Array(VECTOR_SIZE).fill(0);
    const normalizedInput = input.toLowerCase();
    
    KEYWORD_LIST.forEach((key, i) => {
        if (normalizedInput.includes(key)) vector[i] = 1;
    });
    return vector;
}

/**
 * Calculates the Cosine Similarity between two vectors.
 * @param {number[]} vecA - Vector A.
 * @param {number[]} vecB - Vector B.
 * @returns {number} The similarity score (0.0 to 1.0).
 */
export function cosineSimilarity(vecA, vecB) {
    if (!vecA || !vecB || vecA.length !== vecB.length) return 0;
    let dot = 0, magA = 0, magB = 0;
    for (let i = 0; i < vecA.length; i++) {
        dot += vecA[i] * vecB[i];
        magA += vecA[i] ** 2;
        magB += vecB[i] ** 2;
    }
    magA = Math.sqrt(magA);
    magB = Math.sqrt(magB);
    if (magA === 0 || magB === 0) return 0;
    return +(dot / (magA * magB)).toFixed(4);
}
