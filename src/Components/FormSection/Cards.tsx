import styled from 'styled-components'
import { useFormContext } from '../../contexts/FormContext';
import { CardProps } from './types';

const Card = styled.div<{ selected: boolean }>`
  border: 1.5px solid ${({ theme, selected }) => theme.colors[selected ? "yellow" : "white"]};
  width: 100%;
  border-radius: 8px;
  height: auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transition: 0.6s ease;
  cursor: pointer;

  &:hover{
    transform: scale(1.04) !important;
    filter: brightness(1.1);
  }
    
  @media screen and (max-width: 906px) {
    width: 100%;
    padding: 2rem;
    gap: 1rem;
  }
`;
const CardImage = styled.img`
  transition: 0.4s ease;
  &:hover{
    filter: brightness(1.1);
  }
  @media screen and (max-width: 906px) {
    width: 50%;
  }
`;
const CardInfos = styled.div`
  width: 60%;
`;
const Title = styled.h2<{ selected: boolean }>`
  transition: 0.6s ease;
  color: ${({ theme, selected }) => theme.colors[selected ? "yellow" : "white"]};
  font-size: 1.8rem;
  @media screen and (max-width: 906px) {
    font-size: 1.7rem;
    margin: 0;
  }
`;
const SubTitle = styled.p<{ selected: boolean }>`
  transition: 0.6s ease;
  color: ${({ theme, selected }) => theme.colors[selected ? "yellow" : "white2"]};
  font-size: 1.3rem;
  @media screen and (max-width: 906px) {
    font-size: 1.2rem;
    margin: 0;
  }
`;
export const Cards: React.FC <CardProps> = ({ src, alt, title, sub, value }) => {
  const { tipo, setTipo } = useFormContext();
  return (
    <Card selected={tipo === value} onClick={() => setTipo(value)}>
      <CardImage src={src} alt={alt}/>
      <CardInfos>
        <Title selected={tipo === value}>
          {title}
        </Title>
        <SubTitle selected={tipo === value}>
          {sub}
        </SubTitle>
      </CardInfos>
    </Card>
  )
}
