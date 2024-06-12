import ProductsList from "@/widgets/products/ui/ProductsList/ProductsList";
import PaginationWrapper from "@/feauters/pagination/ui/Pagination/Pagination";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { IFilters } from "@/shared/interfaces";
import { IProducts } from "@/entities/products";
import { usePaginationProducts } from "../../utils/hooks/usePaginationProducts";

interface Props {
  filters: IFilters;
  products: IProducts[];
  isLoading: boolean;
}

const ProductsListWithPagination = ({ filters, products, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationProducts(filters);

  return (
    <PaginationWrapper
      top
      bottom
      handlePreviousPage={handlePreviousPage}
      handleNextPage={handleNextPage}
      handlePageClick={handlePageClick}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
    >
      <ProductsList
        direction="column"
        type="item"
        isLoading={isLoading}
        products={products}
      />
    </PaginationWrapper>
  );
};

export default ProductsListWithPagination;
