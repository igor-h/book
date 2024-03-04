import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Política de Privacidad">
      <PrivacyPolicyContainer>
        <RichText>
          <p>
            Última actualización: 20 de Febrero de 2024.

            En Bookledge, valoramos la privacidad de nuestros usuarios y nos comprometemos a protegerla. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que recopilamos a través de nuestro sitio web Bookledge.es.

            Recopilación y Uso de Información

            Recopilamos cierta información personal de nuestros usuarios cuando interactúan con nuestro sitio web. Esta información puede incluir, entre otros, nombres, direcciones de correo electrónico, direcciones postales, números de teléfono, información de pago y cualquier otra información que los usuarios nos proporcionen voluntariamente.

            Utilizamos esta información personal para los siguientes propósitos:

            <ul>
              <li>Para proporcionar y mantener nuestro sitio web.</li>
              <li>Para personalizar la experiencia del usuario y ofrecer contenido y publicidad relevantes.</li>
              <li>Para procesar transacciones y brindar servicios solicitados por los usuarios.</li>
              <li>Para enviar correos electrónicos periódicos con respecto a su pedido u otros productos y servicios.</li>
              <li>Para responder a consultas, preguntas y preocupaciones de los usuarios.</li>
              <li>Para mejorar nuestro sitio web y los servicios que ofrecemos.</li>
              <li>Para cumplir con las leyes y regulaciones aplicables.</li>
              <li>Protección de la Información</li>
            </ul>
            Nos comprometemos a proteger la información personal de nuestros usuarios. Implementamos medidas de seguridad físicas, electrónicas y administrativas para proteger contra el acceso no autorizado, la alteración y la divulgación de información personal. Sin embargo, no podemos garantizar la seguridad absoluta de la información transmitida a través de Internet, por lo que los usuarios asumen un cierto riesgo al proporcionar información personal en línea.

            Divulgación de Información

            No vendemos, intercambiamos ni transferimos de ninguna manera la información personal de los usuarios a terceros sin su consentimiento, excepto en la medida en que sea necesario para cumplir con los propósitos establecidos en esta Política de Privacidad o cuando la ley lo requiera.

            Cookies y Tecnologías Similares

            Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario en nuestro sitio web. Al utilizar nuestro sitio web, los usuarios aceptan el uso de cookies de acuerdo con nuestra Política de Cookies.

            Cambios en la Política de Privacidad

            Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Se alentará a los usuarios a revisar esta página periódicamente para estar informados sobre cómo estamos protegiendo la información personal que recopilamos. El uso continuado del sitio web después de la publicación de cambios en esta Política de Privacidad se considerará como la aceptación de dichos cambios.

            Contacto

            Si tienes alguna pregunta sobre esta Política de Privacidad, las prácticas de este sitio web o tus relaciones con este sitio web, contáctanos en hola@bookledge.es.

            Esta Política de Privacidad se actualizó por última vez el 20 de Febrero de 2024. y puede ser actualizada en el futuro para reflejar cambios en nuestras prácticas de privacidad.
          </p>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
