import { ProductContextProvider } from "./ProductContext";
import { ModalContextProvider } from "./ModalContext";

type Providers = {
  children: React.ReactNode;
};

const Providers = ({ children }: Providers) => {
  return (
    <ProductContextProvider>
      <ModalContextProvider>{children}</ModalContextProvider>
    </ProductContextProvider>
  );
};

export { Providers };
