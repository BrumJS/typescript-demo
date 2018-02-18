class Queue<T> {
  private items: T[] = [];

  public push(item: T) {
    this.items.push(item);
  }

  public pop(): T | undefined {
    return this.items.shift();
  }
}

interface Job {
  id: number;
  data: any;
}

const queue = new Queue<Job>();

queue.push({ id: 1, data: "foo" });
const job = queue.pop();
