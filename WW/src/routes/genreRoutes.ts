import { Router } from 'express';
import { createRecord, getRecord, getRecords, updateRecord } from '../controllers/genreContoller';

const router = Router();
router.get('/', getRecords);
router.get('/:id', getRecord)
router.post('/', createRecord)
router.put('/:id', updateRecord)

export const genreRoutes = router;