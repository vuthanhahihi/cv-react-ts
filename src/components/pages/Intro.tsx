import '../../styles/intro/intro.scss'
import { ArrowDropDownCircleOutlined } from "@material-ui/icons";
import { useContext, useEffect } from 'react';
import { GetInforContext } from '../../contexts/GetInformationContext';
import { Link } from 'react-router-dom';

const Intro = () => {
  const {myInfor, getMyInfor} = useContext(GetInforContext)

  useEffect(() => {
    getMyInfor();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-fluid" id="intro">
      {myInfor.map((item, index) => (
          <div className="row" key={index}>
          <div className="col-md-6 imgContainer">
              <img  src={item.url} alt="" />
          </div>
          <div className="col-md-6 wrapper">
            <h2>Xin chào, mình là</h2>
              <span >
                <h1>{item.name}</h1>
                <h3>{item.job}</h3>
              </span>
            <Link to="about">
              <ArrowDropDownCircleOutlined className="icon" />
            </Link>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default Intro;
