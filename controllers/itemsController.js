const axios = require('axios');
const Cache = require('../models/cache');
const cache = new Cache();
const GOOGLE_BOOKS_API_KEY = 'AIzaSyA5liJAHEGe7OUoOkwHDjzYYrDA5ODupnk';

const fetchBooksFromAPI = async (query) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${GOOGLE_BOOKS_API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};

const getBooks = async (query) => {
  if (cache.has(query)) {
    return cache.get(query);
  }

  const books = await fetchBooksFromAPI(query);
  cache.set(query, books);
  return books;
};

exports.getItems = async (req, res) => {
    const query = req.query.q;

    try {
      if (cache.has('items')) {
        return res.json(cache.get('items'));
      }
  
      const books = await getBooks(query);
      items = books.items;
      cache.set('items', books); 
      res.json(books);
    } catch (error) {
      res.status(500).json(
        { 
            message: 'Error fetching data from Google Books API' 
        });
    }
};

exports.getItemById = (req, res) => {
    const id = req.params.id;

    if (cache.has('items')) {
      const items = cache.get('items').items;
      const item = items.find(item => item.id === id);
      if (item) {
        return res.json({ item });
      }
    }
  
    res.status(404).json({ message: 'Item not found' });
};

exports.createItem = (req, res) => {
    const newItem = req.body;
    const cachedItems = cache.has('items') ? cache.get('items') : { items: [] }; 
    const existingItemIndex = cachedItems.items.findIndex(item => item.id === newItem.id);
  
    if (existingItemIndex !== -1) {
      return res.status(400).json(
        { 
          message: 'Item with this ID already exists' 
        });
    }
  
    cachedItems.items.push(newItem);
    cache.set('items', cachedItems);
    res.status(201).json({ item: newItem });
};

exports.updateItem = (req, res) => {
    const id = req.params.id;
    const newItem = req.body;
  
    if (!newItem || newItem.id !== id) {
      return res.status(400).json(
        { 
          message: 'Invalid item data or ID mismatch' 
        });
    }
  
    if (cache.has('items')) {
      const cachedData = cache.get('items');
      const items = cachedData.items;
  
      const existingItemIndex = items.findIndex(item => item.id === id);
  
      if (existingItemIndex !== -1) {
        items[existingItemIndex] = newItem;
      } else {
        items.push(newItem);
      }
  
      cache.set('items', { items });
      return res.json({ item: newItem });
    } else {
      cache.set('items', { items: [newItem] });
      return res.json({ item: newItem });
    }
};

exports.deleteItem = (req, res) => {
    const id = req.params.id;

    if (cache.has('items')) {
      const cachedData = cache.get('items');
      const items = cachedData.items;
  
      const itemIndex = items.findIndex(item => item.id === id);
  
      if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
  
        cache.set('items', { items });
        return res.status(204).end(); 
      } else {
        return res.status(404).json(
            { 
                message: 'Item not found' 
            });
      }
    } else {
      return res.status(404).json(
        { 
            message: 'Item not found' 
        });
    }
};
