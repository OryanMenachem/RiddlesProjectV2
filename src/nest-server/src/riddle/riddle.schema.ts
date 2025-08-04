import { Schema } from 'mongoose';

/**
 * This schema defines the structure of a riddle in the database,
 * including its id, category, difficulty, description, and correct answer.
 */
export const RiddleSchema = new Schema({
  category: { type: String, required: true },
  difficulty: { 
    type: String, 
    enum: ['easy', 'medium', 'hard'],
    required: true 
  },
  riddleDescription: { type: String, required: true },
  correctAnswer: { type: String, required: true },
});