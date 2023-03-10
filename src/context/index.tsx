import { ProductContextProvider } from "./ProductContext";

type Providers = {
  children: React.ReactNode;
};

const Providers = ({ children }: Providers) => {
  return <ProductContextProvider>{children}</ProductContextProvider>;
};

export { Providers };
