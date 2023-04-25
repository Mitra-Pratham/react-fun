export default function Header(props){
    return (
        <div className={`${props.type} py-2`}>{props.name}</div>
        );
}