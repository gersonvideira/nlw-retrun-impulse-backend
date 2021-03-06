import { PrismaFeedbacksRepository } from '../repositories/prisma/prisma-feedbaks-repository'
import { Router } from 'express'
import { NodemailerMailAdapter } from '../adapters/nodemailer/nodemailer-mail-adapter'
import { SubmitFeedbackUseCase } from '../use-cases/submit-feedback-use-case'

class FeedbackRoutes {
  static define(feedbackRoutes: Router): Router {

    feedbackRoutes.post('/feedback', async (req, res) => {
      const { type, comment, screenshot } = req.body
      const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
      const nodemailerMailAdapter = new NodemailerMailAdapter

      const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
      )

      const feedback = await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
      })
      // return res.status(201).send()
      return res.status(201).json({ data: feedback })
    })
    return feedbackRoutes
  }
}

export default FeedbackRoutes.define(Router())