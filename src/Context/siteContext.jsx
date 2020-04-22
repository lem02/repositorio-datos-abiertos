import React, { createContext, useState } from 'react';
import { useEffect, useReducer } from 'react';

export const SiteContext = createContext(null);

const SiteContextContainer = ({ children }) => {
  const [dataResult, setDataResult] = useState();
  const [repoSelected, setRepoSelected] = useState();
  const stateReducer = (prevItems, data) => {
    if (data.action === 'add') {
      if (prevItems.indexOf(data.item) === -1) {
        return [...prevItems, data.item];
      } else {
        return prevItems;
      }
    } else if (data.action === 'delete') {
      return prevItems.filter((item) => item !== data.item);
    }
  };
  const initialState = [];
  const [order, setOrder] = useReducer(stateReducer, initialState);

  const addItem = (item) => {
    setOrder({ action: 'add', item });
  };

  const deleteItem = (item) => {
    setOrder({ action: 'delete', item });
  };

  useEffect(() => {
    if (order.length > 0) {
      console.log(order);
    }
  }, [order]);

  useEffect(() => {
    if (dataResult && dataResult.length > 0) {
      setRepoSelected(dataResult[0]);
    }
  }, [dataResult]);

  const store = {
    dataResult,
    setDataResult,
    repoSelected,
    setRepoSelected,
    order,
    setOrder,
    addItem,
    deleteItem,
  };

  return <SiteContext.Provider value={store}>{children}</SiteContext.Provider>;
};

export default SiteContextContainer;
