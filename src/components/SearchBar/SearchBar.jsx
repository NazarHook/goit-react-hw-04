import css from './SearchBar.module.css'
import iziToast  from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export default function SearchBar({onSearch}) {
    const handleSubmit = event => {
        event.preventDefault()
       const form = event.target
       onSearch(form.query.value)
       if (form.query.value === '') {
        iziToast.error({
          message: 'Search query must be at least 3 characters long',
          position: 'topRight',
        });
       }
       form.reset()
        }
    return(
        <header>
        <form  onSubmit={handleSubmit} className={css.form}>
          <input
          className={css.searchField}
          name="query"
            type="text"
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.searchBtn}>Search</button>
        </form>
      </header>
    )
}