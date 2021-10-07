import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const Frame = styled.div`
  width: 400px;
  border-radius: 50px;
  background-color: #dceaf2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.div`
  width: 400px;
  height: 50px;
  background-color: white;
  border: 1px solid #d4d4d4;
  border-radius: 50px 50px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div``;

export const Footer = styled.div`
  width: 400px;
  height: 70px;
  background-color: white;
  border: 1px solid #d4d4d4;
  border-radius: 0 0 50px 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.div(props => ({
  borderRadius: '50%',
  height: '30px',
  width: '30px',
  backgroundColor: props.color,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}));

export const RecordKey = styled.span`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
`;
