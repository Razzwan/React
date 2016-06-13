var Button = React.createClass({
    handler1: function() {
        alert("Сработала кнопка 1!");
    },

    handler2: function() {
        // do something else
    },

    render: function() {

        return (
            <button onClick={eval("this." + this.props.handler)}>
                {this.props.name}
            </button>
        );
    }

});

ReactDOM.render(
    <Button name="Кнопка1" handler="handler1" />,
    document.getElementById('button')
);


