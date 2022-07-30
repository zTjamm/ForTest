import React, {Component} from 'react';

class Hw3 extends Component {
    state = {
        searchQuery: '',
        hits: [],
        currentPage: 1,
        modal: false,
        modalImage: '',
        status: 'idle',
        error: null,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        fetch('https://pixabay.com/api/?q=cat&page=1&key=24343949-498b2150a44ae569b49298aee&image_type=photo&orientation=horizontal&per_page=12')
            .then(response=>response.json())
            .then((result)=>{
                this.setState({
                    hits: [...result.hits]
                });
            },
                (error)=>{
                this.setState({
                    error
                })
                }
                )
    }


    render() {

        const {hits}= this.state;
        console.log(hits)
            return (
                <ul>
                    {hits.map(item=>(
                        <li key={item.tags}>
                            <img src={item.pageURL} />
                        </li>
                    ))}
                </ul>
            )
        }
}

export default Hw3;