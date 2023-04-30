import React, { useReducer, useState, } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import { Card, Grid } from "semantic-ui-react";
import { Route, Routes,useParams,BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./Route/PrivateRoute"
import ThemeContext from "./context/ThemeContext";
import Detail from "./components/Detail/Detail";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { Footer } from "./components/Footer/Footer";
import Users from "./components/Users/Users";
import Signup from "./components/Signup/Signup";
const initialState = {
  fruitObjects: [],
  carts: [],
  count: 0,
};
var fruitObjects = [
  {
    name: "Banana",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
    price: 12,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Grapes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
    weight: 0.1,
    price: 45,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Strawberry",
    image:
      "https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 200,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Apple",
    image:
      "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 35,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Carrot",
    image:
      "https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 24,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "fish",
    image:
      "https://images.pexels.com/photos/4158450/pexels-photo-4158450.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    weight: 0.1,
    price: 450,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Pineapple",
    image:
      "https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 100,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Chicken",
    image:
      "https://images.pexels.com/photos/3688/food-dinner-lunch-chicken.jpg?auto=compress&cs=tinysrgb&w=600",
    price: 350,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Potato",
    image:
      "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 30,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Tomato",
    image:
      "https://images.pexels.com/photos/373019/pexels-photo-373019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
    price: 45,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "lettuce",
    image:
      "https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 70,
    isLiked: false,
    quantity: 0,
  },
  
  {
    name: "oranges",
    image:
      "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 130,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Kiwi",
    image:
      "https://images.pexels.com/photos/54370/pexels-photo-54370.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 150,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Avacado",
    image:
      "https://media.istockphoto.com/id/1383933735/photo/avocado-halves.jpg?b=1&s=612x612&w=0&k=20&c=4ZjN8H7QCf8TQEgeKfxE33vk-Bwa0kejGUlsE0bycmo=",
    price: 200,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Blueberry",
    image:
      "https://images.pexels.com/photos/583837/pexels-photo-583837.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 210,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Beans",
    image:
      "https://images.pexels.com/photos/11073466/pexels-photo-11073466.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 20,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Onion",
    image:
      "https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 30,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "prawns",
    image:
      "https://images.pexels.com/photos/3680164/pexels-photo-3680164.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 200,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "crabs",
    image:
      "https://images.pexels.com/photos/8352396/pexels-photo-8352396.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 150,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Peas",
    image:
      "https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 20,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Cucumber",
    image:
      "https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 40,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Spinach",
    image:
      "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 20,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Cabbage",
    image:
      "https://images.pexels.com/photos/2518893/pexels-photo-2518893.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 20,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Dragon Fruit",
    image:
      "https://images.pexels.com/photos/1437598/pexels-photo-1437598.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 150,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Muskmelon",
    image:
      "https://images.pexels.com/photos/7227503/pexels-photo-7227503.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 70,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Watermelon",
    image:
      "https://images.pexels.com/photos/880447/pexels-photo-880447.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 100,
    isLiked: false,
    quantity: 0,
  },
  {
    name: "Lemon",
    image:
      "https://images.pexels.com/photos/952360/pexels-photo-952360.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 20,
    isLiked: false,
    quantity: 0,
  },
];
const reducer = (state, actions) => {
  switch (actions.type) {
    case "SET_LIST": {
      return {
        ...state,
        fruitObjects: actions.value,
      };
    }
    case "SET_CART": {
      return {
        ...state,
        carts: actions.value,
      };
    }
    case "SET_VALUE":{
      return{
        ...state,
        [actions.key]:actions.value,

      };
    }
    default:
      break;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const params = useParams()
   
    if (state.fruitObjects.length === 0) {
      dispatch({ type: "SET_VALUE", value: fruitObjects, key: "fruitObjects" });
    }
  
  const renderCards = () => {
    return (
      <Grid
        style={
          isDarkTheme
            ? { backgroundColor: "#282C34" }
            : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <NavBar carts={state.carts} setIsDarkTheme={setIsDarkTheme}></NavBar>
        </Grid.Row>

        <Cards
          List={state.fruitObjects}
          carts={state.carts}
          setList={List => {
            //dispatch({ type: "SET_LIST", value: List });
            dispatch({type:"SET_VALUE", value : List,key:"fruitObjects"})
          }}
          setCarts={(cart) => {
           // dispatch({ type: "SET_CART", value: cart });
           dispatch({type:"SET_VALUE", value : cart,key:"carts"})
          }}
        ></Cards>
      </Grid>
    );
  };
  const renderDetail = () => {
    return (
      <Grid
        style={
          isDarkTheme ? { backgroundColor: "#282C34" } : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <NavBar carts={state.carts} setIsDarkTheme={setIsDarkTheme}></NavBar>
        </Grid.Row>

        <Detail
          fruits={state.fruitObjects}
          carts={state.carts}
          setList={list => {
            // dispatch({ type: "SET_LIST", value: list })
            dispatch({ type: "SET_VALUE", value: list, key: "fruitObjects" })
          }}
          setCarts={cart => {
            dispatch({ type: "SET_CART", value: cart })
            // dispatch({ type: "SET_VALUE", value: cart, key: "carts" })
          }}
        ></Detail>
      </Grid>
    )
  }
  const renderCart = () => {
    return (
      <Grid
        style={
          isDarkTheme ? { backgroundColor: "#282C34" } : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <NavBar carts={state.carts} setIsDarkTheme={setIsDarkTheme}></NavBar>
        </Grid.Row>
        <Cart
          carts={state.carts}
          fruits={state.fruitObjects}
          setList={list => {
            // dispatch({ type: "SET_LIST", value: list })
            dispatch({ type: "SET_VALUE", value: list, key: "fruitObjects" })
          }}
          setCart={cart => {
            dispatch({ type: "SET_CART", value: cart })
            // dispatch({ type: "SET_VALUE", value: cart, key: "carts" })
          }}
        ></Cart>
      </Grid>
    )
  }
  const renderCheckout = () => {
    return (
      <Grid
        style={
          isDarkTheme ? { backgroundColor: "#282C34" } : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <NavBar carts={state.carts} setIsDarkTheme={setIsDarkTheme}></NavBar>
        </Grid.Row>
        <Checkout
          carts={state.carts}
          fruits={state.fruitObjects}
          setList={list => {
            // dispatch({ type: "SET_LIST", value: list })
            dispatch({ type: "SET_VALUE", value: list, key: "fruitObjects" })
          }}
          setCart={cart => {
            dispatch({ type: "SET_CART", value: cart })
            // dispatch({ type: "SET_VALUE", value: cart, key: "carts" })
          }}
        ></Checkout>
      </Grid>
    )
  }
  const renderFooter =() => {
    return <Footer></Footer>
  }
  const renderUsers = () => {
    return (
      <Grid style ={
        isDarkTheme ? { backgroundColor: "#282C34" } : { backgroundColor: "#f2f2f2" }
      }
      >
        <Grid.Row>
          <NavBar carts ={state.carts} setIsDarkTheme={setIsDarkTheme}></NavBar>
        </Grid.Row>
        <Users></Users>
      </Grid>
    )
  }
  return (
    <ThemeContext.Provider value={isDarkTheme}>
      
      <Routes>
          <Route path="/users" element={renderUsers()}></Route>
         <Route exact path="/login" element={<Login></Login>}></Route>
         <Route path="/signup" element ={<Signup></Signup>}></Route>
         <Route
          path="/shop"
          element={<PrivateRoute>{renderCards()}</PrivateRoute>}
        ></Route>
        <Route
          path="/detail/:fruitId"
          element={<PrivateRoute>{renderDetail()}</PrivateRoute>}
        ></Route>
        <Route path="/cart" element={<PrivateRoute>{renderCart()}</PrivateRoute>}></Route>
        <Route path="/check-out"
        element={<PrivateRoute>{renderCheckout()}</PrivateRoute>}
        ></Route>
        <Route path="*" element={<div>Not Found...</div>}></Route>
        
      </Routes>
     
    </ThemeContext.Provider>
  );
  
}
export default App;
