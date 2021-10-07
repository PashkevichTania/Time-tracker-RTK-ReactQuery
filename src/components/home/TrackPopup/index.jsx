import { useLocalStorage } from 'hooks/SHARED';
import { useState } from 'react';
import {
  Body,
  Button,
  Footer,
  Frame,
  Header,
  RecordKey,
  Wrapper,
} from './styled';
import {useDispatch, useSelector} from "react-redux";
import {currentUserSelector} from "redux/selectors";
import {setIsPopupOpened, updateUser} from "redux/actions";

export default function TrackPopup() {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector)
  const [projectTime, setProjectTime] = useState(currentUser.projectTime);
  const [note, setNote] = useState(currentUser.note);
  const [isTracked, setIsTracked] = useState(currentUser.isTracked);
  const [localStorageValue, setLocalStorageValue] = useLocalStorage(
    '_TRACK-APP_',
    null
  );

  const checkboxTogglerHandler = () => {
    setIsTracked(prev => !prev);
  };

  const onNoteTypeHandler = e => {
    setNote(e.target.value);
  };

  const onProjectTypeHandler = e => {
    setProjectTime(e.target.value);
  };

  const onSaveClickHandler = () => {
    const updatedUser = {
      ...currentUser,
      projectTime,
      note,
      isTracked,
    };
    dispatch(updateUser(updatedUser))
    const localStorageUsers = localStorageValue;
    localStorageUsers.splice(currentUser.indexArray, 1, updatedUser);
    setLocalStorageValue(localStorageUsers);
    dispatch(setIsPopupOpened(false));
  };

  return (
    <Wrapper onClick={() => dispatch(setIsPopupOpened(false))}>
      <Frame onClick={e => e.stopPropagation()}>
        <Header>Track User</Header>

        <Body>
          <div style={{ marginBottom: '15px' }}>
            <RecordKey>Name:</RecordKey> {currentUser.name}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <RecordKey>Project Time:</RecordKey>
            <div>
              <input
                type="text"
                value={projectTime}
                onChange={onProjectTypeHandler}
              />
            </div>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <RecordKey as="div">Note:</RecordKey>
            <textarea
              name="popup"
              cols="30"
              rows="10"
              value={note}
              onChange={onNoteTypeHandler}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <RecordKey>Tracked:</RecordKey>

            <input
              type="checkbox"
              checked={isTracked}
              onChange={checkboxTogglerHandler}
            />
          </div>
        </Body>

        <Footer>
          <Button color="#ffbaba" onClick={() => dispatch(setIsPopupOpened(false))}>
            &#10005;
          </Button>
          <Button color="#95dea8" onClick={onSaveClickHandler}>
            &#10003;
          </Button>
        </Footer>
      </Frame>
    </Wrapper>
  );
}
