import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams, Link } from 'react-router-dom';
import CrewCard from './CrewCard';
import './MainPage.css';
import { getCrewDetail } from '../redux/crewSlice';

const MainPage = () => {
  const crew = useSelector((state) => state.crew);
  const dispatch = useDispatch();

  useEffect(() => {
    if (crew.length === 0) {
      dispatch(getCrewDetail());
    }
  }, []);

  const [search, setSearch] = useSearchParams();

  return (
    <div className="main-page">
      <div className="input">
        <input
          className="searchBar"
          type="text"
          value={search.get('filter') || ''}
          placeholder="Search"
          onChange={(event) => {
            const filter = event.target.value;
            if (filter) {
              setSearch({ filter });
            } else {
              setSearch({});
            }
          }}
        />
      </div>

      <div className="img-style">
        {crew
          .filter((item) => {
            const filter = search.get('filter');
            if (!filter) return true;
            const crewName = item.name.toLowerCase();
            return crewName.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <Link key={item.id} to={`/${item.id}`}>
              <CrewCard
                key={item.id}
                data={item}
              />
            </Link>
          ))}
      </div>
    </div>

  );
};
export default MainPage;
