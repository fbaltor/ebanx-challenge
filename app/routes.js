import express from "express"

import { balanceController } from "./controllers/balanceController.js"
import { eventController } from "./controllers/eventController.js"

const router = express.Router()

// Balance route
router.get('/balance', balanceController)

// Events route
router.post('/event', eventController)

// fallback
router.use(() => {})

export default router