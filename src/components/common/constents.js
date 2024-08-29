export const FONT_STYLE = {
  color: "#872ff7",
  fontSize: "17px",
  fontWeight: "500",
  padding: 0,
};

export const FONT_STYLE_SELECT = {
  placeholder: (provided) => ({
    ...provided,
    ...FONT_STYLE,
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: 10,
    boxShadow: "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    ...FONT_STYLE,
  }),
};

export const SELECT_CUSTOM_STYLES = {
  indicatorSeparator: () => ({
    display: "none", // This removes the separator
  }),
  // This targets the dropdown icon (caret) container
  dropdownIndicator: (provided) => ({
    ...provided,
    border: "none", // Remove the border
    padding: "0px", // Optionally adjust padding
  }),
  // Optional: You can also remove the border from the control if needed
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
  }),
};

// ! ------- Constwnt vairabl of objects --------------------- ! //

export const partsSearchOptions = [
  { label: "Part Number", value: "partNumber" },
  { label: "Description", value: "partDescription" },
  { label: "Model", value: "model" },
];
