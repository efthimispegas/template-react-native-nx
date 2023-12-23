import { ITodoInfo } from './ITodoInfo';

export interface ITodoItemDTO {
  id: string;
  kind: string;
  etag: string;
  volumeInfo: ITodoInfo;
}
