// import  { useContext } from "react";
// import NavigationContext from "../context/Navigation";
import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

const Link = ({ to, children }) => {
  //   const { navigate } = useContext(NavigationContext);
  const { navigate } = useNavigation();
  const classes = classNames("text-blue-500", "mb-3");

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
};

export default Link;
