import Comentario from './components/Comentario';
import Saludo from './components/Saludo';

function App() {
	return (
		<div className='container mt-5'>
			<h1>Proyecto desde cero</h1>
			<Saludo persona='Jose' edad={30} />
			<Saludo persona='Juan' edad={15} />
			<Saludo persona='Joseph' edad={24} />
			<hr />
			<h3>Cajita de comentarios</h3>
			<Comentario
				urlImagen='https://picsum.photos/64'
				persona='Jose'
				texto='aaaaaaaaaaaaaaaaaaa'
			/>

			<Comentario
				urlImagen='https://picsum.photos/64'
				persona='Juan'
				texto='wwwwwwwwwwwwwwwwwwwwwww'
			/>

			<Comentario
				urlImagen='https://picsum.photos/64'
				persona='Joseph'
				texto='dddddddddddddddddddd'
			/>
		</div>
	);
}

export default App;
