import { Select } from './styled';
import {useDispatch, useSelector} from "react-redux";
import {usersSelector} from "../../../redux/selectors";
import {currentUser, setIsPopupOpened} from "redux/actions";

export default function UsersDropdown() {
  const dispatch = useDispatch();
  const users  = useSelector(usersSelector);

  const onClickHandler = event => {
    if (Number(event.target.value) !== -1) {
      const selectedUser = JSON.parse(event.target.value);
      dispatch(currentUser(selectedUser))
      dispatch(setIsPopupOpened(true))
    }
  };

  return (
    <Select name="users" onClick={onClickHandler}>
      <option value={-1} defaultValue="selected">
        -- select user --
      </option>
      {users.map((user, index) => {
        user.indexArray = index;
        return (
          <option key={user.id} value={JSON.stringify(user)}>
            {user.name}
          </option>
        );
      })}
    </Select>
  );
}
