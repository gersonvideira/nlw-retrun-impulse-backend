import { client } from "../../database/client";
import { FeedbackCreateData, FeedbacksRepository } from "../../repositories/feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData){
    await client.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}