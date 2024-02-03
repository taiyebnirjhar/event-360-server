import express from 'express'
// import sampleRoute from './sampleRoute'
import { eventItemRoutes } from '../modules/eventItem/eventItem.routes'
import { eventRoutes } from '../modules/eventService/eventService.routes'
import { userRoutes } from '../modules/users/users.routes'

const router = express.Router()

const routes = [
  {
    path: '/users', // Update the path for the sample route
    route: userRoutes, // Use the sample route here
  },
  {
    path: '/event-services', // Update the path for the sample route
    route: eventRoutes, // Use the sample route here
  },
  {
    path: '/event-item', // Update the path for the sample route
    route: eventItemRoutes, // Use the sample route here
  },
  // Add more routes as needed
]

routes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
