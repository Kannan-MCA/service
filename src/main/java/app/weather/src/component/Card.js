import './Card.css';

const Card = ({ title, body: { main, wind, sys, clouds, visibility } }) => {
    return (
      <div className='card'>
        <div className='title'>{title}</div>
        <div className='text-row'>Min.Temp:{main.temp_min}</div>
        <div className='text-row'>Max.Temp:{main.temp_max}</div>
        <div className='text-row'>Avg.Temp:{main.temp}</div>
        <div className='text-row'>Humidity:{main.humidity}</div>
        {/* <div className='text-row'>Wind Speed:{wind.speed}</div>
        <div className='text-row'>Pressure:{main.pressure}</div>
        <div className='text-row'>Visibility:{visibility}</div>
        <div className='text-row'>Clouds:{clouds.all}</div>
        <div className='text-row'>Sunrise:{sys.sunrise}</div>
        <div className='text-row'>Sunset:{sys.sunset}</div>
        <div className='text-row'>Country:{sys.country}</div> */}
      </div>
    );
  }

export default Card;
