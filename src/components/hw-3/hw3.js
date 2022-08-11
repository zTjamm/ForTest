import React, {Component} from 'react';
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

class Hw3 extends Component {
    state = {
        images: null,
        query: '',
        page: 1,
        loading: false,
    };
    onLoadMore=page=>{
        this.setState({page,})
    }
    formSumbitHandler = data=>{
        const searchQuery = data.toLowerCase();
        const {page}= this.state;

        if(searchQuery.trim() === ''){
            return alert('Input anything')
        }
        this.setState({
            query: searchQuery,
            loading: true,
        })
        setTimeout(
            ()=>{
                fetch(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=24343949-498b2150a44ae569b49298aee&image_type=photo&orientation=horizontal&per_page=12`)
                    .then(response => response.json())
                    .then(data=>{this.setState({images: data.hits})})
                    .finally(this.setState({loading: false}))
            },3000
        )
    }


    render() {
        const{images,loading}=this.state;
            return (
                <div>
                    <Searchbar onSubmit={this.formSumbitHandler} />
                    {images && <ImageGallery data={images} />}
                    {images && <Button onClick={this.onLoadMore} />}
                    {loading && <Loader />}
                </div>
            )
        }
}

export default Hw3;