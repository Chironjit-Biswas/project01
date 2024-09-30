export const Footer =()=>{

    return (
       <div className={'h-auto'}>
        <div
            className={'max-w-[1000px] h-auto text-white grid md:grid-cols-2 lg:grid-cols-5  items-center mx-[180px] my-[50px] lg:mx-auto '}>
            <div className={'md:col-span-2 mb-8'}>
                <h2 className={'text-2xl'}>Cyber.AI - Cyber Punk Website</h2>
                <p>Explore the high-tech, low-life world where the lines between humanity </p>
            </div>

            <div className={'mb-8'}>
                <h2 className={'text-2xl'}>Information</h2>
                <ul>
                    <li>Press Centre</li>
                    <li>Our Blog</li>
                    <li>Term and Condition</li>
                </ul>
            </div>

            <div className={'mb-8'}>
                <h2 className={'text-2xl'}>Menu</h2>
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className={'mb-8'}>
                <h2 className={'text-2xl'}>Contact</h2>
                <ul>
                    <li>Phone : 017XX-XXXXXX</li>
                    <li>Email: gamil.com</li>
                    <li>Address: Bangladesh</li>
                </ul>
            </div>

        </div>
    <h2 className={'text-center text-amber-400 '}>Cyber.AI - Cyber Punk 2024. All rights reserved.</h2>
       </div>
           )
};