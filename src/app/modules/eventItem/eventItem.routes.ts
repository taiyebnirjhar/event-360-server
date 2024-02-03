import { Router } from 'express'
import { eventItemController } from './eventItem.controller'

const router = Router()

router.post('/create', eventItemController.createEventItem)
router.get('/get-all', eventItemController.getEventItems)
router.get('/get/:id', eventItemController.getEventItem)
router.patch('/update/:id', eventItemController.updateEventItem)
router.delete('/delete/:id', eventItemController.deleteEventItem)

export const eventItemRoutes = router
