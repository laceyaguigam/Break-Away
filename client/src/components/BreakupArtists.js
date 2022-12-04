import React, { useState } from "react"
import Cart from './Cart'
import CartItem from './CartItem'
//how to open Cart modal, but send data for item/artist to CartItem and have THAT populate Cart?
import img1 from "../assets/images/alex.jpg";
import img2 from "../assets/images/alicia.jpg";
import img3 from "../assets/images/cassie.jpg";
import img4 from "../assets/images/joe.jpg";
import img5 from "../assets/images/kyle.jpg";
import img6 from "../assets/images/sarah.jpg";

//create array of brekaup artist object with name and price attributes, send to CartItem
const ArtistList = ({ category }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedArtist, setSelectedArtist] = useState()

  const [item] = useState([
    {
      image: img1,
      name: 'Alex',
      price: '50'
    },
    {
      image: img2,
      name: 'Alicia',
      price: '60'
    },
    {
      image: img3,
      name: 'Cassie',
      price: '70'
    },
    {
      image: img4,
      name: 'Joe',
      price: '80'
    },
    {
      image: img5,
      name: 'Kyle',
      price: '90'
    },
    {
      image: img6,
      name: 'Sarah',
      price: '100'
    }
  ])

  const selectedArtists = items.filter(item => item.name === name)

  const toggleCart = (item, i) => {
    setSelectedArtist({ ...item, index: i })
    setIsCartOpen(!isCartOpen)
  }

  //send selected artist to cart (or should it be cartitem?? bc cart gets the item object data from cartitem I think? but cart is the modal that opens w click on hire btn?)
  return(
    <div>
      {isCartOpen && (
        <Cart onClose={toggleCart} selectedArtist={selectedArtist} />
      )}
      <div className="flex-row">
        {selectedArtists.map((item, i) => (
          <img
            src={require(`../../assets/images/${name}/${i}.jpg`).default}
            alt={item.name}
            className='flex-row'
            onClick={() => toggleCart(item, i)}
            key={item.name}
          />
        ))}
      </div>
    </div>
  )
}

// main display divs for brekaup artist profiles with hire buttons
function BreakupArtists() {
  return (
    <section>
      {isCartOpen && (
        <Cart onClose={toggleCart} selectedArtist={selectedArtist} />
      )}
      <h2 className="section-title">Meet The Breakup Artists</h2>
      <div className="row">
        <div className="column">
          <img
            src={img1}
            alt="Alex the breakup artist"
            // style={{ width: "20%" }}
          />
          <h1>Alex</h1>
          <p className="title">(insert info)</p>
          <p>(insert info)</p>
          <p>
            <button id="hireAlex">Hire</button>
          </p>
        </div>

        <div className="column">
          <img
            src={img2}
            alt="Alicia the breakup artist"
            // style={{ width: "20%" }}
          />
          <h1>Alicia</h1>
          <p className="title">(insert info)</p>
          <p>(insert info)</p>
          <p>
            <button id="hireAlicia">Hire</button>
          </p>
        </div>

        <div className="column">
          <img
            src={img3}
            alt="Cassie the breakup artist"
            // style={{ width: "20%" }}
          />
          <h1>Cassie</h1>
          <p className="title">(insert info)</p>
          <p>(insert info)</p>
          <p>
            <button id="hireCassie">Hire</button>
          </p>
        </div>

        <div className="row">
          <div className="column">
            <img
              src={img4}
              alt="Joe the breakup artist"
              // style={{ width: "20%" }}
            />
            <h1>Joe</h1>
            <p className="title">(insert info)</p>
            <p>(insert info)</p>
            <p>
              <button id="hireJoe">Hire</button>
            </p>
          </div>

          <div className="column">
            <img
              src={img5}
              alt="Kyle the breakup artist"
              // style={{ width: "20%" }}
            />
            <h1>Kyle</h1>
            <p className="title">(insert info)</p>
            <p>(insert info)</p>
            <p>
              <button hireKyle>Hire</button>
            </p>
          </div>

          <div className="column">
            <img
              src={img6}
              alt="Sarah the breakup artist"
              // style={{ width: "20%" }}
            />
            <h1>Sarah</h1>
            <p className="title">(insert info)</p>
            <p>(insert info)</p>
            <p>
              <button hireSarah>Hire</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreakupArtists;
