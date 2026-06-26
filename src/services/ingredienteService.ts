import { prisma } from '../database/prisma'


// GET /ingredientes
export async function listarIngredientes() {

  return await prisma.ingredientes.findMany()

}


// POST /ingredientes
export async function criarIngrediente(dados: {
  nome: string
  unidade: string
  quantidade_estoque?: number
}) {

  return await prisma.ingredientes.create({
    data: {
      nome: dados.nome,
      unidade: dados.unidade,
      quantidade_estoque: dados.quantidade_estoque
    }
  })

}


// GET /ingredientes/:id
export async function buscarIngredientePorId(id: number) {

  return await prisma.ingredientes.findUnique({
    where: {
      id
    }
  })

}


// PUT /ingredientes/:id
export async function atualizarIngrediente(
  id: number,
  dados: {
    nome?: string
    unidade?: string
    quantidade_estoque?: number
  }
) {

  return await prisma.ingredientes.update({
    where: {
      id
    },

    data: {
      nome: dados.nome,
      unidade: dados.unidade,
      quantidade_estoque: dados.quantidade_estoque
    }
  })

}


// DELETE /ingredientes/:id
export async function deletarIngrediente(id: number) {

  return await prisma.ingredientes.delete({
    where: {
      id
    }
  })

}