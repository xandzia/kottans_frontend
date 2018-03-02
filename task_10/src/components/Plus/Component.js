class Component {
    constructor(props) {
        this.props = props || {};
        this.state = {};

        this.host = null;
    }

    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        return this.render();
    };

    update(nextProps) {
        this.props = nextProps;
        return this.render();
    };

    render() {}
}

export default Component;
