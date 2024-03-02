import {
  Button,
  Pagination,
  PaginationItem,
  Stack,
  TablePagination,
  Typography,
  styled,
} from "@mui/material";
import {
  ArrowLeft,
  ArrowRight,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import React, { useState } from "react";
import usePagination from "@mui/material/usePagination/usePagination";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  gap: 4,
});

const MainPagination = () => {
  const [controlledPage, setControlledPage] = useState(1);

  const { items: paginationItems } = usePagination({
    count: 10,
  });

  /* For table paginations */
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage((prev) => e.target.value);
    setPage((prev) => 0);
  };

  const handleChange = (_, value) => setControlledPage((prev) => value);
  return (
    <Stack p={4} gap={2} justifyContent={"center"} alignItems={"center"}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} disabled />
      <Pagination count={10} color="secondary" variant="outlined" />
      <Pagination count={10} shape="rounded" />
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        color="primary"
      />
      <Pagination count={10} size="small" />
      <Pagination count={10} />
      <Pagination count={10} size="large" />
      <Pagination count={10} showFirstButton showLastButton />
      <Pagination count={10} hidePrevButton hideNextButton color="secondary" />
      <Pagination
        count={10}
        showFirstButton
        showLastButton
        hidePrevButton
        hideNextButton
      />
      <Typography variant="h6" gutterBottom>
        Custom Icon
      </Typography>
      <Pagination
        count={10}
        showFirstButton
        showLastButton
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: ArrowLeft,
              next: ArrowRight,
              first: SkipPrevious,
              last: SkipNext,
            }}
            {...item}
          />
        )}
      />
      <Typography variant="h6" gutterBottom>
        Pagination ranges
      </Typography>
      <Pagination
        count={11}
        defaultPage={2}
        /* Pagination ranges */
        siblingCount={1}
      />
      <Pagination count={11} defaultPage={6} siblingCount={0} />
      <Pagination
        count={11}
        defaultPage={6}
        boundaryCount={
          1
        } /* Number of always visible pages at the beginning and end. */
        color="primary"
      />
      <Typography variant="h6" gutterBottom>
        Controlled pagination
      </Typography>
      <Typography>Page: {controlledPage}</Typography>
      <Pagination count={10} page={controlledPage} onChange={handleChange} />
      <Typography variant="h6" gutterBottom>
        usePagination Hook to customize
      </Typography>
      <nav>
        <List>
          {paginationItems.map((paginationParam, index) => {
            const { page, type, selected, ...item } = paginationParam;

            let children = null;
            if (type === "start-ellipsis" || type === "end-ellipsis")
              children = "...";
            else if (type === "page") {
              children = (
                <Button
                  variant="contained"
                  size="small"
                  type="button"
                  style={{
                    fontWeight: selected ? "bold" : undefined,
                  }}
                  {...item}
                >
                  {page}
                </Button>
              );
            } else {
              children = (
                <Button
                  variant="contained"
                  size="small"
                  type="button"
                  {...item}
                >
                  {type}
                </Button>
              );
            }
            return <li key={index}>{children}</li>;
          })}
        </List>
      </nav>
      <Typography variant="h6" gutterBottom>
        Table pagination
      </Typography>
      <TablePagination
        component={"div"}
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Stack>
  );
};

export default MainPagination;
