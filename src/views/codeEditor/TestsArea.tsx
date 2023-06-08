type Props = {
    status: string
}

export default function TestsArea(props:Props) {
    return (
        <div className="tests-area">
            <textarea placeholder="Write your test here!">
                {/* { props.status || "Result" } */}
            </textarea>
      </div> 
    );
}