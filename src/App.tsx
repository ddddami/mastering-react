// import { useState } from "react";
// import ExpenseFilter from "./expense-tracker/ExpenseFilter";
// import ExpenseForm from "./expense-tracker/ExpenseForm";
// import ExpenseList from "./expense-tracker/ExpenseList";

import UserList from "./calling-http/UserList";

// export interface Expense {
//   id: number;
//   amount: number;
//   category: string;
//   description: string;
// }

// const App = () => {
//   const [expenses, setExpenses] = useState<Expense[]>([
//     { id: 1, description: "Milk", category: "Groceries", amount: 10 },
//     { id: 2, description: "Eggs", category: "Groceries", amount: 20 },
//     { id: 3, description: "Electricity", category: "Groceries", amount: 15 },
//     { id: 4, description: "Movies", category: "Groceries", amount: 5 },
//     { id: 5, description: "Milk", category: "Utilities", amount: 10 },
//     { id: 6, description: "Test", category: "Utilities", amount: 10 },
//     { id: 7, description: "Bills", category: "Utilities", amount: 10 },
//     { id: 8, description: "CD", category: "Entertainment", amount: 10 },
//     { id: 9, description: "Intosh", category: "Entertainment", amount: 10 },
//   ]);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const handleItemSelect = (category: string) => {
//     setSelectedCategory(category);
//   };

//   const handleItemDelete = (id: number) => {
//     setExpenses(expenses.filter((e) => e.id !== id));
//   };

//   const visibleExpenses =
//     selectedCategory === ""
//       ? expenses
//       : expenses.filter((e) => e.category === selectedCategory);
//   return (
//     <div>
//       <div className="mb-4">
//         <ExpenseForm
//           onItemAdd={(data) =>
//             setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
//           }
//         />
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter onItemSelect={handleItemSelect} />
//       </div>
//       <ExpenseList expenses={visibleExpenses} onItemDelete={handleItemDelete} />
//     </div>
//   );
// };

// export default App;

// import UserList from "./UserList";

const App = () => {
  return <UserList />;
};

export default App;
