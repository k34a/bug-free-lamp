import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'

function PhoneField(props) {
    const name = props.name;
    const required = props.required || false;
    const placeholder = props.placeholder || '';
    const value = props.value;
    const onValueChange = props.onValueChange;
    const isInvalid = props.isInvalid || false;
    return (
        <div>
            <PhoneInput
                name={name}
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={(value) => onValueChange(name, value)}
            />
            <>{isInvalid && <p className="text-red-500 text-xs italic">Please enter a valid phone number.</p>}</>
        </div>
    )
}

export default PhoneField
