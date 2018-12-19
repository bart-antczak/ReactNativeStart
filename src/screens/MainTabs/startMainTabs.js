import { Navigation } from "react-native-navigation";

import Icon from 'react-native-vector-icons/Ionicons';



const startTabs = () => {
    Promise.all([
        Icon.getImageSource('md-map', 30),
        Icon.getImageSource('ios-share-alt', 30)
    ]).then(sources => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [{
                        stack: {
                            children: [{
                                component: {
                                    name: 'ReactNativeStart.FindScreen'
                                }
                            }],
                            options: {
                                topBar: {
                                    title: {
                                        text: 'Find'
                                    }
                                },
                                bottomTab: {
                                    text: 'Find Place',
                                    icon: sources[0],
                                    testID: 'FIRST_TAB_BAR_BUTTON'
                                }
                            }
                        }
                    },
                        {
                            stack: {
                                children: [{
                                    component: {
                                        name: 'ReactNativeStart.ShareScreen'
                                    }
                                }],
                                options: {
                                    topBar: {
                                        title: {
                                            text: 'Share'
                                        }
                                    },
                                    bottomTab: {
                                        text: 'Share Place',
                                        icon: sources[1],
                                        testID: 'FIRST_TAB_BAR_BUTTON'
                                    }
                                }
                            }

                        }]
                }
            }
        });
    });
};

export default startTabs;