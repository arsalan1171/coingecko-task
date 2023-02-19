export interface ICryptoDetails {
    id: string
    name: string
    symbol: string
    market_cap_rank: number
    description: { [key: string]: string }
    image: { [key: string]: string }
}

export interface IMarketData {
    market_cap: { [key: string]: number | undefined }
    high_24h: { [key: string]: number }
    low_24h: { [key: string]: number }
    ath: { [key: string]: number }
    atl: { [key: string]: number }
    total_volume: { [key: string]: number | undefined }
    total_supply: number
    circulating_supply: number
    current_price: { [key: string]: number }
    fully_diluted_valuation: { [key: string]: number }
}

