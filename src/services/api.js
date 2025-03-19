// const API_BASE_URL = "http://localhost/EcommerceBK/api";
const API_BASE_URL = "https://ecommercebk.lovestoblog.com/EcommerceBK/api";

export const fetchProducts = async (params = {}) => {
  console.log("this is params", params);
  const urlParams = new URLSearchParams(params).toString();
  const url = `${API_BASE_URL}/products/list.php?${urlParams}`;
  const response = await fetch(url, {
    method: "GET",
    mode: "cors", // <-- important if you want cors in some setups
  });
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  return await response.json();
};
