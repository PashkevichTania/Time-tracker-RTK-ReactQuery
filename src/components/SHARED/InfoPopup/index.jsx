import { Body, Button, Footer, Frame, Header, Wrapper } from './styled';
import {useDispatch} from "react-redux";
import {setIsMessagePopupOpened} from "redux/actions";

export default function InfoPopup({ message }) {
  const dispatch = useDispatch();

  const onClosePopupHandler = () => {
    dispatch(setIsMessagePopupOpened(false));
  };

  return (
    <Wrapper onClick={onClosePopupHandler}>
      <Frame onClick={e => e.stopPropagation()}>
        <Header>Application Message</Header>

        <Body>{message}</Body>

        <Footer>
          <Button color="#ffbaba" onClick={onClosePopupHandler}>
            &#10005;
          </Button>
        </Footer>
      </Frame>
    </Wrapper>
  );
}
