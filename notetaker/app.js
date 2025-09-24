let llama;

async function loadLlama() {
    const llamaModule = await import('./llama/llama.js');
    llama = await llamaModule.loadModel('./llama/llama.wasm', './llama/model.bin');
    document.getElementById('summaryText').textContent = 'Model loaded. Ready to summarize.';
}

document.getElementById('summarizeBtn').addEventListener('click', async () => {
    const text = document.getElementById('notes').value;
    if (!text) return alert('Please type some notes first!');
    document.getElementById('summaryText').textContent = 'Summarizing...';
    try {
        const result = await llama.generate(text, { maxTokens: 150 });
        document.getElementById('summaryText').textContent = result;
    } catch (e) {
        console.error(e);
        document.getElementById('summaryText').textContent = 'Error summarizing.';
    }
});

document.getElementById('flashcardsBtn').addEventListener('click', async () => {
    const text = document.getElementById('notes').value;
    if (!text) return alert('Please type some notes first!');
    const prompt = `Create 5 clear study flashcards (question and answer) from these notes:\n${text}\nFlashcards:`;
    const container = document.getElementById('flashcardsContainer');
    container.innerHTML = 'Generating flashcards...';
    try {
        const result = await llama.generate(prompt, { maxTokens: 300 });
        const flashcardsText = result.split('\n').filter(s => s.trim() !== '');
        container.innerHTML = '';
        flashcardsText.forEach(fc => {
            const div = document.createElement('div');
            div.className = 'flashcard';
            div.contentEditable = true;
            div.textContent = fc;
            container.appendChild(div);
        });
    } catch (e) {
        console.error(e);
        container.innerHTML = 'Error generating flashcards.';
    }
});

document.getElementById('saveFlashcardsBtn').addEventListener('click', () => {
    const cards = Array.from(document.querySelectorAll('.flashcard')).map(fc => fc.textContent);
    if (cards.length === 0) return alert('No flashcards to save!');
    localStorage.setItem('flashcards', JSON.stringify(cards));
    alert('Flashcards saved locally!');
});

document.getElementById('loadFlashcardsBtn').addEventListener('click', () => {
    const stored = JSON.parse(localStorage.getItem('flashcards') || '[]');
    const container = document.getElementById('flashcardsContainer');
    container.innerHTML = '';
    stored.forEach(fc => {
        const div = document.createElement('div');
        div.className = 'flashcard';
        div.contentEditable = true;
        div.textContent = fc;
        container.appendChild(div);
    });
    if (stored.length) alert('Flashcards loaded from local storage!');
});

loadLlama();
