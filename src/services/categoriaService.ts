import { prisma } from '../database/prisma'


// Listar categorias
export async function listarCategorias() {

  return await prisma.categorias.findMany()

}


// Criar categoria
export async function criarCategoria(
  dados: {
    nome: string
  }
) {

  return await prisma.categorias.create({
    data: {
      nome: dados.nome
    }
  })

}


// Buscar categoria por ID
export async function buscarCategoriaPorId(
  id: number
) {

  return await prisma.categorias.findUnique({
    where: {
      id
    }
  })

}


// Atualizar categoria
export async function atualizarCategoria(
  id: number,
  dados: {
    nome?: string
  }
) {

  return await prisma.categorias.update({
    where: {
      id
    },

    data: {
      nome: dados.nome
    }
  })

}


// Deletar categoria
export async function deletarCategoria(
  id: number
) {

  return await prisma.categorias.delete({
    where: {
      id
    }
  })

}