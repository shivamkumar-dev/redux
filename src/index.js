import configureStore from './store/configureStore';
import { bugAdded, bugRemoved, bugResolved } from './store/bugs';
import { projectAdded } from './store/projects';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log('Store Changed: ', store.getState());
});
store.dispatch(projectAdded({ name: 'Project 1' }));
store.dispatch(bugAdded({ description: 'Bug 1' }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 1 }));

unsubscribe();
