import { fromTodosDTOToTodoAdapter } from '../../infrastructure/fromTodoDTOToTodoAdapter';
import { IResponseState, StateEnum } from '../../interfaces/Api/IState';
import { ITodo } from '../../interfaces/Todo/ITodo';
import { ITodoRepository } from '../../interfaces/Todo/ITodoRepository';

export interface ITodosByQueryUseCase {
  invoke: (query: string) => Promise<IResponseState<ITodo[]>>;
}

export class GetTodosByQuery implements ITodosByQueryUseCase {
  private todoRepository: ITodoRepository;

  constructor(repo: ITodoRepository) {
    this.todoRepository = repo;
  }

  async invoke(query: string): Promise<IResponseState<ITodo[]>> {
    try {
      const response = await this.todoRepository.getTodosByQuery(query);
      if (response.isSuccessful) {
        return {
          responseState: StateEnum.Success,
          data: fromTodosDTOToTodoAdapter(response.body!),
        };
      }
      return { responseState: StateEnum.Error, error: response.errorBody! };
    } catch (error) {
      console.log(error);
      return { responseState: StateEnum.Error };
    }
  }
}
