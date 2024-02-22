import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import React, { useMemo, useState } from "react";

const createData = (id, name, calories, fat, carbs, protein) => ({
  id,
  name,
  calories,
  fat,
  carbs,
  protein,
});

const rows = [
  createData(1, "Cupcake", 305, 3.7, 67, 4.3),
  createData(2, "Donut", 452, 25.0, 51, 4.9),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
  createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
  createData(9, "KitKat", 518, 26.0, 65, 7.0),
  createData(10, "Lollipop", 392, 0.2, 98, 0.0),
  createData(11, "Marshmallow", 318, 0, 81, 2.0),
  createData(12, "Nougat", 360, 19.0, 9, 37.0),
  createData(13, "Oreo", 437, 18.0, 63, 4.0),
];

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  const colorCombination = {
    background: numSelected && "#212121",
    color: numSelected && "#fff",
  };

  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...colorCombination,
      }}
    >
      {numSelected > 0 ? (
        <Typography>{numSelected} selected</Typography>
      ) : (
        <Typography>Developer Hub</Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon sx={{ ...colorCombination }} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon sx={{ ...colorCombination }} />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
  },
];

const EnhancedTableHead = (props) => {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            onChange={onSelectAllClick}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            // indeterminateIcon={<DeleteIcon />}
            checked={rowCount > 0 && numSelected === rowCount}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            // sortDirection={false}
          >
            <TableSortLabel direction="desc">
              {headCell.label}
              {}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const SortingSelecting = () => {
  const [selected, setSelected] = useState([]);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");

  const handleRequestSort = (e, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (e, id) => {
    const alreadySelected = selected.includes(id);
    if (alreadySelected)
      return setSelected((prev) => prev.filter((item) => item !== id));
    setSelected((prev) => [id, ...selected]);
  };
  const isSelected = (id) => selected.includes(id);
  const handleChangeDense = (e) => {
    setDense((prev) => !prev);
  };
  const handlePageChange = (e, newValue) => {
    setPage((prev) => newValue);
  };
  const handleRowPerPageChange = (e) => {
    setRowsPerPage((prev) => e.target.value);
    setPage((prev) => 0);
  };
  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      return setSelected((prev) => rows.map((item) => item.id));
    }
    return setSelected([]);
  };

  const visibleRows = useMemo(() => {}, [page, rowsPerPage]);
  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{
              minWidth: 550,
              overflow: "auto",
            }}
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              onSelectAllClick={handleSelectAllClick}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  hover
                  key={row.name}
                  onClick={(e) => handleClick(e, row.id)}
                  sx={{ cursor: "pointer" }}
                  selected={isSelected(row.id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" checked={isSelected(row.id)} />
                  </TableCell>
                  <TableCell component="th">{row.name}</TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component={"div"}
          count={rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowPerPageChange}
        />
        <Box px={2} py={1}>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default SortingSelecting;
