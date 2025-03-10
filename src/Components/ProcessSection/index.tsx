import { useState } from 'react';
import { ProcessContainer, TitleContainer, PhotosContainer, Photos } from './styles';
import { Process } from '../../constants/process';
import { TemplateText } from '../TemplateText';

export const ProcessSection = () => {
  return (
    <ProcessContainer>
      <TitleContainer>
        <TemplateText 
          PreTitle='NOSSO PROCESSO'
          Title='Do design à impressão, cuidamos de tudo para você ter adesivos exclusivos e duráveis.'
        />
      </TitleContainer>
      <PhotosContainer>
        {Process.map(({ src, hoverSrc, alt }, index) => {
          const [currentSrc, setCurrentSrc] = useState(src);

          return (
            <Photos 
              key={index}
              onMouseEnter={() => setCurrentSrc(hoverSrc)}
              onMouseLeave={() => setCurrentSrc(src)}
            >
              <img src={currentSrc} alt={alt} />
            </Photos>
          );
        })}
      </PhotosContainer>
    </ProcessContainer>
  );
};
