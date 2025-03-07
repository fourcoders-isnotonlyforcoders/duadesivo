import React from 'react'
import { Carrousel } from './carrousel'
import { ServicesContainer, PrincipalBanner, PrincipalBannerContainer, BgImage, BgImage2,BgImage3 } from './styles'
import { TemplateText } from '../TemplateText'
export const ServicesSection: React.FC = () => {
  return (
    <ServicesContainer>
      <BgImage src='/images/bgEstrelado.avif'/>
      <BgImage2 src='/images/bgEstrelado.avif'/>
      <BgImage3 src='/images/bgEstrelado.avif'/>
      <TemplateText
      PreTitle='NOSSOS SERVIÇOS'
      Title='Criamos adesivos personalizados do jeito que você quiser!' />
      <PrincipalBannerContainer data-aos="zoom-in-up" data-aos-duration="700"> 
        <PrincipalBanner src='/images/bannerHolografico.avif'/>
      </PrincipalBannerContainer>
      <Carrousel/>
    </ServicesContainer>
  )
}
