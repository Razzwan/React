var HelloWorld = React.createClass({
    render: function() {
        return <h1> Hello {this.props.name}, {this.props.action} </h1>
    }
});

ReactDOM.render(
    <div>
        <HelloWorld name="Test1" action="go to the school!"/>
    </div>
    ,
    document.getElementById('content')
);
