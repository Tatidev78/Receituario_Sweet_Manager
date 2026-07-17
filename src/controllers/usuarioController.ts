import { Request, Response } from 'express';

import {
    listarUsuarios,
    criarUsuario,
    buscarUsuarioPorId,
    atualizarUsuario,
    deletarUsuario
} from '../services/usuarioService'

// GET /usuarios
export async function getUsuarios(
    req: Request,
    res: Response
) {
    try {
        const usuarios = await listarUsuarios()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar usuários' })
    }
}

// GET /usuarios/:id
export async function getUsuarioPorId(
    req: Request,
    res: Response
) {
    try {

        console.log("Entrou no controller");
        console.log("ID:", req.params.id);

        const id = Number(req.params.id);

        const usuario = await buscarUsuarioPorId(id);

        console.log(usuario);

        if (!usuario) {
            return res.status(404).json({
                erro: "Usuário não encontrado"
            });
        }

        res.json(usuario);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            erro: "Erro ao buscar usuário"
        });
    }
}

// POST /usuarios
export async function postUsuario(
    req: Request,
    res: Response
) {
    try {
        const usuario = await criarUsuario(req.body)
        res.status(201).json(usuario)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' })
    }  
}

// PUT /usuarios/:id
export async function putUsuario(
    req: Request,
    res: Response
) {
    try {
        const id = Number(req.params.id)
        const usuarioAtualizado = await atualizarUsuario(id, req.body)
        res.json(usuarioAtualizado)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário' })
    }
}

// DELETE /usuarios/:id
export async function deleteUsuario(
    req: Request,
    res: Response
) { 
    try {
        const id = Number(req.params.id)
        await deletarUsuario(id)
        res.status(204).json({
      mensagem: 'Usuario removido com sucesso'
    })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Erro ao deletar usuário' })
    }
}