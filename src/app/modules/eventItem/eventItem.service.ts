import { eventItem } from './eventItem.schema'

const createEventItem = async (data: any) => {
  const result = await eventItem.create(data)
  return result
}

const getEventItem = async () => {
  const result = await eventItem.find()
  return result
}

const getEventItems = async (id: string) => {
  const result = await eventItem.findOne({ _id: id })
  return result
}

const updateEventItem = async (data: any, id: string) => {
  const result = await eventItem.updateOne({ _id: id }, data)
  return result
}

const deleteEventItem = async (id: string) => {
  const result = await eventItem.deleteOne({ _id: id })
  return result
}

export const eventItems = {
  createEventItem,
  deleteEventItem,
  updateEventItem,
  getEventItem,
  getEventItems,
}
