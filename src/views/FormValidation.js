import { useForm } from "react-hook-form";

const FormValidation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    const validate = {
        has4InIt: (value) => value.search('4') !== -1 || 'Input needs to have 4 in it'
    };

    return (
        <div className="flex flex-col p-4">
            <span>Form validation page</span>
            <form
                className="flex flex-col w-72"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex justify-between w-full">
                    <label className="shrink-0" htmlFor="b-input">Basic validation</label>
                    <div className="flex flex-col">
                        <input
                            id="b-input"
                            defaultValue="default value"
                            placeholder="placeholder"
                            className="border boreder-gray-300"
                            {...register("basicInput", { required: true, maxLength: { value: 15, message: 'Basic input can have max 15 characters' } })}
                        />
                        {errors.basicInput && <span className="text-xs text-red-400">{errors.basicInput.message}</span>}
                    </div>
                </div>
                <div className="flex justify-between w-full">
                    <label className="shrink-0" htmlFor="b-input">Custom validation</label>
                    <div className="flex flex-col">
                        <input
                            id="b-input"
                            defaultValue="default value"
                            placeholder="placeholder"
                            className="border boreder-gray-300"
                            {...register("customValidation", { validate })}
                        />
                        {errors.customValidation && <span className="text-xs text-red-400">{errors.customValidation.message}</span>}
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-2 border border-gray-400 w-20"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormValidation;

// Validation example
// Validation error example
// Custom validation example
// Example of validation deppending on other inputs
