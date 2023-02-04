import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/online-cv.svg',
    title: 'Mejora de CV y destaque en LinkedIn',
    description:
      'Al tener un certificado reconocido de nuestra plataforma, puedes resaltar tus habilidades y conocimientos en tu CV y perfil de LinkedIn, lo que puede aumentar tus oportunidades de empleo y ayudarte a destacar entre otros candidatos.',
  },
  {
    imageUrl: '/grid-icons/reading-book.svg',
    title: 'Evaluación y mejora de conocimientos',
    description:
      'Al responder un cuestionario de preguntas, puedes evaluar y mejorar tus conocimientos en una materia específica, lo que te ayuda a mantenerte actualizado y preparado para nuevos desafíos.'
  },
  {
    imageUrl: '/grid-icons/user-research.svg',
    title: 'Logro personal y motivación',
    description:
      'Obtener un certificado es un logro personal y puede ser una forma de motivación para seguir aprendiendo y desarrollando tus habilidades. También puede ser una herramienta valiosa para motivar a otros a seguir su camino de aprendizaje.'
  },
  
];

export default function FeaturesPage() {
  return (
    <Page title="¿Qué es Bookledge?" description="En nuestra plataforma podrás certificar el conocimiento adquirido en los libros más especializados.">
      <Wrapper>
        <SectionTitle>Dale al play y verás nuestro spot publicitario</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=V1tIENCcf2Q&ab_channel=Bookledge" />
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
