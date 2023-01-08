import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItem = styled.li`
  width: calc((100% - 40px) / 3);
  box-shadow: 0px 2px 5px 0px rgba(184, 184, 184, 1);
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
`;

export const MovieInfo = styled.div`
  padding: 20px;
`;

export const LinkItem = styled(Link)`
  display: block;
  color: #fff;
  text-align: center;
  background-color: #fcba03;
  padding: 10px;
  border-radius: 4px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;
