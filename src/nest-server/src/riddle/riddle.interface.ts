import { Document } from 'mongoose';

/**
 * This interface defines the structure of a riddle object in the database.
 * It makes sure each riddle has an id, category, difficulty, description,
 * and the correct answer. It also extends the Mongoose Document so it can
 * be used easily with MongoDB.
 */
export interface Riddle extends Document {
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  riddleDescription: string;
  correctAnswer: string;
}
