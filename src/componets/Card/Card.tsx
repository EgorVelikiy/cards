import { CardType } from '../type/type'

export const Card: React.FC<CardType> = (card) => {
    const {title, text, image } = card
    return (
        <div className="card">
            {image ? <img src={image} className="card-img-top" alt="..."/> : null}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="card-btn">Go somewhere</a>
            </div>
        </div>
    )
}