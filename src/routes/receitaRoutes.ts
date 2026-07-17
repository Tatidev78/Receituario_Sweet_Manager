import { Router } from 'express'

import {
  getReceitas,
  postReceita,
  getReceitaById, 
  putReceita,
  deleteReceita
} from '../controllers/receitaController' 

const router = Router()

router.get('/', getReceitas)

router.post('/', postReceita)

router.get('/:id', getReceitaById)

router.put('/:id', putReceita)

router.delete('/:id', deleteReceita)

export default router