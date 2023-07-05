export function fetchBreeds() {
  const BASE_URL =
    'https://api.thecatapi.com/v1/breeds?api_key=live_2dLBpve5xk9r0vZZzCBfUCIhE35eWKy5KVnRfuxdoHPSYHk8RfO3RLeTjR6y1xlr';

  return fetch(BASE_URL)
    .then(res => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then(res => res.map(item => ({ name: item.name, id: item.id })))
    .catch(error => console.log(error));
}
export function fetchCatByBreed(breedId) {
  const BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_2dLBpve5xk9r0vZZzCBfUCIhE35eWKy5KVnRfuxdoHPSYHk8RfO3RLeTjR6y1xlr`;
  return fetch(BASE_URL)
    .then(res => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .catch(error => console.log(error));
}
