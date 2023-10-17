import './box.css/'

const sunURL = 'https://www.freeiconspng.com/thumbs/sun/alevs-angry-fire-and-the-sun-photos-7.png';
const moonURL = 'https://media.istockphoto.com/id/1047143072/photo/full-moon-isolated-on-black-night-sky-background.webp?b=1&s=170667a&w=0&k=20&c=GsswB7T5W-m4JaPdfUxeZFFmB9fLsJlw6WhcKgNNDAE=';

const Box = ({isDay, content, onClick}) => {

    return (
        <div className={`box ${isDay ? 'day' : ''}`}>
            {content}
            <img src={isDay ? sunURL : moonURL} alt="" className='box__image'/>
            <button 
                type='button' 
                className={`box__button ${isDay ? 'day' : ''}`}
                onClick={onClick}
            >
                Delete
            </button>
        </div>
    )
}

export default Box