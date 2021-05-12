import React from 'react'
import './style.css';
import BaazarImage from "../../images/logo/Baazar.png";

/**
* @author
* @function AboutPage
**/

const AboutPage = (props) => {
    return (
        <div className='aboutpage' >
            <div style={{
                padding: '10px'

            }}>
                {/* <div style={{
                    padding: '10px',
                    border: '1px solid #333',
                    borderRadius: '10px'
                }}
                >
                    About Page
                </div> */}

                <div style={{
                    padding: '10px',
                    border: '1px solid #333',
                    borderRadius: '10px'
                }}
                >
                    <div>
                        <div className='flexRow'>
                            <img src={BaazarImage} style={{
                                width: '100px',
                                height: '100px'
                            }} alt='' />
                            <div style={{
                                padding: '24px',
                                fontSize: '20px'
                            }}>
                                <div><samp> Baazar </samp></div>
                                <div><samp> V2.2.3 </samp></div>
                            </div>
                        </div>
                        <div style={{
                            padding: '10px',
                            fontSize: '14px'
                        }}>
                            <p>Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions. Ecommerce is often used to refer to the sale of physical products online, but it can also describe any kind of commercial transaction that is facilitated through the internet. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search. </p>
                        </div>
                        <div>
                            <samp style={{
                                padding: '10px',

                            }}>
                                Developer :
                            </samp>
                            <div style={{
                                padding: '10px',
                                border: '1px solid #333',
                                borderRadius: '10px',
                                margin: '10px 0'
                            }}
                            >
                                <div>
                                    <div className='flexRow'>
                                        <img src="https://lh3.googleusercontent.com/-a73p5WyrYCI/X2sAq3uSoPI/AAAAAAAAAC0/1Qo3yR7oH7U3DSdxcRv17RucUBmQB5f3ACEwYBhgLKtQDAL1OcqxpzZcJkyg5z6-zRUAOKVJCjsKdWXO2FhgywzYt6RZBJkSJue-FNcxL9v4iwqnWWwWSY6wDeeH9PlMjiSOSH6T7N6AuMDbkeAV7sgvfpTGMHq6gzJCzARSFYqwPl13JweCDKNHdD0EIKfwVkZ1KyFVJy8f82m-znnLjKTIoQnQGpSL-YynbI4oGkPpJuQGCKD47QapRYu2KpGIOMhbp7h9gfG11c6uc_GtnYOVju2CsW8WYvhASVzlMuogFfcQe-pWrlEROUlVdgn42Hu8sCEX5yYflogqNJiju02sz1TNyM2tt1REMWvw0ym3rxJ84LOsvAN0OUPMcwPuDpBOwUt4vSye_urwqyNfxssFXihIGExaCofIL8u6CqV73vMEe8ZaCnjJ3RlAeDkKjX7hc3Z3KN9xPhLt-8LZK8UXGwh5mMlAl05n5Li88Nr8ehEupIxifdirFYspkl4En1lEbGWMOyWth4VEGflM_ovvnHrEZ4lKGW5rMLwRLh4w2T-KkDH8lFXnoI6jRD-OfaXJ5E-H_yDIxFeEu7BjtW0hqovpN2dosH8F81I5Lr_oTrwEHaZJSMLfL-urhmhgPuAPjM8uiw-4k_nSCjitYN5kLlI-ZMJWS7oQG/w140-h140-p/2020-09-23.jpg" style={{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '50%'
                                        }} alt='' />
                                        <div style={{
                                            padding: '24px',
                                            fontSize: '20px'
                                        }}>
                                            <p>Mayur Kamble</p>
                                        </div>
                                    </div>
                                    <div style={{
                                        padding: '10px',
                                        fontSize: '14px'
                                    }}>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Name </td>
                                                <td>:</td>
                                                    <td>Mayur Kamble</td>
                                                </tr>
                                                <tr>
                                                <td>EmailID </td>
                                                <td>:</td>
                                                    <td>cse.mkamble@gmail.com</td>
                                                </tr>
                                                <tr>
                                                    <td>Role </td>
                                                    <td>:</td>
                                                    <td>Full-Stack Developer</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default AboutPage