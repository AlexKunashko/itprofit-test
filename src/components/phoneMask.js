import Mask from "inputmask";

export const phoneMask = () => {
  const im = new Mask("+375 (99) 999-99-99");
  im.mask("#phone");
};
