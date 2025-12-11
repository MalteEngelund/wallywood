import { Router } from "express";
import { createRecord, deleteRecord, getRecord, getRecords, updateRecord } from "../controllers/userRatingcontroller";
import { authorizeRole } from "../middleware/authorizeRole";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router();
router.get('/', getRecords);
router.get('/:id', getRecord)
router.post('/', authenticateToken, authorizeRole('ADMIN', 'USER'), createRecord)
router.put('/:id', authenticateToken, authorizeRole('ADMIN', 'USER'), updateRecord)
router.delete('/:id', authenticateToken, authorizeRole('ADMIN'), deleteRecord)

export const userRatingRoutes = router;