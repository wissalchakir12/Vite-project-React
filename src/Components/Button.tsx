import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ onClick, children }: Props) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
