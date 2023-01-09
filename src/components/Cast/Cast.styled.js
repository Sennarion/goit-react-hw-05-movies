import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ListItem = styled.li`
  width: calc((100% - 40px) / 5);
`;
