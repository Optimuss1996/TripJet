import { useSearchParams } from "react-router";
import { hotelRating, tourFilters } from "@/utils/tourFilters";
import { IoClose } from "react-icons/io5";

export default function SelectedFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const allFilters = [...tourFilters, hotelRating];
  const selectedFilters: { id: string; label: string }[] = [];

  // looking active filters
  allFilters.forEach((filter) => {
    const value = searchParams.get(filter.id);
    if (value) {
      const option = filter.options.find((opt) => opt.value === value);
      if (option) {
        selectedFilters.push({ id: filter.id, label: option.label });
      }
    }
  });

  const handleRemove = (id: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete(id);
    setSearchParams(newParams, { replace: true });
  };

  if (selectedFilters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {selectedFilters.map((filter) => (
        <div
          key={filter.id}
          className="flex items-center gap-1 bg-primary-100 text-primary px-3 py-2 rounded-full text-labelSm"
        >
          <span>{filter.label}</span>
          <button onClick={() => handleRemove(filter.id)}>
            <IoClose size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
