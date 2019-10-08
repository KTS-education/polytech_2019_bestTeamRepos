import React from 'react';
import SuggestionsList from './SuggestionsList';
import SectionName from './SectionName';
import NoResults from '../NoResults';
import './SuggestionsListContainer.css';

import p1 from '../../img/products/1.jpg';
import p2 from '../../img/products/2.jpg';
import p3 from '../../img/products/3.jpg';

// import PropTypes from 'prop-types';

// Компонент-контейнер - работа с Redux, реализуют loading, error и другую логику
class SuggestionsListContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            suggestions: [{
                product_id: 1, 
                product_img_href: p1,
                product_title: 'MacBook Pro 2018 256GB',
                product_price: 120000,
                product_description: 'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256 ГБ SSD, Iris Plus 655, Touch Bar (серый космос)'
            },
            {
                product_id: 2, 
                product_img_href: p2,
                product_title: 'iPad Pro 2018 256GB',
                product_price: 80000,
                product_description: 'Планшет Apple iPad Pro 11 Wi-Fi + Cellular 256GB Space gray'
            },
            {
                product_id: 3, 
                product_img_href: p3,
                product_title: 'iPhone XR 256GB',
                product_price: 70000,
                product_description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'
            },
            {
                product_id: 4, 
                product_img_href: p1,
                product_title: 'MacBook Pro 2018 256GB',
                product_price: 120000,
                product_description: 'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256 ГБ SSD, Iris Plus 655, Touch Bar (серый космос)'
            },
            {
                product_id: 5, 
                product_img_href: p2,
                product_title: 'iPad Pro 2018 256GB',
                product_price: 80000,
                product_description: 'Планшет Apple iPad Pro 11 Wi-Fi + Cellular 256GB Space gray'
            },
            {
                product_id: 6, 
                product_img_href: p1,
                product_title: 'MacBook Pro 2018 256GB',
                product_price: 120000,
                product_description: 'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256 ГБ SSD, Iris Plus 655, Touch Bar (серый космос)'
            },
            {
                product_id: 7, 
                product_img_href: p3,
                product_title: 'iPhone XR 256GB',
                product_price: 70000,
                product_description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'
            },
            {
                product_id: 8, 
                product_img_href: p2,
                product_title: 'iPad Pro 2018 256GB',
                product_price: 80000,
                product_description: 'Планшет Apple iPad Pro 11 Wi-Fi + Cellular 256GB Space gray'
            },
            {
                product_id: 9, 
                product_img_href: p3,
                product_title: 'iPhone XR 256GB',
                product_price: 70000,
                product_description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'
            },
            {
                product_id: 10, 
                product_img_href: p1,
                product_title: 'MacBook Pro 2018 256GB',
                product_price: 120000,
                product_description: 'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256 ГБ SSD, Iris Plus 655, Touch Bar (серый космос)'
            },
            {
                product_id: 11, 
                product_img_href: p2,
                product_title: 'iPad Pro 2018 256GB',
                product_price: 80000,
                product_description: 'Планшет Apple iPad Pro 11 Wi-Fi + Cellular 256GB Space gray'
            },
            {
                product_id: 12, 
                product_img_href: p3,
                product_title: 'iPhone XR 256GB',
                product_price: 70000,
                product_description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'
            }],
            // suggestions: []

        }
    }

    render(){

        const { suggestions } = this.state;
        if (suggestions.length) {
            return (
                <div>
                    <SectionName />
                    <SuggestionsList suggestions={suggestions}/>      
                </div>
            )
        } else {
            return (
                <NoResults text = {'Кажется, товаров не найдено'} />
            )
        }

        
    }

}

export default SuggestionsListContainer;