import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';

import image from '../../assets/images/banner-about.png';
import './About.css';

function About () {
  // Switch to display content in the dropdown by title
  const content = (title) => {
    switch (title) {
      case "fiability":
        return "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
      case "respect":
        return "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
      case "service":
        return "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
      case "security":
        return "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
      default:
        console.log("default");
        break;
    }
  };

  return (
    <div className="about">
      <div className='about__banner'>
        <Banner image={image} alt='montagnes enneigées' />
      </div>
      <div className="about__dropdowns">
        <Collapse title="Fiabilité" content={content("fiability")} />
        <Collapse title="Respect" content={content("respect")} />
        <Collapse title="Service" content={content("service")} />
        <Collapse title="Responsabilité" content={content("security")} />
      </div>
    </div>
  );
};

export default About;