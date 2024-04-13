import "./UserWidget.css"
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';
import UserWidgetDropdown from './UserWidgetDropdown/UserWidgetDropdown';


const UserWidget = () => {
    
    
   

    return (
        <div className='UserWidget' >
            <div>
                <Icon path={mdiAccountCircle} size={1.5} />
            </div>
             <UserWidgetDropdown />
        </div>
    )
}

export default UserWidget