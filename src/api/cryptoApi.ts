import axios from 'axios';
const getCryptoList = async (page: Number) => {
    let response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`);

    return response.data;
}

const getCyptoDetails = async (id: string) => {
    let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`, {
    });

    return response.data;
};

const CryptoApi = {
    getCryptoList, getCyptoDetails
};

export default CryptoApi;