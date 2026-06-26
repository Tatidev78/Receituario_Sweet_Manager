import { Request, Response } from 'express'

import {
  listarCategorias,
  criarCategoria,
  buscarCategoriaPorId,
  atualizarCategoria,
  deletarCategoria
} from '../services/categoriaService'


// GET /categorias
export async function getCategorias(
  req: Request,
  res: Response
) {

  try {

    const categorias = await listarCategorias()

    res.status(200).json(categorias)

  } catch (error) {

    console.error(error)

    res.status(500).json({
      erro: 'Erro ao buscar categorias'
    })

  }

}


// POST /categorias
export async function postCategoria(
  req: Request,
  res: Response
) {

  try {

    const categoria = await criarCategoria(req.body)

    res.status(201).json(categoria)

  } catch (error) {

    console.error(error)

    res.status(500).json({
      erro: 'Erro ao criar categoria'
    })

  }

}


// GET /categorias/:id
export async function getCategoriaPorId(
  req: Request,
  res: Response
) {

  try {

    const id = Number(req.params.id)

    const categoria = await buscarCategoriaPorId(id)


    if (!categoria) {

      return res.status(404).json({
        erro: 'Categoria não encontrada'
      })

    }


    res.status(200).json(categoria)


  } catch (error) {

    console.error(error)

    res.status(500).json({
      erro: 'Erro ao buscar categoria'
    })

  }

}


// PUT /categorias/:id
export async function putCategoria(
  req: Request,
  res: Response
) {

  try {

    const id = Number(req.params.id)

    const categoria = await atualizarCategoria(
      id,
      req.body
    )


    res.status(200).json(categoria)


  } catch (error) {

    console.error(error)

    res.status(500).json({
      erro: 'Erro ao atualizar categoria'
    })

  }

}


// DELETE /categorias/:id
export async function deleteCategoria(
  req: Request,
  res: Response
) {

  try {

    const id = Number(req.params.id)

    await deletarCategoria(id)


    res.status(200).json({
      mensagem: 'Categoria removida com sucesso'
    })


  } catch (error) {

    console.error(error)

    res.status(500).json({
      erro: 'Erro ao deletar categoria'
    })

  }

}