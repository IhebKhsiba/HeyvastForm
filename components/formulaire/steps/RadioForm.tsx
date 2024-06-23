// RadioForm.tsx
import { FC } from "react";
import { useController, UseFormReturn } from "react-hook-form";

interface RadioFormProps {
  form: UseFormReturn<any>;
  name: string;
  label: string | JSX.Element;
  a: string | JSX.Element;
  b: string | JSX.Element;
  c?: string | JSX.Element;
  d?: string | JSX.Element;
  e?: string | JSX.Element;
  f?: string | JSX.Element;
}

const RadioForm: FC<RadioFormProps> = ({
  form,
  name,
  label,
  a,
  b,
  c,
  d,
  e,
  f,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control: form.control,
  });

  return (
    <div className="mb-6">
    <label className="block text-lg font-medium text-gray-700 mb-2">{label}</label>
    <div className="flex flex-wrap gap-4">
        <label className="flex items-center">
          <input
            type="radio"
            {...field}
            value="First"
            checked={field.value === "First"}
            className="form-radio"
          />
          <span className="ml-2">{a}</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            {...field}
            value="Second"
            checked={field.value === "Second"}
            className="form-radio"
          />
          <span className="ml-2">{b}</span>
        </label>
        {c && (
          <label className="flex items-center">
            <input
              type="radio"
              {...field}
              value="Third"
              checked={field.value === "Third"}
              className="form-radio"
            />
            <span className="ml-2">{c}</span>
          </label>
        )}
        {d && (
          <label className="flex items-center">
            <input
              type="radio"
              {...field}
              value="Fourth"
              checked={field.value === "Fourth"}
              className="form-radio"
            />
            <span className="ml-2">{d}</span>
          </label>
        )}
        {e && (
          <label className="flex items-center">
            <input
              type="radio"
              {...field}
              value="Fifth"
              checked={field.value === "Fifth"}
              className="form-radio"
            />
            <span className="ml-2">{e}</span>
          </label>
        )}
        {f && (
          <label className="flex items-center">
            <input
              type="radio"
              {...field}
              value="Sixth"
              checked={field.value === "Sixth"}
              className="form-radio"
            />
            <span className="ml-2">{f}</span>
          </label>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default RadioForm;
