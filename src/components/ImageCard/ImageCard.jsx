import css from './ImageCard.module.css'
export default function ImageCard({onOpen,url:{small,regular}, alt}) {
    return (
        <div className={css.photo}>
		  <img onClick={() => onOpen(regular)} src={small} alt={alt} width="400" height='242'/>
		</div>
    )
}