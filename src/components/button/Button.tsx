import "./Button.css"

type Props = {
    onClick: () => void;
    label?: string;
    variant?: string;
}

export default function Button({ onClick, label }: Props) {
    return (<button className="primaryButton" onClick={onClick}>{ label || 'Click me' }</button>);
}

// export default function Button(props: Props) {
//     return (<button>Click me</button>);
// }