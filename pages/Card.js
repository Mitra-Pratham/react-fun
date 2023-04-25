import CopyButton from './CopyButton';

export default function Card(props) {
    return (
        <div className='card px-3 py-2 mb-2'>
            <h6 className="mb-2">{props.colorName}</h6>
            <div className="d-flex flex-direction-row align-items-center">
                <div className="rounded border" style={{ height: '3em', width: '3em', background: props.hex }}>
                </div>
                <div className="ms-3 w-75">
                    <div className='card-text d-flex align-items-center justify-content-between'>
                        {props.hex}
                        <CopyButton text={props.hex} />
                    </div>
                    <div className='card-text d-flex align-items-center justify-content-between'>
                        {props.rgb}
                        <CopyButton text={props.rgb} />
                    </div>
                </div>

            </div>
        </div>
    )
}