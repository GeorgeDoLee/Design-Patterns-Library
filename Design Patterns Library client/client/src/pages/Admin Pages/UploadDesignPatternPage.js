import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import MainLayout from '../../components/Main Layout/MainLayout';
import useFetch from '../../hooks/useFetch';
import { postDesignPattern } from '../../services/apiServices';

const steps = [
    { title: 'Basic Info', fields: ['name', 'alsoKnownAs', 'classificationId', 'intent'] },
    { title: 'Motivation & Applicability', fields: ['motivation', 'applicability'] },
    { title: 'Structure & Participants', fields: ['structure', 'participants'] },
    { title: 'Details', fields: ['collaborations', 'consequences', 'implementation'] },
    { title: 'Extras', fields: ['sampleCode', 'knownUses'] },
];

const StepContent = ({
    fields,
    control,
    errors,
    classifications,
    isClassificationsLoading,
    classificationsError,
}) => (
    <div className="flex flex-col gap-5">
        {fields.map((field) => (
            <div key={field} className="flex flex-col gap-2">
                <label className="font-medium capitalize text-primaryText">{field}</label>
                {field === 'classificationId' ? (
                    isClassificationsLoading ? (
                        <div className="p-2 text-primaryText">Loading classifications...</div>
                    ) : classificationsError ? (
                        <div className="p-2 text-red-500">
                            Failed to load classifications.
                        </div>
                    ) : classifications ? (
                        <Controller
                            name={field}
                            control={control}
                            rules={{ required: 'Classification is required' }}
                            render={({ field: inputProps }) => (
                                <select
                                    {...inputProps}
                                    className="p-2 border rounded-md border-primaryText text-primaryText focus:outline-none focus:ring-2 focus:ring-primaryText"
                                >
                                    <option value="">Select a classification</option>
                                    {classifications.map((classification) => (
                                        <option key={classification.id} value={classification.id}>
                                            {classification.name}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                    ) : null
                ) : (
                    <Controller
                        name={field}
                        control={control}
                        rules={{ required: `${field} is required` }}
                        render={({ field: inputProps }) =>
                            field === 'name' || field === 'alsoKnownAs' ? (
                                <input
                                    {...inputProps}
                                    type="text"
                                    className="p-2 border rounded-md border-primaryText text-primaryText focus:outline-none focus:ring-2 focus:ring-primaryText"
                                />
                            ) : (
                                <textarea
                                    {...inputProps}
                                    rows={4}
                                    className="p-2 border rounded-md resize-none border-primaryText text-primaryText focus:outline-none focus:ring-2 focus:ring-primaryText"
                                />
                            )
                        }
                    />
                )}
                {errors[field] && <span className="text-red-500">{errors[field].message}</span>}
            </div>
        ))}
    </div>
);

const NavigationButtons = ({ step, stepsLength, nextStep, prevStep }) => (
    <div className="flex justify-end gap-3">
        <button
            type="button"
            onClick={prevStep}
            disabled={step === 0}
            className={`px-4 py-2 rounded-md bg-gray-300 text-primaryText ${
                step === 0 ? 'cursor-not-allowed' : ''
            }`}
        >
            Previous
        </button>
        {step < stepsLength - 1 ? (
            <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 text-white rounded-md bg-accent"
            >
                Next
            </button>
        ) : (
            <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded-md">
                Submit
            </button>
        )}
    </div>
);

const UploadDesignPatternPage = () => {
    const [step, setStep] = useState(0);
    const { data: classifications, isLoading: isClassificationsLoading, error: classificationsError } = useFetch('/Classification');
    const { control, handleSubmit, trigger, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            classificationId: '',
            intent: '',
            alsoKnownAs: '',
            motivation: '',
            applicability: '',
            structure: '',
            participants: '',
            collaborations: '',
            consequences: '',
            implementation: '',
            sampleCode: '',
            knownUses: '',
        },
    });

    const currentStep = steps[step];

    const onSubmit = async (data) => {
        try {
            const response = await postDesignPattern(data);
            console.log('Final Data:', data);
            alert('Design Pattern Uploaded Successfully!');
        } catch (error) {
            console.error('Error uploading design pattern:', error.message);
        }
    };

    const nextStep = async () => {
        const isValid = await trigger(currentStep.fields);
        if (isValid) {
            setStep((prev) => Math.min(prev + 1, steps.length - 1));
        }
    };

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

    return (
        <MainLayout>
            <div className="p-10">
                <h1 className="mb-5 text-2xl font-semibold text-primaryText">Upload Design Pattern</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <h2 className="text-xl font-semibold text-primaryText">{currentStep.title}</h2>
                    <StepContent
                        fields={currentStep.fields}
                        control={control}
                        errors={errors}
                        classifications={classifications}
                        isClassificationsLoading={isClassificationsLoading}
                        classificationsError={classificationsError}
                    />
                    <NavigationButtons
                        step={step}
                        stepsLength={steps.length}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                </form>
            </div>
        </MainLayout>
    );
};

export default UploadDesignPatternPage;
