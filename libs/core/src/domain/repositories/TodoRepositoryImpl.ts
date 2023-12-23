import { endpoints } from '../../constants/api';
import { ApiService } from '../entities/ApiService';
import { IResponse } from '../interfaces/Api/IResponse';
import { ITodoItemDTO } from '../interfaces/Todo/ITodoItemDTO';
import { ITodoRepository } from '../interfaces/Todo/ITodoRepository';
import { ITodosDTO } from '../interfaces/Todo/ITodosDTO';

export class TodoRepositoryImpl implements ITodoRepository {
  apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  getTodosByQuery(query: string): Promise<IResponse<ITodosDTO>> {
    return this.apiService.get<ITodosDTO>(`${endpoints.VOLUME}/?q=${query}`);
  }

  getTodoById(id: string): Promise<IResponse<ITodoItemDTO>> {
    return this.apiService.get<ITodoItemDTO>(`${endpoints.VOLUME}/${id}`);
  }
}
