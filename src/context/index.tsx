import { CategoryContextProvider } from "./CategoryContext";
import { ProductContextProvider } from "./ProductContext";
import { ModalContextProvider } from "./ModalContext";

type Providers = {
  children: React.ReactNode;
};

const Providers = ({ children }: Providers) => {
  return (
    <ProductContextProvider>
      <ModalContextProvider>
        <CategoryContextProvider>{children}</CategoryContextProvider>
      </ModalContextProvider>
    </ProductContextProvider>
  );
};

export { Providers };
