import { useParams } from 'react-router-dom';


const WorkDetails = (props) => {

    let {id} = useParams();
    let data = props.data;

    return (

      <article>

        <section className="detail__visual">
            <img src={data[id].visualImg} alt="이미지" />
        </section>
        <section className="detail__contents"> 

            <div className="detail__info ">
                <div className="detail__info__title">
                    <h3>{data[id].title}</h3>
                    <span className="detail__info__skill">{data[id].skill}</span>
                </div>
                <div className="detail__info__btn">
                    <a href={data[id].webLink}><i className="fa-solid fa-link"></i> SITE</a>
                    <a href={data[id].gitLink}><i className="fa-brands fa-github"></i> GITHUB</a>
                </div>
            </div>
            <div className="detail__contents__img">
                <img src={data[id].detailImg} alt="" />
            </div>
            <div className="detail__contents__text">
                <h4>OVERWIEW.</h4>
                <p>{data[id].overviewText}</p>
            </div>
            <div className="detail__contents__text">
                <h4>Work Info.</h4>
                <ul>
                    <li>
                        <strong>프로젝트 기간</strong> <span>{data[id].period}</span> 
                    </li>
                    <li>
                        <strong>제작 영역</strong> <span>{data[id].area}</span> 
                    </li>
                </ul>
            </div>
        </section>


      </article>
    
    );
};

export default WorkDetails;