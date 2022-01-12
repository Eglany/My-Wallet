const PRICE_API = 'https://economia.awesomeapi.com.br/json/all';

export const getPrice = async () => {
  const response = await fetch(PRICE_API);
  const data = await response.json();

  return data;
};

export default getPrice;
