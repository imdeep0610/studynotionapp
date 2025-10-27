import {toast} from 'react-hot-toast';
import { apiConnector } from '../apiConnector';
import { settingsEndpoints } from '../api';
import {setUser} from '../../slices/profileSlice';
import {logout} from './authAPI';

const  {
   UPDATE_DISPLAY_PICTURE_API,

}=settingsEndpoints;