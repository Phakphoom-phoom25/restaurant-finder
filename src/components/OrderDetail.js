import { useNavigate } from 'react-router-dom';
import {DivOrderDetail, ButtonPrimary, ContentOrderDetail, GroupCardImg, GroupCardImg2} from './Style';
import data from './data.json'; //นำเข้าข้อมูล

const Detail = () => {
  const navigate = useNavigate();
  const url = window.location.href;
  const splitUrl = url.split("/");
  const idOrder = splitUrl[splitUrl.length - 1];
  const filterDataById = data?.filter((itemFiter)=> itemFiter.id === Number(idOrder));

  console.log('filterDataById', filterDataById);
  const renderBodyLabel = (data) => {
    if(data.time_close === "closed"){
        return `${data?.day}: Closed <br/>`
    } else {
        return `${data?.day}: ${data?.time_open} AM - ${data?.time_close} PM <br/>`
    }
  }

  const operationTimeHTML = filterDataById[0]?.operation_time?.map((item) => renderBodyLabel(item)).join('');


  return (
    <DivOrderDetail>
      <ButtonPrimary onClick={()=> {navigate(-1)}}>{`< Back`}</ButtonPrimary>
      <ContentOrderDetail >
        <GroupCardImg>
            <img src={filterDataById[0].profile_image_url} style={{width: '100%', height: '380px', borderRadius: '14px 14px 0px 0px', objectFit: 'cover'}}/>
            <div className='group-header'>
                <p className='text-order '>{filterDataById[0].name}</p>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    <div className='dod'/>
                    <p style={{color: '#134B8A', margin: 0}}>{filterDataById[0].rating}</p>
                </div>
            </div>
            <div className='address'>
                <p className='head-lable'>Address :</p>
                <p className='body-lable'>{filterDataById[0]?.address}</p>
            </div>
            <div className='opening-hour'>
                <p className='head-lable'>Opening Hour :</p>
                <div className='body-label' dangerouslySetInnerHTML={{ __html: operationTimeHTML }} />
            </div>

        </GroupCardImg>
        <GroupCardImg2>
            <p>Images</p>
            <img src={filterDataById[0].images[0]} style={{width: '100%',height: '380px', borderRadius: '14px 14px 0px 0px'}}/>
            <img src={filterDataById[0].images[1]} style={{width: '100%',height: '380px',}}/>
            <img src={filterDataById[0].images[2]} style={{width: '100%',height: '380px', borderRadius: '0px 0px 14px 14px'}}/>
        </GroupCardImg2>
      </ContentOrderDetail>
    </DivOrderDetail>
  );
};

export default Detail;
