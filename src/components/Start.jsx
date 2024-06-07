import { useEffect, useState } from 'react';
import '../styles/main.css';

const Start = () => {
	const [time, setTime] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const calculateTimeLeft = () => {
		const targetDate = new Date('2024-11-30T17:30:00Z');
		const now = new Date();
		const difference = targetDate - now;

		if (difference > 0) {
			const days = Math.floor(difference / (1000 * 60 * 60 * 24))
				.toString()
				.padStart(2, 0);
			const hours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			)
				.toString()
				.padStart(2, 0);
			const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
				.toString()
				.padStart(2, 0);
			const seconds = Math.floor((difference % (1000 * 60)) / 1000)
				.toString()
				.padStart(2, 0);

			setTime({
				days,
				hours,
				minutes,
				seconds,
			});
		} else {
			setTime({
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			});
		}
	};

	useEffect(() => {
		const timer = setInterval(() => {
			calculateTimeLeft();
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<div className='content'>
				<div className='top-content'>
					<span className='subtitle'>NUESTRA BODA</span>
					<br />
					<br />
					<span className='title'>Pablo & Mayte</span>
				</div>
				<br />
				<div className='bottom-content'>
					<span className='date'>NOVIEMBRE</span> <br />
					<div className='fullDate'>
						<div className='dateContainer'>
							<span className='day'>SÁBADO</span>
							<span className='separator'>|</span>
							<span className='dayNumber'>30</span>
							<span className='separator'>|</span>
							<span className='hour'>5:30 PM</span>
						</div>
						<span className='year'>2024</span>
					</div>
					<br />
					<br />
					<hr />
					<div className='countdown'>
						<div className='days'>
							<span>{time.days}</span>
							<p>DÍAS</p>
						</div>
						<div>
							<span className='puntos'>:</span>
						</div>
						<div className='hours'>
							<span>{time.hours}</span>
							<p>HORAS</p>
						</div>
						<div>
							<span className='puntos'>:</span>
						</div>
						<div className='minutes'>
							<span>{time.minutes}</span>
							<p>MINUTOS</p>
						</div>
						<div>
							<span className='puntos'>:</span>
						</div>
						<div className='seconds'>
							<span>{time.seconds}</span>
							<p>SEGUNDOS</p>
						</div>
					</div>
					<hr />
				</div>
			</div>
		</>
	);
};

export default Start;
