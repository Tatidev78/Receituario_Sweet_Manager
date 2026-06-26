import { Router } from 'express'
import { 
  getClientes,
  postCliente,
  getClientePorId,
  putCliente,
  deleteCliente
} from '../controllers/clienteController'


const router = Router()


router.get('/', getClientes)

router.post('/', postCliente)

router.get('/:id', getClientePorId)

router.put('/:id', putCliente)

router.delete('/:id', deleteCliente)


export default router