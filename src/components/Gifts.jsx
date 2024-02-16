import '../styles/gifts.css'
import { useState } from 'react';
import bride from "../assets/bride.png"
import groom from "../assets/groom.png"
import liverpool from "../assets/liverpool.png"

const Gifts = () => {
  const [asistencia, setAsistencia] = useState('Si');

  function sendWp(number){
    try{
        const mensaje = `Hola, confirmo que ${
            asistencia === 'Si' ? 'asistiré' : 'no podré asistir'
          } a la boda.`;
      
          const enlaceWhatsApp = `https://wa.me/${number}?text=${encodeURIComponent(mensaje)}`;
          
          return enlaceWhatsApp;
    }catch(ex){
        console.error(ex.toString());
    }
  };

  const iconStyle = {
    width: '1.5em',  // Ajusta el tamaño según tus necesidades
    height: 'auto',
    marginRight: '0.5em',  // Espacio entre el texto y la imagen
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = '0120 6001 5568 558499';
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  };

  return (
    <div name="gifts" className="gifts">
        <div className="content">
          <div className="top-content">
            <span className='text'>Su presencia es nuestro mejor regalo, pero si desea brindarnos algo más, será recibido con gran aprecio.</span>
            <div className="container">
              <div className="cardDiv">
                {/* Contenido del div de la tarjeta */}
                <img src="https://1000marcas.net/wp-content/uploads/2019/12/BBVA-logo.png" alt="Logo de BBVA" className="bbvaLogo"/>
                <div className="accountInfo">
                  <span><strong>Nombre:</strong> Jose Pablo Delgadillo</span><br/>
                  <span><strong>CLABE:</strong> 
                  <span 
                    onClick={copyToClipboard}
                    style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}
                  >
                  0120 6001 5568 558499
                  </span>
                  </span>
                </div>
              </div>
              <div className="giftDiv">
              <div className="liverpoolDiv">
                {/* Contenido del div de la mesa de regalos de Liverpool */}
                <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51381544" target='_blank'>
                  <img className="lv" src={liverpool} alt="Mesa de regalos Liverpool" />
                </a>
              </div>
              <div className="searsDiv">
                {/* Contenido del div de la mesa de regalos de Sears */}
                <a href="https://www.sears.com.mx/Mesa-de-Regalos/123630/te-invito-a-mi-boda-pablo-mayte" target='_blank'>
                  <img src="https://kakulimexico.com/wp-content/uploads/2023/04/logo_sears.png" alt="Mesa de regalos Sears" />
                </a>
              </div>
              </div>
            </div>

          
          </div>
          

          <div className="bottom-content" >
          <span className='text'>¿Asistirás a la boda?<br/> FAVOR DE CONFIRMAR <span className='redText'>ANTES DE MAYO</span></span>
          <br/><br/>
          <label className='text'>
            <input
            type="radio"
            name="asistencia"
            value="Si"
            checked={asistencia === 'Si'}
            onChange={() => setAsistencia('Si')}
            />
            Sí, asistiré
            </label>

            <label className='text'>
                <input
                type="radio"
                name="asistencia"
                value="No"
                checked={asistencia === 'No'}
                onChange={() => setAsistencia('No')}
                />
                No, no podré asistir
            </label>
        <br/>
        <center className='text'>CONFIRMAR A: </center>
        <a href={sendWp("+528713966422", asistencia)} target="_blank">
          <button>
          <img src={groom} alt="Icono Novia" style={iconStyle} />
            Novio
          </button>
        </a>
        <a href={sendWp("+528714005150", asistencia)} target="_blank">
          <button>
          <img src={bride} alt="Icono Novia" style={iconStyle} />
            Novia
          </button>
        </a>
          </div>
        </div>
    </div>
  )
}

export default Gifts