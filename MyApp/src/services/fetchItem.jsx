export async function fetchItem() {
  const resposta = await fetch(`https://api.mercadolibre.com/items/Patins}`);
  const response = await resposta.json();
  return response;
}
