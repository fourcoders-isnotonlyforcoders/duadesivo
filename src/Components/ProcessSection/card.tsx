import { Cards, CardIcon, CardSub, CardTitle } from "./styles"
import { CardProps } from "./template";
export const CardTemplate: React.FC<CardProps> = ({src,alt,title,sub}) => {
  return (
    <Cards>
      <CardIcon src={src} alt={alt}/> 
      <CardTitle>{title}</CardTitle> 
      <CardSub>{sub}</CardSub> 
    </Cards>
  );
};
