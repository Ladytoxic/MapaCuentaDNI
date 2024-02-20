import './Card.css';

const Card = () => {
    return (
        <div className='card'>
            <div className='card-header'>
                <h1 className='card-header-title'>Comercios adheridos</h1>
                <hr />
                <h2 className='card-header-subtitle'>Miércoles y jueves</h2>
            </div>
            <div className='card-body'>
                <span className='card-body-porc'>30%</span>
                <span className='card-body-ahorro'>de Ahorro</span>
            </div>
            <div className='card-footer'>
                <p>Tope de reintegro unificado: $3.000 por semana y por persona.</p>
            </div>
            <hr />
        </div>
    )
}

export default Card
