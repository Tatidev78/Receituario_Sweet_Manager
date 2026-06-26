import { Router } from 'express'

import {
  getIngredientes,
  postIngrediente,
  getIngredientePorId,
  putIngrediente,
  deleteIngrediente
} from '../controllers/ingredienteController'


const router = Router()


router.get('/', getIngredientes)

router.post('/', postIngrediente)

router.get('/:id', getIngredientePorId)

router.put('/:id', putIngrediente)

router.delete('/:id', deleteIngrediente)


export default router