import './character.css'

const Character = ({name, image, status}) => (
    <div className='character'>
        <img src={image} alt={name} className='character__image'/>
        <h3 className='character__name'>
            {name}
            <span 
                className={`character__status ${status.toLocaleLowerCase()}`}
                title={`Status: ${status}`}
            ></span>
        </h3>
    </div>
)

export default Character