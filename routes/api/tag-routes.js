const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// Get all tags
router.get('/', async (req, res) => {
  const tags = await Tag.findAll();
  res.json(tags);
  // be sure to include its associated Product data
  Tag.findAll({
    include: [Product],
  })
    .then((tags) => res.json(tags))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const tag = await Tag.findByPk(req.params.id);
  res.json(tag);
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
    .then((tag) => res.json(tag))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => res.json(tag))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.json(tag))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.json(tag))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
