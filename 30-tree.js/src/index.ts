interface Options {
  el: string;
  nodes?: Tree[];
  checkbox?: boolean;
  accordion?: boolean;
  onCheck?(e: MouseEvent, tree: Tree): void;
  onExpand?(e: MouseEvent, tree: Tree): void;
}

interface Tree {
  value: string;
  label: string;
  checked?: boolean;
  expanded?: boolean;
  children?: Tree[];
}

interface Configs extends Tree {
  inputTarget?: HTMLElement;
  path?: string;
}

import './index.scss';
import {
  insertHtml,
  removeElement,
  hasClass,
  toggleClass,
  removeClass,
  closest
} from './utils';

class Tree {
  private options: Options;
  private configs: Configs[];
  private containerEl: HTMLElement;
  private treeEl: HTMLElement;
  private checkedList: string[];

  private constructor(options: Options) {
    this.options = {
      ...Tree.DEFAULTS,
      ...options
    };

    this.checkedList = [];
    this.containerEl = document.querySelector(options.el);
    this._eventBind = this._eventBind.bind(this);
    this._init();
  }

  static get DEFAULTS(): Options {
    return {
      el: '',
      nodes: [],
      checkbox: true,
      accordion: true,
      onCheck: function () { },
      onExpand: function () { }
    };
  }

  private _init(): this {
    this.configs = this._setPath(this.options.nodes);
    this._creatDom();
    this.configs = this._getPath(this.configs);
    this.treeEl.addEventListener('click', this._eventBind);
    console.log(this)
    return this;
  }

  private _creatDom(): void {
    let self = this;
    let htmlStr = (function getStr(tree: Configs[]): string {
      return tree
        .map(item => {
          return `
          <li class="tree-parent${item.expanded ? ' expanded' : ''}">
            <div class="tree-text">
              ${item.children && item.children.length > 0 ? '<span class="tree-expanded">expanded</span>' : ''}
              ${self.options.checkbox ? `
                <span class="tree-checked">
                  <input class="tree-checkbox" type="checkbox" data-tree-path="${item.path}" value="${item.value}" ${item.checked ? ' checked' : ''}>
                </span>
                ` : ''
              }
              <span class="tree-label">${item.label}</span>
            </div>
            ${item.children && item.children.length > 0 ? `<ol> ${getStr(item.children)} </ol>` : ''}
          </li>
        `;
        })
        .join('');
    })(this.configs);
    insertHtml(this.containerEl, 'beforeend', `<ol class="tree-el"> ${htmlStr} </ol>`);
    this.treeEl = this.containerEl.querySelector('.tree-el');
  }

  private _eventBind(e: MouseEvent): void {
    const target = e.target;
    if (hasClass(<Element>target, 'tree-expanded')) {
      this._expandedEvent(e);
    } else if (hasClass(<Element>target, 'tree-checkbox')) {
      this._checkedEvent(e);
    }
  }

  private _expandedEvent(e: MouseEvent): void {
    const liParent = closest(<Element>e.target, '.tree-parent');
    toggleClass(liParent, 'expanded');
    if (this.options.accordion) {
      const olParent = closest(<Element>e.target, 'ol');
      Array.from(olParent.children)
        .filter(children => children !== liParent)
        .forEach(tree => removeClass(tree, 'expanded'));
    }
  }

  private _checkedEvent(e: MouseEvent): void {
    const target = <HTMLInputElement>e.target;
    const checked = target.checked;
    const liParent = closest(<Element>e.target, '.tree-parent');
    const childrenCheckboxs = <HTMLInputElement[]>Array.from(liParent.querySelectorAll('.tree-checkbox')).filter(item => item !== target);
    childrenCheckboxs.forEach(item => item.checked = checked);

    let olParent = closest(<Element>e.target, 'ol');
    while (olParent !== this.treeEl) {
      console.log(olParent)
      const siblingCheckboxs = <HTMLInputElement[]>Array.from(olParent.children).map(item => item.children[0].querySelector('.tree-checkbox'));
      const siblingCheckboxsLength = siblingCheckboxs.length;
      const siblingCheckedLength = siblingCheckboxs.filter(item => item.checked).length;
      if (olParent.previousElementSibling) {
        const parentCheckbox = <HTMLInputElement>olParent.previousElementSibling.querySelector('.tree-checkbox');
        parentCheckbox.indeterminate = siblingCheckboxsLength > siblingCheckedLength && siblingCheckedLength !== 0;
        parentCheckbox.checked = siblingCheckedLength === siblingCheckboxsLength
      }
      olParent = closest(olParent.parentElement, 'ol');
    }
  }

  private _setPath(tree: Tree[], deep?: string): Configs[] {
    return (function setPath(tree, deep): Configs[] {
      return tree.map((item, index) => {
        let path = `${deep ? deep + '.' : ''}${index}`;
        return Object.assign({}, item, {
          path: path,
          children: item.children ? setPath(item.children, path) : []
        });
      });
    })(tree, deep);
  }

  private _getPath(configs: Configs[]): Configs[] {
    let self = this;
    return (function getPath(configs): Configs[] {
      return configs.map(item => {
        return Object.assign({}, item, {
          inputTarget: self.containerEl.querySelector(`[data-tree-path='${item.path}']`),
          children: item.children ? getPath(item.children) : []
        });
      })
    })(configs);
  }

  public setTree(tree: Tree[]): this {
    this.configs = this._setPath(tree);
    this.destroy()._init();
    return this;
  }

  public getChecked(): string[] {
    return this.checkedList;
  }

  public destroy(): this {
    this.containerEl.removeEventListener('click', this._eventBind);
    removeElement(this.treeEl);
    return this;
  }
}

(<any>window).Tree = Tree;
export default Tree;
