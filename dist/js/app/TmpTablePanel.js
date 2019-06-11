class TmpTablePanel extends React.Component {

  constructor(props) {
    super(props);
    //url parse
    var url = window.location.href; 
    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&"); 
    var paraObj = {};
    var i=0,j=0;
    for (i=0; j=paraString[i]; i++){ 
       paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length); 
    } 
    var returnValue = paraObj["videocd"];
    var paraurl = "";
    if(typeof(returnValue)!="undefined"){
        paraurl = returnValue;
    }
    //set
    this.state={
    	url:paraurl,
    	hits: [],
      isLoading: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
  	
  }
  componentDidMount() {
      fetch("http://"+GLOBAL_CONTEXT.URL_BASE_HOST+"/api/video?accesstoken="+GLOBAL_BASE.BASE_ACCESSTOKEN+"&videocd="+this.state.url)
           .then(response => response.json())
           .then((data) => {
           	   this.setState({hits: data, isLoading: false});
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
        {hits.sort(function (x, y){if (x.AudioName < y.AudioName) {return -1;} if (x.AudioName > y.AudioName) {return 1;} return 0;}).map(hit =>
          <li key={hit.Seq}>
            <a href={GLOBAL_CONTEXT.URL_BASE_VIDEO+hit.Location+"/"+hit.AudioName}>{hit.AudioName}</a>
          </li>
        )}
      </ul>
    );
  }

}
