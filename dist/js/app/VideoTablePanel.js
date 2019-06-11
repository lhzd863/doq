class VideoTablePanel extends React.Component {

  constructor(props) {
    super(props);
    this.state={
    	data:[],
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
  	
  }
  componentDidMount() {
    fetch("json/video", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify({
            appid: 'u00001',
            videocd: 'ldh'
          })
        })
       .then(response => response.json())
       .then(data => {
       	   this.setState({data:data[0].data[0]});
       	})
       .catch(function (err) {
            console.log(err);
       });
       console.log(this.state.data);
  }

  render() {
    const data = [{Seq:"",AudioName:"",AudioType:"",Location:""}];

    const columns = [{
      Header: '序号',
      accessor: 'Seq'
    }, {
      Header: '名称',
      accessor: 'AudioName' // String-based value accessors!
    }, {
      Header: 'AudioType',
      accessor: 'AudioType'
    }, {
      Header: 'Location',
      accessor: 'Location'
    }]

    return <ReactTable 
      data={data}
      columns={columns}
    />
  }

}
