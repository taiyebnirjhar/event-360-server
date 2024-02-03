import catchAsync from '../../../shared/catchAsync'
import sendApiResponse from '../../../shared/customResponse'

import { eventServices } from './eventService.service'

const createEventService = catchAsync(async (req, res) => {
  const { serviceData } = req.body
  const result = await eventServices.createService(serviceData)
  sendApiResponse(res, 200, 'successfully created', result)
})

const getEventServices = catchAsync(async (req, res) => {
  const result = await eventServices.getServices()
  sendApiResponse(res, 200, 'get services successfully', result)
})

const getEventService = catchAsync(async (req, res) => {
  const { id } = req.params

  const result = await eventServices.getService(id)
  sendApiResponse(res, 200, 'get service successfully', result)
})

const updateEventService = catchAsync(async (req, res) => {
  const { id } = req.params
  const { serviceData } = req.body

  const result = await eventServices.updateService(serviceData, id)
  sendApiResponse(res, 200, 'get service successfully', result)
})

const deleteEventService = catchAsync(async (req, res) => {
  const { id } = req.params

  const result = await eventServices.deleteService(id)
  sendApiResponse(res, 200, 'service deleted successfully', result)
})

export const eventServiceController = {
  createEventService,
  getEventServices,
  getEventService,
  deleteEventService,
  updateEventService,
}
