type Props = {
    status: string
}

export default function CompilerResults(props:Props) {
    return (
        <div className="compiler-result">
            <textarea>
                { props.status || "Result" }
            </textarea>
        </div> 
    );
}