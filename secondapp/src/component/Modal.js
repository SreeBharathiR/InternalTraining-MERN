import React, { forwardRef } from "react";

const Modal = forwardRef(({ children }, ref) => {
  return <dialog ref={ref}>{children}</dialog>;
});

export default Modal;
