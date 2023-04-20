// import './App.css';
// import Insite from './Insite';
// import Carrer_ from './Carrer_';
// import Slide from './Slide';
// import Information from './Information';
// import InsiteBar2 from './InsiteBar2';
import Nav from './Nav';
import Footer from './Footer';
import Modal from './Modal';

import './App_chae.css';
import Chae_slide from './Chae_slide';
import Chae_Match from './Chae_Match';
import Chae_Banner from './Chae_Banner';
import Chae_Company from './Chae_Company';
import Chae_Position from './Chae_Position';

function App() {
    return (
        <div className='wrapper'>
            <Nav/>

            <Modal/>

            {/* main */}
            {/* <Slide></Slide>
                     
            <Insite></Insite>

            <InsiteBar2/>

            <Carrer_></Carrer_>

            <Information /> */}

            {/* <Footer></Footer> */}

            {/* index 채용 */}

            <Chae_slide/>
            
            <Chae_Match/>

            <Chae_Banner/>

            <Chae_Company/>

            <Chae_Position/>

            {/* main2 상세 */}




            <Footer/>

        </div>
    );
}

export default App;