import { render, screen } from "@testing-library/react";
import { useState } from "react";
import { describe, expect } from "vitest";
import SearchBar from "./SearchBar";

const SearBarWrapped = () => {
  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);

  const [sort, setSort] = useState("asc");

  return (
    <SearchBar
      query={query}
      setQuery={setQuery}
      stockChecked={stockChecked}
      setStockChecked={setStockChecked}
      sort={sort}
      setSort={setSort}
    />
  );
};
describe("SearchBar component", () => {
  it("should render the component", async () => {
    render(<SearBarWrapped />);

    const txt = await screen.findByTestId("search-text");
    const checkbox = await screen.findByTestId("search-text");
    const select = await screen.findByTestId("search-select");

    expect(txt).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.nextSibling.textContent).toBe(
      "Only show products in stockS"
    );
    expect(select).toBeInTheDocument();
  });
});
