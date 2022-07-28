import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Member = () => {
  const param = useParams();
  const crew = useSelector((state) => state.crew);
  const currentMember = crew.filter((item) => item.id === param.crewId);
  const [{ name, image, wikipedia }] = currentMember;

  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <a href={wikipedia} >wikipedia page</a>
    </div>
  );
};
export default Member;
