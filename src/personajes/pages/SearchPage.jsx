import { PersonajeCard } from '../components/PersonajeCard';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getPersonajesByName } from '../helpers/getPersonajesByName';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const personajes = getPersonajesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && personajes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Buscar</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar personaje"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1"> Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Buscar personaje
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}
          >
            No hay resultados para <b>{q}</b>
          </div>

          {personajes.map((personaje) => (
            <PersonajeCard key={personaje.id} {...hero} />
          ))}
          {/*  */}
        </div>
      </div>
    </>
  );
};
