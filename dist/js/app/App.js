class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <HeaderPanel  />
        <VideoPanel />
        <FooterPanel  />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
   document.getElementById('root')
);
