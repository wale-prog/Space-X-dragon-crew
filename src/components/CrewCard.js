import propTypes from 'prop-types';

const CrewCard = ({ data: crew }) => {
  const { name, image } = crew;

  return (
    <div>
      <img src={image} style={{ width: '100%', borderRadius: '6px' }} alt={name} />
      <p>{name}</p>
    </div>
  );
};

CrewCard.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
};
export default CrewCard;
