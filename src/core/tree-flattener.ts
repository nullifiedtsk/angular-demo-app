export class TreeItem<T> {
  selected: boolean = false;
  expanded: boolean = false;
  children: TreeItem<T>[] = [];
  parent?: TreeItem<T>;
  value!: T;

  constructor(init?: Partial<TreeItem<T>>) {
    Object.assign(this, init);
  }

  toRoot(code: (item: TreeItem<T>) => void) {
    let root = this as TreeItem<T>;
    code(root);
    while (root.parent) {
      root = root.parent;
      code(root);
    }
  }

  toLastChild(code: (item: TreeItem<T>) => void) {
    code(this);
    this.children?.forEach((x) => x.toLastChild(code));
  }
}

export class FlattenedTreeItem<T> extends TreeItem<T> {
  level!: number;

  constructor(init?: Partial<FlattenedTreeItem<T>>) {
    super(init);
  }
}

export class TreeManager<T> {
  private tree: TreeItem<T>[] = [];
  private originalItems: T[] = [];

  constructor(recursiveItems: T[], private childrenSelector: (item: T) => T[]) {
    this.originalItems = recursiveItems;
    this.tree = this.buildTree(this.originalItems);
  }

  expand(node: TreeItem<T>) {
    node.expanded = true;
  }

  collapse(node: TreeItem<T>) {
    node.toLastChild((x) => (x.expanded = false));
  }

  flatten(roots?: TreeItem<T>[], level = 0) {
    if (!roots) roots = this.tree;
    let result = [] as FlattenedTreeItem<T>[];
    roots?.forEach((root) => {
      result.push(new FlattenedTreeItem<T>({ ...root, level, expanded: level === 0 }));
      if (root.children) result.push(...this.flatten(root.children, level + 1));
    });
    return result;
  }

  private buildTree(allItems: T[]) {
    const convert = (items: T[], parent?: TreeItem<T>): TreeItem<T>[] =>
      items.map((x) => {
        const item = new TreeItem<T>({
          value: x,
          parent: parent,
          selected: false,
          expanded: false,
        });
        item.children = convert(this.childrenSelector(x), item);
        return item;
      });
    return convert(allItems);
  }
}
