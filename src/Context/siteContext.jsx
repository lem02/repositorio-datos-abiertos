import React, { createContext, useState } from 'react';
import { useEffect, useReducer } from 'react';

export const SiteContext = createContext(null);

const SiteContextContainer = ({ children }) => {
  const [dataResult, setDataResult] = useState();
  const [repoSelected, setRepoSelected] = useState();
  const stateReducer = (prevItems, data) => {
    switch (data.action) {
      case 'loadData':
        return data.items;
      case 'add':
        if (prevItems.find((item) => item.id === data.item.id)) {
          return prevItems;
        } else {
          localStorage.setItem(
            'order',
            JSON.stringify([...prevItems, data.item])
          );
          return [...prevItems, data.item];
        }
      case 'delete':
        localStorage.setItem(
          'order',
          JSON.stringify(prevItems.filter((item) => item !== data.item))
        );
        return prevItems.filter((item) => item !== data.item);
      default:
        break;
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
    if (localStorage.getItem('order')) {
      setOrder({
        action: 'loadData',
        items: JSON.parse(localStorage.getItem('order')),
      });
    }
  }, []);

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
