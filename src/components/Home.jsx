import './Home.css'
import {Footer} from "./Footer.jsx";
import {NavLink} from "react-router-dom";

export const Home = () => {

    return (

        <div className={'w-full h-full bg-black '}>
            <h2 className={'max-w-[1000px] text-white text-[150px] font-bold  mx-auto border-2 text-center'}>
            <NavLink to={'/Home.jsx'}>Cyber
                Punk</NavLink>
            </h2>

            <div className={'md:flex justify-between '}>
                <div className={'text-white max-w-[1000px] px-[150px] py-[40px]'}>
                    <h2 className={'text-3xl'}>Stories & Lore</h2>
                    <p className={'text-[14px w-[200px]'}>Dive into compelling narratives set in a dystopain future</p>
                </div>
                <div className={'text-white max-w-[1000px] px-[150px] py-[40px]'}>
                    <h2 className={'text-3xl'}>Events and Updates</h2>
                    <p className={'text-[14px w-[200px]'}>Explore the high-tech, low-life world where the lines between
                        humanity and machinery blur.</p>
                    <button
                        className={'py-2 my-2 cbutton transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 animate-bounce '}>Read
                        More
                    </button>
                </div>
            </div>

            <div
                className={'text-white max-w-[1500px] px-[150px] py-[40px] md:flex justify-center mx-auto gap-[150px] md:px-[120px]'}>

                <div className={'py-4'}>
                    <h2 className={'text-3xl text-amber-400 font-bold'}>76,285k+</h2>
                    <p>Experience the Future</p>
                    <p>Explore the high-tech, low-life world where the lines between</p>
                </div>

                <div className={'py-4'}>
                    <h2 className={'text-3xl'}>Art and Design</h2>
                    <p>Feast your eyes on stunning visuals and concept art that bring the cyberpunk</p>
                </div>

                <div>
                    <h2 className={'text-4xl font-bold text-amber-400'}>17+</h2>
                    <p>Years of Experiences</p>
                </div>

            </div>

            <section
                className={'text-white max-w-[1500px] px-[150px] py-[40px] md:flex items-center border-2 my-4 md:mx-auto'}>
                <div>
                    <h2 className={'text-4xl font-bold md:w-[400px]'}>Where <span
                        className={'text-amber-400'}>Neon Dreams <br/> & Digital</span> Nightmares Converge.</h2>
                    <p className={'md:w-[600px] py-4 text-justify'}>A realm where advanced technology meets dystopian
                        reality. Our website is your gateway to a
                        universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech,
                        low-life world where the lines between humanity and machinery blur.</p>
                    <div className={'flex gap-3 py-4'}>
                        <div>
                            <h2 className={'text-amber-400 text-2xl font-bold'}>89,2K+</h2>
                            <p>Discover the Future</p>
                        </div>
                        <div>
                            <h2 className={'text-amber-400 text-2xl font-bold'}>7001+</h2>
                            <p>Stories and Lore</p>
                        </div>
                        <div>
                            <h2 className={'text-amber-400 text-2xl font-bold'}>3,124+</h2>
                            <p>Art and Design</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className={'md:w-[500px] md:h-[500px] object-cover md:ml-[50px]'}
                         src={'src/assets/01.png'} alt={'Image'}/>
                </div>
            </section>
            <section
                className={'text-white max-w-[1500px] px-[150px] py-[40px] md:flex items-center justify-between border-2 mx-auto'}>

                <div>
                    <img className={'md:w-[500px] md:h-[600px] object-cover'}
                         src={'src/assets/02.png'} alt={'Image'}/>
                </div>

                <div>
                    <h2 className={'text-4xl font-bold md:w-[600px] '}>Where <span
                        className={'text-amber-400'}>the Secrets <br/> of the </span> Cybernetic Underworld</h2>
                    <p className={'md:w-[600px] py-4 text-justify'}>A realm where advanced technology meets dystopian
                        reality. Our website is your gateway to a
                        universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech,
                        low-life world where the lines between humanity and machinery blur.</p>
                    <div
                        className={'md:flex gap-3 py-4 h-[150px] w-[600px] bg-gradient-to-r from-cyan-500 to-blue-500   rounded-2xl outline outline-offset-2 outline-blue-500  items-center mx-auto justify-center'}>
                        <div className={'flex mx-auto justify-center'}>
                            <img className={'m-4 items-center '} src="" alt=""
                                 style={{height: '100px', width: '100px', background: 'gray'}}/>
                            <div className={' md:w-[60%]'}>
                                <h2 className={' text-2xl pb-4 py-2'}>Join the Revolution</h2>
                                <p className={'text-[15px] '}>Explore the high-tech, low-life world where the lines
                                    between humanity and machinery
                                    blur.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section
                className={'text-white max-w-[1500px] px-[150px] py-[40px] md:flex items-center border-2 my-4 md:mx-auto justify-between'}>
                <div>
                    <h2 className={'text-4xl font-bold md:w-[400px]'}>Greetings! Dive into the Cybernetic Universe</h2>
                    <p className={'md:w-[600px] py-4 text-justify'}>Our website is your gateway to a universe of neon
                        lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where
                        the lines between humanity and machinery blur.</p>
                </div>
                <div className={'flex gap-3 py-4 flex-col  w-[200px] mx-auto b'}>
                    <div>
                        <h2 className={'text-amber-400 text-2xl font-bold'}>89,2K+</h2>
                        <p>Discover the Future</p>
                    </div>
                    <div>
                        <h2 className={'text-amber-400 text-2xl font-bold'}>7001+</h2>
                        <p>Stories and Lore</p>
                    </div>
                    <div>
                        <h2 className={'text-amber-400 text-2xl font-bold'}>3,124+</h2>
                        <p>Art and Design</p>
                    </div>
                </div>

            </section>

            <section className={'max-w-[1500px] px-[150px] py-[40px] mx-auto'}>
                <div className={'text-white text-center '}>
                    <h2 className={'text-3xl font-bold '}>Dive into the Cybernetic</h2>
                    <h2 className={'text-3xl text-amber-400 font-bold'}>Universe</h2>
                    <p className={' text-center md:w-1/2 mx-auto py-[40px]'}>A realm where advanced technology meets
                        dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and
                        cybernetic enhancements. </p>
                </div>
                <div className={'text-white grid md:grid-cols-3 py-4'}>
                    <div>
                        <h2 className={'text-2xl font-light py-4'}>Discover the Future</h2>
                        <p>Explore the high-tech, low-life world where the lines between humanity </p>
                    </div>
                    <div>
                        <h2 className={'text-2xl font-light py-4'}>Discover the Future</h2>
                        <p>Explore the high-tech, low-life world where the lines between humanity </p>
                    </div>
                    <div>
                        <h2 className={'text-2xl font-light py-4'}>Discover the Future</h2>
                        <p>Explore the high-tech, low-life world where the lines between humanity </p>
                    </div>
                </div>
            </section>
            <section
                className={'text-white max-w-[1500px] px-[150px] py-[40px] md:flex items-center justify-between border-2 mx-auto'}>

                <div>
                    <img className={'md:w-[500px] md:h-[600px] object-cover'}
                         src={'src/assets/02.png'} alt={'Image'}/>
                </div>

                <div>
                    <h2 className={'text-4xl font-bold md:w-[600px] '}>Where <span
                        className={'text-amber-400'}>the Secrets <br/> of the </span> Cybernetic Underworld</h2>
                    <p className={'md:w-[600px] py-4 text-justify'}>A realm where advanced technology meets dystopian
                        reality. Our website is your gateway to a
                        universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech,
                        low-life world where the lines between humanity and machinery blur.</p>

                </div>
            </section>
            <section className={'max-w-[1500px] px-[150px] py-[40px] mx-auto'}>
                <div className={'text-white text-center '}>
                    <h2 className={'text-3xl font-bold '}>Frequently Asked </h2>
                    <h2 className={'text-3xl text-amber-400 font-bold'}>Questions</h2>
                    <p className={' text-center sm:w-1/2 mx-auto py-[40px]'}>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. </p>
                </div>
                <div className={'text-white grid sm:grid-cols-1 md:grid-cols-2  items-center mx-auto'}>

                    <div >
                        <h2 className={'text-2xl font-light py-4'}><span
                            className={'text-3xl text-amber-400 font-bold'}>01.</span> How
                            d I stay updated on new content and events?</h2>
                        <p className={'py-5'}>A realm where advanced technology meets dystopian reality. Our website is
                            your gateway....</p>
                        <hr className={'m-4'}/>
                    </div>
                    <div >
                        <h2 className={'text-2xl font-light py-4'}><span
                            className={'text-3xl text-amber-400 font-bold'}>02.</span> How
                            d I stay updated on new content and events?</h2>
                        <p className={'py-5'}>A realm where advanced technology meets dystopian reality. Our website is
                            your gateway....</p>
                        <hr className={'m-4'}/>
                    </div>
                    <div >
                        <h2 className={'text-2xl font-light py-4'}><span
                            className={'text-3xl text-amber-400 font-bold'}>03.</span> How
                            d I stay updated on new content and events?</h2>
                        <p className={'py-5'}>A realm where advanced technology meets dystopian reality. Our website is
                            your gateway....</p>
                        <hr className={'m-4'}/>
                    </div>
                    <div >
                        <h2 className={'text-2xl font-light py-4'}><span
                            className={'text-3xl text-amber-400 font-bold'}>04.</span> How
                            d I stay updated on new content and events?</h2>
                        <p className={'py-5'}>A realm where advanced technology meets dystopian reality. Our website is
                            your gateway....</p>
                        <hr className={'m-4'}/>
                    </div>





                </div>
            </section>
            <Footer />
        </div>
    )
}