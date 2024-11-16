export interface Repository<T> {
  create(item: T): T;
  update(item: T): T;
  get(id: number): T;
  listAll(): Array<T>;
}
