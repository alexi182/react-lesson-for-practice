import { Link } from 'react-router';

export default class MenuItem extends React.Component {
   render() {
      return (
          <ul className="nav navbar-nav">

             {this.props.link.map((item, index) =>
                 <li key={index}>
                    <Link to={item.link}> {item.label} </Link>
                 </li>
             )}
          </ul>
      );
   }
}