import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> platform
          </h1>
          <p>
          Stay organized and boost your job search efficiency with Jobster. Track applications, set follow-up reminders, and manage all your job hunting activities in one place. Our user-friendly interface ensures you never miss an opportunity, keeping you ahead in your career journey. With real-time updates and personalized job suggestions, Jobster is your ultimate job search companion.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login | Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
