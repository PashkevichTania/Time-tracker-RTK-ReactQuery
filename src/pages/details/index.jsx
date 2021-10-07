import { useQuery } from 'hooks/details';
import { useLocalStorage } from 'hooks/SHARED';
import { Link } from 'react-router-dom';
import { Header } from 'styles/SHARED';
import { RecordKey, Title, Wrapper } from './styled';

export default function Details() {
  const [usersLS] = useLocalStorage('_TRACK-APP_', []);
  const query = useQuery();
  const userArrayIndex = query.get('index');
  const user = usersLS[userArrayIndex];

  return (
    <Wrapper>
      <Header>User Details</Header>
      <hr />

      <Title>Info:</Title>
      <div>
        <RecordKey>Name:</RecordKey> {user?.name}
      </div>
      <div>
        <RecordKey>Project Time:</RecordKey> {user?.projectTime}
      </div>
      <div>
        <RecordKey as="div">Note:</RecordKey>
        <textarea name="note" cols="30" rows="10" value={user?.note} />
      </div>

      <div>
        <RecordKey>Is Tracked:</RecordKey> {`${user?.isTracked}`}
      </div>
      <hr />

      <Title>Contacts:</Title>
      <div>
        <RecordKey>Email:</RecordKey> {`${user?.email}`}
      </div>
      <div>
        <RecordKey>Phone:</RecordKey> {`${user?.phone}`}
      </div>
      <hr />

      <Title>Address:</Title>
      <div>
        <RecordKey>City:</RecordKey> {`${user?.address.city}`}
      </div>
      <div>
        <RecordKey>Street:</RecordKey> {`${user?.address.street}`}
      </div>
      <div>
        <RecordKey>Suite:</RecordKey> {`${user?.address.suite}`}
      </div>
      <div>
        <RecordKey>Zipcode:</RecordKey> {`${user?.address.zipcode}`}
      </div>
      <hr />

      <Title>Company:</Title>
      <div>
        <RecordKey>Name: </RecordKey>
        {`${user?.company.name}`}
      </div>
      <div>
        <RecordKey>BS:</RecordKey> {`${user?.company.bs}`}
      </div>
      <div style={{ marginBottom: '30px' }}>
        <RecordKey>Catch Phrase:</RecordKey> {`${user?.company.catchPhrase}`}
      </div>

      <Title>
        <Link to="/">{'<< Back to Main'}</Link>
      </Title>
    </Wrapper>
  );
}
