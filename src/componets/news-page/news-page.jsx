import { Component } from 'react/cjs/react.development';
import { NewsFilters } from '../news-filters/news-filters';
import { NewsList } from '../news-list/news-list';
import data from '../../news.json';

export class NewsPage extends Component {
    state = {
        checked: {
            isPhoto: false,
            isLink: false,
            isSpecial: false,
            
        }
        
    }
    
    data = data
    

    handleFilter = (value) => {
        this.setState({
            checked: {
                ...this.state.checked,
                [value]: !this.state.checked[value] 
            }
            
        })
        
    }
    resetHandler = () => {
        for(let key in this.state.checked) {
            this.setState({
                checked: {
                    [key]: false
                }
            })
           }
        
        this.data = data
    }
    render() {

        if (this.state.checked.isPhoto) {
            this.data = this.data.filter(el => el.photo);
        }
        if (this.state.checked.isLink) {
            this.data = this.data.filter(el => el.link);
        }
        if (this.state.checked.isSpecial) {
            this.data = this.data.filter(el => el.isSpecial);
        } 
        
        return (
            <div className='container'>
                <NewsFilters resetHandler={this.resetHandler} handleFilter={this.handleFilter}/>
                <NewsList data={this.data} state={this.state.checked}/>
            </div>
        )
    }
}