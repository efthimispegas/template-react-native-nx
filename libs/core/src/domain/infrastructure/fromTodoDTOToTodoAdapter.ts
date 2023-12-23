import { availableImageLink } from '../../helpers/ImageLinkHelper';
import { ITodo } from '../interfaces/Todo/ITodo';
import { ITodoItemDTO } from '../interfaces/Todo/ITodoItemDTO';
import { ITodosDTO } from '../interfaces/Todo/ITodosDTO';

export const fromTodosDTOToTodoAdapter = (api: ITodosDTO): ITodo[] => {
  return api.items.map(item => fromTodoDTOToTodoItemAdapter(item));
};

export const fromTodoDTOToTodoItemAdapter = ({ id, volumeInfo }: ITodoItemDTO): ITodo => ({
  id,
  description: volumeInfo.description,
  title: volumeInfo.title,
  subtitle: volumeInfo.subtitle,
  authors: volumeInfo.authors,
  publisher: volumeInfo.publisher,
  imageLink: availableImageLink(volumeInfo),
  pageCount: volumeInfo.pageCount,
});
