export default class Menu extends React.Component{
   render() {
      return (
          <ul class="nav navbar-nav">
             { this.props.children }
          </ul>
      )
   }
}