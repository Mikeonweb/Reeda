"use client";

import { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";

const SearchFormReset = () => {
  useEffect(() => {
    const input = document.querySelector(".search-input") as HTMLInputElement;
    const resetBtn = document.querySelector(".reset-btn") as HTMLButtonElement;

    if (!input || !resetBtn) return;

    // Initialize visibility based on data attribute
    const initialValue = input.dataset.initialValue;
    resetBtn.style.display = initialValue ? "block" : "none";

    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      resetBtn.style.display = target.value ? "block" : "none";
    };

    input.addEventListener("input", handleInput);

    return () => {
      input.removeEventListener("input", handleInput);
    };
  }, []);

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    const input = document.querySelector(".search-input") as HTMLInputElement;
    if (input) {
      input.value = "";
      input.focus();
      // Trigger visibility update
      const event = new Event("input", { bubbles: true });
      input.dispatchEvent(event);
    }
  };

  return (
    <button
      type="button"
      onClick={handleReset}
      className="reset-btn absolute right-2 top-1/2 -translate-y-1/2"
      style={{ display: "none" }}
    >
      <MdOutlineCancel className="text-lg text-black hover:text-gray-800" />
    </button>
  );
};

export default SearchFormReset;
