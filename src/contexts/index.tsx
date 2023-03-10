import { CategoryContextProvider } from "./CategoryContext";
import { ProductContextProvider } from "./ProductContext";
import { ModalContextProvider } from "./ModalContext";
import { IModalBackground } from "../interfaces";

const Providers = ({ children }: IModalBackground) => {
  return (
    <ProductContextProvider>
      <ModalContextProvider>
        <CategoryContextProvider>{children}</CategoryContextProvider>
      </ModalContextProvider>
    </ProductContextProvider>
  );
};

export { Providers };
