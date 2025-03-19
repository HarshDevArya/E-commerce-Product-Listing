const API_BASE_URL = "http://localhost/EcommerceBK/api";

export const fetchProducts = async (params = {}) => {
  console.log("this is params", params);
  const urlParams = new URLSearchParams(params).toString();
  const url = `${API_BASE_URL}/products/list.php?${urlParams}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  return await response.json();
};
