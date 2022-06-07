import { Schema, model } from 'mongoose';
// data interface
export interface Child {
  kind: string;
  count: number;
  notes?: string[];
  expand?: boolean;
}
export interface Data {
  title: string;
  children?: Child[];
  expand?: boolean;
}

// data schema

const dataSchema = new Schema<Data>({
  title: String,
  children: [
    {
      kind: String,
      count: Number,
      notes: [String],
      expand: Boolean
    }
  ],
  expand: Boolean
});
export const DataModel = model<Data>('data', dataSchema);
