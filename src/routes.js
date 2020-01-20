import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Express rodando na porta 3000' })
})

export default router
