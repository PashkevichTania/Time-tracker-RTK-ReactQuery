import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
`;

export const Tab = styled.div(props => ({
  backgroundColor: props.active ? 'red' : 'grey',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  padding: '15px',
  borderRadius: '50px',
  fontFamily: 'sans-serif',
  cursor: 'pointer',
  userSelect: 'none',
  transition: '80ms',
  '&:hover': {
    transform: 'scale(1.1)',
    transition: '80ms',
  },
  '&:active': {
    transform: 'scale(1.05)',
  },
}));
