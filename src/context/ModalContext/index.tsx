import React, { createContext, useState } from "react";

type ModalContextData = {
  handleOpenModalCheckoutCart: () => void;
  handleCloseModalCheckoutCart: () => void;
  openModalCheckoutCart: boolean;
};

type ModalContextProvider = {
  children: React.ReactNode;
};

export const ModalContext = createContext({} as ModalContextData);

export const ModalContextProvider = ({ children }: ModalContextProvider) => {
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
