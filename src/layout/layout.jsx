export default class MainLayout extends React.Component {

   constructor(props) {
      super(props);
   }

   render() {
      return (
          <div>
             <nav class="navbar navbar-inverse">
                <div class="container">
                   <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                         <span class="sr-only">Toggle navigation</span>
                         <span class="icon-bar"></span>
                         <span class="icon-bar"></span>
                         <span class="icon-bar"></span>
                      </button>

                      <a class="navbar-brand" href="/">
                         Project name
                      </a>
                   </div>
                   <div id="navbar" class="collapse navbar-collapse">
                      { this.props.menu }  /*component*/
                   </div>
                </div>
             </nav>

             <div class="container">
                { this.props.children }    /*page*/
             </div>
          </div>
      );
   }
}