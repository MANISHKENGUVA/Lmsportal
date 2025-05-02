import './Footer.css'
import Button from "./../Buttons/index"
import DarkLogo from './../svg/LogoDark'
function Footer(){
    return(
        <>
            <div className='footer d-none d-lg-block'>
            <div className='d-flex justify-content-evenly'>
                <div className='firstSection'>
                    <div >
                        <DarkLogo Height={34} Width={115}></DarkLogo>
                    </div>
                    <div className='aboutCompany'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                </div>
                <div className='secondSection'>
                    <p className='company'>Company</p>
                    <div className='companythings'>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Contact U</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className='thirdSection'>
                    <p className='company'>Subscribe to our newsletter</p>
                    <p className='companythings'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className='Emialfield d-flex'>
                        <input type="email" className='inputfield' placeholder='Enter Your Mail' />
                        <div className='buttonfield'>
                            <Button  height='38' color='#fff' backgroundColor='#2563eb' radius='4px' label='Subscribe'></Button>
                        </div>
                    </div>
                </div>
            </div>
                <div className='copyrigth mt-2'>
                    <p className='text-center mt-3'>Copyright 2024 © Edemy. All Right Reserved.</p>
                </div>
            </div>
            <div className='footersm d-block d-lg-none'>
            <div className='d-flex justify-content-evenly flex-column align-items-center justify-content-center'>
                <div className='firstSectionsm'>
                    <div className='text-center'>
                        <DarkLogo Height={34} Width={115}></DarkLogo>
                    </div>
                    <div className='aboutCompany text-center'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                </div>
                <div className='secondSectionsm'>
                    <p className='company text-center'>Company</p>
                    <div className='companythingssm d-flex justify-content-evenly w-100'>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
                <div className='copyrigth mt-2'>
                    <p className='text-center mt-3'>Copyright 2024 © Edemy. All Right Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;