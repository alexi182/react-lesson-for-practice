import MenuItem from './menuItem';

const menu = [
   {
      label: 'Данные',
      link: '/data'
   },
   {
      label: 'Статистика',
      link: '/static'
   },
   {
      label: 'Контакты',
      link: '/contacts'
   }
];

export default class Menu extends React.Component{
   constructor(props) {
      super(props)
   }

   render() {
      return (
          <MenuItem link={menu} />
      )
   }
}