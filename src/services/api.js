const API_BASE_URL = "http://localhost/EcommerceBK/api";
// const API_BASE_URL = "https://ecommercebk.lovestoblog.com/EcommerceBK/api";

export const fetchProducts = async (params = {}) => {
  console.log("this is params", params);

  const urlParams = new URLSearchParams(params).toString();
  console.log("this is urlParams", urlParams);
  const url = `${API_BASE_URL}/products/list.php?${urlParams}`;
  console.log("this is urlParams", url);
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
  });
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  return await response.json();
};
