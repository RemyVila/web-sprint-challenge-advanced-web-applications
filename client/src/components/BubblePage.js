import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from '../utils/axiosWithAuth';
import { fetchColorList } from '../utils/fetchColorData'
// import BubblesForm from '../components/BubblesForm'


const BubblePage = () => {

  const [colorList, setColorList] = useState([]);

  const getListData = () => {
    fetchColorList()
      .then((req => {
        setColorList(req.data);
      }))
      .catch(err => {
        console.log(err);
      })
  }

  const postColor = (color) => {
    axiosWithAuth()
      .post('/colors', color)
      .then(req => {
        setColorList(req.data)
      })
      .catch(err => {
        console.log(err);
    })
  }

  useEffect(() => {
    getListData()
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColorList={getListData} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;