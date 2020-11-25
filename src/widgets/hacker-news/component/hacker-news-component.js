import React, {Component} from 'react';
import { connect } from "react-redux";
// import {loadstoriesRequested} from '../redux/hacker-news-actions';
import "./hacker-news-component.css";
import "../../widgets.css";

class HackerNews extends Component{
    // componentDidMount(){
    //     const {items,initialLoad} = this.props;
    //     if (items.length === 0) {
    //         debugger;
    //         setTimeout(()=>initialLoad(), 1000);            
    //     }
    // }
   
    render (){
        const {items} = this.props;
        if (items.length === 0) {
            return <div className="weather-root widget">Loading News...</div>;
        }
    
        return (
            <div className="news-root widget">
                <h2>Hacker News - Top 5</h2>
                <List items={items} />
            </div>
        );
    }
}
const Link = ({ title, url }) => {
    return (
        <div className="news-link">
            <a href={url}>{title}</a>
        </div>
    );
};

const List = ({ items }) => {
    return items.map((item, index) => <Link key={index} {...item} />);
};

const mapStateToProps = state => {
    return {
        items: state.hackerNews ? state.hackerNews.items : [],
    };
};
// const mapDispatchToProps = (dispatch) => {
//     return {
//         initialLoad: () => dispatch(loadstoriesRequested())
//       };
// };
    

export const ConnectedHackerNews = connect(mapStateToProps)(HackerNews);
