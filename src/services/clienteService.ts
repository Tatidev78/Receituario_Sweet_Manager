import { prisma } from '../database/prisma'


// GET /clientes
export async function listarClientes() {

  return await prisma.clientes.findMany()

}


// POST /clientes
export async function criarCliente(dados: {
  nome: string
  telefone?: string
  email?: string
  endereco?: string
}) {

  return await prisma.clientes.create({
    data: {
      nome: dados.nome,
      telefone: dados.telefone,
      email: dados.email,
      endereco: dados.endereco
    }
  })

}


// GET /clientes/:id
export async function buscarClientePorId(id: number) {

  return await prisma.clientes.findUnique({
    where: {
      id
    }
  })

}


// PUT /clientes/:id
export async function atualizarCliente(
  id: number,
  dados: {
    nome?: string
    telefone?: string
    email?: string
    endereco?: string
  }
) {

  return await prisma.clientes.update({

    where: {
      id
    },

    data: {
      nome: dados.nome,
      telefone: dados.telefone,
      email: dados.email,
      endereco: dados.endereco
    }

  })

}


// DELETE /clientes/:id
export async function deletarCliente(id: number) {

  return await prisma.clientes.delete({
    where: {
      id
    }
  })

}