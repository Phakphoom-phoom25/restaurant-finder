import React, {useEffect, useState} from 'react';
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import PlaceCard from './PlaceCard';
import data from './data.json'; //นำเข้าข้อมูล
import { Pagination } from 'antd';
import SearchIcon from '@mui/icons-material/Search';
import "./Main.css";

const Main = () => {
  const [category, setCategory] = useState ('restaurant');
  const [searchInput, setSearchInput] = useState ('');
  const [pagination, setPagination] = useState (
    {
      pageSize: 9,
      current: 1,
      total: 0,
    }
  )

  const indexOfLastItemRouteListInTab =
  pagination?.current * pagination?.pageSize
  const indexOfFirstItemRouteListInTab =
  indexOfLastItemRouteListInTab - pagination?.pageSize

  function positiveNumber(num) {
    return num < 0 ? -num : num
  }

  const handleCategoryChange = event => {
    setPagination((prevState) => {
      return {
        ...prevState,
        current: 1,
      };
    });
    setCategory (event.target.value);
  };

  const dataSearch = data?.filter((dataFilter) => {
    const searchFilter = dataFilter?.name?.toLowerCase()?.includes(searchInput?.toLowerCase());
    return searchFilter;
  });

  const filteredRestaurants = dataSearch.filter (restaurant =>
    restaurant.categories.includes (category)
  );

  const renderByPagination = filteredRestaurants?.slice(
    positiveNumber(indexOfFirstItemRouteListInTab),
    positiveNumber(indexOfLastItemRouteListInTab),
  )


  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "0px 42px",
        }}
      >
        <div>
          <p style={{ fontSize: "34px", fontWeight: "500" }}>Place List</p>
        </div>
        <div
          className="sitem"
          style={{ display: "flex", gap: "14px", alignItems: "center" }}
        >
          <FormControl
            variant="outlined"
            fullWidth
            margin="normal"
            style={{ width: "185px" }}
            className="BoxD"
          >
            
            <InputLabel>Categories</InputLabel>
            <Select
              labelId="category-label"
              value={category}
              onChange={handleCategoryChange}
              label="Restaurent"
            >
              <MenuItem value="restaurant">Restaurant</MenuItem>
              <MenuItem value="cafe">Cafe</MenuItem>
              <MenuItem value="bakery">Bakery</MenuItem>
            </Select>
          </FormControl>
  
          <div
            className="hide"
            style={{ border: "1px solid #134B8A", height: "30px" }}
          />
         
          <FormControl
            variant="outlined"
            fullWidth
            margin="normal"
            style={{ width: "400px" }}
          >
             <div className="BoxC">
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <TextField
                  fullWidth
                  label="Search name..."
                  id="fullWidth"
                  onChange={(e) => {
                    setPagination((prevState) => {
                      return {
                        ...prevState,
                        current: 1,
                      };
                    });
                    setSearchInput(e.target.value);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                
              </Box>
              </div>
          </FormControl>
        </div>
      </div>

      <PlaceCard data={renderByPagination} />
      <div
        style={{
          display: "flex",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <Pagination
          current={pagination.current}
          total={filteredRestaurants.length}
          onChange={(e) => {
            setPagination((prevState) => {
              return {
                ...prevState,
                current: e,
              };
            });
          }}
        />
      </div>
    </div>
  );

};

export default Main;
