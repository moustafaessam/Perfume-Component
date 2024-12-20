import "./styles.css";
import Content from "./Content";
import Image from "./Image";
import TextBox from "./TextBox";
import Text from "./Text";
import Price from "./Price";
import Button from "./Button";

function App() {
  return (
    <>
      <Content>
        <Image />
        <TextBox>
          <Text />
          <Price />
          <Button />
        </TextBox>
      </Content>
    </>
  );
}

export default App;
