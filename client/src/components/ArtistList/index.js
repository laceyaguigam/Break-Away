import React, { useState } from "react"
// import Cart bc we want Cart to open as modal
import Cart from './Cart'
//how to open Cart modal, but send 'item' array data from 'hire'btn onClick to CartItem or ProductList? 
import img1 from "../assets/images/alex.jpg";
import img2 from "../assets/images/alicia.jpg";
import img3 from "../assets/images/cassie.jpg";
import img4 from "../assets/images/joe.jpg";
import img5 from "../assets/images/kyle.jpg";
import img6 from "../assets/images/sarah.jpg";

//create array of brekaup artist objects (our products) with name and price attributes
const ArtistList = ({ name }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedArtist, setSelectedArtist] = useState()

  const [items] = useState([
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
  //need to get hireBtn onClick to grab 'name', pass where?

  //I don't think this is where it can hook into Cart???
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
          //this img div from the modules probably is wrong but I don't know how it will be displayed in the cart?
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

  //onClick function for hire buttons; is 'name' the right attribute?
  const hireSomeone = (event) => {
    const [name] = useState()
    event.target.value = useHire
  }

  return (
    //open cart modal if toggleCart
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
            <button onClick={hireSomeone()} id="hireAlex">Hire</button>
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

export default ArtistList