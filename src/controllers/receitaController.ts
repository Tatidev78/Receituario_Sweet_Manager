import { Request, Response } from 'express'
import {
  listarReceitas,
  criarReceita,
  atualizarReceita,
  deletarReceita,
  getReceitaPorId, // Este é o Service que busca no banco de dados
} from '../services/receitaService'

// GET /receitas
export async function getReceitas(req: Request, res: Response) {
  try {
    const receitas = await listarReceitas()
    res.status(200).json(receitas)
  } catch (error) {
    console.error(error)
    res.status(500).json({ erro: 'Erro ao buscar receitas' })
  }
}

// POST /receitas
export async function postReceita(req: Request, res: Response) {
  try {
    const receita = await criarReceita(req.body)
    res.status(201).json(receita)
  } catch (error) {
    console.error(error)
    res.status(500).json({ erro: 'Erro ao criar receita' })
  }
}

// GET /receitas/:id
export async function getReceitaById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id)
    
    // CORRIGIDO: Chama a função do Service (getReceitaPorId), evitando o loop infinito
    const receita = await getReceitaPorId(id) 

    if (!receita) {
      return res.status(404).json({ erro: 'Receita não encontrada' })
    }

    res.status(200).json(receita)
  } catch (error) {
    console.error(error) // CORRIGIDO: Mostra o erro no terminal se o banco falhar
    res.status(500).json({ erro: 'Erro ao buscar receita' }) // CORRIGIDO: Protegido com try/catch
  }
}

// PUT /receitas/:id
export async function putReceita(req: Request, res: Response) {
  try {
    const id = Number(req.params.id)
    const receita = await atualizarReceita(id, req.body)
    res.status(200).json(receita)
  } catch (error) {
    console.error(error) // CORRIGIDO: Adicionado log de erro no terminal
    res.status(500).json({ erro: 'Erro ao atualizar receita' })
  }
}

// DELETE /receitas/:id
export async function deleteReceita(req: Request, res: Response) {
  try {
    const id = Number(req.params.id)
    await deletarReceita(id)
    res.status(200).json({ mensagem: 'Receita removida' })
  } catch (error) {
    console.error(error) // CORRIGIDO: Adicionado log de erro no terminal
    res.status(500).json({ erro: 'Erro ao deletar receita' })
  }
}