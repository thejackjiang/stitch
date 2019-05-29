const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

const express = require('express')
const router = express.Router();

const { Milestone } = require('../models/index')

router.get('/findAll', async (req, res, next) => {
  const limit = Number(req.query.limit) || 20
  try {
    const Milestones = await Milestone.find({}).limit(limit)
    res.json(Milestones)
  } catch (err) {
    next(err)
  }
})

router.get('/find/:id', async (req, res, next) => {
  const _id = req.params.id
  try {
    const Milestones = await Milestone.findOne({ _id })
    res.json(Milestones)
  } catch (err) {
    next(err)
  }
})

router.post('/create', async (req, res, next) => {
  const newDoc = req.body
  const newMilestone = new Milestone({
    _id: new mongoose.Types.ObjectId(),
    ...newDoc
  });
  try {
    await newMilestone.save()
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

router.put('/update/:id', async (req, res, next) => {
  const _id = req.params.id
  const updatedDoc = req.body
  const options = { new: true }
  try {
    const updated = await Milestone.findOneAndUpdate({ _id }, updatedDoc, options)
    res.status(202).json(updated)
  } catch (err) {
    next(err)
  }
})

router.delete('/delete/:id', async (req, res, next) => {
  const _id = req.params.id
  try {
    await Milestone.deleteOne({ _id })
    res.sendStatus(202)
  } catch (err) {
    next(err)
  }
})



module.exports = router
