function Filtered() {
    return (
        <>
            <div className='filtered-page'>
                <table className='order-table'>
                    <thead className='thead-light'>
                        <tr>
                            <th className='col-2'>Ism</th>
                            <th className='col-4'>Telefon raqam</th>
                            <th className='col-11'>Buyurtmalar soni</th>
                            <th className='col-11'>Client ID</th>
                            <th className='col-11'>Manzil</th>
                            <th className='col-11'>Manzil</th>
                        </tr>
                    </thead>
                    <tbody className='table-body row-body'>
                        <tr>
                            <td className='js-client-name'>Farrukh</td>
                            <td className='js-client-phone-number'>
                                998911645022
                            </td>
                            <td className='js-client-id'>10</td>
                            <td className='js-client-id'>16</td>
                            <td>
                                <a
                                    target='blank'
                                    href='https://t.me/MrAbbosov'
                                    className='location-link js-location-link'>
                                    MrAbbosov
                                </a>
                            </td>
                            <td>
                                <a
                                    target='blank'
                                    href='https://t.me/MrAbbosov'
                                    className='location-link js-location-link'>
                                    Manzil
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Filtered
