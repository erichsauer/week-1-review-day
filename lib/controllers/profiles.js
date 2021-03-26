const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', (req, res, next) => {
  ProfileService.create(req.body)
    .then((profile) => res.send(profile))
    .catch(next);
});
// .get('/', (req, res, next) => {
//   ProfileService.retrieve()
//     .then((profile) => res.send(profile))
//     .catch(next);
// })
// .get('/:id', (req, res, next) => {
//   ProfileService.getById(req.params.id)
//     .then((profile) => res.send(profile))
//     .catch(next);
// })
// .put('/:id', (req, res, next) => {
//   ProfileService.updateById(req.params.id, req.body)
//     .then((profile) => res.send(profile))
//     .catch(next);
// })

// .delete('/:id', (req, res, next) => {
//   ProfileService.deleteById(req.params.id)
//     .then((profile) => res.send(profile))
//     .catch(next);
// });
