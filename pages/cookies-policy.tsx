import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Política de Cookies">
      <CookiesPolicyContainer>
        <RichText>
          <p>
          Última actualización: 20 de Febrero de 2024.

          Esta Política de Cookies explica qué son las cookies y cómo las utilizamos en nuestro sitio web. Debes leer esta política para comprender qué son las cookies, cómo las utilizamos, los tipos de cookies que utilizamos, es decir, la información que recopilamos usando cookies y cómo se utiliza esa información, y cómo controlar las preferencias de las cookies. Para obtener más información sobre cómo usamos, almacenamos y mantenemos seguros tus datos personales, consulta nuestra Política de Privacidad.

          Puedes cambiar o retirar tu consentimiento de la declaración de cookies en nuestro sitio web en cualquier momento.

          Tu consentimiento se aplica a los siguientes dominios: [Insertar dominio]

          ¿Qué son las cookies?

          Las cookies son pequeños archivos de texto que se utilizan para almacenar pequeñas piezas de información. Se almacenan en tu dispositivo cuando el sitio web se carga en tu navegador. Estas cookies nos ayudan a que el sitio web funcione correctamente, a que sea más seguro, a proporcionar una mejor experiencia para el usuario y a entender cómo funciona el sitio web y qué mejoras se pueden realizar.

          ¿Cómo utilizamos las cookies?

          Como la mayoría de los servicios en línea, nuestro sitio web utiliza cookies de primera parte y de terceros para diversos fines. Las cookies de primera parte son principalmente necesarias para que el sitio web funcione correctamente y no recopilan ningún dato personal identificable.

          Los tipos de cookies que utilizamos

          Esenciales: Algunas cookies son esenciales para que puedas experimentar la funcionalidad completa de nuestro sitio. Nos permiten mantener sesiones de usuario y evitar amenazas a la seguridad. No recopilan ni almacenan ninguna información personal.

          Estadísticas: Estas cookies almacenan información como el número de visitantes del sitio web, el número de visitantes únicos, qué páginas del sitio web han sido visitadas, la fuente de la visita, etc. Esta información nos ayuda a comprender y analizar el rendimiento del sitio web y donde necesita mejorar.

          Funcionales: Estas son las cookies que ayudan a ciertas funcionalidades no esenciales en nuestro sitio web. Estas funcionalidades incluyen incrustar contenido como videos o compartir contenido en el sitio web en plataformas de redes sociales.

          Preferencias: Estas cookies nos ayudan a almacenar tus configuraciones y preferencias de navegación, como las preferencias de idioma, para que tengas una mejor y más eficiente experiencia en futuras visitas al sitio web.

          ¿Cómo puedo controlar las preferencias de las cookies?

          Si decides cambiar tus preferencias más tarde a través de tu sesión de navegación, puedes hacer clic en la pestaña "Política de Privacidad y Cookies" en tu pantalla. Esto mostrará el aviso de consentimiento nuevamente, lo que te permitirá cambiar tus preferencias o retirar tu consentimiento por completo.

          Además, diferentes navegadores proporcionan diferentes métodos para bloquear y eliminar las cookies utilizadas por los sitios web. Puedes cambiar la configuración de tu navegador para bloquear / eliminar las cookies. Para obtener más información sobre cómo administrar y eliminar cookies, visita wikipedia.org, www.allaboutcookies.org.

          Si tienes alguna pregunta sobre nuestra política de cookies, no dudes en ponerte en contacto con nosotros a través de nuestra información de contacto.

          Esta Política de Cookies se actualizó por última vez el 20 de Febrero de 2024. y puede ser actualizada en el futuro para reflejar cambios en las prácticas de cookies.
          </p>
        </RichText>
      </CookiesPolicyContainer>
    </Page>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
