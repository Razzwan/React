var Timer = React.createClass({
    getInitialState: function() {
        "use strict";
        return {
            seconds: 0
        }
    },

    componentDidMount: function() {
        "use strict";
        setInterval(this.tick, 1000);
    },

    tick: function(event) {
        "use strict";
        this.setState({
            seconds: this.state.seconds + 1
        });
    },
    render: function() {
        "use strict";
        return <p onTimeUpdate={this.tick}>Прошло {this.state.seconds} секунд</p>
    }
});

ReactDOM.render(
    <Timer />,
    document.getElementById('timer')
);
