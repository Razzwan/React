var contacts = [
    {
        id: 1,
        name: 'Pavel',
        phoneNumber: '656565656'
    },
    {
        id: 2,
        name: 'Daria',
        phoneNumber: 'asdf'
    },
    {
        id: 3,
        name: 'Vano',
        phoneNumber: 'jhkhjgk'
    },
    {
        id: 4,
        name: 'Maria',
        phoneNumber: '6565657887656'
    },
    {
        id: 5,
        name: 'Pavel5',
        phoneNumber: '777777777777'
    },
    {
        id: 6,
        name: 'Rambler',
        phoneNumber: '8888888888'
    }
];

var Contact = React.createClass({
    render: function() {
        "use strict";
        return <li>
            <p>{this.props.name}</p>
            <p>{this.props.phone}</p>
        </li>
    }
});

var ContactList = React.createClass({
    getInitialState: function() {
        "use strict";
        return {
            displayedContacts: []
        }
    },
    handleSearch: function(event) {
        "use strict";
        var searchQuery = event.target.value.toLowerCase();
        var displayedContacts = contacts.filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        if (searchQuery.length == 0) {
            displayedContacts = [];
        }

        this.setState({
            displayedContacts: displayedContacts
        });
    },
    render: function() {
        "use strict";
        return <div>
            <input type="text" onChange={this.handleSearch} />
            <ul>
                {
                    this.state.displayedContacts.map(function(el){
                        return <Contact key={el.id} name={el.name} phone={el.phoneNumber} />
                    })
                }
            </ul>
        </div>
    }
});

ReactDOM.render(
    <ContactList />,
    document.getElementById('contact-list')
);
