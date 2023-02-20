import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

export const column: any = [
    {
        name: '',
        selector: (row: { image: any; }) => row.image,
        cell: (tableProps: { image: string | undefined; }) => (
            <img src={tableProps.image} height="20px" alt='' />
        )
    },
    {
        name: '#',
        selector: (row: { market_cap_rank: string; }) => row.market_cap_rank,
        sortable: true
    },
    {
        name: 'Coin',
        selector: (row: { name: string; }) => row.name,
        cell: (tableProps: { id: string | undefined; }) => (
            <Link style={{ color: "white" }} to={`/crypto-details/${tableProps.id}`} state={{ from: tableProps.id }}> {tableProps.id}</Link>
        ),
        sortable: false
    },
    {
        name: 'Price',
        selector: (row: { current_price: string; }) => row.current_price,
        sortable: true
    },

    {
        name: '24h',
        selector: (row: { price_change_24h: string; }) => row.price_change_24h,
        sortable: false
    },

    {
        name: '24h volume',
        selector: (row: { total_volume: string; }) => row.total_volume,
        sortable: false
    },
    {
        name: 'Mkt Cap',
        selector: (row: { market_cap: string; }) => row.market_cap,
        sortable: true
    },
    {
        name: 'Last 7 days',
        selector: (row: { image: string; }) => row.image,
        cell: (tableProps: { image: string | undefined; }) => (
            <img src={"https://www.coingecko.com/coins/" + tableProps.image?.match(/[0-9]{1,}/) + "/sparkline"} height="50px" alt='' />
        )
    },
];

export const CryptoTable = (data: any) => {
    return (
        <div >
            <DataTable
                key={1}
                columns={column}
                data={data.cryptoList}
                highlightOnHover
                theme='dark'
                responsive
            />
        </div>
    );
}