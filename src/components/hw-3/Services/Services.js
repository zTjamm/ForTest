import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api';
const apiKey = '24343949-498b2150a44ae569b49298aee';

export  default function fetchImg({searchQuery, currentPage = 1}) {
    return axios.get(
        `/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    ).then(res => res.data.hits);
}