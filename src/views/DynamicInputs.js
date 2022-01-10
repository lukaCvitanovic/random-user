import { useState } from "react";

const CustomInputs = ({ value, onChange, onDelete }) => {
    const handleChange = (e) => onChange(e.target.value);
    const handleDelete = () => onDelete();

    return (
        <div>
            <input className="mr-4 border border-gray-400" value={value} onChange={handleChange} />
            <button onClick={handleDelete}>
                X
            </button>
        </div>
    );
};

const DynamicInputs = () => {
    const [inputs, setInputs] = useState([]);
    const [id, setId] = useState(0);
    
    const addInput = () => {
        setInputs((oldInputs) => [ ...oldInputs, { value: '', id } ]);
        setId(id + 1);
    };
    const removeInput = (id) => setInputs((oldInputs) => oldInputs.filter(({ id: inputId }) => inputId !== id));
    const updateInput = ({ value: newValue, id }) => setInputs((oldInputs) => oldInputs.map((oldInput) => (oldInput.id === id ? { value: newValue, id } : oldInput )));

    return (
        <div className="flex flex-col p-6">
            <span>Dynamic inputs example</span>
            <div className="grid grid-cols-1 grid-y-4">
                {
                    inputs.map(({ value, id }) => {
                        return (
                            <CustomInputs
                                value={value}
                                key={id}
                                onDelete={() => removeInput(id)}
                                onChange={(updatedValue) => updateInput({ value: updatedValue, id })}
                            />
                        );
                    })
                }
            </div>
            <button className="mt-4 w-max border border-gray-400 w-10" onClick={addInput}>
                +
            </button>
        </div>
    );
};

export default DynamicInputs;
;