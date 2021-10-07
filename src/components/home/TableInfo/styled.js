import styled from 'styled-components/macro';

export const Wrapper = styled.div``;

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const HeadCell = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
`;

export const BodyCell = styled.td(props => ({
  color: props.isTracked ? 'red' : 'black',
  border: '1px solid #ddd',
  padding: '8px',
  fontWeight: 'bold',
}));

export const Row = styled.tr`
  border: 1px solid #ddd;
  padding: 8px;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;
