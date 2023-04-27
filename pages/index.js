import Head from 'next/head'
import Header from './Header.js'
import Card from './Card.js'
import Toast from './Toast.js'
import Sidepanel from './Sidepanel.js'
import { primaryArray, secondaryArray, tertiaryArray } from '../data/data.js'
import { useState, useEffect } from "react";
import Script from 'next/script'



export default function Home() {

  const [contrastColor, updateColor] = useState('');
  function updateSidePanel(item) {
    updateColor(item);
  }


  const setTheme = function (theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  useEffect(() => {
    // Perform localStorage action
    // const storedTheme = localStorage.getItem('theme')
    // const getPreferredTheme = () => {
    //   if (storedTheme) {
    //     return storedTheme
    //   }
    //   return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    // }
    setTheme('dark')
  }, [])



  return (
    <>
      <Head>
        <title>MDS Accessibility Checker</title>
        <meta name="description" content="MDS Accessibility Checker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href='#'>MDS Accessibility Checker</a>
          <div class="d-flex" role="search">
            <div class="dropdown">
              <button class="btn btn-sm btn-new dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-palette fs-6 me-3"></i>Change Light/Dark
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item" href="#" onClick={() => setTheme('light') }><i className="fa-solid fa-sun fs-6 me-3"></i>Light Mode</button></li>
                <li><button class="dropdown-item" onClick={() => setTheme('dark')}><i className="fa-solid fa-moon fs-6 me-3"></i>Dark Mode</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className='container py-5'>
        <Header type='h1' name="MDS Accessibility Checker" />
        <p>Using this tool you can check which of the defined colors can be paired with other colors from the Mitratech Color System.</p>
        <p className='fw-bold'>Click on the icon next to the color name and it will open up a sidepanel with all the constrast safe colors compliant with WCAG 2.1</p>

        <Header type='h1 mt-4' name="Primary Palette" />
        <div className='bg-secondary-subtle w-100 p-3 rounded'>
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
        <div className='bg-secondary-subtle w-100 p-3 rounded'>
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
        <div className='bg-secondary-subtle w-100 p-3 rounded'>
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
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous" />
    </>
  )
}
