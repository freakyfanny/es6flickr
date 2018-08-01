import Immutable from 'immutable';

const farmUrl = 'https://farm';
const staticFlickrUrl = '.staticflickr.com/';

const ImageRecord = Immutable.Record({
  id: null,
  owner: '',
  secret: '',
  server: '',
  farm: null,
  title: '',
})

class Image extends ImageRecord {
    getTitle() {
        return this.get('title') || 'image has no title';
    }


    getUrl() {
        return farmUrl + this.farm + staticFlickrUrl +
        this.server + '/' + this.id + '_' + this.secret + '.jpg';
    }
}

export default Image;