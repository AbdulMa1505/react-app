import PropTypes from 'prop-types';
function List(props){

    const category=props.category;
    const itemsList =props.items ;

    const ListItem =itemsList.map(item =><li key={item.id}>
        {item.name}:&nbsp;
        {item.calories}</li>);  
    return (<>    
    <ol class="One"><h3 class="category">{category}</h3></ol>
    <ol class="Two"><h3 class="List-item">{ListItem}</h3></ol>
    </>);
}
List.PropTypes={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        calories:PropTypes.number
    })),
}
List.defaultProps={
    category:"category",
    items:[],
}
export default List