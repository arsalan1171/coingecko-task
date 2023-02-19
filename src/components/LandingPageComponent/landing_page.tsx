import React, { useState, useEffect } from "react";
import CryptoApi from "../../api/cryptoApi";
import { CryptoTable } from "../TableComponent/table_component";
import './landing_page.css';

const LandingPage = () => {
    let [cryptoList, setCryptoList] = useState<any[]>([]);
    let [page, setPage] = useState(1);

    const loadMoreCrypto = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        let isComponentMounted = true;
        const loadCrypto = async () => {
            const crypto = await CryptoApi.getCryptoList(page);
            if (isComponentMounted) {
                setCryptoList((prev) => [...prev, ...crypto]);
            }
        };

        loadCrypto();
        return () => {
            isComponentMounted = false;
        };
    }, [page]);

    window.onscroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            loadMoreCrypto();
        }
    };

    return (
        <div className="crypto-container">
            <label className='main-heading'>Cryptocurrency Prices by Market Cap</label>
            <div>
                <CryptoTable cryptoList={cryptoList} />
            </div>
        </div>
    );
};
export default LandingPage;