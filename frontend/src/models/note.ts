export interface Note {
  // the `_` in `_id` is a mongoose convention. This will be different for Postgres
  _id: string;
  title: string;
  text?: string;
  createdAt: string;
  updatedAt: string;
}
