import { useContext, useEffect } from 'react';
import { GetInforContext } from '../../contexts/GetInformationContext';
import '../../styles/portfolio/portfolio.scss'

const Portfolio = () => {

  const {myInfor, getMyInfor} = useContext(GetInforContext)

  useEffect(() => {
    getMyInfor();
    // eslint-disable-next-line
  }, []);
  
  return (
    <div className="portfolio" id="portfolio">
      
      {myInfor.map((item, index) => (
        <div className="container" key={index}>
          <div className="section-title h2 text-center mb-8">
            <h2 className="mb-0">About Me</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 d-lg-block">
              <img className="img-fluid w-100 rounded" src={item.url} alt="" />
            </div>
            <div className="col-lg-8">
              <h3>{item.name}</h3>
              <p className="mb-4">{item.job}</p>
              <p className="mb-5">{item.intent}</p>
              <div className="row mb-8">
                <div className="col-md-6 mb-5 mb-md-0">
                  <h4 className="mb-4">Học Vấn</h4>
                  <p className="h5">Chuyên ngành: {item.majors}</p>
                  <p>{item.university}</p>

                  <h4 className="mb-4">Câu nói yêu thích</h4>
                  <p>
                    Cuộc sống này thực sự đơn giản, nhưng chúng ta luôn làm nó
                    trở nên phức tạp
                  </p>
                </div>
                <div className="col-md-6">
                  <h4 className="mb-4">Sở Thích</h4>
                  <p>{item.interest1}</p>
                  <p>{item.interest2}</p>
                  <p>{item.interest3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio