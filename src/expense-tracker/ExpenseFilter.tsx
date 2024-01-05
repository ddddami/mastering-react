import { categories } from "./categories";

interface Props {
  onItemSelect: (item: string) => void;
}

const ExpenseFilter = ({ onItemSelect }: Props) => {
  return (
    <select
      onChange={(e) => onItemSelect(e.currentTarget.value)}
      className="form-control"
      name="category"
      id="category"
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
