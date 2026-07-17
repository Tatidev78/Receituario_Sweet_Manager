import { prisma } from '../database/prisma'

// GET /receitas
export async function listarReceitas() {
  return await prisma.receitas.findMany()
}

// POST /receitas
export async function criarReceita(dados: {
  titulo: string
  descricao?: string
  modo_preparo: string
  tempo_preparo?: number
  rendimento?: number
  unidade?: string
  imagem_url?: string
  categoria_id?: number
  usuario_id?: number
}) {
  return await prisma.receitas.create({
    data: {
      titulo: dados.titulo,
      descricao: dados.descricao,
      modo_preparo: dados.modo_preparo,
      tempo_preparo: dados.tempo_preparo,
      rendimento: dados.rendimento,
      unidade: dados.unidade,
      imagem_url: dados.imagem_url,
      categoria_id: dados.categoria_id,
      usuario_id: dados.usuario_id
    }
  })
}

// GET /receitas/:id
// CORRIGIDO: Agora recebe apenas o ID numérico e faz o findUnique no Prisma
export async function getReceitaPorId(id: number) {
  return await prisma.receitas.findUnique({
    where: {
      id: id
    }
  })
}

// PUT /receitas/:id
export async function atualizarReceita(
  id: number,
  dados: {
    titulo?: string
    descricao?: string
    modo_preparo?: string
    tempo_preparo?: number
    rendimento?: number
    unidade?: string
    imagem_url?: string
    categoria_id?: number
    usuario_id?: number
  }
) {
  return await prisma.receitas.update({
    where: {
      id
    },
    data: {
      titulo: dados.titulo,
      descricao: dados.descricao,
      modo_preparo: dados.modo_preparo,
      tempo_preparo: dados.tempo_preparo,
      rendimento: dados.rendimento,
      unidade: dados.unidade,
      imagem_url: dados.imagem_url,
      categoria_id: dados.categoria_id,
      usuario_id: dados.usuario_id
    }
  })
}

// DELETE /receitas/:id
export async function deletarReceita(id: number) {
  return await prisma.receitas.delete({
    where: {
      id
    }
  })
}