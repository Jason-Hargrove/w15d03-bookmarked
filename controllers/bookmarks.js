const Bookmark = require('../models/bookmark')
const router = require('express').Router();

// Create

// Read
  /* Index */
    router.get('/', async (req, res) => {
      try {
        const foundBookmarks = await Bookmark.find({})
        res.status(200).json(foundBookmarks)
      } catch (error) {
          console.error(error)
          res.status(404).json({message: error.message})
      }
    })
  /* Show */

// Update

// Delete
