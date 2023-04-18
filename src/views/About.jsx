import { Title } from "../components/common/Title";
import { AboutCard } from "../components/about/AbourCard";

const aboutData = [
  {
    title: 'misión',
    align: 'flex-start',
    text: ' Brindar productos y servicios de computo de alta calidad y conformidad a través de un excelente equipo de trabajo con el fin de satisfacer las necesidades y solucionar los posibles problemas de nuestros clientes.'
  },
  {
    title: 'visión',
    align: 'flex-end',
    text: ' Brindar productos y servicios de computo de alta calidad y conformidad a través de un excelente equipo de trabajo con el fin de satisfacer las necesidades y solucionar los posibles problemas de nuestros clientes.'
  }
];

export const About = () => {
  return (
    <div className="about__main">
      <Title
        title='Sobre Nosotros'
        classname="about__title"
      />

      <section className="about__content">
        {aboutData.map((card, index) => (
          <AboutCard
            key={index}
            text={card.text}
            title={card.title}
            align={card.align}
          />
        ))}
      </section>
    </div>
  )
}