import { fromTodoDTOToTodoItemAdapter } from '../../infrastructure/fromTodoDTOToTodoAdapter';
import { IResponseState, StateEnum } from '../../interfaces/Api/IState';
import { ITodo } from '../../interfaces/Todo/ITodo';
import { ITodoRepository } from '../../interfaces/Todo/ITodoRepository';

export interface ITodoByIdUseCase {
  invoke: (id: string) => Promise<IResponseState<ITodo>>;
}

export class GetTodoById implements ITodoByIdUseCase {
  private todoRepository: ITodoRepository;

  constructor(repo: ITodoRepository) {
    this.todoRepository = repo;
  }

  async invoke(id: string): Promise<IResponseState<ITodo>> {
    try {
      const response = await this.todoRepository.getTodoById(id);
      if (response.isSuccessful) {
        return {
          responseState: StateEnum.Success,
          data: fromTodoDTOToTodoItemAdapter(response.body!),
        };
      }
      return { responseState: StateEnum.Error, error: response.errorBody! };
    } catch (error) {
      return { responseState: StateEnum.Error };
    }
  }
}
