const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

const express = require('express')
const router = express.Router();

const { Student } = require('../models/index')

router.get('/findAll', async (req, res, next) => {
  const limit = Number(req.query.limit) || 20
  try {
    const Students = await Student.find({}).limit(limit)
    res.json(Students)
  } catch (err) {
    next(err)
  }
})

router.get('/find/:id', async (req, res, next) => {
  const _id = req.params.id
  try {
    const Students = await Student.findOne({ _id })
    res.json(Students)
  } catch (err) {
    next(err)
  }
})


router.post('/create', async (req, res, next) => {
  const newDoc = req.body
  const newStudent = new Student({
    _id: new mongoose.Types.ObjectId(),
    ...newDoc
  });
  try {
    await newStudent.save()
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
    const updated = await Student.findOneAndUpdate({ _id }, updatedDoc, options)
    res.status(202).json(updated)
  } catch (err) {
    next(err)
  }
})

router.delete('/delete/:id', async (req, res, next) => {
  const _id = req.params.id
  try {
    await Student.deleteOne({ _id })
    res.sendStatus(202)
  } catch (err) {
    next(err)
  }
})



module.exports = router
