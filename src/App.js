import React from "react";
import PropTypes from "prop-types";

// function Food({favorite, something, papapapa}) {
//   return (<h1>I like {favorite}</h1>);
// }

function Food(props) {
  const {name, picture, rating} = props;
  return (<>
    <h2>{name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} title={name} />
  </>);
}

function App() {
  const foodLikes = [
    {id: 1, rating:5,  name : "Kimchi", image : "https://www.bing.com/th?id=AMMS_08ae5fefd45ebce4375319fbdc5561ef&w=214&h=282&rs=2&qlt=80&o=6&cdv=1&pid=16.1"},
    {id: 2, rating:3.5, name : "Kimbap", image : "https://www.bing.com/th?id=AMMS_8a4d4ac74222d01c189100cbe094f163&w=214&h=214&rs=2&qlt=80&o=6&cdv=1&pid=16.1"},
    {id: 3, rating:4, name : "Tomato", image : "https://www.bing.com/th?id=AMMS_9fbef684c4c8889f2975823f08db4318&w=214&h=322&rs=2&qlt=80&o=6&cdv=1&pid=16.1"}
  ]
  return (
    <div>
      <h1>Hello</h1>
      {foodLikes.map(function (dish, i) {
        return (<Food key={dish.id} rating={dish.rating} name={dish.name} picture={dish.image} />);
      })}
    </div>
  );
}

//https://github.com/facebook/prop-types
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;
