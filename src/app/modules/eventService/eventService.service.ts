import { eventService } from './eventService.schema'

const createService = async (data: any) => {
  const result = await eventService.create(data)
  return result
}

const getServices = async () => {
  const result = await eventService.find()
  return result
}

const getService = async (id: string) => {
  const result = await eventService.findOne({ _id: id })
  return result
}

const updateService = async (data: any, id: string) => {
  const result = await eventService.updateOne({ _id: id }, data)
  return result
}

const deleteService = async (id: string) => {
  const result = await eventService.deleteOne({ _id: id })
  return result
}

export const eventServices = {
  createService,
  getServices,
  getService,
  deleteService,
  updateService,
}
