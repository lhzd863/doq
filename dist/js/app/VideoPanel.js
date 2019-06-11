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
    var returnValue = paraObj["label"];
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
      fetch("http://"+GLOBAL_CONTEXT.URL_BASE_HOST+"/api/video/product?accesstoken="+GLOBAL_BASE.BASE_ACCESSTOKEN+"&label="+this.state.url)
           .then(response => response.json())
           .then((data) => {
           	   //this.setState({hits: data, isLoading: false});
                console.log(data);
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
          <div>    
            <div data-vjs-player>
              <video ref={ node => this.videoNode = node } className="video-js"></video>
            </div>
          </div> 
    );
  }

}
