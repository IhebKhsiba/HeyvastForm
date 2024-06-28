// components/formulaire/steps/SpecialRadioForm.tsx
import { FC } from "react";
import { UseFormReturn, useController } from "react-hook-form";

interface SpecialRadioFormProps {
  form: UseFormReturn<any>;
  name: string;
  label: string | JSX.Element;
  a: string | JSX.Element;
  b: string | JSX.Element;
}

const SpecialRadioForm: FC<SpecialRadioFormProps> = ({ form, name, label, a, b }) => {
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
          <input type="radio" {...form.register(name)} value="Verte" className="form-radio mr-2" />
          {a}
        </label>
        <label className="flex items-center">
          <input type="radio" {...form.register(name)} value="Grise" checked={field.value === "Grise"} className="form-radio mr-2" />
          {b}
        </label>
      </div>
    </div>
  );
};

export default SpecialRadioForm;
