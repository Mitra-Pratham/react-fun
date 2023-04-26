import Head from 'next/head'
import Header from './Header.js'
import Card from './Card.js'
import Toast from './Toast.js'
import Sidepanel from './Sidepanel.js'
import { primaryArray, secondaryArray, tertiaryArray } from '../data/data.js'
import { useState } from "react";



export default function Home() {

  const [contrastColor, updateColor] = useState('');
  function updateSidePanel(item) {
    updateColor(item);
  }

  return (
    <>
      <Head>
        <title>MDS Accessibility Checker</title>
        <meta name="description" content="MDS Accessibility Checker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container py-5'>
        <Header type='h1' name="Overview" />
        <p>Using this tool you can check which of the defined colors can be paired with other colors from the Mitratech Color System.</p>
        <p className='fw-bold'>Click on the icon next to the color name and it will open up a sidepanel with all the constrast safe colors compliant with WCAG 2.1</p>

        <Header type='h1 mt-4' name="Primary Palette" />
        <div className='bg-grey w-100 p-3 rounded'>
          <div className='row row-cols-1 row-cols-md-3 row-cols-md-4 g-3'>
            {primaryArray.map((item, index) => {
              return (
                <div className='col' key={index}>
                  <Header type="h4" name={item.name} />
                  {item.colors.map((el, index) => (
                    <Card key={index} colorName={el.name} hex={el.hex} rgb={el.rgb} updateSidePanel={updateSidePanel} />
                  )
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <Header type='h1 mt-4' name="Secondary Palette" />
        <div className='bg-grey w-100 p-3 rounded'>
          <div className='row row-cols-1 row-cols-md-3 row-cols-md-4 g-3'>
            {secondaryArray.map((item, index) => {
              return (
                <div className='col' key={index}>
                  <Header type="h4" name={item.name} />
                  {item.colors.map((el, index) => (
                    <Card key={index} colorName={el.name} hex={el.hex} rgb={el.rgb} updateSidePanel={updateSidePanel} />
                  )
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <Header type='h1 mt-4' name="Semantic Palette" />
        <div className='bg-grey w-100 p-3 rounded'>
          <div className='row row-cols-1 row-cols-md-3 row-cols-md-4 g-3'>
            {tertiaryArray.map((item, index) => {
              return (
                <div className='col' key={index}>
                  <Header type="h4" name={item.name} />
                  {item.colors.map((el, index) => (
                    <Card key={index} colorName={el.name} hex={el.hex} rgb={el.rgb} updateSidePanel={updateSidePanel} />
                  )
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Toast />
      <Sidepanel contrastColor={contrastColor} />
    </>
  )
}
