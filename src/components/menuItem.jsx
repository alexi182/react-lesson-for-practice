import { Link } from 'react-router';

export default class MenuItem extends React.Component {
   render() {
      return (
          <ul className="nav navbar-nav">
             <li className="active">
                <Link to = {this.props.href}> {this.props.name} </Link>
             </li>
          </ul>
      );
   }
}