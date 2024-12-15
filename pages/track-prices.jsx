import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/TrackPrices.module.css';
import Link from 'next/link';

export default function TrackPrices() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null); 

  const perPage = 10; 

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      setLoading(true);
      setError(null);
      try {
        const query = new URLSearchParams({
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: perPage.toString(),
          page: currentPage.toString(),
          sparkline: 'false',
        });

        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?${query.toString()}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setCryptoData(data);


        if (data.length < perPage) {
          setTotalPages(currentPage); 
        } else {
          setTotalPages(null); 
        }
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        setError('Failed to load cryptocurrency data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoPrices();
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (totalPages && currentPage >= totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };

  const handlePageSelect = (page) => {
    setCurrentPage(page);
  };

  const generatePageNumbers = () => {
    const maxPageNumbers = 5; 
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    let endPage = startPage + maxPageNumbers - 1;

    if (endPage > currentPage + Math.floor(maxPageNumbers / 2)) {
      endPage = currentPage + Math.floor(maxPageNumbers / 2);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div>

      <header className={styles.navbar}>
        <div className={styles.header}>
          <h2>Srikar's IS 229 Final Project</h2>
        </div>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/track-prices">Track Prices</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

 
      <div className={styles.container}>
        <h1 className={styles.title}>Cryptocurrency Prices</h1>
        {loading ? (
          <p className={styles.loading}>Loading...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : (
          <>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>24h Change</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((coin, index) => (
                    <tr key={coin.id}>
                      <td>{(currentPage - 1) * perPage + index + 1}</td>
                      <td className={styles.coinCell}>
                        <Image
                          src={coin.image}
                          alt={coin.name}
                          width={24}
                          height={24}
                          className={styles.coinImage}
                        />
                        <span>{coin.name}</span>
                      </td>
                      <td>${coin.current_price.toLocaleString()}</td>
                      <td>${coin.market_cap.toLocaleString()}</td>
                      <td
                        className={
                          coin.price_change_percentage_24h > 0
                            ? styles.positiveChange
                            : styles.negativeChange
                        }
                      >
                        {coin.price_change_percentage_24h
                          ? coin.price_change_percentage_24h.toFixed(2)
                          : '0.00'}
                        %
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            <div className={styles.pagination}>
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={styles.pageButton}
              >
                Previous
              </button>


              {generatePageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageSelect(page)}
                  className={`${styles.pageButton} ${page === currentPage ? styles.activePage : ''}`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={handleNext}
                disabled={totalPages ? currentPage >= totalPages : false}
                className={styles.pageButton}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
