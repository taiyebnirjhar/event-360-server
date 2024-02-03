import mongoose, { model } from 'mongoose'

const eventServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  serviceItems: [
    {
      itemName: {
        type: String,
        required: [true, 'Service Item is required'],
      },
    },
  ],
})

export const eventService = model('eventService', eventServiceSchema)
