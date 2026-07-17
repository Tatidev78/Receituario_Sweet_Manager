import { Request, Response } from 'express'

import {
  listarClientes,
  criarCliente,
  buscarClientePorId,
  atualizarCliente,
  deletarCliente
} from '../services/clienteService'


// GET /clientes
export async function getClientes(
  req: Request,
  res: Response
) {
  try {
    const clientes = await listarClientes()
    res.status(200).json(clientes)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      erro: 'Erro ao buscar clientes'
    })
  }
}


// POST /clientes
export async function postCliente(
  req: Request,
  res: Response
) {
  try {

    const cliente = await criarCliente(req.body)

    res.status(201).json(cliente)

  } catch (error) {

    console.error(error)

    res.status(500).json({
      erro: 'Erro ao criar cliente'
    })
  }
}


// GET /clientes/:id
export async function getClientePorId(
  req: Request,
  res: Response
) {

  try {

    const id = Number(req.params.id)

    const cliente = await buscarClientePorId(id)


    if (!cliente) {
      return res.status(404).json({
        erro: 'Cliente não encontrado'
      })
    }


    res.status(200).json(cliente)


  } catch (error) {

    console.error(error)

    res.status(500).json({
      erro: 'Erro ao buscar cliente'
    })
  }
}


// PUT /clientes/:id
export async function putCliente(
  req: Request,
  res: Response
) {

  try {

    const id = Number(req.params.id)
    const cliente = await atualizarCliente(
      id,
      req.body
    )
    res.status(200).json(cliente)


  } catch (error) {

    console.error(error)

    res.status(500).json({
      erro: 'Erro ao atualizar cliente'
    })
  }
}


// DELETE /clientes/:id
export async function deleteCliente(
  req: Request,
  res: Response
) {

  try {

    const id = Number(req.params.id)
    await deletarCliente(id)
    res.status(200).json({
      mensagem: 'Cliente removido com sucesso'
    })


  } catch (error) {

    console.error(error)
    res.status(500).json({
      erro: 'Erro ao deletar cliente'
    })
  }
}