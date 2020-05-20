import React, { createContext, useState } from 'react';
import { useEffect, useReducer } from 'react';

export const SiteContext = createContext(null);

const SiteContextContainer = ({ children }) => {
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
      case 'clean':
        localStorage.setItem('order', []);
        return [];
      default:
        break;
    }
  };
  const initialState = [];
  const [order, setOrder] = useReducer(stateReducer, initialState);
  const [breakpoint, setBreakpoint] = useState({});

  const addItem = (item) => {
    setOrder({ action: 'add', item });
  };

  const deleteItem = (item) => {
    setOrder({ action: 'delete', item });
  };

  const cleanOrder = () => {
    setOrder({ action: 'clean' });
  };

  useEffect(() => {
    if (localStorage.getItem('order')) {
      setOrder({
        action: 'loadData',
        items: JSON.parse(localStorage.getItem('order')),
      });
    }

    const mediaSmall = window.matchMedia('(max-width: 767px)');
    const mediaMedium = window.matchMedia(
      '(min-width: 768px) and (max-width: 1023px)'
    );
    const mediaLarge = window.matchMedia('(min-width: 1024px)');

    const checkMedia = () => {
      setBreakpoint({
        small: mediaSmall.matches,
        medium: mediaMedium.matches,
        large: mediaLarge.matches,
      });
    };

    checkMedia();

    mediaSmall.addListener(checkMedia);
    mediaMedium.addListener(checkMedia);
    mediaLarge.addListener(checkMedia);

    return () => {
      mediaSmall.removeListener(checkMedia);
      mediaMedium.removeListener(checkMedia);
      mediaLarge.removeListener(checkMedia);
    };
  }, []);

  const store = {
    order,
    addItem,
    deleteItem,
    cleanOrder,
    breakpoint,
  };

  return <SiteContext.Provider value={store}>{children}</SiteContext.Provider>;
};

export default SiteContextContainer;
