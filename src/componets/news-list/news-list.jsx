import { Component } from 'react/cjs/react.development';
import PropTypes from 'prop-types';
import { NewsItem } from '../news-item/news-item';

export class NewsList extends Component {
    render() {
        const newsList = this.props.data.map((news, i) => (
            
                    <li key={news.id}>
                        <NewsItem
                            title={news.title}
                            description={news.content}
                            date={news.dateCreated}
                            categories={news.categories}
                            link={news.link}
                            photo={news.photo}
                            author={news.author}
                            isSpecial={news.isSpecial}
                        />
                    </li>
                
            
        )

        )
        return (
            <ul>
                {newsList}
            </ul>
        )
    }
}
NewsItem.propTypes = {
    data: PropTypes.object,
    
}