import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import Snackbar from '@vkontakte/vkui/dist/components/Snackbar/Snackbar';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import Icon24Error from '@vkontakte/icons/dist/24/error';

import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
// import Intro from './panels/Intro';


const ROUTES = {
	HOME: 'home'
	// INTRO: 'intro',
};

// const STORAGE_KEYS = {
// 	STATUS: 'viewStatusu',
// };

const App = () => {

	const [activePanel, setActivePanel] = useState(ROUTES.HOME);
	const [fetchedUser, setUser] = useState(null);
	const [snackbar, setSnackbar] = useState(null);
	const [popout, setPopout] = useState(null); //useState(<ScreenSpinner size='large' />);
	// const [userHasSeenIntro, setUserHasSeenIntro] = useState(true);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			// const storageData = await bridge.send('VKWebAppStorageGet', { keys: Object.values(STORAGE_KEYS)
			// });
			// const data = {};
			// storageData.keys.forEach(({ key, value }) => {
			// 	try {
			// 		data[key] = value ? JSON.parse(value) : {};
			// 		switch (key) {
			// 			case STORAGE_KEYS.STATUS:
			// 				if (data[key].hasSeenIntro){
			// 					setActivePanel(ROUTES.HOME);
			// 					setUserHasSeenIntro(true);
			// 				}
			// 				break;
			// 			default:
			// 				break;
			// 		}
			// 	} catch (error) {
			// 		setSnackbar(<Snackbar
			// 			layout='vertical'
			// 			onClose={() => setSnackbar(null)}
			// 			before={<Avatar size={24} style={{backgroundColor: 'var(--dynamic_red)'}}><Icon24Error fill='#fff' width={14} height={14} /></Avatar>}
			// 			duration={900}
			// 		>
			// 			Проблема с получением данных из Storage
			// 		</Snackbar>
			// 		)
			// 	}
			// })
				
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = panel => {
		setActivePanel(panel);
	};

	// const viewIntro = async (panel) => {
	// 	try {
	// 		await bridge.send('VKWebAppStorageSet', {
	// 			key: STORAGE_KEYS.STATUS,
	// 			value: JSON.stringify({
	// 				hasSeenIntro: true
	// 			})
	// 		});
	// 		console.log(panel)
	// 		go(panel);
	// 	} catch (error) {
	// 		setSnackbar(<Snackbar
	// 			layout='vertical'
	// 			onClose={() => setSnackbar(null)}
	// 			before={<Avatar size={24} style={{backgroundColor: 'var(--dynamic_red)'}}
	// 			><Icon24Error fill='#fff' width={14} height={14} /></Avatar>}
	// 			duration={900}
	// 		>
	// 			Проблема с отправкой данных в Storage
	// 		</Snackbar>)
			
	// 	}
	// }

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id={ROUTES.HOME} fetchedUser={fetchedUser} snackbarError={snackbar} />
		</View>
	);
}

export default App;