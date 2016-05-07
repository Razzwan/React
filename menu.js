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

        var page = this.props.items[index].page;

        this.serverRequest = $.get("/pages/" + page + ".html", function(result){
            if(!result){
                return;
            }

            this.setState({
                content: result
            });

            $('#content').html(result);

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

                    return <li className={style} onClick={self.clicked.bind(this, index)}>{m.name}</li>;

                }) }

                </ul>

                <div>Content: {this.state.content}</div>
            </div>
        );
    }

});

// Отображаем компонент меню на странице, передав ему массив с элементами

ReactDOM.render(
    <MenuExample items={[
        {
            "page": "home",
            "name": "Домашнаяя страница"
        },
        {
            "page": "about",
            "name": "О компании"
        },
        {
            "page": "contact",
            "name": "Страница контактов"
        }
    ]} />,
    document.getElementById('menu')
);
