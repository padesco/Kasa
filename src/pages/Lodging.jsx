import { useParams } from "react-router-dom";
import lodgingList from '../datas/lodgingList.json';

import Carrousel from '../components/Carrousel';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
import Collapse from '../components/Collapse';

import '../styles/pages/Lodging.css';

const Lodging = () => {
  const { lodgingId } = useParams();
  const lodging = lodgingList.find((lodging) => lodging.id === lodgingId);
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
        <Collapse title="Description" content={description} />
        <Collapse title="Équipement" content={equipments} />
      </div>
    </div>
  );
};

export default Lodging;