function Settings() {
    return (
        <>
            <div>
                <div className='settings-page'>
                    <div className='avaible-dishes'>
                        <h2 className='add-dishes-heading'>
                            Mahsulotlar sozlamalari
                        </h2>
                        <ul className='add-dishes-list js-add-dishes-list'>
                            <li className='add-dish-item add-dish-button-wrapper'>
                                <button id='myBtn' className='add-dish-button'>
                                    <span>+</span>
                                    <br />
                                    Mahsulot qo'shish
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id='myModal' className='modal'>
                    <div className='modal-content'>
                        <img
                            className='close'
                            src='img/Line.png'
                            alt='Arrow'
                            width={16}
                            height={9}
                        />
                        <h3 className='modal-heading'>Mahsulot qo'shish</h3>
                        <hr className='modal-line' />
                        <form className='modal-form'>
                            <ul className='modal-form-list'>
                                <li className='modal-list-item'>
                                    <label
                                        className='modal-list-item-heading'
                                        htmlFor='add-product-modal'>
                                        Mahsulot nomi
                                    </label>
                                    <input
                                        className='modal-list-item-input js-new-product-name'
                                        type='text'
                                        autoComplete='off'
                                        name='new-product-name'
                                        id='add-product-modal'
                                        required
                                        placeholder='Set “KFC”'
                                    />
                                </li>
                                <li className='modal-list-item'>
                                    <label
                                        className='modal-list-item-heading'
                                        htmlFor='add-product-modal'>
                                        Mahsulot narxi
                                    </label>
                                    <input
                                        className='modal-list-item-input js-new-product-price'
                                        type='number'
                                        autoComplete='off'
                                        step={500}
                                        name='new-product-name'
                                        id='add-product-modal'
                                        placeholder={26000}
                                        required
                                    />
                                </li>
                                <li className='modal-list-item'>
                                    <label
                                        className='modal-list-item-heading'
                                        htmlFor='add-product-modal'>
                                        Mahsulot rasmi (link)
                                    </label>
                                    <input
                                        className='modal-list-item-input js-new-product-img'
                                        type='text'
                                        autoComplete='off'
                                        name='new-product-name'
                                        id='add-product-modal'
                                        required
                                        placeholder='https://telegra.ph/file/1ae81e6cbd8ede307a25b.jpg'
                                    />
                                </li>
                                <li className='new-product-img-wrapper'>
                                    <img
                                        className='new-product-img js-new-product-preview'
                                        src='https://panor.ru/img/default/category.png'
                                        alt='new-product'
                                        width={120}
                                        height={120}
                                    />
                                </li>
                                <li className='modal-list-item'>
                                    <label
                                        className='modal-list-item-heading'
                                        htmlFor='add-product-modal'>
                                        Mahsulot tarkibi
                                    </label>
                                    <textarea
                                        className='modal-list-item-input item-input-textarea js-item-input-textarea'
                                        rows={3}
                                        required
                                        defaultValue={''}
                                    />
                                </li>
                            </ul>
                            <div className='new-modal-btn-wrapper'>
                                <button className='new-modal-btn' type='reset'>
                                    Bekor qilish
                                </button>
                                <button
                                    className='new-modal-btn new-modal-btn-pro js-add-new-product-btn'
                                    type='submit'>
                                    Maqsulot qo’shish
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings
