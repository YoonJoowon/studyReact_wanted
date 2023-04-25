import Nav from './containers/Nav';
import Footer from './containers/Footer';

import './css/App.css';
// import Insite from './containers/Insite';
// import Carrer from './containers/Carrer';
// import Slide from './containers/Slide';
// import Information from './containers/Information';
// import InsiteBar2 from './containers/InsiteBar2';

// import './css/App_chae.css'
// import Chaeslide from './containersChaeyong/Chaeslide';
// import ChaeMatch from './containersChaeyong/ChaeMatch';
// import ChaeBanner from './containersChaeyong/ChaeBanner';
// import ChaeCompany from './containersChaeyong/ChaeCompany';
// import ChaePosition from './containersChaeyong/ChaePosition';

import './css/App_Sang.css';
import Sang from './containersSangse/Sang';

function App() {
    return (
        <div className='wrapper'>
            <Nav/>

            {/* main */}
            {/* <Slide></Slide>
            <Insite></Insite>
            <InsiteBar2/>
            <Carrer/>
            <Information /> */}

            {/* index 채용 */}
            {/* <Chaeslide/>            
            <ChaeMatch/>
            <ChaeBanner/>
            <ChaeCompany/>
            <ChaePosition/> */}

            {/* main2 상세 */}
            <Sang/>

            
            <Footer/>

        </div>
    );
}

export default App;