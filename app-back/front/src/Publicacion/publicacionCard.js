import React from 'react';

 class PublicacionCard extends React.Component {
  state={
    contenido: this.props.value.contenido,
}
      render() {
        return (
<div>
  <div className="container-fluid">
    <section className="content">
      <div className="container">
         <div className="row">
          <div className='col-lg-8 col-md-8'>
           
            <div className="post">
              <div className="wrap-ut pull-left">
                <div className="userinfo pull-left">
                  <div className="avatar">
                    <img className="imagen" src="https://img.icons8.com/bubbles/2x/user.png" alt="Icon"/>
                  </div>
                </div>
                <div className="posttext pull-left">
                <h6 className="date">Yesterday at 04:00 AM </h6>
                <p>Hello, my ... {this.state.contenido}</p>
              </div>
             
              </div>

              <div className="clearfix">
              </div>
            </div>
            
           
          </div>
          <div className='col-lg-4 col-md-4'>
            
          </div>
         </div>
      </div>
    </section>

  </div>
</div>
);
}
}
export default PublicacionCard;
				              