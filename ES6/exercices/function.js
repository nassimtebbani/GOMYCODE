const NavBar = (navItems) => {
  console.log("this is the NavBar" + navItems);
};

const Button = (content) => {
  return "<button>" + content + "</button>";
};

const App = () => {
  NavBar(["Home", "About", "Contact"]);
  console.log(Button("Click me"));
};
App();

// transform this function into an arrow function
