import { useState } from "react";

export default function FilterBar({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // const handleFilterChange = () => {
  //   onFilterChange({ minPrice, maxPrice, sortOrder });
  // };
  const handleFilterChange = () => {
    const filters = {};
    // Only add minPrice if provided
    if (minPrice.trim() !== "") {
      filters.minPrice = parseFloat(minPrice);
    }
    // Only add maxPrice if provided
    if (maxPrice.trim() !== "") {
      filters.maxPrice = parseFloat(maxPrice);
    }
    // Add sortOrder regardless (or you could also conditionally add it)
    if (sortOrder.trim() !== "") {
      filters.sortOrder = sortOrder;
    }
    onFilterChange(filters);
  };

  return (
    <div className="mb-4">
      <div className="row g-2">
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}>
            <option value="">Sort By</option>
            <option value="low_to_high">Price: Low to High</option>
            <option value="high_to_low">Price: High to Low</option>
          </select>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" onClick={handleFilterChange}>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
