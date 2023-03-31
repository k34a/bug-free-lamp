import { useRef, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from 'next/router';
import { isValidPhoneNumber } from 'react-phone-number-input'
import { titleCase, validateEmail } from "@/lib/commonFrontEndFns";
import TextField from "./FormComponents/TextField";
import EmailField from "./FormComponents/EmailField";
import PhoneField from "./FormComponents/PhoneField";
import BooleanField from "./FormComponents/BooleanField";
import BigtextField from "./FormComponents/BigtextField";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const SurveyForm = (props) => {
    const formItems = props.formData.properties || {};
    const requiredItems = props.formData.required || [];

    const defaultFormData = {

    };
    Object.keys(formItems).forEach(property => {
        defaultFormData[property] = "";
        if (property.type === 'boolean') {
            defaultFormData[property] = property.default || false;
        }
    });
    
    const router = useRouter();
    const [formData, setFormData] = useState(defaultFormData);
    const [token, setToken] = useState("");
    const hcaptchaRef = useRef();
    
    const [loading, setloading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(0);
    const [invalidFormFields, setInvalidFormFields] = useState({});
    const [error, setError] = useState("");
    
    async function handleSubmit(e){
        e.preventDefault();
        setloading(true);
        setIsSubmitted(0); 
        setInvalidFormFields({});
        setError("");
        
        const submittedData = {...formData};
        const invalidFieldsInSubmittedData = {}
        Object.keys(formItems).forEach(fieldName => {
            const fieldVal = submittedData[fieldName];
            const fieldType = formItems[fieldName].type || "text";
            if (fieldVal === undefined){
                submittedData[fieldName] = ""
            }
            if (fieldType === "email"){
                if (fieldVal && !validateEmail(fieldVal)){
                    invalidFieldsInSubmittedData[fieldName] = true
                }
            }
            else if (fieldType === "phone") {
                if (fieldVal && !isValidPhoneNumber(fieldVal)) {
                    invalidFieldsInSubmittedData[fieldName] = true
                }
            }
            else if (fieldType === "boolean") {
                submittedData[fieldName] = fieldVal? "Yes": "No";
            }
        })
        
        if (token && invalidFieldsInSubmittedData && Object.keys(invalidFieldsInSubmittedData).length === 0){
            console.log("Submitted")
            const response = await fetch("/api/submitsurvey", {
                method: "POST",
                body: JSON.stringify({ ...submittedData, token, notionDB: props.notionDB}),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            hcaptchaRef.current.resetCaptcha();
            setToken("");
            if (!response.ok) {
                setError("Unable to save your response. Please try again later.")
                setIsSubmitted(-1);
            }
            else {
                setIsSubmitted(1);
                setFormData(defaultFormData);
                router.push('/thankyou');
            }
        }
        else if(!token) {
            setError("Please verify the captcha.")
        }
        else {
            setError("Some fields above are invalid. Please correct them and re-submit.")
        }
        setInvalidFormFields(invalidFieldsInSubmittedData)
        setloading(false);
    }

    const updateField = (name, val, makeTitleCase = false) => {
        if (makeTitleCase) {
            val = titleCase(val);
        }
        setFormData({
            ...formData,
            [name]: val
        });
    }

    const InputMapping = {
        text: TextField,
        email: EmailField,
        phone: PhoneField,
        boolean: BooleanField,
        bigtext: BigtextField
    }
    
    const formItemQuestions = Object.keys(formItems);
    const formElements = (
        <div>
        {
            formItemQuestions.map((question, index) => {
                const labelText = formItems[question].label || "";
                let fieldType = formItems[question].type || "text";
                const fieldPlaceholder = formItems[question].placeholder || "";
                const makeTitleCase = formItems[question].titleCase || false;
                const asterisk = requiredItems.includes(question)? "*": "";
                const fullLabel = labelText + " " + asterisk;
                const label = (
                    <label className="block tracking-wide text-gray-700 font-bold mb-2" htmlFor={question}>
                        {fullLabel}
                    </label>
                );
                let InputComponent = InputMapping[fieldType];
                
                return (
                    <div className="flex flex-wrap -mx-3 mb-6" key={index}>
                        <div className="w-full px-3">
                            {label}
                            <InputComponent 
                                name={question}
                                required={requiredItems.includes(question)}
                                placeholder={fieldPlaceholder}
                                value={formData[question]}
                                onValueChange={updateField}
                                isInvalid={Object.keys(invalidFormFields).includes(question)}
                                makeTitleCase={makeTitleCase}
                            />
                        </div>
                    </div>
                )
            })
        }
        </div>
    );

    return (
        <>
            <div
                style={{
                    backgroundImage: `url('${props.bgImage}')`
                }} 
                className={`w-full shadow h-48 sm:h-56 bg-cover bg-center`}
            ></div>
            <div className="w-11/12 sm:w-9/12 lg:w-7/12 my-12 m-auto">
                <h1 className="text-2xl mb-6 font-black">{props.formData.title}</h1>
                <p className="text-lg mb-6">{props.formData.description}</p>
                <form onSubmit={handleSubmit}>
                    {formElements}
                    <HCaptcha
                        ref={hcaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                        onVerify={token => setToken(token)}
                        onExpire={e => setToken("")}
                    />
                    <div className="my-6 md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button 
                                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed"
                                type="submit"
                                disabled={loading}
                            >
                                {props.doneButtonText || "Done!"}
                            </button>
                        </div>
                        {loading && <ThreeDots color={'rgb(45 212 191)'} loading={loading} size={100} />}
                        <div className="md:w-2/3"></div>
                    </div>
                    {error && <p className="text-red-500 italic my-6">{error}</p>}
                    {isSubmitted === 1 && <p className="text-green-500 italic my-6">Your response is saved.</p>}
                </form>
            </div>
        </>
    );
};

export default SurveyForm;