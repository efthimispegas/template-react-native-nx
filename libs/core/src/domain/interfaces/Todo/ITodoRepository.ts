import { IResponse } from '../Api/IResponse';

import { ITodoItemDTO } from './ITodoItemDTO';
import { ITodosDTO } from './ITodosDTO';

export interface ITodoRepository {
  getTodosByQuery(query: string): Promise<IResponse<ITodosDTO>>;
  getTodoById(id: string): Promise<IResponse<ITodoItemDTO>>;
}
