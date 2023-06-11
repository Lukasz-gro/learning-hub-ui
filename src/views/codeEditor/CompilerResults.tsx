type Props = {
    status: string
}

export default function CompilerResults(props:Props) {
    return (
        <div className="compiler-result">
            <textarea readOnly>
                { props.status || "Result" }
            </textarea>
        </div> 
    );
}