import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const MovieHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LinkItem = styled(Link)`
  display: block;
  color: #fff;
  text-align: center;
  background-color: #fcba03;
  padding: 10px;
  border-radius: 4px;
`;
