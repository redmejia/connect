import '../App.css'
const Loading = ({ message }) => (
	<div className='loading'>
		{/* <span class="sr-only">{message} </span> */}
		<span class="sr-only">Loading...  </span>
		<div class="spinner-grow text-primary" role="status">
		</div>
	</div>
)

export default Loading;