// Zobrazení sekce pro suroviny v hotovém jídle
document.getElementById('is-dish').addEventListener('change', function () {
    const dishIngredients = document.getElementById('dish-ingredients');
    if (this.checked) {
        dishIngredients.style.display = 'block';
    } else {
        dishIngredients.style.display = 'none';
    }
});

// Přidání dalších surovin
document.getElementById('add-ingredient-button').addEventListener('click', function () {
    const ingredientList = document.getElementById('ingredient-list');
    const ingredientGroup = document.createElement('div');
    ingredientGroup.className = 'ingredient-group';

    ingredientGroup.innerHTML = `
        <label for="category">Kategorie:</label>
                    <select id="category" name="category" required>
                        <option value="">Vyberte kategorii</option>
                        <option value="zelenina">Zelenina</option>
                        <option value="ovoce">Ovoce</option>
                        <option value="pecivo">Pečivo</option>
        </select>
        <label for="category">Kategorie:</label>
                    <select id="category" name="category" required>
                        <option value="">Vyberte kategorii</option>
                        <option value="zelenina">Zelenina</option>
                        <option value="ovoce">Ovoce</option>
                        <option value="pecivo">Pečivo</option>
        </select>
        <input type="text" class="dish-ingredient-name" required>
        <label>Gramy:</label>
        <input type="number" class="dish-grams" min="1" required>
        <label>PHE (mg):</label>
        <input type="number" class="dish-phe" min="0" step="0.1" required>
        <button type="button" class="remove-ingredient">Odebrat</button>
    `;

    ingredientList.appendChild(ingredientGroup);

    // Přidání posluchače pro tlačítko "Odebrat"
    const removeButton = ingredientGroup.querySelector('.remove-ingredient');
    removeButton.addEventListener('click', function () {
        ingredientGroup.remove();
    });
});
