import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList218192Navigator from '../features/ArticleList218192/navigator';
import ArticleList218190Navigator from '../features/ArticleList218190/navigator';
import ArticleList218189Navigator from '../features/ArticleList218189/navigator';
import UserProfile72641Navigator from '../features/UserProfile72641/navigator';
import Tutorial72640Navigator from '../features/Tutorial72640/navigator';
import NotificationList72612Navigator from '../features/NotificationList72612/navigator';
import Settings72611Navigator from '../features/Settings72611/navigator';
import Settings72603Navigator from '../features/Settings72603/navigator';
import UserProfile72601Navigator from '../features/UserProfile72601/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList218192: { screen: ArticleList218192Navigator },
ArticleList218190: { screen: ArticleList218190Navigator },
ArticleList218189: { screen: ArticleList218189Navigator },
UserProfile72641: { screen: UserProfile72641Navigator },
Tutorial72640: { screen: Tutorial72640Navigator },
NotificationList72612: { screen: NotificationList72612Navigator },
Settings72611: { screen: Settings72611Navigator },
Settings72603: { screen: Settings72603Navigator },
UserProfile72601: { screen: UserProfile72601Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
