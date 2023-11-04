import { useState } from 'react';
import Logo from './logo.png';
import Left from './left.png';
import Right from './right.png';
import Trash from './remove.png'
import './App.css';
import { data } from './data';

function App() {

  const [gifts, setGifts] = useState(data);

  const removeItem = (id) => {
    let newGifts = gifts.filter(element => element.id !== id);
    setGifts(newGifts);
  };


  const [carousel, setCarousel] = useState(0);
  const [datas, setDatas] = useState(data);
  let newMas = [...datas];
  
  const next = (e, index) => {
    setDatas(newMas);

      const slide = document.querySelectorAll("#slider");
      newMas[index] = gifts[index];
    
      setCarousel ((carousel => {
        carousel ++ ;
        if (carousel > 2 ) {
        carousel = 0;
        }
        return carousel;
      }));

      slide[index].setAttribute('src', newMas[index].image[carousel]);
      return slide;
    };

    const last = (e, index) => {
      
        const slide = document.querySelectorAll("#slider");
        newMas[index] = gifts[index];
        setDatas(newMas);
        setCarousel ((carousel => {
        carousel -- ;
        if (carousel < 0 ) {
        carousel = 2;
        }
        return carousel;
      }));

      slide[index].setAttribute('src', newMas[index].image[carousel] );
      return slide;
    };



  return (
    <div className='wrapper'>
    <div className="container">
      <br />
      <img src={Logo} width='120px' alt='logo'/>
      <h2>Liste von</h2>
      <h1>{gifts.length} Geschenken</h1>
      <br />
      <p>Die wir uns zu unserer Hochzeit wünschen</p>
      <hr />

      {gifts.map((element=> {
        const {id, description, price, image} = element;
        const index = gifts.indexOf(element);
        return (<div key={id}>
          <div className='containerOne'>
            <h4>Wunsch Nr. {id}</h4>
          </div>

          <div className='containerOne'>
            <img className='radius' id='slider' src={image[3]} width='350px' alt='item'/>
          </div>
          <br />
          <div className='containerTwo'>
          <button className='btnSlider' onClick={ (e)=> last(e, index)  } id = { id }> 
            <img src={Left} alt="last" width='30px' height='30px' />
            </button>
            <button className='btnSlider' onClick={ (e)=> next(e, index)} id = { id } >  
              <img src={Right} alt="last" width='30px' height='30px' />
            </button>
          </div>

          <div className='containerOne'>
              <h3>{description}</h3>
          </div>

          <div className='containerOne'>
            <p><b><i>Preis: {price}</i></b></p>
          </div>

          <div className='containerOne'>
          <button className='btnDelete' onClick={ ()=> removeItem(id) }>
              <img src={Trash} alt="remove" width='20' height='20' />
            </button>
            <hr />
          </div>

          </div>
          )
          }))}

        <div className='div-container'>
            <button className='deleteAll' onClick={()=> setGifts([])}>alles entfernen</button>
        </div>
    </div>
  </div>
  );
}

export default App;