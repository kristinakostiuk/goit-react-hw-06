import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox({ value }) {
  const id = useId();
  const dispatch = useDispatch();

  return (
    <div className={css.searchBox}>
      <label htmlFor={`findContact-${id}`} className={css.label}>
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        id={`findContact-${id}`}
        value={value}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
}
