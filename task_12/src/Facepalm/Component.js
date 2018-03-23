class Component {
    constructor(props) {
        this.props = props || {};
        this.state = {};

        this.host = null;
    }

    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        this._render();
    }

    onBeforeUpdate(nextProps) {}

    update(nextProps) {
        this.onBeforeUpdate(nextProps);
        this.props = Object.assign({}, this.props, nextProps);
        return this._render();
    }

    insertChildren(children, host = this.host) {
        let node = host;
        if (typeof children === 'string') {
            node.insertAdjacentHTML('beforeend', children)
        } else if (Array.isArray(children)) {
            children.forEach(elem => {
                (typeof elem === 'string') ? node.insertAdjacentHTML('beforeend', elem): node.append(elem);
            });
        } else {
            node.append(children);
        };
        return node;
    }

    _render() {
        this.host.innerHTML = '';
        return this.insertChildren(this.render());
    }

    render() {}
}

export default Component;
