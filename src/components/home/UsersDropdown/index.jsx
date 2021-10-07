import { Select } from './styled';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "redux/userSlice";
import {openPopup} from "redux/popupSlice";
import {usersSelector} from "redux/selectors";


export default function UsersDropdown() {
  const dispatch = useDispatch();
  const users  = useSelector(usersSelector);

  const onClickHandler = event => {
    if (Number(event.target.value) !== -1) {
      const selectedUser = JSON.parse(event.target.value);
      dispatch(setCurrentUser(selectedUser))
      dispatch(openPopup())
    }
  };

  return (
    <Select name="users" onClick={onClickHandler}>
      <option value={-1} defaultValue="selected">
        -- select user --
      </option>
      {users.map((user) => {
        return (
          <option key={user.id} value={JSON.stringify(user)}>
            {user.name}
          </option>
        );
      })}
    </Select>
  );
}
