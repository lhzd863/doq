class HeaderPanel extends React.Component {

  render() {
    return (
      <nav className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2 d-none d-md-inline-block" href="">{GLOBAL_HEADER.HEADER_VIDEO_LDH}</a>
          <a className="py-2 d-none d-md-inline-block" href="#">{GLOBAL_HEADER.HEADER_VIDEO_STF}</a>
          <a className="py-2 d-none d-md-inline-block" href="#">{GLOBAL_HEADER.HEADER_VIDEO_ZXY}</a>
          <a className="py-2 d-none d-md-inline-block" href="#">{GLOBAL_HEADER.HEADER_VIDEO_TOPN}</a>
        </div>
      </nav>
    );
  }
}