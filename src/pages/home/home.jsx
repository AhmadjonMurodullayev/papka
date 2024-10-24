import React from "react";
import Cards from "../../components/cards/cards";
import Compont from "../../components/compont/compont";
import Banner from "../../components/banner/banner";
import data from '../../data/data'

export default function Home() {
  return (
    <div >
      <div>
        <h2>Kategoriyalar</h2>
        {data.card.map((item) => {
          <Cards id={item.id} img={item.img} />;
        })}
      </div>
      <div>
        <h2>Eng ko’p sotilgan</h2>
        {data.noutbook.map((item) => {
          <Compont {...item} />;
        })}
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <h2>Eng ommabop</h2>

        {data.noutbook.map((item) => {
          <Compont {...item} />;
        })}
      </div>
    </div>
  );
}
