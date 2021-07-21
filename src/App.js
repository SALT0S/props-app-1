import Saludo from './components/Saludo';

function App() {
	return (
		<div className='container mt-5'>
			<h1>Proyecto desde cero</h1>
			<Saludo persona='Jose' edad={30} />
			<Saludo persona='Juan' edad={15} />
			<Saludo persona='Joseph' edad={24} />
		</div>
	);
}

export default App;
