"use strict";

const Homepage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [input, setInput] = React.useState("");
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=" + input)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        setIsLoading(false);
      });
  }, [isLoading]);

  const button = React.createElement(
    "Button",
    {
      onClick: () => setIsLoading(true),
    },
    "Search"
  );
  const search = React.createElement("Input", {
    onChange: (e) => setInput(e.target.value),
  });
  const text = React.createElement("P", null, input);
  const searchContainer = React.createElement("Div", null, search, button);

  return [
    searchContainer,
    text,
    React.createElement(
      "Div",
      null,
      isLoading
        ? "Loading"
        : products.map((product, i) => {
            return React.createElement("Li", null, product.title);
          })
    ),
  ];
};

export default Homepage;
