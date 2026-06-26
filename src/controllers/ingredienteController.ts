import { Request, Response } from 'express'

import {
  listarIngredientes,
  criarIngrediente,
  buscarIngredientePorId,
  atualizarIngrediente,
  deletarIngrediente
} from '../services/ingredienteService'


export async function getIngredientes(
  req: Request,
  res: Response
) {

  try {

    const ingredientes = await listarIngredientes()

    res.status(200).json(ingredientes)

  } catch (error) {

    res.status(500).json({
      erro: 'Erro ao buscar ingredientes'
    })

  }
}



export async function postIngrediente(
  req: Request,
  res: Response
) {

  try {

    const ingrediente = await criarIngrediente(req.body)

    res.status(201).json(ingrediente)

  } catch (error) {

    res.status(500).json({
      erro: 'Erro ao criar ingrediente'
    })

  }

}



export async function getIngredientePorId(
  req: Request,
  res: Response
) {

  const id = Number(req.params.id)

  const ingrediente = await buscarIngredientePorId(id)


  if (!ingrediente) {
    return res.status(404).json({
      erro: 'Ingrediente não encontrado'
    })
  }


  res.json(ingrediente)

}



export async function putIngrediente(
  req: Request,
  res: Response
) {

  try {

    const id = Number(req.params.id)

    const ingrediente = await atualizarIngrediente(
      id,
      req.body
    )

    res.json(ingrediente)


  } catch {

    res.status(500).json({
      erro: 'Erro ao atualizar ingrediente'
    })

  }

}



export async function deleteIngrediente(
  req: Request,
  res: Response
) {

  try {

    const id = Number(req.params.id)

    await deletarIngrediente(id)

    res.json({
      mensagem: 'Ingrediente removido'
    })


  } catch {

    res.status(500).json({
      erro: 'Erro ao deletar ingrediente'
    })

  }

}