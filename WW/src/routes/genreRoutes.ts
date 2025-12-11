import { Router } from 'express';
import { createRecord, deleteRecord, getRecord, getRecords, updateRecord } from '../controllers/genreController';
import { authenticateToken } from '../middleware/authenticateToken';
import { authorizeRole } from '../middleware/authorizeRole';

const router = Router();
router.get('/', getRecords);
router.get('/:slug', getRecord)
router.post('/', authenticateToken, authorizeRole('ADMIN'), createRecord)
router.put('/:id', authenticateToken, authorizeRole('ADMIN'), updateRecord)
router.delete('/:id', authenticateToken, authorizeRole('ADMIN'), deleteRecord)

export const genreRoutes = router;