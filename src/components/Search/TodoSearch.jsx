import "./TodoSearch.css";

function TodoSearch({ setSearchValue, searchValue }) {

    return (
      <input
        placeholder="Cortar cebolla"
        className="TodoSearch"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    ); 
}
  

export { TodoSearch }; 