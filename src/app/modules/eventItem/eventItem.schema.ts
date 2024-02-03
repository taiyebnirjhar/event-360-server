import mongoose, { model } from 'mongoose'

const eventItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: [true, 'Service Item is required'],
  },
})

export const eventItem = model('eventItem', eventItemSchema)
