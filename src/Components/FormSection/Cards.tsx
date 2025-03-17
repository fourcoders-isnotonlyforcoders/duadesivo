import styled from 'styled-components'
import { CardProps } from '../ProcessSection/template'
const Card = styled.div`
  border: 1.5px solid ${(props)=> props.theme.colors.white};
  width: 100%;
  border-radius: 8px;
  height: auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transition: 0.3s ease;
  &:hover{
    transform: scale(1.04) !important;
    filter: brightness(1.1);
  }

`;
const CardImage = styled.img`
    transition: 0.4s ease;
  &:hover{
    filter: brightness(1.1);
  }
`;
const CardInfos = styled.div`
  width: 60%;
`;
const Title = styled.h2`
    color: ${(props) => props.theme.colors.white};
    font-size: 1.8rem;
`;
const SubTitle = styled.p`
    color: ${(props) => props.theme.colors.white2};
    font-size: 1.3rem;
`;
export const Cards: React.FC <CardProps> = ({src,alt, title, sub}) => {
  return (
    <Card data-aos="zoom-in"
    data-aos-duration="600">
      <CardImage src={src} alt={alt}/>
      <CardInfos>
        <Title>
          {title}
        </Title>
        <SubTitle>
          {sub}
        </SubTitle>
      </CardInfos>
    </Card>
  )
}
