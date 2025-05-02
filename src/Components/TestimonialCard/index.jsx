import './index.css'
import UserLogo from '../svg/UserIcon'
import StarLogo from '../svg/Star'

function index({rating,name,role,description}) {
    return (
        <>
            <div className="maincard border m-4">
                <div className='cardUpperPart d-flex align-items-center p-3'>
                    <div className='d-flex align-items-center'>
                        <div className='usericon'>
                            <UserLogo></UserLogo>
                        </div>
                        <div className='d-flex flex-column ps-3'>
                            <p className='username p-0 m-0'>{name}</p>
                            <p className='userrole p-0 m-0 pt-2'>{role}</p>
                        </div>
                    </div>
                </div>
                <div className='cardLowerPart p-3'>
                    <div className='d-flex ratingstars'>
                    {[...Array(rating)].map((_, index) => (
                        <div key={index} className={`m-0 ${index !== 0 ? 'ps-2' : ''}`}>
                            <StarLogo Height={20}/>
                        </div>
                        ))}
                    </div>
                    <div className='review mt-2'>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
