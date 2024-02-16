// import Carousel from "./Carousel"
import '../styles/location.css'

const Location = () => {

  return (
    <div name="location" className="location">
        <div className="content">
          <div className="top-content">
            <span className="title">Ceremonia Civil</span>
          </div>
          <span className="text">Salón de eventos "Las Maravillas"</span><br/>
            <span className="text"><span className="sub">Dirección:</span> Av. Sábalo Cerritos, Cerritos, 82112 Mazatlán, Sinaloa.</span><br/><br/>
            <div 
            style={{ 
             width: "100%", 
             height: "calc(20em / 2)",
             border: "1px solid #ccc", 
             borderRadius: "35px", 
             overflow: "hidden" 
             }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7329.057183885613!2d-106.4831643711512!3d23.29657275709676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1407b222954ff015%3A0x8f0acee5a893b301!2sTrailer%20Park%20Maravillas!5e0!3m2!1ses-419!2smx!4v1706469191591!5m2!1ses-419!2smx&z=21" 
              width="100%" height="100%" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

          <div className="bottom-content" >
            {/* <Carousel /> */}
          </div>
        </div>
    </div>
  )
}

export default Location