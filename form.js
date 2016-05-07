// tutorial17.js
// еде один комент
// А вот еще изменения.
var CommentForm = React.createClass({
    getInitialState: function() {
        return {
            author: '', text: ''
        };
    },

    handleAuthorChange: function(e) {
        this.setState({author: e.target.value});
    },

    handleTextChange: function(e) {
        this.setState({text: e.target.value});
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.serverRequest = $.post( "ajax/test.html", {author: author, text: text}, function(result) {
            var lastGist = result[0];
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }.bind(this));
        this.setState({author: '', text: ''});
    },

    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

ReactDOM.render(
    <CommentForm />,
    document.getElementById('submit-form')
);
