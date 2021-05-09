// Routes related to accessing generated files

// Use express to handle HTTP requests
import * as Express from 'express'

// Import the InternalController to parse the request and execute it
import * as InternalController from '../controllers/internal.controller'

// Import the auth middleware
import AuthHandler from '../utils/auth.util'

// All the routes for the /internal endpoint
const router = Express.Router()

// If the user makes a GET request to /internal/cache/:filePath, send back the
// requested file/folder from cache
router.get('/cache/:filePath', AuthHandler, InternalController.cache)

export default router
