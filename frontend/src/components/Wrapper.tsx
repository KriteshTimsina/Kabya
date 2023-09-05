import { IWrapper } from "../utils/types";

export const Wrapper = (props: IWrapper) => {
  return (
    <div className={`h-[calc(100%-80px)] pt-top ${props.className}`}>
      {props.children}
    </div>
  );
};
