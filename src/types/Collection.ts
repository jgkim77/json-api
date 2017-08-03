import Resource from './Resource';

export default class Collection {
  private resources: Resource[];

  constructor(resources: Resource[] = []) {
    this.resources = resources;
  }

  get ids() {
    return this.resources.map(it => it.id);
  }

  get types() {
    return this.resources.map(it => it.type);
  }

  add(resource) {
    this.resources.push(resource);
  }

  [Symbol.iterator]() {
    return this.resources.values();
  }
}
