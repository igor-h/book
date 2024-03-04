import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="A la espera de texto de descripción."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/por-que-book.svg" title="¿Por qué Bookledge?" overTitle="todos nos preguntamos...">
            <p>
            Nuestra plataforma de certificación de conocimiento ofrece una experiencia única y eficiente para verificar y demostrar tus habilidades.
            Con una interfaz intuitiva y fácil de usar, podrás evaluar tus conocimientos de manera rápida y sencilla. {' '}
              <Link href="">Además, ofrecemos una certificación reconocida y valiosa para impulsar tu carrera o mejorar tu CV.</Link> 
              <br />
              ¡Elige nuestra plataforma y haz que tus habilidades hablen por ti!
            </p>
          </BasicSection>
          <BasicSection imageUrl="/certification.svg" title="Obtén tu certificado" overTitle="Ahora en Bookledge" reversed>
            <p>
            Obtener un certificado de nuestra plataforma de certificación de conocimiento.
            Al responder un cuestionario de preguntas riguroso, 
            puedes demostrar tus habilidades y conocimientos a empleadores y potenciales clientes. 
            <br />
            <Link href="">Además, tu certificado incluye credenciales que puedes compartir en tu perfil de <strong>LinkedIn</strong></Link>, 
            lo que aumentará tu visibilidad y te ayudará a destacar en la industria. 
            Este certificado también te permitirá evaluar y mejorar tus conocimientos en una materia específica.
            <br />
            ¡No esperes más y obtén tu certificado hoy mismo!
            </p>
            <ul>
              <li><strong>Mejora de CV y destaque en LinkedIn</strong></li>
              <li><strong>Evaluación y mejora de conocimientos</strong></li>
              <li><strong>Logro personal y motivación</strong></li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>

      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
