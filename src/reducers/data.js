import { RECEIVE_API_DATA } from '../actions';
import Image from './models/image';
import Immutable from 'immutable';

const initialState = new Immutable.OrderedMap();

const mergeEntities = (state, newImages) => {
    // console.log(newImages.photo.map((image) => new Image(image)));
    let list = newImages.photo.map((image) => new Image(image));
    state.merge(newImages.photo.map((image) => new Image(image)));
    const photos = new Immutable.OrderedMap(list.map(key => [key, list[key]]))
    console.log('merge');
    // console.log(photos);
    state = { ...state, photos};
    //state.merge(photos);
    console.log(state);
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