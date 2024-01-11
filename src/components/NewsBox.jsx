import { Link } from 'react-router-dom';

function NewsBox(props) {
	const item = props.item;
	const shortMessage = item.message.substring(
		0,
		Math.floor(
			Math.random() * (Math.floor(300) - Math.ceil(200)) + Math.ceil(200)
		)
	);
	return (
		<div key={item.id} className="item box">
			<div className="top">
				<a href="#" className="title">
					{item.title}
				</a>
				<p className="date">{item.date}</p>
			</div>

			<p className="message">
				{props.short ? (
					<span>
						{shortMessage}...
						<Link to={'/news'} className="link">
							Read More
						</Link>
					</span>
				) : (
					item.message
				)}
			</p>
		</div>
	);
}

export default NewsBox;
