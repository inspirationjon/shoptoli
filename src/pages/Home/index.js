import searchImg from '../../assets/img/search.png'

function Home() {
    return (
        <>
            <div className='main-page'>
                <div className='main_page-top'>
                    <div className='main_page-headings'>
                        <h2 className='main_page-heading'>"Ajwa" taomlari</h2>
                        <p className='main_page-sub_heading'>
                            Tuesday, 2 Feb 2021
                        </p>
                    </div>
                    <div className='main_search-bar'>
                        <img src={searchImg} alt='Search' />
                        <input className='search_bar' type='search' />
                    </div>
                </div>
                <div className='avaible-dishes'>
                    <h2 className='dishes-heading'>Choose Dishes</h2>
                    <ul className='dishes-list'>
                        <li className='dish-item'>
                            <img
                                className='dish-img'
                                src='https://telegra.ph/file/b1b48d3f4a9b98b32b525.jpg'
                                alt='dish'
                                width={132}
                                height={132}
                            />
                            <h3 className='dish-name'>
                                Spicy seasoned seafood noodles
                            </h3>
                            <p className='dish-price'>$ 2.29</p>
                            <p className='dish-avaible'>20 Bowls available</p>
                        </li>
                        <li className='dish-item'>
                            <img
                                className='dish-img'
                                src='https://telegra.ph/file/b1b48d3f4a9b98b32b525.jpg'
                                alt='dish'
                                width={132}
                                height={132}
                            />
                            <h3 className='dish-name'>
                                Spicy seasoned seafood noodles
                            </h3>
                            <p className='dish-price'>$ 2.29</p>
                            <p className='dish-avaible'>20 Bowls available</p>
                        </li>
                        <li className='dish-item'>
                            <img
                                className='dish-img'
                                src='https://telegra.ph/file/b1b48d3f4a9b98b32b525.jpg'
                                alt='dish'
                                width={132}
                                height={132}
                            />
                            <h3 className='dish-name'>
                                Spicy seasoned seafood noodles
                            </h3>
                            <p className='dish-price'>$ 2.29</p>
                            <p className='dish-avaible'>20 Bowls available</p>
                        </li>
                        <li className='dish-item'>
                            <img
                                className='dish-img'
                                src='https://telegra.ph/file/b1b48d3f4a9b98b32b525.jpg'
                                alt='dish'
                                width={132}
                                height={132}
                            />
                            <h3 className='dish-name'>
                                Spicy seasoned seafood noodles
                            </h3>
                            <p className='dish-price'>$ 2.29</p>
                            <p className='dish-avaible'>20 Bowls available</p>
                        </li>
                        <li className='dish-item'>
                            <img
                                className='dish-img'
                                src='https://telegra.ph/file/b1b48d3f4a9b98b32b525.jpg'
                                alt='dish'
                                width={132}
                                height={132}
                            />
                            <h3 className='dish-name'>
                                Spicy seasoned seafood noodles
                            </h3>
                            <p className='dish-price'>$ 2.29</p>
                            <p className='dish-avaible'>20 Bowls available</p>
                        </li>
                        <li className='dish-item'>
                            <img
                                className='dish-img'
                                src='https://telegra.ph/file/b1b48d3f4a9b98b32b525.jpg'
                                alt='dish'
                                width={132}
                                height={132}
                            />
                            <h3 className='dish-name'>
                                Spicy seasoned seafood noodles
                            </h3>
                            <p className='dish-price'>$ 2.29</p>
                            <p className='dish-avaible'>20 Bowls available</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home
