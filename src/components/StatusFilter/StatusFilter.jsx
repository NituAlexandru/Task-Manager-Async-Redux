import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filterSlice";
import styles from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={styles.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
