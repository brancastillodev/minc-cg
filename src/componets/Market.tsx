import marketTitle from "../assets/market/marketTitle.png"

function Market(){

  return(
    <main className="content-page">
      <figure className="content-title-text">
        <img src={marketTitle} alt="market-title" />
      </figure>
      <p className='simple-text waiting-msg'>
        The market is down for maintenance. Please check back soon.
      </p>
    </main>
  )


}

export default Market;
