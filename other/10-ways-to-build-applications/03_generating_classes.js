/**
 * A folder has a name, children, and an optional parent. A child can't be added
 * twice. Using ES6.
 */

class Folder {
    constructor(name, children, parent) {
        this.name = name;
        this.children = children;
        this.parent = parent;
    }

    addChild(child) {
        if (this.children.indexOf(child) === -1) {
            this.children.push(child);
        }
    }

    removeChild(child) {
        var index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    addParent(parent) {
        this.parent = parent;
    }

    removeParent() {
        this.parent = null;
    }
}

