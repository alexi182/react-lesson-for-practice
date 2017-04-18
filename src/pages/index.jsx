export default class IndexPage extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="container">
            {this.props.children}
         </div>
      );
   }
}