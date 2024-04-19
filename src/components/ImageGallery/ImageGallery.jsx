
import css from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard"
export default function ImageGallery({items, onOpen}) {
    return (
       <ul className={css.list}>
        {items.map(item => (
            <li key={item.id} className={css.photo}>
            <ImageCard onOpen={onOpen} url={item.urls} alt={item.description}></ImageCard>
            </li>
        ))}
       </ul>
    )
}