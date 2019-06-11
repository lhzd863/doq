class TestTablePanel extends React.Component {

  constructor(props) {
    super(props);
    this.state={
    	hits: [],
      isLoading: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
  	
  }
  componentDidMount() {
    fetch("https://hn.algolia.com/api/v1/search?query=redux")
       .then(response => response.json())
       .then((data) => {
       	   this.setState({hits: data.hits, isLoading: false});
       	})
       .catch(function (err) {
            console.log(err);
       });
  }

  render() {
    const { hits, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
    );
  }

}
