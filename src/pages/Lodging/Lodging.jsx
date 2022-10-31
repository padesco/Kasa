import { useParams, Navigate } from 'react-router-dom';
import lodgingList from '../../assets/datas/lodgingList.json';

import Carrousel from '../../components/Carrousel/Carrousel';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import Tags from '../../components/Tags/Tags';
import Collapse from '../../components/Collapse/Collapse';

import './Lodging.css';

// on utilise useParams pour récupérer l'id dans l'url
const Lodging = () => {
  const { lodgingId } = useParams();
  const lodging = lodgingList.find((lodging) => lodging.id === lodgingId);
  if (lodging == null) {
    return (<Navigate to="/error" />);
  } else {
    const { title, location, rating, host, equipments, description, pictures } =
    lodging;

  return (
    <div className="lodging">
      <Carrousel slides={pictures} />
      <div className="lodging__content">
        <div className="lodging__informations">
          <h1 className="lodging__title">{title}</h1>
          <p className="lodging__location">{location}</p>
          <div className="lodging__tags">
            {lodging.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="lodging__rating-and-host">
          <Host host={host} />
          <Rating rating={rating} />
        </div>
      </div>
      <div className="lodging__dropdowns">
        <div className ="lodging__collapse">
          <Collapse className="lodging__collapse" title="Description" content={description} />
        </div>
        <div className ="lodging__collapse">
          <Collapse className="lodging__collapse" title="Équipement" content={equipments} />
        </div>
      </div>
    </div>
  );
};
};
  

export default Lodging;