import { Link } from 'react-router-dom';
import { Wrapper, Table, HeadCell, BodyCell, Row } from './styled';
import {useSelector} from "react-redux";
import {isTrackedSelector, usersSelector} from "redux/selectors";

export default function TableInfo() {

  const users = useSelector(usersSelector);
  const tableFilter = useSelector(isTrackedSelector)

  let usersFilteredByTrack = users;

  if (tableFilter.tracked === true) {
    usersFilteredByTrack = usersFilteredByTrack.filter(
      user => user.isTracked === true
    );
  }

  return (
    <Wrapper>
      <Table>
        <thead>
          <Row>
            <HeadCell>Name</HeadCell>
            <HeadCell>Status</HeadCell>
            <HeadCell>More</HeadCell>
          </Row>
        </thead>

        <tbody>
          {usersFilteredByTrack.map(user => (
            <Row key={user.id}>
              <BodyCell>{user.name}</BodyCell>
              <BodyCell
                isTracked={user.isTracked}
              >{`${user.isTracked}`}</BodyCell>
              <BodyCell>
                <Link to={`/details?index=${user.indexArray}`}>more info</Link>
              </BodyCell>
            </Row>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}
