export default function FAQItem(props){
    return (
        <div>
            <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">{props.question}</summary>
                <span className="px-4 py-2 indent-0" style={{ whiteSpace: 'break-spaces' }}>{props.answer}</span>
            </details>
        </div>
    );
}