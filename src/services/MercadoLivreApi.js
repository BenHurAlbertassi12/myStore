export function getItem(item) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=$${item}`)
    .then(response => (
        response.ok
        ? response.json()
        : Promise.reject(new Error('Api Error'))
    ));   
}

export function getCategory() {
    return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then(response => (
        response.ok
        ? response.json()
        : Promise.reject(new Error("Api Error"))
    ));
}

export function getCategoryAndItem(idCategory, item) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=$${idCategory}&q=$${item}`)          
    .then(response => (
        response.ok
        ? response.json()
        : Promise.reject(new Error("Api Error"))
    ));
}