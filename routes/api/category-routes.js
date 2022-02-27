const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll().then((catData) => {
    res.json(catData)
  })
    .catch((err) => res.json(err))
});

router.get('/:id', (req, res) => {
  Category.fineOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then((catData) => {
    res.json(catData)
  })
    .catch((err) => res.json(err))
});

router.post('/', (req, res) => {
  Category.create(req.body).then((newCat) => {
    res.json(newCat);
  })
    .catch((err) => res.json(err))
});

router.put('/:id', (req, res) => {
  Category.update(
    {
      id: req.body.id,
      category_name: req.body.category_name
    }
  ).then((updatedCat) => {
    res.json(updatedCat)
  })
    .catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((deletedCat) => {
      res.json(deletedCat)
    })
    .catch((err) => res.json(err))
});

module.exports = router;
