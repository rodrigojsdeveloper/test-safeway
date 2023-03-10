import { IModalBackground, IModalContextData } from "../../interfaces";
import { createContext, useState } from "react";

export const ModalContext = createContext({} as IModalContextData);

export const ModalContextProvider = ({ children }: IModalBackground) => {
  const [openModalCheckoutCart, setOpenModalCheckoutCart] =
    useState<boolean>(false);

  const handleOpenModalCheckoutCart = () => setOpenModalCheckoutCart(true);

  const handleCloseModalCheckoutCart = () => setOpenModalCheckoutCart(false);

  return (
    <ModalContext.Provider
      value={{
        handleCloseModalCheckoutCart,
        handleOpenModalCheckoutCart,
        openModalCheckoutCart,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
