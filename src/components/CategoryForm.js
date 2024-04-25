import Input from "./Input";

export default function CategoryForm({ selectedCategory, onInputChange }) {
  return (
    <>
      <div className="tw-font-bold tw-flex tw-flex-col">
        <label>Name</label>
        <Input
          name="name"
          type="text"
          placeholder="Category Name"
          value={selectedCategory?.name || ""}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label className="tw-font-bold tw-flex tw-flex-col">
          New Image File
        </label>
        <Input
          name="imageFile"
          type="file"
          onChange={onInputChange}
          style="tw-border-gray-300 tw-py-2 tw-px-3 file:tw-mr-4 file:tw-py-2 file:tw-px-4 file:tw-rounded-lg file:tw-border-0 file:tw-text-white file:tw-bg-blue-500 file:tw-cursor-pointer file:hover:tw-bg-blue-600"
        />
      </div>
    </>
  );
}
