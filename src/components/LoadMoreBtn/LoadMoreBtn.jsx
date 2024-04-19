import css from './LoadMoreBtn.module.css'
export default function LoadMoreBtn({onAdd}) {
    return(
        <button className={css.addBtn} onClick={onAdd}>Load more</button>
    )
}