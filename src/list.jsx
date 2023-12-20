import propTypes from "prop-types";

function List(props) {
    // fruits.sort((a, b) => a.name.localeCompare(b.name));

    // itemList.sort((a, b) => a.calories - b.calories);
    // const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
    // const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);

    const itemList = props.items;
    const category = props.category;

    const listItems = itemList.map((item) => (
        <li key={item.id}>
            {item.name}: &nbsp; {item.calories}
        </li>
    ));

    return (
        <div className="list__content-wrapper">
            <h3 className="list__category">{category}</h3>
            <ol className="list__item">{listItems}</ol>
        </div>
    ); 
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number,
            name: propTypes.string,
            calories: propTypes.number,
        })
    ),
};

List.defaultProps = {
    category: "Catagory",
    items: [],
};

export default List;
