import { Cards, CardIcon, CardSub, CardTitle } from "./styles"
import { CardProps } from "./template";
export const CardTemplate: React.FC<CardProps> = ({src,alt,title,sub}) => {
  return (
    <Cards data-aos="zoom-in" data-aos-duration="600">
      <CardIcon src={src} alt={alt}/> 
      <CardTitle>{title}</CardTitle> 
      <CardSub>{sub}</CardSub> 
    </Cards>
  );
};
