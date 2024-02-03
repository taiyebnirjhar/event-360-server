import catchAsync from '../../../shared/catchAsync'
import sendApiResponse from '../../../shared/customResponse'
import { eventItems } from './eventItem.service'

const createEventItem = catchAsync(async (req, res) => {
  const { itemData } = req.body
  const result = await eventItems.createEventItem(itemData)
  sendApiResponse(res, 200, 'successfully created', result)
})

const getEventItems = catchAsync(async (req, res) => {
  const result = await eventItems.getEventItem()
  sendApiResponse(res, 200, 'get item successfully', result)
})

const getEventItem = catchAsync(async (req, res) => {
  const { id } = req.params

  const result = await eventItems.getEventItems(id)
  sendApiResponse(res, 200, 'get item successfully', result)
})

const updateEventItem = catchAsync(async (req, res) => {
  const { id } = req.params
  const { itemData } = req.body

  const result = await eventItems.updateEventItem(itemData, id)
  sendApiResponse(res, 200, ' Item updated successfully', result)
})

const deleteEventItem = catchAsync(async (req, res) => {
  const { id } = req.params

  const result = await eventItems.deleteEventItem(id)
  sendApiResponse(res, 200, 'Item deleted successfully', result)
})

export const eventItemController = {
  createEventItem,
  getEventItem,
  updateEventItem,
  deleteEventItem,
  getEventItems,
}
