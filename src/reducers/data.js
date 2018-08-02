import { RECEIVE_API_DATA } from '../actions';
import Image from './models/image';
import Immutable from 'immutable';

const initialState = new Immutable.Map();

const mergeEntities = (state, newImages) => {
    let imagesUnmapped = [];
    if(newImages.photos) {
        imagesUnmapped = newImages.photos.photo;
    }
    const newList = imagesUnmapped.map((image) => new Image(image));
    const oldList = state.get('photos') ? state.get('photos') : [];
    console.log(newList);
    // Do sorting here
    const sortedList = [...oldList, ...newList];
    const newState = state.set('photos', sortedList);
    console.log('newstate');
    console.log(newState);
    return newState
}

export default (state = initialState, {type , data }) => {
    switch(type) {
        case RECEIVE_API_DATA:
            if (!data) { return state }
            return mergeEntities(state, data);
        default:
            return state
    }
}