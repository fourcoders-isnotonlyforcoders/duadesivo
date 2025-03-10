import styled from "styled-components";

export const ProcessContainer = styled.section`
  
`;

export const TitleContainer = styled.div`
  width: 70%;
`;

export const PhotosContainer = styled.div`
  height: auto;
  width: 100%;
  min-height: 90vh;
  padding: 4rem 0;
  flex-wrap: wrap;
  display: flex;
  gap: 2.2rem;
  justify-content: center;
`;

export const Photos = styled.div`
  border: 2px solid;
  border-radius: 8px;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    background-size: cover;
    transition: opacity 0.3s ease;
  }
`;
