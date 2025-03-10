import React from 'react'
import { DepoimentsContainer, TitleContainer,Zip, ZipContainer } from './styles'
import { TemplateText } from '../TemplateText'
export const DepoimentsSection: React.FC = () => {
  return (
    <DepoimentsContainer>
      <TitleContainer>
      <TemplateText Title='DEPOIMENTOS' PreTitle='Veja oque nossos clientes criaram'/>
      </TitleContainer>
      <ZipContainer>
        <Zip src='./images/zip.svg' data-aos="fade-right" data-aos-duration="600"/>
        <Zip src='./images/zip.svg' data-aos="fade-up" data-aos-duration="600"/>
        <Zip src='./images/zip.svg' data-aos="fade-down" data-aos-duration="600"/>
        <Zip src='./images/zip.svg' data-aos="fade-left" data-aos-duration="600"/>
      </ZipContainer>
    </DepoimentsContainer>
  )
}
