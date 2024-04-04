import React, { useState } from "react";
import Info from './Info'

function SearchResult(props) {
  const [rowIsClicked, setRowIsClicked] = useState(false);
  const [clickedRowData, setClickedRowData] = useState({});

  let data = props.data;

  function handleRowClick(index) {
    setClickedRowData(data[index]);
    setRowIsClicked(true);
  }

  function handleGoBack() {
    setRowIsClicked(false);
    setClickedRowData({});
  }

  return (
    <div className="result-wrapper">
      <div className="row">
        <div className="col-12 ">
          {rowIsClicked ? (
            <Info data={clickedRowData} handleGoBack={handleGoBack} />
          ) : (
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Result</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Origin</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowClick(index)}
                  >
                    <th scope="row">{index + 1}</th>
                    <td className="w-25">
                      <img
                        src={item.strMealThumb}
                        className="img-fluid"
                      />
                    </td>
                    <td>{item.strMeal}</td>
                    <td>{item.strArea}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
