import styled from 'styled-components';

export const GalleryList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  padding: 0;
  flex-wrap: wrap;
`;
export const GalleryItem = styled.li`
  width: calc((100% - 30px) / 2);
  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;
