import express from 'express'

import clienteRoutes from './routes/clienteRoutes'
import ingredienteRoutes from './routes/ingredienteRoutes'
import categoriaRoutes from './routes/categoriaRoutes'
import receitaRoutes from './routes/receitaRoutes'
import usuarioRoutes from './routes/usuarioRoutes' 

const app = express()

app.use(express.json())

app.use('/ingredientes', ingredienteRoutes)
app.use('/clientes', clienteRoutes)
app.use('/categorias', categoriaRoutes)
app.use('/receitas', receitaRoutes)
app.use('/usuarios', usuarioRoutes) 

app.get('/', (req, res) => {
  res.json({
    mensagem: 'SweetManager API funcionando!'
  })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})