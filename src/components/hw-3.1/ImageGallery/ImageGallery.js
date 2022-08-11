import React, {Component} from 'react';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";

class ImageGallery extends Component {
    state={
        searchQuery: '',
        hits: [],
        error: null,
        status: 'idle',
        perPage: 12,
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevProps.searchQuery !== this.props.searchQuery){
            console.log("new items");
            this.setState({status: 'pending'})
            fetch(`https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=24343949-498b2150a44ae569b49298aee&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`)
                .then(response =>{
                    if(response.ok){
                        return response.json()
                    }
                    return Promise.reject(new Error(`Ничего не найдено с именем ${this.props.searchQuery}`))
                })
                .then(hits => this.setState({hits: hits.hits, status: 'resolved'}))
                .catch(error=> this.setState({error, status: 'rejected'}))
        }
    }

    render() {
       const {hits, error, status}= this.state;
       console.log(hits)

       if(status === 'idle'){
           return (<div>Input any thing</div>);
       }
       if(status === 'pending'){
           return (<div>Loading...</div>)
       }
       if(status === 'rejected'){
           return (<div><h1>{error.message}</h1></div>)
       }
       if(status === 'resolved'){
           return (
               <div>
                   <ImageGalleryItem hits={hits} />
                   <Button />
               </div>
           )
       }
    }
}

export default ImageGallery;