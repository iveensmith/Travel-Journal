import location from '../assets/location.png';

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt="" className="card-img"/>
            <div className='card-info'>
                <div className='locs'>
                    <img src={location} alt="" className='card-location'/>
                    <span>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} className='card-link' target='_blank'>View on Google maps</a>
                </div>
                <h1 className='card-title'>{props.item.title}</h1>
                <div>
                    <h3 className='card-date'>{props.item.startDate} - {props.item.endDate}</h3>
                    <p className='card-description'>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}