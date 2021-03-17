import coinImg from '../../assets/img/Coin.png'
import orderImg from '../../assets/img/Order.png'
import customerImg from '../../assets/img/Customer.png'
import dishImg from '../../assets/img/dish.png'

function Orders() {
    return (
        <>
            <div>
                <div className='orders-page'>
                    <div className='orders_page-top'>
                        <div className='orders_page-headings'>
                            <h2 className='orders_page-heading'>
                                "Ajwa" taomlari
                            </h2>
                            <p className='orders_page-sub_heading'>
                                Tuesday, 2 Feb 2021
                            </p>
                            <hr className='orders_line' />
                            <div className='orders_statistics'>
                                <ul className='stat-list'>
                                    <li className='stat-list-item'>
                                        <div className='list-item-top'>
                                            <div className='list-item-img-wrapper'>
                                                <img
                                                    className='list-item-img'
                                                    src={coinImg}
                                                    alt='Dollar'
                                                    width={24}
                                                    height={24}
                                                />
                                            </div>
                                            <div className='list-item-number '>
                                                <span className='js-statistics-price'>
                                                    0
                                                </span>{' '}
                                                so'm
                                            </div>
                                        </div>
                                        <div className='list-item-bottom'>
                                            Jami daromad
                                        </div>
                                    </li>
                                    <li className='stat-list-item'>
                                        <div className='list-item-top'>
                                            <div className='list-item-img-wrapper'>
                                                <img
                                                    className='list-item-img'
                                                    src={orderImg}
                                                    alt='Dollar'
                                                    width={24}
                                                    height={24}
                                                />
                                            </div>
                                            <div className='list-item-number js-statistics-number-sets'>
                                                0
                                            </div>
                                        </div>
                                        <div className='list-item-bottom'>
                                            Setlar soni
                                        </div>
                                    </li>
                                    <li className='stat-list-item'>
                                        <div className='list-item-top'>
                                            <div className='list-item-img-wrapper'>
                                                <img
                                                    className='list-item-img'
                                                    src={customerImg}
                                                    alt='Dollar'
                                                    width={24}
                                                    height={24}
                                                />
                                            </div>
                                            <div className='list-item-number js-statistics-all-customers'>
                                                0
                                            </div>
                                        </div>
                                        <div className='list-item-bottom'>
                                            Mijozlar soni
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='most-ordered'>
                            <div className='most-ordered-top'>
                                <h3 className='most-ordered-heading-top'>
                                    Top buyurtmalar
                                </h3>
                                <hr className='orders_line' />
                            </div>
                            <div className='most-ordered-bottom'>
                                <ul className='most-ordered-list'>
                                    <li className='most-ordered-item'>
                                        <img
                                            className='most-ordered-img'
                                            src={dishImg}
                                            alt='dish'
                                            width={50}
                                            height={50}
                                        />
                                        <div className='most-otdered-wrapper'>
                                            <h4 className='most-ordered-heading'>
                                                Spicy seasoned seafood noodles
                                            </h4>
                                            <p className='most-ordered-subheading'>
                                                200 dishes ordered
                                            </p>
                                        </div>
                                    </li>
                                    <li className='most-ordered-item'>
                                        <img
                                            className='most-ordered-img'
                                            src={dishImg}
                                            alt='dish'
                                            width={50}
                                            height={50}
                                        />
                                        <div className='most-otdered-wrapper'>
                                            <h4 className='most-ordered-heading'>
                                                Spicy seasoned seafood noodles
                                            </h4>
                                            <p className='most-ordered-subheading'>
                                                200 dishes ordered
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='orders_page-bottom'>
                    <table className='order-table'>
                        <thead className='thead-light'>
                            <tr>
                                <th className='col-1'>ID</th>
                                <th className='col-2'>Sana</th>
                                <th className='col-3'>Ism</th>
                                <th className='col-4'>Telefon raqam</th>
                                <th className='col-5'>Buyurtma nomi</th>
                                <th className='col-6'>Soni</th>
                                <th className='col-7'>Narxi</th>
                                <th className='col-8'>Jami</th>
                                <th className='col-9'>Manzil</th>
                                <th className='col-10'>Status</th>
                            </tr>
                        </thead>
                        <tbody className='table-body row-body' />
                    </table>
                </div>
            </div>
        </>
    )
}

export default Orders
