import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import FilterBar from "./FilterBar";
import Pagination from "./Pagination";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const params = {
          search,
          page,
          ...filters,
        };
        // Call the centralized API method with the search parameter
        const data = await fetchProducts(params);
        console.log("this is the Data you are lloking for", data);
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [search, filters, page]);

  const handleFilterChange = (filterData) => {
    setPage(1);
    console.log("this is filter Data", filterData);
    setFilters(filterData);
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search products by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <FilterBar onFilterChange={handleFilterChange} />
      {/* Product Grid */}
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image_url}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">₹{product.price}</p>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
