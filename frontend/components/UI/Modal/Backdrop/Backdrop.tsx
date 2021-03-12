import { Wrapper } from "./styles";

interface Props {
  opened: boolean;
  close: () => void;
}

const Backdrop: React.FC<Props> = ({ opened, close }) => {
  return <Wrapper onClick={close} opened={opened}></Wrapper>;
};

export default Backdrop;
