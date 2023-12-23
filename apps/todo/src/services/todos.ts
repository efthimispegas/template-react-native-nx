import {
  GetTodoById,
  GetTodosByQuery,
  IApiConfig,
  IResponseState,
  ITodo,
  ITodoByIdUseCase,
  ITodoRepository,
  ITodosByQueryUseCase,
  TodoRepositoryImpl,
} from '@template-monorepo/core';

import { apiProvider } from '../api';

function injectTodoRepository(config: IApiConfig): ITodoRepository {
  return new TodoRepositoryImpl(apiProvider(config));
}

function TodosByQueryInjection(config: IApiConfig): ITodosByQueryUseCase {
  return new GetTodosByQuery(injectTodoRepository(config));
}

function TodoByIdInjection(config: IApiConfig): ITodoByIdUseCase {
  return new GetTodoById(injectTodoRepository(config));
}

export function getTodos(config: IApiConfig, query: string): Promise<IResponseState<ITodo[]>> {
  return TodosByQueryInjection(config).invoke(query);
}

export function getTodoById(config: IApiConfig, id: string): Promise<IResponseState<ITodo>> {
  return TodoByIdInjection(config).invoke(id);
}
