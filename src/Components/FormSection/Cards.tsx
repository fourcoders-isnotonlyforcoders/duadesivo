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
`;
const CardImage = styled.img`
  
`;
const CardInfos = styled.div`
  width: 60%;
`;
const Title = styled.h2`
  
`;
const SubTitle = styled.p`
  
`;
export const Cards: React.FC <CardProps> = ({src,alt, title, sub}) => {
  return (
    <Card>
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
