import { Router } from 'express'
import { 
  getUsuarios, 
  postUsuario, 
  putUsuario, 
  deleteUsuario, 
  getUsuarioPorId
} from '../controllers/usuarioController'

const router = Router()

// GET /usuarios - Listar todos os usuários
router.get('/', getUsuarios)

// POST /usuarios - Criar um novo usuário
router.post('/', postUsuario)

router.get('/:id', getUsuarioPorId)

// PUT /usuarios/:id - Atualizar dados de um usuário
router.put('/:id', putUsuario)

// DELETE /usuarios/:id - Deletar um usuário
router.delete('/:id', deleteUsuario)

export default router