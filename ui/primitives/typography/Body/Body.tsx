import { ReactNode } from "react";

export type Props = {
  children: ReactNode | string;
};

const Body: React.FC<Props> = ({ children }) => <p>{children}</p>;

export default Body;
