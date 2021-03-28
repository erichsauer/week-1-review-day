const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router()
  //@ts-ignore
  .post('/', (req, res, next) => {
    ProfileService.create(req.body)
      .then((profile: UserProfile) => res.send(profile))
      .catch(next);
  })
  //@ts-ignore
  .get('/', (req, res, next) => {
    ProfileService.retrieve()
      .then((profile: UserProfile) => res.send(profile))
      .catch(next);
  })
  //@ts-ignore
  .get('/:id', (req, res, next) => {
    ProfileService.retrieve(req.params.id)
      .then((profile: UserProfile) => res.send(profile))
      .catch(next);
  })
  //@ts-ignore
  .put('/:id', (req, res, next) => {
    ProfileService.updateById(req.params.id, req.body)
      .then((profile: UserProfile) => res.send(profile))
      .catch(next);
  })
  //@ts-ignore
  .delete('/:id', (req, res, next) => {
    ProfileService.deleteById(req.params.id)
      .then((profile: UserProfile) => res.send(profile))
      .catch(next);
  });
