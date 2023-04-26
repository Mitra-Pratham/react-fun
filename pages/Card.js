import CopyButton from './CopyButton';
import AccessibilityButton from './AccessibilityButton';
import Header from './Header';

export default function Card(props) {
    return (
        <div className='card px-3 py-2 mb-2'>
            <div className='d-flex mb-1'>
            <Header type="h6 mb-0" name={props.colorName} />
            {props.updateSidePanel ? <AccessibilityButton name={props.colorName} hex={props.hex} rgb={props.rgb} updateSidePanel={props.updateSidePanel} /> : ''}
            </div>
            <div className="d-flex flex-direction-row align-items-center">
            <input readOnly className="border-0 rounded" type="color" id="head" name={props.colorName} value={props.hex} style={{ height: '3em', width: '3em', background:'transparent'}}/>
                <div className="ms-3 w-75">
                    <div className='card-text d-flex align-items-center'>
                        {props.hex}
                        <CopyButton text={props.hex} />
                    </div>
                    <div className='card-text d-flex align-items-center'>
                        {props.rgb}
                        <CopyButton text={props.rgb} />
                    </div>
                </div>

            </div>
        </div>
    )
}