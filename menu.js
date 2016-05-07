var MenuExample = React.createClass({

    getInitialState: function(){
        return {
            focused: 0,
            content: ''
        };
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    clicked: function(index){

        this.serverRequest = $.get("https://api.github.com/users/octocat/gists", function(result){

            if(!result || !result.data || !result.data.length){
                return;
            }

            this.setState({
                content: result
            });

        }.bind(this));


        this.setState({focused: index});
    },

    render: function() {

        // Здесь мы читаем свойство items, которое было передано
        // атрибутом, при создании компонента

        var self = this;

        // Метод map пройдется по массиву элементов меню,
        // и возвратит массив с <li> элементами.

        return (
            <div>
                <ul>{ this.props.items.map(function(m, index){

                    var style = '';

                    if(self.state.focused == index){
                        style = 'focused';
                    }

                    // Обратите внимание на использование метода bind(). Он делает
                    // index доступным в функции clicked:

                    return <li className={style} onClick={self.clicked.bind(this, index)}>{m}</li>;

                }) }

                </ul>

                <p>Selected: {this.props.items[this.state.focused]}</p>
            </div>
        );

    }
});

// Отображаем компонент меню на странице, передав ему массив с элементами

ReactDOM.render(
    <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] } />,
    document.getElementById('menu')
);
