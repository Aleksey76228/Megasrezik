import { PoiskTovarov } from '../Poisk/Poisk';
import { Tovar } from '../tovar/tovar'
import s from './catalogtovarov.module.css'
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Товар 1',
        price: 100,
        image: 'https://www.bigtv.ru/storage/goodsImages/668/668467/clear_668467_1.jpg',
        quantity: 2,
        category: 'Духовые'
    },

    {
        id: 2,
        title: 'Товар 2',
        price: 200,
        image: 'https://avatars.mds.yandex.net/i?id=66c5f52b211da8ece23afe796131f468_l-5190812-images-thumbs&n=13',
        quantity: 7,
        category: 'Ударные'
    },
    {
        id: 3,
        title: 'Товар 3',
        price: 300,
        image: 'https://dshy7.kaluga.muzkult.ru/media/2021/12/26/1306932351/Gitara.jpg',
        quantity: 1,
        category: 'Струнные'
    },
    {
        id: 4,
        title: 'Товар 4',
        price: 400,
        image: 'https://muzdrive.ru/wa-data/public/shop/products/19/52/5219/images/14448/14448.750x0.jpg',
        quantity: 1,
        category: 'Духовые'
    },

    {
        id: 5,
        title: 'Товар 5',
        price: 500,
        image: 'https://www.bigtv.ru/storage/goodsImages/623/623356/clear_623356_1.jpg',
        quantity: 2,
        category: 'Ударные'
    },
    {
        id: 6,
        title: 'Товар 6',
        price: 600,
        image: 'https://dshy7.kaluga.muzkult.ru/media/2021/12/26/1306932351/Gitara.jpg',
        quantity: 5,
        category: 'Струнные'
    }
    
];


export function Catalogtovarov() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products; 
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return (
        <div className={s.catalogszag}>
        <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.PoiskFiltr}>
            <input className={s.Pole}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск товаров..."
            />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Все категории</option>
                <option value="Духовые">Духовые</option>
                <option value="Ударные">Ударные</option>
                <option value="Струнные">Струнные</option>
            </select>
            <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="">Без сортировки</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
                <option value="quantityAsc">Количество: по возрастанию</option>
                <option value="quantityDesc">Количество: по убыванию</option>
            </select>
        </div>
            <div className={s.catalogs}>
                <div className={s.catalog}>
                    {sortedProducts.map((product) => (
                        <Tovar 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            price={product.price} 
                            image={product.image} 
                            quantity={product.quantity} 
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}