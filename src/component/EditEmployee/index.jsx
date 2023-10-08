
import Title from '../title';
import EditEmployeeStyled from './style';

const EditEmployee = ({setIsShowButton}) => {
  return (
    <EditEmployeeStyled>
        <div className='blur'></div>
        <div>
            <Title content={" Edit Employee"}/>
        </div>
        <form className='form'>
            <input type="text" name="role" placeholder='Role*' autoComplete='off'/>
            <input type="text" name="fullName" placeholder='Full Name*' autoComplete='off' />
            <input type="text" name="email" placeholder='Email' autoComplete='off'/>
            <input type="text" name="address" placeholder='Address' autoComplete='off'/>
            <input type="text" name="avatarSrc" placeholder='Avatar URL' autoComplete='off'/>
        </form>
        <div className='action-button'>
        <button>Edit</button>
        <button onClick={()=> setIsShowButton(false) }>Cancel</button>
        </div>
        
    </EditEmployeeStyled>
  )
}

export default EditEmployee;