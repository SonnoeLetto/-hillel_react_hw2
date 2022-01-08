import { Component } from "react";
import PropTypes from 'prop-types';

export class NewsItem extends Component {
    render() {
        const { title, description, date, categories, link, photo, author, isSpecial } = this.props;

        const categoriesList = categories.map((category) => (
            <li key={category.id}>{category.name}</li>
        ))
        return (
            <div style={{ backgroundColor: isSpecial && '#e1caad' }}>


                <div className="newsItem-wrap" style={{justifyContent: photo ? 'space-between': '' }}>
                    <div>
                        {isSpecial &&
                            <p style={{border: '1px solid', width: 200, textAlign: 'center', backgroundColor: '#fcf9f6'}}>IS SPECIAL</p>
                        }
                        <h3>{title} | <span>{date}</span> | <span>{author}</span></h3>
                        <p dangerouslySetInnerHTML={{ __html: description }}></p>
                        {link && <a href={link}>{link}</a>}
                        <ul style={{paddingLeft: 50}}>
                            {categoriesList}
                        </ul>
                    </div>
                    {photo && <img width={450} src={photo} alt="" />}
                </div>


            </div>
        )

    }
}

NewsItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    categories: PropTypes.string,
    link: PropTypes.string,
    photo: PropTypes.string,
    author: PropTypes.string,
    isSpecial: PropTypes.string
}