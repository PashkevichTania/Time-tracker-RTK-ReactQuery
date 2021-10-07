import { useState } from 'react';
import UsersDropdown from 'components/home/UsersDropdown/index';
import { Tab, Wrapper } from './styled';
import {useDispatch} from "react-redux";
import {filterTracked} from "redux/userSlice";


export default function NavigationTabs() {
  const dispatch = useDispatch();
  const [isTrackerActive, setIsTrackedActive] = useState(true);
  const [isTrackedItemsActive, setIsTrackedItemsActive] = useState(false);

  const onTrackerTabClickHandler = () => {
    dispatch(filterTracked (false));
    setIsTrackedActive(true);
    setIsTrackedItemsActive(false);
  };

  const onTrackedItemsTabClickHandler = () => {
    dispatch(filterTracked (true));
    setIsTrackedActive(false);
    setIsTrackedItemsActive(true);
  };

  return (
    <Wrapper>
      <UsersDropdown />
      <Tab active={isTrackerActive} onClick={onTrackerTabClickHandler}>
        Tracker
      </Tab>
      <Tab
        active={isTrackedItemsActive}
        onClick={onTrackedItemsTabClickHandler}
      >
        Tracked Items
      </Tab>
    </Wrapper>
  );
}
