type Props = {
  children?: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default Main;
