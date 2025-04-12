
export default function DamasoWeb() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Damaso Abrahan Diaz Silva</h1>
        <p className="text-xl mt-2">Engineer in AI, Cybersecurity, and Logistics | EB2-NIW Applicant</p>
        <p className="text-lg mt-1 italic">Ingeniero en IA, Ciberseguridad y Logística | Solicitante de Visa EB2-NIW</p>
      </section>
      <section id="about" className="space-y-4">
        <h2 className="text-2xl font-semibold">About Me / Sobre Mí</h2>
        <img src="/images/damaso-profile.jpg" alt="Damaso Profile" className="w-40 h-40 rounded-full mx-auto" />
        <p>
          I am a systems engineer with over a decade of international experience leading technological innovations across Latin America. My work specializes in artificial intelligence, cybersecurity, and logistics optimization, with a strong focus on last-mile delivery platforms.
        </p>
        <p>
          Soy ingeniero en sistemas con más de una década de experiencia internacional liderando innovaciones tecnológicas en América Latina. Mi trabajo se especializa en inteligencia artificial, ciberseguridad y optimización logística, con un fuerte enfoque en plataformas de última milla.
        </p>
        <p>
          I have contributed to high-impact operational transformations in companies like Rappi and Cabify, and have authored two books exploring the intersection of AI, secure systems, and scalable logistics.
        </p>
        <p>
          He contribuido a transformaciones operativas de alto impacto en empresas como Rappi y Cabify, y soy autor de dos libros que exploran la intersección entre IA, sistemas seguros y logística escalable.
        </p>
      </section>
      <section id="publications" className="space-y-4">
        <h2 className="text-2xl font-semibold">Publications / Publicaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src="/images/book1.jpg" alt="Ciberseguridad y IA en Delivery" className="w-full rounded" />
            <p><strong>Ciberseguridad y IA en Delivery:</strong> Construyendo un Futuro Sostenible – A practical look at cybersecurity and AI applications in modern delivery systems. / Una mirada práctica a las aplicaciones de ciberseguridad e IA en sistemas de reparto modernos.</p>
          </div>
          <div>
            <img src="/images/book2.jpg" alt="Inteligencia Artificial en Movimiento" className="w-full rounded" />
            <p><strong>Inteligencia Artificial en Movimiento:</strong> Revolucionando la Logística y las Alianzas Comerciales – Focused on cross-border operational efficiency and tech-driven business partnerships. / Enfocado en la eficiencia operativa transfronteriza y asociaciones comerciales impulsadas por tecnología.</p>
          </div>
        </div>
      </section>
      <section id="projects" className="space-y-4">
        <h2 className="text-2xl font-semibold">Professional Projects / Proyectos Profesionales</h2>
        <p>
          I led the redesign of Rappi’s payment automation system, reducing error margins from 40% to under 5% by integrating AI models and backend validation flows.
        </p>
        <p>
          Lideré el rediseño del sistema de automatización de pagos de Rappi, reduciendo el margen de error del 40% a menos del 5% mediante la integración de modelos de IA y flujos de validación backend.
        </p>
        <p>
          I have also spearheaded communication flows and data security implementations in real-time logistics environments using platforms such as Braze, WhatsApp Business, and Treble.
        </p>
        <p>
          También he liderado la implementación de flujos de comunicación y seguridad de datos en entornos logísticos en tiempo real utilizando plataformas como Braze, WhatsApp Business y Treble.
        </p>
      </section>
      <section id="us-plan" className="space-y-4">
        <h2 className="text-2xl font-semibold">Vision for the U.S. / Visión para EE.UU.</h2>
        <p>
          My professional mission in the United States is to advance secure, scalable digital infrastructure for delivery platforms and real-time logistics, promoting innovation that supports local economies and nationwide tech growth.
        </p>
        <p>
          Mi misión profesional en Estados Unidos es impulsar infraestructura digital segura y escalable para plataformas de reparto y logística en tiempo real, promoviendo la innovación que respalde economías locales y el crecimiento tecnológico nacional.
        </p>
        <p>
          I aim to collaborate with companies and institutions to foster AI-driven solutions that prioritize security, user trust, and operational excellence.
        </p>
        <p>
          Mi objetivo es colaborar con empresas e instituciones para fomentar soluciones impulsadas por IA que prioricen la seguridad, la confianza del usuario y la excelencia operativa.
        </p>
      </section>
      <section id="contact" className="space-y-2">
        <h2 className="text-2xl font-semibold">Contact / Contacto</h2>
        <p>Email: contact@damasodiaz.tech</p>
        <p>LinkedIn: coming soon</p>
        <p>Download CV: <a href="/documents/damaso_cv.pdf" className="text-blue-600 underline">View PDF</a></p>
      </section>
    </main>
  );
}
