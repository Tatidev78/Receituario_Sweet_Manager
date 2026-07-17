import { Router } from 'express'

import {
  getCategorias,
  postCategoria,
  getCategoriaPorId,
  putCategoria,
  deleteCategoria
} from '../controllers/categoriaController'


const router = Router()


// listar categorias
router.get('/', getCategorias)


// criar categoria
router.post('/', postCategoria)


// buscar categoria por id
router.get('/:id', getCategoriaPorId)


// atualizar categoria
router.put('/:id', putCategoria)


// deletar categoria
router.delete('/:id', (req, res) => {

  console.log("ENTROU NO DELETE", req.params.id)

  deleteCategoria(req, res)

})


export default router