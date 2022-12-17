import { API_URL, PREFIX_PRODUCT } from "./const.js";
import { 
    ingredientsList,    
    modalProductTitle,
    modalProductImage,
    modalProductDescription,
    ingredientsCalories,
    modalProductPriceCount,
    modalProduct,
    modalProductBtn
} from "./elements.js";
import { getData } from "./getData.js";

export const openModal = async (id) => {
    const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`)
    modalProductTitle.textContent = product.title;
    modalProductImage.src = `${API_URL}/${product.image}`;

    ingredientsList.textContent = ''

    for (let i = 0; i < product.ingredients.length; i++) {
        const li = document.createElement('li');
        li.classList.add('ingredients__item');
        li.textContent = product.ingredients[i];
        ingredientsList.append(li);
    }

    const ingredientsListItems = product.ingredients.map((item) => {
        const li = document.createElement('li');
        li.classList.add('ingredients__item');
        li.textContent = item;
        return li
    });

    ingredientsList.append(...ingredientsListItems)

    modalProductDescription.textContent = product.description;
    ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`;
    modalProductPriceCount.textContent = product.price;
    modalProductBtn.dataset.idProduct = product.id;

    modalProduct.classList.add('modal_open');
};
