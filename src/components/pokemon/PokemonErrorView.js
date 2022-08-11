import React from 'react';

const PokemonErrorView = ({message}) => {
    return (
        <div>
            <h1>{message}</h1>
            <img
                src='https://klike.net/uploads/posts/2020-04/1587631210_4.jpg'
                alt='Error msg'
                width={'250'}
            />
        </div>
    );
};

export default PokemonErrorView;