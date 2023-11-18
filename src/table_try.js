import './App.css';

function TableTry() {
    return(
        <div className='table_div'>
        <table className='tabletry'>
            <tr>
                <th>Name</th>
                <th>City</th>
            </tr>

            <tr>
                <td>Seneca</td>
                <td>Toronto</td>
            </tr>
            <tr>
                <td>Lambton</td>
                <td>Mississauga</td>
            </tr>
        </table>

        </div>
    );
};

export default TableTry;