import { useState } from 'react';
import NewsBox from './NewsBox';

function News(props) {
	const news = props.news
    
	const [searchTerm, setSearchTerm] = useState('');

	const filteredNews =
		searchTerm.trim() !== ''
			? news.filter((item) =>
            item.title
						.toLowerCase()
						.includes(searchTerm.toLowerCase())
			  )
			: news;

	return (
		<section className="news">
			<div className="heading hz">
				<p>News</p>
				<input
					type="text"
					name="search-news"
					id="search-news"
					className="input"
					placeholder="Search news..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
			<div className="content">
				<div className="list">
					{filteredNews.map((item) => (
						<NewsBox key={item.id} item={item} short={false}/>
					))}
				</div>
			</div>
		</section>
	);
}

export default News;
