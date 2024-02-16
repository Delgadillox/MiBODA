import '../styles/dresscode.css'
import riuImage from "../assets/riu.png";
import pbImage from "../assets/pueblobonito.png";
import cerritosImage from "../assets/descarga.jpg";
import paletaColores from "../assets/colores.png";

const Dresscode = () => {
  const colores = ['rgb(120 107 93)', 'rgb(93 78 60)', 'rgb(90 67 42)', 'rgb(77 47 34)', 'rgb(45 35 24)']
  return (
    <div name="dresscode" className="dresscode">
        <div className="content">
          <div className="top-content">
            <span className="title">Código de Vestimenta</span><br/><br/>
            <br />
            <div className="container">
              {colores.map((color, index) => (
                <div key={index} className="color" style={{ backgroundColor: color }}></div>
              ))}
            </div>

            {/* <img src={paletaColores} className='paletaImg'/><br/> */}
            <span className="text">Paleta de colores</span>
            <br/>
            <span className='redText'>NO USAR COLOR BLANCO</span>
          </div>
          <br/><br/><br/>

          <div className="bottom-content" >
            <span className='title'>Hospedaje Sugerido</span><br/><br /><br />
            <a href='https://www.riu.com/es/hotel/mexico/mazatlan/hotel-riu-emerald-bay/' target='_blank' style={{ padding: '10px' }}><img src={riuImage} alt="riu" height="94" width="100"/></a>
            <a href='https://www.cerritosresort.com/' target='_blank' style={{ padding: '10px' }}><img src={cerritosImage} alt="cer" width="100"/></a>
            <a href='https://www.pueblobonito.com.mx/resorts/emerald-bay' target='_blank' style={{ padding: '10px' }}><img src={pbImage} alt="pb" width="150"/></a>
            <br/>
            <span className='text'>(Da click en cualquier logotipo para ir al sitio web del hotel)</span>
          </div>
        </div>
    </div>
  )
}

export default Dresscode