import Header from './Header';
import Card from './Card';
import { primaryArray, secondaryArray, tertiaryArray } from '../data/data.js'
import ColorContrastChecker from 'color-contrast-checker';

const ccc = new ColorContrastChecker();

export default function Sidepanel(props) {

    function CloseAccessibilityMenu() {

        const ContrastMenu = document.getElementById('ContrastMenu');
        ContrastMenu.classList.remove('show');
    }

    function createSidePanelItems(selectedItem) {
        return (
            <div className='container'>
                <Header type="h4" name="Selected Color" />
                <Card colorName={selectedItem.name} hex={selectedItem.hex} rgb={selectedItem.rgb} />
                <Header type="h6" name="This color's contrast pairs well with the below" />
                <Header type='h3 mt-2' name="Primary Palette" />
                <div className='bg-secondary-subtle w-100 p-3 rounded'>
                    <div className='row row-cols-1 g-3'>
                        {primaryArray.map((item, index) => {
                            return (
                                <div className='col' key={index}>
                                    <Header type="h4" name={item.name} />
                                    {item.colors.map((el, index) => {
                                        if ((ccc.isLevelAA(selectedItem.hex, el.hex, 14)) || (ccc.isLevelAA(el.hex, selectedItem.hex, 14))) {
                                            return (
                                                <Card key={index} colorName={el.name} hex={el.hex} rgb={el.rgb} accessible={true} selectedHex={selectedItem.hex} />
                                            )
                                        }
                                    }
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Header type='h3 mt-4' name="Secondary Palette" />
                <div className='bg-secondary-subtle w-100 p-3 rounded'>
                    <div className='row row-cols-1 g-3'>
                        {secondaryArray.map((item, index) => {
                            return (
                                <div className='col' key={index}>
                                    <Header type="h4" name={item.name} />
                                    {item.colors.map((el, index) => {
                                        if ((ccc.isLevelAA(selectedItem.hex, el.hex, 14)) || (ccc.isLevelAA(el.hex, selectedItem.hex, 14))) {
                                            return (
                                                <Card key={index} colorName={el.name} hex={el.hex} rgb={el.rgb} accessible={true} selectedHex={selectedItem.hex} />
                                            )
                                        }
                                    }
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Header type='h3 mt-4' name="Semantic Palette" />
                <div className='bg-secondary-subtle w-100 p-3 rounded'>
                    <div className='row row-cols-1 g-3'>
                        {tertiaryArray.map((item, index) => {
                            return (
                                <div className='col' key={index}>
                                    <Header type="h4" name={item.name} />
                                    {item.colors.map((el, index) => {
                                        if ((ccc.isLevelAA(selectedItem.hex, el.hex, 14)) || (ccc.isLevelAA(el.hex, selectedItem.hex, 14))) {
                                            return (
                                                <Card key={index} colorName={el.name} hex={el.hex} rgb={el.rgb} accessible={true} selectedHex={selectedItem.hex} />
                                            )
                                        }
                                    }
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id='ContrastMenu' className="sidepanel collapse border-start bg-body">
            <div class="d-flex align-items-center justify-content-between px-3 pt-3 pb-2 border-bottom">
                <Header type="h4 mb-0" name="Contrast Pairing Options" />
                <button class="btn btn-sm btn-new" onClick={() => CloseAccessibilityMenu()}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="sidepanel-scroll">
                {props.contrastColor ? createSidePanelItems(props.contrastColor) : ''}
            </div>
        </div>
    );
}

