var Timer = React.createClass({
    getInitialState: function() {
        return {
            seconds: 0
        }
    },

    componentDidMount: function() {
        setInterval(this.tick, 1000);
    },

    tick: function() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    },
    render: function() {
        return <p>Прошло {this.state.seconds} секунд</p>
    }
});

ReactDOM.render(
    <Timer />,
    document.getElementById('timer')
);
