import { ICryptoDetails, IMarketData } from "../../models/CryptoDetailsInterface";
import React, { useState, useEffect } from "react";
import CryptoApi from "../../api/cryptoApi";
import { Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./details_page.css";

const CryptoDetailsPage = () => {
    let data = useLocation();
    let [cryptoDetails, setCryptoDetails] = useState<ICryptoDetails>();
    let [marketData, setMarketData] = useState<IMarketData>();

    useEffect(() => {
        let isComponentMounted = true;
        const loadDetails = async () => {
            const getCryptoDetails = await CryptoApi.getCyptoDetails(data.state?.from);
            if (isComponentMounted) {
                setCryptoDetails(getCryptoDetails);
                setMarketData(getCryptoDetails.market_data);
            }
        };

        loadDetails();
        return () => {
            isComponentMounted = false;
        };
    }, [data.state.from]);


    return (
        <div className="details-container">
            <div>
                <Link style={{ color: "black", marginLeft: 20, marginRight: 10 }} to={"/"}  > Cryptocurrencies</Link>{">"}{'  '}
                {cryptoDetails?.symbol.toUpperCase()} price
            </div>

            <Container>
                <Row>
                    <Col>
                        <div className="left-panel">
                            <div> Rank#{cryptoDetails?.market_cap_rank}</div>
                            <div style={{ display: 'flex' }}>
                                <img style={{ marginRight: 10 }} src={cryptoDetails?.image.thumb} alt=''></img>
                                <div className="crypto-title"> {cryptoDetails?.id} {cryptoDetails?.symbol.toUpperCase()}</div>
                            </div>
                            <div className='price'> R{marketData?.current_price['zar']}  </div>
                            <br></br>
                            <div>
                                <Container style={{ backgroundColor: '#424242', color: 'white', fontSize: 11, padding: 10 }}>
                                    <Row md={4}>
                                        <Col>Market Cap</Col>
                                        <Col>R{marketData?.market_cap['zar']}</Col>
                                        <Col>Circulating Supply</Col>
                                        <Col>{marketData?.circulating_supply}</Col>
                                    </Row>
                                    <Row md={4}>
                                        <Col>Trading Volume</Col>
                                        <Col>R{marketData?.total_volume['zar']}</Col>
                                        <Col>Total Supply</Col>
                                        <Col>{marketData?.total_supply}</Col>
                                    </Row>
                                    <Row md={4}>
                                        <Col >Fully Diluted Valuation</Col>
                                        <Col>R{marketData?.fully_diluted_valuation['zar']}</Col>
                                        <Col>Max Supply</Col>
                                        <Col>{marketData?.total_supply}  </Col>
                                    </Row>
                                </Container>

                                <div className='description' >
                                    <label style={{ fontSize: 'larger', fontWeight: "bold" }}>What is {cryptoDetails?.name} ? </label>
                                    <br></br>
                                    {cryptoDetails?.description['en']}
                                </div>
                            </div>
                        </div>
                        <br></br>
                    </Col>
                    <Col>
                        <div className="right-panel">
                            <div style={{ width: '400px' }}>
                                <div style={{ marginBottom: 7 }}>{cryptoDetails?.symbol.toUpperCase()}  Price Statistics</div>
                                <Row md={4}>
                                    <Col>{cryptoDetails?.id} Price</Col>
                                    <Col>R{marketData?.market_cap['zar']}</Col>
                                </Row>
                                <hr></hr>
                                <Row md={4}>
                                    <Col>24h Low / 24h High</Col>
                                    <Col>R{marketData?.low_24h['zar']}/ R{marketData?.high_24h['zar']}</Col>
                                </Row>
                                <hr></hr>
                                <Row md={4}>
                                    <Col>Trading Volume</Col>
                                    <Col>R{marketData?.total_volume['zar']}</Col>
                                </Row>
                                <hr></hr>
                                <Row md={4}>
                                    <Col>Market Cap Rank</Col>
                                    <Col>{cryptoDetails?.market_cap_rank}</Col>
                                </Row>
                                <hr></hr>
                                <Row md={4}>
                                    <Col>Market Cap</Col>
                                    <Col>R{marketData?.market_cap['zar']}</Col>
                                </Row>
                                <hr></hr>
                                <Row md={4}>
                                    <Col>Vol/Market Cap</Col>
                                    <Col>{(marketData?.total_volume['zar'] !== undefined ?
                                        marketData?.total_volume['zar'] : 0)
                                        / (marketData?.market_cap['zar'] !== undefined ?
                                            marketData?.market_cap['zar'] : 0)}</Col>
                                </Row>
                                <hr></hr>
                                <Row md={4}>
                                    <Col>All-Time High</Col>
                                    <Col>R{marketData?.ath['zar']}</Col>
                                </Row>
                                <hr></hr>
                                <Row md={4}>
                                    <Col>All-Time Low</Col>
                                    <Col>R{marketData?.atl['zar']}</Col>
                                </Row>
                                <hr></hr>
                                <Row md={4}>
                                    <Col>Trading Volume</Col>
                                    <Col>R{marketData?.total_volume['zar']}</Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default CryptoDetailsPage;