import { Router } from 'express'
import { eventServiceController } from './eventService.controller'

const router = Router()

router.post('/create', eventServiceController.createEventService)
router.get('/get-all', eventServiceController.getEventServices)
router.get('/get/:id', eventServiceController.getEventService)
router.patch('/update/:id', eventServiceController.updateEventService)
router.delete('/delete/:id', eventServiceController.deleteEventService)

export const eventRoutes = router
