const Header = ({ handleDarkMode }) => {
  return (
    <div>
      <div>
        <h3>Where in the world?</h3>
        <button onClick={handleDarkMode}>Dark Mode</button>
      </div>
    </div>
  );
};
export default Header