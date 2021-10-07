import { useEffect } from 'react';
import { Wrapper } from './styled';
import { getUsersAPI } from 'services/home';
import NavigationTabs from 'components/home/NavigationTabs/index';
import TrackPopup from 'components/home/TrackPopup/index';
import TableInfo from 'components/home/TableInfo/index';
import { useLocalStorage } from 'hooks/SHARED';
import { Header } from 'styles/SHARED';
import InfoPopup from 'components/SHARED/InfoPopup/index';
import {useDispatch, useSelector} from "react-redux";
import {popupMessageOpenedSelector, popupOpenedSelector} from "redux/selectors";
import {setIsMessagePopupOpened, setUsers} from "redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  const isPopupOpened = useSelector(popupOpenedSelector)
  const isInfoPopupOpened = useSelector(popupMessageOpenedSelector)
  const [localStorageValue, setLocalStorageValue] = useLocalStorage(
    '_TRACK-APP_',
    null
  );

  useEffect(() => {
    (async () => {
      if (localStorageValue === null) {
        try {
          const users = await getUsersAPI();
          const usersExtended = users.map((user, index) => ({
            ...user,
            projectTime: 0,
            note: '',
            isTracked: false,
            indexArray: index,
          }));

          setLocalStorageValue(usersExtended);
          dispatch(setUsers(usersExtended));
        } catch (error) {
          dispatch(setIsMessagePopupOpened(true))
        }
      }

      if (localStorageValue !== null) {
        dispatch(setUsers(localStorageValue));
      }
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Header>Time Tracker</Header>
      <NavigationTabs />
      <TableInfo />
      {isInfoPopupOpened && <InfoPopup message="Connection failed!!!" />}
      {isPopupOpened && <TrackPopup />}
    </Wrapper>
  );
}
