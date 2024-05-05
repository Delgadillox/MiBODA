import '../styles/dresscode.css';
import riuImage from '../assets/riu.png';
import pbImage from '../assets/pueblobonito.png';
import cerritosImage from '../assets/descarga.jpg';
import codeImage from '../assets/vestimenta.png';

const Dresscode = () => {
	const colores = [
		'rgb(201 173 141)',
		'rgb(145 127 107)',
		'rgb(147 166 201)',
		'rgb(94 120 150)',
	];
	return (
		<div name='dresscode' className='dresscode'>
			<div className='content'>
				<div className='top-content'>
					<span className='title'>Código de Vestimenta</span>
					<br />
					<br />
					<br />
					<span className='text'>FORMAL PLAYA</span>
					<br />
					<img className='codeImage' src={codeImage} alt='desscode' />
					<br />
					<span className='text'>PALETA DE COLORES</span>
					<br />
					<div className='container'>
						{colores.map((color, index) => (
							<div
								key={index}
								className='color'
								style={{ backgroundColor: color }}
							></div>
						))}
					</div>

					{/* <img src={paletaColores} className='paletaImg'/><br/> */}

					<br />
					<span className='redText'>NO USAR COLOR BLANCO</span>
				</div>
				<br />

				<div className='bottom-content'>
					<span className='title'>Hospedaje Sugerido</span>
					<br />
					<br />
					<br />
					<a
						href='https://www.riu.com/es/hotel/mexico/mazatlan/hotel-riu-emerald-bay/'
						target='_blank'
						style={{ padding: '10px' }}
					>
						<img src={riuImage} alt='riu' height='94' width='100' />
					</a>
					<a
						href='https://www.cerritosresort.com/'
						target='_blank'
						style={{ padding: '10px' }}
					>
						<img src={cerritosImage} alt='cer' width='100' />
					</a>
					<a
						href='https://www.pueblobonito.com.mx/resorts/emerald-bay'
						target='_blank'
						style={{ padding: '10px' }}
					>
						<img src={pbImage} alt='pb' width='150' />
					</a>
					<br />
					<span className='text'>
						(Da click en cualquier logotipo para ir al sitio web del hotel)
					</span>
				</div>
			</div>
		</div>
	);
};

export default Dresscode;
