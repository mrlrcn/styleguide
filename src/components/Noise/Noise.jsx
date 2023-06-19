import './noise.scss'

import { use100vh } from 'react-div-100vh';

function Noise() {
	return <div className="noise-overlay" style={{ height: use100vh() }}></div>;
}

export default Noise;