// Routes related to listing available providers

// Use express to handle HTTP requests
import * as Express from 'express'

// Import the ProviderController to parse the request and execute it
import * as ProviderController from '../controllers/provider.controller'

// Import the auth middleware
import AuthHandler from '../utils/auth.util'

// All the routes for the /internal endpoint
const router = Express.Router()

// If the user makes a GET request to /providers, send back a list of available
// providers
router.get('/', AuthHandler, ProviderController.list)

export default router
