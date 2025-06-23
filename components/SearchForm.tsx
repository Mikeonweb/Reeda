// app/components/SearchForm.tsx (Server Component)
import Form from "next/form";
import { CiSearch } from "react-icons/ci";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <div className="search-form-container">
      <Form
        action="/"
        scroll={false}
        className="flex justify-between items-center bg-blue-200 mt-2 border-5 rounded-xl gap-2 border-slate-900 p-2"
      >
        <div className="relative flex-grow">
          <input
            name="query"
            defaultValue={query || ""}
            placeholder="Search..."
            className="search-input w-full bg-blue-200 text-black outline-0 py-2 pl-2 pr-8 rounded-xl border-5 border-slate-900"
            data-initial-value={query || ""}
          />
          <SearchFormReset />
        </div>
        <button type="submit" className="search-btn">
          <CiSearch className="text-xl" />
        </button>
      </Form>
    </div>
  );
};

export default SearchForm;
