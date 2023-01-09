import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
`;

export const Poster = styled.img`
  max-width: 350px;
`;

export const MovieHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LinkItem = styled(Link)`
  display: block;
  color: #fff;
  text-align: center;
  background-color: #fcba03;
  padding: 10px;
  border-radius: 4px;
`;
