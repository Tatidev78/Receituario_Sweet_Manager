import { prisma } from '../database/prisma'

// Função auxiliar para validar email
function validarEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// Função auxiliar para validar senha
function validarSenha(senha_hash: string): boolean {
  return senha_hash.length >= 8
}

// GET /usuarios
export async function listarUsuarios() {
  return await prisma.usuarios.findMany({
    include: { receitas: true }
  })
}

// POST /usuarios
export async function criarUsuario(dados: {
  nome: string
  email: string
  senha_hash: string
  receitas?: {
    titulo: string
    descricao?: string
    modo_preparo: string
  }[]
}) {
  if (!validarEmail(dados.email)) {
    throw new Error('Email inválido')
  }

  if (!validarSenha(dados.senha_hash)) {
    throw new Error('A senha deve ter pelo menos 8 caracteres')
  }

  const usuarioExistente = await prisma.usuarios.findUnique({
    where: { email: dados.email }
  })

  if (usuarioExistente) {
    throw new Error('Email já cadastrado')
  }

  return await prisma.usuarios.create({
    data: {
      nome: dados.nome,
      email: dados.email,
      senha_hash: dados.senha_hash,
      receitas: dados.receitas?.length
        ? {
            create: dados.receitas.map(r => ({
              titulo: r.titulo,
              descricao: r.descricao,
              modo_preparo: r.modo_preparo
            }))
          }
        : undefined
    },
    include: {
      receitas: true
    }
  })
}

// GET /usuarios/:id
export async function buscarUsuarioPorId(id: number) {
  return await prisma.usuarios.findUnique({
    where: { id },
    include: { receitas: true }
  })
}

// PUT /usuarios/:id
export async function atualizarUsuario(
  id: number,
  dados: {
    nome?: string
    email?: string
    senha_hash?: string
    receitas?: {
      titulo: string
      descricao?: string
      modo_preparo: string
    }[]
  }
) {
  if (dados.email && !validarEmail(dados.email)) {
    throw new Error('Email inválido')
  }

  if (dados.senha_hash && !validarSenha(dados.senha_hash)) {
    throw new Error('A senha deve ter pelo menos 8 caracteres')
  }

  try {
    return await prisma.usuarios.update({
      where: { id },
      data: {
        nome: dados.nome,
        email: dados.email,
        senha_hash: dados.senha_hash,
        receitas: dados.receitas?.length
          ? {
              create: dados.receitas.map(r => ({
                titulo: r.titulo,
                descricao: r.descricao,
                modo_preparo: r.modo_preparo
              }))
            }
          : undefined
      },
      include: {
        receitas: true
      }
    })
  } catch {
    throw new Error('Usuário não encontrado')
  }
}

// DELETE /usuarios/:id
export async function deletarUsuario(id: number) {
  try {
    return await prisma.usuarios.delete({
      where: { id }
    })
  } catch {
    throw new Error('Usuário não encontrado')
  }
}